import { Box, Card, Typography } from "@mui/material";
import React from "react";
import CryptoPriceCard from "./CryptoPriceCard";
import { motion } from "framer-motion";

// Motion Box wrapper
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function GptCard() {
  return (
    <Card sx={{ p: 2 }}>
      {/* First row - words */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 4,
          height: 200,
          width: 300,
        }}
      >
        {["one", "two", "three"].map((word) => (
          <MotionTypography
            key={word}
            variant="h2"
            sx={{ color: "red" }}
            whileHover={{ x: 50 }} // slide right
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 200,
              damping: 16,
            }}
          >
            {word}
          </MotionTypography>
        ))}
      </Box>

      {/* Second row - numbers */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 4,
          height: 200,
          width: 300,
        }}
      >
        {["1", "2", "3"].map((num) => (
          <MotionTypography
            key={num}
            variant="h2"
            sx={{ color: "red" }}
            whileHover={{ x: -50 }} // slide left
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 200,
              damping: 12,
            }}
          >
            {num}
          </MotionTypography>
        ))}
      </Box>
    </Card>
  );
}
