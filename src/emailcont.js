import React, { Component } from 'react'
import Learn from './learn.png'
import './emailcont.css'
import Mail from './mail.svg'
import Footer from './footer'
export default class emailcont extends Component {
    render() {
        return (
            <div className='maincontainer'>
                <div>
                    <h2 className='nexth2'>Learn Next.js</h2>
                    <h3 className='nexth3'>Learn Next.js step-by-step and earn points ✨.</h3>
                </div>
                <img className='learnpng' src={Learn} alt='learnpng' />
                <div className='getbtn'>
                    <a className='getstrtbtn'>Get Started</a>
                </div>
                <div>
                    <div className='content'>
                        <div>
                            <h2 className='getting'>Next.js is getting better every day — don’t miss out on all the action.</h2>
                            <h3 className='news'>Join the Next.js newsletter and stay updated on new releases and features, guides, and case studies.</h3>
                        </div>
                        <div className='maillcont'>
                            <label for='email' className='labelemail'>
                                <span className='mailicon'>
                                    <img className='emailpo' src={Mail} alt='mail' />
                                </span>
                                <div>
                                <form>
                                    <input className='inemail' type='email' id='email' placeholder='you@domain.com'></input>

                                </form>
                                </div>
                            </label>
                            <button type='submit' value='submit'  id='submit' className='submitbtn'>Subscribe</button>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
