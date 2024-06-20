import React from 'react'
import AdminNavbar from './adminNavbar'

const Dasborad = () => {

  const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"


  return (
    <>
    <div>
    <AdminNavbar/>
    <span className="mask bg-gradient-primary opacity-6"></span>
        <div className="container pb-lg-9 pb-10 pt-7 position-relative z-index-2">
          <div className="row mt-4">
            <div className="col-md-6 mx-auto text-center">
              <h3 className="text-white">Welcome to Admin page</h3>
              <p className="text-white">Admin Only control for banker and user page</p>
            </div>
          </div>
          </div>
          </div>
    </>
  )
}

export default Dasborad