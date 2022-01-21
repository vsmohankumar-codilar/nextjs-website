import React, { Component } from 'react'
import Grid from './grid.js'
import Logo from './image.svg'
import './nextjsmain.css'
import Next from './Nextjs Logo.svg'
import Git from './github.svg'
import showcase from './showcase.js'
export default class nextjsmain extends Component {
    constructor(props){
        super(props);
        this.state=
        {
            isToggleon: false
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        // this.setState(prevState => ({
        //   isToggleOn: !prevState.isToggleOn
          
        // }));
        this.setState({isToggleon:!this.state.isToggleon})
      }
    
    render() {
        console.log(this.state);
        return (
            <>

                <div>

                    <div className='headermain'>
                        <div className='headercont'>
                            <img className='vercellogo' src={Logo} alt="logo" />
                            <p className='paragraph'>Deploy <span className='nextp'>Next.js</span> in seconds → </p>
                        </div>

                    </div>
                    <header className='nav'>
                        {/* <div className='sticky'> */}
                        <div className='logoflex'>
                            <img className='nextlogo' src={Next} alt='nextlogo' />
                            <a className='learnbut'>Learn</a>
                           
                            )
                            <div class="container" onClick={this.handleClick}>
                                {/* <div className={this.state.isToggleon? 'showcase':'showtog'}></div> */}
                                {/* className={this.state.isToggleon ? 'showcase' : 'showtog'} */}
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                            </div>
                            
                        </div>
                        <div className='showcase'>
                            <img className='next' src={Next} alt='nextlogo' />
                            <a className='showcase'>Showcase</a>
                            <a className='showcase'>Docs</a>
                            <a className='showcase'>Blog</a>
                            <a className='showcase'>Analytics</a>
                            <a className='showcase'>Examples</a>
                            <a className='showcase'>Enterprise</a>
                            <a className='learn'>Learn</a>
                            <img className='Git' src={Git} alt="github logo" />
                        </div>
                        
                        <div className={this.state.isToggleon? ('showtog'):('showtog shown ')}>
                            <img className='next' src={Next} alt='nextlogo' />
                            <a className='showtop'>Showcase</a>
                            <a className='showtop'>Docs</a>
                            <a className='showtop'>Blog</a>
                            <a className='showtop'>Analytics</a>
                            <a className='showtop'>Examples</a>
                            <a className='showtop'>Enterprise</a>
                            <a className='learn'>Learn</a>
                            {/* <img className='Git' src={Git} alt="github logo" /> */}
                        </div>
                        {/* </div> */}
                    </header>
                    <div className='confkey'>
                        <span className='newbut'>NEW</span>
                        <div className='compi'> Rust Compiler, Middleware, Edge Functions, Checks, and more!
                        </div>
                        <span className='highlighttext'>Watch the latest Next.js Conf Keynote →</span>

                    </div>
                    <div className='maintext'>
                        <div className='introcont'>
                            <h1 className='frame'>
                                The React Framework for Production
                            </h1>
                            <h3 className='prefetch'>
                                Next.js gives you the best developer experience with all the features you need for production:
                                hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
                                no config needed
                            </h3>
                        </div>
                    </div>
                    <div className='butcont'>
                        <div className='buttfirst'>
                            <a className='startlearning'>Start Learning</a>
                        </div>
                        <div className='buttsecond'>
                            <a className='documentation'>Documentation</a>
                        </div>
                    </div>
                    <div className='licencecont'>
                        <span className='licence'>
                            License:MIT
                        </span>
                        <div className='gitcont'>
                            <a className='git'>GitHub</a>
                        </div>
                    </div>

                    <Grid />
                </div>
            </>
        )
    }
}
