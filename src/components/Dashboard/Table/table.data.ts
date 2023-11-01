"use client"
import { TableHeader } from "./Table.interface";

export const tableHeader: TableHeader[] = [
  { name: "Event No.", sortdata: "id", algntext: "",sortIcon:false },
    { name: "Event Category", sortdata: "-category", algntext: "",sortIcon:true },
    { name: "Event Description", sortdata: "eventDescription", algntext: "",sortIcon:true },
    { name: "Event Start Date", sortdata: "-start", algntext: "",sortIcon:true },
    { name: "Event End Date", sortdata: "-end", algntext: "",sortIcon:true },
    { name: "Event Title", sortdata: "-title", algntext: "",sortIcon:true },
  
    // { name: "Status", sortdata: "status", algntext: "left" }
  ];
  