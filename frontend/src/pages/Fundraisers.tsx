import HomeDonate from "@/components/created/HomeDonate";

function Fundraisers() {
    return (
        
        <div className=" grid overflow-hidden max-w-full py-4 p-2 gap-2 md:gap-4">    
            <div className="grid place-content-center gap-1">
                <p className="SectionTitle">
                    <p>Contribute Now</p>
                </p>
                <p className="w-fit place-self-center">Help people Directly !!</p>
            </div>            
            <div className="p-4">
                <HomeDonate />
                <HomeDonate />
                <HomeDonate />
                <HomeDonate />
                <HomeDonate />
                <HomeDonate />
                <HomeDonate />
                <HomeDonate />
            </div>
        </div>
    )
}

export default Fundraisers;