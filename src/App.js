import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className="shrift">
     <div className="header"><i>Вы зашли как Имя_аналитика</i></div>
     <div className="sidebar">
        <b>Проблемы</b>
        <p>Проблема 1</p><p>Проблема 2</p>
        <p>Проблема 3</p><p>Проблема 4</p>
        <p>Проблема 5</p><p>Проблема 6</p>
     </div>
     <div className="content">
        <h2>Формулировка проблемы</h2>
        <p>Формулировка проблемы.</p>
     </div>
    </body>
  );
}

// class Hello extends React.Component {
//     render() {
//         return <h1>Hello</h1>;
//     }
// }

export default App;
