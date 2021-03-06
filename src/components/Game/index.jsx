import React, { Component } from "react";
import { GameScore, Button, PlayPauseContainer, Modal, ModalContainer } from "../../elements";
import Score from "../Score";
import Grid from "../Grid";

import { gameState } from "../../utils";
import { A2HS } from "..";
export default class Game extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.eventType !== this.props.eventType) {
      // eslint-disable-next-line no-unused-vars
      const [_, move] = this.props.eventType || [null, null];
      const [row, col, location] = this.props.gettingEmptyBoxLocation();
      if (this.props.gameState === gameState.GAME_IDLE || this.props.gameState === gameState.GAME_STARTED) {
        this.props.moveCell(location, row, col, move);
      }
    }
  }

  state = {
    deferredPrompt: {}
  };

  render() {
    return (
      <div>
        <GameScore>
          <A2HS></A2HS>
          <Score moves={this.props.moves} seconds={this.props.seconds} />
        </GameScore>
        <Grid />
        <PlayPauseContainer>
          <div className="playPauseContainer">
            <Button onClick={this.props.pauseGame} disabled={this.props.gameState === gameState.GAME_IDLE}>
              {this.props.gameState === gameState.GAME_PAUSED ? "Play" : "Pause"}
            </Button>
            <Button onClick={this.props.resetGame}>New game</Button>
          </div>
        </PlayPauseContainer>
        <Modal on={this.props.gameState === gameState.GAME_OVER}>
          <ModalContainer>
            <div className="text-1">Excellent!</div>
            <div>
              It took you <b>{this.props.moves} moves</b>
            </div>
            <div>
              <Button type="big" textColor="white" onClick={this.props.resetGame}>
                Play Again
              </Button>
            </div>
          </ModalContainer>
        </Modal>
      </div>
    );
  }
}
