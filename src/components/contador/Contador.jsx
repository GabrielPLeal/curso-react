import './Contador.css';
import React, { Component } from 'react';

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };

    dec() {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    };

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value,
        });
    };

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input type="number" id="passoInput" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={_ => this.inc()}>+</button>
                <button onClick={_ => this.dec()}>-</button>
            </div>
        );
    };
};

export default Contador