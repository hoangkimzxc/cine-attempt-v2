import { breathingEffect } from "@/utils/animation";
import {
  Tooltip,
  Box,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";
import { Control, FieldValues, useController } from "react-hook-form";

export type TextFiledProps = {
  startIcon: React.ReactElement;
  breathingColor?: string;
  control?: Control<FieldValues>;
  name?: string;
} & Omit<MuiTextFieldProps, "name">;

export default function TextField({
  startIcon,
  breathingColor,
  control,
  name,
  type,
  sx,
  ...props
}: TextFiledProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Determine the color based on validation state
  const effectiveBreathingColor =
    invalid || !!error?.message ? "#DC143C" : breathingColor;

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
          border: `2px solid ${effectiveBreathingColor}`,
          animation: `${breathingEffect(
            effectiveBreathingColor
          )} 2s infinite ease-in-out`,
          "& > div:first-of-type": {
            // Targets the first Box that contains the icon
            color: effectiveBreathingColor, // Change to the desired color on focus
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
          type={type === "password" && !showPassword ? "password" : "text"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputRef={ref}
          error={invalid}
          helperText={error?.message}
          sx={{
            width: "91%",
            position: "relative",
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
            ".MuiFormHelperText-root": {
              color: "#fff !important",
              padding: "4px 6px",
              background: "#e74b4b",
              position: "absolute",
              top: "-1px",
              right: "-30px",
              borderRadius: "20px",
            },
            ...sx,
          }}
          {...props}
        />
        {type === "password" && value && (
          <Box
            color="grey"
            width="16px"
            height="16px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ "&:hover": { cursor: "pointer" } }}
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? (
              <VisibilityIcon fontSize="inherit" />
            ) : (
              <VisibilityOffIcon fontSize="inherit" />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
