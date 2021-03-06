import React, { Fragment } from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div style={{ marginTop: "20px" }} className="ui very padded container">
        <h3 className="center">Home</h3>
        <div className="ui segment">
          <p>
            This is my homepage. Right now I am still working on it. I would
            appreciate if you took that into consideration when you looked at
            it.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
