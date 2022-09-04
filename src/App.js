import './App.css'
import {useState} from 'react'
import Language from './language'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [language, setLanguage] = useState([
        {id: 1, title: 'HTML', width: 60},
        {id: 2, title: 'JS', width: 40},
        {id: 3, title: 'CSS', width: 60},
        {id: 4, title: 'Bootstrap', width: 60},
        {id: 5, title: 'React', width: 10},
        {id: 6, title: 'Git', width: 10}
    ])
    return (
        <Container fluid>
            <Row>
                <Col className='main'>
                    <Row className="name">
                        <h2 className='text-center'>Агаджанян Борис Павлович</h2>
                    </Row>
                    <Row className="container language text-center">
                        {language.map(get => <Language get={get}/>)}
                    </Row>
                    <Container className="contact text-center col">
                    <Row>
                        <Col><img src={'github.svg'} height='20' width='20'/></Col>
                        <Col><a href="https://github.com/Boryan13">https://github.com/Boryan13</a></Col>
                    </Row>
                    </Container>
                </Col>
                <Col>
                    <Container>
                    <Row>
                        <h2>Образование</h2>
                        <h5>
                            Студент 4 курса Московского Государственного Технического Университета Гражданской Авиации (МГТУ ГА).
                            <br/>
                            Обучаюсь по специальности «Организация технического обслуживания авиационного и радиоэлектронного оборудования воздушных судов»
                            <br/>
                            Средняя оценка - <b>4.8</b>.
                        </h5>
                    </Row>
                    <Row>
                        <h2>Опыт работы</h2>
                        <h5>
                            Действующий сотрудник компании ООО "Экспериментальная Мастерская Наукасофт".
                            <br/>
                            В компании занимаю должность «техник-программист лаборатории разработки специального программного обеспечения ОРПОТС».
                        </h5>
                    </Row>
                    <Row>
                        <h2>Проекты</h2>
                        <h5>
                            В ходе работы познакомился со следующими технологиями:
                        </h5>
                        <br/>
                        <h5>1. CMS Typo3: typoscript; tsconfig; связь между backend и frontend (создание своего template и layout в backend с помощью tsconfig и подключение их через typoscript и html во frontend); создание кастомных элементов; расширение стандартных настроек fluid с помощью bootstrap; использование различных плагинов ('News system', 'NITSAN'); использование различных ViewHelpers для поиска и использования свойств объектов, а также добавление некоторых собственных свойств через typoscript.</h5>
                        <br/>
                        <h5>
                            2. JQuery: скриптовал стандартную карусель bootstrap под нужды компании, поиск элементов и добавление классов для анимации bootstrap.
                        </h5>
                        <h5>
                            3. Composer: пользовался этим пакетным менеджером для установки и составления зависимостей typo3, а также для установки и составления зависимостей sitepackages
                        </h5>
                        <h5>
                            4. Apache: научился работать с логами, разворачивать и переподключать веб-сервер.
                        </h5>
                        <h5>
                            5. Дистрибутив Linux Ubuntu: научился взаимодействовать с интерфейсом; знаю стандартные команды по поиску, созданию и редактированию файлов в bash; умею подключаться к удаленной машине через протокол ssh.
                        </h5>
                    </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
