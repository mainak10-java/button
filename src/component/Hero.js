import Button from "./Button";
import './Hero.css';

const Hero = () =>{
return(
    <div className="flex gap-[200px]">
        <div className="bg-white w-[400px] h-[400px]">
            Hi
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-[#FFF] text-[1.25rem] text-center">Explore our state the of art Audio bot in the Verbalyze playgorund.</h2>
            <div className="w-[702px] h-[499px] top-[-301px] left-[3205px] border-[2px] border-solid div-border">
                <div className="hero-sub-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="702" height="264" viewBox="0 0 702 264" fill="none">
                        <path d="M699.827 158.393C674.317 25.9948 429.253 91.0482 230.997 143.676C130.273 170.414 41.6307 193.944 0 186.745V0H701.946C701.946 0 700.682 84.8886 699.827 158.393ZM699.827 158.393C698.741 251.615 698.312 326.526 701.946 186.745C702.214 176.423 701.483 166.992 699.827 158.393Z" fill="url(#paint0_linear_10_269)"/>
                        <path d="M699.827 158.393C674.317 25.9948 429.253 91.0482 230.997 143.676C130.273 170.414 41.6307 193.944 0 186.745V0H701.946C701.946 0 700.682 84.8886 699.827 158.393ZM699.827 158.393C698.741 251.615 698.312 326.526 701.946 186.745C702.214 176.423 701.483 166.992 699.827 158.393Z" />
                        <defs>
                            <linearGradient id="paint0_linear_10_269" x1="-37.9971" y1="-15.6865" x2="759.643" y2="79.9876" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#003CD8" stop-opacity="0.28"/>
                            <stop offset="1" stop-color="#06F3FF" stop-opacity="0.41"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div>
                    <Button/>
                </div>
                
            </div>
        </div>
    </div>
    
);
}

export default Hero;                   


