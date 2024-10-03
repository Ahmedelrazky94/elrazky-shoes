import { siteText } from "../constants";
import { reviews } from "../constants";
import { star } from "../assets/icons";
export const Customer = () => (
    <div className="bg-gray-200 py-20 text-center flex justify-center ">
        <div className="max-w-4xl flex-col  ">
        <h1 className="text-black text-5xl text-Palanquin font-[700] text-center px-5 py-3 leading-12  max-sm:text-5xl max-md:px-0">What Our
            <span className="text-red-500"> Customers </span>Say?</h1>
            <p className="text-xl text-gray-700 text-Palanquin text-center">{siteText.customersaydescribtion}</p>
            <div className="flex  gap-x-24 py-10 w-full max-md:flex-col px-4">
            {
                reviews.map((review)=>(
                    <div className="flex-col justify-center items-center align-middle">
                        <div className="text-center flex justify-center"><img src={review.imgURL} className="rounded-full w-24 py-3" />

                             </div>
                    <p className="py-3 max-w-2xl max-xl:px-4 font-Palanquin">{review.feedback}</p>
                    <div className="flex gap-x-3 justify-center py-5"><img src={star} />{review.rating}</div>
                    <h2 className="text-xl text-black font-bold font-Palanquin">{review.customerName}</h2>
                        </div>
                ))
            }
            </div>


        </div>

    </div>
)