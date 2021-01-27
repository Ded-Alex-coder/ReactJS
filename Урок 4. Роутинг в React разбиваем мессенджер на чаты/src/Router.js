import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import Layout from './components/Layout';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Layout} />
        <Route
          exact
          path="/chat/:chatId/"
          render={(obj) => <Layout chatId={Number(obj.match.params.chatId)} />}
        />
        <Route exact path="/chat/2/" render={() => <Layout chatId={2} />} />
        <Route exact path="/chat/3/" render={() => <Layout chatId={3} />} />
      </Switch>
    </Router>
  );
}
