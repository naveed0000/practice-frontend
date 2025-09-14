// import { Grid } from "@mui/material";
// import React from "react";
// import SimpleTextField from "../GlobalComponent/SimpleTextField";
// import { useFieldArray, useForm } from "react-hook-form";
// import resumeSchema, { resumeSchemaType } from "./resumeSchema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import RHFDateField from "./RHFDateField";

// export default function WorkExperienceSection() {
//   const {
//     handleSubmit,
//     register,
//     unregister,
//     formState: { errors },
//     getFieldState,
//     setValue,
//     trigger,
//     watch,
//     control,
//   } = useForm<resumeSchemaType>({
//     defaultValues: {
//       candidateName: "",
//       candidateEmail: "",
//       candidatePhone: "",
//       careerObjective: "",
//       workExperience: [
//         {
//           company: "",
//           title: "",
//           description: "",
//           startDate: "",
//           endDate: "",
//         },
//       ],
//     },
//     resolver: zodResolver(resumeSchema),
//   });
//   const { fields, append, remove } = useFieldArray({
//     name: "workExperience",
//     control,
//   });
//   return (
//     <>
//       {fields?.map((field, index) => {
//         console.log("fieldasdad: ", field);
//         return (
//           <Grid container size={12} key={index}>
//             <Grid size={4}>
//               <SimpleTextField
//                 control={control}
//                 name={`workExperience.${index}.title`}
//                 sx={{ width: 1 }}
//                 variant="outlined"
//                 inputlabel="Job Title"
//               />
//             </Grid>
//             <Grid size={4}>
//               <SimpleTextField
//                 control={control}
//                 name={`workExperience.${index}.company`}
//                 sx={{ width: 1 }}
//                 variant="outlined"
//                 inputlabel="Company"
//               />
//             </Grid>
//             <Grid size={4}>
//               <SimpleTextField
//                 control={control}
//                 name={`workExperience.${index}.description`}
//                 sx={{ width: 1 }}
//                 variant="outlined"
//                 inputlabel="Description"
//               />
//             </Grid>
//             <Grid size={2}>
//               <RHFDateField
//                 control={control}
//                 name={`workExperience.${index}.startDate`}
//                 label="Start Date"
//                 placeholder="Select start date"
//                 size="small"
//                 format="LL"
//                 disableFuture
//               />
//             </Grid>
//             <Grid size={2}>
//               <RHFDateField
//                 control={control}
//                 name={`workExperience.${index}.endDate`}
//                 label="end Date"
//                 placeholder="Select end date"
//                 format="LL"
//                 size="small"
//                 disableFuture
//               />
//             </Grid>
//           </Grid>
//         );
//       })}
//     </>
//   );
// }
