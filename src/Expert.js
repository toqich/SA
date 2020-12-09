import React, { Component } from 'react'
import './Expert.css'


class Expert extends Component {
    render() {
        return (
            <body className="shrift">
                <div className="liniya">
                    <h1 style={{ paddingBottom: "17px", borderBottom: "2px solid" }}><i>Оценивание проблем</i> <i style={{ marginLeft: "250px", color: "blue" }}>Эксперт 1</i><small style={{ fontSize: "13px", marginLeft: "995px" }}><a href="URL">Выйти</a></small></h1>
                    <div className="sidebar">
                        <table>
                            <tr><b>Проблемы</b><td></td></tr>
                            <tbody>
                                <tr><td bgcolor="#f1f1f1"><p>№1</p> Авиакомпания «S7» получила возможность приобрести самолет Боинг 747.
                                Встал вопрос об открытии нового чартерного рейса.  Нужно определить наиболее выгодное направление.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="content">
                        <p style={{ width: "500px" }}>Выберете наиболее препочтительный рейс из Новосибирска. Если предложенные варианты равнозначны, то отметьте оба варианта.</p>
                        {/* <div className="okno">
                        Вы не до конца завершили оценивание, поэтому результаты не будут отправлены аналитику. 
                        
                        </div> */}
                        <table>
                            <tr><td style={{ textAlign: "right" }}>Сочи<input type="checkbox" /></td><td><input type="checkbox" />Пекин</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Сочи<input type="checkbox" /></td><td><input type="checkbox" />Сеул</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Сочи<input type="checkbox" /></td><td><input type="checkbox" />Владивосток</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Сочи<input type="checkbox" /></td><td><input type="checkbox" />Тель-Авив</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Сочи<input type="checkbox" /></td><td><input type="checkbox" />Анталия</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Сочи<input type="checkbox" /></td><td><input type="checkbox" />Симферополь</td></tr>

                            <tr><td style={{ textAlign: "right" }}>Пекин<input type="checkbox" /></td><td><input type="checkbox" />Сеул</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Пекин<input type="checkbox" /></td><td><input type="checkbox" />Владивосток</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Пекин<input type="checkbox" /></td><td><input type="checkbox" />Тель-Авив</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Пекин<input type="checkbox" /></td><td><input type="checkbox" />Анталия</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Пекин<input type="checkbox" /></td><td><input type="checkbox" />Симферополь</td></tr>

                            <tr><td style={{ textAlign: "right" }}>Сеул<input type="checkbox" /></td><td><input type="checkbox" />Владивосток</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Сеул<input type="checkbox" /></td><td><input type="checkbox" />Тель-Авив</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Сеул<input type="checkbox" /></td><td><input type="checkbox" />Анталия</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Сеул<input type="checkbox" /></td><td><input type="checkbox" />Симферополь</td></tr>

                            <tr><td style={{ textAlign: "right" }}>Владивосток<input type="checkbox" /></td><td><input type="checkbox" />Тель-Авив</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Владивосток<input type="checkbox" /></td><td><input type="checkbox" />Анталия</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Владивосток<input type="checkbox" /></td><td><input type="checkbox" />Симферополь</td></tr>

                            <tr><td style={{ textAlign: "right" }}>Тель-Авив<input type="checkbox" /></td><td><input type="checkbox" />Анталия</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Тель-Авив<input type="checkbox" /></td><td><input type="checkbox" />Симферополь</td></tr>
                            <tr><td style={{ textAlign: "right" }}>Анталия<input type="checkbox" /></td><td><input type="checkbox" />Симферополь</td></tr>
                        </table>
                        <button style={{ marginLeft: "300px" }}>Сохранить</button>
                    </div>

                </div>
            </body>
        );
    }
}
export default Expert;