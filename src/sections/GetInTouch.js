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
        <Typography variant="h4" sx={{ fontWeight: "bold", display: {xs: "none", sm: "block"} }}>
          Have any question on your
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", display: {xs: "none", sm: "block"} }}>
          mind?
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", display: {xs: "block", sm: "none"} }}>
          Have any question on your
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", display: {xs: "block", sm: "none"} }}>
          mind?
        </Typography>
        <Box sx={{ pt: 5, px:{xs: 3, sm: 0} }}>
          <Box sx={{ display: {xs: "block", sm:"flex" }}}>
            <TextField placeholder="Your Name" fullWidth sx={{ pr: {xs: 0, sm: 2} }} />
            <TextField placeholder="Email Address" fullWidth sx={{pt: {xs: 2, sm: 0}}}/>
          </Box>
          <TextField placeholder="Subject" fullWidth sx={{ py: 2 }} />
          <textarea
            placeholder="Message"
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
