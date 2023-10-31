"use client"
import {  useMemo, useState } from "react";
import { Box, Button, IconButton, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from "@mui/material";
import { tableHeader } from "./table.data";
import { v4 as uuidv4 } from "uuid";


import { UnfoldMore,RemoveRedEye, Search } from "@mui/icons-material";
import dayjs from "dayjs";
import { useGetEventsQuery } from "@/services/event-api";
import Modals from "../EventDetailsModal";
const EventsTable=()=>{
  const {data,isLoading,isSuccess}=useGetEventsQuery({})
  const [modaldata, setModalData] = useState<any>();
  const [page, setPage] = useState(0);
  const [itemId, setItemId] = useState<number>(1);
  const [pagination, setPagination] = useState(1);
  const [counter, setCounter] = useState(1);
  const [modal, setModal] = useState(false);
  const [sortItem, setSortItem] = useState<any>({ type: true, field: "createdAt" });
  console.log(data)

let eventsData:any
if(isSuccess){
  eventsData=data
}

// const debouncedResults = useMemo(() => {
//   return debounce(handleChange, 500);
// }, []);

return(
  <>
  <Toolbar className="toolbox">
          <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center" flexWrap="wrap" className="toolbox-hold">
            <Stack direction="row" spacing={2} alignItems="center" className="search-hold">
              <h6 className="fs-18 line-height-20 fw-700 grey-color">List of Events</h6>
              <div className="searchbox">
                <Search />
                <input
                  type="text"
                  onChange={(e: any) => {
                    // debouncedResults(e);
                    setPagination(1);
                  }}
                  className="searchbar border-radius-4"
                  placeholder="Search By Event Category"
                />
              </div>
            </Stack>
            <div className="icons-btns">
              <IconButton disableRipple>
                <Stack direction="row" spacing={2}>
                  <span className="headIcon">
                    {/* <FilterPopover
                      endPointPcnFilter={endPointPcnFilter}
                      filterParamsField={filterParamsField}
                      pagination={pagination}
                      vehicleNumbers={vehicleNumbers}
                      userRole={userRole}
                      employee={employee}
                      endPoint={endPoint}
                    /> */}
                  </span>

                  
                 
                </Stack>
              </IconButton>
            </div>
          </Stack>
        </Toolbar>
   <TableContainer>
  <Table className="table-status-pcn" sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        {tableHeader.map((p, index) => {
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
        <TableCell>
          <p className="ps-14">Status</p>
        </TableCell>
       
      </TableRow>
    </TableHead>
    {!isLoading && (
      <TableBody>
        {eventsData?.results?.map((row: any, index: any) => (
          <TableRow key={uuidv4()}>
            <TableCell>{itemId + index}</TableCell>
            <TableCell>{row.category}</TableCell>
            {/* <TableCell>{row.description?row.description:"--------"}</TableCell> */}
            <TableCell>{dayjs(row.start).format("DD/MM/YYYY")}</TableCell>
            <TableCell>{dayjs(row.end).format("DD/MM/YYYY")}</TableCell>
            <TableCell>{row.title}</TableCell>
           
            <TableCell>
              <Button
              onClick={() => {
                setModalData(row);
                setModal(true);
               
              }}
                disableRipple
                sx={{ width: "auto",cursor:'default' }} 
              >
                <Button variant="contained" className="small">   View Details</Button>
      
              </Button>
            </TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    )}
  </Table>
  {/* {isLoading ? <ApiLoader /> : totallPcn?.total === 0 && <p>No Results</p>} */}
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
          modaldata={modaldata }
        
        />
  </>
 

) 
}
export default EventsTable