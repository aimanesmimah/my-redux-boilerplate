import { createStore, combineReducers } from 'redux';
import {students,classroom} from './reducers';


const initialState = {
  students : [
    {
      id : 1 ,
      name : "cloud strife",
      age : 20 ,
      profile : "",
      number : "S455"
    }
  ],
  classroom : {
    degree : "M1" ,
    teacher : "yu phoenix",
    rating : 4
  }
}


const storeFactory = () => {
        return createStore(
            combineReducers({students,classroom}),
            initialState
        )
}

export default storeFactory ;
