import { FC } from "react";
import Mac from '../assets/macbook.png'
import M1 from '../assets/m1.png'

const Home: FC = () => {

    return (
        <div className="h-min-screen w-full bg-black text-white">
            <div className="grid"/>
            <div className="grid grid-cols-9 mx-auto text-center">
                <div className="grid lg:grid-cols-2 grid-cols-1 md:col-span-4 col-span-9 mx-auto text-center h-screen">
                    <div className="flex items-center justify-center">
                        <img src={Mac} className="object-scale-down h-50 md:h-96" alt="mac" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={M1} className="object-scale-down h-50 md:h-60" alt="mac" />
                    </div>
                </div>
                <div className="h-screen flex items-center col-span-1">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-0 md:w-1 h-1/5 mx-auto" />
                </div>
                <div className="flex md:col-span-4 col-span-9 items-center grid-cols-1 mx-auto text-center h-screen">
                    <div>
                        <h1 className="mb-5 font-mono text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500">
                            Somme récoltée:
                        </h1>
                        <h1 className="font-mono text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                            250€
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home