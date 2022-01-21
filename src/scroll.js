import React, { Component } from 'react'
import './scroll.css'
import Show from './showcase'
import Trulia from './trulia.svg'
import Ease from './ease.svg'
import Magic from './magicleap.svg'
import Sesame from './sesame.svg'
import Twitch from './twitch.svg'
import Netflix from './netflix.svg'
import Open from './opencollective.svg'
import Pling from './pling.svg'
import Ticket from './ticket.svg'
import Scale from './scale.svg'
import Git from './git.svg'
import Binance from './binance.svg'
import Autho from './autho.svg'
import Tencent from './tencent.svg'
import Star from './starbucks.svg'
import Docker from './docker.svg'
import Hulu from './hulu.svg'
import Coin from './coinbase.svg'
import Uber from './uber.svg'
import Invision from './vision.svg'
import Trovit from './trovit.svg'
export default class scroll extends Component {
    render() {
        return (
            <div>
                <div className='companyslider'>
                    <div className='slidercont'>
                        <marquee behaviour="scroll" direction="left" scrollamount="3">
                            <img className='scrimgs' src={Trulia} alt='trulia' />
                            <img className='scrimgs' src={Ease} alt='ease' />
                            <img className='scrimgs' src={Magic} alt='magic' />
                            <img className='scrimgs' src={Sesame} alt='sesame' />
                            <img className='scrimgs' src={Twitch} alt='twitch' />
                            <img className='scrimgs' src={Netflix} alt='netflix' />
                            <img className='scrimgs' src={Open} alt='open' />
                            <img className='scrimgs' src={Pling} alt='pling' />
                            <img className='scrimgs' src={Git} alt='git' />
                            <img className='scrimgs' src={Scale} alt='scale' />
                            <img className='scrimgs' src={Ticket} alt='ticket' />


                        </marquee>
                    </div>
                    <div className='sliderconttwo'>
                        <marquee behaviour="scroll" direction="left" scrollamount="2">
                        <img className='scrimgs' src={Binance} alt='binance'/>
                        <img className='scrimgs' src={Autho} alt='autho'/>
                        <img className='scrimgs' src={Tencent} alt='tencent'/>
                        <img className='scrimgs' src={Star} alt='starbucks'/>
                        <img className='scrimgs' src={Docker} alt='docker'/>
                        <img className='scrimgs' src={Hulu} alt='hulu'/>
                        <img className='scrimgs' src={Coin} alt='coinbase'/>
                        <img className='scrimgs' src={Uber} alt='uber'/>
                        <img className='scrimgs' src={Invision} alt='invision'/>
                        <img className='scrimgs' src={Trovit} alt='trovit'/>
                        </marquee>
                    </div>

                </div>
                <Show/>
            </div>
        )
    }
}
