import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'

const ProjectCard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
       <Card onClick={handleShow} className='btn shadow bordered'>
            <Card.Img height={'200px'} variant="top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
            </Card.Body>
        </Card> 

        <Modal size='lg' centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-lg-6">
                  <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6">
                  <h3>Title</h3>
                  <h6>Language Used: <span className='text-danger'>language</span></h6>
                  <p style={{textAlign:'justify'}}> <span className='fw-bolder'>Project Overview: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur voluptatem, magnam odit eum, velit reprehenderit id ipsum corrupti ratione porro hic dolore illum quae, quia cumque soluta laborum ipsam. </p>
                </div>
              </div>
              <div className="mt-2 float-start">
                <a href="https://github.com/Ayishakabeer/Recipe" target='_blank' className='btn btn-secondary me-2'> <i className="fa-brands fa-github"></i> </a>
                <a href="https://recipe-cuisine-sha.vercel.app/" target='_blank' className='btn btn-secondary'> <i className="fa-solid fa-link"></i> </a>
              </div>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default ProjectCard