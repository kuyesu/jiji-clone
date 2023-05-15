import Image from "next/image";
import Banner from "./components/banner";

const items = [
  {
    title: "Vehicles",
    image: "/vehicles.png",
    ads: "1,000 ads",
  },
  {
    title: "Property",
    image: "/real-estate.png",
    ads: "67,004 ads",
  },
  {
    title: "Electronics",
    image: "/electronics.png",
    ads: "87,610 ads",
  },
  {
    title: "Jobs",
    image: "/jobs.png",
    ads: "97,000 ads",
  },
  {
    title: "Services",
    image: "/hobbies.png",
    ads: "67,000 ads",
  },
  {
    title: "Animals & Pets",
    image: "/animals.png",
    ads: "67,000 ads",
  },
  {
    title: "Fashion & Beauty",
    image: "/fashion.png",
    ads: "67,000 ads",
  },
  {
    title: "Home & Garden",
    image: "/home.png",
    ads: "67,000 ads",
  },
  {
    title: "Kids & Toys",
    image: "/kids.png",
    ads: "67,000 ads",
  },
  {
    title: "Sports & Leisure",
    image: "/sports.png",
    ads: "67,000 ads",
  },
  {
    title: "Hobbies & Art",
    image: "/hobbies.png",
    ads: "67,000 ads",
  },
  {
    title: "Holiday Accommodation",
    image: "/holiday.png",
    ads: "67,000 ads",
  },
  {
    title: "Events",
    image: "/events.png",
    ads: "67,000 ads",
  },
  {
    title: "Business & Industrial Equipment",
    image: "/business.png",
    ads: "67,000 ads",
  },
];

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-start ">
      <div className="w-full px-28 mx-28 py-20 pb-0 flex bg-gradient-to-r from-[#00b53f] to-[#00831e] ">
        <div className="w-full">
          <Banner />
        </div>
      </div>
      <div className="flex h-full bg-[#ebf2f7] w-full mx-28 px-28 py-6 gap-6">
        <div className="w-1/2 h-full bg-gray-50 items-center hover:border-r hover:border-[#00b53f] px-0 shadow py-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-between gap-3 py-2 hover:bg-slate-100 items-center px-2"
            >
              <Image src={`${item.image}`} alt="" width={30} height={40} />
              <div className="text-gray-500 flex flex-col space-y-1 font-light text-md w-full">
                <a className="text-gray-500 font-light text-ms">{item.title}</a>
                <a className=" text-xs ">{item.ads}</a>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className=" grid-span-2 w-full h-full ">
          <div className="w-full h-44  gap-2 flex justify-between ">
            <Image src="/banner.png" alt="" width={900} height={80} />
            <div className="w-1/3 ">
              <button className=" rounded-sm flex flex-col justify-center items-center space-y-2 text-sm font-normal p-0 w-full h-full py-1.5 bg-[#fea03c] text-gray-50 uppercase">
                <a className=" font-semibold">Sell Something</a>
                <a className=" bg-gray-50 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-20 h-20 text-[#fea03c]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </a>
                <a className="text-xs">Post an ad for Free</a>
              </button>
            </div>
          </div>
          <div className=" flex flex-col  w-full py-8 px-4 h-full ">
            <h1 className="text-xl py-2 text-gray-600 font-semibold">
              Trending Post
            </h1>
            <div className="w-full h-full grid grid-cols-4 gap-2">
              {/* card item */}
              <div className="w-full h-48 pb-4 flex flex-col justify-between items-center text-start gap-1 bg-white shadow rounded-md">
                <Image src="/iphone.jpeg" alt="" width={300} height={350} />
                <a className=" text-start text-gray-500 text-sm font-light px-2">
                  Iphone 12 pro max
                </a>
                <a className=" text-start text-[#00b53f] text-sm font-light px-2">
                  Ugx 2,000,000
                </a>
              </div>
              <div className="w-full h-48 pb-4 flex flex-col justify-between items-center text-start gap-1 bg-white shadow rounded-md">
                <Image src="/iphone.jpeg" alt="" width={300} height={350} />
                <a className=" text-start text-gray-500 text-sm font-light px-2">
                  Iphone 12 pro max
                </a>
                <a className=" text-start text-[#00b53f] text-sm font-light px-2">
                  Ugx 2,000,000
                </a>
              </div>
              <div className="w-full h-48 pb-4 flex flex-col justify-between items-center text-start gap-1 bg-white shadow rounded-md">
                <Image src="/iphone3.jpeg" alt="" width={300} height={350} />
                <a className=" text-start text-gray-500 text-sm font-light px-2">
                  Iphone 12 pro max
                </a>
                <a className=" text-start text-[#00b53f] text-sm font-light px-2">
                  Ugx 2,000,000
                </a>
              </div>
              <div className="w-full h-48 pb-4 flex flex-col justify-between items-center text-start gap-1 bg-white shadow rounded-md">
                <Image src="/iphone.jpeg" alt="" width={300} height={350} />
                <a className=" text-start text-gray-500 text-sm font-light px-2">
                  Iphone 12 pro max
                </a>
                <a className=" text-start text-[#00b53f] text-sm font-light px-2">
                  Ugx 2,000,000
                </a>
              </div>
              <div className="w-full h-48 pb-4 flex flex-col justify-between items-center text-start gap-1 bg-white shadow rounded-md">
                <Image src="/iphone3.jpeg" alt="" width={300} height={350} />
                <a className=" text-start text-gray-500 text-sm font-light px-2">
                  Iphone 12 pro max
                </a>
                <a className=" text-start text-[#00b53f] text-sm font-light px-2">
                  Ugx 2,000,000
                </a>
              </div>
              <div className="w-full h-48 pb-4 flex flex-col justify-between items-center text-start gap-1 bg-white shadow rounded-md">
                <Image src="/iphone.jpeg" alt="" width={300} height={350} />
                <a className=" text-start text-gray-500 text-sm font-light px-2">
                  Iphone 12 pro max
                </a>
                <a className=" text-start text-[#00b53f] text-sm font-light px-2">
                  Ugx 2,000,000
                </a>
              </div>
              <div className="w-full h-48 pb-4 flex flex-col justify-between items-center text-start gap-1 bg-white shadow rounded-md">
                <Image src="/iphone3.jpeg" alt="" width={300} height={350} />
                <a className=" text-start text-gray-500 text-sm font-light px-2">
                  Iphone 12 pro max
                </a>
                <a className=" text-start text-[#00b53f] text-sm font-light px-2">
                  Ugx 2,000,000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
