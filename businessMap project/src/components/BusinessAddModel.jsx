import React from 'react'
import { Map } from "./Map";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react"

const BusinessAddModel = ({modelIsOpen, setModelIsOpen}) => {
    const [businessName, setBusinessName] = useState("");
    const [businessDate, setBusinessDate] = useState("");
    const [currentMarkerPosition, setCurrentMarkerPosition] = useState({
        lat:51.505 ,
        lng:-0.09
    });


    const handleNameChange = (e) => {

    setBusinessName(e.target.value)
    }
    const handleDateChange = (e) => {

    setBusinessDate(e.target.value)
    }
    const closeModel = () => setModelIsOpen(false);

    const handleSubmit = () => {

    }


  return (
    <>
    <div onClick={closeModel} className={`inset-0 absolute h-screen w-screen flex justify-center items-center transition-all ${modelIsOpen? 'bg-black/60 visible ':"invisible"}`}>
            <div onClick={(e => e.stopPropagation())} className={`h-[90%] w-1/3 bg-white rounded-lg py-4 px-8 shadow-lg ${modelIsOpen ? "translate-y-0": "translate-y-[900px]" } ${modelIsOpen ? "scale-100": "scale-0" }`}>
              <div className="flex flex-row justify-between items-center">
                <span className="text-lg font-bold">Add Business</span>
                <GiTireIronCross  size={20} color="gray" onClick={closeModel} />
              </div>


              <div className="my-5 w-full border-rose-500 border-b-2 rounded-full"></div>

              <div className="font-bold text-lg text-slate-800">Add Business Information</div>
              <div className="flex flex-col py-4 relative justify-center">
                <input onChange={handleNameChange} value={businessName} type="text" placeholder=" " className="border-rose-500 border-[3px] rounded-lg p-3 outline-none peer" />
                <span className="absolute left-3 text-gray-500 transition-all flex bg-white peer-focus:-translate-y-6  peer-focus:translate-x-30 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:translate-x-0 -translate-y-6 translate-x-30  pointer-events-none peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs text-md">business name</span>
              </div>

              <div className="flex flex-col py-4 relative justify-center">
                <input onChange={handleDateChange} value={businessDate} type="text" placeholder=" " className="border-rose-500 border-[3px] rounded-lg p-3 outline-none peer" />
                <span className="absolute left-3 text-gray-500 transition-all flex bg-white peer-focus:-translate-y-6  peer-focus:translate-x-30 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:-translate-x-0 -translate-y-6 translate-x-30  pointer-events-none peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs text-md">Organization Date</span>
              </div>


              <span className="font-bold text-xl text-slate-800">Add Business Location</span>
              <div className="overflow-hidden w-full h-1/2 mt-2">
                <Map currentMarkerPosition={currentMarkerPosition} setCurrentMarkerPosition={setCurrentMarkerPosition} />
              </div>

              <div className="flex flex-row justify-end gap-4 my-4">
                <button  onClick={closeModel} className="text-rose-500 text-bold border border-rose-500 py-2 px-4 rounded-md hover:text-rose-500/60 hover:border-rose-500/60">Close</button>
                <button onClick={handleSubmit} className="bg-rose-500 py-2 px-4 rounded-md text-white hover:bg-rose-500/80">Submit</button>
              </div>
               
            </div>
          </div> 
    </>
  )
}

export default BusinessAddModel