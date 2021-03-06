import React, { Fragment } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import banner from '../../asset/svg/welcomes.svg'
import intl from 'react-intl-universal'

export default function OverView() {
  let arr = ['ETH', 'BSC', 'HECO', 'TRON', "SOL", "DOT"]
  let exchange = `Uniswap,SushiSwap,PancakeSwap,Medx,DogeSwap,KSwap,Mooniswap,Balancer,Kyber,BakerySwap,JustSwap,DODO`
  let exchangeName = ['ETH', 'ETH', 'BSC', 'HECO', 'HECO', 'OKEX', 'ETH', 'ETH', 'ETH', 'BSC', 'TRON', 'ETH,BSC']
  return (
    <Fragment>
      <div className="home">
        <div className="home-container">
          <h1>{intl.get('PoweredByTeWaka')}</h1>
          <p>{intl.get('EnablingConnectivityBetweenIslandsOfDeFi')}</p>
          <p><Link className="swap-button" style={{ width: 210 }} to="/swap" >{intl.get('StartSwapNow')}</Link></p>
          <div className="swap-button-bar">
            <a href="https://docs.classzz.com/CZZ_audit.pdf" target="_bank" className="ico-shield"><span>Audit Report (Heco/ETH)</span></a>
            <a href="https://docs.classzz.com/CZZ_audit2.0.pdf" target="_bank" className="ico-book"><span>Audit Report (BSC)</span></a>
          </div>
        </div>
        <div className="imgs" style={{backgroundImage:`url(${banner})`}}></div>
      </div>
      <div className="token">
        <div className="token-inner">
          <div  className="support">
            <h1>{intl.get('SupportChains')}</h1>
            <div className="support-container">
              {
                arr.map((item, index) => {
                  const icon = require(`../../asset/svg/${item}.svg`).default
                  return <div key={index} className={index > 2 ? 'item disable' : 'item'}>
                      <i className="img" style={{ backgroundImage: `url(${icon})` }} />
                      {item}
                    </div>
                })
              }
            </div>
          </div>
          <div className="exchange">
          <h1>{intl.get('DecentralizedExchangeList')}</h1>
          <div className="exchange-container">
            {
              exchange.split(',').map((item, index) => {
                const ico = require(`../../asset/images/${item}.png`).default
                return (
                  <div key={index} className="exchange-item">
                    <div className="exchange-item-cont">
                      <i className="img" style={{backgroundImage:`url(${ico})`}} />
                      <span>{item}</span>
                    </div>
                    <sub>{exchangeName[index].split(',').map((item, index) => <b key={ index }>{ item}</b>)}</sub>
                  </div>)
              })
            }
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  )
}
