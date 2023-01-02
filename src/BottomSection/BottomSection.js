import React from 'react'
import './BottomSection.css';

export default function BottomSection() {
	return (
		<div className='bottom-section'>
            <div className='bottom-news'>
                <div className='bottom-news-image'><img src='assets/images/image-retro-pcs.jpg' /></div>
                <div className='bottom-news-wrapper'>
                    <div className='bottom-news-number'>
                        01
                    </div>
                    <div className='bottom-news-title'>
                        Reviving Retro PCs
                    </div>
                    <div className='bottom-news-description'>
                        What happens when old PCs are given modern upgrades?
                    </div>
                </div>
            </div>
            
            <div className='bottom-news'>
                <div className='bottom-news-image'><img src='assets/images/image-top-laptops.jpg' /></div>
                <div className='bottom-news-wrapper'>
                    <div className='bottom-news-number'>
                        02
                    </div>
                    <div className='bottom-news-title'>
                        Top 10 Laptops of 2022
                    </div>
                    <div className='bottom-news-description'>
                        Our best picks for various needs and budgets.
                    </div>
                </div>
            </div>

            <div className='bottom-news'>
                <div className='bottom-news-image'><img src='assets/images/image-gaming-growth.jpg' /></div>
                <div className='bottom-news-wrapper'>
                    <div className='bottom-news-number'>
                        03
                    </div>
                    <div className='bottom-news-title'>
                        The Growth of Gaming
                    </div>
                    <div className='bottom-news-description'>
                        How the pandemic has sparked fresh opportunities.
                    </div>
                </div>
            </div>
        </div>
	)
}