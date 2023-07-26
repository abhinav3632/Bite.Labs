import React from 'react'
import HeroImage from '../assets/HeroImg.png'
import '../App.css'

export const AboutUs = () => {
    return (
        <section class="hero-section">
        <div class="hero_bg">
            <div class="hero_container">
                <div class="col_1">
                    <div>
                        <h2 class="hero_heading">We Serve the Taste You Love &#128523;</h2>
                    </div>
                    <div>
                        <p class="hero_para"> This is a type of restaurant which typically serves food
                                and drinks. In addition to light refreshments such as baked goods
                                or snacks. The term comes from the french word meaning food.
                        </p>
                    </div>
                    <div class="btn-buttons">
                    <button class="reserve">Explore Food</button>
                    <button class="search">Search</button>
                    </div> 
                </div>
                <div class="col_2">
                    <img class="banner_img" src={HeroImage} alt=""/>
                </div> 
            </div>
        </div>
    </section>
    )
}
