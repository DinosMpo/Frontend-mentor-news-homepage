import React from 'react'
import './MobileMenu.css';

export default function MobileMenu({isOpen, setIsOpen}) {
	if(isOpen) {
		// alert(41);
	}
	return isOpen ?
		(
			<div className='black-screen'>	
				<div id='mobile-menu'>
					<div id='close-menu'>
						<svg onClick={() => setIsOpen(false)} width="32" height="31" xmlns="http://www.w3.org/2000/svg">
						<g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/>
						<path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
					</div>
					<ul>
						<li>Home</li>
						<li>New</li>
						<li>Popular</li>
						<li>Trending</li>
						<li>Categories</li>
					</ul>
				</div>
			</div>
		)
	:
		(
			<div></div>
		)
}