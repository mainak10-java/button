
import './buton.css'
import { AiFillAudio } from "react-icons/ai";
const Button =() =>{
return (
    <div>
        <div className="flex flex-col gap-2 justify-center items-center mt-[5px]">
           <div className= "w-[5.375rem] h-[5.375rem] bg-black rounded-full cursor-pointer button-div border-[2px] border-blue-400 grid place-items-center">
                <button className='text-white'>
                  {
                    <i><AiFillAudio fontSize="2.75rem"/></i>
                  }
                </button>
           </div>
            
            <h3 className="text-white opacity-[100%] text-xl"> Ask me anything!</h3>
        </div>
    </div>
);
}

export default Button;