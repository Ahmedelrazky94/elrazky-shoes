import {headerLogo} from "../assets/images";
import {navLinks} from "../constants";
import {hamburger} from "../assets/icons";

const ListMenu = () => (
    
    <>
 {navLinks.map( (navLink) => (
<a key={navLink.label} className="font-Palanquin text-gray-600 px-8 text-xl font-Montserrat hover:text-red-400" href={navLink.href}>{navLink.label}</a>
 ))}
</>

) 
export const Nav = () =>(
<header className="w-full flex items-center	 justify-between px-12 absolute">
    <a href="#"><img className="px-4 py-8 max-sm:px-0 w-48" src={headerLogo} /></a>

    <nav className="w-full text-center" >
        <div  className="md:block hidden">
        <ListMenu />
        </div>
       <div className=" text-right float-right">
       <img className="md:hidden block" src={hamburger} width={"20px"} />
       </div>
    </nav>

</header>)

