
import './assets/style/style.css'
// router
import {
  Route,
  Switch
} from 'react-router-dom'

import Main from './pages/Main'
import History from './pages/History'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/history" component={History} />
          <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
