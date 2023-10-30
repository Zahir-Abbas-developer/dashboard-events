"use client"
import { TableHeader } from "./Table.interface";

export const tableHeader: TableHeader[] = [
    { name: "No", sortdata: "id", algntext: "",sortIcon:false },
    { name: " PCN Number", sortdata: "appealNumber", algntext: "",sortIcon:false },
    { name: "Vehicle Number", sortdata: "vehicleNumber", algntext: "",sortIcon:true },
    { name: "Offence", sortdata: "offenceType", algntext: "",sortIcon:true },
    { name: "Issued Date", sortdata: "createdAt", algntext: "",sortIcon:false },
    { name: "Contravention Time", sortdata: "time", algntext: "",sortIcon:false },
    { name: "Amount", sortdata: "amount", algntext: "",sortIcon:false },
    // { name: "Status", sortdata: "status", algntext: "left" }
  ];
  