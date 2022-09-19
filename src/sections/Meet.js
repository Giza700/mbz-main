import { Box, Button, Typography } from "@mui/material";

function Meet() {
  return (
    <Box>
      <Box
        sx={{
          p: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "linear-gradient(#60AF5A, #A8C2A6)",
        }}
      >
        <Typography variant="h4" color="white" sx={{ fontWeight: "bold" }}>
          Welcome
        </Typography>
        <Typography variant="h2" color="white" sx={{ fontWeight: "bold" }}>
          Meet the people that make this farm
        </Typography>
        <Typography variant="h2" color="white" sx={{ fontWeight: "bold" }}>
          thrive
        </Typography>
        <Button
          sx={{ bgcolor: "white", color: "green", borderRadius: 20, mt: 2 }}
        >
          About Us
        </Button>
      </Box>
    </Box>
  );
}

export default Meet;
