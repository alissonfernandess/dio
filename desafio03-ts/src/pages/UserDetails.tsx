import { useEffect, useState } from "react"
import { IConta } from "../api"
import { getAllLocalStorage } from "../services/storage"

const UserDetails:React.FC = () => {

    const [conta, setConta] = useState<IConta>({} as IConta)

    useEffect(() => {
       const result =  getAllLocalStorage();

       if(result) {
        setConta(JSON.parse(result))
       }
    }, [])
    

  return (
    <div>
        <p>{conta.balance}</p>
        <p>{conta.email}</p>
        <p>{conta.id}</p>
        <p>{conta.name}</p>
    </div>
  )
}

export default UserDetails