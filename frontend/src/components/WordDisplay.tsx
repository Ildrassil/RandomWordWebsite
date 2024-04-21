
import React, { useEffect, useState } from 'react';
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
        fetch('http://localhost:8080/toggle', { method: 'POST' });
        setLoop(!loop);
    };

    return (
        <div>
            {!loop&&<button onClick={toggleLoop}>Start</button>}
            {loop&&<button onClick={toggleLoop}>Stop</button>}
            <p className={"Word"}>Current Word: {word}</p>
        </div>
    );
};

export default WordDisplay;
