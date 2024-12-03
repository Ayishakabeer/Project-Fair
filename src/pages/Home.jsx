import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/land.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{fontSize:'80px'}}><i className='fa-brands fa-docker'></i>Project Fair</h1>
              <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
              <Link to={'/login'} className="btn btn-danger">STARTS TO EXPLORE</Link>
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' width={'500px'} src={landingImg} alt="" />
            </div>
          </div>
        </div>
      </div> 

         {/* Explore Our Projects */}
         <div className="my-5 text-center">
          <h1 className="mb-5">Explore Our Projects</h1>
          <marquee>
            <div className="d-flex">
              <div className="me-5">
                <ProjectCard/>
              </div>
            </div>
          </marquee>
          <Link to={'/projects'}> <button className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS...</button></Link>
         </div>

         {/* Our Testimonials */}
         <div className="d-flex justify-content-center align-items-center my-5 flex-column">
          <h1>Our Testimonials</h1>
          <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
            {/* cards */}

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="d-flex justify-content-center align-items-center  flex-column">
                  <img width={'60px'} height={'60px'} src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp" alt="" className="rounded-circle img-fluid" />
                  <div className="d-flex justify-content-center my-2">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                  </div>
                  <p style={{textAlign:'justify'}}>Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="d-flex justify-content-center align-items-center  flex-column">
                  <img width={'60px'} height={'60px'} src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="" className="rounded-circle img-fluid" />
                  <div className="d-flex justify-content-center my-2">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                  </div>
                  <p style={{textAlign:'justify'}}>Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text className="d-flex justify-content-center align-items-center  flex-column">
                  <img width={'60px'} height={'60px'} src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg" alt="" className="rounded-circle img-fluid" />
                  <div className="d-flex justify-content-center my-2">
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                  </div>
                  <p style={{textAlign:'justify'}}>Some quick example text to build on the card title and make up the
                  bulk of the card's content.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
         </div>
    </>
  )
}

export default Home