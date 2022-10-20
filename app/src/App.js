import Enter from "./Enter"
import { useState } from "react"

import Notdone from "./Notdone"
export default function App() {
    const [data, setData] = useState([]);
    return(
        <>
    <Enter data={data} setData={setData}/>
    <Notdone data={data} setData={setData}/>
    </>
)}