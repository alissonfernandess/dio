import { createContext } from "react"
import { IConta } from "../api"
import { login } from "../services/login"
import { changeLocalStorage } from "../services/storage"

interface ILoginContext {
    handleLogin(email: string, password: string): Promise<IConta>
}
  
export const LoginContext = createContext({} as ILoginContext)
  
export const LoginContextProvider = ({ children }: any) => {

    async function handleLogin(email: string, password: string): Promise<IConta> {
        const conta = await login(email, password)

        if(conta.id) {
            changeLocalStorage(conta)
        }

        return conta
    }
  
    return (
      <LoginContext.Provider value={{ handleLogin }}>
        { children }
      </LoginContext.Provider>
    )
}
