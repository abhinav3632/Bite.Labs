import React from 'react'
import MobileImg from '../assets/mobile.jpg'
import '../components/styles/mobile.css'


export const Mobile = () => {
  return (
    <section class="download_app">
        <div class="download_bg">
            <div class="download_container">
                <div class="div_1">
                    <div>
                        <h2 class="download_heading">Never Feel Hungry! <br/> Download Our Mobile App <br/> Enjoy Delicous Foods</h2>
                    </div>
                    <div>
                        <p class="download_para">Make online reservations, read resturants reviews from diners, and earn <br/> points towards free meals. OpenTable is a real-time online reservation.</p>
                    </div>
                    <div class="btn-buttons">
                        <button class="button_apple"><i class="fa-brands fa-apple"></i>Apple Store</button>
                        <button class="button_google_play"><i class="fa-brands fa-google-play"></i>Google Play</button>
                    </div> 
                </div>
                <div class="div_2">
                    <img class="image_mobile" src={MobileImg} alt=""/>
                </div> 
            </div>
        </div>
    </section>
  )
}
