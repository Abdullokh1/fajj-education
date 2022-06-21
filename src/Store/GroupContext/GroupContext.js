import { useReducer, useState } from 'react';
import { createContext } from 'react'
import { groupObj } from '../../Data/Data'

export const groupContext = createContext()

function GroupContext({children}) {
  let [groups, setGroups] = useState(groupObj);
  let [groupSubject, setGroupSubject]= useState('')
  let [groupTypeSubject, setTypeSubject]= useState('')
  let [groupStatus, setGroupStatus]= useState('')
  let [groupPrice, setGroupPrice]= useState('')
  let [groupTeacher, setGroupTeacher]= useState('')



  const reducer = (state, action) =>{
    switch(action.type){
      case 'ADD': 
      return [
        {id: state.length+1, 
        img: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
        status: action.payload.status, 
        subject: action.payload.subject, 
        educationType: action.payload.educationType,
        payment: action.payload.payment,
        teacher: action.payload.teacher,
        name: action.payload.name
      },  ...state,]

      case 'DEL':
        return state.filter(item => item.id !== action.payload.id)
    }
  }

  const subjectHandle = (e) =>{
    setGroupSubject(e.target.value)
  }

  const typeSubjectHandle = (e) =>{
    setTypeSubject(e.target.value)
  }

  const statusHandle = (e) =>{
    setGroupStatus(e.target.value)
  }

  const priceHandle = (e) =>{
    setGroupPrice(e.target.value)
  }

  const teacherHandle = (e) =>{
    setGroupTeacher(e.target.value)
  }

  const submitHandler = () =>{
    dispatch({
      type: 'ADD', 
      payload: 
      {subject: groupSubject, 
      status: groupStatus, 
      payment: groupPrice, 
      educationType: groupTypeSubject,
      teacher: groupTeacher,
      name: 'Guruh #4'
    }})
  }

  const deleteHandler = (delId) =>{
    if(window.confirm('Are you sure')){
      dispatch({type : "DEL", payload : { id : delId}})
    }
  }

  let [groupArr, dispatch] = useReducer(reducer, groups);

  const value = {
    groupArr,
    subjectHandle,
    typeSubjectHandle,
    statusHandle,
    priceHandle,
    teacherHandle,
    submitHandler,
    deleteHandler
  }

  return (
    <groupContext.Provider value={value}>
      {children}
    </groupContext.Provider>
  )
}

export default GroupContext