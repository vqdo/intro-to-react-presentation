import * as React from 'react';
import { BulletList, Slide } from '@content/types/slide';
import { RouteComponentProps } from 'react-router';
import Gist from 'react-gist';
import '@styles/SlidePage.scss';

type Props = Slide & RouteComponentProps;

class SlidePage extends React.Component<Props, any> {
  private className: string = '';

  constructor(props: Props) {
    super(props);
    this.className = `slide-page slide-${props.type || 'generic'}`;
  }

  public render() {
    const { title, subtitle, gistIds, bullets, content } = this.props;

    return (
      <div className={this.className}>
        <div className="slide-page-content">
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
          {content && <p dangerouslySetInnerHTML={{__html: content || ''}} />}
          {bullets && this.buildBulletList(bullets)}
          {gistIds && this.embedGists(gistIds)}
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
