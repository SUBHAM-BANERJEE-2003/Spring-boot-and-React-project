import { useEffect, useState } from "react"
import axios from 'axios'
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const StudentTable = () => {
    const [students, setstudents] = useState([])

    useEffect(() => {
        loadStudents();
    }, [])

    const loadStudents = async () => {
        const result = await axios.get("http://localhost:8180/student",
            {
                validateStatus: () => {
                    return true;
                },
            }
        )
        if (result.status === 302)
            setstudents(result.data)
        setstudents(result.data)
    }
    return (
        <section className="container">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr className="text-center">
                        <th>Student Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th colSpan={3}>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {students.map((student: Student, index) => (
                        <tr key={student.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.department}</td>
                            <td className="mx-2">
                            <Link to={`/student-profile/${student.id}`} className="btn btn-info">    
                                <FaEye/>
                            </Link>
                            </td>
                            <td className="mx-2">
                            <Link to={`/edit-student/${student.id}`} className="btn btn-warning">    
                                <FaEdit/>
                            </Link>
                            </td>
                            <td className="mx-2">
                            <button className="btn btn-danger">    
                                <FaTrashAlt/>
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

    )
}

export default StudentTable