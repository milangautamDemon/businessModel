import { useState } from "react"
import { FaBookOpen } from "react-icons/fa";
import BusinessAddModel from "./components/BusinessAddModel";


export function App() {
  const [modelIsOpen, setModelIsOpen] = useState(true);
  
  // const handleLocationChange = (e) => {

  //   setBusinessLocation(e.target.value)
  // }
  
  return (
    <>
      <div className="w-screen h-screen">
        <FaBookOpen onClick={()=> setModelIsOpen(true)} size={30} color="blue" />
        <BusinessAddModel modelIsOpen={modelIsOpen} setModelIsOpen={setModelIsOpen} />
      </div>
      
    </>
  )
}
