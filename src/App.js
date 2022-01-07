import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "pages/Landing.js";

// export default LandingPage;

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
}
