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
    
    function allDone() {
        let arr = data
            const newArr = arr.map(obj => {
                if (obj.stat === 'notdone') {
                return {...obj, stat: 'done'};
                }
                
                return obj;
            });
            console.log('alldone', newArr)
            setData(newArr)
    }

    function deleteComplete() {
        let arr = data
            const newArr = arr.map(obj => {
                if (obj.stat === 'done') {
                return {...obj, stat: 'deleted'};
                }
                
                return obj;
            });
            console.log('alldone', newArr)
            setData(newArr)
    }
    function reactivate() {
        let arr = data
            const newArr = arr.map(obj => {
                if (obj.stat === 'done') {
                return {...obj, stat: 'notdone'};
                }
                
                return obj;
            });
            console.log('alldone', newArr)
            setData(newArr)
    }

    
    
    
    return(
    <>
        <Enter data={data} setData={setData}/>
        <center>
        <input type="submit" id="changestateall" value="Show Tasks" onClick={changeStateTask}></input>
        <input type="submit" id="changestatedone" value="Show Completed tasks" onClick={changeStateDone}></input>
        <input type="submit" id="changestateall" value="Show All tasks" onClick={changeStateAll}></input>
        <input type="submit" id="changestateall" value="Show Deleted tasks" onClick={changeStateDel}></input>
        <input type="submit" id="changestateall" value="mark all tasks done" onClick={allDone}></input>
        <input type="submit" id="changestateall" value="Delete completed tasks" onClick={deleteComplete}></input>
        <input type="submit" id="changestateall" value="Reactivate completed tasks" onClick={reactivate}></input>
        </center>
        {page == 'todo' && <Filt data={data} setData={setData} page={page} setPage={setPage}/>}
        {page == 'done' && <Complete data={data} setData={setData} page={page} setPage={setPage}/>}
        {page == 'all' && <All data={data} setData={setData} page={page} setPage={setPage}/>}
        {page == 'deleted' && <Deleted data={data} setData={setData} page={page} setPage={setPage}/>}
    </>
)}