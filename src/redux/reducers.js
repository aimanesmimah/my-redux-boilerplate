import C from './constants';


export const student = (state = {} , action) => {
  switch (action.type) {
    case C.ADD_STUDENT:
      return {
        id : action.id,
        name : action.name,
        age : action.age,
        number : action.number
      }
    case C.UPDATE_STUDENT_NAME :
      return (state.id !== action.id)?
         state : {
           ...state,
           name : action.name
         }
    default:
      return state ;

  }
}

export const students = (state = [] , action) => {
  switch (action.type) {
    case C.ADD_STUDENT:
      return [
        ...state,
        student({},action)
      ]
    case C.UPDATE_STUDENT_NAME :
      return state.map(student => student(student,action)) ;
    case C.REMOVE_STUDENT :
      return state.filter(s => s.id !== action.id)
    default:
      return state ;

  }
}

export const classroom = (state = {} , action) => {
  switch (action.type) {
    case C.RATE_CLASS :
      return {
        ...state,
        rating : action.rating
      }
    default :
      return state ;
  }
}
