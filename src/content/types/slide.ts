type BulletList = string[];

export default interface Slide {
  title: string;
  subtitle?: string;
  content?: BulletList;
}
