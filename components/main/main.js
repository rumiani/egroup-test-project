import { useContext } from "react";
import { DataContext } from "../../dataContext/dataContext";
import Cards from "../cards/cards";
import Loading from "../loading/loading";
const Main = () => {
    const {state} = useContext(DataContext);
// console.log(state.loading);
    return ( 
        <div className='  p-4 h-1/2 relative flex flex-row'>
            
            <div className='text-green-800 text-center w-max p-2 pt-64 bg-gray-400 font-bold'>
                Roadmap
            </div> 
            {/* {state.loading? 
            <Loading/> :
        } */}
        <Cards/>
        </div>
     );
}
 
export default Main;