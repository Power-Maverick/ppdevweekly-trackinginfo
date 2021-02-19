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
                <li><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=IwrCMdIujUa6q0Lt-ZgSi1zAstB7LDJArjOy-AmXSbxUNjJBRkJGUDZLVFFGMEVQNVFJTks5QTcyQy4u" target="_blank">Submit your Content</a></li>
                <li><a href="https://us19.list-manage.com/contact-form?u=f43360d8e29e94a4334888dcf&form_id=5363bbad591c68ce77c5b9ebb9698725" target="_blank">Report Issue</a></li>
            </ul>
        </div>
      </header>
    )
  }
}