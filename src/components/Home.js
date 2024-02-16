import React from "react";

import SideBar from "../components/SideBar";
import Card from "react-bootstrap/Card";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <Card className="shadow mt-2 p-5 ">
          <div className="text-center">
            <h1>LEARNING APP</h1>
            <br />
            <br />
          </div>
          <div className="row">
            <div className="col-lg-3">
              <Card className="shadow"style={{backgroundColor:"gray",height:500}}>
                <SideBar />
              </Card>
            </div>
            <div className="col-lg-9">
              <Card className=" shadow"style={{backgroundColor:"gray"}}>
                <Dashboard />
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Home;