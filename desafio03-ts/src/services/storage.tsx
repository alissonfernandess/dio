import { IConta } from "../api"

const conta: IConta = {}  as IConta

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('conta')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('conta', JSON.stringify(conta))
}

export const changeLocalStorage = (conta: IConta): void => {
    localStorage.setItem('conta', JSON.stringify(conta))
}
