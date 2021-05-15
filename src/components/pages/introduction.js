import React from "react";

function Introduction() {
  return (
    <div>
      <section className="intro" id="intro">
        <div className="container">
          <div className="row intropg">
            <div className="introContent">
              <div className="block">
                <h3>Hi! I am a </h3> <h1>Full Stack Developer </h1>
                <br />
                <a
                  href="https://www.linkedin.com/in/lois-aleghe-2b754b1a0/"
                  target="_blank"
                >
                  <i
                    className="fa fa-linkedin-square fa-4x  iconStyle fa-fw introicons"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="https://drive.google.com/file/d/1nvjHmeoQbcumjArw9QpPskBuMYYvIEu6/view?usp=sharing"
                  target="_blank"
                >
                  <i
                    className="fa fa-envelope fa-4x iconStyle fa-fw introicons"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                <a href="https://github.com/loisaleghe">
                  <i
                    className="fa fa-github fa-4x iconStyle fa-fw introicons"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <i
                    className="fa fa-facebook fa-4x iconStyle introicons"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
