import React from 'react'
import '../components/styles/footer.css'


export const Footer = () => {
  return (
    <footer class="footer">
        <div class="container1">
            <div class="row1">
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>services</h4>
                    <ul>
                        <li><a href="#">Online Orders</a></li>
                        <li><a href="#">Pre-Reservation</a></li>
                        <li><a href="#">24/7</a></li>
                        <li><a href="#">Foodie Place</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>quick links</h4>
                    <ul>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">reviews</a></li>
                        <li><a href="#">blogs</a></li>
                        <li><a href="#">reserve table</a></li>
                        <li><a href="#">order foods</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>about</h4>
                    <ul>
                        <li><a href="#">our story</a></li>
                        <li><a href="#">benifits</a></li>
                        <li><a href="#">career</a></li>
                        <li><a href="#">our chefs</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>help</h4>
                    <ul>
                        <li><a href="#">contact</a></li>
                        <li><a href="#">support</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
   </footer>

  )
}
