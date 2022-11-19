import React, { Component } from "react"
import JustificativoService from "../services/JustificativoService";

class PostJustificativoComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id_justificativo: this.props.match.params.id,
            fecha_cubridora: '',
            rut_empleado: ''
        }
        this.changeFechaCubridoraHandler = this.changeFechaCubridoraHandler.bind(this);
        this.changeRutEmpleadoHandler = this.changeRutEmpleadoHandler.bind(this);
        this.saveJustificativo = this.saveJustificativo.bind(this);
    }

    saveJustificativo = (e) => {
        e.preventDefault();
        let justificativo = {fecha_cubridora: this.state.fecha_cubridora,
                             rut_empleado: this.state.rut_empleado};
        
        JustificativoService.createJustificativo(justificativo).then(res =>{
            this.props.history.push('/justificativos');
        });
    }

    changeFechaCubridoraHandler= (event) => {
        this.setState({fecha_cubridora: event.target.value});
    }

    changeRutEmpleadoHandler= (event) => {
        this.setState({rut_empleado: event.target.value});
    }

    cancel(){
        this.props.history.push('/justificativos');
    }

    render(){
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Subir Justificativo</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Fecha que cubre el justificativo: </label>
                                            <input placeholder="YYYY-MM-DD" name="fecha" className="form-control"
                                                value={this.state.fecha_cubridora} onChange={this.changeFechaCubridoraHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Rut del empleado: </label>
                                            <input placeholder="12.345.678-6" name="rut" className="form-control"
                                                value={this.state.rut_empleado} onChange={this.changeRutEmpleadoHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveJustificativo}>Subir</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostJustificativoComponent
