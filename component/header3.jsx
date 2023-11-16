'use client'

const Header3 = () => {
  return (
    <div className=" bg-gradient-to-r from-pink-600 to-red-600 h-60">
      <div className=" p-5">
        <h2 className="text-4xl text-white  text-center font-bold color">Over 157,000 hotels and homes across 35 countries</h2>
      </div>
      <div className="grid grid-cols-5 my-1 mx-20">
        <input
         type="text" 
         placeholder="Search"
         className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2"/>
        <input
         type="text" 
         placeholder="Search"
         className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"/>
        <input
         type="text" 
         placeholder="Search"
         className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"/>
        <button
         type="submit" 
         className="h-16 outline-none col-span-1 bg-green-400 w-40 hover:bg-green-500">
          Search
          </button>
      </div>
      <div className="flex mx-20 my-4  font-bold " >
      <button
         type="submit" 
         className="h-16 px-3 py-2 hover:cursor-pointer text-white mr-5">
           Continue your Search
          </button>
          <button
         type="submit" 
         className=" h-16 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 w-60 hover:bg-gray-500 rounded-xl">
          Homestay in India
          </button>
      </div>
    </div>
  )
}

export default Header3
