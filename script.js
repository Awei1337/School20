/* Подключение шрифта в формате .woff */
@font-face {
    font-family: 'Bounded-Regular';
    src: url('fonts/Bounded-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* Общие стили */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Bounded-Regular', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    line-height: 1.6;
}

/* Главная картинка */
.main-image {
    position: relative;
    height: 500px;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

.content {
    position: absolute;
    z-index: 1;
    text-align: center;
}

.title {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.link {
    color: white;
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}

/* Логотип */
.logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 60px;
    height: auto;
    filter: invert(100%); /* Делает логотип черным */
}

/* Описание школы */
.description-container {
    margin: 20px;
}

.description-text {
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.read-more {
    display: inline-block;
    background-color: #333;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
}

.read-more:hover {
    background-color: #555;
}

/* Плавное появление сайта */
body {
    opacity: 0;
    animation: fadeIn 0.7s forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
        }
