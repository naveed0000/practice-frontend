// "use client";

// import React from "react";
// import {
//   Control,
//   FieldArrayWithId,
//   FieldValues,
//   Path,
//   UseFieldArrayReturn,
//   UseFormGetValues,
// } from "react-hook-form";
// import { Grid } from "@mui/material";
// import SimpleTextField from "../GlobalComponent/SimpleTextField";
// import RHFDateField from "./RHFDateField";

// interface WorkExperienceFieldsProps<T extends FieldValues> {
//   fields: FieldArrayWithId<T, "workExperience", "id">[];
//   control: Control<T>;
//   errors?: any;
// }

// export function WorkExperienceFields<T extends FieldValues>({
//   fields,
//   control,
//   errors,
// }: WorkExperienceFieldsProps<T>) {
//   return (
//     <>
//       {fields.map((field, index) => (
//         <Grid container spacing={2} key={field.id} alignItems="center">
//           {/* Title */}
//           <Grid size={4}>
//             <SimpleTextField
//               control={control}
//               name={`workExperience.${index}.title`}
//               inputlabel="Job Title"
//               variant="outlined"
//               fullWidth
//               error={!!errors.workExperience?.[index]?.title}
//             />
//           </Grid>

//           {/* Company */}
//           <Grid size={4}>
//             <SimpleTextField
//               control={control}
//               name={`workExperience.${index}.company`}
//               inputlabel="Company"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>

//           {/* Description */}
//           <Grid size={4}>
//             <SimpleTextField
//               control={control}
//               name={`workExperience.${index}.description`}
//               inputlabel="Description"
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>

//           {/* Start Date */}
//           <Grid size={2}>
//             <RHFDateField
//               control={control}
//               name={`workExperience.${index}.startDate`}
//               label="Start Date"
//               placeholder="Select start date"
//               format="LL"
//               size="small"
//               disableFuture
//             />
//           </Grid>

//           {/* End Date */}
//           <Grid size={2}>
//             <RHFDateField
//               control={control}
//               name={`workExperience.${index}.endDate`}
//               label="End Date"
//               placeholder="Select end date"
//               format="LL"
//               size="small"
//               disableFuture
//             />
//           </Grid>
//         </Grid>
//       ))}
//     </>
//   );
// }
