import C from './constants';

export const addStudent = (id,name,age,number) =>
({
  type : C.ADD_STUDENT,
  id,
  name,
  age,
  number
})

export const updateStudentName = (id,name) =>
({
  type : C.UPDATE_STUDENT_NAME,
  id,
  name
})

export const updateProfileURL = (id,url) =>
({
  type : C.UPDATE_STUDENT_PROFILE,
  id,
  url
})


export const hoverOnAddAction = (hover) =>
({
  type : C.HOVER_ON_ADD,
  hover
})

export const hoverOnRemoveAction = (hover) =>
({
  type : C.HOVER_ON_REMOVE,
  hover
})


export const hoverOnGoBackAction = (hover) =>
({
  type : C.HOVER_GO_BACK,
  hover
})

export const addStudentClickedAction = (add) =>
({
  type : C.ADD_STUDENT_CLICKED,
  add
})

export const removeStudentClickedAction = (remove) =>
({
  type : C.REMOVE_STUDENT_CLICKED,
  remove
})


export const removeStudent = (id) =>
({
  type : C.REMOVE_STUDENT ,
  id
})

export const rateClass = (rating) =>
({
  type : C.RATE_CLASS,
  rating
})


export const uploadImageAction = (uploading,num,task) =>
({
  type : C.UPLOADING_PROFILE,
  uploading,
  num,
  task
})

export const uploadProgressAction = (uprogress) =>
({
  type : C.UPLOADING_PROGRESS,
  uprogress
})

export const addChecked = (id) =>
({
  type : C.ADD_CHECKED,
  id
})

export const filterAction = (filter) =>
({
  type : C.FILTER_TIME,
  filter
})

export const removeChecked = (id) =>
({
  type : C.REMOVE_CHECKED,
  id
})



export const initializeChecked = () =>
({
  type : C.INITIALIZE_CHECKED
})
