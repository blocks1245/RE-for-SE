package com.example.demo;

import javafx.application.Application;

import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;

public class HelloApplication extends Application {
    @Override
    public void start(Stage stage) throws IOException {

        StackPane root = new StackPane();

        WebView webView = new WebView();

        final WebEngine webEngine = webView.getEngine();

        File f = new File("website/index.html");
        webEngine.load(f.toURI().toString());

        //VBox root = new VBox();

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