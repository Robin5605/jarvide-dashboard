import { useState } from "react";

interface INavbarButtonProps {
    text: string,
    selected: string;
    onSelected: Function
}

const NavbarButton = ({ text, selected, onSelected }: INavbarButtonProps) => {

    const onClickHandler = () => {
        onSelected(text);
    }

    if(selected === text) {
        return (
            <div onClick={onClickHandler} className="flex justify-center items-center w-24 bg-dark-700 duration-150">
                <a className="flex text-gray-300 font-sans font-bold" href="#">{ text }</a>
            </div>
        );
    } else {
        return (
            <div onClick={onClickHandler} className="flex justify-center items-center w-24 hover:bg-black duration-150">
                <a className="flex text-gray-300 font-sans font-bold" href="#">{ text }</a>
            </div>
        );
    }
    
}

const Navbar = () => {
    const [selected, setSelected] = useState('HOME');
    return (
        <div className="flex flex-row fixed justify-center w-screen h-16 bg-dark-800 shadow-xl">
            <NavbarButton selected={selected} onSelected={setSelected} text="HOME"/>
            <NavbarButton selected={selected} onSelected={setSelected} text="ABOUT"/>
            <NavbarButton selected={selected} onSelected={setSelected} text="CONTACT"/>
            <NavbarButton selected={selected} onSelected={setSelected} text="FEATURES"/>
        </div>
    );
}

export default Navbar;