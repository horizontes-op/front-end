import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Oportunidades.css'; // Importando o arquivo de estilo CSS
import Logo from "../images/logo.jpeg"
const Oportunidades = (props) => {
    return (
        <div class="row">
            <div class="col-12">
                <div class="card text-black" style={{ borderRadius: "25px" }}>
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                            <img src={Logo}alt="Logo" className="logo-img" />
                            <p class="text-center h3  mb-3 mt-4">Oportunidades que deram match com você</p>
                            <Row xs={1} md={2} lg={3} className="g-4">
                                {props.oportunidades.map((oportunidade, index) => {
                                    return (
                                        <Col key={index}>
                                            <Card className="oportunidade-card">
                                                <Card.Body className="oportunidade-card-body">
                                                    <Card.Title>{oportunidade.motivo}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">{oportunidade.area_atuacao}</Card.Subtitle>

                                                    <Card.Text>
                                                        <strong>Nome:</strong> {oportunidade.nome}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <strong>Missão:</strong> {oportunidade.missao}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <strong>Visão:</strong> {oportunidade.visao}
                                                    </Card.Text>

                                                    <Card.Text>
                                                        <strong>Site:</strong> {oportunidade.site}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <strong>Modalidade:</strong> {oportunidade.modalidade}
                                                    </Card.Text>

                                                    <Card.Text>
                                                        <strong>Perfil Instagram:</strong> {oportunidade.perfil_instagram}
                                                    </Card.Text>
                                                    <Button href={oportunidade.site} variant="primary"> Saiba-mais </Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Oportunidades;
