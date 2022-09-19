import { Box } from "@mui/material";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import HowWeWork from "../sections/HowWeWork";
import Meet from "../sections/Meet";
import Service from "../sections/Service";
import Team from "../sections/Team";

function ContactUs() {
  return (
    <Box>
      <Header activeTab="About" />
      <HowWeWork />
      <Service />
      <Team />
      <Meet />
      <Footer />
    </Box>
  );
}

export default ContactUs;
