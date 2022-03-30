import React from "react";
import './header.css'

const Header = () => {

    return (
        <div className="header">
            <h1>karl kust</h1>
            
            <form>
                <input type="text" className="form-control" placeholder="название песни..." />
                <button type="submit" className="btn btn-primary">Найти</button>
            </form>
        </div>
    )
}

export default Header
