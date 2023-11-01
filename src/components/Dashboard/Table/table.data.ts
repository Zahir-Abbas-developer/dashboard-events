"use client"
import { TableHeader } from "./Table.interface";

export const tableHeader: TableHeader[] = [
  { name: "Event No.", sortdata: "id", algntext: "",sortIcon:false },
    { name: "Event Category", sortdata: "-category", algntext: "",sortIcon:true },
    { name: "Event Country", sortdata: "country", algntext: "",sortIcon:true },
    { name: "Event Description", sortdata: "eventDescription", algntext: "",sortIcon:false },
    { name: "Event Start Date", sortdata: "-start", algntext: "",sortIcon:false },
    { name: "Event End Date", sortdata: "-end", algntext: "",sortIcon:false },
    { name: "Event Details", sortdata: "-title", algntext: "",sortIcon:false },
    { name: "Mark To Favourites", sortdata: "-title", algntext: "",sortIcon:false },

  
    // { name: "Status", sortdata: "status", algntext: "left" }
  ];
  