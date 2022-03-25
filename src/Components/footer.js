import React from "react";
import { Link } from "react-router-dom";
// import { IconName } from "react-icons/io5";

export default function Footer(props) {
  // let myStyle = {
  //   color : props.mode==='dark'?'white':'#212529',
  //   backgroundColor: props.mode==='dark'?'#212529':'white',
  // }
  return (
    <>
      <footer
        className={`text-center text-lg-start bg-${
          props.mode === "light" ? "light" : "dark"
        } text-${props.mode === "light" ? "dark" : "light"}`}
        style={{ position: "relative", top: "250px", zIndex: "-1" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block ">
            <div>
              Get connected with us on social networks:
              <div className="d-inline-flex p-2 bd-highlight flex-fill justify-content-end">
                <div className="mx-5">
                  <a
                    href="https://www.facebook.com/iiitlucknow/"
                    target="_blank"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </div>

                <a
                  href="https://www.instagram.com/iiitlucknow/?hl=en"
                  target="_blank"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <div className="mx-5">
                  <a href="https://twitter.com/iiit_lucknow" target="_blank">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Destinations</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Place1
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Place2
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Place3
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Place4
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Place5
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="#">
            Title
          </a>
        </div>
      </footer>
    </>
  );
}
