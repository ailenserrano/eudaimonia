import React from "react";

const Greeting = (props) => {
  let { title, subtitle } = props;

  return (
    <div className="card w-75">
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
    </div>
  );
};

export default Greeting;
