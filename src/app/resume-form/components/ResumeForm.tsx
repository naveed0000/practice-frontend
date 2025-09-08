"use client";

import { Button, Grid, InputLabel, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import resumeSchema, { resumeSchemaType } from "./resumeSchema";

export default function ResumeForm() {
  const {
    handleSubmit,
    register,
    unregister,
    formState: { errors },
    getFieldState,
    clearErrors,
    watch,
  } = useForm({
    defaultValues: {
      candidateName: "",
      candidateEmail: "",
      candidatePhone: "",
      careerObjective: "",
    },
    resolver: zodResolver(resumeSchema),
    mode: "onChange",
  });

  // useEffect(() => {
  //   register("candidateName");
  // }, [register]);

  console.log(errors, "errors");
  console.log(watch());
  console.log(getFieldState("candidateName"), "getFieldState");

  const onSubmit = (data: resumeSchemaType) => {
    console.log(data);
  };
  return (
    <Grid
      container
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      spacing={2}
      sx={{ padding: "20px" }}
    >
      <Grid size={4}>
        <InputLabel
          htmlFor="candidateName"
          sx={{
            fontSize: "16px",
            color: "common.black",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          Candidate Name
        </InputLabel>
        <TextField
          {...register("candidateName")}
          name="candidateName"
          fullWidth
          id="candidateName"
          label=""
          error={!!errors.candidateName}
          helperText={errors.candidateName?.message}
          variant="outlined"
          size="small"
          placeholder="Enter Candidate Name"
        />
      </Grid>
      <Grid size={4}>
        <InputLabel
          htmlFor="candidateEmail"
          sx={{ fontSize: "16px", color: "common.black", fontWeight: "bold" }}
        >
          Candiate Email
        </InputLabel>
        <TextField
          {...register("candidateEmail")}
          fullWidth
          name="candidateEmail"
          id="candidateEmail"
          label=""
          error={!!errors.candidateEmail}
          helperText={errors.candidateEmail?.message}
          variant="outlined"
          size="small"
          placeholder="Enter Candidate Email"
        />
      </Grid>
      <Grid size={4}>
        <InputLabel
          htmlFor="candidatePhone"
          sx={{ fontSize: "16px", color: "common.black", fontWeight: "bold" }}
        >
          Candidate Phone number
        </InputLabel>
        <TextField
          {...register("candidatePhone")}
          fullWidth
          error={!!errors.candidatePhone}
          helperText={errors.candidatePhone?.message}
          name="candidatePhone"
          id="candidatePhone"
          label=""
          variant="outlined"
          size="small"
          placeholder="Enter Candidate Phone"
        />
      </Grid>

      <Grid size={12}>
        <InputLabel
          htmlFor="careerObjective"
          sx={{ fontSize: "16px", color: "common.black", fontWeight: "bold" }}
        >
          Career Objective
        </InputLabel>
        <TextField
          {...register("careerObjective")}
          name="careerObjective"
          fullWidth
          id="careerObjective"
          label=""
          error={!!errors.careerObjective}
          helperText={errors.careerObjective?.message}
          variant="outlined"
          size="small"
          multiline
          rows={4}
          placeholder="Enter Career Objective"
        />
      </Grid>

      <Grid size={12} justifyItems={"center"} textAlign={"center"}>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: 250 }}
          >
          Submit
        </Button>
        <Button
          onClick={() => unregister("candidateName")}
          // onClick={() => clearErrors()}
          variant="contained"
          sx={{ width: 250 }}
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  );
}
