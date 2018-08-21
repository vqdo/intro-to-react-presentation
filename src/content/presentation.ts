// 👏

import Slide from '@content/types/slide';
const ReactDiagramImg = require('@assets/img/react-diagram.png');
const ApplauseWidgetDiagram = require('@assets/img/applause-widget.png');

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
        `Avoid redundant state, because they introduce multiple <strong>sources of truth</strong>.
          Example: Form elements that aren't bound to internal app state.`,
      ],
      img: ReactDiagramImg,
    },
    {
      title: 'Detour: Declarative vs. Imperative Programming',
      bullets: [
        `<strong>Declarative</strong> code describes <em>what</em> you want,
          rather than <em>how</em> you want it. (Example: SQL, D3.js)`,
        `Related: <strong>Functional programming</strong> builds a result by composing
          together pure functions. (Example: RxJS, many ES6 built-ins)`,
        'Both have taken over JS-land, <em>particularly</em> in the React community.',
      ],
    },
    {
      title: 'An example: Lunch Grouper',
      bullets: [
        'Each computational step is a <strong>pure function</strong>—it takes an input and returns an output.',
        'There are <strong>no side effects</strong> at any stage.',
      ],
      gistIds: ['a1e5b36a1f45b8039938476beb3ffb86'],
    },
    {
      title: 'JSX: The declarative markup language for your dynamic JS apps.',
      content: `You don't <em>have</em> to use JSX. But in practice, everyone does.`,
      bullets: [
        `It's a templating language with an emphasis on Javascript.`,
        `It's embedded in the JS component itself.`,
        `Difference from Angular templates: More powerful and flexible. Angular templates are scoped.`,
      ],
    },
    {
      title: 'React Components: Lifecycle',
      content: 'Components have a view lifecycle.',
      img: ReactDiagramImg,
    },
    {
      title: `Building a stateless React component`,
      subtitle: `Medium's "Applause" button`,
      img: ApplauseWidgetDiagram,
      type: 'title',
    },
  ],
};

export default Presentation;
