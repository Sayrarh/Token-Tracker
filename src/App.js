import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Activities from './components/Activities';
import TokenTransfers from './components/TokenTransfers';
import WalletAssets from './components/WalletAssets';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

       

        <Route path="/token-transfers/:address/:token/" exact>
          <TokenTransfers />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
