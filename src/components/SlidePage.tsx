import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Gist from 'react-gist';

import { BulletList, Slide } from '@content/types/slide';
import PresentationStore from '@store/presentation-store';
import ApplauseButton from '@components/ApplauseButton';

import '@styles/SlidePage.scss';

type Props = Slide & RouteComponentProps & {
  id: string;
};

interface State {
  applauseCount: number;
}

class SlidePage extends React.Component<Props, State> {
  private className: string = '';
  private unsubscribe: Function;

  constructor(props: Props) {
    super(props);
    this.className = `slide-page slide-${props.type || 'generic'}`;
    this.state = {
      applauseCount: PresentationStore.getApplauseCount(props.id),
    };
  }

  public componentDidMount() {
    this.unsubscribe = PresentationStore.subscribe(this.props.id, (count) => {
      console.log(this.props.id, count);
      this.setState({
        applauseCount: count,
      });
    });
  }

  public componentWillUnmount() {
    this.unsubscribe();
  }

  public render() {
    const { id, title, img, subtitle, gistIds, bullets, content } = this.props;
    const { applauseCount } = this.state;

    return (
      <div className={this.className}>
        <div className="slide-page-content">
          <h1>{title}</h1>
          <ApplauseButton id={id} applauseCount={applauseCount} />
          {subtitle && <h2>{subtitle}</h2>}
          {content && <p dangerouslySetInnerHTML={{__html: content || ''}} />}
          {bullets && this.buildBulletList(bullets)}
          {gistIds && this.embedGists(gistIds)}
          {img && (
            <div className="image-frame">
              <img src={img} />
            </div>
          )}
        </div>
      </div>
    );
  }

  private buildBulletList(bullets: BulletList) {
    return (
      <ul>
        {bullets.map((bullet: string) => (
          <li dangerouslySetInnerHTML={{__html: bullet}} />
        ))}
      </ul>
    );
  }

  private embedGists(gistIds: string[]) {
    return (
      <div className="gist-container">
        {gistIds.map((gistId: string) => (
          <Gist id={gistId} />
        ))}
      </div>
    );
  }
}

export default SlidePage;
