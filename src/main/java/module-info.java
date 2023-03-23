module com.example.reforseprototype {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.controlsfx.controls;

    opens com.example.reforseprototype to javafx.fxml;
    exports com.example.reforseprototype;
}