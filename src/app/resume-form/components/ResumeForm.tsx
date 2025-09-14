"use client";
import { DevTool } from "@hookform/devtools";
import {
  Button,
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import resumeSchema, {
  resumeSchemaType,
  workExperienceSchemaType,
} from "./resumeSchema";
import SimpleTextField from "../GlobalComponent/SimpleTextField";
import {
  CalendarIcon,
  DateField,
  DatePicker,
  DateTimePicker,
} from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import RHFDateTimePicker from "./RHFDateTimePicker";
import RHFDateField from "./RHFDateField";
export default function ResumeForm() {
  const [openDate, setOpenDate] = useState<boolean>(false);
  // const [date, setDate] = React.useState<Dayjs | null>(dayjs()); // default today
  const {
    handleSubmit,
    register,
    unregister,
    formState: { errors },
    getFieldState,
    setValue,
    trigger,
    watch,
    control,
  } = useForm<resumeSchemaType>({
    defaultValues: {
      candidateName: "",
      candidateEmail: "",
      candidatePhone: "",
      careerObjective: "",
      workExperience: [
        {
          company: "",
          title: "",
          description: "",
          startDate: "",
          endDate: "",
        },
      ],
    },
    resolver: zodResolver(resumeSchema),
  });
  const { fields, append, remove } = useFieldArray<resumeSchemaType>({
    name: "workExperience",
    control,
  });

  // console.log("fields: ", fields);

  // useEffect(() => {
  //   register("candidateName");
  // }, [register]);

  // console.log(errors, "errors");
  // console.log("watch form values ", watch("workExperience.0.endDate"));
  // console.log(getFieldState("candidateName"), "getFieldState");

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
        <SimpleTextField
          control={control}
          name="candidateName"
          sx={{ width: 1 }}
          variant="outlined"
          inputlabel="candidate Name"
        />
      </Grid>
      <Grid size={4}>
        <SimpleTextField
          control={control}
          name="candidateEmail"
          sx={{ width: 1 }}
          variant="outlined"
          inputlabel="candidate Email"
        />
      </Grid>
      <Grid size={4}>
        <SimpleTextField
          control={control}
          name="candidatePhone"
          sx={{ width: 1 }}
          variant="outlined"
          inputlabel="candidate Phone"
        />
      </Grid>

      <Grid size={12}>
        <SimpleTextField
          control={control}
          name="careerObjective"
          sx={{ width: 1 }}
          variant="outlined"
          inputlabel="Career Objective"
          multiline
          rows={4}
        />
      </Grid>
      <Grid size={6}>
        <Typography variant="h6">Work Experience</Typography>
      </Grid>
      <Grid size={3}>
        <Button
          onClick={() =>
            append({
              company: "",
              description: "",
              title: "",
              endDate: "",
              startDate: "",
            })
          }
          variant="contained"
          sx={{ width: 250 }}
        >
          add new WorkExperience
        </Button>
      </Grid>
      <Grid size={3}>
        <Button
          onClick={() => remove(fields.length - 1)}
          variant="contained"
          sx={{ width: 250 }}
        >
          remove WorkExperience
        </Button>
      </Grid>
      
      {fields.map((field, index) => {
        console.log('fieldasdad: ', field);
        return (
          <Grid container size={12} key={index}>
            <Grid size={4}>
              <SimpleTextField
                control={control}
                name={`workExperience.${index}.title`}
                sx={{ width: 1 }}
                variant="outlined"
                inputlabel="Job Title"
              />
            </Grid>
            <Grid size={4}>
              <SimpleTextField
                control={control}
                name={`workExperience.${index}.company`}
                sx={{ width: 1 }}
                variant="outlined"
                inputlabel="Company"
              />
            </Grid>
            <Grid size={4}>
              <SimpleTextField
                control={control}
                name={`workExperience.${index}.description`}
                sx={{ width: 1 }}
                variant="outlined"
                inputlabel="Description"
              />
            </Grid>
            <Grid size={2}>
              <RHFDateField
                control={control}
                name={`workExperience.${index}.startDate`}
                label="Start Date"
                placeholder="Select start date"
                size="small"
                format="LL"
                disableFuture
              />
            </Grid>
            <Grid size={2}>
              <RHFDateField
                control={control}
                name={`workExperience.${index}.endDate`}
                label="end Date"
                placeholder="Select end date"
                format="LL"
                size="small"
                disableFuture
              />
            </Grid>
          </Grid>
        );
      })}
      {/* <WorkExperienceFields fields={fields} control={control} /> */}

      <Grid size={12} gap={3} justifyItems={"center"} textAlign={"center"}>
        <Button type="submit" variant="contained" sx={{ width: 250 }}>
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
      <DevTool control={control} />
    </Grid>
  );
}
