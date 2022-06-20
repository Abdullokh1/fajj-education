import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link,} from "react-router-dom";

import './Navbar.scss'

function Navbar() {
  return (
    <div className='nav'>
      <div className='nav__top'>
        <Link to='/'>
          <h2 className='nav__title'>Fajj Education</h2>
        </Link>
      </div>

      <ul className="nav__list navbar p-3 m-0 list-unstyled">
          <NavLink to="/" className="d-flex nav__link align-items-center">
            <li className="navbar__item">
                <i className="bx me-2 bxs-bar-chart-square" />
                Umumiy malumotlar
            </li>
          </NavLink>
          <NavLink to='hisobHolati' className="d-flex nav__link align-items-center">
            <li className="navbar__item">
                <i className="bx me-2 bxs-wallet" />
                Hisob holati
            </li>
          </NavLink>
          <NavLink to="Students" className="d-flex nav__link align-items-center">
            <li className="navbar__item">
                <i className="bx me-2 bxs-user-voice" />
                O'quvchilar
            </li>
          </NavLink>
          <NavLink to='Groups' className="d-flex nav__link align-items-center">
            <li className="navbar__item">
              <i className="bx me-2 bxs-group" />
              Guruhlar
            </li>
          </NavLink>

          <NavLink to='darsJadvali' className="d-flex nav__link align-items-center">
            <li className="navbar__item">
              <i className="bx me-2 bx-calendar" />
              Dars Jadvali
            </li>
          </NavLink>
          <NavLink to='hisobotlar' className="d-flex nav__link align-items-center">
            <li className="navbar__item">
              <i className="bx me-2 bxs-file" />
              Hisobotlar
            </li>
          </NavLink>
          <NavLink to='Teachers' className="d-flex nav__link align-items-center">
            <li className="navbar__item">
              <i className="bx me-2 bx-user" />
              O'qituvchilar
            </li>
          </NavLink>
          <NavLink to='Settings' className="d-flex nav__link align-items-center">
            <li className="navbar__item">
              <i className="bx me-2 bxs-cog" />
              Sozlamalar
            </li>
          </NavLink>
          <NavLink to='Logout' className="d-flex nav__link align-items-center">
            <li className="navbar__item">
              <i className="bx me-2 bx-log-in" />
              Log Out
            </li>
          </NavLink>
      </ul>

  </div>
  )
}

export default Navbar