import React, { Fragment } from "react";
import { KeyBoardManagar } from "../hoc";

import { Instruction, Header, Game, Details } from "../components";
import { Container, Wave, GameFactoryConsumer } from "../elements";

import Waves from "../assets/img/waves.gif";

const Home = ({ eventType }) => {
  return (
    <Container>
      <GameFactoryConsumer>
        {({ values, methods }) => {
          return (
            <Fragment>
              <Header />
              <br />
              <Game eventType={eventType} {...values} {...methods} />
              <br />
              <Instruction />
              <div>
                <Wave className="waves" src={Waves} alt="" />
              </div>
              <br />
              <Details
                name={"Shubham Singh"}
                githubURL={"https://github.com/imshubhamsingh"}
                projectURL={"https://github.com/imshubhamsingh/15-puzzle"}
                linkedinURL={"https://linkedin.com/in/imshubhamsingh97/"}
                twitterURL={"https://twitter.com/imshubhamsingh_"}
              />
            </Fragment>
          );
        }}
      </GameFactoryConsumer>
    </Container>
  );
};

export default KeyBoardManagar(Home);
