"use client"
import { TableHeader } from "./Table.interface";

export const tableHeader: TableHeader[] = [
  { name: "Event Id", sortdata: "id", algntext: "",sortIcon:false },
    { name: "Event Category", sortdata: "eventCategory", algntext: "",sortIcon:true },
    { name: "Event Description", sortdata: "eventDescription", algntext: "",sortIcon:true },
    { name: "Event Start Date", sortdata: "vehicleNumber", algntext: "",sortIcon:true },
    { name: "Event End Date", sortdata: "offenceType", algntext: "",sortIcon:true },
    { name: "Event Title", sortdata: "createdAt", algntext: "",sortIcon:false },
  
    // { name: "Status", sortdata: "status", algntext: "left" }
  ];
  