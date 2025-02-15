import React from 'react'
import Header from './_components/Header'
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

function DashboardLayout({children}) {
  return (
    <div>
        <Header/>
        <div className='mx-5 md:mx-20 lg:mx-36'>
        {children}
         <SpeedInsights /> 
              <Analytics />
        </div>
       
    </div>
  )
}

export default DashboardLayout