"use client"
export default function Nav() {
     const handleScroll=(targetId) => {
      console.log("hi")
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" })
     }
    return (
      <nav className="z-10 bg-blue-950 bg-opacity-50  fixed left-0 top-0 w-full shadow-md ">
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-emerald-400">Brand</a>
          <div className="ml-10">
            <div className="hidden md:block ml-6 flex items-baseline space-x-7">
              <a href="#" onClick={(e)=>{e.preventDefault();handleScroll("home")}} className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium hover:border hover:border-emerald-400">Home</a>
              <a href="#" onClick={(e)=>{e.preventDefault();handleScroll("skills")}} className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium hover:border hover:border-emerald-400">Skills</a>
              <a href="#"onClick={(e)=>{e.preventDefault();handleScroll("projects")}} className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium hover:border hover:border-emerald-400">Projects</a>
              <a href="#" onClick={(e)=>{e.preventDefault();handleScroll("")}} className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium hover:border hover:border-emerald-400">Contact</a>
            </div>
          </div>
        </div>
        <div className=" flex items-center">
          <div className="">
            <a href="#" onClick={(e)=>{e.preventDefault();handleScroll("contact")}} className="ml-4 px-3 py-2 bg-emerald-500 text-white rounded-md text-sm font-medium hover:bg-emerald-700">Contact me</a>
          </div>
        </div>
      </div>
    </div>

    {/*<div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#" className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium hover:border hover:border-emerald-400">Home</a>
        <a href="#" className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium hover:border hover:border-emerald-400">Skills</a>
        <a href="#" className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium hover:border hover:border-emerald-400">Projects</a>
        <a href="#" className="text-emerald-400 px-3 py-2 rounded-md text-sm font-medium hover:border hover:border-emerald-400">Contact</a>
        <a href="#" className="ml-4 px-3 py-2 bg-emerald-500 text-white rounded-md text-sm font-medium hover:bg-emerald-700">Contact me</a>
      </div>
    </div>*/}
  </nav>

    );
  }