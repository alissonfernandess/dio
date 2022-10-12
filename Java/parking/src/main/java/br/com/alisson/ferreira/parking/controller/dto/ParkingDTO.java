package br.com.alisson.ferreira.parking.controller.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value = Include.NON_NULL)
public class ParkingDTO {
  private String id;
  private String license;
  private String state;
  private String model;
  private String color;
  private Double bill;

  @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
  private LocalDateTime entryDate;
  @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
  private LocalDateTime exitDate;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getLicense() {
    return license;
  }

  public void setLicense(String license) {
    this.license = license;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    this.model = model;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public Double getBill() {
    return bill;
  }

  public void setBill(Double bill) {
    this.bill = bill;
  }

}
