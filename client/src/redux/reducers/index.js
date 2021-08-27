
import {SETLOADER} from '../constants/constants'
const initState={
  loader:false
}
const rootReducer = (state = initState, action) => {
 switch(action.type){
   case SETLOADER:{
    return Object.assign({},state,{
      loader:!state.loader
    })
   }
   default:{
     return state
   }
 }
};

export default rootReducer;
