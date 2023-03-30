package com.example.reforseprototype;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Menu;
import javafx.scene.control.MenuBar;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.URL;

public class HelloApplication extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));

        stage.setTitle("Hello!");

        Scene scene = new Scene(fxmlLoader.load(), 300, 300);

        WebView webView = new WebView();

        WebView browser = new WebView();
        WebEngine webEngine = browser.getEngine();
        URL url = this.getClass().getResource("/com/cds/gui/webView/main.html");
        webEngine.load(url.toString());

        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}