export type BulletList = string[];

type SlideType = 'title';

export interface Slide {
  title: string;
  type?: SlideType;
  subtitle?: string;
  content?: string;
  bullets?: BulletList;
  gistIds?: string[];
  img?: string;
}

export default Slide;
