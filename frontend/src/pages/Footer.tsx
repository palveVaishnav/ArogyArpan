import { PageList } from "@/utils/PageList"
import { Separator } from "../components/ui/separator"

export default function Footer() {
    return (
        <div className="grid ternaryColor md:grid-cols-2 lg:grid-cols-3 p-4 rounded-t-xl dark:bg-inherit dark:border-white bg-slate-300 mt-5">
            <div className="grid p-4">
                <p className="text-sm">All rights reserved</p>
                <a href="/Home">
                    <p className="font-bold font-mono text-xl md:text-2xl lg:text-3xl">ArogyArpan</p>
                </a>
                <p className="text-sm font-light">
                    Trustworthy Medical Assistance for Those in Need.
                </p>
                <div className="flex space-x-2">
                    <p>Help</p>
                    <Separator orientation="vertical" className="h-full mx-1 bg-gray-400" />
                    <p>Connect</p>
                    <Separator orientation="vertical" className="h-full mx-1 bg-gray-400" />
                    <p>Assist</p>
                </div>
            </div>
            {/* Pages */}
            <div className="grid p-4">
                <div className="">
                    <p className="font-bold font-mono md:text-xl lg:text-2xl">Pages/Navigate</p>
                    <div className="grid grid-cols-2">
                        {
                            PageList.map((page,i) => {
                                return <a key={i} href={page} className="font-light hover:underline">{page}</a>
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Socials */}
            <div className="grid p-4">
                <div className="">
                    <p className="font-bold font-mono md:text-xl lg:text-2xl">Socials</p>
                    <div className="grid grid-cols-2">
                        No Socials for now !!
                    </div>
                </div>
            </div>


        </div>
    )
}