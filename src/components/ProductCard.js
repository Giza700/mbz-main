import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Bananas from "../assets/images/bananas.jfif";
import { Card, Grid } from "@mui/material";
import { useState } from "react";

function ProductCard() {
  const [bg, setBg] = useState("linear-gradient(#90DDDF, #507B7C)");
  const [image, setImage] = useState(true);
  const [text, setText] = useState("black");

  const handleIn = () => {
    setBg("#A0F6F8");
    setImage(false);
    setText("white");
  };

  const handleOut = () => {
    setBg("linear-gradient(#90DDDF, #507B7C)");
    setImage(true);
    setText("black");
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        onMouseOver={handleIn}
        onMouseOut={handleOut}
        sx={{
          background: bg,
          px: 8,
          py: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 300,
        }}
      >
        {image ? <Box component="img" src={Bananas} /> : ""}
        <Box>
          <Typography variant="h6" color={text} sx={{ fontWeight: 600, pt: 2 }}>
            Tropical Fruits
          </Typography>
          <Typography variant="subtitle2" color={text}>
            Flavorful and Sweet
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}

export default ProductCard;
