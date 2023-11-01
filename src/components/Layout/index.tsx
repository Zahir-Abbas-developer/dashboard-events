"use client"
import store from "@/redux/store"
import { Suspense } from "react"
import { Provider } from "react-redux"
import { PreLoader } from "../PreLoader/Index"
import Header from "../Header"
import Breadcrumb from "../BreadCrumb"

const tempArray = [
    { name: "Dashboard "},
    { name: "Events "},
    
  ];

const Layout=({children}:any)=>{
    return(
        <>
           <Provider  store={store}>
           <Suspense fallback={<PreLoader />}>
            <Header/>
            <Breadcrumb breadCrumbData={tempArray} />
            {children}
            </Suspense>
    </Provider>
        </>
    )
}
export default Layout