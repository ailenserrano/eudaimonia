import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      <img
        src="https://img.freepik.com/vector-gratis/ilustracion-concepto-error-404_114360-1811.jpg?t=st=1647982655~exp=1647983255~hmac=9c1bab72af5e1a375aa302d5154a5fa55223c804ad17cd5baae26b7772b4401e&w=900"
        alt="error 404"
        width={600}
        height={400}
      />
      <div>
        <Link to={`/`}>
          <button className="btn btn-primary">Volver a Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
