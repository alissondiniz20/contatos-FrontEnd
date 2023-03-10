import { Box } from "@mui/material";

export function MenuLateral() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "stretch",
        alignItems: "center",
        backgroundColor: "#131047" /*"#2c2966"*/,
        width: "20%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "8%",
          color: "#fff",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#FFA051",
            color: "#000",
            cursor: "pointer",
          },
          boxShadow: 3,
          borderRadius: 1,
        }}
      >
        Menu em desenvolvimento
      </Box>
    </Box>
  );
}
