import './App.css';
import { useState } from "react";

function App() {

  const [tabs1, setTabs1] = useState(1);
  const [tabs2, setTabs2] = useState(1);
  const [tabs3, setTabs3] = useState(1);
  return (
    <body className="shrift">
    <div className="">
      <h1 style={{ paddingBottom: "17px", borderBottom: "2px solid" }}><i>Аналитика проблем</i><small
        style={{ fontSize: "13px", marginLeft: "955px" }}><a href="URL">Выйти</a></small></h1>

    </div>
    <div className="sidebar">
      <table>
        <tr><b>Проблемы</b>
          <td>
            <button style={{ marginLeft: "18px" }}>Добавить</button>
          </td>
        </tr>
      </table>
      <div class="tabs">
        <label style={{ fontSize: "13px" }} className={tabs3 === 1 ? "active_label" : ""}
               onClick={() => setTabs3(1)}>Нерешенные</label>
        <label style={{ fontSize: "13px" }} className={tabs3 === 2 ? "active_label" : ""}
               onClick={() => setTabs3(2)}>Решенные</label>
        {tabs3 === 1 &&
        <div id="txt_1">
          <tbody>
          <tr>
            <td bgcolor="#f1f1f1"><textarea className="norm_text" style={{ height: 20, width: 100, resize: "none" }}
                                            disabled="true">Рейсы</textarea></td>
            <td>
              <button style={{ marginLeft: "3px" }}>&#9998;</button>
            </td>
            <td>
              <button style={{ marginLeft: "1px" }}>&#10008;</button>
            </td>
          </tr>
          </tbody>
        </div>
        }
        {tabs3 === 2 &&
        <div id="txt_2">
          <tbody>
          <tr>
            <td bgcolor="#f1f1f1"><textarea className="norm_text" style={{ height: 20, width: 100, resize: "none" }}
                                            disabled="true">Рейсы</textarea></td>
            <td>
              <button style={{ marginLeft: "3px" }}>&#9998;</button>
            </td>
            <td>
              <button style={{ marginLeft: "1px" }}>&#10008;</button>
            </td>
          </tr>
          </tbody>
        </div>
        }
      </div>
    </div>
    <div className="content">
      <tr>
        <td><h3>Формулировка проблемы Рейсы</h3></td>
        <td>
          <button style={{ marginLeft: "655px" }}>Сохранить изменения</button>
        </td>
        <td></td>
      </tr>
      <p></p>
      <textarea className="norm_text" style={{ height: 40, width: 1100, resize: "none" }} disabled="true">Авиакомпания «S7» получила возможность приобрести самолет Боинг 747. Встал вопрос об открытии нового чартерного рейса. Нужно определить наиболее выгодное направление.</textarea>
      <p></p>
      <div class="tabs">
        <label style={{ fontSize: "13px" }} className={tabs1 === 1 ? "active_label" : ""}
               onClick={() => setTabs1(1)}>Альтернативы</label>
        <label style={{ fontSize: "13px" }} className={tabs1 === 2 ? "active_label" : ""}
               onClick={() => setTabs1(2)}>Эксперты</label>
        <label style={{ fontSize: "13px" }} className={tabs1 === 3 ? "active_label" : ""}
               onClick={() => setTabs1(3)}>Результаты</label>
        {tabs1 === 1 &&
        <div id="txt_3">
          <button disabled="true">Добавить альтернативу</button>
          <table>
            <tr>
              <th>№</th>
              <th>Альтернатива</th>
            </tr>
            <tbody>
            <tr>
              <td>1.</td>
              <td><textarea className="norm_text" style={{ height: 15, resize: "none" }}
                            disabled="true">Сочи</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td><textarea className="norm_text" style={{ height: 15, resize: "none" }}
                            disabled="true">Пекин</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td><textarea className="norm_text" style={{ height: 15, resize: "none" }}
                            disabled="true">Сеул</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td><textarea className="norm_text" style={{ height: 15, resize: "none" }}
                            disabled="true">Владивосток</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td><textarea className="norm_text" style={{ height: 15, resize: "none" }}
                            disabled="true">Таль-Авив</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>6.</td>
              <td><textarea className="norm_text" style={{ height: 15, resize: "none" }}
                            disabled="true">Анталия</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>7.</td>
              <td><textarea className="norm_text" style={{ height: 15, resize: "none" }}
                            disabled="true">Симфеврополь</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        }
        {
          tabs1 === 2 &&
          <div id="txt_4">
            <div class="tabs">
              <label style={{ fontSize: "13px" }} className={tabs2 === 1 ? "active_label" : ""}
                     onClick={() => setTabs2(1)}>Назначенные</label>
              <label style={{ fontSize: "13px" }} className={tabs2 === 2 ? "active_label" : ""}
                     onClick={() => setTabs2(2)}>Все
                эксперты</label>
              <button style={{ marginLeft: "25px" }}>Добавить эксперта</button>
              <p></p>
              {tabs2 === 1 &&
              <div id="txt_6">
                <table border-top="1px">
                  <tbody>
                  <tr>
                    <td bgcolor="#f1f1f1">Эксперт 1</td>
                    <td>
                      <button className="norm_text" style={{ marginLeft: "65px", backgroundColor: "#CCFF99" }}
                              disabled="true">(100%)&#10004;</button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              }
              {tabs2 === 2 &&
              <>
                <table>
                  <tr>
                    <th>Имя</th>
                    <th>Должность</th>
                    <th>Стаж</th>
                    <th>Состояние оценивания</th>
                    <th>
                      <button style={{ marginLeft: "38px" }}>Выбрать всех</button>
                    </th>
                  </tr>
                  <tbody>
                  <tr>
                    <td><textarea className="norm_text">Эксперт 1</textarea></td>
                    <td><textarea className="norm_text">Преподаватель</textarea></td>
                    <td><textarea className="norm_text">1</textarea></td>
                    <td>Метод парных сравнений (50%)</td>
                    <td><input type="checkbox" style={{ marginLeft: "38px" }} disabled="true"></input></td>
                  </tr>
                  <tr>
                    <td><textarea className="norm_text">Эксперт 2</textarea></td>
                    <td><textarea className="norm_text">Преподаватель</textarea></td>
                    <td><textarea className="norm_text">2</textarea></td>
                    <td>Не назначен</td>
                    <td><input type="checkbox" style={{ marginLeft: "38px" }}></input></td>
                  </tr>

                  </tbody>
                </table>

                <div>
                  <td>
                    <button disabled="true">Разрешить оценивание проблемы</button>
                  </td>
                  <td>
                    <button style={{ marginLeft: "710px" }} disabled="true">Удалить эксперта</button>
                  </td>
                </div>
              </>
              }
            </div>
          </div>
        }
        {tabs1 === 3 &&
        <div id="txt_5">
          <b>Результат №1</b>
          <table text-align="left">
            <tr>
              <th>Ранг</th>
              <th>Вес</th>
              <th>Альтернатива</th>
            </tr>
            <tbody>
            <tr>
              <td>1.</td>
              <td>0.26</td>
              <td>Симфеврополь</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>0.19</td>
              <td>Анталия</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>0.166</td>
              <td>Сочи</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>0.166</td>
              <td>Пекин</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>0.09</td>
              <td>Сеул</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>0.09</td>
              <td>Таль-Авив</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>0.02</td>
              <td>Владивосток</td>
            </tr>
            </tbody>
          </table>
          <button  disabled="true">Проблема отмечена как решенная</button>
        </div>
        }
      </div>
    </div>
    </body>
  );
}

export default App;
