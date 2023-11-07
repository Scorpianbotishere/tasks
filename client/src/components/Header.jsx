import { NavLink , useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate()
  const userlogged = localStorage.getItem('jwtToken');
  const handleLogout = () => {
    // Clear the JWT token from local storage
    localStorage.removeItem('jwtToken');
    
    // Redirect to the home page or any other desired page after logout
    navigate('/login');
  };
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
          <NavLink to={'/register'} onClick={handleLogout}>
            Logout
          </NavLink>
        </li>
      </ul>}
    </div>
  );
}

export default Header;
