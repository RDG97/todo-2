import { useState, useEffect } from "react"

export default function Filt(props) {



    
    console.log('before filt', props.data)

     let notdone = props.data.filter(data =>
        data.stat === 'notdone'
        
        );
        
    return (

        <div className="container bg-primary" id="listBody">
                <div className="row" id="listBody">
                    <div className="col bg-danger border border-2 border-dark">Coming Up
                    <div className="row bg-warning border border-2">
                    {notdone.map((props, index) => (
                    <div key={props.help}>
                        
                    <h1 >{props.help}</h1>
                    {console.log('Notdone mapped index', index)}
                    <input type='submit' onClick={ ()=> test(index, props)} ></input>
    
                    </div>
                    ))} 
                    </div>
                    </div>
                    </div>
                    </div>
        )}