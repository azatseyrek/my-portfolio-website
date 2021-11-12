import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.linkedin.com/in/azat-seyrek-8197801a3/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/azatseyrek">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary=text">
              {""}
              Hello, I'M <span className="highlighted-text"> Azat </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                  {""}
                  <Typical
                      loops={Infinity}
                      steps={[
                          "Frontend Developer",
                          1000,
                          "React JS",
                          1000,
                        
                      ]}
                  />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
