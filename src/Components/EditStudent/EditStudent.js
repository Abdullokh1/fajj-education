import React, { useContext, useState } from 'react'
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { studentContext } from '../../Store/StudentsContext/StudentsContext';
import { TextField } from '@mui/material'

import './EditStudent.scss'


function EditStudent() {
  const {studentArr} = useContext(studentContext)
  let [editUserName, setEditName]= useState('')
  let [editUserNumber, setEditNumber]= useState('')
  let [editUserGroup, setEditGroup]= useState('')
  let location = useLocation()
  let locationId = location.pathname.split('/').at(-1)

  
  return (
    <div className="add-group edit">
    <h4 className="mb-3">O'quvchini tahrirlash</h4>
    
    {studentArr.map(item =>{
      if(+locationId === item.id){
        return (
        <div key={item.id} className="edit__group-box">
          <div className='edit__information d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
              <img className='me-3' src={item.img} alt="userImg" width='60' height='60' />
              <div>
                <h4 className='m-0 mb-1'>{item.name}</h4>
                <p className='edit__userPhone m-0'>{item.number}</p>
              </div>
            </div>
            <div>
              <p className='edit__info m-0 mb-2'>Guruhlar: {item.group}</p>
              <p className='edit__info m-0'>Jami qoldirilgan darslar: 0 ta</p>
            </div>
          </div>

          <form className='mt-4'>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <TextField 
                className='edit__inputs' 
                defaultValue={item.name}
                variant="standard" 
                required
                onChange={(e) => setEditName(e.target.value)}
                />
                <p className="add__label">
                  O'quchnining ismini kiriting
                </p>
              </div>

              <div>
                <TextField 
                className='edit__inputs' 
                defaultValue={item.number}
                variant="standard" 
                onChange={(e) => setEditNumber(e.target.value)}
                required
                />
                <p className="add__label">
                  O'quchnining telefon raqamini kiriting
                </p>
              </div>

              <div>
                <TextField 
                className='edit__inputs' 
                variant="standard" 
                defaultValue={item.group}
                onChange={(e) => setEditGroup(e.target.value)}
                required
                />
                <p className="add__label">
                  O'quchnining guruhini kiriting
                </p>
              </div>
            
            </div>
          </form>
            <div className="d-flex justify-content-end mt-5">
              <Link to="/Students">
                <Button className="me-3" variant="outlined">
                  Bekor qilish
                </Button>
              </Link>
              <Button variant="contained">
                Saqlash
              </Button>
            </div>
        </div>
        )
      }
    })}
    </div>
  )
}

export default EditStudent