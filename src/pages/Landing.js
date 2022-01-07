import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import LeaderBoardPage from "pages/Leaderboard.js";
import { ContentWithVerticalPadding } from "components/misc/Layouts";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as WebIcon } from "images/web-icon.svg";
import { ReactComponent as YouTubeIcon } from "images/youtube-icon.svg";
import NoImage from "../images/broken-image.svg";

const trackingdata = require("../trackingdata.json");
const blogs = trackingdata.outlines.find((d) => d.name === "Power Platform");
const videos = trackingdata.outlines.find((d) => d.name === "YouTube");

const Row = tw.div`flex`;
const HeroRow = tw(
  Row,
)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-center mx-auto max-w-4xl text-primary-700`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default ({
  heading = "Power Platform Developers Weekly",
  description = "This newsletter send weekly email to the subscribes with curated list of articles and videos to update developers with latest and upcoming features in #PowerPlatform. This website showcases the content that is tracked by the editors of this newsletter. If you are a content creator then submit the request from the menu. You can follow the content creators on Twitter or subscribe to their feed directly. Do not forget to subscibe to the newsletter that will keep you updated with all the latest news in #PowerPlatform community.",
}) => {
  let cardsBlogs = [];
  blogs.outline.forEach((d) => {
    cardsBlogs.push({
      imageSrc: d.image === "" ? NoImage : d.image,
      position: d.name,
      name: d.title,
      links: [
        {
          url: d.htmlUrl,
          icon: WebIcon,
        },
        {
          url: d.twitterHandle,
          icon: TwitterIcon,
        },
      ],
    });
  });

  let cardsVideos = [];
  videos.outline.forEach((d) => {
    cardsVideos.push({
      imageSrc: d.image === "" ? NoImage : d.image,
      position: d.name,
      name: d.title,
      links: [
        {
          url: d.htmlUrl,
          icon: YouTubeIcon,
        },
        {
          url: d.twitterHandle,
          icon: TwitterIcon,
        },
      ],
    });
  });

  return (
    <AnimationRevealPage>
      <Header />
      <HeroRow>
        <SectionHeading>{heading}</SectionHeading>
        <SectionDescription>{description}</SectionDescription>
      </HeroRow>
      <SectionContainer id="Blogs">
        {/* <SectionHeading>Blogs</SectionHeading>
        <SectionDescription>This section shows list of all bloggers that are tracked by us.</SectionDescription> */}
        <TeamCardGrid subheading={<Subheading>Bloggers</Subheading>} description="" cards={cardsBlogs} />
      </SectionContainer>
      <SectionContainer id="Videos">
        {/* <SectionHeading>Videos</SectionHeading>
        <SectionDescription>This section shows list of all vloggers that are tracked by us.</SectionDescription> */}
        <TeamCardGrid subheading={<Subheading>YouTubers</Subheading>} description="" cards={cardsVideos} />
      </SectionContainer>
      <SectionContainer id="Leaderboard">
        <LeaderBoardPage />
      </SectionContainer>
      <Footer />
    </AnimationRevealPage>
  );
};
