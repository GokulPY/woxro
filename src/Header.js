import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyBill, faFileAlt, faSignOutAlt, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const handleLogout =(e)=>{
    e.preventDefault();
    navigate("/Login")
  }

  return (
    <>
    <h1 className='logo-name'>Woxro Bank of India</h1>
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
          <a href="/Home" className="nav-link"><FontAwesomeIcon icon={faHome} /><span className="nav-link-text">Home</span></a>
          </li>

          <li className="nav-item">
          <a href="/Deposit" className="nav-link"><FontAwesomeIcon icon={faMoneyBill} /><span className="nav-link-text">Deposit</span></a>
          </li>

          <li className="nav-item">
          <a href="/Transfer" className="nav-link"><FontAwesomeIcon icon={faExchangeAlt} /><span className="nav-link-text">Transfer</span></a>
          </li>

          <li className="nav-item">
          <a href="/Statement" className="nav-link"><FontAwesomeIcon icon={faFileAlt} /><span className="nav-link-text">Statement</span></a>
          </li>

          <li className="nav-item">
            <a href="/Login" className="nav-link"><FontAwesomeIcon icon={faSignOutAlt} /><span className="nav-link-text" onClick={handleLogout}>Logout</span></a>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Header;
