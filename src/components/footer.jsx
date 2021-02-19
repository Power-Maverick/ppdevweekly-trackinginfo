import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
            <span>
                Developed and maintained with <i className="fa fa-heart" /> by <a target="_blank" href="https://powermaverick.dev">Danish Naglekar</a> <a target="_blank" href="https://www.twitter.com/DanzMaverick"><i className="fa fa-twitter"></i></a> <a target="_blank" className="text-dark" href="https://www.linkedin.com/in/danishnaglekar/"><i className="fa fa-linkedin"></i></a>
            </span>
        </p>
      </footer>
    )
  }
}