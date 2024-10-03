import { services } from "../constants";
export const Services =() => (
    <section className="px-10 flex gap-15 justify-evenly max-md:flex-col max-md:px-4">
        {services.map((card)=>(
            <div className="shadow-xl px-6 py-12 rounded-xl m-4 hover:shadow-2xl">
                <div className="bg-red-500 p-2 rounded-full w-10 text-center">
                <img src={card.imgURL} />
                </div>
                <h1 className="text-xl font-bold text-left py-4">{card.label} </h1>
                <p className="text-gray-600 text-left">{card.subtext}</p>
               
                </div>
        ))}
    </section>
)