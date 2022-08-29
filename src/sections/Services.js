import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Work from "../assets/images/work.jpg";
//import abc from "../assets/images";

function Services() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Box component="img" src={Work} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h3">
            Hard Workers Producing Healthy & Tasty Food
          </Typography>
          <Typography variant="subtitle1">
            The Farm business is to produce and provide quality vegetable and
            fruit crops to the market. The Farm is accessible all year round
            through all-weather road. Its products will fetch adequate market in
            nearby towns such as Arba minch, Sodo, Awassa, Shash
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;
