import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Gabriel" idade={20} nerd={true} />
            <DiretaFilho nome="João" idade={25} nerd={false} />
        </div>
    )
}