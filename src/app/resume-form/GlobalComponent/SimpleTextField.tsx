'use client'; 

import { Theme } from '@emotion/react';
import { InputLabel, SxProps, TextField, TextFieldProps } from '@mui/material';
import React from 'react'
import {  Controller, Control, FieldValues, Path } from 'react-hook-form';


export interface Props<T extends FieldValues>
  extends Omit<TextFieldProps, 'name' | 'defaultValue'> { 
    control: Control<T>
    name: Path<T>; 
    sx?: SxProps<Theme>;
    inputlabel: string; 
}

export default function SimpleTextField<T extends FieldValues>({control, name,sx,inputlabel, ...rest}:Props<T>) {
  return (
    <>
    <InputLabel
          htmlFor="candidateName"
          sx={{
            fontSize: "16px",
            color: "common.black",
            fontWeight: "bold",
            width: "100%",
          }}
          required
        >
          {inputlabel} 
        </InputLabel>
      <Controller
          name={name}
          control={control}
          render={({
            field,
            fieldState: { error, },
            formState, 
          }) => {
            
            return (
              <TextField
              sx={sx}
                {...rest}
                {...field}
                size="small"
                error={!!error}
                helperText={error ? error.message : null}
                variant="outlined"
              />
            );
          }}
        />
        </>
  )
}
