import React from 'react'
import { useContext } from 'react'
import { Link,} from "react-router-dom";
import { studentContext } from '../../Store/StudentsContext/StudentsContext'
import './Students.scss'


function Students() {
  const {studentArr, searchName, deleteHandler} = useContext(studentContext)

  console.log(studentArr);

  return ( 
    <div className='students'>
      <div className='d-flex justify-content-between mb-5'>
        <div className='d-flex align-items-center'>
          <h4 className='me-4'>O'quvchilar</h4>
          <Link to='/AddStudent'>
            <button className='btn btn-primary'>O'quvchi qo'shish</button>
          </Link>
        </div>
        <div className='students__input-wrapper'>
          <i className='bx bx-search'></i>
          <input onChange={searchName} type="text" placeholder="Ism bo'yicha qidirish" />
        </div>
      </div>

      <table className='students__table'>
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
          {studentArr.map(item =>{
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><img className='me-2' src={item.img} width='35' height='35' alt="userImg" /> {item.name}</td>
                <td>
                  Guruh #
                  {item.group.map((el, index) => {
                    return (
                      <span key={index}>
                        {index > 0 ? <span> / #</span> : ""}
                          {el} 
                      </span>
                    );
                  })}
                  </td>
                <td>{item.number}</td>
                <td>{item.groupNum} ta</td>
                <td>
                  <Link to={`/EditStudent/${item.id}`}>
                    <button className='me-2'>
                      <i className='bx students__edit bxs-pencil' ></i>
                    </button>
                  </Link>
                  <button onClick={() => deleteHandler(item.id)}>
                     <i className='bx students__edit students__del fs-3 text-danger bx-x' ></i>
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

export default Students



// onClick={() => editHandler(item.id)}