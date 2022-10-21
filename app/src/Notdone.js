import { useState, useEffect } from "react"

export default function Filt(props) {



    
    console.log('before filt', props.data)
     let notdone = props.data.filter(data =>
        data[2] === 'notdone'
        
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
