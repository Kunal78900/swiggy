import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer
        className=" text-center text-blue w-100"
        style={{ "background-color": "lightgray;" }}
      >
        <div
          className="container p-4"
          style={{ "background-color": "lightgray;" }}
        >
          <section className="mb-4 text-blue">
            <Link
              className="btn btn btn-primary btn-floating m-1 "
              to="/"
              role="button"
            >
              <i className="fa fa-facebook-f"></i>
            </Link>

            <Link
              className="btn btn btn-primary btn-floating m-1"
              to="/"
              role="button"
            >
              <i className="fa fa-twitter"></i>
            </Link>

            <Link
              className="btn btn btn-primary btn-floating m-1"
              to="/"
              role="button"
            >
              <i className="fa fa-google"></i>
            </Link>

            <Link
              className="btn btn btn-primary btn-floating m-1"
              to="/"
              role="button"
            >
              <i className="fa fa-instagram"></i>
            </Link>

            <Link
              className="btn btn btn-primary btn-floating m-1"
              to="/"
              role="button"
            >
              <i className="fa fa-linkedin"></i>
            </Link>

            <Link
              className="btn btn btn-primary btn-floating m-1"
              to="https://github.com/Prerna092002/AskService"
              role="button"
            >
              <i className="fa fa-github"></i>
            </Link>
          </section>

          <section className="text-blue">
            <form action="">
              <div className="row d-flex flex-column justify-content-center"></div>
              <div className="col-auto">
                <br></br>
              </div>
            </form>
          </section>

          <section className="text-blue">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fa fa-home me-3 text-secondary"></i>Swiggy
                </h6>
                <p>
                  New Delhi
                  <br></br>
                  Mumbai
                  <br></br>
                  Gurugram
                  <br></br>
                  Jalandhar
                  <br></br>
                  Bangalore
                  <br></br>
                  Hyderabad
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Technologies</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Node
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    MongoDB
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Express.js
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    React
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Order Now
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Help
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fa fa-home me-3 text-secondary"></i>Chitkara
                  University
                </p>
                <p>
                  <i className="fa fa-envelope me-3 text-secondary"></i>
                  chitkarauni@chitkara.edu.in
                </p>
                <p>
                  <i className="fa fa-phone me-3 text-secondary"></i>+91
                  9306124901
                </p>
              </div>
            </div>
          </section>
          <span className="text-muted">© 2023, Swiggy</span>
        </div>
      </footer>
    </div>
  );
}
