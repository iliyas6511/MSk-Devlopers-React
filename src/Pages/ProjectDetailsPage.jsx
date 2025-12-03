import React from 'react'
import ProjectDetails from '../Components/ProjectDetails'
import EnquiryForm from '../Components/Enquiry'
import { useParams } from 'react-router-dom'

const ProjectDetailsPage = () => {
  const { id } = useParams()   // 👈 get :id from route

  return (
    <>
      <ProjectDetails id={id} />  {/* pass id to ProjectDetails */}
      <EnquiryForm/> 
    </>
  )
}

export default ProjectDetailsPage