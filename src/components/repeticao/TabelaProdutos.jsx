import './TabelaProdutos.css';
import React from 'react';
import produtos from '../../data/produtos';

export default props => {
    const linhas = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 == 0 ? 'par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        );
    })

    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas}
                </tbody>
            </table>
        </div>
    );
};