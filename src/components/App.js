import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";

const accessKey = process.env.REACT_APP_YOUTUBE_KEY;

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: accessKey,
      },
    });
    // console.log(response);
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
