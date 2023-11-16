
const Header2 = () => {
    const list=[
        {
            name:'Banglore'
        },
        {
            name:'Pune'
        },
        {
            name:'Nagpur'
        },
        {
            name:'Hyderabad'
        },
        {
            name:'Mumbai'
        }
    ]
  return (
    <div>
      <div className="flex  px-10 py-3 bg-gray-400 justify-between">
        {list.map((e)=>{
          return(
            <span key={e.name }>{(e.name)}</span>
          )
        }

        )}
        
      </div>
    </div>
  )
}

export default Header2
