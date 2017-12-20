import { createStore, combineReducers } from 'redux';
import {students,classroom,actions,checkedStudents} from './reducers';


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
      name : "luminor hangover",
      age : 23,
      profileURL : null ,
      number : "S555"
    },
    {
      id : 3 ,
      name : "kiro yall",
      age : 20,
      profileURL : null ,
      number : "S556"
    },
    {
      id : 4 ,
      name : "yu phoenix",
      age : 30,
      profileURL : null ,
      number : "S100"
    },
    {
      id : 5 ,
      name : "son chu",
      age : 18,
      profileURL : null ,
      number : "S103"
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
    uploadingTask : null,
    hoverOnAddStudent : false,
    hoverOnRemoveStudent : false,
    addStudentClicked : false,
    removeStudentClicked : false,
    hoverOnGoBack : false,
    filterTime : false
  },
  checkedStudents : []
}


const storeFactory = () => {
        return createStore(
            combineReducers({students,classroom,actions,checkedStudents}),
            (localStorage['redux-store'])?JSON.parse(localStorage['redux-store']):initialState
        )
}

export default storeFactory ;
