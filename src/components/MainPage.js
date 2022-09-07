import React from "react";
import Navigation from "./Navigation";
import Bridgedata from "../bridgedata.json";
import Bridge from "./Bridge";

function MainPage() {

  return (
    <div>
      <Navigation />
      <div className="row">
        {Bridgedata.data.map(bridge => (
          <div className="col-sm-6" key={bridge.name}>
            <Bridge data={bridge} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default MainPage;
