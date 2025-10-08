'use client';
import React, { useState } from "react";
import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

// ✅ Country configuration map
const phonePatterns: Record<
  string,
  { countryCode: string; nationalRegex: RegExp; example: string }
> = {
  SA: { countryCode: "966", nationalRegex: /^5\d{8}$/, example: "5xxxxxxxx" }, // Saudi Arabia
  AF: { countryCode: "93", nationalRegex: /^[73]\d{7}$/, example: "7xxxxxxxx" }, // Afghanistan
  AL: { countryCode: "355", nationalRegex: /^[67]\d{8}$/, example: "6xxxxxxxx" }, // Albania
  DZ: { countryCode: "213", nationalRegex: /^5\d{8}$/, example: "5xxxxxxxx" }, // Algeria
  IN: { countryCode: "91", nationalRegex: /^[6-9]\d{9}$/, example: "9xxxxxxxxx" }, // India
  AE: { countryCode: "971", nationalRegex: /^(50|52|54|55|56|58)\d{6}$/, example: "50xxxxxx" }, // UAE
  US: { countryCode: "1", nationalRegex: /^[2-9]\d{9}$/, example: "2025550123" }, // USA
};

// ✅ Zod schema combining libphonenumber-js + regex
const phoneSchema = z
  .object({
    phone: z.string().min(6).max(20),
    country: z.string().length(2).toUpperCase(),
  })
  .superRefine((data, ctx) => {
    const pattern = phonePatterns[data.country];
    if (!pattern) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Unsupported country: ${data.country}`,
      });
      return;
    }

    const phoneNumber = parsePhoneNumberFromString(data.phone, data.country as any);
    if (!phoneNumber) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid phone number format",
      });
      return;
    }

    if (!phoneNumber.isValid()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Not a valid number for this country",
      });
      return;
    }

    const nationalNumber = phoneNumber.nationalNumber;
    if (!pattern.nationalRegex.test(nationalNumber)) {
      console.log('nationalNumber: ', nationalNumber);
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Invalid ${data.country} format. Expected: ${pattern.example}`,
      });
    }
  });

// ✅ Component
const Index: React.FC = () => {
  const [country, setCountry] = useState("SA");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleValidate = () => {
    const result = phoneSchema.safeParse({ phone, country });

    if (result.success) {
      setSuccess(`✅ Valid number (${country})`);
      setError(null);
    } else {
      setError(result.error?.issues[0].message);
      setSuccess(null);
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: 400,
        margin: "2rem auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#fafafa",
      }}
    >
      <h2 style={{ textAlign: "center" }}>🌍 Phone Number Validator</h2>

      <label style={{ display: "block", marginTop: "1rem" }}>Country</label>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginTop: "0.5rem",
          borderRadius: "6px",
        }}
      >
        {Object.keys(phonePatterns).map((key) => (
          <option key={key} value={key}>
            {key} (+{phonePatterns[key].countryCode})
          </option>
        ))}
      </select>

      <label style={{ display: "block", marginTop: "1rem" }}>Phone Number</label>
      <input
        type="text"
        placeholder="e.g. +966501234567"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginTop: "0.5rem",
          borderRadius: "6px",
        }}
      />

      <button
        onClick={handleValidate}
        style={{
          marginTop: "1rem",
          width: "100%",
          padding: "0.6rem",
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Validate
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "1rem", fontWeight: 500 }}>
          ❌ {error}
        </p>
      )}
      {success && (
        <p style={{ color: "green", marginTop: "1rem", fontWeight: 500 }}>
          {success}
        </p>
      )}
    </div>
  );
};

export default Index;
