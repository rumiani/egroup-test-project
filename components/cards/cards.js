import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../dataContext/dataContext';
import GetDataFunc from '../getDataFunc/getDataFunc'
import Time from './time/time';
import Card from './card/card';

let labelsArr = ['EVA', 'Roadmap', 'revenue', 'Quality','Content-Editing', 'Frontend','Maintenance','Servers','Callcenter','Backend', 'CAI','Bugs']
const Cards = () => {
    const {state, dispatch} = useContext(DataContext);
    useEffect(() => {      
        GetDataFunc(dispatch)
    },[])

    return ( 
    <div className='cards border border-b-4 felx flex-col h-full overflow-x-auto'>
        <ul className='flex flex-row py-4 h-5/6'>
                {state.result.map((task, index ) => {
                    if(task.fields.labels.includes('Roadmap') && task.fields.issuetype.name === 'Epic'){
                    //  console.log(each.fields.labels);
                        return <li key={index}>
                        <Card  task = {task}/>
                        </li>
                    } 
                })}
        </ul>
        <Time/>
    </div>
     );
}


export default Cards