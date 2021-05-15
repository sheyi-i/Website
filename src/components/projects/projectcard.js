import React from "react";


export default function ProjectCard({
  image,
  name,
  description,
  github_link,
  deployed_link,
}) {
  return (
    <div className="col-lg-4 col-md-5  col-sm-12 col-xs-12 mt-3 mb-3">
      <div className="card projectcard">
        <img src={process.env.PUBLIC_URL + image} className="card-img-top" alt="image of the burger" />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            {name}
          </h5>
          <p className="card-text">{description}</p>
          <button>
            <a href={github_link} className="card-link" target="_blank">
              Github Link
            </a>
          </button>
          <button>
            <a href={deployed_link} className="card-link" target="_blank">
              Deployed App
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
