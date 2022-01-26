import LeaderGrid from "components/cards/LeaderColGrid.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading,
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const leaderData = require("../leaderboard.json");
const leaders = leaderData.leaders.sort(function (a, b) {
  return a.rank - b.rank;
});
const leaderBoardLastUpdate = leaderData.lastUpdated;

export default ({
  subheading = "Leaderboard",
  heading = <>For 2022</>,
  description = "Following list of users are currently leading the quiz for year 2022.",
  textOnLeft = true,
}) => {
  let cardsBlogs = [];
  leaders.forEach((d) => {
    cardsBlogs.push({
      name: d.leaderName,
      rank: d.rank,
    });
  });

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <LeaderGrid subheading="" description="" cards={cardsBlogs} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Description>
              Last Updated: <i>{leaderBoardLastUpdate}</i>
            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
