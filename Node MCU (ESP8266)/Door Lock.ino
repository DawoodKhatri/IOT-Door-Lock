#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <Servo.h>

/* Put your SSID & Password */
const char* ssid = "Dawood's Phone";  // Enter SSID here
const char* password = "0000000000";  //Enter Password here
String doorPassword = "1234";

ESP8266WebServer server(80);

Servo motor;

void setup() {
  Serial.begin(9600);
  delay(10);

  Serial.println("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.print("IP address:\t");
  Serial.println(WiFi.localIP());

  motor.attach(0);
  motor.write(0);

  server.on("/", checkServer);
  server.on("/open", openDoor);
  server.on("/close", closeDoor);
  server.on("/changePassword", changePassword);
  server.onNotFound(notFound);

  server.enableCORS(true);
  server.begin();
  Serial.println("HTTP server started");
}
void loop() {
  server.handleClient();
}

void checkServer() {
  server.send(200, "text/plain", "Door Lock Running");
}

void changePassword() {
  if (server.arg("plain").indexOf(doorPassword + ",") != -1) {
    int index = server.arg("plain").indexOf(",");
    doorPassword = server.arg("plain").substring(index + 1);
    server.send(200, "text/plain", "Password Changed");
  } else {
    server.send(403, "text/plain", "Incorrect Old Password");
  }
}

void openDoor() {
  if (server.arg("plain") == doorPassword) {
    motor.write(0);
    server.send(200, "text/plain", "Door Opened");

  } else {
    server.send(403, "text/plain", "Incorrect Password");
  }
}

void closeDoor() {
  motor.write(180);
  server.send(200, "text/plain", "Door Closed");
}

void notFound() {
  server.send(404, "text/plain", "Invalid Request");
}
