import * as React from 'react';
import Slide from '@content/types/slide';
import NavButtons from '@components/NavButtons';
import { RouteComponentProps } from 'react-router';

type Props = Slide & RouteComponentProps;

class SlidePage extends React.Component<Props, any> {
  constructor(props: Props) {
    console.log(props);
    super(props);
  }
  get className() {
    return 'slide';
  }

  render() {
    const { title, subtitle, match, history, location } = this.props;

    return (
      <div className={this.className}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <NavButtons {...{match, history, location}} />
      </div>
    );
  }
}

export default SlidePage;
