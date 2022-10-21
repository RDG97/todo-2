import { useState, useEffect } from "react"

export default function Filt(props) {

    console.log('before filt', props.data)

     let notdone = props.data.filter(data =>
        data.stat === 'notdone'
        
        );
        console.log('afterfilt', notdone)


        function test(index) {
            console.log('testtt', props.data[index].stat)
            let test = [...props.data]
            test[index].stat = 'done'
            props.setData(test)
            console.log('props after switch to done', props)
            return props
        }
        
        
    return (

        <div className="container bg-primary" id="listBody">
                <div className="row" id="listBody">
                    <div className="col bg-danger border border-2 border-dark">Coming Up
                    <div className="row bg-warning border border-2 border-dark">
                    {notdone.map((props, index) => (
                    <div key={props.help}>
                        
                    <h1 >{props.help}</h1>
                    {console.log('Notdone mapped index', index)}
                    <input type='submit' value="check off"onClick={ ()=> test(index, props)} ></input>
    
                    </div>
                    ))} 
                    </div>
                    </div>
                    </div>
                    </div>
        )}