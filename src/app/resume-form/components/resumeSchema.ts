import dayjs from "dayjs";
import { z } from "zod";

const workExperienceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  description: z.string().min(1, "Description is required"),
});

const educationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
});

const resumeSchema = z.object({
  candidateName: z.string().min(3, "Name must be at least 3 characters"),
  candidateEmail: z.string().min(3, "Email must be at least 3 characters"),
  candidatePhone: z.string().min(3, "Phone must be at least 3 characters"),
  careerObjective: z
    .string()
    .min(3, "Career Objective must be at least 3 characters"),
  workExperience: z.array(workExperienceSchema),
  // education: z.array(educationSchema),
});

export type resumeSchemaType = z.infer<typeof resumeSchema>;
export type workExperienceSchemaType = z.infer<typeof workExperienceSchema>;
// export type educationSchemaType = z.infer<typeof educationSchema>;

export default resumeSchema;
