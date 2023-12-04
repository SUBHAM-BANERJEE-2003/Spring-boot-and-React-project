import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const[student, Setstudent] = useState<Student>({
        firstName: '',
        lastName: '' ,
        email: '',
        department: '',
    });

    useEffect(() => {
        loadStudent();
    }, [])

    const loadStudent = async () => {
        const result = await axios.get(`http://localhost:8180/student/student/${id}`)
        Setstudent(result.data)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        Setstudent({ ...student, [e.target.name]: e.target.value });
    };

    const updateStudent = async (e: FormEvent) => {
        e.preventDefault();
        await axios.put(`http://localhost:8180/student/update/${id}`, student)
        navigate("/view-students")
    }
    return (
        <>
        <h2 className="form-heading">EDIT STUDENT</h2>
        <div className="formpage">
            <form className="formbody" onSubmit={(e) => updateStudent(e)}>
                <div className="input-group">
                    <label
                        className="input-group-text"
                        htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        value={student.firstName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="input-group">
                    <label
                        className="input-group-text"
                        htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={student.lastName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group">
                    <label
                        className="input-group-text"
                        htmlFor="email">
                        Email
                    </label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={student.email}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <div className="input-group">
                        <label
                            className="input-group-text"
                            htmlFor="department">
                            Department
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="department"
                            id="department"
                            required
                            value={student.department}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-info" type="submit">Save</button>
                        <button className="btn btn-danger" type="reset">Refresh</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default EditStudent