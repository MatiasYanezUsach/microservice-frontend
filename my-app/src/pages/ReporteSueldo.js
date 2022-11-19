import { Container, Row, Table, FormGroup, Col, Card, Button } from 'react-bootstrap';

const ReporteSueldo = () => {

    return (
        <Container style={{ marginTop: '70px' }}>
            <Card className='text-center'>
                <Row>
                    <Col><h1>Planilla de sueldos</h1><br></br> </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="btn btn-success btn-lg" variant="success">
                            Generar la planilla
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped className="mt-4">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Rut</th>
                                    <th>Nombre</th>
                                    <th>Categoria</th>
                                    <th>Años de servicio</th>
                                    <th>Sueldo Fijo mensual</th>
                                    <th>Bonificacion por años de servicio</th>
                                    <th>Monto por horas extras</th>
                                    <th>Monto descuentos</th>
                                    <th>Sueldo bruto</th>
                                    <th>Monto por cotizacion previsional</th>
                                    <th>Monto por cotizacion salud</th>
                                    <th>Monto sueldo final</th>
                                </tr>
                            </thead>
                        </Table>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default ReporteSueldo;