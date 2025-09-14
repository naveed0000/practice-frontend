import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import resumeSchema from "./resumeSchema";

export default function ResumeFormProvider() {
  const methods = useForm({
    defaultValues: {
      candidateEmail: "",
      candidateName: "",
      candidatePhone: "",
      careerObjective: "",
      workExperience: [
        { company: "", title: "", description: "", startDate: "", endDate: "" },
      ],
    },
    resolver: zodResolver(resumeSchema),
  });

  return (
    <FormProvider {...methods}>
      <div>ResumeFormProvider</div>
    </FormProvider>
  );
}
