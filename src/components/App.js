import React from "react";
import SearchBar from "./SearchBar";

const accessKey = process.env.REACT_APP_YOUTUBE_KEY;

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
