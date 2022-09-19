import { Box, Button, TextField, Typography } from "@mui/material";

function GetInTouch() {
  return (
    <Box sx={{ my: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="#66D643">Get In Touch</Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Have any question on your
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          mind?
        </Typography>
        <Box sx={{ pt: 5 }}>
          <Box sx={{ display: "flex" }}>
            <TextField placeholder="Your Name" fullWidth sx={{ pr: 2 }} />
            <TextField placeholder="Email Address" fullWidth />
          </Box>
          <TextField placeholder="Subject" fullWidth sx={{ py: 2 }} />
          <textarea
            placeHolder="Message"
            style={{ width: "100%", height: 150 }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ bgcolor: "#408858", color: "white", borderRadius: 5, mt: 3 }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}

export default GetInTouch;
