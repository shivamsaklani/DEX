import Image from '../assets/DEX.png'
import '../App.css';
export function DSHeader(){
    return(
        <div className="ml-3 w-full  flex justify-between">
            <img className='mix-blend-difference h-20 ' src={Image}/>
            <div>
            <button className=' text-slate-300   w-100 bg-black' value="connect">Submit</button>

            </div>
           

        </div>
    )
}