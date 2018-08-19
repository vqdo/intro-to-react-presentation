import * as React from 'react';
import Slide from '@content/types/slide';
import Slides from '@content/slides';
import { RouteComponentProps } from 'react-router';

class NavButtons extends React.Component<RouteComponentProps, any> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  get currentPage() {
    return +this.props.match.params.id;
  }

  get className() {
    return 'nav-buttons';
  }

  nextPage() {
    console.log(this.props);
    const id = this.currentPage + 1;
    this.props.history.push(`/${id}`);
  }

  prevPage() {
    this.props.history.goBack();
  }

  render() {
    return (
      <nav className={this.className}>
        <button disabled={this.currentPage <= 0} onClick={this.prevPage}>
          Prev
        </button>
        <button disabled={this.currentPage >= Slides.length - 1} onClick={this.nextPage}>
          Next
        </button>
      </nav>
    );
  }
}

export default NavButtons;
