import { useState } from "react";
import Popover from "@mui/material/Popover";
import {  FormControl, Grid, MenuItem, Select,  Box } from "@mui/material";
import filterIcon from "../../../assets/Loader/filter.png";;
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { filterCategories } from "./FilterCategory.data";

/*****************************Filter pcn Functionality ************************************************** */
const FilterPopover = ({  setCategory,category}: any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  /******************Filter funtion of third party table*/
  const clearFilter = () => {
    setCategory("")

  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <span onClick={handleClick}>
        <Image src={filterIcon} alt="Filter" />
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 3,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
          <Box className="filterBox" paddingTop={2}>
            <Box className="top-btns" marginBottom={1}>
              <p className="fs-16 fw-700" style={{ margin: "0" }}>
                Quick Filters
              </p>
              <button style={{ cursor: "pointer" }} className="clear-btn fs-16 fw-700" onClick={clearFilter}>
                Clear all
              </button>
            </Box>
            <Grid container className="grid">
              <FormControl sx={{ width: 220, background: "white" }}>
                <Select
                  name="vehicleNumber"
                  fullWidth
                  size="small"
                  variant="outlined"
                  displayEmpty
                  id="demo-simple-select-helper"
                  onChange={(e: any) => setCategory(e.target.value)}
                  value={category}
                  inputProps={{ "aria-label": "Without label" }}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <span>Event Category</span>;
                    } else {
                      return category;
                    }
                  }}
                >
                  {filterCategories?.map((option: any) => (
                    <MenuItem key={uuidv4()} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            
            </Grid>
         
          </Box>
      </Popover>
    </>
  );
};

export default FilterPopover;
