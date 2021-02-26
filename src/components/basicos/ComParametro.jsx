import { useReducer } from "react";

import React from 'react';

export default props => {
    const status = props.nota >= 7 ? 'Arovado' : 'Recuperação';
    return (
        <div>
            <h2> {props.titulo} </h2>
            <p>
                <strong> {props.aluno} </strong>
                tem nota
                <strong> {props.nota} </strong>
                e está
                <strong> {status} </strong>!
            </p>
        </div>
    );
};