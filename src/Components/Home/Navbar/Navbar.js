import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav d-flex flex-column'>
      <div className='nav__top'>
        <h2 className='nav__title'>Fajj Education</h2>
      </div>

      <ul className="nav__list d-flex flex-column align-items-start navbar p-3 m-0 list-unstyled">
          <NavLink to="/" className="d-flex nav__link align-items-center">
            <li className="navbar__item">
                <i className="bx me-2 bxs-bar-chart-square" />
                Umumiy malumotlar
            </li>
          </NavLink>
        <li className="navbar__item">
          <NavLink to='somewhere' className="d-flex nav__link align-items-center">
            <i className="bx me-2 bxs-wallet" />
            Hisob holati
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="Students" className="d-flex nav__link align-items-center">
            <i className="bx me-2 bxs-user-voice" />
            O'quvchilar
          </NavLink>
        </li>
        <li className="navbar__item">
          <a className="d-flex nav__link align-items-center">
            <i className="bx me-2 bxs-group" />
            Guruhlar
          </a>
        </li>
        <li className="navbar__item">
          <a className="d-flex nav__link align-items-center">
            <i className="bx me-2 bx-calendar" />
            Dars Jadvali
          </a>
        </li>
        <li className="navbar__item">
          <a className="d-flex nav__link align-items-center">
            <i className="bx me-2 bxs-file" />
            Hisobotlar
          </a>
        </li>
        <li className="navbar__item">
          <a className="d-flex nav__link align-items-center">
            <i className="bx me-2 bx-user" />
            O'qituvchilar
          </a>
        </li>
        <li className="navbar__item">
          <a className="d-flex nav__link align-items-center">
            <i className="bx me-2 bxs-cog" />
            Sozlamalar
          </a>
        </li>
        <li className="navbar__item">
          <a className="d-flex nav__link align-items-center">
            <i className="bx me-2 bx-log-in" />
            Log Out
          </a>
        </li>
      </ul>

  </div>
  )
}

export default Navbar