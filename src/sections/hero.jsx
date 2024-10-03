import { siteText } from "../constants";
import { ButtonWithIcon } from "../components/button";
import { Stat } from "../components/statics";
import { useState } from "react";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import { ShoeCard } from "../components/shoecard";

export const Hero = () => {
    const [currentShoeImg, changeShoeImg] = useState(bigShoe1);
    return (
        <section id="home">
            <div className="text-center flex max-xl:flex-col">
                <div className="w-1/2 pl-8 text-xl font-normal max-xl:w-full max-md:pl-4">
                    <h2 className="text-red-500 text-left px-5 pt-[100px] pb-4 text-Montserrat">{siteText.subHeading}</h2>
                    <h1 className="text-black text-8xl text-Palanquin font-[700] text-left px-5 py-5 bg-white max-sm:text-7xl">The New Arrival<br />
                        <span className="text-red-500"> Elrazky </span>shoes</h1>
                    <p className="text-montserrat text-gray-600 py-8 px-5 text-left">{siteText.describtion}</p>
                    <ButtonWithIcon />
                    <Stat  />
                </div>
                <div className="w-1/2 bg-sky-100 max-xl:w-full">
                    <img  src={currentShoeImg} className="pt-10" />
                    <ShoeCard  currentShoeImg={currentShoeImg} changeShoeImg={changeShoeImg} />


                </div>
            </div>

        </section>
    )


}