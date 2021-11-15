import * as t from '../../dataContext/types'
const url = './assets/data/Frontend_project_sample_data.json'
const GetDataFunc = (dispatch)  => {
 fetch(url)
 .then( res => res.json() )
 .then( result => {
      dispatch({type: t.LOADING, payload:false})
      dispatch ({type:t.DATA, payload:true})
      dispatch({type: t.RESULT, payload:result.issues})
    }
    )
    .catch(err => {
      console.log(err);
    dispatch({type: t.LOADING, payload:false})
    dispatch({type: t.ERROR,payload:true})
  })
} 
export default GetDataFunc;