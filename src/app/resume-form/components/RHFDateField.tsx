"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { DateField, DateFieldProps } from "@mui/x-date-pickers/DateField";
import dayjs, { Dayjs } from "dayjs";
import React from "react";

export type DateFieldRHFProps<T extends FieldValues> = Omit<
  DateFieldProps, // ✅ pass Dayjs as the date type
  "value" | "onChange" | "defaultValue" // ❌ override what we’ll control with RHF
> & {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  minDate?: Dayjs;
};
function RHFDateField<T extends FieldValues>({
  control,
  name,
  ...rest
}: DateFieldRHFProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <DateField
            {...rest}
            value={field.value ? dayjs(field.value) : null}
            onChange={(newValue: Dayjs | null | undefined) => {
                console.log('newValue: ', newValue);
              if (!newValue || !newValue.isValid?.()) {
                field.onChange(null); // safe for nullable string
              } else {
                field.onChange(newValue.toISOString());
              }
            }}
            slotProps={{
              textField: {
                error: !!fieldState.error,
                helperText: fieldState.error?.message,
              },
            }}
          />
        );
      }}
    />
  );
}

export default RHFDateField;
