import React from 'react'
import './Statistics.scss'

function Statistics() {
  return (
    <div className="stats">
      <h4 className="stats__title">Umumiy ma'lumotlar</h4>
      <ul className="stats__list d-flex m-0 p-0 list-unstyled">
        <li className="stats__item col-3">
          <h4 className="stats__name">O'quvchilar</h4>
          <span className="stats__number">297 nafar</span>
          <p className="stats__info">
            <i className="bx bx-down-arrow-alt" />
            5 nafar
          </p>
        </li>
        <li className="stats__item col-3">
          <h4 className="stats__name">O'qituvchilar</h4>
          <span className="stats__number">7 nafar</span>
          <p className="stats__info text-success">
            <i className="bx bx-up-arrow-alt" />
            2 nafar
          </p>
        </li>
        <li className="stats__item col-3">
          <h4 className="stats__name">Guruhlar</h4>
          <span className="stats__number">33 ta</span>
          <p className="stats__info">
            <i className="bx bx-down-arrow-alt" />
            1 nafar
          </p>
        </li>
      </ul>
    </div>

  )
}

export default Statistics