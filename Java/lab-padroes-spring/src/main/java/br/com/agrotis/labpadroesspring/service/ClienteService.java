package br.com.agrotis.labpadroesspring.service;

import br.com.agrotis.labpadroesspring.model.Cliente;

public interface ClienteService {
    Iterable<Cliente> buscarTodos();

    Cliente buscarCliente(Long id);

    void inserir(Cliente cliente);

    void atualizar(Long id, Cliente cliente);

    void delete(Long id);
}
