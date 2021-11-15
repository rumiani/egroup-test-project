const url = './assets/data/Frontend_project_sample_data.json'
const GetDataFunc = (dispatch)  => {

 dispatch ({type:'LOADING',payload:true})
  fetch(url)
    .then( res => res.json() )
    .then( result => {
      dispatch({type: "LOADING",payload:false})
      dispatch({type: "RESULT", payload:result.issues})
    }
    )
    .catch(err => {
      console.log(err);
    dispatch({type: "LOADING",payload:false})
    dispatch({type: "ERROR",payload:true})
  })
} 
export default GetDataFunc;