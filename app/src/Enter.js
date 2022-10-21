import { useState, useEffect } from "react";
import Filt from "./Notdone";
export default function Enter(props) {
    const [Todo, setTodo] = useState([]);
    
    function addTodo(e) {
        const Todof = document.getElementById('Todof')
        setTodo(e.target.value);
        console.log(Todo)
    }
        function emp() {}

    let list = []
    
    function setit() {
        //console.log('help')
        let x = props.data.length + 1
        let test = [...props.data]
        let arr = {help:`${Todo}`,id:`${x}`,stat:'notdone'}
        test.push(arr)
        props.setData(test)
        console.log('test arr', test)
        console.log('data arr', props)
        let Todof = document.getElementById('Todof')
        Todof.value = ''
        Filt(props)
        return list
    }
    
    function changeState(props) {
        let test2 = [...props.page]
        test2 = 'complete'
        props.setPage(test2)
        console.log('changed state to', props.page)
    }
    
    return (
        <>
            <center>
            <input  type="text" id="Todof"  onChange={addTodo}/>
            <input type="submit" id="TodoSub" value="add to do" onClick={setit}></input>
            <input type="submit" id="clear" value="clear local" onClick={emp}></input>
            <br></br>
            <p>you will add <b>{Todo}</b></p>
            <input type="submit" id="changestate" value="show completed board" onClick={changeState}></input>
            </center>
        </>
    )
}