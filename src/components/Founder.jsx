import React from 'react'
import chef from '../assets/11.jpg'
import '../App.css'

export const Founder = () => {
    return (
    <section class="chef_container">
        <div>
            <h2 class="chef_heading">Meet Our Chefs</h2>
        </div>
        <div>
            <div class="cards_container">
                <div class="cards">
                    <img class="card-img" src={chef} alt="" />
                    <div></div>
                    <h2 class="cards_name">Ester Howard</h2>
                </div>
                <div class="cards">
                    <img class="card-img" src={chef} alt="" />
                    <div></div>
                    <h2 class="cards_name">Ester Howard</h2>
                </div>
                <div class="cards">
                    <img class="card-img" src={chef} alt="" />
                    <div></div>
                    <h2 class="cards_name">Ester Howard</h2>
                </div>
                <div class="cards">
                    <img class="card-img" src={chef} alt="" />
                    <div></div>
                    <h2 class="cards_name">Ester Howard</h2>
                </div>
            </div>
        </div>
    </section>
    )
}
