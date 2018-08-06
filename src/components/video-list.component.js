import React, { Component } from 'react'
import  VideoListItem  from './video-list-item.component';

export class VideoList extends Component {
    
render() {
    const videos = this.props.videos.map(video=><VideoListItem onClick={()=>this.props.onClick(video)} video={video}/>)
    return (
      <div>
        {videos}
      </div>
    )
  }
}

export default VideoList
