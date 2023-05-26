import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Home() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <>
    <Particles className=''
            
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            
            options={{
                background: {
                    color: {
                        value: "",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 80,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    
    <div className="text-white h-screen " id="home">
      <div className="flex max-md:flex-col items-center h-full justify-center md:justify-between home-container " id='info'>
        <div className="bg-green-400 px-4 py-8 space-y-4 opac max-sm:text-center " >
          <h1 className=" text-3xl md:text-5xl">Inspiring software innovation</h1>
          <div className='text-[1.3rem] font-medium tracking-wide'>
            <p >
            Digital solutions that spark transformation and success.
            </p>
            <p>
            Accelerating growth through expert developers.
            </p>
            <p>
            Strategic vision. Agile execution.
            </p>
          </div>
          <button className='border-white border-[2px] p-4 font-bold tracking-wider'>GET STARTED</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
