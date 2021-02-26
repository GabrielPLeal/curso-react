import "./App.css";
import React from 'react';

import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


export default _ => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#10 - Comunicação Indireta" color="#CD853F">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#DB7093">
                <DiretaPai></DiretaPai>
            </Card>
            
            <Card titulo="#08 - Renderização Condicional" color="#8B4513">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{ email: 'fer@gmail.com' }} />
                <UsuarioInfo usuario={{}} />
                <UsuarioInfo />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#6495ED">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            
            <Card titulo="#05 - Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio
                    min={1}
                    max={60}
                />
            </Card>

            <Card titulo="#03 - Fragmento" color="#EA4C6F"> 
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva" nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>
);