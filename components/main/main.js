import { useContext, useEffect } from "react";
import { DataContext } from "../../dataContext/dataContext";
import Cards from "../cards/cards";
import ErrorComp from "../errorComp/errorComp";
import GetDataFunc from "../getDataFunc/getDataFunc";
import Loading from "../loading/loading";
const Main = () => {
    const {state,dispatch} = useContext(DataContext);

    useEffect(() => {      
        GetDataFunc(dispatch)
    },[])
    return ( 
        <div className='  p-4 h-screen  relative flex flex-row'>
            
            <div className='text-green-800 text-center w-max p-2 pt-64 bg-gray-400 font-bold'>
                Roadmap
            </div> 
            {state.loading && <Loading/>}
            {state.error && <ErrorComp/>}
            {state.data && <Cards/>} 
        </div>
     );
}
 
export default Main;