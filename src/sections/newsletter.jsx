import { Button } from "../components/button"
export const NewsLetter = () => (
    <section id="contact-us" className="flex justify-evenly items-center py-5 max-md:flex-col max-md:px-4">
        <div className="w-1/2 max-md:w-full"> 
            <h1 className="text-black text-5xl text-Palanquin font-[700] leading-snug text-left px-5 py-3 leading-12 bg-white max-sm:text-5xl max-md:px-0 ">Sign Up for
            <span className="text-red-500">Updates </span>& Newsletter </h1>
        </div>
        <div className="w-1/3 max-xl:w-1/2 max-md:w-full">
        <div className="border-solid border-2 border-gray-700 rounded-full flex items-center justify-between py-2  ">
            <input className="pl-10 bg-transparent focus:outline-none " placeholder="enter your Email" />
            <Button text={"Submit"} />
        </div>
        </div>

    </section>

)