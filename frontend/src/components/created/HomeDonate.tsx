import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/*
interface DonationRequest {
  image: string;
  name: string;
  age: number;
  problem: string;
  location: string;
  hospital: string;
  doctor: string;
  date: string;
  story: string;
}
*/


const DonationRequestArray = [
    {
        id: 1,
        name: "Donald Deo",
        age: 31,
        problem: "Acute Myeloid Leukemia (AML)",
        location: "Shivajinagar, Pune, MH",
        hospital: "Ruby Hall Clinic, Pune, MH",
        doctor: "Dr. Johny Baba",
        date: new Date('2024-06-15').getTime(),
        story: "Donald Deo, a dedicated father of two and a hardworking IT professional, never imagined that a routine health check-up would turn his life upside down. Just a few months ago, Donald began experiencing unusual fatigue and frequent fevers, which he initially dismissed as the side effects of long work hours. However, when the symptoms persisted, he decided to seek medical advice.",
        image:"https://imgs.search.brave.com/dC0Vwj-PKzQKAeBvxxZUGMj4fBq4JoUxYalj3hcxRns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1kb2N0b3It/c3VwcG9ydGluZy1o/aXMtcGF0aWVudF8x/MDk4LTIyMzcuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
    {
        id: 2,
        name: "Ayesha Khan",
        age: 29,
        problem: "Stage 2 Breast Cancer",
        location: "Andheri, Mumbai, MH",
        hospital: "Nanavati Hospital, Mumbai, MH",
        doctor: "Dr. Sameer Parekh",
        date: new Date('2024-06-20').getTime(),
        story: "Ayesha Khan, a young mother and a passionate teacher, was diagnosed with Stage 2 Breast Cancer after discovering a lump during a routine self-examination. With her family relying on her both emotionally and financially, Ayesha is determined to fight this battle, but she needs your help to afford the treatment costs.",
        image:"https://imgs.search.brave.com/dC0Vwj-PKzQKAeBvxxZUGMj4fBq4JoUxYalj3hcxRns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1kb2N0b3It/c3VwcG9ydGluZy1o/aXMtcGF0aWVudF8x/MDk4LTIyMzcuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
    {
        id: 3,
        name: "Rajesh Sharma",
        age: 45,
        problem: "Severe Kidney Failure",
        location: "Indiranagar, Bangalore, KA",
        hospital: "Manipal Hospital, Bangalore, KA",
        doctor: "Dr. Nitya Anand",
        date: new Date('2024-07-01').getTime(),
        story: "Rajesh Sharma, a software engineer, was recently diagnosed with severe kidney failure, requiring immediate dialysis and a kidney transplant. Despite having insurance, the mounting costs of treatment and medications have put a strain on his family's finances. Rajesh's friends and colleagues have come together to raise funds to help him during this challenging time.",
        image:"https://imgs.search.brave.com/dC0Vwj-PKzQKAeBvxxZUGMj4fBq4JoUxYalj3hcxRns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1kb2N0b3It/c3VwcG9ydGluZy1o/aXMtcGF0aWVudF8x/MDk4LTIyMzcuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
    {
        id: 4,
        name: "Meera Patel",
        age: 35,
        problem: "Cerebral Aneurysm",
        location: "Vastrapur, Ahmedabad, GJ",
        hospital: "Zydus Hospital, Ahmedabad, GJ",
        doctor: "Dr. Ravi Desai",
        date: new Date('2024-07-10').getTime(),
        story: "Meera Patel, a loving wife and an artist, was diagnosed with a cerebral aneurysm that requires urgent surgery. Her husband, a small business owner, has exhausted their savings on medical expenses. The couple is seeking support to cover the costs of the surgery that can save Meera's life.",
        image:"https://imgs.search.brave.com/dC0Vwj-PKzQKAeBvxxZUGMj4fBq4JoUxYalj3hcxRns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1kb2N0b3It/c3VwcG9ydGluZy1o/aXMtcGF0aWVudF8x/MDk4LTIyMzcuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
    {
        id: 5,
        name: "Arjun Verma",
        age: 52,
        problem: "Severe Lung Infection",
        location: "Mylapore, Chennai, TN",
        hospital: "Apollo Hospital, Chennai, TN",
        doctor: "Dr. Sunil Kumar",
        date: new Date('2024-07-15').getTime(),
        story: "Arjun Verma, a retired army officer, has been battling a severe lung infection that has left him bedridden. With the hospital bills piling up, Arjun's family is seeking financial help to continue his treatment and give him a chance to recover.",
        image:"https://imgs.search.brave.com/dC0Vwj-PKzQKAeBvxxZUGMj4fBq4JoUxYalj3hcxRns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1kb2N0b3It/c3VwcG9ydGluZy1o/aXMtcGF0aWVudF8x/MDk4LTIyMzcuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
    {
        id: 6,
        name: "Neha Sinha",
        age: 40,
        problem: "Multiple Sclerosis (MS)",
        location: "Salt Lake, Kolkata, WB",
        hospital: "Fortis Hospital, Kolkata, WB",
        doctor: "Dr. Anjali Roy",
        date: new Date('2024-07-20').getTime(),
        story: "Neha Sinha, a vibrant mother and a freelance writer, was diagnosed with Multiple Sclerosis. The degenerative disease has started affecting her mobility, and she needs ongoing treatment and therapy to manage her symptoms. Neha's family is reaching out for help to cover the escalating costs of her treatment.",
        image:"https://imgs.search.brave.com/dC0Vwj-PKzQKAeBvxxZUGMj4fBq4JoUxYalj3hcxRns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1kb2N0b3It/c3VwcG9ydGluZy1o/aXMtcGF0aWVudF8x/MDk4LTIyMzcuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
    {
        id: 7,
        name: "Vikram Deshmukh",
        age: 50,
        problem: "Liver Cirrhosis",
        location: "Kothrud, Pune, MH",
        hospital: "Sahyadri Hospital, Pune, MH",
        doctor: "Dr. Pramod Joshi",
        date: new Date('2024-07-25').getTime(),
        story: "Vikram Deshmukh, a dedicated school principal, has been diagnosed with advanced liver cirrhosis. The treatment is extensive and expensive, involving multiple hospital visits and medications. Vikram's family is struggling to keep up with the costs and is appealing for financial support to continue his treatment.",
        image:"https://imgs.search.brave.com/dC0Vwj-PKzQKAeBvxxZUGMj4fBq4JoUxYalj3hcxRns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1kb2N0b3It/c3VwcG9ydGluZy1o/aXMtcGF0aWVudF8x/MDk4LTIyMzcuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
    {
        id: 8,
        name: "Sunita Rao",
        age: 38,
        problem: "Chronic Heart Disease",
        location: "Madhapur, Hyderabad, TG",
        hospital: "Yashoda Hospital, Hyderabad, TG",
        doctor: "Dr. Vishal Reddy",
        date: new Date('2024-07-30').getTime(),
        story: "Sunita Rao, a single mother of two, was diagnosed with chronic heart disease that requires immediate surgery. Sunita's only source of income is her small business, which has been severely affected by her condition. She is in urgent need of funds to undergo the life-saving surgery.",
        image:"https://imgs.search.brave.com/dC0Vwj-PKzQKAeBvxxZUGMj4fBq4JoUxYalj3hcxRns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1kb2N0b3It/c3VwcG9ydGluZy1o/aXMtcGF0aWVudF8x/MDk4LTIyMzcuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
    {
        id: 9,
        name: "Karan Singh",
        age: 47,
        problem: "Pancreatic Cancer",
        location: "Sector 62, Noida, UP",
        hospital: "Max Hospital, Noida, UP",
        doctor: "Dr. Rajeev Kapoor",
        date: new Date('2024-08-05').getTime(),
        story: "Karan Singh, a successful entrepreneur and father, was diagnosed with pancreatic cancer. Despite his best efforts to stay strong, the disease has taken a toll on him both physically and financially. Karan's family is seeking help to cover the enormous costs of treatment and give him a fighting chance.",
        image:"https://imgs.search.brave.com/dC0Vwj-PKzQKAeBvxxZUGMj4fBq4JoUxYalj3hcxRns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1kb2N0b3It/c3VwcG9ydGluZy1o/aXMtcGF0aWVudF8x/MDk4LTIyMzcuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
    {
        id: 10,
        name: "Priya Menon",
        age: 28,
        problem: "Systemic Lupus Erythematosus (SLE)",
        location: "Vyttila, Kochi, KL",
        hospital: "Amrita Institute of Medical Sciences, Kochi, KL",
        doctor: "Dr. Radhika Nair",
        date: new Date('2024-08-10').getTime(),
        story: "Priya Menon, a young professional and an aspiring artist, was diagnosed with Systemic Lupus Erythematosus (SLE), an autoimmune disease that affects her kidneys and joints. The ongoing treatment has drained her savings, and Priya is now seeking help to manage her condition and maintain a semblance of normalcy in her life.",
        image:"https://imgs.search.brave.com/dC0Vwj-PKzQKAeBvxxZUGMj4fBq4JoUxYalj3hcxRns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by95/b3VuZy1kb2N0b3It/c3VwcG9ydGluZy1o/aXMtcGF0aWVudF8x/MDk4LTIyMzcuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
    },
];

function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // Track the direction of the animation

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1); // Moving to the right
      setIndex((prevIndex) => (prevIndex + 1) % DonationRequestArray.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [index]);

  const handlePrevious = () => {
    setDirection(-1); // Moving to the left
    setIndex((prevIndex) =>
      prevIndex === 0
        ? DonationRequestArray.length - 1
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1); // Moving to the right
    setIndex((prevIndex) => (prevIndex + 1) % DonationRequestArray.length);
  };

  return (
    <div className="relative overflow-hidden w-full">      
      <motion.div
        key={index}
        initial={{ x: direction * 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -direction * 300, opacity: 0 }}
        transition={{ type: "tween", duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 border w-full rounded-md text-left bg-slate-100 shadow-xl"
      >
        <div className="w-full">
          <img
            src={DonationRequestArray[index].image}
            alt={`Image for ${DonationRequestArray[index].name}`}
            className="w-full md:h-full"
          />
        </div>
        <div className="w-full grid gap-3 md:gap-4 p-4">
          <div className="">
            <p className="flex">
                <p className="font-serif">Name: </p> 
                {DonationRequestArray[index].name}
            </p>
            <p className="flex">
                <p className="fosnt-serif">Age: </p>                  
                {DonationRequestArray[index].age}
            </p>
            <p className="flex">
                <p className="font-serif">Problem: </p>
                {/* Problem:  */}
                {DonationRequestArray[index].problem}
            </p>
            <p className="flex">
                <p className="font-serif">Location: </p>
                {/* Location:  */}
                {DonationRequestArray[index].location}
            </p>
            <p className="flex">
                <p className="font-serif">Hospital: </p>
                {DonationRequestArray[index].hospital}
            </p>
            <p className="flex">
                <p className="font-serif">Doctor: </p>
                {/* Doctor:  */}
                {DonationRequestArray[index].doctor}
            </p>
            <p className="flex">
                <p className="font-serif">Date: </p>
                {DonationRequestArray[index].date}
                
            </p>
          </div>
          <div className="">
            <p className="font-serif">Story :</p>
            <p className="pl-4">{DonationRequestArray[index].story}</p>
          </div>
        </div>
      </motion.div>
      <div className="absolute inset-0 flex justify-between items-center p-4 z-10">
        <button onClick={handlePrevious} className="text-2xl">
          {"<"}
        </button>
        <button onClick={handleNext} className="text-2xl">
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carousel;
