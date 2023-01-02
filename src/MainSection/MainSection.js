import React from 'react'
import './MainSection.css';

export default function MainSection() {
	return (
		<div className='main-section'>
			<div className='main-image'>
				<picture>
				  <source media="(max-width: 749px)" srcset="assets/images/image-web-3-mobile.jpg" />
				  <source media="(min-width: 750px)" srcset="assets/images/image-web-3-desktop.jpg" />
				  <img style={
				  	{
						display: 'block',
						maxWidth: "100%"

					}} src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
				</picture>

			</div>

			<div className='main-wrapper'>
				<div className='main-title'>
					The Bright Future of Web 3.0?
				</div>

				<div className='main-description'>
					We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
					But is it really fulfilling its promise?
				
					<div className='main-more'>
						READ MORE
					</div>
				</div>
			</div>
        </div>
	)
}