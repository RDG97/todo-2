import { useState, useEffect } from "react"

export default function All(props) {

    //console.log('before filt', props.data)
//
    // let done = props.data.filter(data =>
    //    data.stat === 'done'
    //    
    //    );
    //    console.log('afterfilt', done)

        //function filtdone(index) {
        //    console.log('testtt', props.data[index].stat)
        //    let test = [...props.data]
        //    test[index].stat = 'done'
        //    props.setData(test)
        //    console.log('props after switch to done', props)
        //    return props
        //}
        
        
    return (

        <div className="container bg-primary" id="listBody">
                <div className="row" id="listBody">
                    <div className="col bg-danger border border-2 border-dark">All tasks
                        <div className="row bg-warning border border-2 border-dark">
                        {props.data.map((props, index) => (
                            <div key={props.id}>
                        
                            <h1 >{props.help}</h1>
                            <p>{props.stat}</p>
                            {console.log('all mapped index', index)}
                            
                            </div>
                            ))} 
                        </div>
                    </div>
                </div>
            </div>
        )}