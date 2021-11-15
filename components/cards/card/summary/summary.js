const Summary = ({summary}) => {
    return ( 
        <span className='h-2/6 bg-yellow-200 rounded-md my-2 hover:scale-105 duration-1000 cursor-pointer' title='Summary'>
            <p className=' opacity-90   p-1'>summary : <br />
                {summary}</p>
        </span>
     );
}
 
export default Summary;