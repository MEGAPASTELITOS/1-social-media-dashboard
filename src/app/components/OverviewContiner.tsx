"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { OverviewCard } from "./OverViewCard"
import { Overview, OverviewToDay } from "@/types"
import { OverviewTodayCard } from "./OverViewToDayCard"

export function OverviewContainer () {
    const [overview,setOverview] = useState<Overview[]>()

    useEffect(()=>{
        axios.get("http://localhost:3000/data.json").then(async res => {
            setOverview(await res.data.overview)
        })
    },[])

    if(!overview) {
        return (
            <p>Error</p>
        )
    }

    return (
        <section className="flex flex-wrap gap-7 place-content-center mb-6">
            {overview.map(overview => (<OverviewCard key={overview.id} overview={overview}/>))}
        </section>
    )
}

export function OverviewTodayContainer () {
    const [overviewToday,setOverviewToday] = useState<OverviewToDay[]>()

    useEffect(()=>{
        axios.get("http://localhost:3000/data.json").then(async res => {
            setOverviewToday(await res.data.overviewToday)
        })
    },[])

    if(!overviewToday) {
        return (
            <p>Error</p>
        )
    }

    return (
        <section>
            <p className="text-dark-grayish-blue dark:text-white text-4xl font-bold pb-6 mb-5 text-center">Overview - Today</p>
            <article className="flex flex-wrap gap-7 place-content-center">
                {overviewToday.map(overview => (<OverviewTodayCard key={overview.id} overviewToDay={overview}/>))}
            </article>
        </section>
    )
}