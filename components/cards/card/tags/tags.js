const Tags = ({labels}) => {
    labels = labels.filter( lable => lable !== 'Roadmap')
    return ( 
        <span className='flex flex-wrap '>
                {labels.map((lable, index) => {
                    return <h4 key={index} title={lable+' tag'} className='bg-green-300 p-1 w-max rounded-md m-1 text-sm'>
                        {lable}
                    </h4>
                })
                }
            </span>
     );
}
 
export default Tags;