import { FcSimCardChip } from "react-icons/fc";
import { MdWorkOutline } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <div className=" font-poppins  relative h-screen container mx-auto  flex flex-row justify-center items-center">
          <div className="absolute  bg-red-500 h-32 w-32 rounded-full transform translate-x-[-157px] translate-y-[-75px]  "></div>
          <div className="card p-4 absolute text-white backdrop-filter backdrop-blur-lg shadow-xl  rounded-xl z-10 bg-white/20 h-40 w-80 flex flex-col justify-start items-start space-y-1">
            <div className="grid grid-cols-2 gap-60">
              <div className="flex flex-row justify-start items-center space-x-1">
                <span className="text-lg">
                  <MdWorkOutline />
                </span>
                <span className="text-sm font-bold flex flex-row justify-start items-center space-x-1">
                  <span>HIRE</span> <span>ME</span>
                </span>
              </div>
              <span className="text-xl">
                <FcSimCardChip />
              </span>
            </div>

            <span className="name text-sm font-bold tracking-widest uppercase pt-4">
              Gyanindra Yadav
            </span>
            <span className="text-sm font-semibold uppercase tracking-wide flex flex-row justify-center items-center space-x-1">
              <span>&#10094;</span>
              <span>Frontend Developer</span>
              <span>&#47;</span>
              <span>&#10095;</span>
            </span>
            <div className="grid grid-cols-2 gap-[102px]">
              <div className="exp flex flex-col justify-start items-start space-x-1">
                <span className="text-sm ">Experience</span>
                <span className="text-sm ">
                  3<sup>+</sup> Years
                </span>
              </div>
              <div className="notice flex flex-col justify-end items-end space-x-1">
                <span className="text-sm ">Notice Period</span>
                <span className="text-sm ">2 Months</span>
              </div>
            </div>
          </div>
          <div className="absolute bg-yellow-500 h-32 w-32 rounded-full transform translate-x-[157px] translate-y-[75px] "></div>
        </div>
      </div>
    </>
  );
}
