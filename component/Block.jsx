
import Image from 'next/image'

const Block = ({title,para,im}) => {
  return (
    <div className='border-r-2 border-gray-300 w-60 h-full  flex items-center px-2'>
      <Image src={im} alt='block' width={200} height={200} className="w-10 h-10 rounded-full mr-1"/> 
      <div>
        <h3 className='font-bold '>{title} </h3>
        <p className="text-gray-400 text-sm line-clamp-1">{para}</p>
      </div>
    </div>
   
  )
}

export default Block
