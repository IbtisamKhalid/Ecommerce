import React from 'react'
import { Link } from "react-router-dom";




function EscrowHome() {
  return (
    <>
          <div className="home">
            <button type="button">
              <Link to="/escrow">Click Here to go to the escrow section</Link>
            </button>
          </div>
          <div className="home">
            <button type="button">
              <Link to="/store">Click Here to go to the store section</Link>
            </button>
          </div>
        </>
  )
}

export default EscrowHome