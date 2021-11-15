import { useContext } from "react";
import { DataContext } from "../../dataContext/dataContext";

const ErrorComp = () => {
    const {state, dispatch} = useContext(DataContext);

    return ( 
        <div className='w-full h-full bg-red-600 text-center pt-8'>
            {state.error}
        </div>
     );
}
 
export default ErrorComp;