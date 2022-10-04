package br.com.agrotis.labpadroesspring.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.agrotis.labpadroesspring.model.Cliente;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long> {

}
