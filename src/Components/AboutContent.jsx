import ing from '../img/ing.png';
import michelin from '../img/michelin.png';
import microsoft from '../img/microsoft.png';
import tricubiq from '../img/tricubiq.png';
import starbyte from '../img/starbyte.png'
import fintech from '../img/fintech.png'

function AboutContent() {
    return (
        <>  
        
            <div className="grid grid-rows gap-4 text-center">
                <div className=" py-4 space-y-4">
                    <p className="text-3xl font-semibold ">Welcome to our Software Development Company!</p>
                    <p className="pt-4 tracking-wide">At Dailyweb Solution, we are passionate about crafting high-quality software solutions that empower businesses and individuals to thrive in the digital world. With our team of talented developers and cutting-edge technologies, we strive to deliver innovative and customized software products that meet our clients' unique needs.</p>
                </div>
                <div className="pb-6 tracking-wide">
                <p>We are dedicated to delivering excellence in software development, combining technical expertise with a deep understanding of our clients' needs. Contact us today to discuss your software requirements and embark on a transformative journey towards digital success.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 '>
            <div className=" flex flex-col justify-around items-center gap-4">
                <img src={michelin} alt="michelin" className="logo" />  
                <img src={ing} alt="ing" className="logo" />
                <img src={fintech} alt="fintech" className="logo" /> 
            </div>
            <div className="text-white font-bold flex flex-col justify-around">
                <img src={microsoft} alt="microsoft" className="logo" />
                <img src={starbyte} alt="starbyte" className="logo" />  
                <img src={tricubiq} alt="tricubiq" className="logo" />
            </div>
        </div>
        </>
    );
}
  
export default AboutContent;