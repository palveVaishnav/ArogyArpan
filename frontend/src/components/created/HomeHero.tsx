import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
// import { ShuffleGrid } from "./ShuffleGrid";
// import { Outlet } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-left p-[1em] md:p-[3em] m-1 md:my-2 md:mx-8 ">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">
        <div>
          <span className="block mb-4 text-sm md:text-xl font-medium">
            Let's Help Humanity,
          </span>
          <h3 className="text-4xl md:text-6xl font-semibold font-mono underline">
            Arogy<span className="text-[#000]">Arpan</span>
          </h3>
          <p className="text-base md:text-lg my-4 md:my-6 font-mono">
            Trustworthy Medical Assistance for Those in Need
          </p>
          <div className="grid gap-2 w-fit text-left ml-5 md:ml-10">
            <Link to={"/createFundraiser"}>
              <Button>
                Create Fundraiser <ArrowRight />
              </Button>
            </Link>
            <Link to={"/Fundraisers"}>
              <Button variant="outline" className="border-dashed border-primary bg-inherit hover:bg-primary hover:text-secondary">
                Donate <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="overflow-hidden">
          {/* <ShuffleGrid /> */}
          <div className="grid place-content-center w-full">
            <Link to={"/about"}>
              <div className="theBlob bg-[#75afba] max-h-[30vh] lg:min-h-[50vh] md:max-w-[50vh]  overflow-hidden rounded-lg md:m-4 p-2">
                <img src={"/images/12.png"} className="w-full h-full" />
              </div>
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
};


export default Hero;