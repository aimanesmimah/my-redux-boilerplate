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
