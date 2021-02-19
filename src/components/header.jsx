import React, { Component } from 'react'
import heroImgPath from '../images/hero-image.png';

export default class Header extends Component {
  render() {

    return (
      <header>
        <img className="hero-image" src={heroImgPath} />
        <div>
            <ul className="menu-bar">
                <li><a href="#Blogs">Blogs</a></li>
                <li><a href="#YouTube">Videos</a></li>
                <li><a href="https://www.powerplatformdevelopersweekly.com/" target="_blank">Subscribe to newsletter</a></li>
                <li><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=IwrCMdIujUa6q0Lt-ZgSi1zAstB7LDJArjOy-AmXSbxUNjJBRkJGUDZLVFFGMEVQNVFJTks5QTcyQy4u" target="_blank">Submit your content</a></li>
                <li><a href="https://github.com/Power-Maverick/ppdevweekly-trackinginfo/issues/new?labels=data-issue&template=data-issue-report.md" target="_blank">Report issue</a></li>
            </ul>
        </div>
      </header>
    )
  }
}