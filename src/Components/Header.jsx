import '../Styles/Header.css'
import Serach from '../resources/Search.svg'

export function Header({ handleSearch, handleInput }) {
    return(
        <header className="header">
            <form className="form-container" onSubmit={ handleSearch }>
                <img src={Serach} alt="Search Icon" />
                <input className='search-bar' type="text" placeholder="username" onInput={ handleInput }/>
            </form>
        </header>
    )
}