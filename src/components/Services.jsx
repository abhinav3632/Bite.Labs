import React from 'react'
import '../components/styles/component.css'
import logo2 from '../assets/logo2.png'
import { Gallery } from './Gallery'


export const Services = () => {
    return (
        <div>
            <div id="container">
                <div id="image">
                    <img src={logo2} id="img" />
                </div>
                <div id="info">
                    <div className="info-details">
                        <h1 id="head1">We Are More Than<br />Multiple Service</h1>
                        <p id="para1">This is a type of restraunt which typically serves food and drinks in <br />addition to light refreshment such as baked goods or snacks. The term<br />comes from rench meaning food</p>
                    </div>
                    <div id="banner">
                        <div class="frame">
                            <button class="btn">Online Order</button>
                            <button class="btn">Pre-Reservation</button>
                        </div>
                        <div class="frame">
                            <button class="btn">24/7 Service</button>
                            <button class="btn">Organised foodie place</button>
                        </div>
                        <div class="frame">
                            <button class="btn">Clean kitchen</button>
                            <button class="btn">Super Chefs</button>
                        </div>
                    </div>
                </div>
            </div>
            <Gallery />
        </div>
    )
}