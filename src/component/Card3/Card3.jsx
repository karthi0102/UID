import React,{ useState,useEffect } from 'react'
import './Card3.css'
const Card3 = (props) => {
    const [idx,setidx]=useState(0)
    const [watch,setWatch]=useState(props.watch)
    const [specs,setSpecs]=useState(props.specs)
    const [dis,setDis]=useState(false)
    const datas=props.watch
    const previous = (e)=>{
        e.preventDefault()
        const len=watch.length
        let c =(idx-1)%len
        setidx(c)
    }
    const next = (e)=>{
        e.preventDefault()
        const len =watch.length
        let c=(idx+1)%len
        setidx(c)
    }
    useEffect(()=>{
        document.title=`${watch[idx].title}`
    },[idx])
  return (
    <div className='card3-container'>
        <div className="container my-3">
            <div className='flex-container'>
                <div>
                    <button onClick={previous} disabled={idx==0} className='previous-button'>PREVIOUS</button> 
                </div>
                <div >
                    <div className="card shadow" >
                        <div className="card-body">
                            {!dis &&
                                <>
                                <img src={watch[idx].img} className='card3-img' />
                                <h2 className="card3-title">{watch[idx].title}</h2>
                                <p className='card3-prize'>{watch[idx].prize}</p>
                                <button onClick={()=>setDis(true)} className='specs-btn'>View specifications</button>
                                </> 
                                }
                                {
                                    dis && 
                                    <div className="specs-container">
                                        <p>{specs.Brand}</p>
                                        <p>{specs.Shape}</p>
                                        <p>{specs.BodyMaterial}</p>
                                        <p>{specs.StrapMaterial}</p>
                                        <p>{specs.Colours}</p>
                                        <p>{specs.OperatingSystem}</p>
                                        <p>{specs.BoxContents}</p>
                                        <button onClick={()=>setDis(false)} className='specs-btn'>View Product</button>
                                    </div>
                                }
                        </div>

                    </div>
                </div>
                <div>
                    <button onClick={next} className='next-button'>NEXT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card3
