import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const navigate = useNavigate();
    const[student, Setstudent] = useState<Student>({
        firstName: '',
        lastName: '' ,
        email: '',
        department: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        console.log("Before update:", student);
        Setstudent({ ...student, [e.target.name]: e.target.value });
        console.log("After update:", student);
    };

    const saveStudent = async (e: FormEvent) => {
        e.preventDefault();
        await axios.post("http://localhost:8180/student", student)
        navigate("/view-students")
    }
    return (
        <div className="formpage">
            <form className="formbody" onSubmit={(e) => saveStudent(e)}>
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
    )
}

export default AddStudent