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
                            <label><h4>Rut del empleado: </h4></label>
                            <br></br>
                            <h4><input placeholder='12.345.678-9' name="rut" clasname="form-control"></input></h4>
                        </FormGroup>
                        <FormGroup>
                            <label><h4>Fecha a cubrir: </h4></label>
                            <br></br>
                            <h4><input placeholder='YYYY-MM-DD' name="fecha" clasname="form-control"></input></h4>
                        </FormGroup>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <Button className="btn btn-success btn-lg">Guardar</Button>
                            <Button className="btn btn-danger btn-lg">Cancelar</Button>
                        </div>
                    </Form>
                </Row>
            </Card>
        </Container>
    )
}

export default Justificativos;