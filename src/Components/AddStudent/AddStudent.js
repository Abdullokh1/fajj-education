import React, { useContext } from 'react'
import './AddStudent.scss'
import upload from '../../Assets/Imgs/upload.jpg'
import { TextField } from '@mui/material'
import { Button } from '@mui/material';
import { Link,} from "react-router-dom";
import { studentContext } from '../../Store/StudentsContext/StudentsContext';


function AddStudent() {

  const {NameHandler,NumberHandler,GroupHandler,submitHandler} = useContext(studentContext)
 

  return (
    <div className='add-student add'>
      <h4>O'quvchi qo'shish</h4>

      <div className='add__card'>

        <div className='d-flex justify-content-between'>
          <div className='add__left'>
            <h5>O'quvchining rasmi</h5>
            <div className='add__image-wrapper'>
              <button>
                <img src={upload} alt="upload" width='100' height='100' />
                <h5>Rasmni tanlang</h5>
              </button>
            </div>
          </div>

          <form >
            <TextField 
            onChange={NameHandler} 
            className='add__inputs' 
            label="Ismi"  
            variant="standard" 
            required
            />
            <p className='add__label'>O'quvchining ismini kiriting</p>

            <TextField 
            onChange={NumberHandler} 
            type='number'  
            className='add__inputs' 
            label="Telefon raqam"  
            variant="standard" 
            required
            />
            <p className='add__label'>O'quvchining telefon raqamini kiriting</p>

            <TextField
             onChange={GroupHandler} 
             type='number'  
             className='add__inputs' 
             label="Guruhi"  
             variant="standard"
             required
              />

            <p className='add__label'>O'quvchining guruhini kiriting</p>
            <div className='add__btn-wrapper d-flex'>
              <Link to='/Students'>
                <Button className='me-3' variant='outlined'>Bekor qilish</Button>
              </Link>
              
              <Link to='/Students'>
                <Button onClick={submitHandler} type='submit' variant='contained'>Qo'shish</Button>
              </Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default AddStudent