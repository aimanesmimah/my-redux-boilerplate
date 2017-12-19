import { createStore, combineReducers } from 'redux';
import {students,classroom,actions} from './reducers';


const initialState = {
  students : [
    {
      id : 1 ,
      name : "cloud strife",
      age : 20 ,
      profileURL : null,
      number : "S455"
    },
    {
      id : 2 ,
      name : "ayman smimah",
      age : 23,
      profileURL : null ,
      number : "S555"
    }
  ],
  classroom : {
    degree : "M1" ,
    teacher : "yu phoenix",
    rating : 4
  },
  actions : {
    uploadingProfile : false,
    uploadingProgress : 0,
    uploadingStudentNum : null,
    uploadingTask : null
  }
}


const storeFactory = () => {
        return createStore(
            combineReducers({students,classroom,actions}),
            initialState
        )
}

export default storeFactory ;
