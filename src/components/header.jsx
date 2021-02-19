import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <img className="hero-image" src="images/hero-image.png" />
        <div>
            <ul className="menu-bar">
                <li><a href="#Blogs">Blogs</a></li>
                <li><a href="#YouTube">Videos</a></li>
                <li><a href="https://www.powerplatformdevelopersweekly.com/">Subscribe to weekly newsletter</a></li>
                <li><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=IwrCMdIujUa6q0Lt-ZgSi1zAstB7LDJArjOy-AmXSbxUNjJBRkJGUDZLVFFGMEVQNVFJTks5QTcyQy4u" target="_blank">Submit your content</a></li>
                <li><a href="https://github.com/Power-Maverick/ppdevweekly-trackinginfo/issues/new?labels=data-issue&template=data-issue-report.md" target="_blank">Report issue</a></li>
            </ul>
        </div>
      </header>
    )
  }
}