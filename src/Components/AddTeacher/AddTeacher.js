import React, { useContext } from 'react'
import upload from '../../Assets/Imgs/upload.jpg'
import { TextField } from '@mui/material'
import { Button } from '@mui/material';
import { Link,} from "react-router-dom";
import './AddTeacher.scss'
import { teacherContext } from '../../Store/TeacherContext/TeacherContext';

function AddTeacher() {
  const {NameHandler,NumberHandler,GroupHandler,submitHandler} = useContext(teacherContext)

  return (
    <div className='add-teacher add'>
    <h4>O'qituvchi qo'shish</h4>

    <div className='add__card'>

      <div className='d-flex justify-content-between'>
        <div className='add__left'>
          <h5>O'qituvchi rasmi</h5>
          <div className='add__image-wrapper'>
            <button>
              <img src={upload} alt="upload" width='100' height='100' />
              <h5>Rasmni tanlang</h5>
            </button>
          </div>
        </div>

        <form>
          <TextField 
          className='add__inputs' 
          label="Ismi"  
          variant="standard" 
          onChange={NameHandler}
          required
          />
          <p className='add__label'>O'qituvchining ismini kiriting</p>

          <TextField 
          type='number'  
          className='add__inputs' 
          label="Telefon raqam"  
          variant="standard" 
          onChange={NumberHandler}
          required
          />
          <p className='add__label'>O'qituvchining telefon raqamini kiriting</p>

          <TextField
           type='number'  
           className='add__inputs' 
           label="Guruhi"  
           variant="standard"
           onChange={GroupHandler}
           required
            />

          <p className='add__label'>O'qituvchining guruhini kiriting</p>
          <div className='add__btn-wrapper d-flex'>
            <Link to='/Teachers'>
              <Button className='me-3' variant='outlined'>Bekor qilish</Button>
            </Link>
            <Link to='/Teachers'>
              <Button onClick={submitHandler} type='submit' variant='contained'>Qo'shish</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AddTeacher