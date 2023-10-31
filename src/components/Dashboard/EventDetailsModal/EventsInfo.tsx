import React from "react";

import { Grid, Box, Typography } from "@mui/material";

import dayjs from "dayjs";

// import "../../../component/pcn/pcn.scss";


interface EventDetailsI {
  modaldata: any;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
const EventDetails = (props: EventDetailsI) => {
  const { modaldata, setCounter } = props;
 

  
  return (
    <>
      <>
        <Grid container sx={{ mt: "2px" }}>
          <Grid item xs={6} sm={3}>
            <Box sx={{ color: "#152536" }}>
              <Typography className=" modaltitle" sx={{ fontSize: "14px", fontWeight: "700" }}>
                Event Category:
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Box sx={{ marginLeft: { sm: "58px" }, color: "#152536" }}>
              <Typography
                className="modaldescription"
                sx={{
                  marginLeft: { sm: "4px" },
                  color: "#152536",
                  fontSize: "14px",
                  marginTop: "5px",
                }}
              >
                {modaldata?.category}
              </Typography>
            </Box>
          </Grid>
         
       
        </Grid>
        <Grid container>
          <Grid item xs={6} sm={4}>
            <Box sx={{ color: "#152536" }}>
              <Typography className=" modaltitle" sx={{ fontSize: "14px", fontWeight: "700" }}>
              Event Start Date :
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box
              sx={{
                marginLeft: { sm: "4px" },
                color: "#152536",
                fontSize: "14px",
                marginTop: "5px",
              }}
            >
              {dayjs(modaldata?.contraventionDate).format("DD/MM/YYYY")} at {modaldata?.time}
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sm={4}>
            <Box sx={{ color: "#152536" }}>
              <Typography className=" modaltitle" sx={{ fontSize: "14px", fontWeight: "700", marginTop: "4px" }}>
              Event End Date :
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Box
              sx={{
                marginLeft: { sm: "4px" },
                color: "#152536",
                fontSize: "14px",
                marginTop: "5px",
              }}
            >
              <Typography sx={{ fontSize: "14px", marginTop: "5px" }}>{dayjs(modaldata?.issuedAt).format("DD/MM/YYYY")}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sm={4}>
            <Box sx={{ color: "#152536" }}>
              <Typography className=" modaltitle" sx={{ fontSize: "14px", fontWeight: "700", marginTop: "5px" }}>
                Event Title :
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Box
              sx={{
                marginLeft: { sm: "4px" },
                color: "#152536",
                fontSize: "14px",
                marginTop: "5px",
              }}
            >
              <Typography sx={{ fontSize: "14px" }}>{`£ ${modaldata?.amount}`}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sm={4}>
            <Box sx={{ color: "#152536" }}>
              <Typography className=" modaltitle" sx={{ fontSize: "14px", fontWeight: "700", marginTop: "5px" }}>
                Event Description :
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Box
              sx={{
                marginLeft: { sm: "4px" },
                color: "#152536",
                fontSize: "14px",
                marginTop: "5px",
              }}
            >
              <Typography sx={{ fontSize: "14px" }}>{`£ ${modaldata?.description}`}</Typography>
            </Box>
          </Grid>
        </Grid>
        
      </>
    
     
    </>
  );
};

export default EventDetails;
