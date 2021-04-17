import React, { useEffect } from 'react'
import useGlobal from '../../hooks/useGlobal'
import useBalance from '../../hooks/useBalance'
import SwapSelect from './SwapSelect'
import styled from 'styled-components'

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`)
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const AmountInput = styled.input``

export default function SwapItem({ pool, exchange, type}) {
  const { from, setState } = useGlobal()
  const {  balance } = useBalance(pool)

  const enforcer = (nextUserInput) => {
    if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
      valChange(nextUserInput)
    }
  }

  const valChange = tokenValue => {
    setState({from:{...from,tokenValue}})
  }

  return (
    <div className="swap-item">
      <div className="f-c-sb swap-head">
        <div className="swap-info">{`${type === 0 ? 'From':'To'} ${pool.networkType ? pool.networkType : ''}`}</div>
        <div className="f-c swap-info">
        Balance:{balance} {exchange}
        </div>
      </div>
      <div className="swap-block f-c">
        <div className="swap-init f-1">
          <AmountInput placeholder="0.0"
            value={ pool?.tokenValue }
            className={`swap-input ${pool?.tokenValue?.length > 11 ? 'max' : ''}`}
            onChange={e => enforcer(e.target.value.replace(/,/g, '.'))}
            disabled={ type ===1 }
            inputMode="decimal"
            title="Token Amount"
            autoComplete="off"
            autoCorrect="off"
            type="text"
            pattern="^[0-9]*[.,]?[0-9]*$"
            minLength={1}
            maxLength={79}
            spellCheck="false"/>
        </div>
        <SwapSelect types={type} pool={pool} />
      </div>
    </div>
  )
}
