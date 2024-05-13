import { Chip as MuiChip, ChipProps as MuiChipProps } from "@mui/material";

export interface ChipProps extends Omit<MuiChipProps, ""> {
  handleClick?: () => void;
}

export function Chip({ sx, ...props }: ChipProps) {
  const handleClick = () => console.log("clicked");

  return (
    <MuiChip
      onClick={handleClick}
      sx={{
        color: "inherit",
        backgroundColor: "inherit",
        fontSize: "16px",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        ...sx,
      }}
      {...props}
    />
  );
}
