import Box from "@mui/material/Box";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Meet from "../sections/Meet";
import Product from "../sections/Products";
import Service from "../sections/Service";

function Home() {
  return (
    <Box>
      <Header activeTab="Home" />
      <Product />
      <Service />
      <Meet />
      <Footer />
    </Box>
  );
}

export default Home;
