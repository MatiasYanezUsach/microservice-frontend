import { Container, Row, Col, Card} from 'react-bootstrap';

const Marcas = () => {

    return (
        <Container style={{ marginTop: '70px' }}>
            <Card className='text-center'>
                <Row>
                    <Col><h1>Marcas de reloj</h1><br></br> </Col>
                </Row>
                <div class="card-body p-4 text-center">
                    <h3>Cargar Datos</h3><br></br>
                    <form>
                        <input type="file" class="form-control" name="archivos" /><br></br>
                        <h5><input type="submit" value="Cargar" /></h5>
                    </form>
                </div>
            </Card>
        </Container>
    );
};

export default Marcas;