import { FC } from "react";
import Mac from '../assets/macbook.png'
import M1 from '../assets/m1.png'
import Winamax from '../assets/winamax.png'
import Timer from "../components/Timer";

const Home: FC = () => {
    return (
        <div className="min-h-screen w-full bg-black text-white font-mono">
            <div className="grid"/>
            <h1 className="font-mono text-center mt-12 text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                Compte à rebours (3 novembre 2022):
            </h1>
            <Timer />
            <div className="flex justify-center text-center flex-col md:flex-row md:items-center mt-15">
                <div className="flex justify-center flex-col md:flex-row items-center mx-auto text-center">
                    <div className="">
                        <img src={Mac} className="object-scale-down h-50 md:h-96" alt="mac" />
                        <p>Prix: 2 200€</p>
                    </div>
                    <div className="">
                        <img src={M1} className="object-scale-down h-50 md:h-60" alt="mac" />
                    </div>
                </div>
                <div className="flex items-center h-0">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-0 md:w-1 h-0 md:h-2/5 mx-auto" />
                </div>
                <div className="mx-auto text-center flex justify-center items-center">
                    <div>
                        <img src={Winamax} className="object-scale-down h-24 md:h-24 mx-auto mb-5" alt="mac" />
                        <h1 className="mb-5 font-mono text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500">
                            Somme récoltée:
                        </h1>
                        <h1 className="font-mono text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                            300€
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home