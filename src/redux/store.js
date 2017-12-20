import { createStore, combineReducers, applyMiddleware } from 'redux';
import {students,classroom,actions,checkedStudents} from './reducers';
import $ from 'jquery';


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

const logger = store => next => action => {
    let result;
    $(document).trigger('dispatch',[action]);
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
}


const storeFactory = () => {
        return applyMiddleware(logger)(createStore)(
            combineReducers({students,classroom,actions,checkedStudents}),
            (localStorage['redux-store'])?JSON.parse(localStorage['redux-store']):initialState
        )
}

export default storeFactory ;
