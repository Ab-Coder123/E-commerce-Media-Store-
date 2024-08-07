import React from 'react'
import img1 from "../../Images/folded_black.jpg"
import img2 from "../../Images/bicycle_man_black.jpg"
import img3 from "../../Images/gamer_teen_back_black.jpg"
import img4 from "../../Images/gamer_teen_black (1).jpg"
import img5 from "../../Images/gamer_teen_black.jpg"

const Gallery = () => {
  return (
<>
<section className="text-gray-600 body-font  bg-white  dark:bg-black dark:text-white">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900 dark:text-indigo-600  lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full rounded-2xl object-cover h-full object-center block" src={img1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full rounded-2xl object-cover h-full object-center block" src={img2}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full rounded-2xl object-cover object-center block" src={img3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full rounded-2xl object-cover object-center block" src={img4}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover rounded-2xl h-full object-center block" src={img5}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <img alt="gallery" className="w-full object-cover border rounded-2xl h-full object-center block" src={img1}/>
        </div>
      </div>
    </div>
  </div>
</section>
</>



  )
}

export default Gallery