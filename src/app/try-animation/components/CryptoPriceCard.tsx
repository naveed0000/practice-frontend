import React from "react";
import { Box, Typography, SvgIcon, SvgIconProps } from "@mui/material";

// EthereumIcon component with proper typing
const EthereumIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M11.95 3.264L6 12.01l5.95 8.746L18 12.01zM12 2L5 13l7 8 7-8z" />
    {/* Simplified path, replace with actual ETH icon SVG */}
  </SvgIcon>
);

const CryptoPriceCard: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(to right, #4a00e0, #8e2de2)", // Correct gradient property
        borderRadius: "50px",
        padding: "15px 30px",
        color: "white",
        fontFamily: "Roboto, sans-serif",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        minWidth: "300px",
        maxWidth: "300px",
      }}
    >
      <EthereumIcon sx={{ fontSize: 40, marginRight: 2 }} />

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
          2.45 USD
        </Typography>
        <Typography variant="body2" component="div" sx={{ opacity: 0.8 }}>
          Prices as of today
        </Typography>
      </Box>
    </Box>
  );
};

export default CryptoPriceCard;
