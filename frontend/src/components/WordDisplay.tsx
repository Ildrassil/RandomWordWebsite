import React, {useEffect, useState} from 'react';
import sockJs from 'sockjs-client';
import Stomp from 'webstomp-client';

const WordDisplay: React.FC = () => {
    const [word, setWord] = useState('');
    const [loop, setLoop] = useState(false);

    useEffect(() => {
        const socket = new sockJs('http://localhost:8080/ws');
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, () => {
            stompClient.subscribe('/topic/word', message => {
                setWord(message.body);
            });
        });

        return () => {
            if (stompClient.connected) {
                stompClient.disconnect();
            }
        };
    }, []);

    const toggleLoop = () => {
        fetch('http://localhost:8080/toggle', {method: 'POST'});
        setLoop(!loop);
    };

    return (
        <div className={"flex-col justify-center text-center"}>
            {!loop && <button
                className={"delay-50 transition-all active:p-10 hover:p-10 shadow-buttonOut hover:shadow-buttonIn active:shadow-buttonIn" +
                    "text-center w-fit py-4 px-10 text-2xl item-center rounded-xl"} onClick={toggleLoop}>Start</button>}
            {loop && <button
                className={"delay-50 transition-all hover:py-4 hover:px-10 active:py-4 active:px-10 shadow-buttonIn hover:shadow-buttonOut active:shadow-buttonOut text-center  h-fit p-10 text-2xl item-center rounded-xl"}
                onClick={toggleLoop}>Stop</button>}
            <p className={"mt-8 p-4 text-2xl"}>Current Word: </p>
            <div className={"shadow-buttonIn px-10 py-5 rounded-2xl"}>
                <p className={"text-center text-4xl p-4"}>{word}</p>
            </div>
        </div>
    );
};

export default WordDisplay;
