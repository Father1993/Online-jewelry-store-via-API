# Store: React Web-приложение

Store - это web-приложение созданное с помощью React.js, предназначенное для отображения и фильтрации списка украшений.

## Основные компоненты

1. `App` - основной компонент приложения, включает `ItemList`, `BackButton` и передает в `ItemList` состояние `filteredItems` и функцию `setFilteredItems`.
2. `ItemList` - компонент, отвечающий за отображение списка элементов и пагинации. Включает `Filter` и `Pagination`.
3. `Item` - компонент, представляющий отдельный элемент списка украшений.
4. `Filter` - компонент, предоставляющий форму для фильтрации элементов по бренду, цене и названию продукта.
5. `Pagination` - компонент, предоставляющий кнопки для навигации по страницам.
6. `BackButton` - компонент, представляющий кнопку для прокрутки страницы вверх.

## Пользовательские хуки

1. `useFetchItems` - хук для выполнения запросов на сервер и получения данных о товарах.
2. `useFetchFilteredItems` - хук для выполнения запроса на сервер с фильтрами и получения отфильтрованных данных о товарах.

## Запуск приложения

Для запуска приложения необходимо установить все зависимости и запустить сервер разработки:

npm install
npm start


## Данные для подключения к серверу

Данные для подключения к серверу (URL API и пароль) хранятся в файле `.env`.

## Автор

[Андрей Спиней]
