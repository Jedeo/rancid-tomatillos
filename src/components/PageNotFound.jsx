import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = ({ error }) => {
  const containerSytle = {
    display: "flex",
    marginTop: "30vh",
    flexDirection: "column",
    alignItems: "center",
    
  };

  const hStyle = {
    color: "white",
  };
  
  const button = {
    width: "auto",
    borderRadius: 12,
    padding: 10,
  };
  return (
    <div style={containerSytle}>
      <h1 style={hStyle}>Lost Your Way? </h1>
      <p style={hStyle}>
        Sorry, we can't find the page. You'll Find loads to explore on the home
        page
      </p>
      <Link to="/">
        <button style={button}> Return Home </button>
      </Link>
      {error.error.length > 0 && <h4 style={hStyle}> Erro Code: {error.error}</h4>}
    </div>
  );
};

export default PageNotFound;
