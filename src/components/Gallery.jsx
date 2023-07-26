import React from "react";
import { useGlobalContext } from "../context"
import Search from "./Search";
import '../components/styles/component.css'

export const Gallery = () => {
    const { meals, loading, selectMeal, addToFavorites,
        fetchMexican, fetchJapenese, fetchItalian,
        fetchCanadian, fetchIndian, fetchSeaFood } = useGlobalContext()

    if (loading) {
        return (
            <section className="section" >
                <div class="lds-dual-ring"></div>
            </section>
        )
    }

    const main = meals.map(singleMeal => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal

        return (
            <div class="pic">
                <img src={image} class="gallery_pic" onClick={() => selectMeal(idMeal)} />
                <h4 class="card-heading">{title}</h4>
                <div class="pricing">
                    <button onClick={() => addToFavorites(idMeal)} class="btnn">Add to Fav..</button>
                </div>
            </div>
        )
    })

    return (
        <>
            <h1 id="head2">Our Regular Menu Pack</h1>

            <div id="nav">
                <ul id="list">
                    <li onClick={fetchSeaFood} class="nav_link">Sea Foods</li>
                    <li onClick={fetchMexican} class="nav_link">Mexican</li>
                    <li onClick={fetchItalian} class="nav_link">Italian</li>
                    <li onClick={fetchJapenese} class="nav_link">Japanese</li>
                    <li onClick={fetchCanadian} class="nav_link">Canadian</li>
                    <li onClick={fetchIndian} class="nav_link">Indian</li>
                    <li class="nav_link">More itmes+</li>
                </ul>
            </div>

            <Search />

            <div class="gallery">
                {main}
            </div>

        </>
    )
}