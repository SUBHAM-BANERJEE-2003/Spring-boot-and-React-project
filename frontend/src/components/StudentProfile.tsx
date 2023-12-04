import { useState,useEffect, } from "react"
import axios from 'axios'
import {useParams} from 'react-router-dom'

const StudentProfile = () => {
    const {id} = useParams()
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

      const containerStyle: React.CSSProperties = {
        backgroundColor: '#9de2ff',
        height: '65vh',
        maxWidth: "90%",
        marginLeft: "45px",
        marginTop: "-60px",
        marginBottom: "40px",
        borderRadius: '15px',
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      };
    
      const cardStyle: React.CSSProperties = {
        borderRadius: '15px',
      };
    
      const cardImageStyle: React.CSSProperties = {
        width: '180px',
        borderRadius: '10px',
      };
    
      const infoContainerStyle: React.CSSProperties = {
        flexGrow: 1,
        marginLeft: '15px',
      };
    
      const statsContainerStyle: React.CSSProperties = {
        backgroundColor: '#efefef',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        marginTop: '10px',
      };

      const buttonStyle1: React.CSSProperties = {
        flex: 1, 
        marginRight: '0.5rem',
        cursor: "pointer",
        height: "30px",
        backgroundColor: "transparent",
        borderColor: "blueviolet",
        borderRadius: '5px',
        color: "blueviolet",
        fontWeight: "bold"
      }

      const buttonStyle2: React.CSSProperties = {
        flex: 1, 
        marginRight: '0.5rem',
        cursor: "pointer",
        height: "30px",
        backgroundColor: "transparent",
        borderColor: "green",
        borderRadius: '5px',
        color: "green",
        fontWeight: "bold"
      }
    
      const statsItemStyle: React.CSSProperties = {
        flex: 1,
        textAlign: 'center',
      };
    
      return (
        <div style={containerStyle}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginTop: '5rem' }}>
              <div style={cardStyle}>
                <div style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', color: 'black' }}>
                    <div style={{ flexShrink: 0 }}>
                      <img
                        style={cardImageStyle}
                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                        alt='Generic placeholder image'
                      />
                    </div>
                    <div style={infoContainerStyle}>
                      <p><strong>First Name:</strong> {student.firstName}</p>
                      <p><strong>Last Name:</strong> {student.lastName}</p>
                      <p><strong>Department:</strong> {student.department}</p>
    
                      <div style={statsContainerStyle}>
                        <div style={statsItemStyle}>
                          <strong>Email</strong>
                          <p className="mb-0">{student.email}</p>
                        </div>
                      </div>
    
                      <div style={{ display: 'flex', paddingTop: '0.8rem' }}>
                        <button style={buttonStyle1}>Call</button>
                        <button style={buttonStyle2}>Message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default StudentProfile