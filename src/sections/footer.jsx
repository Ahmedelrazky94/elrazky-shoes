import { footerLinks , socialMedia } from "../constants";
import { footerLogo } from "../assets/images";
import { siteText } from "../constants";
export const Footer =() => (
    <section className="bg-black py-10 w-full">
        <div className="flex justify-evenly max-md:flex-col max-md:pl-8">
            <div className="w-1/4 max-md:w-full pt-3">
            <img src={footerLogo} width={"150px"}/>
            <p className="text-gray-300 py-4 font-montserra">{siteText.footertext}</p>
            <div className="flex">
            {socialMedia.map((social)=>(
                <div className="bg-white m-4 p-2 rounded-full hover:bg-gray-200">
                    <a href="#">
                    <img src={social.src} />
                    </a>
                </div>
            ))}
            </div>

            </div>
            {footerLinks.map((footer)=>(
                <div>
                    
                    <h3 className="text-white text-xl pt-3 font-Palanquin">{footer.title}</h3>
                    <div className="flex-col py-3">
                    {footer.links.map((link)=>(
                        <a className="text-gray-300 block font-montserrat" href="#">{link.name}</a>
                    ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="bg-black text-center ">
            <p className="text-gray-200 font-montserrat pt-5">copyright © by <a href="https://ahmedelrazky.web.app/">Ahmed Elrazky</a></p>
        </div>
    </section>
)