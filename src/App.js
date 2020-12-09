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
        <h1 style={{ paddingBottom: "17px", borderBottom: "2px solid" }}><i>Аналитика проблем</i><small style={{ fontSize: "13px", marginLeft: "995px" }}><a href="URL">Выйти</a></small></h1>

      </div>
      <div className="sidebar">
        <table>
          <tr><b>Проблемы</b><td><button style={{ marginLeft: "18px"}}>Добавить</button></td></tr>
        </table>
          <div class="tabs">
            <input type="radio" name="inset" value="" id="tab_1" checked></input>
            <label style={{ fontSize: "13px" }} for="tab_1">Нерешенные</label>
            <input type="radio" name="inset" value="" id="tab_2"></input>
            <label style={{ fontSize: "13px"}} for="tab_2">Решенные</label>

            <div id="txt_1">
              <tbody>
                <tr><td bgcolor="#f1f1f1"><textarea className="norm_text" style={{ height: 20, width: 100, resize: "none" }} disabled="true">Рейсы</textarea></td><td><button style={{ marginLeft: "3px" }}>&#9998;</button></td><td><button style={{ marginLeft: "1px" }}>&#10008;</button></td></tr>
              </tbody>
            </div>
            <div id="txt_2">
              <tbody>
                <tr><td bgcolor="#f1f1f1">Рейсы</td></tr>
              </tbody>
            </div>

          </div>
      </div>
      <div className="content">
      <tr><td><h3>Формулировка проблемы Рейсы</h3></td><td><button style={{ marginLeft: "655px" }}>Сохранить изменения</button></td><td></td></tr>
      <p></p>
        <textarea className="norm_text" style={{ height: 40, width: 1100, resize: "none" }} disabled="true">Авиакомпания «S7» получила возможность приобрести самолет Боинг 747. Встал вопрос об открытии нового чартерного рейса. Нужно определить наиболее выгодное направление.</textarea>
        <p></p>
        <div class="tabs">
          <input type="radio" name="inset" value="" id="tab_3" checked></input>
          <label style={{ fontSize: "13px"}} for="tab_3">Альтернативы</label>
          <input type="radio" name="inset" value="" id="tab_4"></input>
          <label style={{ fontSize: "13px" }} for="tab_4">Эксперты</label>
          <input type="radio" name="inset" value="" id="tab_5"></input>
          <label style={{ fontSize: "13px"}} for="tab_5">Результаты</label>

          <div id="txt_3">
          <button disabled="true">Добавить альтернативу</button>
          <table>
            <tr>
              <th>№</th>
              <th>Альтернатива</th>
            </tr>
            <tbody>
              <tr><td>1.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none" }} disabled="true">Сочи</textarea></td><td><button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button></td></tr>
              <tr><td>2.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none" }} disabled="true">Пекин</textarea></td><td><button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button></td></tr>
              <tr><td>3.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none" }} disabled="true">Сеул</textarea></td><td><button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button></td></tr>
              <tr><td>4.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none" }} disabled="true">Владивосток</textarea></td><td><button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button></td></tr>
              <tr><td>5.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none" }} disabled="true">Таль-Авив</textarea></td><td><button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button></td></tr>
              <tr><td>6.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none" }} disabled="true">Анталия</textarea></td><td><button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button></td></tr>
              <tr><td>7.</td><td><textarea className="norm_text" style={{ height: 15, resize: "none" }} disabled="true">Симфеврополь</textarea></td><td><button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button></td></tr>
            </tbody>
          </table>
          </div>
          <div id="txt_4">
            <div class="tabs">
              <input type="radio" name="inset" value="" id="tab_6" checked></input>
              <label style={{ fontSize: "13px"}} for="tab_6">Назначенные</label>
              <input type="radio" name="inset" value="" id="tab_7"></input>
              <label style={{ fontSize: "13px", color: "#000000", background: "#FFFFFF"}} for="tab_7">Все эксперты</label>
              <button style={{ marginLeft: "25px"}}>Добавить эксперта</button><p></p>
              <div id="txt_6">
                <table border-top="1px">
                  <tbody>
                    <tr><td bgcolor="#f1f1f1">Эксперт 1</td><td><button className="norm_text" style={{ marginLeft: "65px", backgroundColor: "#CCFF99" }} disabled="true">(100%)&#10004;</button></td></tr>
                  </tbody>
                </table>
              </div>
              <table>
                <tr>
                  <th>Имя</th>
                  <th>Должность</th>
                  <th>Стаж</th>
                  <th>Состояние оценивания</th>
                  <th><button style={{ marginLeft: "38px"}}>Выбрать всех</button></th>
                </tr>
                <tbody>
                  <tr><td><textarea className="norm_text">Эксперт 1</textarea></td><td><textarea className="norm_text">Преподаватель</textarea></td><td><textarea className="norm_text">1</textarea></td><td>Метод парных сравнений (50%)</td><td><input type="checkbox" style={{ marginLeft: "38px" }} disabled="true"></input></td></tr>
                  <tr><td><textarea className="norm_text">Эксперт 2</textarea></td><td><textarea className="norm_text">Преподаватель</textarea></td><td><textarea className="norm_text">2</textarea></td><td>Не назначен</td><td><input type="checkbox" style={{ marginLeft: "38px" }} ></input></td></tr>

                </tbody>
              </table>

              <tr><td><button disabled="true">Разрешить оценивание проблемы</button></td><td><button style={{ marginLeft: "710px" }} disabled="true">Удалить эксперта</button></td></tr>
            </div>
          </div>
          <div id="txt_5">
            <b>Результат №1</b>
            <table text-align="left">
              <tr>
                <th>Ранг</th>
                <th>Вес</th>
                <th>Альтернатива</th>
              </tr>
              <tbody>
                <tr><td>1.</td><td>0.26</td><td>Симфеврополь</td></tr>
                <tr><td>2.</td><td>0.19</td><td>Анталия</td></tr>
                <tr><td>3.</td><td>0.166</td><td>Сочи</td></tr>
                <tr><td>3.</td><td>0.166</td><td>Пекин</td></tr>
                <tr><td>4.</td><td>0.09</td><td>Сеул</td></tr>
                <tr><td>4.</td><td>0.09</td><td>Таль-Авив</td></tr>
                <tr><td>5.</td><td>0.02</td><td>Владивосток</td></tr>
              </tbody>
            </table>
          </div>
          </div>
      </div>
    </body>
  );
}

export default App;
