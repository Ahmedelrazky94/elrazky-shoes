import {siteText} from '../constants';
import { products } from '../constants';
import { star } from '../assets/icons';
export const PopularProduct =() => (
    <section className="text-left pl-12 py-20 w-9/10 max-xl:pl-4" id='products'>
        <h1 className=" text-5xl font-bold text-left leading-50">Our <span className="text-red-500">Popular</span> Products
        </h1>
        <p className='py-8 text-md text-gray-700 w-2/5 max-xl:w-full'>{siteText.popularProduct}</p>
        <div className='flex flex-wrap max-xl:justify-around justify-between max-md:flex-col'>
            {products.map((prod)=>(
               <div>
                <img src={prod.imgURL} />
                <div className='py-4 pl-4'> 
                <div className='flex gap-2' ><img src={star} /> <p>(4.5)</p> 
                </div>
                <h1 className='py-2 text-xl text-black font-bold'>{prod.name} </h1>
                <p className='text-red-500 font-bold text-2xl'>{prod.price}</p>
                
                </div>

                 </div> 
            ))}
        </div>
    </section>
)