package com.example.demo;

import javafx.application.Application;

import javafx.scene.Scene;
import javafx.scene.layout.VBox;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

import java.io.File;
import java.io.IOException;

public class HelloApplication extends Application {
    @Override
    public void start(Stage stage) throws IOException {

        WebView webView = new WebView();

        final WebEngine webEngine = webView.getEngine();

        File f = new File("website/index.html");
        webEngine.load(f.toURI().toString());

        //URL url = this.getClass().getResource("index.html");
        //webEngine.load(url.toString());

        //webEngine.load("../index.html");

        // Create the VBox
        VBox root = new VBox();
        // Add the WebView to the VBox
        root.getChildren().add(webView);

        // Create the Scene
        Scene scene = new Scene(root);
        // Add  the Scene to the Stage
        stage.setScene(scene);
        // Display the Stage
        stage.show();


    }

    public static void main(String[] args) {
        launch();
    }
}