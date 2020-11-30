import './styles/main.scss';
// import imageImport from './images/star-small.png';
// Create a class property without a constructor
class Word {
  text = 'Major concepts: '
};
const myWord = new Word();
// Create paragraph node
const p = document.createElement('p');
p.textContent = `${myWord.text} input/output, plugins, module & environment(dev/prod) ..`;

// Create heading node
const heading = document.createElement('h1');
heading.textContent = 'Webpack 5 study';

// Append SVG and heading nodes to the DOM
const app = document.querySelector('#root');
app.append(heading, p);
