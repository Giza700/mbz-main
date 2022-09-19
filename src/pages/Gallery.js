import { Box } from "@mui/material";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import ProvideGallery from "../sections/ProvideGallery";

function Gallery() {
  return (
    <Box>
      <Header activeTab="Gallery" />
      <ProvideGallery />
      <Footer />
    </Box>
  );
}

export default Gallery;
