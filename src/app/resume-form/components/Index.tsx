'use client'; 

import { Box, Typography } from "@mui/material";
import React from "react";
import ResumeForm from "./ResumeForm";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export default function Index() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
      >
        Resume Form
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ResumeForm />
      </LocalizationProvider>
    </Box>
  );
}
