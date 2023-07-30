import Lookbook from "@/components/Lookbook";

export default function Home() {


    return (
        <div className={"min-h-[798px] w-full px-4 py-8 flex items-center flex-col"}>
            <div className={"flex max-w-[535px] w-full"}>
                <Lookbook/>
            </div>
        </div>
    )


}