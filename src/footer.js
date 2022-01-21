import React, { Component } from 'react'
import './footer.css'
import Ver from './verc.svg'
export default class footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className='maingriddiv'>
                        <div className='general'>
                        <h4 className='head4' >General resources</h4>
                        <a className='anchor'>Docs</a>
                        <a className='anchor'>Learn</a>
                        <a className='anchor'>Showcase</a>
                        <a className='anchor'>Blog</a>
                        <a className='anchor'>Analytics</a>
                        <a className='anchor'>Next.js Conf</a>
                        <a className='anchor'>Live</a>
                        </div>
                        <div className='more'>
                        <h4 className='head4'>More</h4>
                        <a className='anchor'>Commerce</a>
                        <a className='anchor'>Contact Sales</a>
                        <a className='anchor'>GitHub</a>
                        <a className='anchor'>Releases</a>
                        <a className='anchor'>Telemetry</a>

                        </div>
                        <div className='about'>
                        <h4 className='head4'>About Vercel</h4>
                        <a className='anchor'>Open Source Software</a>
                        <a className='anchor'>GitHub</a>
                        <a className='anchor'>Twitter</a>
                        </div>
                        <div className='legal'>
                        <h4 className='head4'>Legal</h4>
                        <a className='anchor'>Privacy Policy</a>
                        </div>
                    </div>
                    <div className='copyrights'>
                        <img className='vercelimg' src={Ver} alt='vercel'/>
                        <p className='rights'>Copyright © 2022 Vercel , Inc. All  rights reserved</p>
                    </div>
                </footer>
            </div>
        )
    }
}
