import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode==="light"?"dark":"light"}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <form className="d-flex mx-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className='component my-3 mx-3'>
              <div className={`form-check form-switch text-${props.mode}`}>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Theam</label>
                  <input className="form-check-input" type="checkbox" onClick={props.toggleDarkMode} role="switch" id="flexSwitchCheckDefault"/>
              </div>
            </div>
            {/* <div className='component my-3 mx-3'>
              <div className={`form-check form-switch text-${props.mode}`}>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue Theam</label>
                  <input className="form-check-input" type="checkbox" onClick={props.toggleBlueMode} role="switch" id="flexSwitchCheckDefault"/>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

NavBar.prototype = {
    title: PropTypes.string,
    about: PropTypes.string
}
