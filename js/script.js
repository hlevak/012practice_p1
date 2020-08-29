/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на 
вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

/* 1 */
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

console.log ("Количество фильмов: ", numberOfFilms);
/* 2 */

/* 2) Создать объект personalMovieDB и в него поместить такие свойства:

 */
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log ("personalMovieDB.count ", personalMovieDB.count, 
    typeof (personalMovieDB.count));
console.log ("personalMovieDB.movies ", personalMovieDB.movies, 
    typeof (personalMovieDB.movies));
console.log ("personalMovieDB.actors ", personalMovieDB.actors, 
    typeof (personalMovieDB.actors));
console.log ("personalMovieDB.genres", personalMovieDB.genres, 
    typeof (personalMovieDB.genres));
console.log ("personalMovieDB.privat", personalMovieDB.privat, 
    typeof (personalMovieDB.privat));


/* 3 */
/* const ansMovieName = prompt ('Один из последних просмотренных фильмов?');
const ansMovieScore = +prompt ('На сколько оцените его?'); 
 */
const ansMovieName1 = 'logan',
      ansMovieScore1 = '8.1',
      ansMovieName2 = 'logan2',
      ansMovieScore2 = '5.1';
/* 
personalMovieDB.movies[ansMovieName1] = ansMovieScore1;
personalMovieDB.movies[ansMovieName2] = ansMovieScore2;
 */
console.log ("personalMovieDB.movies: ", personalMovieDB.movies);




/* console.log (personalMovieDB.movies['logan'], 
    typeof (personalMovieDB.movies['logan']) );
console.log (personalMovieDB.movies['5.1'], 
    typeof (personalMovieDB.movies['5.1']) );
 *//* 3) Задайте пользователю по два раза вопросы:
- 'Один из последних просмотренных фильмов?'
- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
movies: {
    'logan': '8.1'
}
 */