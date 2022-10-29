import { Box } from "@mui/material";
import Footer from "../sections/Footer";
import GetInTouch from "../sections/GetInTouch";
import Header from "../sections/Header";
import Info from "../sections/Info";

function ContactUs() {
  return (
    <Box>
      <Header activeTab="ContactUs" />
      <Info />
      <GetInTouch />
      <Footer />
    </Box>
  );
}

export default ContactUs;
