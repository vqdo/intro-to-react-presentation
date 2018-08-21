import * as React from 'react';

class Base extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  shouldComponentUpdate() {}

  componentDidUpdate () {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div />
    )
  }
}

export default Base;
