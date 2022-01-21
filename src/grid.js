import React, { Component } from 'react'
import './grid.css'
import Scroll from './scroll.js'
export default class grid extends Component {
    render() {
        return (
            <div className='maingrid'>
                <div className='websdk'>
                    <h2 className='h2web'>Web SDK</h2>
                    <h3 className='h3tool'>next.js has all the tools you need to make web faster.</h3>

                </div>
                <div className='gridcont'>
                    <div className='flexcol'>
                        <h3>Image Optimization</h3>
                        <p> Image and Automatic Image Optimization with instant builds</p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>Internationalization</h3>
                        <p>Built-in Domain and Sub-domain Routing and Automatic Language Detection</p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>Next.js Analytics</h3>
                        <p>A True lighthouse Score based on real visitor data & page-by-page insights   </p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>Zero Config</h3>
                        <p>Automatic compilation and bundling.Optimised for the production and start.</p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>Hybrid :SSG and SSR</h3>
                        <p>Pre-render pages at built time(SSG) or request time (SSR)in a single project</p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>Incremental Static Regenration</h3>
                        <p> Add and update Statistically pre -rendered pages incrementally after built time</p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>TypeScript Support</h3>
                        <p>Automatic Typescript configuration and compilation </p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>Fast Refresh</h3>
                        <p>Fast,reliable live-editing experience as a proven at Facebook scale.</p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>File System Routing</h3>
                        <p>Every Component in the pages directory becomes the route</p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>API Routes</h3>
                        <p>Optionally create API endpoints to provide backend functionality</p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>Built-in CSS Support</h3>
                        <p>Create component-level styles with css module . Built-in sass support</p>
                        <a>Documentation →</a>
                    </div>
                    <div className='flexcol'>
                        <h3>Code-splitting and Bundling</h3>
                        <p>Optimized bundle splitting algorithm created by google chrome team.</p>
                        <a>Documentation →</a>
                    </div>
                    <div className='Addmore'>
                        <h3>And More</h3>
                        <p> Support for <a>environment variables,preview mode,custom <code>head</code> tags,automatic  polyfills,</a> and more.
                        </p>

                    </div>

                </div>
                <div className='environ'>
                <p><strong>Add more:</strong>
                    Support for <a>environment variables,preview mode,custom <code>head</code> tags,automatic  polyfills,</a> and more.
                </p>
                </div>
                <Scroll />
            </div>
        )
    }
}
