import { NavLink } from "react-router-dom";

const PageHeader = () => {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/form'>Add pet</NavLink></li>
          <li><NavLink to='/pets'>Pets list</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default PageHeader;
