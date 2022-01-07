import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as WinningCupIcon } from "images/winning-cup-icon.svg";

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-6xl mx-auto`;
const Card = tw.div`w-full flex flex-row items-center`;
const CardPreContent = styled.div`
  ${tw`flex flex-col self-center`}
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;
const CardContent = styled.div`
  ${tw`flex flex-row ml-4`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`flex mt-2 ml-2`}
  .link {
    ${tw`mr-8 last:mr-0 text-primary-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-4 h-4`}
    }
  }
`;

export default ({
  cards = [
    {
      name: "Adam Cuppy",
      rank: 1,
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardPreContent>
                <span className="name">#{card.rank}.</span>
              </CardPreContent>
              <CardContent>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.rank === 1 ? (
                    <a key={index} className="link" href="/#">
                      <WinningCupIcon className="icon" />
                    </a>
                  ) : (
                    <></>
                  )}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
