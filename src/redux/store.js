import { createStore, combineReducers } from 'redux';


const initialState = {
  students : [],
  class : {}
}


const storeFactory = () => {
        return createStore(
            combineReducers({students,class}),
            initialState
        )
}

export default storeFactory ;
