// Testes integrados
import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:5001'
});

describe('/user', () => {

  it('Deve retornar status 201', async () => {
    const response = await server.post('/user', {
      name: 'Algum usuário',
      email: 'email@dio.ex'
    });

    expect(response.status).toBe(201);
  })

})