import { AudienceType, Overview } from "@/types";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "./Icons/NetworkIcons";
import { DownIcon, UpIcon } from "./Icons/IconDirection";

export function compressNumber(audience:number) {
    if (audience < 10000){
        return audience.toString()
    }else if(audience >= 10000 && audience <= 100000){
        return `${audience.toString().substring(0,2)}K`
    }else if(audience >= 100000 && audience <= 1000000) {
        return `${audience.toString().substring(0,3)}K`
    }
}

export const networkIconsRender:any = {
  Facebook: <FacebookIcon/>,
  Twitter: <XIcon/>,
  Instagram: <InstagramIcon/>,
  YouTube: <YoutubeIcon/>
}

const networkBg:any = {
  Facebook: "bg-facebook",
  Twitter: "bg-twitter",
  Instagram: "bg-instagram",
  YouTube: "bg-youTube"
}

export function OverviewCard({overview}:{overview:Overview}) {
    const {audience,audienceType:audienceType,isUp,network,today,user,id} = overview
    
      let textAudienceBg = "text-white"
      if(today > 70) {
        textAudienceBg = "text-green-600"
      }

    return (
        <article className={`rounded-lg bg-light-grayish-blue w-[328px] cursor-pointer  dark:bg-dark-desaturated-blue hover:brightness-95`}>

        <div className={`w-full h-1 ${networkBg[network]} rounded-t-lg `}/>
        <div className="p-8 px-5 flex flex-col place-items-center">

          <div className="pb-5 flex place-items-center gap-2">
            {networkIconsRender[network]}
            <p className="dark:text-desaturated-blue text-dark-grayish-blue">{user}</p>
          </div>

          <div className="flex flex-col gap-2 text-center items-center place-content-center">
            <p className="dark:text-white font-bold text-6xl">{compressNumber(audience)}</p>
            <p className="dark:text-desaturated-blue text-dark-grayish-blue text-xs uppercase tracking-[5px]">{audienceType}</p>
          </div>

          <div className="flex place-items-center gap-1 pt-6">
            {isUp ? <UpIcon/> : <DownIcon/>}
            <p className={`dark:${textAudienceBg} ${isUp ? "text-green-600" :"dark:text-red-600 text-red-500"} ` }>
                {today} today
            </p>
         </div>
        </div>
        </article>
    )
}

