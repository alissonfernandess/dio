package br.com.agrotis.labpadroesspring.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.agrotis.labpadroesspring.model.Cliente;
import br.com.agrotis.labpadroesspring.model.Endereco;
import br.com.agrotis.labpadroesspring.repository.ClienteRepository;
import br.com.agrotis.labpadroesspring.repository.EnderecoRepository;
import br.com.agrotis.labpadroesspring.service.ClienteService;
import br.com.agrotis.labpadroesspring.service.ViaCepService;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private EnderecoRepository enderecoRepository;
    @Autowired
    private ViaCepService cepService;

    @Override
    public Iterable<Cliente> buscarTodos() {
        return clienteRepository.findAll();
    }

    @Override
    public Cliente buscarCliente(Long id) {
        Optional<Cliente> clinte = clienteRepository.findById(id);
        return clinte.get();
    }

    @Override
    public void inserir(Cliente cliente) {
        salvarClienteComCep(cliente);

    }

    @Override
    public void atualizar(Long id, Cliente cliente) {
        Optional<Cliente> clienteBd = clienteRepository.findById(id);

        if (clienteBd.isPresent()) {

        }
    }

    @Override
    public void delete(Long id) {
        clienteRepository.deleteById(id);

    }

    private void salvarClienteComCep(Cliente cliente) {
        String cep = cliente.getEndereco().getCep();

        Endereco endereco = enderecoRepository.findById(cep).orElseGet(() -> {
            Endereco novoEndereco = cepService.consultarCep(cep);
            enderecoRepository.save(novoEndereco);

            return novoEndereco;
        });

        cliente.setEndereco(endereco);

        clienteRepository.save(cliente);
    }

}
