import React, { useReducer } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { studentObj } from '../../Data/Data'

export const studentContext = createContext()

function StudentsContext({children}) {
  let [student, setStudent] = useState(studentObj)
  let [studentName, setStudentName]= useState('')
  let [studentNumber, setStudentNumber]= useState('')
  let [studentGroup, setStudentGroup]= useState('')


  

  const reducer = (state, action) =>{
    let emptyName = []
    switch(action.type){
      case 'ADD': 
      return [
       
        {id: state.length+1, 
        img: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
        name: action.payload.name, 
        group: [action.payload.group], 
        number: action.payload.number,
        groupNum: 1 
      },  ...state, ]

      case "SEARCHNAME":
        state.forEach(item =>{
          if(item.name.toLowerCase().includes(action.payload.search.toLowerCase()))
          emptyName.push(item)
        })
       setStudent(emptyName)
       
       console.log(emptyName);
      case 'DEL':
        return state.filter(item => item.id !== action.payload.id)
      }
    }


  const submitHandler = () =>{
    dispatch({
      type: 'ADD', 
      payload: 
      {name: studentName, 
      group: studentGroup, 
      number: studentNumber, 
      groupNum:12
    }})
  }


  const searchName = (e) =>{
    dispatch({type: 'SEARCHNAME', payload: {search: e.target.value}})
  }

  const deleteHandler = (delId) =>{
    if(window.confirm('Are you sure')){
      dispatch({type : "DEL", payload : { id : delId}})
    }
  }

  const NameHandler = (e) =>{
    setStudentName(e.target.value)
  }

  const NumberHandler = (e) =>{
    setStudentNumber(e.target.value)
  }

  const GroupHandler = (e) =>{
    setStudentGroup(e.target.value)
  }


  let [studentArr, dispatch] = useReducer(reducer, student);

  const value = {
    studentArr,
    deleteHandler,
    NameHandler,  
    NumberHandler,
    GroupHandler,
    submitHandler,
    searchName
  }

  
  return (
    <studentContext.Provider value={value}>
     {children}
    </studentContext.Provider>
  )
  
}

export default StudentsContext