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
                                            disabled="true">Транспорт</textarea></td>
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
        <td><h3>Формулировка проблемы Транспорт</h3></td>
        <td>
          <button style={{ marginLeft: "655px" }}>Сохранить изменения</button>
        </td>
        <td></td>
      </tr>
      <p></p>
      <textarea className="norm_text" style={{ height: 40, width: 1100, resize: "none" }} disabled="true">Решение транспортной проблемы в густозаселенном новом районе города.</textarea>
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
              <td><textarea className="norm_text" disabled="true">Строительство новой ветки метро</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }} disabled="true">&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td><textarea className="norm_text" disabled="true">Расширение парка муниципальных автобусов</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }}  disabled="true">&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td><textarea className="norm_text"  disabled="true">Расширение транспортной сети</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }}  disabled="true">&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td><textarea className="norm_text" disabled="true">Ввод скоростного трамвая</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }}  disabled="true">&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td><textarea className="norm_text" disabled="true">Оптимизация структуры движения городских маршрутов</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }}  disabled="true">&#10008;</button>
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
                      <button className="norm_text_expert" style={{ marginLeft: "65px", backgroundColor: "#CCFF99" }}
                              disabled="true">(100%)&#10004;</button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              }
              {tabs2 === 2 &&
              <>
                <table  border="1">
                  <tr>
                    <th>Имя</th>
                    <th>Должность</th>
                    <th>Стаж</th>
                    <th>Оценка компетентности</th>
                    <th>Состояние оценивания</th>
                    <th>
                      <button style={{ marginLeft: "38px" }}>Выбрать всех</button>
                    </th>
                  </tr>
                  <tbody>
                  <tr>
                    <td><textarea className="norm_text_expert">Эксперт 1</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "200px", height: "32px"}}>Главный архитектор города</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "30px"}}>30</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "30px"}}>8</textarea></td>
                    <td>Метод парных оценок(100%)<br/>Метод взвешенных оценок(60%)</td>
                    <td><input type="checkbox" style={{ marginLeft: "38px" }} checked="checked" disabled="true"></input></td>
                  </tr>
                  <tr>
                    <td><textarea className="norm_text_expert">Эксперт 2</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "200px", height: "32px"}}>Председатель комитета по градоустройству</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "30px"}}>15</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "30px"}}>6.5</textarea></td>
                    <td>Метод парных оценок(0%)<br/>Метод взвешенных оценок(0%)</td>
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
        <p>Выберите эксперта, результаты которого вы хотите посмотреть:</p>
        <select id="selectvalue">
          <option disabled>Выберите эксперта</option>
          <option>Эксперт 1</option>
          <option>Эксперт 2</option>
        </select><br/>
          <b>Метод парных сравнений</b>
          <tr><td>
              </td>
              <td style={{ marginLeft: "10px" }}>
              <table text-align="left" border="1px">
                <tr>
                  <th width="5px">Ранг</th>
                  <th width="10px">Вес</th>
                  <th width="40px">Альтернатива</th>
                </tr>
                <tbody>
                <tr>
                  <td height="16px" width="20px">1.</td>
                  <td height="16px" >0.45</td>
                  <td height="16px">Строительство новой ветки метро</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>0.218</td>
                  <td>Расширение парка муниципальных автобусов</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>0.166</td>
                  <td>Оптимизация структуры движения городских маршрутов</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>0.166</td>
                  <td>Ввод скоростного трамвая</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>0</td>
                  <td>Расширение транспортной сети</td>
                </tr>
                </tbody>
              </table>
              </td>
            </tr>
            <b>Метод взвешенных оценок</b>
            <tr><td>
                </td>
                <td style={{ marginLeft: "10px" }}>
                <table text-align="left" border="1px">
                  <tr>
                    <th width="5px">Ранг</th>
                    <th width="10px">Вес</th>
                    <th width="40px">Альтернатива</th>
                  </tr>
                  <tbody>
                  <tr>
                    <td height="16px" width="20px">1.</td>
                    <td height="16px" >0.3</td>
                    <td height="16px">Ввод скоростного трамвая</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>0.2</td>
                    <td>Строительство новой ветки метро</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>0.2</td>
                    <td>Расширение транспортной сети</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>0.15</td>
                    <td>Расширение парка муниципальных автобусов</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>0.15</td>
                    <td>Оптимизация структуры движения городских маршрутов</td>
                  </tr>
                  </tbody>
                </table>
                </td>
              </tr>
          <button >Отметить проблему как решенную</button>
        </div>
        }
      </div>
    </div>
    </body>
  );
}

export default App;
