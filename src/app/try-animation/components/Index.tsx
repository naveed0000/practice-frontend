'use client'; 

import React from "react";
import CryptoPriceCard from "./CryptoPriceCard";
import { Box } from "@mui/material";
import SimpleCard from "./SimpleCard";
import GptCard from "./Gpt";

export default function Index() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: 'primary.main'
      }}
    >
      <SimpleCard />
      <GptCard />
    </Box>
  );
}
