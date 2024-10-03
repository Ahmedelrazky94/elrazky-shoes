import { shoes } from "../constants";
export const ShoeCard =({currentShoeImg,changeShoeImg}) => {
return (
    <div className="flex justify-around">
    {shoes.map((shoe) => {
        return <div key={shoe.thumbnail} className={`cursor-pointer rounded-lg p-4 m-4 bg-blue-200${(currentShoeImg == shoe.bigShoe) ? "border-solid border-red-400 border-2 bg-white" : ""} `} onClick={()=>{changeShoeImg(shoe.bigShoe)}}>
            <img src={shoe.thumbnail} />
        </div>
    }
    )}
</div>
)
}

