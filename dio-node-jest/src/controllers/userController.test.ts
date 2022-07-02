import { Request } from 'express';
import { makeMockResponse, MockResponse } from '../mocks/mockResponse';
import { UserController } from './userController';

describe('Users Controller', () => {
  const userController = new UserController();

  const mockRequest = {} as Request;
  const mockReponse = makeMockResponse();

  it('Deve listar os nossos usuários', () => {
    userController.listarUsuario(mockRequest, mockReponse);

    expect(mockReponse.state.status).toBe(200);
    expect(mockReponse.state.json).toHaveLength(4);
  });

  it('Deve criar um novo usuário', () => {
    mockRequest.body = {
      name: 'Novo usuário'
    };

    userController.criarUsuario(mockRequest, mockReponse);

    expect(mockReponse.state.status).toBe(201);
    expect(mockReponse.state.json).toMatchObject({ 'mensagem': `Usuário Novo usuário criado` });
  });

  it('Não deve criar um usuário com o nome em branco', () => {
    mockRequest.body = {
      name: ''
    };

    userController.criarUsuario(mockRequest, mockReponse);

    expect(mockReponse.state.status).toBe(403);
    expect(mockReponse.state.json).toMatchObject({ mensagem: 'Não é possível criar usuário sem um nome' })
  })

})