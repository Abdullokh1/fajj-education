import React, { useReducer } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { teacherObj } from '../../Data/Data'

export const teacherContext = createContext()

function TeacherContext({children}) {
  let [teacher, setTeacher] = useState(teacherObj)
  let [teachertName, setTeacherName]= useState('')
  let [teacherNumber, setTeacherNumber]= useState('')
  let [teacherGroup, setTeacherGroup]= useState('')

  const reducer = (state, action) =>{
    switch(action.type){
      case 'ADD': 
      return [
        
        {id: state.length+1, 
        img: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
        name: action.payload.name, 
        group: [action.payload.group], 
        number: action.payload.number,
        groupNum: 1 
      }, ...state, ]

      case 'DEL':
        return state.filter(item => item.id !== action.payload.id)
    }
  }

  const submitHandler = () =>{
    dispatch({
      type: 'ADD', 
      payload: 
      {name: teachertName, 
      group: teacherGroup, 
      number: teacherNumber, 
      groupNum:12
    }})
  }

  const NameHandler = (e) =>{
    setTeacherName(e.target.value)
  }

  const NumberHandler = (e) =>{
    setTeacherNumber(e.target.value)
  }

  const GroupHandler = (e) =>{
    setTeacherGroup(e.target.value)
  }

  const deleteHandler = (delId) =>{
    if(window.confirm('Are you sure')){
      dispatch({type : "DEL", payload : { id : delId}})
    }
  }

  let [teacherArr, dispatch] = useReducer(reducer, teacher);

  const value = {
    teacherArr,
    NameHandler,  
    NumberHandler,
    GroupHandler,
    submitHandler,
    deleteHandler,
  }
  return (
    <teacherContext.Provider value={value}>
      {children}
    </teacherContext.Provider>
  )
}

export default TeacherContext