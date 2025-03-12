// Supposons que Project soit un composant React représentant un projet
"use client";
import { useEffect,useState } from "react";
import Image from "next/image";
import dev from '../app/web_dev.svg'
const Project = ({ title, description, imageUrl }) => {

  
  return(
  <div className="relative project-container p-10  w-full h-full" onMouseEnter={() => handleToggle(true)} onMouseLeave={() => handleToggle(false)}>
      
      <div className='border h-20 w-1/4'></div>
      <div className='border h-20 w-1/4'></div>
      <div className='border h-20 w-1/4'></div>
      <div className='border h-20 w-1/4'></div>
  </div>
  )
};
export default Project