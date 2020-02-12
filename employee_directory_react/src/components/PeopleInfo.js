import React from "react";
import PeopleList from "../data/people.json";

function PeopleInfo(props) {
  console.log(props)

  const results = PeopleList.filter(people => people.name.first.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Employee List</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id.value}>
              <b>{result.name.first} {result.name.last} | </b> {result.location.state} | {result.email}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default PeopleInfo;

