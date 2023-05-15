import { handleOnclick } from "./utils"

describe('Utils', () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    it('Deve exibir um alert com mensagem Boas vindas', () => {
        handleOnclick();

        expect(mockAlert).toHaveBeenCalledWith('Boas vindas')
    }) 
})