import { breathingEffect } from "@/utils/animation";
import {
  Box,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

export type TextFiledProps = {
  startIcon: React.ReactElement;
} & Omit<MuiTextFieldProps, "">;

export default function TextField({ startIcon, sx, ...props }: TextFiledProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue(""); // Clears the input field
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      border="2px solid #e0f2f1"
      borderRadius="5px"
      height="40px"
      sx={{
        // Adding focus-within to change the icon color when the TextField is focused
        "&:focus-within": {
          border: "2px solid #53fea9",
          animation: `${breathingEffect} 2s infinite ease-in-out`,
          "& > div:first-of-type": {
            // Targets the first Box that contains the icon
            color: "#53fea9", // Change to the desired color on focus
          },
        },
        ...sx,
      }}
    >
      <Box
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="4px 8px"
        height="40px"
      >
        {startIcon}
      </Box>
      <Box
        bgcolor="#e0f2f1"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
      >
        <MuiTextField
          value={value}
          onChange={handleChange}
          sx={{
            width: "91%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none", // Removes the border
              },
              "&:hover fieldset": {
                border: "none", // Removes the border on hover
              },
              "&.Mui-focused fieldset": {
                border: "none", // Removes the border on focus
                outline: "none", // Removes the outline on focus
              },
            },

            ".MuiInputBase-input": {
              padding: "4px 15px  ",
            },

            ".MuiInputBase-root": {
              borderRadius: "0px",
              fontFamily: "Poppins",
            },
            ...sx,
          }}
          {...props}
        />
        <Box
          color="red"
          width="16px"
          height="16px"
          display="flex"
          alignItems="center"
          sx={{ "&:hover": { cursor: "pointer" } }}
        >
          {value && <CancelIcon fontSize="inherit" onClick={handleClear} />}
        </Box>
      </Box>
    </Box>
  );
}
