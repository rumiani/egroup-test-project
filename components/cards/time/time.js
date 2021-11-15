const Time = () => {
    let weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    let months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
let time= new(Date);
setInterval(() => {
  time= new(Date);
}, 60000);
let year = time.getFullYear()
let day = weekDays[new Date().getDay()];  
let monthNum = time.getMonth()

    return ( 
        // <div className=' text-center  h-1/6'>
            <div className='flex flex-row'>
            { months.map((month,index) =>{
                return <span key={index} className='w-96 h-max mx-2 p-8 bg-green-500'>
                    {month}
                </span>
            }) }
            </div>
        // </div>
     );
}
 
export default Time;