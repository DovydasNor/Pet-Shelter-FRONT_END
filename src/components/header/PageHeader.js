import { NavLink } from "react-router-dom"
import './PageHeader.scss'
import { Button } from "@mui/material"

const PageHeader = () => {
  return (
    <header className="page-header">
      <nav>
        <ul>
          <li>
            <Button variant="text">
              <NavLink to='/' activeClassName="active-link">Home</NavLink>
            </Button>
          </li>
          <li>
            <Button variant="text">
              <NavLink to='/form' activeClassName="active-link">Add Pet</NavLink>
            </Button>
          </li>
          <li>
            <Button variant="text">
              <NavLink to='/pets' activeClassName="active-link">Pets List</NavLink>
            </Button>
          </li>
          <li>
            <Button variant="text">
              <NavLink to='/volunteer/form' activeClassName="active-link">Add Volunteer</NavLink>
            </Button>
          </li>
          <li>
            <Button variant="text">
              <NavLink to='/volunteers' activeClassName="active-link">Volunteers List</NavLink>
            </Button>
          </li>
          <li>
            <Button variant="text">
              <NavLink to='/donate' activeClassName="active-link">Donate</NavLink>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default PageHeader