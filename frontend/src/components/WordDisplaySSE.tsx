import axios from 'axios';
import {useEffect, useState} from "react";

export const WordDisplaySSE = () => {
    const [word, setWord] = useState('');
    const [trigger, setTrigger] = useState<boolean>(false);

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:8080/api/words');
        eventSource.onmessage = (event) => {
            setWord(event.data);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    const handleStart = async () => {
        try {
            await axios.put('http://localhost:8080/api/generator/start');
        } catch (error) {
            console.error('Error starting word generation:', error);
        }
        setTrigger(true);
    };

    const handleStop = async ()=> {
        try{
            await axios.put("http://localhost:8080/api/generator/stop");
        }
        catch (error){
            console.error("Error stopping word generation:", error);
        }
        setTrigger(false);

    }

    return (
        <div className={"justify-center align-middle items-center text-center"}>
            <h1 className={"mb-5 text-xl "}>Real-time Word Display</h1>
            {!trigger&&<button
                className={"delay-50 transition-all active:px-12 hover:px-12 shadow-buttonOut hover:shadow-buttonIn active:shadow-buttonIn" +
                    "text-center w-fit py-4 px-10 text-2xl item-center rounded-xl"} onClick={handleStart}>Start
            </button>}
            {trigger&&<button
                className={"delay-50 transition-all active:px-12 hover:px-12 shadow-buttonIn hover:shadow-buttonOut active:shadow-buttonOut" +
                    "text-center w-fit py-4 px-10 text-2xl item-center rounded-xl"} onClick={handleStop}>Stop
            </button>}
            <p className={"my-2 text-lg text-textHeader"}>Current Word: </p>
            <div className={"shadow-buttonIn px-10 py-5 rounded-2xl"}>
                <p className={"text-center text-4xl p-4 text-xl font-bold text-textPrime"}>{word}</p>
            </div>
        </div>
    );
};

