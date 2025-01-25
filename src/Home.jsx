import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home" style={{ backgroundColor: "black" }}>
        <button type="button">
          <Link to="/escrow">Click Here to go to the escrow section</Link>
        </button>
      </div>
      <div className="home" style={{ backgroundColor: "black" }}>
        <button type="button">
          <Link to="/store">Click Here to go to the store section</Link>
        </button>
      </div>
    </>
  )
}

export default Home;
