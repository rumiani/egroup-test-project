const Description = ({description}) => {
    return ( 
        <span className='w-full h-2/6  hover:scale-105 duration-1000 cursor-pointer' title='Description'>
            <p className='bg-yellow-700 h-32 overflow-y-auto overflow-x-hidden p-1 rounded-md'>
                description : <br />
                {description? 
                    description:
                    <strong>No description yet.</strong>
                }
            </p>
        </span>
     );
}
 
export default Description;