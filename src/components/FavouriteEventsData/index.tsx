import { useAppSelector } from "@/redux/store";
import { Box, Card, CardContent, Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { CardsApiLoader } from "../PreLoader/Index";

const FavouriteEventsData=()=>{
    const getFavouriteEvents: any = useAppSelector((state: any) => state?.favouriteEvents);

    return(
        <>
          <Grid container spacing={3} mb={4}>
            asgasgdsg
        {/* {getFavouriteEvents?.map((card: any) => (
          <Grid key={uuidv4()} item xs={12} md={6} lg={3}>
            {getFavouriteEvents?.length===0 ? (
              <CardsApiLoader image="yes" />
            ) : (
              <Card
                sx={{
                  minHeight: "100%",
                  border: "1px solid #DADEE8",
                  borderRadius: "8px",
                  boxShadow: "-8px 8px 12px rgba(218, 222, 232, 0.4)",
                }}
              >
                <CardContent className="cardContent">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        backgroundColor: "rgba(243, 237, 252, 1)",
                        height:{sm:"60px", xs:'50px'},
                        width: {sm:"60px", xs:'50px'},
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                   
                    </Box>
                    <Box sx={{ px: { sm: 3, xs: 1 } }}>
                      <p
                        className="grey-color fw-500 fs-18"
                        style={{ marginBottom: 5 }}
                      >
                        {card.title}
                      </p>
                      <p className="fs-24 fw-700 label-color">
                        {card.category }
                      </p>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            )}
          </Grid>
        ))} */}
      </Grid>
        </>
    )
}
export default FavouriteEventsData