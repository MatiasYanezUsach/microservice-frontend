import React, { Component } from "react"
import JustificativoService from "../services/JustificativoService";

class ListJustificativoComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            justificativos: []
        }
        this.addJustificativo = this.addJustificativo.bind(this);
    }

    addJustificativo(){
        this.props.history.push('/justificado');
    }
}
export default ListJustificativoComponent