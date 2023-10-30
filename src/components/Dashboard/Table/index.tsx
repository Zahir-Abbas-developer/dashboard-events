"use client"
import {  useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { tableHeader } from "./table.data";
import { v4 as uuidv4 } from "uuid";
import { UnfoldMore,RemoveRedEye } from "@mui/icons-material";
import dayjs from "dayjs";
import { useGetEventsQuery } from "@/services/event-api";
const EventsTable=()=>{
  // const {data,isLoading}=useGetEventsQuery({})
  const [modaldata, setModalData] = useState<any>();
  const [page, setPage] = useState(0);
  const [itemId, setItemId] = useState<number>(1);
  const [modal, setModal] = useState(false);
  const [sortItem, setSortItem] = useState<any>({ type: true, field: "createdAt" });
  // console.log(data)
return(
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
        <TableCell>
          <p className="ps-14">Action</p>
        </TableCell>
      </TableRow>
    </TableHead>
    {/* {!isLoading && (
      <TableBody>
        {data?.map((row: any, index: any) => (
          <TableRow key={uuidv4()}>
            <TableCell>{itemId + index}</TableCell>
            <TableCell>{row.pcnNumber}</TableCell>
            <TableCell>{row.vehicleNumber}</TableCell>
            <TableCell>{row.offenceCode}</TableCell>
            <TableCell>{dayjs(row.issuedAt).format("DD/MM/YYYY")}</TableCell>
            <TableCell>{row.time}</TableCell>
            <TableCell>£ {row.amount}</TableCell>
            <TableCell>
              <Button
                disableRipple
                sx={{ width: "auto",cursor:'default' }}
                className={row.status === "in_process" ? "in_process" : row.status === "new" ? "new" : row.status === "rejected" ? "rejected" : "accepted"}
              >
                <span className="text-white fs-12 text-status  status-padding text-right">
                  {row.status === "in_process"
                    ? `Appeal ${row.status.charAt(0).toUpperCase() + row.status.slice(1).replaceAll("_", " ")}`
                    : row.status.charAt(0).toUpperCase() + row.status.slice(1).replaceAll("_", " ")}
                </span>
              </Button>
            </TableCell>
            <TableCell className="cursor-pointer">
              <RemoveRedEye
                onClick={() => {
                  setModalData(row);
                  setModal(true);
                 
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    )} */}
  </Table>
  {/* {isLoading ? <ApiLoader /> : totallPcn?.total === 0 && <p>No Results</p>} */}
</TableContainer>
) 
}
export default EventsTable