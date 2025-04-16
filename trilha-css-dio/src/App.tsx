import { Box, Button, Container, Link, Typography } from '@mui/material';
import Banner from './assets/images/banner.png';
import Logo from './assets/images/logo.png';
import Professional from './assets/images/professional.png';
import Dio from './assets/images/diologo.png';
import { ButtonModulo } from './components/ButtonModulo/ButtonModulo';

function App() {
  return (
    <Container>
      <Box
        component="header"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0.2) 25%,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0.2) 75%,
              rgba(0, 0, 0, 0.8) 100%
            ),
            url(${Banner})
          `,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderBottom: '1px solid #33A8DB80',
          height: 600,
          position: 'relative',
          color: '#fff',
        }}
      >
        <Box color="white" width={600} margin="auto" textAlign="center">
          <Box
            component="img"
            src={Logo}
            title="Logotipo Trilha de CSS DIO"
            alt="Logotipo Trilha de CSS DIO"
          />
          <Typography
            sx={{
              fontSize: '2.5rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              background: '-webkit-linear-gradient(#33A8DB, #1472B7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Trilha de CSS da DIO
          </Typography>
          <Typography fontSize="1.25rem" margin="16px 0 24px">
            A nova Trilha de CSS da DIO está disponível. Acesse já e aprenda do
            zero como desenvolver sites profissionais.
          </Typography>
          <Button variant="outlined">QUERO ME INSCREVER</Button>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        height={533}
        width={792}
        textAlign="center"
        alignItems="center"
        margin="auto"
        justifyContent="center"
        gap={3}
      >
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: '19%',
            textTransform: 'uppercase',
            color: '#33A8DB',
          }}
        >
          O QUE VOU APRENDER?
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: '19%',
            color: '#FFFFFF',
          }}
        >
          Temos 3 módulos recheados de conteúdos do básico ao avançado para que
          você aprenda a desenvolver sites profissionais utilizando somente HTML
          e CSS: sem nenhuma biblioteca ou framework a mais.
        </Typography>
        <ButtonModulo>QUERO ME INSCREVER</ButtonModulo>
        <ButtonModulo>QUERO ME INSCREVER</ButtonModulo>
        <ButtonModulo>QUERO ME INSCREVER</ButtonModulo>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        sx={{
          height: 363,
          borderTop: '1px solid #33A8DB80',
          borderBottom: '1px solid #33A8DB80',
        }}
      >
        <Typography
          fontSize="2.5rem"
          fontWeight={900}
          textTransform="lowercase"
          maxWidth={250}
          marginLeft={24.75}
          sx={{ textShadow: '3px 2px #33A8DB' }}
        >
          TRANSFORME O MUNDO COM A GENTE
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={6}
        borderBottom="1px solid #33A8DB80"
      >
        <Typography
          fontSize="2rem"
          fontWeight="bold"
          letterSpacing={'4px'}
          textTransform="uppercase"
          marginBottom={4}
          color="#33A8DB"
          textAlign="center"
          maxWidth={746}
        >
          EVOLUA E ENCARE NOVOS DESAFIOS PROFISSIONAIS
        </Typography>
        <Box
          component="img"
          src={Professional}
          title="Homem lendo depoimentos em um tablet"
          alt="Homem lendo depoimentos em um tablet"
        />
        <Typography
          fontSize={16}
          fontWeight={400}
          marginBottom={4}
          color="#FFFFFF"
          textAlign="center"
          maxWidth={746}
        >
          Junte-se ao nosso ecossistema e transforme o mundo com a gente! Todos
          os dias dezenas de empresas acessam a nossa plataforma em busca dos
          talentos mais criativos, dinâmicos e colaborativos, além do
          conhecimento técnico. A nossa missão é te preparar para que você
          conecte-se com as melhores oportunidades.
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={170}
        gap={2}
      >
        <Box
          component="img"
          src={Dio}
          width={300}
          title="Logotipo DIO com o texto make the change"
          alt="Logotipo DIO com o texto make the change"
        />

        <Link href="https://dio.me" underline="none" color="#FFFFFF">
          Acesse{' '}
          <Typography component="span" color="#33A8DB">
            dio.me
          </Typography>{' '}
          e se cadastre agora
        </Link>
      </Box>
    </Container>
  );
}

export default App;
