import { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useUser()
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { message, status } = await register({ username: email, password });
        if (status === 201) {
            return navigate('/login');
        }

        setMessage(message);
    };

    return (
        <Container>
            <h1 className='text-light'>Registro</h1>
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
                <Alert variant="danger" show={message} >
                    {message}
                </Alert>
            </Form>
        </Container>
    );
};

export default Register;