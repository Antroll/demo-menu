# Demo-menu
-------
_Удобный список страниц верстки_

Добавьте ссылку на файл JS до закрывающего тэга `<body>`:
```html
<script src="//cdn.jsdelivr.net/gh/Antroll/demo-menu@0.3.4/dist/scripts/demo-menu.js" data-demo-data="demo/data.json"></script>
```

В аттрибуте `data-demo-data="{/data.json}"` необходимо указать путь к конфигу меню.

[https://github.com/Antroll/demo-menu/blob/master/dist/demo/data.json](Пример конфига)

#### Разработка
Для работы со сборкой проекта необходимы установленные **[node.js](https://nodejs.org/en/)**  и **[ruby](https://www.ruby-lang.org/ru/)**
Так же должны быть установлены

jade:
```sh
$ npm install jade --global
```

sass:
```sh
$ gem install sass
```

Gulp и Bower:

```sh
$ npm install -g gulp
```
#### Готовим проект
```sh
$ git clone https://gitlab.com/Antroll/new-project.git
$ cd new-project
$ npm i
```

Для просмотра проекта:

```sh
$ gulp serve
```

Исходники проекта содержаться в папке **project/dist**