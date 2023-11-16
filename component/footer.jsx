import Image from 'next/image'
import Connect from './connect'
import Social from './connect'
const Footer = () => {
  return (
    <div className='h-60 bg-gray-600' >
    <div className='flex items-center justify-around   py-10 text-2xl border-b border-white'>
        
        < div className='flex space-x-5  '>
         <Image src={"/oyo_footer.svg"}
         width={200}
         height={200} 
         className=" h-10 w-20"></Image>
        <p className=''> World's leading chain of hotels and rooms</p>
    </div>
    <div className='flex space-x-3  '>
       <p> Join our network and grow your busieness!</p>
      <button type="button" placeholder="List your property" className=' flex w-64 h-12 text-xl text-gray-300 outline-none rounded items-center bg-white py-3'>
        <Image src={"/town.png" }
        height={200}
        width={200}
        className='h-10 w-10 mx-1 mb-1 '
        >

        </Image>
        List your property

      </button>
       </div>

    </div>
    <div  className='flex justify-between mx-10 border-gray border-b' >
    <div className='flex my-3 mx-3 space-x-4 '>
    <Social logo="/twitter.png" link=""/>
    <Social logo="/youtube.png" link=""/>
    <Social logo="/instagram.png" link="https://www.instagram.com/"/>
    <Social logo="/facebook.png" link=""/>
    </div>
    <div className=' flex py-5 '>
        <p>2013-2022 © Oravel Stays Limited</p>
    </div>
    </div>
    </div>
  )
}

export default Footer
