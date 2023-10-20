import React from 'react';
import "./header.css";

interface HeaderProps{}
interface HeaderState{}

class Header extends React.Component<HeaderProps,   HeaderState>{
    //constructor

    render(){
        return (
            <div className ='Header'>
                <p>OVO JE HEADER</p>
            </div>
        );
    }
}

export default Header;