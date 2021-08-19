import React from 'react'
import { Link } from 'react-router-dom';
import feature from '../Images/web-development.png';

const Home = () => {
    return (
        <div className=" container" >
            <section className ="mt-5" >
                <div className="row d-flex align-items-center" >

              <div className="mt-5 col-6 order-2 order-lg-1 align-items-center flex-column">
                  <h1>Grow your Buisness With <strong className="text-danger">Arfin IT</strong></h1>
                  <h4 className="mt-3">We are the team of talented Developer making websites</h4>
              <div>
                  <Link to="/service" className=" btn btn-outline-danger mt-5 ">Get Started</Link>
              </div>
                  </div>
              <div className="col-lg-6 order-1 order-lg-2 ">
                <img src={feature} className=" img-fluid" alt="" />
              </div>
                </div>
              
            </section>
        </div>
    )
}

export default Home
