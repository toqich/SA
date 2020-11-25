import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className="shrift">
     <div className="header"><i>Вы зашли как Имя_аналитика</i></div>
     <div className="sidebar">
      <b>Проблемы</b>
     <table>
      <tbody>
       <tr><td>Проблема 1</td></tr>
       <tr><td>Проблема 2</td></tr>
       <tr><td>Проблема 3</td></tr>
       <tr><td>Проблема 4</td></tr>
       <tr><td>Проблема 5</td></tr>
      </tbody>
     </table>
     </div>
     <div className="content">
        <h2>Формулировка проблемы</h2>
        <p>Определить наиболее выгодное направление рейса.</p>
     </div>
     <div className="sidebar2">
       <table border-top="1px">
        <b>Эксперты</b>
        <tbody>
         <tr><td>Иванов Иван</td></tr>
         <tr><td>Эксперт 2</td></tr>
         <tr><td>Эксперт 3</td></tr>
         <tr><td>Эксперт 4</td></tr>
         <tr><td>Эксперт 5</td></tr>
        </tbody>
       </table>
      </div>
      <div className="sidebar3">
      <div>
      <table border="1" width="240px">
        <caption>Информация об эксперте Иванов Иван</caption>
        <tr><th>Фамилия</th><td>Иванов</td></tr>
        <tr><th>Имя</th><td>Иван</td></tr>
        <tr><th>Место работы</th><td>НГТУ</td></tr>
        <tr><th>Должность</th><td>Преподаватель</td></tr>
        <tr><th>Стаж</th><td>1</td></tr>
      </table>
    </div>
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
