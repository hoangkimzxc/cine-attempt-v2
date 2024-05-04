import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export type ButtonProps = {} & Omit<MuiButtonProps, "">;

export default function Button({ children, sx, ...props }: ButtonProps) {
  return (
    <MuiButton fullWidth sx={{ ...sx }} {...props}>
      {children}
    </MuiButton>
  );
}
