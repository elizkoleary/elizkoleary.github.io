import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import PeopleInfo from "./PeopleInfo";
import PeopleList from "../data/people.json";
import SortForm from "./SortForm";

class PeopleContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchPeople();
  }

  searchPeople = () => {
    const searchQuery = this.state.search.trim();
    const searchResults = PeopleList.filter((people) => people.name === searchQuery);
    this.setState({ 'result': searchResults });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchPeople();
  };

  handleFormSort = event => {
    event.preventDefault();
    var nameArray = [PeopleList[0].name.last, 
    PeopleList[1].name.last,
    PeopleList[2].name.last,
    PeopleList[3].name.last,
    PeopleList[4].name.last,
    PeopleList[5].name.last,
    PeopleList[6].name.last,
    PeopleList[7].name.last,
    PeopleList[8].name.last,
    PeopleList[9].name.last]

    nameArray.sort()
  console.log(nameArray)
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-1" />
          <Col size="md-5">
            <SearchForm
              searchtype="People"
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-5">
            <SortForm
              searchtype="People"
              value={this.state.search}
              handleFormSort={this.handleFormSort}
            />
          </Col>

          <Col size="md-1" />    
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <PeopleInfo search={this.state.search} />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default PeopleContainer;
