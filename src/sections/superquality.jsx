import {siteText} from '../constants';
import { shoe8 } from '../assets/images';
import { Button } from '../components/button';
export const SuperQuality =() => (
    <section className='flex max-md:flex-col py-12 items-center' id='about-us'>
    <div className="text-left pl-8 py-10 w-1/2 max-xl:pl-4 max-md:w-full">
    <div className='pl-6 max-md:pl-2'>
    <h1 className=" text-5xl font-bold text-left leading-50 leading-snug">We Provide You <span className="text-red-500">Super Quality</span> Shoes
    </h1>
    <p className='py-8 text-xl font-thin text-gray-700 max-xl:w-full'>{siteText.superqualitydescribtion}</p>
    </div>

    <Button text={"View Details"} />
</div>
<div className='w-1/2 max-md:w-full'>
    <img src={shoe8} />
</div>
</section>
)