"use client";

import { Button, Grid, InputAdornment, InputLabel, TextField, TextFieldProps, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import resumeSchema, { resumeSchemaType, workExperienceSchemaType } from "./resumeSchema";
import SimpleTextField from "../GlobalComponent/SimpleTextField";
import { CalendarIcon, DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
// Example: value from form (string | null)
let valueFromForm: string | null = null; // assume form value is empty initially
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
    control
  } = useForm<resumeSchemaType>({
    defaultValues: {
      candidateName: "",
      candidateEmail: "",
      candidatePhone: "",
      careerObjective: "", 
      workExperience: [ 
        { 
          company: '', 
          title: '',
          description: '',
          startDate: null, 
        }
      ]
    },
    resolver: zodResolver(resumeSchema),
  });
  const { fields, append,remove } = useFieldArray<resumeSchemaType>({
    name : 'workExperience', 
    control
  })
    
    console.log('fields: ', fields);
  // useEffect(() => {
  //   register("candidateName");
  // }, [register]);

  // console.log(errors, "errors");
  // console.log(watch());
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
        <SimpleTextField control={control} name='candidateName' sx={{ width: 1}} variant="outlined" inputlabel="candidate Name"/>
      </Grid>
      <Grid size={4}>
        
        <SimpleTextField control={control} name='candidateEmail' sx={{ width: 1}} variant="outlined" inputlabel="candidate Email"/>
      </Grid>
      <Grid size={4}>
        
        <SimpleTextField control={control} name='candidatePhone' sx={{ width: 1}} variant="outlined" inputlabel="candidate Phone"/>
      </Grid>

      <Grid size={12}>
        <SimpleTextField control={control} name='careerObjective' sx={{ width: 1}} variant="outlined" inputlabel="Career Objective" multiline rows={4}/>
      </Grid>
      <Grid size={6}>
        <Typography variant="h6" >
        Work Experience
          </Typography>
      </Grid>
      <Grid size={3}>
        <Button
          onClick={() => append({ company: '', description: '', title: '', endDate: '', startDate: ''})}
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
        return (
          <Grid container size={12} key={index}>
          <Grid size={4}>
        <SimpleTextField control={control} name={`workExperience.${index}.title`} sx={{ width: 1}} variant="outlined" inputlabel="Job Title"/>
      </Grid>
      <Grid size={4}>
        
        <SimpleTextField control={control} name={`workExperience.${index}.company`} sx={{ width: 1}} variant="outlined" inputlabel="Company"/>
      </Grid>
      <Grid size={4}>
        <SimpleTextField control={control} name={`workExperience.${index}.description`} sx={{ width: 1}} variant="outlined" inputlabel="Description"/>
      </Grid>
      <Grid size={4}>
         {/* <DatePicker
        label="Start Date"
        value={date}
        onChange={(newValue) => setDate(newValue)}
        onError={(e) => console.log("Date error:", e)}
        slots={{ textField: TextField }}  // v6+ replacement for renderInput
      /> */}

      </Grid>
      <Grid size={4}>
       
        <DateTimePicker
              open={openDate}
              onClose={() => setOpenDate(false)}
              value={
                watch(`workExperience.${index}.startDate`) ? dayjs(watch(`workExperience.${index}.startDate`)) : null
              }
              onChange={(newValue: Dayjs | null) => {
                if (newValue) {
                  setValue(`workExperience.${index}.startDate`, newValue.toDate());
                  trigger(`workExperience.${index}.startDate`);
                }
              }}
              minDateTime={dayjs()}
              slots={{
                openPickerIcon: () => null,
              }}
              slotProps={{
                textField: {
                  size: "small",
                  id: "workExperience",
                  fullWidth: true,
                  error: !!errors.workExperience?.index.startDate,
                  helperText: errors.workExperience?.index.startDate?.message,
                  placeholder: "Select Pickup Date/Time",
                  InputProps: {
                    startAdornment: (
                      <InputAdornment
                        onClick={() => setOpenDate(true)}
                        position="start"
                        sx={{ cursor: "pointer" }}
                      >
                        <CalendarIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  },
                  sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "8px",
                    },
                  },
                },
              }}
            />

      </Grid>
          </Grid>
        )
      })}
      {/* <Grid size={4}>
        <SimpleTextField control={control} name='careerObjective' sx={{ width: 1}} variant="outlined" inputlabel="Career Objective" multiline rows={4}/>
      </Grid> */}

      {
      }

      <Grid size={12} gap={3} justifyItems={"center"} textAlign={"center"}>
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


// export interface Props { 
//   fields: string[]
// }
// function GetFieldWorkExperience({ fields} : Props) { 

//   return (
//     <Grid container >
//         <Grid size={4}>
//         <SimpleTextField control={control} name='candidateName' sx={{ width: 1}} variant="outlined" inputlabel="candidate Name"/>
//       </Grid>
//       <Grid size={4}>
        
//         <SimpleTextField control={control} name='candidateEmail' sx={{ width: 1}} variant="outlined" inputlabel="candidate Email"/>
//       </Grid>
//       <Grid size={4}>
        
//         <SimpleTextField control={control} name='candidatePhone' sx={{ width: 1}} variant="outlined" inputlabel="candidate Phone"/>
//       </Grid>

//       <Grid size={12}>
//         <SimpleTextField control={control} name='careerObjective' sx={{ width: 1}} variant="outlined" inputlabel="Career Objective" multiline rows={4}/>
//       </Grid>
//     </Grid>
//   )

// }