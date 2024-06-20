import React from 'react'
import BankerNavbar from '../bankerNavbar'
    const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"

const LandinngComponent = () => {
  return (
    <>
        <BankerNavbar/>
        <div className="page-header position-relative" style={{
        backgroundImage: `url(${pricingHeaderBg})`,
        backgroundSize: 'cover'
      }}>
         <span className="mask bg-gradient-primary opacity-6"></span>
        <div className="container pb-lg-9 pb-10 pt-7 position-relative z-index-2">
          <div className="row mt-4">
            <div className="col-md-6 mx-auto text-center">
              <h3 className="text-white">Banker Landing Page</h3>
              <p className="text-white"></p>
            </div>
          </div>
          </div>
          </div>
        
    </>
  )
}

export default LandinngComponent