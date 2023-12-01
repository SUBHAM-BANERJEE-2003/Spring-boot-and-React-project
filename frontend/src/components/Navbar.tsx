import '../App.css'
import {FaUser} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
       <span className='logo'>
        <FaUser/>
        STUDENT MANAGEMENT SYSTEM 
       </span> 

        <ul className="navlist">
            <a href='#'><li>View All Students</li></a>
            <a href='#'><li>Add New Students</li></a>
        </ul>
    </nav>
  )
}

export default Navbar