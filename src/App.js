import './App.css';

function App() {
    function open_(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
    }

      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
  return (
    <body className="shrift">
    <div className="liniya">
     <h1 style={{ paddingBottom: "17px", borderBottom: "2px solid"}}><i>Аналитика проблем</i><small style={{fontSize: "13px", marginLeft: "995px"}}><a href="URL">Выйти</a></small></h1>

     </div>
     <div className="sidebar">
     <table>
      <tr><b>Проблемы</b><td><button>+</button></td></tr>
      <tbody>
       <tr><td bgcolor="#f1f1f1">№1</td></tr>
      </tbody>
     </table>
     </div>
     <div className="content">
        <h2>Формулировка проблемы №1</h2>
        <textarea className="norm_text" style={{ height: 40, width: 700, resize: "none"}} disabled="true">Авиакомпания «S7» получила возможность приобрести самолет Боинг 747. Встал вопрос об открытии нового чартерного рейса. Нужно определить наиболее выгодное направление.</textarea>
        {/* <textarea resize={none} disabled={true}>Определить наиболее выгодное направление рейса.</textarea>*/}
        <p></p>
        <tr><h2>Альтернативы</h2><td><button style={{marginLeft: "62px"}} disabled="true">+</button></td></tr>
        <table>
        <tr>
         <th>№</th>
         <th>Альтернатива</th>
        </tr>
         <tbody>
          <tr><td>1.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none"}} disabled="true">Сочи</textarea></td><td><button style={{marginLeft: "38px"}} disabled="true">x</button></td></tr>
          <tr><td>2.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none"}} disabled="true">Пекин</textarea></td><td><button style={{marginLeft: "38px"}} disabled="true">x</button></td></tr>
          <tr><td>3.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none"}} disabled="true">Сеул</textarea></td><td><button style={{marginLeft: "38px"}} disabled="true">x</button></td></tr>
          <tr><td>4.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none"}} disabled="true">Владивосток</textarea></td><td><button style={{marginLeft: "38px"}} disabled="true">x</button></td></tr>
          <tr><td>5.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none"}} disabled="true">Таль-Авив</textarea></td><td><button style={{marginLeft: "38px"}} disabled="true">x</button></td></tr>
          <tr><td>6.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none"}} disabled="true">Анталия</textarea></td><td><button style={{marginLeft: "38px"}} disabled="true">x</button></td></tr>
          <tr><td>7.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none"}} disabled="true">Симфеврополь</textarea></td><td><button style={{marginLeft: "38px"}} disabled="true">x</button></td></tr>
         </tbody>
        </table>
        <tr><td><button style={{marginLeft: "10px"}}>Сохранить изменения</button></td><td><button style={{ marginLeft: "620px"}}>Удалить проблему</button></td></tr>
        <p></p>

        <h2>Результаты оценивания</h2>
        <b>Результат №1</b>
        <table text-align="left">
        <tr>
         <th>№</th>
         <th>Ранг</th>
         <th>Альтернатива</th>
        </tr>
         <tbody>
          <tr><td>7.</td><td>1.</td><td>Симфеврополь</td></tr>
          <tr><td>6.</td><td>2.</td><td>Анталия</td></tr>
          <tr><td>5.</td><td>2.</td><td>Владивосток</td></tr>
          <tr><td>1.</td><td>3.</td><td>Сочи</td></tr>
          <tr><td>2.</td><td>4.</td><td>Пекин</td></tr>
          <tr><td>3.</td><td>5.</td><td>Сеул</td></tr>
          <tr><td>5.</td><td>6.</td><td>Таль-Авив</td></tr>
         </tbody>
        </table>
     </div>
     <div className="sidebar2">
      <tr><b>Эксперты</b><td></td><td><button style={{marginLeft: "5px"}}>+</button></td></tr>
     <div class="tab">
       <button class="tablinks" style={{ width: "150px",  backgroundColor: "#f1f1ff" }}>Назначенные на данную проблему</button>
       <button class="tablinks" style={{}}>Все</button>
     </div>
     <div id="AllExperts" class="tabcontent">
       <table border-top="1px">
       <tr> <th></th><small><th><div style={{marginLeft: "60px"}}>Разрешено оценивать</div></th></small> </tr>
        <tbody>
         <tr><td bgcolor="#f1f1f1">Эксперт 1</td><td><button  className="norm_text" style={{marginLeft: "65px",  backgroundColor: "#CCFF99"}} disabled="true">(100%)&#10004;</button></td></tr>
        </tbody>
       </table>
     </div>
      </div>
      <div className="sidebar3">
      <div>
      <table border="1" width="100%">
        <caption>Информация об эксперте Эксперт 1</caption>
        <tr><th>Фамилия</th><td><textarea className="norm_text" style={{ height: 16, width: 120, resize: "none"}}>Эксперт</textarea></td></tr>
        <tr><th>Имя</th><td><textarea className="norm_text" style={{ height: 16, width: 120, resize: "none"}}>1</textarea></td></tr>
        <tr><th>Место работы</th><td><textarea className="norm_text" style={{ height: 16, width: 120, resize: "none"}}>НГТУ</textarea></td></tr>
        <tr><th>Должность</th><td><textarea className="norm_text" style={{ height: 16, width: 120, resize: "none"}}>Преподаватель</textarea></td></tr>
        <tr><th>Стаж</th><td><textarea className="norm_text" style={{ height: 16, width: 120, resize: "none"}}>1</textarea></td></tr>
      </table>
      <tr><td><button disabled="true">Убрать из назначенных на данную проблему</button><button disabled="true" style={{marginLeft: "97px"}}>Удалить эксперта</button></td></tr>
    </div>
      </div>
    </body>
  );
}

export default App;
