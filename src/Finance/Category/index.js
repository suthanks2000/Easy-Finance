import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'; 
import { Container, Row, Col, Card } from 'react-bootstrap';
import './index.css';
import CategoryNavbar from './categoryNavbar';


export default function Category() {
      const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"
  return (
    <>
      <CategoryNavbar />
      <div className="page-header position-relative" style={{
        backgroundImage: `url(${pricingHeaderBg})`,
        backgroundSize: 'cover'
      }}>
        </div>
        <span className="mask bg-gradient-primary opacity-6 height-200"></span>
      
        <div className="row mt-7">
          <h2 className='text-center'>Apply Loans here </h2>
          <div className="col-sm-3">
            
          <Link to="/loans/personalloan">
          <Card className="text-center">
                        <Card.Header className="bg-white text-center pt-4 pb-3 border-0">
                          <h2 className="font-weight-bold mt-2">
                            <small>personal Loan</small>
                          </h2>
                        </Card.Header>
                        <Card.Body className="text-lg-start text-center pt-0">
                        <div className="d-flex align-items-center p-2">
                          <p>
                          A personal loan is a type of unsecured loan typically used for various personal expenses, offering a fixed amount of money with a fixed interest rate and repayment term
                          </p>
                        </div>
                        </Card.Body>
                      </Card>
          </Link>
          {/* <Link to="/loans/personalloan" className='text-decoration-none'>
                  <div className="category-item">
                    <img src="personalloan.jpg" alt="Personal Loan" className="category-image" />
                    <h5 className="text-center mt-2">Personal Loan</h5>
                  </div>
                </Link> */}
          </div>
          <div className="col-sm-3">
          <Link to="/loans/homeloan">
          <Card className="text-center">
                        <Card.Header className="bg-white text-center pt-4 pb-3 border-0">
                          <h2 className="font-weight-bold mt-2">
                            <small>home Loan</small>
                          </h2>
                        </Card.Header>
                        <Card.Body className="text-lg-start text-center pt-0">
                        <div className="d-flex align-items-center p-2">
                          <p>
                          A home loan is a financial product that enables individuals to borrow money from a bank or financial institution to purchase or refinance a residential property.                        </p>
                        </div>
                        </Card.Body>
                      </Card>
          </Link>
          {/* <Link to="/loans/homeloan" className='text-decoration-none'>
                  <div className="category-item">
                    <img src="homeloan12.jpg" alt="Home Loan" className="category-image" />
                    <h5 className="text-center mt-2">Home Loan</h5>
                  </div>
                </Link> */}
          </div>
          <div className="col-sm-3">
          <Link to="/loans/businessloan">
          <Card className="text-center">
                        <Card.Header className="bg-white text-center pt-4 pb-3 border-0">
                          <h2 className="font-weight-bold mt-2">
                            <small>business Loan</small>
                          </h2>
                        </Card.Header>
                        <Card.Body className="text-lg-start text-center pt-0">
                        <div className="d-flex align-items-center p-2">
                          <p>
                          A business loan is a financial product designed to provide funds to businesses for various purposes, such as expansion, inventory, or operational expenses, typically repaid with interest over a fixed period</p>
                        </div>
                        </Card.Body>
                      </Card>
          </Link>
          {/* <Link to="/loans/businessloan" className='text-decoration-none'>
                  <div className="category-item">
                    <img src="businessloan1.jpg" alt="Business Loan" className="category-image" />
                    <h5 className="text-center mt-2">Business Loan</h5>
                  </div>
                </Link> */}
          </div>
          <div className="col-sm-3">
          <Link to="/loans/vehicleloan">
          <Card className="text-center">
                        <Card.Header className="bg-white text-center pt-4 pb-3 border-0">
                          <h2 className="font-weight-bold mt-2">
                            <small>vehicle Loan</small>
                          </h2>
                        </Card.Header>
                        <Card.Body className="text-lg-start text-center pt-0">
                        <div className="d-flex align-items-center p-2">
                          <p>
                          A vehicle loan is a financial product designed to help individuals purchase a car by providing them with funds that are repaid over time with interest.</p>
                        </div>
                        </Card.Body>
                      </Card>
          </Link>
          {/* <Link to="/loans/vehicleloan" className='text-decoration-none'>
                  <div className="category-item">
                    <img src="vehicleloan.jpg" alt="Vehicle Loan" className="category-image" />
                    <h5 className="text-center mt-2">Vehicle Loan</h5>
                  </div>
                </Link> */}
          </div>
        </div>
        
      {/* <div className="app"> */}
        
        {/* <div className="bottom-right-container">
          <Row className="justify-content-around">
            <Col xs={12} sm={6} md={3}>
              <Link to="/loans/personalloan" className='text-decoration-none'>
                <div className="category-item">
                  <img src="personalloan.jpg" alt="Personal Loan" className="category-image" />
                  <h5 className="text-center mt-2">Personal Loan</h5>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-4">
              <Link to="/loans/homeloan" className='text-decoration-none'>
                <div className="category-item">
                  <img src="homeloan12.jpg" alt="Home Loan" className="category-image" />
                  <h5 className="text-center mt-2">Home Loan</h5>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-4">
              <Link to="/loans/businessloan" className='text-decoration-none'>
                <div className="category-item">
                  <img src="businessloan1.jpg" alt="Business Loan" className="category-image" />
                  <h5 className="text-center mt-2">Business Loan</h5>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={3} className="mb-4">
              <Link to="/loans/vehicleloan" className='text-decoration-none'>
                <div className="category-item">
                  <img src="vehicleloan.jpg" alt="Vehicle Loan" className="category-image" />
                  <h5 className="text-center mt-2">Vehicle Loan</h5>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </div> */}

      <div className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <div className="accordion" id="accordionPanelsStayOpenExample1">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Why Choose Us?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-collapseOne">
            <div className="accordion-body"> 
              <strong>We offer a variety of loan products to suit your needs. Our loans come with:</strong> 
              <ul>
                <li>Competitive interest rates</li>
                <li>Flexible repayment options</li>
                <li>Quick and easy application process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="accordion" id="accordionPanelsStayOpenExample2">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Eligibility Criteria
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-collapseTwo">
            <div className="accordion-body">
              <strong>To apply for a loan, you need to meet the following criteria:</strong> 
              <ul>
                <li>Minimum age of 21 years</li>
                <li>Proof of steady income</li>
                <li>Good credit history</li>
                <li>Valid identification and address proof</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <Container className="mt-5">
        <Row className="justify-content-around">
       <Col xs={12} md={12} lg={12} className="mb-4">
            <div className="info-item">
              <h3 className="text-center mb-4">FAQs</h3>
              <p><strong>Q: How do I apply for a loan?</strong></p>
              <p>A: You can apply online through our website or visit any of our branches.</p>
              <p><strong>Q: What documents are required?</strong></p>
              <p>A: You need to submit identification proof, address proof, and proof of income.</p>
              <p><strong>Q: How long does it take to process the loan?</strong></p>
              <p>A: Loan processing typically takes 3-5 business days.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}




    