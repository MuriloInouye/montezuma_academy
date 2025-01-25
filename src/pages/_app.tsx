import React from "react"
import type {AppProps} from "next/app"

import {GlobalStyle} from "../styles/global"
import {Providers} from "../providers/index"

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



const App = ({Component, pageProps}: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps}/>
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Providers>
  )
}

export default App