package br.com.alisson.ferreira.parking.controller;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import br.com.alisson.ferreira.parking.controller.dto.ParkingCreateDTO;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class ParkingControllerTest {
  @LocalServerPort
  private int randomPort;

  @BeforeEach
  public void setUpTest() {
    RestAssured.port = randomPort;
  }

  @Test
  void whenFindAllThenCheckResult() {
    RestAssured.given().auth().basic("user", "12345").when().get("/parking").then().statusCode(HttpStatus.OK.value());
  }

  @Test
  void whenCreateThenCheckIsCreated() {
    ParkingCreateDTO createDTO = new ParkingCreateDTO();

    createDTO.setColor("Amarelo");
    createDTO.setLicense("WRT-5555");
    createDTO.setModel("Brasilia");
    createDTO.setState("SP");

    RestAssured.given().when().auth()
        .basic("user", "12345")
        .contentType(MediaType.APPLICATION_JSON_VALUE).body(createDTO)
        .post("/parking").then().statusCode(HttpStatus.CREATED.value())
        .body("license", Matchers.equalTo("WRT-5555"))
        .body("color", Matchers.equalTo("Amarelo"));
  }
}
