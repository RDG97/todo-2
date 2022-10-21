import Enter from "./Enter"
import { useState, useEffect } from "react"

import Filt from "./Notdone"
export default function App() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState('todo');
    
    
    
    
    
    
    return(
    <>
        <Enter data={data} setData={setData}/>
        {page == 'todo' && <Filt data={data} setData={setData} page={page} setPage={setPage}/>}
    </>
)}