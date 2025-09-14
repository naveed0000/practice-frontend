import { Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Resume App", // 👈 tab title
  description: "Create and manage your resumes easily",
  icons: {
    icon: "/file.svg", // 👈 put your favicon here (from public/)
  },
};
export default function Home() {
  return (
    <>
      <Typography>Home</Typography>
    </>
  );
}
