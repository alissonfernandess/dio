import { Request } from 'express';
import { UserController } from './UserController';
import { makeMockResponse } from '../__mocks__/mockResponse';
import { getMockUser } from '../__mocks__/mockUser';

const mockUser = getMockUser();

let mockReturnCreateUser

jest.mock('../services/UserService', () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return {
        createUser: mockReturnCreateUser
      }
    })
  }
})

describe('UserController', () => {

  const request = {
    body: {
      name: 'Algum nome',
      email: 'email@dio.ex'
    }
  } as Request<{}, {}, { name: string, email: string }>;

  const response = makeMockResponse();

  const userController = new UserController();

  it('Deve retornar status 201 e o usuário criado', async () => {
    mockReturnCreateUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser));

    await userController.createUser(request, response);

    expect(response.state.status).toBe(201);
    expect(response.state.json).toMatchObject({
      name: 'Algum nome',
      email: 'email@dio.ex'
    })
  });

  it('Deve retornar status 400 quando o usuário não informar name e email', async () => {
    mockReturnCreateUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser));

    const request = {
      body: {
        name: '',
        email: ''
      }
    } as Request<{}, {}, { name: string, email: string }>;

    await userController.createUser(request, response);

    expect(response.state.status).toBe(400);
  })

  it('Deve retornar status 500 quando ocorrer um erro', async () => {
    const request = {
      body: {
        name: 'sdasd',
        email: 'dsda',
        cep: ''
      }
    } as Request;

    mockReturnCreateUser = jest.fn().mockImplementation(() => {
      throw new Error();
    })

    await userController.createUser(request, response);

    expect(response.state.status).toBe(500)
  })
})