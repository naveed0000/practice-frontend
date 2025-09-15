"use client";

import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SimpleTextField from "@/app/resume-form/GlobalComponent/SimpleTextField";
import registerUserAction from "@/app/actions/Todo";

// ✅ Validation schema
const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["ADMIN", "USER"]),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

const roles: RegisterFormData["role"][] = ["ADMIN", "USER"];

export default function Index() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "USER",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log("✅ Submitted Data:", data);
    // 🔗 Call your API here
    const  res = await registerUserAction(data); 
    console.log('res: ', res);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f4f6f8"
    >
      <Card sx={{ maxWidth: 400, width: "100%", p: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom textAlign="center">
            Register
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username */}
            <SimpleTextField  control={control} inputlabel="Username" name="username" fullWidth  />
            <SimpleTextField  control={control} inputlabel="user email" name="email"  fullWidth/>
            <SimpleTextField  control={control} inputlabel="user password" name="password" fullWidth  />

            {/* Role */}
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label="Role"
                  margin="normal"
                  error={!!errors.role}
                  helperText={errors.role?.message}
                >
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, borderRadius: 2 }}
            >
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
