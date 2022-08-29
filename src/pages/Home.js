import Box from "@mui/material/Box";
import Header from "../sections/Header";
import Product from "../sections/Products";
import Services from "../sections/Services";

function Home() {
  return (
    <Box>
      <Header activeTab="Home" />
      <Product />
      <Services />
    </Box>
  );
}

export default Home;
