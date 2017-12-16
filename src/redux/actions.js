import C from './constants';

export const addStudent = (id,name,age,number) =>
({
  type : C.ADD_STUDENT,
  id,
  name,
  age,
  number
})

export const updateStudentName = (name) =>
({
  type : C.UPDATE_STUDENT_NAME,
  name
})


export const removeStudent = (id) =>
({
  type : C.REMOVE_STUDENT ,
  id
})

export const rateClass = (id,rating) =>
({
  type : C.UPDATE_CLASS,
  rating
})
