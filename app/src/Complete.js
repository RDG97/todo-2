import { useState, useEffect } from "react"

export default function Complete(props) {

    console.log('before filt', props.data)

     let done = props.data.filter(data =>
        data.stat === 'done'
        
        );
        console.log('afterfilt', done)

        function filtdone(index) {
            console.log('testtt', props.data[index].stat)
            let test = [...props.data]
            test[index].stat = 'deleted'
            props.setData(test)
            console.log('props after switch to deleted', props)
            return props
        }
        
        
    return (

        <div className="container bg-primary" id="listBody">
                <div className="row" id="listBody">
                    <div className="col bg-danger border border-2 border-dark">Complete
                        <div className="row bg-warning border border-2 border-dark">
                        {done.map((props, index) => (
                            <div key={props.id}>
                        
                            <h1 >{props.help}</h1>
                            <p>{props.stat}</p>
                            {console.log('done mapped index', index)}
                            <input type='submit' value="delete"onClick={ ()=> filtdone(index, props)} ></input>
                            </div>
                            
                            ))} 
                        </div>
                    </div>
                </div>
            </div>
        )}