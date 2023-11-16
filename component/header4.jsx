'use client'
import Image from 'next/image'

const Header4 = () => {
  return (
    <div className=' flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5'>
      <div className="flex items-center">
        <Image  src={"/fire.png"} width={200}  height={200} className='h-20 w-20 rounded-full mr-5  my-6'></Image>
      
        <div className='text-xl my-8'>
            <p className='font-bold'> Get access to exclusive deals</p>
            <p>Only the best deals reach to you</p>
        </div>
        </div>
        <div className='flex '>
            <input type="email" className='px-6 py-3 mr-5 rounded-lg outline-none border h-16 w-80 border-gray-300'
            placeholder='abc@gmail.com' />
            <button type='submit' className='w-32 h-14 bg-red-500 rounded-md text-xl text-white cursor-pointer mr-1 '> notify</button>
        </div>
      </div>
      
      
    
  )
}

export default Header4
