import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({insideDashboard}) => {
  return (
    <>
      <Navbar className="shadow border rounded position-fluid w-100">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} className='text-decoration-none fw-bolder'>
            <i className="fa-brands fa-docker"></i>
            Project Fair
            </Link>
          </Navbar.Brand>
          {
            insideDashboard && 
            <Link to={'/'}><button className='btn btn-link fw-bolder me-1 text-decoration-none'>Logout <i className="fa-solid fa-right-from-bracket ms-1"></i> </button>
            </Link>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header