
import './assets/style/style.css'
// router
import {
  Route,
  Switch
} from 'react-router-dom'

import MainPage from './pages/MainPage'
import HistoryPage from './pages/HistoryPage'
import NotFound from './pages/NotFound'
import AboutSite from './pages/AboutSite'

function App() {
  return (
    <div className="App scrollX">
      <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/aboutSite" component={AboutSite} />
          <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
