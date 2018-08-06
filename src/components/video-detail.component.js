import React, { Component } from 'react'

export class VideoDetail extends Component {
    render() {
        const video = this.props.video;
        let id = "";
        if (video !== "") {
            id = video.id.videoId
            return (
                <div>
                    <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + id} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>)
        } else {
            return (
                <div>Please search and select a video to play...</div>
            )
        }
    }
}

export default VideoDetail
