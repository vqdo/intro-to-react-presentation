import * as React from 'react';
import Slide from '@content/types/slide';
import Presentation from '@content/presentation';
import { RouteComponentProps } from 'react-router';
import '@styles/NavButtons.scss';

const Slides = Presentation.slides;

interface NavButtonsState {
  currentPage: number;
}

class NavButtons extends React.Component<RouteComponentProps, NavButtonsState> {
  private unlisten: any;

  constructor(props: RouteComponentProps) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.state = {
      currentPage: this.getPageIdFromPath(props.history.location.pathname),
    };
  }

  get className() {
    return 'nav-buttons';
  }

  public componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({
        currentPage: this.getPageIdFromPath(location.pathname)
      });
    });
  }

  public componentWillUnmount() {
    this.unlisten();
  }

  public render() {
    const { currentPage } = this.state;
    return (
      <nav className={this.className}>
        <button disabled={currentPage <= 0} onClick={this.prevPage}>
          Prev
        </button>
        <button disabled={currentPage >= Slides.length - 1} onClick={this.nextPage}>
          Next
        </button>
      </nav>
    );
  }

  private nextPage() {
    const id = this.state.currentPage + 1;
    this.props.history.push(`/${id}`);
  }

  private prevPage() {
    const id = this.state.currentPage - 1;
    this.props.history.push(`/${id}`);
  }

  private getPageIdFromPath(path: string) {
    return Number((path.match(/\/(\d+)/) || [])[1] || 0);
  }
}

export default NavButtons;
