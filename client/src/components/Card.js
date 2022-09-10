import "./card.css"
export function Card(props){
    const {name,description,img,price,rating}=props;
    return (<div className='game'>

    <div className='game-name' >
      
    {/* Block title */}
      <div className='game-title' >
        <span className='test-name'></span>
    {/* Block image */}
        <img className='img' src={img}/>
      </div>
    {/* Block description */}
      <div className='game-description' >
     <span className='test-description'> {description}</span>
      
      </div>
      <div className='game-bottom'>
    {/* Block rating */}
    <div className='game-rating' >
      Rating: {rating}    
      </div>
    {/* Block price */}
    <div className='game-price' >
      Price: {price}
      </div>
    </div>
    </div>
      </div>
      )

}
