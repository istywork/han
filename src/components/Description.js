import React from "react";


function Description(props) {
  return (
    <div className="container">
      <div className="row">
        <img alt="no" src={`../images/${props.bridge}.jpg`} />
      </div>
      <div className="row">1. 길이</div>
      <div className="row">2. 완공 연도</div>
      <div className="row">3. 어느 지역에서 어느 지역을 연결하는가?</div>
      <div className="row">4. 다리의 종류</div>
      <div className="row">5. 타이틀</div>
    </div>
  );
}

export default Description;
