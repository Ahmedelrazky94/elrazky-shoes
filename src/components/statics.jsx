import { statistics } from "../constants";

export const Stat = () => (

                <div className="flex py-5 max-sm:flex-col max-sm:items-start max-sm:space-y-6">

        {statistics.map((stats) => (
           <div key={stats.value} className="flex-col mx-10 justify-center items-center">
            <p className="text-4xl font-bold">{stats.value}</p>
            <p className="font-Palanquin text-gray-600 text-xl font-Montserra">{stats.label}</p>
                </div>

        ))}
                    </div>
 
)