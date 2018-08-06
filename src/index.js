import React, { Component } from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from "./components/search-bar.component";
import { VideoDetail } from "./components/video-detail.component";
import { VideoList } from "./components/video-list.component";

import YTSearch from 'youtube-api-search'

const API_KEY = "AIzaSyCG5iDJo7hJUPCABl2qVgFCWDclYAj0GMQ"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo:""
    }
  }
  onInputChange(e) {
    YTSearch({ key: API_KEY, term: e.target.value },(data) =>  {
      this.setState({
        videos:data
      })
    })
  }
  selectVideo(video){
    this.setState({
      selectedVideo:video
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <SearchBar onChange={(e) => this.onInputChange(e)} />
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-4">
            <VideoList videos={this.state.videos} onClick={video=>this.selectVideo(video)}/>
          </div>
        </div>
      </div>
    )
  }

}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
