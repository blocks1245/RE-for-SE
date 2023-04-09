package com.example.demo;

import javafx.application.Application;

import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

import java.io.File;
import java.net.URL;

public class HelloApplication extends Application {
    @Override
    public void start(Stage stage) {

        StackPane root = new StackPane();

        WebView webView = new WebView();

        final WebEngine webEngine = webView.getEngine();

        URL url = this.getClass().getResource("website/index.html");

        webEngine.setJavaScriptEnabled(true);

        webEngine.load(url.toString());

        root.getChildren().add(webView);

        // Create the Scene
        Scene scene = new Scene(root);
        // Add  the Scene to the Stage
        stage.setScene(scene);

        stage.setResizable(true);
        stage.setTitle("software prototype");

        // Display the Stage
        stage.show();


    }

    public static void main(String[] args) {
        launch();
    }
}