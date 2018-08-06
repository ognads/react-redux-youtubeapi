import React, { Component } from 'react'

export class VideoListItem extends Component {

    render() {
        const video = this.props.video
        return (
            <div className="row" onClick={this.props.onClick}>
                <div className="col-md-12">
                <img src={video.snippet.thumbnails.medium.url}/>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {video.snippet.title}
                    </div>
                </div>

            </div>
        )
    }
}

export default VideoListItem
