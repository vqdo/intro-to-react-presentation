import Slide from '@content/types/slide';
const ReactDiagramImg = require('@assets/img/react-diagram.png');

interface PresentationProps {
  title: string;
  slides: Slide[];
}

const Presentation: PresentationProps = {
  title: 'Intro to <strong>React</strong>',
  slides: [
    {
      title: 'Intro to React',
      type: 'title',
      subtitle: 'August 20, 2018',
    },
    {
      title: `What's the point of a front-end framework?`,
      bullets: [
        'To help developers build <strong>single page web applications</strong> (SAPs) faster',
        'To <em>solve common problems</em> the average web project will need to handle',
      ],
    },
    {
      title: 'What problems are solved by a modern front-end framework?',
      bullets: [
        'Rendering the UI quickly (performance)',
        'Handling data safely (security)',
        '<strong>Synchronizing application UI and state</strong> (correctness and "programmer friendliness")',
        `Scaling with increasingly complex applications`,
      ],
    },
    {
      title: 'What is React?',
      content: `A front-end Javascript framework for building user interfaces.
      Like Angular, the core building block is the <strong>component</strong>—a smaller UI view that
      manages its own internal logic.`,
    },
    {
      title: `React is (mostly) technology-agnostic.`,
      content: `At its core, React is a UI library. Its goal is to solve real-world problems.`,
      bullets: [
        `Writing React components is recognizably just writing Javascript; there's a minimal amount of "magic" syntax.`,
        `One of their core development tenets is <strong>pragmatism</strong>;
        a React app can be easily customized to project needs.`,
      ],
    },
    {
      title: 'BUT: React is also philosophically opinionated.',
      content: `What kind of qualities did the creators believe would lead to <strong>bug-free</strong>,
        <strong>easy-to-follow</strong>, and <strong>internally consistent</strong> code?</strong>`,
      bullets: [
        `It's component-based.`,
        `It's declarative.`,
        `It minimizes mutable <strong>state</strong> to what is absolutely necessary.`,
        `Its data flow is strict and predictable.`
      ],
    },
    {
      title: `React Components`,
      content: 'A component is a single, logically discrete piece of the UI.',
      bullets: [
        'It encapsulates the view layer (HTML markup) and the business logic (Javascript).',
        'When the component state changes, the entire component view is re-rendered.',
        `See: <a href="https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy"
          target="_blank">Thinking in React</a>`,
      ],
      img: ReactDiagramImg,
    },
    {
      title: 'React Components: State and Props',
      content: 'How do you model data in a React component?',
      bullets: [
        '<strong>Props</strong> are the intrinsic attributes of a component. They should NOT change.',
        `A component's props are defined by their parents.`,
        `<strong>State</strong> is the aggregate of all the <em>mutable</em> attributes of a component.`,
        `Why is State "bad"? Because state mutations can be hard to trace, and they're often a vector for bugs.`,
      ],
      img: ReactDiagramImg,
    },
    {
      title: 'Declarative vs. Imperative Programming',
      gistIds: ['48c82d17edf3eac215049905636051db', 'ed1f1a47369e353ce1a11364298b3024'],
    },
    {
      title: 'React Components: Lifecycle',
      content: 'tbd'
    },
    {
      title: `Building a stateless React component`,
      subtitle: `Medium's "Applause" button`,
      content: 'Also known as a "dumb" or "presentational" component.',
      type: 'title',
    },
  ],
};

export default Presentation;
