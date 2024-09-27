import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useUser } from '../context/UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, user: usuario } = useUser()

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn({ username: email, password });
    };

    return (
        <Container>
            <h1 className='text-light'>Iniciar sesión</h1>
            {!usuario ? (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Iniciar sesión
                    </Button>
                </Form>) : (
                <h1>Bienvenido {usuario.email}</h1>
            )}
        </Container>
    );
};

export default Login;