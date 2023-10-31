/**************************Imports ********************************** */
import {
    styled,
    Dialog,
    IconButton,
    DialogTitle,
    Box,
    DialogContent,
    Typography,
   
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";

  import { useState } from "react";


//   import "../../../component/pcn/pcn.scss";
import EventDetails from "./EventsInfo";

  
  /************************BootstrapDialog********************************* */
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": { padding: theme.spacing(2) },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    }
  }));
   interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
  /*************************************************************Radio Button Functionality***************************************** */
  const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  /*******************************************************************PCN COMPONENT ALL MODALS ******************************** */
  const Modals = (props: any) => {
    const { modal, handleModel, modaldata, counter, setCounter, setOpenFeedbackPopup, setToggleSnackbar, endPoint } = props;
    const [paymentMethod, setPaymentMethod] = useState("");
  
  
    const handleCloseModal = () => {
      handleModel(false);
     
    };
  
    return (
      <BootstrapDialog
        fullWidth={false}
        className="table-status-pcn border-radius-8"
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={modal}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "740px",
              borderRadius: "8px"
            }
          },
        }}
      >
        <Box
          
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleCloseModal}
          >
            <Typography
             
            >
              {counter === 1
                && "Event Details"
              }
            </Typography>
          </BootstrapDialogTitle>
        </Box>
        <DialogContent dividers className="dialogcontent">
          {counter === 1 && (
            <EventDetails modaldata={modaldata} setCounter={setCounter} />
          ) 
          }
        </DialogContent>
      </BootstrapDialog>
  
    );
  };
  export default Modals;
  
  
  