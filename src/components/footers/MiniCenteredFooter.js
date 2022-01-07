import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/PPDevWeekly-Icon.svg";
import { ReactComponent as WebIcon } from "../../images/web-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-2 lg:py-3`;
const Row = tw.div`flex items-center justify-center flex-col`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-40`;
const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;
const SimpleLink = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 transition duration-300`;
const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;

export default () => {
  return (
    <Container id="a">
      <Content id="c">
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <LinksContainer>
            <Link href="https://www.powerplatformdevelopersweekly.com/" rel="noreferrer" target="_blank">
              Home
            </Link>
            <Link href="/#Blogs">Bloggers</Link>
            <Link href="/#Videos">YouTubers</Link>
            <Link
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=IwrCMdIujUa6q0Lt-ZgSi1zAstB7LDJArjOy-AmXSbxUNjJBRkJGUDZLVFFGMEVQNVFJTks5QTcyQy4u"
              rel="noreferrer"
              target="_blank"
            >
              Submit your content
            </Link>
            <Link
              href="https://github.com/Power-Maverick/ppdevweekly-trackinginfo/issues/new?labels=data-issue&template=data-issue-report.md"
              rel="noreferrer"
              target="_blank"
            >
              Report issue
            </Link>
            <Link href="https://www.powerplatformdevelopersweekly.com/" rel="noreferrer" target="_blank">
              Subscribe to newsletter
            </Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.powerplatformdevelopersweekly.com/">
              <WebIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/PPDevWeekly">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/power-platform-dev-weekly">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com/PowerMaverick">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            Developed and maintained by <SimpleLink href="https://powermaverick.dev/">Danish Naglekar</SimpleLink>
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
