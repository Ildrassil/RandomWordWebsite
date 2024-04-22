## Aufgabe:
Please create a small web server of your choice (i.e. spring, nodejs, php, …) and a frontend of your choice (i.e. angular, vanilla JS, vue, …), and in that frontend place a button. When the user presses the button, trigger an API-endpoint on the server, which will begin a random loop over the following words: cat, dog, mouse, horse, fox. The backend should every 5 seconds choose a new word out of these, and that word needs to be displayed in live in the frontend. You can choose whether you want to utilize polling, rtc or websockets for this. But whatever you choose, I want you to tell me why this is the best choice for this use-case.
This task will show us that you can handle async events in the frontend as well as server-driven events, and that you can make good tech-decisions based on the complexity of the project/task.

## Lösung:

#### - Backend: Spring Boot (Java)
=> => Hier habe ich mich für Spring Boot entschieden, weil es ein sehr mächtiges Framework ist, das viele Features bietet, die für diese Aufgabe nützlich sind. Spring Boot bietet eine einfache Möglichkeit, einen Webserver zu erstellen und RESTful APIs zu implementieren. Es bietet auch eine einfache Möglichkeit, Server-Sent Events (SSE) zu implementieren, die für diese Aufgabe nützlich sind.

#### - Frontend: Vite + React + Typescript

#### - Webseiten Kommunikatiuonsmethode: Websockets 
=> Websockets erstellt eine dauerhafte Verbindung von Client zu Server die bidriektional Kommuniziert. 
Dies Ermöglicht eine geringe Netzwerklast und  garantiert eine hohe Effizienz. Da hier der Server von selbst Daten an den Client sendet.
Spring bietet eine vereinfachte Möglichkeit Websockets zu implementieren.
Da mir dieses Theam noch recht unebkannt war, habe ich hier nur Oberflächliches Wisssen erworben
um die Aufgabe zu lösen.

#### - Frontend Kommunikationsmethode: SockJS und Stomp
=> Zunächst habe ich mit SockJS den Websocket emuliert um eine dauerhafte Verbindung zum Server herzustellen. Falls der Browser das bentzen von Websockets nicht unterstützt.
Mithilfe von Stomp habe ich die Kommunikation zwischen Client und Server ermöglicht.

#### - Frontend UI mit Tailwind CSS erstellt
=> Das hat mir möglichkeiten gegeben Inline viele Anpassungen zu machen. Ich bevorzuge diese Libary Momentan um mein Frontend zu gestalten.