import React from 'react'

function Header() {
  return (
    <div className='header w-100 d-flex justify-content-between align-items-center'>

      <div>
        <i className='bx header__search-icon bx-search' ></i>
        <input className='header__search' type="text" placeholder='Search transactions, invoice or help' />
      </div>

      <div className='d-flex align-items-center'>
        <button>
          <i className='bx bxs-bell me-2 fs-4'></i>
        </button>
        <h3 className='header__name m-0 me-2'>Abdullokh Giyasov</h3>
        <button>
          <i className='bx fs-4 bx-chevron-down'></i>
          <img src="https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg" alt="user-avatar" width={50} height={50} />
        </button>
      </div>

    </div>
  )
}

export default Header