import { Box, Grid, Typography } from "@mui/material";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";

function Info() {
  return (
    <Box sx={{ my: 10, px: 10 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4}>
          <Box sx={{display: {xs: 'flex', md: 'block'},justifyContent: 'center'}}>
            <Box
              sx={{
                border: "1px solid black",
                P: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: {xs: 250, sm: 300},
                height: {xs: 250, sm: 300},
              }}
            >
              <Box>
                <MailOutlineIcon sx={{ width: {xs: 100, sm: 200}, height: {xs: 100, sm: 200} }} />
              </Box>
              <Typography color="#66D643">Email Us</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                messay@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box sx={{display: {xs: 'flex', md: 'block'},justifyContent: 'center'}}>
            <Box
              sx={{
                border: "1px solid black",
                P: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: {xs: 250, sm: 300},
                height: {xs: 250, sm: 300},
              }}
            >
              <Box>
                <PhoneInTalkOutlinedIcon sx={{ width: {xs: 100, sm: 200}, height: {xs: 100, sm: 200} }} />
              </Box>
              <Typography color="#66D643">Make a Call</Typography>
              <Typography sx={{ fontWeight: "bold" }}>+251911254789</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box sx={{display: {xs: 'flex', md: 'block'},justifyContent: 'center'}}>
            <Box
              sx={{
                border: "1px solid black",
                P: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: {xs: 250, sm: 300},
                height: {xs: 250, sm: 300},
              }}
            >
              <Box>
                <PinDropOutlinedIcon sx={{ width: {xs: 100, sm: 200}, height: {xs: 100, sm: 200} }} />
              </Box>
              <Typography color="#66D643">Office Address</Typography>
              <Typography sx={{ fontWeight: "bold" }}>snnprs, gamo</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Info;
