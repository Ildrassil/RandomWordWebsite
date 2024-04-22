## Aufgabe:
Please create a small web server of your choice (i.e. spring, nodejs, php, …) and a frontend of your choice (i.e. angular, vanilla JS, vue, …), and in that frontend place a button. When the user presses the button, trigger an API-endpoint on the server, which will begin a random loop over the following words: cat, dog, mouse, horse, fox. The backend should every 5 seconds choose a new word out of these, and that word needs to be displayed in live in the frontend. You can choose whether you want to utilize polling, rtc or websockets for this. But whatever you choose, I want you to tell me why this is the best choice for this use-case.
This task will show us that you can handle async events in the frontend as well as server-driven events, and that you can make good tech-decisions based on the complexity of the project/task.

## Lösung:
#### - Backend: Spring Boot (Java) 
=>  Hier habe ich mich für Spring Boot entschieden, weil es ein sehr mächtiges Framework ist, das viele Features bietet, die für diese Aufgabe nützlich sind. Spring Boot bietet eine einfache Möglichkeit, einen Webserver zu erstellen und RESTful APIs zu implementieren. Es bietet auch eine einfache Möglichkeit, Server-Sent Events (SSE) zu implementieren, die für diese Aufgabe nützlich sind.
#### - Frontend Vite + React + Typescript
#### - Server Kommunikation SSE mit einem Emitter und Cross-Origin Resource Sharing (CORS) aktiviert
=> Dies war zwingend Notwendig, da der Frontend Server auf einem anderen Port läuft als der Backend Server.
Ich habe mich für SSE entschieden, weil es eine einfache Möglichkeit bietet, Server-Driven Events zu implementieren. Es ist auch sehr einfach zu implementieren und zu verwenden. Es ist auch sehr effizient, da es nur eine Verbindung zum Server benötigt, um Daten zu empfangen.
SSE habe ich nach meinem Research für diese Aufgabe gefunden, da mein Wissenstand sich bis jetzt nur auf polling bezogen hat.
Der erste versuch mit Websocket war deutlich komplizierter. Deshalb wollte ich nochmals herausfinden, weshalb diese Methode wesentlich einfacher ist.
#### - Frontend Kommunikation mit EventSource API
=> Hier habe ich mittels einer EventSource API eine Verbindung zum Backend aufgebaut und die Daten empfangen.
Diese Funktioniert hier ähnlich wie ein Event Listner und erstellt eine Dauerhafte Verbindung zum Backend
#### - Frontend UI mit Tailwind CSS erstellt
=> Das hat mir möglichkeiten gegeben Inline viele Anpassungen zu machen. Ich bevorzuge diese Libary Momentan um mein Frontend zu gestalten.

