import { Box, Grid, Typography } from "@mui/material";

function HowWeWork() {
  return (
    <Box sx={{ my: {xs: 5, sm:10} }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="#66D643">How We Work</Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold",display: {xs: "none", sm: "block"} }}>
          Working Process to get
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold",display: {xs: "none", sm: "block"} }}>
          started
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold",display: {xs: "block", sm: "none"} }}>
          Working Process to get
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold",display: {xs: "block", sm: "none"} }}>
          started
        </Typography>
      </Box>
      <Box sx={{ px: 5, pt: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Box
                sx={{
                  border: "1px solid black",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 250,
                  height: 150,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  1-Discover
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Take a look at our fruit & vegetables seasonal produce
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Box
                sx={{
                  border: "1px solid black",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 250,
                  height: 150,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  2-Order
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Your order will be harvested and delivered to your local
                  vendors.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Box
                sx={{
                  border: "1px solid black",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 250,
                  height: 150,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  3-Get Your Product
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Buy from our local vendors close to you.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Box
                sx={{
                  border: "1px solid black",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 250,
                  height: 150,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  4-Enjoy!
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Enjoy healthy fresh produce
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HowWeWork;
