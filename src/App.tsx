import * as React from 'react';
import { Router, Route, Redirect, Switch, RouteComponentProps } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { TransitionGroup, CSSTransition, ReactCSSTransitionGroup } from 'react-transition-group';
import NavButtons from '@components/NavButtons';
import SlidePage from '@components/SlidePage';
import Presentation from '@content/presentation';
import '@styles/App.scss';

const history = createBrowserHistory();

const SlideRoute = (props: RouteComponentProps) => {
  const content = Presentation.slides[props.match.params.id];
  return (
    <SlidePage {...props} {...content} />
  );
};

const RouteOptions = (
  <Route
    render={({ location }) => {
      return (<TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={500}>
          <Switch key={location.key} location={location}>
            <Redirect exact={true} from="/" to="/0" />
            <Route path="/:id" component={SlideRoute} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>);
    }}
  />
);

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1 dangerouslySetInnerHTML={{__html: Presentation.title}} />
        </header>
        <div className="slides-container">
          <NavButtons history={history} />
          <Router history={history}>
            {RouteOptions}
          </Router>
        </div>
      </div>);
  }
}

export default App;
