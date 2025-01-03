import { NavLink, useNavigate } from "react-router-dom"
import './PageHeader.scss'
import { Button } from "@mui/material"
import { logoutUser } from "../../actions/loginRegisterActions"
import { useLoginRegistration } from "../../components/LoginRegisterItem/LoginRegistrationContext"

const PageHeader = () => {
  const { state, dispatch } = useLoginRegistration()
  const navigate = useNavigate()

  const { user, isLoggedIn } = state

  const handleLogout = async () => {
    await logoutUser(dispatch)
    navigate('/login')
  }

  return (
    <header className="page-header">
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? "active-link" : ""}>
              <Button variant="text" className="a">Home</Button>
            </NavLink>
          </li>
          {user && user.type === 'admin' && isLoggedIn && (
            <>
              <li>
                <NavLink to='/form' className={({ isActive }) => isActive ? "active-link" : ""}>
                  <Button variant="text" className="a">Add Pet</Button>
                </NavLink>
              </li>
              <li>
                <NavLink to='/volunteer/form' className={({ isActive }) => isActive ? "active-link" : ""}>
                  <Button variant="text" className="a">Add Volunteer</Button>
                </NavLink>
              </li>
              <li>
                <NavLink to='/users' className={({ isActive }) => isActive ? "active-link" : ""}>
                  <Button variant="text" className="a">Users List</Button>
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to='/pets' className={({ isActive }) => isActive ? "active-link" : ""}>
              <Button variant="text" className="a">Pets List</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/volunteers' className={({ isActive }) => isActive ? "active-link" : ""}>
              <Button variant="text" className="a">Volunteers List</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/donations' className={({ isActive }) => isActive ? "active-link" : ""}>
              <Button variant="text" className="a">Donate</Button>
            </NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <NavLink to={`/users/${user._id}`} className={({ isActive }) => isActive ? "active-link" : ""}>
                  <Button variant="text" className="a">Profile</Button>
                </NavLink>
              </li>
              <li>
                <Button variant="text" className="a" onClick={handleLogout}>Logout</Button>
              </li>
            </>
          ) : (
            <li>
              <NavLink to='/login' className={({ isActive }) => isActive ? "active-link" : ""}>
                <Button variant="text" className="a">Login/Register</Button>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default PageHeader