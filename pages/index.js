import Image from 'next/image'
import Header2 from "@/component/header2"
import Header1 from "../component/header1"
import Header3 from "@/component/header3"
import Header4 from "@/component/header4"
import Head from "next/head"
import Footer from '@/component/footer'

const Home = () => {
  return (
    <div>
      <Head>
        <title> OYO:India's Best Online Hotel Booking Site</title>
        <link rel="icon" href="/OYO.png"></link>
      </Head>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className='mx-20 my-14  '>
        <Image  src={"/banner1.avif" }
        alt="banner1"
        width={200}
        height={200}
        className="h-50 w-full" 
        />
      <div className=' my-14 '>
        <Image  src={"/banner2.avif" }
        alt="banner1"
        width={200}
        height={200}
        className="h-50 w-full" 
        />
        </div>
        <Header4/>
    </div>
    <Footer/>
    
    </div>


  )
}

export default Home

