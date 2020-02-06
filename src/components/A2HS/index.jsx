import React, { Component } from "react";
import { Button } from "../../elements";

export class A2HS extends Component {
  componentDidMount() {
    window.addEventListener("beforeinstallprompt", event => {
      // Stash the event so it can be triggered later.
      this.setState({ deferredPrompt: event });
      // Update UI notify the user they can add to home screen
    });
  }
  handleClick = () => {
    window.addEventListener("beforeinstallprompt", event => {
      this.state.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.state.deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        this.setState({ deferredPrompt: null });
      });
    });
  };
  render() {
    return (
      <div className="buttonWrapper">
        <Button className="A2HS" onClick={this.handleClick}>
          Add to Home Screen
        </Button>
      </div>
    );
  }
}

export default A2HS;
