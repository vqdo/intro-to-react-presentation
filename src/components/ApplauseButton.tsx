import * as React from 'react';
import PresentationStore from '@store/presentation-store';
import '@styles/ApplauseButton.scss';

interface Props {
  id: string;
  applauseCount: number;
}

class ApplauseButton extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  get className() {
    return 'applause-button';
  }

  public render() {
    const { applauseCount, id } = this.props;

    return (
      <div className={this.className}>
        <button onClick={this.onButtonClick}>👏</button>
        <span>{applauseCount}</span>
      </div>
    );
  }

  private onButtonClick() {
    PresentationStore.incrementApplauseCount(this.props.id);
  }
}

export default ApplauseButton;
