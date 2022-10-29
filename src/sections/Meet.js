import { Box, Button, Typography } from "@mui/material";

function Meet() {
  return (
    <Box>
      <Box
        sx={{
          p: { xs: 3,sm:20},
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "linear-gradient(#60AF5A, #A8C2A6)",
        }}
      >
        <Typography variant="h4" color="white" sx={{ fontWeight: "bold", display: {xs: "none", md: "block"} }}>
          Welcome
        </Typography>
        <Typography variant="h2" color="white" sx={{ fontWeight: "bold",display: {xs: "none", md: "block"} }}>
          Meet the people that make this farm
        </Typography>
        <Typography variant="h2" color="white" sx={{ fontWeight: "bold",display: {xs: "none", md: "block"} }}>
          thrive
        </Typography>

        <Typography variant="h5" color="white" sx={{ fontWeight: "bold", display: {xs: "block", md: "none"} }}>
          Welcome
        </Typography>
        <Typography variant="h4" color="white" sx={{ fontWeight: "bold",display: {xs: "block", md: "none"} }}>
          Meet the people
        </Typography>
        <Typography variant="h4" color="white" sx={{ fontWeight: "bold",display: {xs: "block", md: "none"} }}>
           that make this farm
        </Typography>
        <Typography variant="h4" color="white" sx={{ fontWeight: "bold",display: {xs: "block", md: "none"} }}>
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
