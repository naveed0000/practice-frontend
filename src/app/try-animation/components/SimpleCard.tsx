import { Box, Card, Typography } from "@mui/material";
import React from "react";
import CryptoPriceCard from "./CryptoPriceCard";
import { motion } from "framer-motion";

// Motion Box wrapper
const MotionBox = motion(Box);

export default function SimpleCard() {
  return (
    <Card sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          height: 200,
          width: 300,
        }}
      >
        <MotionBox
          whileHover={{
            x: -200, // slide effect
          }}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 200,
            damping: 16,
            duration: 3,
          }}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 16,
          }}
        >
          <Typography variant="h2" sx={{ color: "red" }}>
            one
          </Typography>
          <Typography variant="h2" sx={{ color: "red" }}>
            two
          </Typography>
          <Typography variant="h2" sx={{ color: "red" }}>
            three
          </Typography>
        </MotionBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 2,
          height: 200,
          width: 100,
        }}
      >
        <MotionBox
          whileHover={{
            x: 300, // slide effect
          }}
          transition={{
            type: "tween",
            mass: 3,
            stiffness: 120,
            damping: 100,

          }}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 16,
            height: "fit-content",
          }}
        >
          <Typography variant="h2" sx={{ color: "red" }}>
            1
          </Typography>
          <Typography variant="h2" sx={{ color: "red" }}>
            2
          </Typography>
          <Typography variant="h2" sx={{ color: "red" }}>
            3
          </Typography>
        </MotionBox>
      </Box>
    </Card>
  );
}
