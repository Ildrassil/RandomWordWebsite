package org.raven51.backend.Controller;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Random;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@RestController
public class WordControllerSSE {
    private final ExecutorService executor = Executors.newSingleThreadExecutor();
    private final String[] words = {"cat", "dog", "mouse", "horse", "fox"};
    private final Random random = new Random();
    private SseEmitter emitter;


    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping("/api/generator/{trigger}")
    public void startWordGeneration(@PathVariable String trigger) {

        emitter = new SseEmitter();
        executor.execute(() -> {
            try {
                if(trigger.equals("start")){
                while (true) {
                    String word = words[random.nextInt(words.length)];
                    emitter.send(word);
                    Thread.sleep(5000);
                }}
                else {emitter.complete();}
            } catch (Exception e) {
                emitter.completeWithError(e);
            }
        });
    }



    @GetMapping("/api/words")
    @CrossOrigin("http://localhost:5173")
    public SseEmitter getWords(HttpServletResponse response) {
        response.setContentType("text/event-stream");
        return emitter;
    }
}