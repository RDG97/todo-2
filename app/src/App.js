import Enter from "./Enter"
import { useState, useEffect } from "react"
import Complete from "./Complete";
import Filt from "./Notdone"
import All from "./All";
import Deleted from "./Deleted";



export default function App() {
    const [data, setData] = useState(() => {
        return JSON.parse(window.localStorage.getItem('data')) || []
    });
    const [page, setPage] = useState('todo');

    useEffect (() => {localStorage.setItem('data', JSON.stringify(data));
    }, [data]);
    

    function changeStateDone(props) {
        let test2 = page
        test2 = 'done'
        setPage(test2)
        console.log('changed state to', page)
    }
    function changeStateAll(props) {
        let test2 = page
        test2 = 'all'
        setPage(test2)
        console.log('changed state to', page)
    }
    function changeStateDel(props) {
        let test2 = page
        test2 = 'deleted'
        setPage(test2)
        console.log('changed state to', page)
    }
    function changeStateTask(props) {
        let test2 = page
        test2 = 'todo'
        setPage(test2)
        console.log('changed state to', page)
    }
    
    
    
    
    
    
    return(
    <>
        <Enter data={data} setData={setData}/>
        <center>
        <input type="submit" id="changestatedone" value="Completed tasks" onClick={changeStateDone}></input>
        <input type="submit" id="changestateall" value="All tasks" onClick={changeStateAll}></input>
        <input type="submit" id="changestateall" value="Deleted tasks" onClick={changeStateDel}></input>
        <input type="submit" id="changestateall" value="Tasks" onClick={changeStateTask}></input>
        </center>
        {page == 'todo' && <Filt data={data} setData={setData} page={page} setPage={setPage}/>}
        {page == 'done' && <Complete data={data} setData={setData} page={page} setPage={setPage}/>}
        {page == 'all' && <All data={data} setData={setData} page={page} setPage={setPage}/>}
        {page == 'deleted' && <Deleted data={data} setData={setData} page={page} setPage={setPage}/>}
    </>
)}