import * as React from 'react';
import { Router, Route, Redirect, Switch, RouteComponentProps } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { TransitionGroup, CSSTransition, CSSTransitionGroup } from 'react-transition-group';
import SlidePage from '@components/SlidePage';
import Slides from '@content/slides';
import '@styles/app.scss';

const history = createBrowserHistory();

const SlideRoute = (props: RouteComponentProps) => {
  const content = Slides[props.match.params.id];
  return (
    <SlidePage {...props} {...content} />
  );
};

const RouteOptions = (
  <Route
    render={({ location }) => (
      <Switch key={location.key} location={location}>
        <Redirect exact={true} from="/" to="/0" />
        <Route path="/:id" component={SlideRoute} />
      </Switch>
    )}
  />
);

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router history={history}>
          {RouteOptions}
        </Router>
      </div>);
  }
}

export default App;
/*<CSSTransitionGroup
  transitionName="fade"
  transitionEnterTimeout={300}
  transitionLeaveTimeout={500}
>
              </CSSTransitionGroup>*/
