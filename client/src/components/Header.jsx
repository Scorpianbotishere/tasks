import { NavLink } from "react-router-dom";

function Header() {

  const userlogged = false;
  return (

    <div className="header">
      <a className="app_logo">Tasker</a>
      {userlogged && <ul className="top_nav">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" activeClassName="active">
            Create
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
           Profile
          </NavLink>
        </li>
       <li>
          <NavLink to="/" activeClassName="active">
            Logout
          </NavLink>
        </li>
      </ul>}
    </div>
  );
}

export default Header;
