import React, { Component } from 'react'
import './showcase.css'
import Emailcont from './emailcont'
import Hulu from './hulu.svg'
import Showhulu from './showcasehulu.jpg'
import Githubimg from './githubimg.jpg'
import Nike from './nike.jpg'
import Realtor from './realtor.jpg'
import Att from './att.jpg'
import Twitch from './twitch.jpg'
import Netflix from './netflixjob.jpg'
export default class showcase extends Component {
    render() {
        return (
            <div className='readcase'>
                <div className='casestudy'>
                    <div className='slidewrap'>
                        <div className='content'>
                            <img className='huluimage' src={Hulu} alt='hulu' />
                            <a className='case'>Read Case Study</a>
                        </div>
                    </div>
                </div>
                <div className='anchor'>
                    <h2 className='usingh2'>Who's Using Next.js</h2>
                    <h3 className='honor'>We're honored some  of the most talented creative out there built with Next.js</h3>
                </div>
                <div className='divclasscont'>
                    <div className='imgcont'>
                        <img className='image1' src={Netflix} alt='netflixjob' />
                        <img className='image2' src={Twitch} alt='twitch' />

                        <img className='image3' src={Githubimg} alt='githubimg' />
                        <img className='image4' src={Showhulu} alt='showhulu' />
                        <img className='image5' src={Nike} alt='nike' />
                        <img className='image6' src={Realtor} alt='realtor' />
                        <img className='image7' src={Att} alt='att' />
                    </div>
                </div>
                <div className='imgcontmob'>
                    <img className='imageshow'  src={Netflix} alt='netflixjob' />
                    <img className='imageshow' src={Twitch} alt='twitch' />

                    <img className='imageshow' src={Githubimg} alt='githubimg' />
                    <img className='imageshow1' src={Showhulu} alt='showhulu' />
                    <img className='imageshow2' src={Nike} alt='nike' />
                    <img className='imageshow3' src={Realtor} alt='realtor' />
                    <img className='imageshowgri' src={Att} alt='att' />
                </div>
                <a className='showcasebtn'>View showcase</a>
                <Emailcont />
            </div>
        )
    }
}
