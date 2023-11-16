import Image from 'next/image'
import Block from './Block'

const Header1 = () => {
  return (
    <div className='flex   justify-between border-b-2 border-gray-300 items-center h-24 px-10'>
        <Image src={'/logo.png'} alt='logo' width={200} height={200} className='w-28 h-28'
        />
        <div className=' border-gray-300 h-full flex'>
            <Block title={'Become a memeber '} para={'Additional 10% off'} im={'/member-card.png'}/>
            <Block title={'OYO for busieness '} para={'trusted by 5000 corporates'}im={'/briefcase.png'}/>
            <Block title={'List your property '} para={'Start earning in 30 min'} im={'/town.png'}/>
            <Block title={'8177933752 '} para={'Contact us'} im={'/phone-call.png'}/>
          <div className="flex items-center px-3    ">
          <Image
            src={"/signin.png"}
            alt="demo"
            width={200}
            height={200}
            className=" w-10 h-10 rounded-full mr-5"
          />
          <h3 className='font-bold'>login/signup</h3>
        </div>
        
        </div>
        
        
    </div>
  )
}

export default Header1
