import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
          <input className="form-control" placeholder="search for videos..." onChange={(event)=>this.props.onChange(event)}/>
      </div>
    )
  }
}

