"use client"
import store from "@/redux/store"
import { Provider } from "react-redux"

const Layout=({children}:any)=>{
    return(
        <>
           <Provider  store={store}>
            {children}
    </Provider>
        </>
    )
}
export default Layout