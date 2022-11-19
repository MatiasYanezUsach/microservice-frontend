import { Container, Row, Form, FormGroup, Col, Card, Button } from 'react-bootstrap';

const Justificativos = () => {

    return (
        <Container style={{ marginTop: '70px' }}>
            <Card className='text-center'>
                <Row>
                    <Col><h1>Subir un justificativo</h1><br></br> </Col>
                </Row>
                <Row>
                    <Form className='text-center'>
                        <FormGroup>
                            <label><h5>Rut del empleado: </h5></label>
                            <br></br>
                            <h5><input placeholder='12.345.678-9' name="rut" clasname="form-control"></input></h5>
                        </FormGroup>
                        <FormGroup>
                            <label><h5>Fecha a cubrir: </h5></label>
                            <br></br>
                            <h5><input placeholder='YYYY-MM-DD' name="fecha" clasname="form-control"></input></h5>
                        </FormGroup>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <Button className="btn btn-success btn-default">Guardar</Button>
                            <Button className="btn btn-danger btn-default">Cancelar</Button>
                        </div>
                    </Form>
                </Row>
            </Card>
        </Container>
    )
}

export default Justificativos;