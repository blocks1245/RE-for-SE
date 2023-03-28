package com.example.reforseprototype;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Menu;
import javafx.scene.control.MenuBar;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import java.io.IOException;

public class HelloApplication extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(HelloApplication.class.getResource("hello-view.fxml"));

        stage.setTitle("Hello!");

        MenuBar menuBar = new MenuBar();
        VBox vBox = new VBox(menuBar);
        Scene scene = new Scene(vBox, 300, 500);

        Menu menu1 = new Menu("Menu 1");
        menuBar.getMenus().add(menu1);

        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}