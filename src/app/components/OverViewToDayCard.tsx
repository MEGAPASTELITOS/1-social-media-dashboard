import { OverviewToDay } from "@/types";
import { compressNumber, networkIconsRender } from "./OverViewCard";
import { DownIcon, UpIcon } from "./Icons/IconDirection";

export function OverviewTodayCard ({overviewToDay}:{overviewToDay:OverviewToDay}) {
    const {isUp,network,porcentage,stats,statsType} = overviewToDay
    return (
        <article className={`rounded-lg bg-light-grayish-blue w-[328px] p-4 cursor-pointer dark:bg-dark-desaturated-blue hover:brightness-95`}>
            <div className="flex place-content-between">
                <p className="text-dark-grayish-blue dark:text-desaturated-blue">{statsType}</p>
                {networkIconsRender[network]}
            </div>
            <div className="pt-4 pb-4"/>
            <div className="flex place-content-between p">
                <p className="dark:text-white text-4xl font-bold">{compressNumber(stats)}</p>
                <p className={`${isUp ? "text-green-600" :"dark:text-red-600 text-red-500"} flex place-items-center` }>
                <span className="pr-1">{isUp ? <UpIcon/> : <DownIcon/>}</span>
                {porcentage}%
                </p>
            </div>
        </article>
    )
}