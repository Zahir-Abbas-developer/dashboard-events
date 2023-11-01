"use client"
import store from "@/redux/store"
import { Suspense } from "react"
import { Provider } from "react-redux"
import { PreLoader } from "../PreLoader/Index"

const Layout=({children}:any)=>{
    return(
        <>

           <Provider  store={store}>
           <Suspense fallback={<PreLoader />}>
            {children}
            </Suspense>
    </Provider>
        </>
    )
}
export default Layout