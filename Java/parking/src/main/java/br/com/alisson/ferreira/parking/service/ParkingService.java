package br.com.alisson.ferreira.parking.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.alisson.ferreira.parking.exception.ParkingNotFoundException;
import br.com.alisson.ferreira.parking.model.Parking;
import br.com.alisson.ferreira.parking.repository.ParkingRepository;

@Service
public class ParkingService {
  private final ParkingRepository parkingRepository;

  public ParkingService(ParkingRepository parkingRepository) {
    this.parkingRepository = parkingRepository;
  }

  @Transactional(readOnly = true)
  public List<Parking> findAll() {
    return parkingRepository.findAll();
  }

  @Transactional(readOnly = true)
  public Parking findById(String id) {
    return parkingRepository.findById(id).orElseThrow(() -> new ParkingNotFoundException(id));
  }

  @Transactional
  public Parking create(Parking parking) {
    String uuid = getUUID();
    parking.setId(uuid);
    parking.setEntryDate(LocalDateTime.now());

    parkingRepository.save(parking);

    return parking;
  }

  @Transactional
  public void delete(String id) {
    findById(id);
    parkingRepository.deleteById(id);
  }

  @Transactional
  public Parking update(String id, Parking parking) {
    Parking parkingFind = findById(id);

    parkingFind.setColor(parking.getColor());
    parkingFind.setState(parking.getState());
    parkingFind.setModel(parking.getModel());
    parkingFind.setLicense(parking.getLicense());

    parkingRepository.save(parkingFind);

    return parkingFind;
  }

  private static String getUUID() {
    return UUID.randomUUID().toString().replace("-", "");
  }
}
