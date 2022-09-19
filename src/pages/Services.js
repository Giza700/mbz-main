import Box from "@mui/material/Box";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import OurStory from "../sections/OurStory";
import Product from "../sections/Products";
import Provide from "../sections/Provide";
import Testimonials from "../sections/Testimonials";

function Services() {
  return (
    <Box>
      <Header activeTab="Services" />
      <Product />
      <OurStory />
      <Provide />
      <Testimonials />
      <Footer />
    </Box>
  );
}

export default Services;
