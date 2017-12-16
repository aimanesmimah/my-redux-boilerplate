import { createStore, combineReducers } from 'redux';


const initialState = {
  students : [
    {
      id : 1 ,
      name : "cloud strife",
      age : 20 ,
      student_number : "S455"
    }
  ],
  class : {
    degree : "M1" ,
    teacher : "yu phoenix",
    rating : 4
  }
}


const storeFactory = () => {
        return createStore(
            combineReducers({students,class}),
            initialState
        )
}

export default storeFactory ;
