"use client";

import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { DateTimePicker, DateTimePickerProps } from "@mui/x-date-pickers/DateTimePicker";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { InputAdornment } from "@mui/material";
import CalendarIcon from "@mui/icons-material/CalendarToday"; // or your icon

export type DateTimePickerRHFProps<T extends FieldValues> = Omit<
  DateTimePickerProps,
  "value" | "onChange"
> & {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  minDateTime?: Dayjs;
};
function RHFDateTimePicker<T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "Select Date/Time",
  minDateTime,
  ...rest
}: DateTimePickerRHFProps<T>) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <DateTimePicker
          open={open}
          onClose={() => setOpen(false)}
          value={field.value ? dayjs(field.value) : null}
          onChange={(newValue: Dayjs | null) => {
            field.onChange(newValue ? newValue.toDate().toISOString() : null);
          }}
          minDateTime={minDateTime ?? dayjs()}
          slots={{
            openPickerIcon: () => null,
          }}
          {...rest}
          slotProps={{
            textField: {
              size: "small",
              fullWidth: true,
              label,
              placeholder,
              error: !!fieldState.error,
              helperText: fieldState.error?.message,
              InputProps: {
                startAdornment: (
                  <InputAdornment
                    onClick={() => setOpen(true)}
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
      )}
    />
    </>
  );
}

export default RHFDateTimePicker;
