import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Layout} />
        <Route exact={true} path="/chat" component={Layout} />
        <Route
          exact
          path="/chat/:chatId/"
          render={(obj) => <Layout chatId={Number(obj.match.params.chatId)} />}
        />
        <Route>
          <div>No such page</div>
        </Route>
      </Switch>
    </Router>
  );
}
