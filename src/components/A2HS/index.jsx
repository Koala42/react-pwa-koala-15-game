import React from "react";
import { Button } from "../../elements";
import useAddToHomescreenPrompt from "./useAddToHomescreenPrompt.ts";

export default function A2HS() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const hide = () => setVisibleState(false);

  React.useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);

  // if (window.matchMedia("(display-mode: standalone)").matches) {
  //   hide();
  // }

  if (!isVisible) {
    return <div />;
  }

  return (
    <div className="buttonWrapper" onClick={hide}>
      <Button type="big" style={{ padding: "0 10px" }} onClick={promptToInstall}>
        Add to homescreen
      </Button>
    </div>
  );
}
