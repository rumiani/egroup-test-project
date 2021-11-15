const DueDate = ({duedate}) => {
    return ( 
        <span className='p-1 rounded-md bg-red-600 text-center hover:scale-105 duration-1000 cursor-pointer' title='duedate'>
            Duedate: {duedate}
        </span>
     );
}
 
export default DueDate;