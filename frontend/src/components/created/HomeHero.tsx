import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
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
            <Button>
              Get Help <ArrowRight/>
            </Button>
            <Button variant="outline" className="border-dashed border-primary bg-inherit hover:bg-primary hover:text-secondary">
              Donate <ArrowRight/>
            </Button>
            <Button variant="outline" className="border-dashed border-primary bg-inherit hover:bg-primary hover:text-secondary">
              Verify / Report <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="rounded-3xl md:rounded-full overflow-hidden shadow-lg">
          <ShuffleGrid />
        </div>
      </section>
    </div>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://picsum.photos/201/",
  },
  {
    id: 2,
    src: "https://picsum.photos/202/",
  },
  {
    id: 3,
    src: "https://picsum.photos/203/",
  },
  {
    id: 4,
    src: "https://picsum.photos/204/",
  },
  {
    id: 5,
    src: "https://picsum.photos/205/",
  },
  {
    id: 6,
    src: "https://picsum.photos/206/",
  },
  {
    id: 7,
    src: "https://picsum.photos/207/",
  },
  {
    id: 8,
    src: "https://picsum.photos/208/",
  },
  {
    id: 9,
    src: "https://picsum.photos/209/",
  },
  {
    id: 10,
    src: "https://picsum.photos/210/",
  },
  {
    id: 11,
    src: "https://picsum.photos/211/",
  },
  {
    id: 12,
    src: "https://picsum.photos/212/",
  },
  {
    id: 13,
    src: "https://picsum.photos/213/",
  },
  {
    id: 14,
    src: "https://picsum.photos/214/",
  },
  {
    id: 15,
    src: "https://picsum.photos/215/",
  },
  {
    id: 16,
    src: "https://picsum.photos/216/",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 8000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-0.5">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;