"use client"

import { useEffect, useId, useState } from "react"
import { useLocalStorage } from "../hook/useLocalStorage"

export function Header() {
    const DarkModeId = useId()
    const [dark,setDark] = useLocalStorage("dark", "false")


    const handleClik = () => {
      console.log()
        setDark(!dark)
    }

    useEffect(()=>{
        if(dark){
          document.documentElement.classList.add('dark')
          localStorage.setItem('dark',"true")
        }else{
          document.documentElement.classList.remove('dark')
          localStorage.setItem('dark', "false")
        }
      },[dark])
    return (
        <header className="dark:bg-very-dark-blue-top bg-very-pale-blue h-58 rounded-b-lg p-8 mb-4 tablet:px-10 phone:px-8 tablet:flex tablet:place-content-between">
          <div>
          <h1 className="dark:text-white text-very-dark-blue text-xl font-bold pb-1">Social Media Dashboard</h1>
          <p className="text-dark-grayish-blue font-bold dark:text-desaturated-blue">Total Followers: 23,004</p>
          <hr className="dark:bg-dark-very-dark-blue bg-black mt-4 mb-2 tablet:hidden"/>
          </div>
         <div className="flex place-content-between place-items-center font-bold tablet:gap-2">
            <p className="text-dark-grayish-blue dark:text-desaturated-blue">Dark Mode</p>
            <label htmlFor={DarkModeId} className="bg-toggle w-12 h-6 rounded-full cursor-pointer flex place-items-center place-content-start p-1 dark:place-content-end dark:bg-dark-toggle hover:brightness-95">
                <input onClick={handleClik} type="checkbox" id={DarkModeId} className="sr-only" defaultChecked={dark}/>
                <div className="h-4 w-4 bg-light-grayish-blue rounded-full dark:bg-very-dark-blue"></div>
            </label>
         </div>
        </header>
    )
}