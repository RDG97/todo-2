import Enter from "./Enter"
import { useState, useEffect } from "react"

import Filt from "./Notdone"
export default function App() {
    const [data, setData] = useState([]);
    const [state, setState] = useState('');
    return(
        <>
    <Enter data={data} setData={setData}/>
    <Filt data={data} setData={setData} state={state} setState={setState}/>
    </>
)}