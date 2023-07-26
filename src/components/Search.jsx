import {useState} from 'react'
import { useGlobalContext } from '../context'
import "./styles/search.css"


const Search = () => {

    const [text , setText] = useState('')
    const {setSearchTerm , fetchRandomMeal} = useGlobalContext()


    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text){
            setSearchTerm(text);
            // setText('');
        }
    }

    const handleRandomMeal = () =>{
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }

    return(
        <header className='search-container' >
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='type favourite meal' className='form-input' value={text} onChange={handleChange} />
                <button type="submit" className="btn ">Search</button>
                <button type='button' className="btn btn-hipster" onClick={handleRandomMeal} >Surprise me!</button>
            </form>
        </header>
    )
}

export default Search