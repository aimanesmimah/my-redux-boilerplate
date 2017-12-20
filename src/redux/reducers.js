import C from './constants';


export const student = (state = {} , action) => {
  switch (action.type) {
    case C.ADD_STUDENT:
      return {
        id : action.id,
        name : action.name,
        age : action.age,
        profileURL : null,
        number : action.number
      }
    case C.UPDATE_STUDENT_NAME :
      return (state.id !== action.id)?
         state : {
           ...state,
           name : action.name
         }
    case C.UPDATE_STUDENT_PROFILE :
      return (state.id !== action.id)?
         state : {
            ...state,
            profileURL : action.url
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
      return state.map(s => student(s,action));
    case C.UPDATE_STUDENT_PROFILE :
      return state.map(s => student(s,action));
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

export const actions = (state = {} , action) => {
  switch (action.type) {
    case C.UPLOADING_PROFILE:
      return {
        ...state,
        uploadingProfile : action.uploading,
        uploadingStudentNum : action.num,
        uploadingTask : action.task
      }
    case C.UPLOADING_PROGRESS:
      return {
          ...state,
          uploadingProgress: action.uprogress
      }
    case C.HOVER_ON_ADD :
      return {
        ...state,
        hoverOnAddStudent : action.hover
      }
    case C.HOVER_ON_REMOVE :
      return {
        ...state,
        hoverOnRemoveStudent : action.hover
      }
    case C.HOVER_GO_BACK :
      return {
        ...state,
        hoverOnGoBack : action.hover
      }
    case C.ADD_STUDENT_CLICKED :
      return {
        ...state,
        addStudentClicked : action.add
      }
    case C.REMOVE_STUDENT_CLICKED :
      return {
        ...state,
        removeStudentClicked : action.remove
      }
    case C.FILTER_TIME :
      return {
        ...state,
        filterTime : action.filter
      }
    default:
       return state;
  }
}

export const checkedStudents = (state = [] , action) => {
  switch (action.type) {
    case C.ADD_CHECKED:
      return [
        ...state,
        action.id
      ];
    case C.REMOVE_CHECKED :
      return state.filter(id => id !== action.id);
    case C.INITIALIZE_CHECKED :
      return [];
    default:
      return state ;

  }
}
