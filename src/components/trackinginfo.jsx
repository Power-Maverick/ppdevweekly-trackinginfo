import React, { Component } from 'react'
import Img1Path from '../images/1.jpg';
import Img2Path from '../images/2.jpg';
import Img3Path from '../images/3.jpg';
import Img4Path from '../images/4.jpg';
import Img5Path from '../images/5.jpg';
import Img6Path from '../images/6.jpg';

const trackingdata = require('../trackingdata.json');

export default class TrackingInfo extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://use.fontawesome.com/73dcb1d28a.js";
    script.async = true;
    document.body.appendChild(script);
  }

  randomizeImageSelection() {
      let ran = Math.floor(Math.random() * (7 - 1)) + 1;
      switch (ran) {
        case 1:
            return Img1Path;
        case 2:
            return Img2Path;
        case 3:
            return Img3Path;
        case 4:
            return Img4Path;
        case 5:
            return Img5Path;
        case 6:
            return Img6Path;
      }
  }

  render() {
    let blogs = trackingdata.outlines.find(d => d.name == "Power Platform");
    let info_blogs = new Array();

    let videos = trackingdata.outlines.find(d => d.name == "YouTube");
    let info_videos = new Array();

    blogs.outline.forEach(d => {
        let randImg = this.randomizeImageSelection();

        if (d.twitterHandle) {
            info_blogs.push(<div className="card-container">
                <img className="round" src={d.image === "" ? randImg : d.image} alt="user" />
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
                <img className="round" src={d.image === "" ? randImg : d.image} alt="user" />
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
        let randImg = this.randomizeImageSelection();

        if (d.twitterHandle) {
            info_videos.push(<div className="card-container subscribe">
                <img className="round" src={d.image === "" ? randImg : d.image} alt="user" />
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
                <img className="round" src={d.image === "" ? randImg : d.image} alt="user" />
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
        <div className="text">
            <b>Power Platform Developers Weekly</b> is a newsletter that send weekly email to the subscribes with curated list of articles and videos to update developers with latest and upcoming features in #PowerPlatform.
            This website showcases the content that is tracked by the editors of this newsletter. If you are a content creator then submit the request from the menu.
            You can follow the content creators on Twitter or subscribe to their feed directly.
            Do not forget to subscibe to the newsletter that will keep you updated with all the latest news in #PowerPlatform community.
        </div>
        <a className="section-header" name="Blogs">Blogs</a>
        {info_blogs}
        <a className="section-header" name="YouTube">YouTube</a>
        {info_videos}
        <div className="text">
            <b>NOTE</b>
            <blockquote>
                This list is only for the content that is tracked automatically. We also track some content manually because there is not automatic feed available or few other reasons.
            </blockquote>
            <br /><i>This website is still in beta-mode.</i>
        </div>
      </div>
    )
  }
}