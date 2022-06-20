import React, { useContext } from 'react'
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { TextField } from '@mui/material'
import { teacherContext } from '../../Store/TeacherContext/TeacherContext'
import './EditTeacher.scss'

function EditTeacher() {
  const {teacherArr, dispatch} = useContext(teacherContext)

  let location = useLocation()
  let locationId = location.pathname.split('/').at(-1)

  return (
    <div className="add-group edit">
    <h4 className="mb-3">O'qituvchini tahrirlash</h4>

    {teacherArr.map(item =>{
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
            
          </div>

          <form className='mt-4'>
            <div className="d-flex mb-3">
              <div className='me-5'>
                <TextField 
                className='edit__inputs' 
                defaultValue={item.name}
                variant="standard" 
                required
                onChange={(e) => dispatch({type: 'editName', payload: e})}
                />
                <p className="add__label">
                  O'qituchnining ismini kiriting
                </p>
              </div>

              <div>
                <TextField 
                className='edit__inputs' 
                defaultValue={item.number}
                variant="standard" 
                // onChange={editNumber}
                required
                />
                <p className="add__label">
                  O'qituchnining telefon raqamini kiriting
                </p>
              </div>

            </div>
          </form>
            <div className="d-flex justify-content-end mt-5">
              <Link to="/Teachers">
                <Button className="me-3" variant="outlined">
                  Bekor qilish
                </Button>
              </Link>
              <Button onClick={() => dispatch({type: 'submitEdit', payload: item})} variant="contained">
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

export default EditTeacher