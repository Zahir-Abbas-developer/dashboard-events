"use client"
import { useState } from "react";
import { Box, Button, Checkbox, Grid, IconButton, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, useTheme } from "@mui/material";
import { tableHeader } from "./table.data";
import { v4 as uuidv4 } from "uuid";
import { UnfoldMore, Search } from "@mui/icons-material";
import dayjs from "dayjs";
import { useGetEventsQuery } from "@/services/event-api";
import Modals from "../EventDetailsModal";
import { ApiLoader } from "@/components/PreLoader/Index";
import { debouncedSearch } from "@/utils/debounce";
import FilterPopover from "../FilterCategory";
import './Table.scss'
import { useDispatch } from "react-redux";

import { useAppSelector } from "@/redux/store";
import { addFavoriteEvent } from "@/redux/slices/FavouritesEvents";
import FavouriteEventsData from "@/components/FavouriteEventsData";



const EventsTable = () => {

  const [modaldata, setModalData] = useState<any>();
  const [page, setPage] = useState(0);
  const [itemId, setItemId] = useState<number>(1);
  const [pagination, setPagination] = useState(1);
  const [counter, setCounter] = useState(1);
  const [modal, setModal] = useState(false);
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [sortItem, setSortItem] = useState<any>({ type: true, field: "" });
  const [checkedRows, setCheckedRows] = useState<any>({}); // Maintain the checked status for each row

  const dispatch = useDispatch()

  const debouncedResults = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    debouncedSearch(value, setCountry);
  };
  const paramsObj: any = {}
  if ((country)) paramsObj['country'] = country;
  if ((category)) paramsObj['category'] = category;
  if ((sortItem.field)) paramsObj['sort'] = sortItem.field;


  const params = "&" + new URLSearchParams(paramsObj).toString();
  const { data, isLoading, isSuccess, isError } = useGetEventsQuery({ params })


  let eventsData: any
  if (isSuccess) {
    eventsData = data
  }

  const getFavouriteEvents: any = useAppSelector((state: any) => state?.favouriteEvents?.favouritesEvents);
      const loading: any=useAppSelector((state: any) => state?.favouriteEvents?.loading);
 

  const handleCheckboxChange = (row:any) => {
    setCheckedRows((prevCheckedRows:any) => {
     
      return {
        ...prevCheckedRows,
        [row.id]: !prevCheckedRows[row.id],
      };
       // Dispatch your action outside of the state update function
   
    });
    
    dispatch(addFavoriteEvent(row));
    
  };

  return (
    <>
   {getFavouriteEvents.length>0 && <Typography variant="h4">The favorite events section has been added below the table section.</Typography>}
      <Box className=" table-hold  border-radius-8 " sx={{ mt: 2 }}>
        <Toolbar className="toolbox">
          <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center" flexWrap="wrap" className="toolbox-hold">
            <Stack direction="row" spacing={2} alignItems="center" className="search-hold">
              <h6 className="fs-18 line-height-20 fw-700 grey-color">List of Events</h6>
              <div className="searchbox">
                <Search />
                <input
                  type="text"
                  onChange={(e: any) => {
                    debouncedResults(e);
                    setPagination(1);
                  }}
                  className="searchbar border-radius-4"
                  placeholder="Search By Event Country"
                />
              </div>
            </Stack>
            <div className="icons-btns">
              <IconButton disableRipple>
                <Stack direction="row" spacing={2}>
                  <span className="headIcon">
                    <FilterPopover
                      category={category}
                      setCategory={setCategory}
                      pagination={pagination}


                    />
                  </span>

                </Stack>
              </IconButton>
            </div>
          </Stack>
        </Toolbar>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableHeader.map((p) => {
                  return (
                    <TableCell key={uuidv4()}>
                      <p className="fs-14">
                        {p.name}
                        {p.sortIcon && (
                          <UnfoldMore
                            onClick={() => {
                              setSortItem({ type: !sortItem.type, field: p.sortdata });
                            }}
                          />
                        )}
                      </p>
                    </TableCell>
                  );
                })}


              </TableRow>
            </TableHead>
            {!isLoading && (
              <TableBody>
                {eventsData?.results?.map((row: any, index: any) => (
                  <TableRow key={uuidv4()}>
           
                    <TableCell>  {itemId + index}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.description ? row.description.substring(0, 10):"-------" }</TableCell>
                    <TableCell>{dayjs(row.start).format("DD/MM/YYYY")}</TableCell>
                    <TableCell>{dayjs(row.end).format("DD/MM/YYYY")}</TableCell>
                   
                    <TableCell>
                      <Button
                        onClick={() => {
                          setModalData(row);
                          setModal(true);

                        }}
                        disableRipple
                        sx={{ width: "auto", cursor: 'default' }}
                      >
                        <Button variant="contained" className="small" style={{height:"36px"}} > View Details</Button>

                      </Button>
                    </TableCell>
                    <TableCell>
                    <Checkbox
              size="small"
              style={{ textAlign: "center" }}
              checked={checkedRows[row.id] || false} // Use the checked status from state
              onChange={() => handleCheckboxChange(row)}
            />
                    </TableCell>
            
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
          {isLoading ? <ApiLoader /> : isError && <p style={{ textAlign: "center" }}>No Results Found </p>}
        </TableContainer>
        <Box mt="15px">
          {eventsData?.count > 0 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "2",
              }}
            >
              <small className="selected-field-color fs-14 line-height-20 mx-2">
                <span>
                  {eventsData?.count < 10 && 0}
                  {eventsData?.count}
                </span>{" "}
                total
              </small>
              <Pagination
                showFirstButton
                showLastButton
                shape="rounded"
                variant="outlined"
                count={Math.ceil(eventsData?.count / 10)}
                page={page + 1}
                onChange={(event: unknown, newPage: number) => {
                  setPage(newPage - 1);
                  setPagination(newPage);
                  setItemId((newPage - 1) * 10 + 1);
                }}
              />
            </Box>
          )}
        </Box>

        <Modals
          modal={modal}
          setCounter={setCounter}
          counter={counter}
          handleModel={setModal}
          modaldata={modaldata}

        />
      </Box>

      <Grid container >
      <Grid item xs={12} mt={2}>
    {getFavouriteEvents.length>0 &&  <Typography variant="h4" mb={2}>Favourites Events</Typography>}
    <FavouriteEventsData getFavouriteEvents={getFavouriteEvents} loading={loading}/>
      </Grid>

      </Grid>
    </>


  )
}
export default EventsTable