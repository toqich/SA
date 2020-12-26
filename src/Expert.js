import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Expert.css'


class Expert extends Component {
    submit = () => {
        confirmAlert({
            title: 'Вы уверены в результате отправления?',
            message: '',
            buttons: [
                {
                    label: 'ДА',
                },
                {
                    label: 'НЕТ',
                }
            ]
        });
    };
    render() {
        return (
            <body className="shrift">
                <div className="liniya">
                    <h1 style={{ paddingBottom: "17px", borderBottom: "2px solid" }}><i>Оценивание проблем</i> <i style={{ marginLeft: "250px", color: "blue" }}>Эксперт 2</i><small style={{ fontSize: "13px", marginLeft: "995px" }}><a href="URL">Выйти</a></small></h1>
                    <div className="sidebar">
                        <table>
                            <tr><b>Проблемы</b><td></td></tr>
                            <tbody>
                                <tr><td >№1 Рейсы </td></tr>
                                <tr><td bgcolor="#f1f1f1">№2 Транспорт </td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="content">
                        <p style={{ width: "500px" }}>Решение транспортной проблемы в густозаселенном новом районе города. </p>
                        <div class="tabs">
                            <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked />
                            <label for="tab-btn-1">МПС</label>
                            <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
                            <label for="tab-btn-2">МВЭО</label>
                            <input type="radio" name="tab-btn" id="tab-btn-3" value="" />
                            <label for="tab-btn-3">МП</label>
                            <input type="radio" name="tab-btn" id="tab-btn-4" value="" />
                            <label for="tab-btn-4">МР</label>
                            <input type="radio" name="tab-btn" id="tab-btn-5" value="" />
                            <label for="tab-btn-5">МППС</label>
                            <div id="content-1">
                                <p>Выберете наиболее препочтительный вариант. Если предложенные варианты равнозначны, то поставьте галочку посередине.</p>
                                <p style={{ backgroundColor: "greenyellow" }}>Результаты отправлены</p>
                                <table>
                                    <tr><td></td><td>Варианты равнозначны</td><td></td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Строительство новой ветки метро<input type="checkbox" /></td><td style={{ textAlign: "center" }}><input type="checkbox" /></td><td><input type="checkbox" />Расширение парка муниципальных автобусов</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Строительство новой ветки метро<input type="checkbox" /></td><td style={{ textAlign: "center" }}><input type="checkbox" /></td><td><input type="checkbox" />Расширение транспортной сети</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Строительство новой ветки метро<input type="checkbox" /></td><td style={{ textAlign: "center" }}><input type="checkbox" /></td><td><input type="checkbox" />Ввод скоростного трамвая</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Строительство новой ветки метро<input type="checkbox" /></td><td style={{ textAlign: "center" }}><input type="checkbox" /></td><td><input type="checkbox" />Оптимизация структуры движения городских маршрутов</td></tr>

                                    <tr><td style={{ textAlign: "right" }}>Расширение парка муниципальных автобусов<input type="checkbox" /></td><td style={{ textAlign: "center" }}><input type="checkbox" /></td><td><input type="checkbox" />Расширение транспортной сети</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Расширение парка муниципальных автобусов<input type="checkbox" /></td><td style={{ textAlign: "center" }}><input type="checkbox" /></td><td><input type="checkbox" />Ввод скоростного трамвая</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Расширение парка муниципальных автобусов<input type="checkbox" /></td><td style={{ textAlign: "center" }}><input type="checkbox" /></td><td><input type="checkbox" />Оптимизация структуры движения городских маршрутов</td></tr>

                                    <tr><td style={{ textAlign: "right" }}>Расширение транспортной сети<input type="checkbox" /></td><td style={{ textAlign: "center" }}><input type="checkbox" /></td><td><input type="checkbox" />Ввод скоростного трамвая</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Расширение транспортной сети<input type="checkbox" /></td><td style={{ textAlign: "center" }}><input type="checkbox" /></td><td><input type="checkbox" />Оптимизация структуры движения городских маршрутов</td></tr>

                                    <tr><td style={{ textAlign: "right" }}>Ввод скоростного трамвая<input type="checkbox" /></td><td style={{ textAlign: "center" }}><input type="checkbox" /></td><td><input type="checkbox" />Оптимизация структуры движения городских маршрутов</td></tr>
                                </table>
                                <p></p>
                                <button className='container' onClick={this.submit} style={{ marginLeft: "150px" }}>Отправить результаты</button>
                                <button style={{ marginLeft: "300px" }}>Завершить оценивание</button>
                            </div>
                            <div id="content-2">
                                <p>Поставьте оценки кажому предложению от 0 д 1, в зависмости от приоритетности. Сумма оценок не должна превышать 1.</p>
                                <p>Текущая сумма: 1</p>
                                <p style={{ backgroundColor: "greenyellow" }}>Результаты отправлены</p>
                                <table className="border-table">
                                    <tr ><td >Строительство новой ветки метро</td><td><textarea></textarea></td></tr>
                                    <tr><td>Расширение парка муниципальных автобусов</td><td><textarea></textarea></td></tr>
                                    <tr><td>Расширение транспортной сети</td><td><textarea></textarea></td></tr>
                                    <tr><td>Ввод скоростного трамвая</td><td><textarea></textarea></td></tr>
                                    <tr><td>Оптимизация структуры движения городских маршрутов</td><td><textarea></textarea></td></tr>
                                </table>
                                <p></p>
                                <button className='container' onClick={this.submit} style={{ marginLeft: "150px" }}>Отправить результаты</button>
                                <button style={{ marginLeft: "300px" }}>Завершить оценивание</button>
                            </div>

                            <div id="content-3">
                                <p>Поставьте оценки кажому предложению начиная от 1 до 5, где 1 - наиболее предпочтительный вариант, 5 - наименеепредпочтительный вариант.</p>
                                {/* <p>Текущая сумма: 1</p> */}
                                {/* <p style={{backgroundColor: "red"}}>Внимание! Оценки должны быть от 1 до 5 и не должны совпадать.</p> */}
                                <p style={{ backgroundColor: "greenyellow" }}>Результаты отправлены</p>

                                <table className="border-table">
                                    <tr ><td >Строительство новой ветки метро</td><td><textarea></textarea></td></tr>
                                    <tr><td>Расширение парка муниципальных автобусов</td><td><textarea></textarea></td></tr>
                                    <tr><td>Расширение транспортной сети</td><td><textarea></textarea></td></tr>
                                    <tr><td>Ввод скоростного трамвая</td><td><textarea></textarea></td></tr>
                                    <tr><td>Оптимизация структуры движения городских маршрутов</td><td><textarea></textarea></td></tr>
                                </table>
                                <p></p>
                                <button className='container' onClick={this.submit} style={{ marginLeft: "150px" }}>Отправить результаты</button>
                                <button style={{ marginLeft: "300px" }}>Завершить оценивание</button>
                            </div>

                            <div id="content-4">
                                <p>Поставьте оценки кажому предложению от 1 до 10, где 10 - наиболее предпочтительный вариант, 1 - наименеепредпочтительный вариант.</p>
                                {/* <p style={{backgroundColor: "red"}}>Внимание! Оценки должны быть от 1 до 10 и не должны совпадать.</p> */}
                                <p style={{backgroundColor: "greenyellow"}}>Результаты отправлены</p> 
                                <table className="border-table">
                                    <tr ><td >Строительство новой ветки метро</td><td><textarea></textarea></td></tr>
                                    <tr><td>Расширение парка муниципальных автобусов</td><td><textarea></textarea></td></tr>
                                    <tr><td>Расширение транспортной сети</td><td><textarea></textarea></td></tr>
                                    <tr><td>Ввод скоростного трамвая</td><td><textarea></textarea></td></tr>
                                    <tr><td>Оптимизация структуры движения городских маршрутов</td><td><textarea></textarea></td></tr>
                                </table>
                                <p></p>
                                <button className='container' onClick={this.submit} style={{ marginLeft: "150px" }}>Отправить результаты</button>
                                <button style={{ marginLeft: "300px" }}>Завершить оценивание</button>
                            </div>

                            <div id="content-5">
                                <p style={{width:"900px"}}>Выберете наиболее препочтительный вариант. Если вы не можете дать однозначную оценку, то в центральном окне впишите в скольких случаях из 16 альтернатива 1 предпостительнее альтернативы 2.(оценки ставятся в диапозоне от 1 до 15)</p>
                                <p style={{ backgroundColor: "greenyellow" }}>Результаты отправлены</p>
                                <table>
                                    {/* <tr><td></td><td>Варианты равнозначны</td><td></td></tr> */}
                                    <tr><td style={{ textAlign: "right" }}>Строительство новой ветки метро<input type="checkbox" /></td><td style={{ textAlign: "center" }}><textarea></textarea></td><td><input type="checkbox" />Расширение парка муниципальных автобусов</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Строительство новой ветки метро<input type="checkbox" /></td><td style={{ textAlign: "center" }}><textarea></textarea></td><td><input type="checkbox" />Расширение транспортной сети</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Строительство новой ветки метро<input type="checkbox" /></td><td style={{ textAlign: "center" }}><textarea></textarea></td><td><input type="checkbox" />Ввод скоростного трамвая</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Строительство новой ветки метро<input type="checkbox" /></td><td style={{ textAlign: "center" }}><textarea></textarea></td><td><input type="checkbox" />Оптимизация структуры движения городских маршрутов</td></tr>

                                    <tr><td style={{ textAlign: "right" }}>Расширение парка муниципальных автобусов<input type="checkbox" /></td><td style={{ textAlign: "center" }}><textarea></textarea></td><td><input type="checkbox" />Расширение транспортной сети</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Расширение парка муниципальных автобусов<input type="checkbox" /></td><td style={{ textAlign: "center" }}><textarea></textarea></td><td><input type="checkbox" />Ввод скоростного трамвая</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Расширение парка муниципальных автобусов<input type="checkbox" /></td><td style={{ textAlign: "center" }}><textarea></textarea></td><td><input type="checkbox" />Оптимизация структуры движения городских маршрутов</td></tr>

                                    <tr><td style={{ textAlign: "right" }}>Расширение транспортной сети<input type="checkbox" /></td><td style={{ textAlign: "center" }}><textarea></textarea></td><td><input type="checkbox" />Ввод скоростного трамвая</td></tr>
                                    <tr><td style={{ textAlign: "right" }}>Расширение транспортной сети<input type="checkbox" /></td><td style={{ textAlign: "center" }}><textarea></textarea></td><td><input type="checkbox" />Оптимизация структуры движения городских маршрутов</td></tr>

                                    <tr><td style={{ textAlign: "right" }}>Ввод скоростного трамвая<input type="checkbox" /></td><td style={{ textAlign: "center" }}><textarea></textarea></td><td><input type="checkbox" />Оптимизация структуры движения городских маршрутов</td></tr>
                                </table>
                                <p></p>
                                <button className='container' onClick={this.submit} style={{ marginLeft: "150px" }}>Отправить результаты</button>
                                <button style={{ marginLeft: "300px" }}>Завершить оценивание</button>
                            </div>
                        </div>

                    </div>

                </div>
            </body>
        );
    }
}
export default Expert;