import React from 'react'
import './SideSection.css';

export default function SideSection() {
	return (
		<div className='side-section'>
			<h1 style={{color: 'hsl(35, 77%, 62%)'}}>New</h1> 
			<h1 className='side-title'>
				Hydrogen VS Electric Cars
			</h1>
			<div className='side-description'>
				Will hydrogen-fueled cars ever catch up to EVs?
			</div>
			<br/>
			<hr/>
			<br/>

			<h1 className='side-title'>
				The Downsides of AI Artistry
			</h1>
			<div className='side-description'>
				What are the possible adverse effects of on-demand AI image generation?
			</div>
			<br/>
			<hr/>
			<br/>

			<h1 className='side-title'>
				Is VC Funding Drying Up?
			</h1>
			<div className='side-description'>
				Private funding by VC firms is down 50% YOY. We take a look at what that means.
			</div>
        </div>
	)
}