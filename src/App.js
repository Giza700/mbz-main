import { Box, CssBaseline, Slide, ThemeProvider } from '@mui/material';
import Home from "./pages/Home";
import theme from "./Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from 'notistack';

import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
      <SnackbarProvider
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          TransitionComponent={Slide}
        >
        <CssBaseline />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
