import { offer } from "../assets/images";
import { siteText} from "../constants";
import { ButtonWithIcon , ButtonWhite } from "../components/button";
export const SpecialOffer =() => (
    <section className="px-10 py-20">  
    <div className="text-center items-center flex max-xl:flex-col">
    <div>
<img src={offer} />
    </div>     
                <div className="w-1/2 pl-8 text-xl font-normal max-xl:w-full max-xl:pl-0">
                    <h1 className="text-black text-6xl text-Palanquin font-[700] text-left px-5 py-3 leading-12 bg-white max-sm:text-5xl max-md:px-0">
                        <span className="text-red-500"> Special </span>Offer</h1>
                    <p className="text-montserrat text-gray-600 py-8 px-5 text-left max-md:px-0">{siteText.specialoffer}</p>
                    <div className="flex max-sm:flex-col max-sm:gap-y-4 max-sm:w-4/7">
                    <ButtonWithIcon />
                    <ButtonWhite text={"Learn More"} />
                    </div>

                </div>

            </div>
    </section>
    
)