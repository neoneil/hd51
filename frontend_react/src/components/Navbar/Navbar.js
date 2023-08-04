import logo from '../../logo.svg';
import './Navbar.scss';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (<nav className="navbar navbar-expand-lg navbar-light ThemeColor">
    <div className="container-fluid">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <button className="navbar-toggler">
        <a className="nav-link dropdown-toggle" href="/Summary/Commercial" data-target="#navToggleCommercial" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </a>
        <div className="dropdown-menu" id="navToggleCommercial">
          <a className="dropdown-item" href="/Summary/Dashboard">Dashboard</a>
        </div>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/subnav">Modules</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/students">show students</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts">New Student</Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>)
}

export default Navbar;