import { Link } from 'react-router-dom';
import '../App.css'
import {FaUser} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
       <span className='logo'>
        <FaUser/>
        STUDENT MANAGEMENT SYSTEM 
       </span> 
       </Link>
        <ul className="navlist">
            <Link to='/view-students'><li>View All Students</li></Link>
            <Link to='/add-students'><li>Add New Students</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar