import React from 'react';
import { useContext } from 'react'
import { Link,} from "react-router-dom";
import { teacherContext } from '../../Store/TeacherContext/TeacherContext';
import './Teachers.scss'


function Teachers() {
  const {teacherArr, deleteHandler} = useContext(teacherContext)

  return (
    <div className='teachers'>
      <div className='d-flex justify-content-between mb-5'>
        <div className='d-flex align-items-center'>
          <h4 className='me-4'>O'qituvchilar</h4>
          <Link to='/AddTeacher'>
            <button className='btn btn-primary'>O'qituvchi qo'shish</button>
          </Link>
        </div>
        <div className='teachers__input-wrapper'>
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Ism bo'yicha qidirish" />
        </div>
      </div>

      <table className='teachers__table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Ism</th>
            <th>Guruh</th>
            <th>Telefon Raqami</th>
            <th>Guruhlar</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {teacherArr.map(item =>{
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><img className='me-2' src={item.img} alt="userImg" width='35' height='35' /> {item.name}</td>
                <td>Guruh #{item.groupNum}</td>
                <td>{item.number}</td>
                <td>{item.group} ta</td>
                <td>
                  <Link to={`/EditTeacher/${item.id}`}>
                    <button className='me-2'>
                      <i className='bx teachers__edit bxs-pencil' ></i>
                    </button>
                  </Link>
                  <button onClick={() => deleteHandler(item.id)}>
                    <i className='bx teachers__edit teachers__del fs-3 text-danger bx-x' ></i>
                  </button>
                </td>
              </tr>
            )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Teachers