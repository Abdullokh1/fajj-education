import React, { useContext } from 'react'
import './Statistics.scss'
import { Link,} from "react-router-dom";
import graphImg1 from '../../Assets/Imgs/graph-1.jpg'
import graphImg2 from '../../Assets/Imgs/graph-2.jpg'
import graphImg3 from '../../Assets/Imgs/graph-3.jpg'
import { studentContext } from '../../Store/StudentsContext/StudentsContext';
import { teacherContext } from '../../Store/TeacherContext/TeacherContext';
import { groupContext } from '../../Store/GroupContext/GroupContext';




function Statistics() {
  const {studentArr} = useContext(studentContext)
  const {teacherArr} = useContext(teacherContext)
  const {groupArr} = useContext(groupContext)


  return (
    <>
    <div className="stats">
      <h4 className="stats__title">Umumiy ma'lumotlar</h4>
      <ul className="stats__list d-flex justify-content-between m-0 p-0 list-unstyled">
        <Link to='Students' className='stats__column'>
          <li className="stats__item">
            <h4 className="stats__name">O'quvchilar</h4>
            <span className="stats__number">{studentArr.length} nafar</span>
            <p className="stats__info">
              <i className="bx bx-down-arrow-alt" />
              5 nafar
            </p>
            <img className='stats__graph' src={graphImg1} alt="graph1" width={100} height={50} />
          </li>
        </Link>
        <Link to='Teachers' className='stats__column'>
          <li className="stats__item">
            <h4 className="stats__name">O'qituvchilar</h4>
            <span className="stats__number">{teacherArr.length} nafar</span>
            <p className="stats__info text-success">
              <i className="bx bx-up-arrow-alt" />
              2 nafar
            </p>
            <img className='stats__graph' src={graphImg2} alt="graph2" width={100} height={50} />
          </li>
        </Link>
        <Link to='Groups' className='stats__column'>
          <li className="stats__item">
            <h4 className="stats__name">Guruhlar</h4>
            <span className="stats__number">{groupArr.length} ta</span>
            <p className="stats__info">
              <i className="bx bx-down-arrow-alt" />
              1 nafar
            </p>
            <img className='stats__graph' src={graphImg3} alt="graph3" width={100} height={50} />
          </li>
        </Link>
      </ul>

      <div className='stats__information p-3 mt-4'>
        <div className='d-flex align-items-center justify-content-between'>
          <h4>Daromad va xarajat</h4>
          <select>
            <option>So'nggi 6 oydagi</option>
            <option>So'nggi 1 yildagi</option>
            <option>So'nggi 1 oydagi</option>
          </select>
        </div>
        <img src="http://codegeekz.com/wp-content/uploads/xcharts.jpg" alt="diagram" />
      </div>
    </div>
    </>

  )
}

export default Statistics