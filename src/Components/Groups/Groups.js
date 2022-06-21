import React from 'react'
import { useContext } from 'react'
import { Link,} from "react-router-dom";
import { groupContext } from '../../Store/GroupContext/GroupContext';
import './Groups.scss'

function Groups() {
  const {groupArr, deleteHandler} = useContext(groupContext)

  return (
    <div className='groups'>
    <div className='d-flex justify-content-between mb-5'>
      <div className='d-flex align-items-center'>
        <h4 className='me-4'>Guruhlar</h4>
        <Link to='/AddGroup'>
          <button className='btn btn-primary'>Guruh qo'shish</button>
        </Link>
      </div>
      <div className='groups__input-wrapper'>
        <i className='bx bx-search'></i>
        <input type="text" placeholder="Fan, guruh,o'qituvchi yoki ta'lim shakli orqali qidirish" />
      </div>
    </div>

    <table className='groups__table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Guruh Nomi</th>
          <th>Holati</th>
          <th>Fan nomi</th>
          <th>Ta'lim shakli</th>
          <th>To'lov miqdori</th>
          <th>O'qituvchi</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>

        {groupArr.map((item, index) =>{
          return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.subject}</td>
              <td>{item.educationType}</td>
              <td>UZS {item.payment}</td>
              <td>{item.teacher}</td>
              <td></td>
              <td></td>
              <td>
                <Link to={`/EditGroup/${item.id}`}>
                <button className='me-2'>
                  <i className='bx groups__edit bxs-pencil' ></i>
                </button>
                
                </Link>
                <button onClick={() => deleteHandler(item.id)}>
                   <i className='bx groups__edit groups__del fs-3 text-danger bx-x' ></i>
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

export default Groups