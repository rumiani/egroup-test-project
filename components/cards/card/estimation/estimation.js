const Estimation = ({estimation}) => {
    return ( 
        <span className='rounded-md p-1 text-center bg-indigo-400 my-1 hover:scale-105 duration-1000 cursor-pointer ' title='Estimation'>
            Estimation : {estimation}
        </span>
     );
}
 
export default Estimation;