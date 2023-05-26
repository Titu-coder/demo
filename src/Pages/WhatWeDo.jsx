import { GoDeviceDesktop } from 'react-icons/go';
import { Fa500Px } from 'react-icons/fa';
import { BiTrendingUp } from 'react-icons/bi';

function WhatWeDo(){
    return(
        <div className="text-white md:h-screen md:p-20 py-20 md:overflow-hidden text-center tracking-wide" id='what-we-do' >
            <h1 className="text-5xl font-bold">What We Do</h1>
            <div className="md:grid grid-cols-3 items-top gap-6 max-w-[1400px] m-auto py-8">
                <div className="space-y-4 p-8">
                    <p className="text-2xl font-semibold">Discover, design & build</p>
                    <div className=" text-8xl">
                        <Fa500Px className='m-auto font-thin'/>
                    </div>
                    <p>Through meticulous discovery, thoughtful design, and expert development, we uncover user needs, craft captivating interfaces, and bring ideas to life with exceptional digital solutions.</p>
                </div>
                <div className="space-y-4 p-8">
                    <p className="text-2xl font-semibold">Web application</p>
                    <div className=" text-8xl">
                        <GoDeviceDesktop className='m-auto font-thin'/>
                    </div>
                    <p>Deliver exceptional web applications with seamless functionality and engaging interfaces, harnessing the power of technology to create immersive digital experiences for your audience.</p>
                </div>
                <div className="space-y-4 p-8">
                    <p className="text-2xl font-semibold">Business solutions</p>
                    <div className="text-8xl ">
                        <BiTrendingUp className='m-auto font-thin'/>
                    </div>
                    <p>Unlock new opportunities with our customized business solutions. Streamline workflows, gain data-driven insights, and thrive in the digital landscape with our expert guidance and support.</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;