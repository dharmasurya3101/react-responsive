import React, { Component} from 'react'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from './banner2.jpg'

export default class ImageSection extends Component  {
  render() {
    return (
    <div>
        <img src='https://insideracademy.in/wp-content/uploads/2018/05/seo-training-noida.jpg'/>
      <div className='ban mb30'>
      <marquee className="mark">ELearn Infotech takes all the efforts to provide flexible and friendly Web designing & PHP Development, Digital Marketing Training Programs to all right from beginners to professionals who wish to learn new techniques and current trends.</marquee>
          <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    
                     
                </div>  
                
            </div> 
          </div>
      </div>

<div className='container mb30'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='mb30'>Welcome To <span Style='color:orange'>ELearn Infotech</span></h2>
                    <p>ELearn Infotech is a Realtime Training Company offering Courses on varied IT Technologies like Web Design & PHP with MySQL, Digital Marketing, UI/UX Designing & Development, Oracle Modules, Angularjs, Node.js, Python, Fullstack Development, SAP Moddules, Cloud Computing, Graphic Designing, Tally ERP9, Autocad etc. Established in 2016 ELearn Infotech has successfully Trained upwards of 15,000+ Students. ELearn Infotech offers Excellent Software courses with end to end support to the candidates. ELearn Infotech is a one stop shop for IT services & Training in Madhapur,Hyderabad.</p>
                    <p>Classroom Training is an effective means of delivering knowledge, as it allows real-time feedback, questions and answers change of delivery to suit the needs of learners in a real time environment.
                    Online Training We have Invested Heavily in our Online Training Division to Develop rich Content with out Compromising the ideal Learning Process for the Trainee.Corporate Training helps to Understand the Requirement of the Industry & we are able to understand the requirements because all our trainings are tailor made to the needs of the organization under consideration.</p>
                </div>  
                
            </div> 
          </div>

        

     </div> 
      
    )
  }
}
