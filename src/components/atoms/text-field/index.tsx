import {
  Box,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

export type TextFiledProps = {
  icon: React.ReactElement;
} & Omit<MuiTextFieldProps, "">;

export default function TextField({ icon, sx, ...props }: TextFiledProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid #d2d2d2"
      borderRadius="5px"
      height="40px"
    >
      <Box
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="4px 8px"
        height="40px"
      >
        {icon}
      </Box>
      <Box
        bgcolor="#d2d2d2"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
      >
        <MuiTextField
          fullWidth
          sx={{
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
      </Box>
    </Box>
  );
}
