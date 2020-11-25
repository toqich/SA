import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className="shrift">
     <div className="header"><i>Вы зашли как Имя_аналитика</i></div>
     <div className="sidebar">
     <table>
      <tr><b>Проблемы</b><td><button>+</button></td></tr>
      <tbody>
       <tr><td bgcolor="#CCCCFF">Рейсы</td><td><button>x</button></td></tr>
       <tr><td>Проблема 2</td><td><button>x</button></td></tr>
       <tr><td>Проблема 3</td><td><button>x</button></td></tr>
       <tr><td>Проблема 4</td><td><button>x</button></td></tr>
       <tr><td>Проблема 5</td><td><button>x</button></td></tr>
      </tbody>
     </table>
     </div>
     <div className="content">
        <h2>Формулировка проблемы Рейсы</h2>
        <p>Определить наиболее выгодное направление рейса.</p>
        <tr><h2>Альтернативы</h2><td><button style={{marginRight: "10px"}}>+</button></td></tr>
        <table>
         <tbody>
          <tr><td>1.</td><td>Сочи</td><td><button>x</button></td></tr>
          <tr><td>2.</td><td>Пекин</td><td><button>x</button></td></tr>
          <tr><td>3.</td><td>Сеул</td><td><button>x</button></td></tr>
          <tr><td>4.</td><td>Владивосток</td><td><button>x</button></td></tr>
          <tr><td>5.</td><td>Таль-Авив</td><td><button>x</button></td></tr>
          <tr><td>6.</td><td>Анталия</td><td><button>x</button></td></tr>
          <tr><td>7.</td><td>Симфеврополь</td><td><button>x</button></td></tr>
         </tbody>
        </table>

        <h2>Результаты оценивания</h2>
        <table>
         <tbody>
          <tr><td>1.</td><td>Сочи</td></tr>
          <tr><td>2.</td><td>Пекин</td></tr>
          <tr><td>3.</td><td>Сеул</td></tr>
          <tr><td>4.</td><td>Владивосток</td></tr>
          <tr><td>5.</td><td>Таль-Авив</td></tr>
          <tr><td>6.</td><td>Анталия</td></tr>
          <tr><td>7.</td><td>Симфеврополь</td></tr>
         </tbody>
        </table>
     </div>
     <div className="sidebar2">
       <table border-top="1px">
        <tr><b>Все эксперты</b><td><button>+</button></td></tr>
        <tbody>
         <tr><td bgcolor="#CCCCFF">Иванов Иван</td></tr>
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
