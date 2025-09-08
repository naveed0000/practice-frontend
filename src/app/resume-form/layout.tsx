import { Box } from "@mui/material";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <Box>{children}</Box>;
}
