import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSnackbar } from 'notistack';

function GetInTouch() {
  const {
    handleSubmit,
    register,
  } = useForm({});
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = async(data) => {
    let response
    try{
    response = await axios.post("http://localhost:3001", data)
    }catch(e){
      enqueueSnackbar('Email could not be sent', { variant: 'error' });
    }
    if(response.status === 200){
    enqueueSnackbar(response.data, { variant: 'success' });
    }
  }
  return (
    <Box sx={{ my: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="#66D643">Get In Touch</Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", display: { xs: "none", sm: "block" } }}>
          Have any question on your
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", display: { xs: "none", sm: "block" } }}>
          mind?
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", display: { xs: "block", sm: "none" } }}>
          Have any question on your
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", display: { xs: "block", sm: "none" } }}>
          mind?
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ pt: 5, px: { xs: 3, sm: 0 } }}>
            <Box sx={{ display: { xs: "block", sm: "flex" } }}>
              <TextField placeholder="Your Name" name="name" {...register("name")} fullWidth sx={{ pr: { xs: 0, sm: 2 } }} />
              <TextField placeholder="Email Address" name="email" {...register("email")} fullWidth sx={{ pt: { xs: 2, sm: 0 } }} />
            </Box>
            <TextField placeholder="Subject" name="subject" {...register("subject")} fullWidth sx={{ py: 2 }} />
            <textarea
              placeholder="Message"
              name="message"
              {...register("message")}
              style={{ width: "100%", height: 150 }}
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            sx={{ bgcolor: "#408858", color: "white", borderRadius: 5, mt: 3 }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default GetInTouch;
