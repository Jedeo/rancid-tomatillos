import React, { Component } from "react";
import './Form.css'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedMovie: "",
    };
  }
  handleChange = (event) => {
    const currentState = this.state;
    currentState[event.currentTarget.name] = event.currentTarget.value;

    this.setState(()=> {return {currentState} });

    this.props.handleSearch(this.state.searchedMovie);
  };

  handleClear = (e) => {
    e.preventDefault()
    const {fetchData} = this.props
    this.setState(()=>{return {searchedMovie: ""}})
    fetchData()
  }
  render() {
    const {filterMessage} = this.props
    const searchClear ={
      display: "flex"
    }
    return (
      <form className="form-Content">
        <div style={searchClear}>
        <input
          className="searchInput"
          name="searchedMovie"
          value={this.state.searchedMovie}
          onChange={this.handleChange}
          placeholder="Search Movie"
        />
        <button onClick={(e)=> this.handleClear(e)}>Clear</button>
        </div>
        {filterMessage.length !== 0 && <p>{filterMessage}</p>}
      </form>
    );
  }
}

export default Form;
