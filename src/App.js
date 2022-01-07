import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "pages/Landing.js";
import LeaderBoardPage from "pages/LeaderBoard.js";

// export default LandingPage;

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Router>
      <Switch>
        <Route path="/Leaderboard">
          <LeaderBoardPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
