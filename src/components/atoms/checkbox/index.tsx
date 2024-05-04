import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  Typography,
} from "@mui/material";

export type CheckboxProps = { label?: React.ReactNode } & Omit<
  MuiCheckboxProps,
  ""
>;

export default function Checkbox({ label, sx, ...props }: CheckboxProps) {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          sx={{
            padding: "5px",
            color: "white", // default color
            "&.Mui-checked": {
              color: "#53fea9", // color when checked
            },
            ...sx,
          }}
          {...props}
        />
      }
      label={
        <Typography fontSize="12px" color="white">
          {label}
        </Typography>
      }
      sx={{
        alignItems: "center", // Adjust alignment if necessary
        color: "white", // This will set the label color
        "& .MuiFormControlLabel-label": {
          fontSize: "12px", // Optional: Adjust font size as needed
        },
      }}
    />
  );
}
