import React, { Component } from 'react'

const trackingdata = require('../trackingdata.json');

export default class TrackingInfo extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://use.fontawesome.com/73dcb1d28a.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    let blogs = trackingdata.outlines.find(d => d.name == "Power Platform");
    let info_blogs = new Array();

    let videos = trackingdata.outlines.find(d => d.name == "YouTube");
    let info_videos = new Array();

    blogs.outline.forEach(d => {
        let ran = Math.floor(Math.random() * (7 - 1)) + 1;

        if (d.twitterHandle) {
            info_blogs.push(<div className="card-container">
                <img className="round" src={d.image === "" ? "images/" + ran + ".jpg" : d.image} alt="user" />
                <h3>{d.title}</h3>
                <h6>{d.name}</h6>
                <div className="card-buttons">
                    <div className="buttons">
                        <button className="primary" onClick={() => window.open(d.htmlUrl, '_blank')}>
                            Visit
                        </button>
                        <button className="primary ghost" onClick={() => window.open("https://twitter.com/" + d.twitterHandle, '_blank')}>
                            Follow on Twitter
                        </button>
                    </div>
                </div>
            </div>);
        }
        else {
            info_blogs.push(<div className="card-container">
                <img className="round" src={d.image === "" ? "images/" + ran + ".jpg" : d.image} alt="user" />
                <h3>{d.title}</h3>
                <h6>{d.name}</h6>
                <div className="card-buttons">
                    <div className="buttons">
                        <button className="primary" onClick={() => window.open(d.htmlUrl, '_blank')}>
                            Visit
                        </button>
                    </div>
                </div>
            </div>);
        }
        
    });

    videos.outline.forEach(d => {
        let ran = Math.floor(Math.random() * (7 - 1)) + 1;

        if (d.twitterHandle) {
            info_videos.push(<div className="card-container subscribe">
                <img className="round" src={d.image === "" ? "images/" + ran + ".jpg" : d.image} alt="user" />
                <h3>{d.title}</h3>
                <h6>{d.name}</h6>
                <div className="card-buttons">
                    <div className="buttons">
                        <button className="primary" onClick={() => window.open(d.htmlUrl, '_blank')}>
                            Subscribe
                        </button>
                        <button className="primary ghost" onClick={() => window.open("https://twitter.com/" + d.twitterHandle, '_blank')}>
                            Follow on Twitter
                        </button>
                    </div>
                </div>
            </div>);
        }
        else {
            info_videos.push(<div className="card-container subscribe">
                <img className="round" src={d.image === "" ? "images/" + ran + ".jpg" : d.image} alt="user" />
                <h3>{d.title}</h3>
                <h6>{d.name}</h6>
                <div className="card-buttons">
                    <div className="buttons">
                        <button className="primary" onClick={() => window.open(d.htmlUrl, '_blank')}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>);
        }
    });

    return (
      <div className="container">
        <a className="section-header" name="Blogs">Blogs</a>
        {info_blogs}
        <a className="section-header" name="YouTube">YouTube</a>
        {info_videos}
      </div>
    )
  }
}