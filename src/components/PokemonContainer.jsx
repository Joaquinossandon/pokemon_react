import { Col, Container, Row } from "react-bootstrap"
import PropTypes from 'prop-types'

const PokemonContainer = ({ children }) => {
    return (
        <Container className="mt-3">
            <Row className="g-3" xs={1} md={2} lg={3} xl={4}>
                {children.map((child, index) => {
                    return (<Col key={`pokemonCard-${index}`}>
                        {child}
                    </Col>)
                })}
            </Row>
        </Container>
    )
}

PokemonContainer.propTypes = {
    children: PropTypes.array
}

export default PokemonContainer