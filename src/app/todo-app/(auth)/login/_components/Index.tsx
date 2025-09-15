"use client";

import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SimpleTextField from "@/app/resume-form/GlobalComponent/SimpleTextField";
import { loginUserAction } from "@/app/actions/Todo";

// ✅ Validation schema
const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("✅ Login Data:", data);
    // 🔗 Call your API here
    const res = await loginUserAction(data);
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
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleTextField  control={control} inputlabel="Username" name="username"  fullWidth />

            <SimpleTextField  control={control} inputlabel="user password" name="password" fullWidth  />
            {/* Email */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, borderRadius: 2 }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
