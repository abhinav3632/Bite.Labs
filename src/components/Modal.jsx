import { useState } from "react"
import { useGlobalContext } from "../context"
import "./styles/modal.css"

const Modal = () => {
    const { selectedMeal, closeModal , loading } = useGlobalContext();
    
    if (loading) {
        return (
            <section className="section" >
                <h4>Loading...</h4>
            </section>
        )
    }
    const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal[0]
    return (
        <aside className="modal-overlay" >
            <div className="modal-container" >
                <img src={image} alt={title} className='img modal-img' />
                <div className="modal-content">
                    <h4>{title}</h4>
                    <p className="instruction_title" >Cooking Instructions</p>
                    <p className="instruction" >{text}</p>
                    <a href={source} target="_blank" >Source</a>
                    <button className=" close-btn" onClick={closeModal} >Close</button>
                </div>

            </div>
        </aside>
    )
}

export default Modal