import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { LoginContext } from "../components/LoginContext";

const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const { handleLogin } = useContext(LoginContext)
    const navigate = useNavigate()

    const validateUser = async () => {
        const conta = await handleLogin(email, password);

        if(!conta.id){
            return alert('Email inválido')
        }

        setIsLoggedIn(true)
        navigate('/conta/1')
    }
  
    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                <Center>
                    <DButton
                        onClick={() => validateUser()}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
