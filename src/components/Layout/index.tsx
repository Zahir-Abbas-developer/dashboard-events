"use client"
import store from "@/redux/store"
import { Suspense } from "react"
import { Provider } from "react-redux"

const Layout=({children}:any)=>{
    return(
        <>

           <Provider  store={store}>
           <Suspense fallback={<p>Loading feed...</p>}>
            {children}
            </Suspense>
    </Provider>
        </>
    )
}
export default Layout