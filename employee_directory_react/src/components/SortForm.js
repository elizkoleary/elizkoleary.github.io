import React from "react";

function SortForm(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.searchtype} Sort</h2>
      </div>
      <div className="card-body">
        <br></br>
        <h4>Sort Alphabetically by Last Name</h4>
        <br></br>
        <br></br>
      </div>
      <form>
      <button className="btn btn-primary" onClick={() => props.sort('lastName')}>
            Last Name
      </button>
      </form>
      <br></br>
      <br></br>

    </div>

  );
}

export default SortForm;
