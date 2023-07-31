import LeftArrow from "@/assets/icons/leftArrow"
import RightArrow from "@/assets/icons/rightArrow"
import { lookbookData } from "@/data/lookbook"
import { useState } from "react"

export default function Lookbook(){
    const [index, setIndex] = useState(0)

    return (
        <div className={"flex flex-col sm:flex-row w-full h-full justify-between gap-10"}>
            <div className={"flex flex-col w-full justify-between container sm:max-w-[279px] gap-8 relative"}>
                <img src={lookbookData[index].image} alt={"lookbook"} className={"w-full sm:h-[360px] sm:w-[279px]"}/>
                <div className={"flex flex-col gap-2"}>
                    <div className={"flex flex-row container max-w-[120px]"}>
                    {lookbookData[index]?.palette?.map((color) => {
                        return (
                            <div style={{background: color}} className={"w-[24px] h-[24px]"}>
                        </div>

                        )
                        })
                        }
                    </div>
                <img src={"/images/fw.png"} alt={"fw"} width={169} height={51}/>
                <img src={"/images/hausAlternate.png"} alt={"fw"} className={"w-[85px] h-[25px] lg:w-[169px] lg:h-[51px] absolute right-0 lg:left-0 lg:-translate-x-[150%] lg:translate-y-12"}/>
                <div className={"flex flex-col gap-[10px] w-full"}>
                {lookbookData[index]?.attributes?.map((attribute) => {
                            return (
                                <div className={"flex flex-row justify-between gap-[10px] w-full text-[13px]"}>
                                <div className={"flex bg-primary items-center justify-center min-w-[56px] italic font-bold"}><p>{attribute.name}</p></div>
                                <div className={"flex p-2 bg-tertiary border border-primary items-start w-full"}><p>{attribute.value}</p></div>
                                </div>
                            )
                        })
                    
               }
                </div>
                <img src={"/images/cautionTape2.png"} alt={"caution"} className={"w-full h-[13px] mt-1"}/>
            </div>
            </div>
            <div className={"flex flex-col gap-4 w-full sm:container sm:max-w-[216px]"}>
                <div className={"grid grid-cols-5 sm:grid-cols-4 container h-full sm:max-h-[360px] gap-2"}>
                {lookbookData.map((item, itemIndex) => {
                        return (
                            <button className={`${index === itemIndex && "border border-primary"}`} onClick={() => setIndex(itemIndex)}><img src={item.image} alt={"lookbook image"} className={"w-full h-full"}/></button>
                        )
                })
                }
                </div>
                <div className={"flex flex-row items-center gap-4 w-full justify-center"}>
                <button className={"flex items-center justify-center w-[50px] h-[50px]"} disabled={index === 0} onClick={() => setIndex(index-1)}><LeftArrow/></button>
                <p className={"font-sm"}>{index+1 + " of " + "20"}</p>
                <button className={"flex items-center justify-center w-[50px] h-[50px]"} disabled={index === 19} onClick={() => setIndex(index+1)}><RightArrow/></button>
                </div>
            </div>
        </div>
    )
}