import { arrowRight } from "../assets/icons"
export const ButtonWithIcon = () => {
    return <button className="bg-red-500 mx-5 text-white flex justify-center  items-center px-5 py-3 rounded-full hover:bg-black">Shop Now <img className="pl-3" src={arrowRight} /></button>
}
export const Button = (text) => {
    return <button className="bg-red-500 mx-5 text-white px-5 py-3 rounded-full hover:bg-black">{text.text}</button>
}
export const ButtonWhite = (text) => {
    return <button className="bg-white border-solid mx-5 border-gray-700 border-2 text-gray-500 px-5 py-3 rounded-full hover:bg-black hover:text-white">{text.text}</button>
}