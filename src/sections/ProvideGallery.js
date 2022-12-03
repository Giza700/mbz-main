import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import Bananas from "../assets/images/bananas.jfif";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//You can import your images from file here and put them inside an array like
//import Bananas from "../assets/images/bananas.jfif";
//import Bananas from "../assets/images/bananas.jfif";
const imageArray = [Bananas, Bananas,Bananas,Bananas,Bananas,Bananas,Bananas,Bananas,Bananas,Bananas]

function ProvideGallery() {
  const slideLeft = () => {
		var slider = document.getElementById("cardslider")
		slider.scrollLeft = slider.scrollLeft - 400
	}

	const slideRight = () => {
		var slider = document.getElementById("cardslider")
		slider.scrollLeft = slider.scrollLeft + 400
	}

  function FruitBox({image}) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: {xs:3, sm:3}, 
          py:{xs: 3,py:0}
        }}
      >
        <Box component="img" src={image} sx={{ width: 300, height: 300 }} />
        <Typography>Fruits Loads of Potassium</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ py: 10, px: 5 }}>
      <Box
      id="cardslider"
      sx={{
        width: '100%',
        maxHeight: {xs:400,sm:800},
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "auto",
        "&::-webkit-scrollbar": { width: 0 },
       // scrollBehaviour: 'smooth'
        scrollBehavior: 'smooth'
      }}
      >
        {imageArray.map((item) => {
          return (
            <FruitBox image={item}/>
          )
        })}
      </Box>
      <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <IconButton onClick={slideLeft} color="primary" sx={{mr: 5,"&:hover": {
            color: "white",
            bgcolor: "primary.main",
          },}}>
        <ChevronLeftIcon />
        </IconButton>
        <IconButton onClick={slideRight} color="primary" sx={{mr: 5,"&:hover": {
            color: "white",
            bgcolor: "primary.main",
          },}}>
        <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ProvideGallery;
