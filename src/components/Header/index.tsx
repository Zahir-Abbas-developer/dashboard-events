

import { Box, Toolbar,  IconButton,  Stack,  useMediaQuery,  AppBar, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
const Header = (props: any) => {
  const {  openNotificationModal, setOpenNotificationModal } = props;
  const isResponsive = useMediaQuery("(max-width:1023px)");
 const theme=useTheme()


  
  return (
    //Header
    <AppBar position="sticky" sx={{ pr: !isResponsive ? "25px" : "0px" ,  
    background: theme.palette.common.white,
    boxShadow: 'none',
    color: 'black',
    height: '70px',}}>
      <Toolbar className={!isResponsive ? "toolbar" : ""}>
        <Typography variant="h6" style={{width:"100%"}}>Stixor Technologies</Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "100%", ml: "20px" }}>
  
          <Box className="icons">
            <Stack direction="row" justifyContent="space-between" spacing={3} alignItems="center" sx={{ mr: "10px" }}>
              <Box position="relative">
                <IconButton
                  disableRipple
                  sx={{ p: 0 }}
                  onClick={() => {
                    setOpenNotificationModal(!openNotificationModal);
                  
                  }}
                >
             
                </IconButton>
        
             
              </Box>
              <Box position="relative">
             
                  <IconButton
                    disableRipple
                    sx={{ p: 0,boxShadow: '0px 4px 4px rgb(0 0 0 / 25%), 0px 2px 4px rgb(0 0 0 / 25%)' }}
                    onClick={() => {
                  
                      setOpenNotificationModal(false);
                    }}
                  >
                  
                  </IconButton>
        
             
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Toolbar >
    </AppBar >
  );
};
export default Header;