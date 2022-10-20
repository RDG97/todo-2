import { useState } from "react"
export default function Notdone(props) {


let notdone = props.data.filter(lis =>
    lis[2] === 'notdone'
    );
    console.log('notdone', notdone)

    return (

        <div className="container bg-primary" id="listBody">
                <div className="row" id="listBody">
                    <div className="col bg-danger border border-2 border-dark">Coming Up
                    <div className="row bg-warning border border-2">
                    {notdone.map((props, index) => (
                    <>
                    <h1>{props[0]}</h1>
                    {console.log('commers mapped index', index)}
                    <input type='submit' onClick={ ()=> test(index, props)} ></input>
    
                    </>
                    ))} 
                    </div>
                    </div>
                    </div>
                    </div>
        )};