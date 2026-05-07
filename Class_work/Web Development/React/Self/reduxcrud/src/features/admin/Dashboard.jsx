import React from "react";

function Dashboard() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Dashboard
          </h3>
          <ol
            className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="index.html" className="text-white">
                Admin
              </a>
            </li>
          </ol>
        </div>
      </div>
      {/* Header End */}
    </>
  );
}

export default Dashboard;
