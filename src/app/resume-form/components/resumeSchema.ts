import { z } from "zod";

const workExperienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  startDate: z.string().nullable(),
  endDate: z.string(),
  description: z.string(),
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
    careerObjective: z.string().min(3, "Career Objective must be at least 3 characters"),
    workExperience: z.array(workExperienceSchema),
    // education: z.array(educationSchema),
  });

export type resumeSchemaType = z.infer<typeof resumeSchema>;
export type workExperienceSchemaType = z.infer<typeof workExperienceSchema>;
// export type educationSchemaType = z.infer<typeof educationSchema>;

export default resumeSchema;
