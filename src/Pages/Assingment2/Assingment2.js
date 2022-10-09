import React from 'react'
import './Assingment2.css'
import Navbar2 from '../../component/Navbar2/Navbar2'
import Text2 from '../../component/Text2/Text2'
import NewOne from '../../component/NewOne/NewOne'
import Footer from '../../component/Footer/Footer'
import ProductCard from '../../component/ProductCard/ProductCard'
const Assingment2 = () => {
  return (
    <div className='assingment2-container'>
        <Navbar2 />
        <Text2 msg="Try our watches now" />
        <NewOne img="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw0796559d/2020/FA20/set_1005_gen5_smartwatches/gen5_lm/1005_Gen5_Learn_More_Hero6_watch_Desktop.gif"/>
        <Text2  msg="Try our other Products"/>
        <div className='row m-3'>
            <div className="col-4">
                    <ProductCard img="https://fossil.scene7.com/is/image/FossilPartners/FTW4018_main?$sfcc_fos_large$" name="Fossil Gen 4" price={11000} />
            </div>
            <div className="col-4">
                     <ProductCard  img="https://fossil.scene7.com/is/image/FossilPartners/FTW4003_main?$sfcc_fos_large$" name="Fosill Gen 3" price={13000} />
            </div>
            <div className="col-4">
                     <ProductCard img="https://fossil.scene7.com/is/image/FossilPartners/FTW2109_main?$sfcc_fos_large$" name="Fossil Gen 2" price={8000} />
            </div>
        </div>

        <Footer />

    </div> 
  )
}

export default Assingment2
