import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

function Product() {
  return (
    <Box sx={{ my: 10, px: 5 }}>
      <Box sx={{ my: 5, display: "flex", justifyContent: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Products
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Box>
  );
}
export default Product;
