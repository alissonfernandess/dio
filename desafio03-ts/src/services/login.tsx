import { api, IConta } from "../api"

export const login = async (email: string, senha: string): Promise<IConta> => {
    const data = await api

    if(email !== data.email || senha !== data.password ) {
        return {} as IConta
    } 
    

    return data
}
