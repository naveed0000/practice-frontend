'use client'; 

import { Box, Typography } from "@mui/material";
import React from "react";
import ResumeForm from "./ResumeForm";

export default function Index() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
      >
        Resume Form
      </Typography>
      <ResumeForm />
    </Box>
  );
}
