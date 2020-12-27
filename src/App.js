import './App.css';
import { useState } from "react";

function App() {

  const [tabs1, setTabs1] = useState(1);
  const [tabs2, setTabs2] = useState(1);
  const [tabs3, setTabs3] = useState(1);
  return (
    <body className="shrift">
    <div className="">
      <h1 style={{ paddingBottom: "17px", borderBottom: "2px solid" }}><i>Аналитика проблем </i><small
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
                                            disabled="true">Студенты</textarea></td>
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
        <td><h3>Формулировка проблемы Студенты </h3></td>
        <td>
          <button style={{ marginLeft: "655px" }}>Сохранить изменения</button>
        </td>
        <td></td>
      </tr>
      <p></p>
      <textarea className="norm_text" style={{ height: 40, width: 1100, resize: "none" }}>Проблема развития студенческого самоуправления означает проблему подготовки студента как гражданина, способного участвовать в управлении, принимать грамотные решения и эффективно выполнять эти решения на рабочем месте.</textarea>
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
          <button>Добавить альтернативу</button>
          <table>
            <tr>
              <th>№</th>
              <th>Альтернатива</th>
            </tr>
            <tbody>
            <tr>
              <td>1.</td>
              <td><textarea className="norm_text">Проведение тренингов по развитию руководственных навыков</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }}>&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td><textarea className="norm_text">Ввести контроль и отчетность перед администрацией учебного подразделения</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }}>&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td><textarea className="norm_text">Повысить эффективность каналов передачи информации</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }}>&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td><textarea className="norm_text">Укрепить нормативно-правовую базу студенческого самоуправления</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }}>&#10008;</button>
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td><textarea className="norm_text">Провести анкетирование удовлетворенности студенческого самоуправления</textarea></td>
              <td>
                <button style={{ marginLeft: "38px" }}>&#10008;</button>
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
                     onClick={() => setTabs2(2)}>Все эксперты</label>
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
                    <td><textarea className="norm_text_expert" style={{width: "200px", height: "32px"}}>Студент</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "30px"}}>0</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "30px"}}>5</textarea></td>
                    <td>Метод парных оценок(0%)<br/>Метод взвешенных оценок(0%)<br/>Метод преподчения(0%)<br/>Метод ранга(0%)<br/>Метод полного попарного сравнения(0%)</td>
                    <td><input type="checkbox" style={{ marginLeft: "38px" }} checked="checked"></input></td>
                  </tr>
                  <tr>
                    <td><textarea className="norm_text_expert">Эксперт 2</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "200px", height: "32px"}}>Студент</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "30px"}}>0</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "30px"}}>5</textarea></td>
                    <td>Метод парных оценок(0%)<br/>Метод взвешенных оценок(0%)<br/>Метод преподчения(0%)<br/>Метод ранга(0%)<br/>Метод полного попарного сравнения(0%)</td>
                    <td><input type="checkbox" style={{ marginLeft: "38px" }}></input></td>
                  </tr>
                  <tr>
                    <td><textarea className="norm_text_expert">Эксперт 3</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "200px", height: "32px"}}>Студент</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "30px"}}>0</textarea></td>
                    <td><textarea className="norm_text_expert" style={{width: "30px"}}>5</textarea></td>
                    <td>Метод парных оценок(0%)<br/>Метод взвешенных оценок(0%)<br/>Метод преподчения(0%)<br/>Метод ранга(0%)<br/>Метод полного попарного сравнения(0%)</td>
                    <td><input type="checkbox" style={{ marginLeft: "38px" }}></input></td>
                  </tr>
                  </tbody>
                </table>

                <div>
                  <td>
                    <button>Разрешить оценивание проблемы</button>
                  </td>
                  <td>
                    <button style={{ marginLeft: "710px" }}>Удалить эксперта</button>
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
          <option>Эксперт 3</option>
        </select><br/>
        <b>Метод парных сравнений</b>
        <tr><td>
            </td>
            <td style={{ marginLeft: "10px" }}>
            <table text-align="left" border="1px">
              <tr>
              <th style={{ width: "20px" }}>Ранг</th>
              <th style={{ width: "10px" }}>Вес</th>
              <th style={{ width: "500px" }}>Альтернатива</th>
              </tr>
              <tbody>
              <tr>
                <td>1.</td>
                <td>0.33</td>
                <td>Укрепить нормативно-правовую базу студенческого самоуправления</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>0.22</td>
                <td>Контроль и отчетность перед администрацией<br/>учебного подразделения</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>0.21</td>
                <td>Провести анкетирование удовлетворенности<br/>студенческого самоуправления</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>0.19</td>
                <td>Повысить эффективность каналов передачи<br/>информации</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>0.05</td>
                <td>Проведение тренингов по развитию<br/>руководственных навыков</td>
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
                  <th style={{ width: "20px" }}>Ранг</th>
                  <th style={{ width: "10px" }}>Вес</th>
                  <th style={{ width: "500px" }}>Альтернатива</th>
                  </tr>
                  <tbody>
                  <tr>
                    <td>1.</td>
                    <td>0.35</td>
                    <td>Провести анкетирование удовлетворенности<br/>студенческого самоуправления</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>0.2</td>
                    <td>Укрепить нормативно-правовую базу студенческого самоуправления</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>0.2</td>
                    <td>Повысить эффективность каналов передачи<br/>информации</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>0.17</td>
                    <td>Контроль и отчетность перед администрацией<br/>учебного подразделения</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>0.8</td>
                    <td>Проведение тренингов по развитию<br/>руководственных навыков</td>
                  </tr>
                  </tbody>
                </table>
                </td>
              </tr>
              <b>Метод предпочтения</b>
              <tr><td>
                  </td>
                  <td style={{ marginLeft: "10px" }}>
                  <table text-align="left" border="1px">
                    <tr>
                    <th style={{ width: "20px" }}>Ранг</th>
                    <th style={{ width: "10px" }}>Вес</th>
                    <th style={{ width: "500px" }}>Альтернатива</th>
                    </tr>
                  <tbody>
                  <tr>
                    <td>1.</td>
                    <td>0.3</td>
                    <td>Укрепить нормативно-правовую базу студенческого самоуправления</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>0.225</td>
                    <td>Контроль и отчетность перед администрацией<br/>учебного подразделения</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>0.205</td>
                    <td>Провести анкетирование удовлетворенности<br/>студенческого самоуправления</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>0.15</td>
                    <td>Проведение тренингов по развитию<br/>руководственных навыков</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>0.12</td>
                    <td>Повысить эффективность каналов передачи<br/>информации</td>
                  </tr>
                  </tbody>
                </table>
                  </td>
                </tr>
                <b>Метод ранга</b>
                <tr><td>
                    </td>
                    <td style={{ marginLeft: "10px" }}>
                    <table text-align="left" border="1px">
                      <tr>
                      <th style={{ width: "20px" }}>Ранг</th>
                      <th style={{ width: "10px" }}>Вес</th>
                      <th style={{ width: "500px" }}>Альтернатива</th>
                      </tr>
                    <tbody>
                    <tr>
                      <td>1.</td>
                      <td>0.3</td>
                      <td>Укрепить нормативно-правовую базу студенческого самоуправления</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>0.25</td>
                      <td>Провести анкетирование удовлетворенности<br/>студенческого самоуправления</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>0.25</td>
                      <td>Контроль и отчетность перед администрацией<br/>учебного подразделения</td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>0.15</td>
                      <td>Проведение тренингов по развитию<br/>руководственных навыков</td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>0.05</td>
                      <td>Повысить эффективность каналов передачи<br/>информации</td>
                    </tr>
                    </tbody>
                  </table>
                    </td>
                  </tr>
                  <b>Метод полного попарного сопоставления</b>
                  <tr><td>
                      </td>
                      <td style={{ marginLeft: "10px" }}>
                      <table text-align="left" border="1px">
                        <tr>
                          <th style={{ width: "20px" }}>Ранг</th>
                          <th style={{ width: "10px" }}>Вес</th>
                          <th style={{ width: "500px" }}>Альтернатива</th>
                        </tr>
                        <tbody>
                        <tr>
                          <td>1.</td>
                          <td>0.34</td>
                          <td>Укрепить нормативно-правовую базу студенческого самоуправления</td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>0.21</td>
                          <td>Провести анкетирование удовлетворенности<br/>студенческого самоуправления</td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>0.2</td>
                          <td>Контроль и отчетность перед администрацией<br/>учебного подразделения</td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>0.18</td>
                          <td>Проведение тренингов по развитию<br/>руководственных навыков</td>
                        </tr>
                        <tr>
                          <td>5.</td>
                          <td>0.07</td>
                          <td>Повысить эффективность каналов передачи<br/>информации</td>
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
