package org.raven51.backend.Controller;

import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Random;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

@RestController
public class WordController {

    private final String[] words = {"cat", "dog", "mouse", "horse", "fox"};
    private final Random random = new Random();
    private final SimpMessagingTemplate template;
    private ScheduledExecutorService scheduler;
    private AtomicBoolean running = new AtomicBoolean(false);

    public WordController(SimpMessagingTemplate template) {
        this.template = template;
    }

    @PostMapping("/toggle")
    public void toggleLoop() {
        if (running.get()) {
            if (scheduler != null) {
                scheduler.shutdownNow();
                scheduler = null;
            }
            running.set(false);
        }else {
            running.set(true);
            scheduler = Executors.newSingleThreadScheduledExecutor();
            scheduler.scheduleAtFixedRate(() -> sendRandomWord(), 0, 5, TimeUnit.SECONDS);
        }

    }


    private void sendRandomWord() {
        String word = words[random.nextInt(words.length)];
        template.convertAndSend("/topic/word", word);
    }
}

