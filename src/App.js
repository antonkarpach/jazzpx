import GameField from "./components/gameField/gameField";
import {Logo} from "./components/icons/logo/logo";
import './index.css';
import {ScoreSparks} from "./components/icons/scoreSparks/scoreSparks";
import {Background} from "./components/rightPage/background";
import {MainSection} from "./components/mainSection/mainSection";
import {Footer} from "./components/footer/footer";

function App() {
  return (
    <div className="app">
     {/*<GameField/>*/}
      {/*<ScoreSparks score="25"/>*/}
      {/*<Logo/>*/}
      {/*<Background/>*/}
      <MainSection leftContent={<GameField/>} rightContent={<Background/>}/>
    </div>
  );
}

export default App;
