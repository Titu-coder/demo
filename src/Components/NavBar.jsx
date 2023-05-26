import { useState, useEffect } from 'react';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import logo from '../img/logov4.png';
import mobileLogo from '../img/mobileLogo.png';


function NavBar({ fullpageApi, sendDataToParent }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (fullpageApi) {
      console.log(fullpageApi, 'nav bar');
    }
  }, [fullpageApi]);

  const sendData = (el) => {
    const dataToSend = el;
    sendDataToParent(dataToSend); 
  };

  const handleItemClick = (page) => {
    if (fullpageApi) {
      fullpageApi.moveTo(page);
      if(showModal){
        setShowModal(!showModal)
      }
    }
  };

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const info = document.getElementById('info');
    const home = document.getElementById('home');
    const aboutContainer = document.getElementById('about-container');
    const contactContainer = document.getElementById('contact-container');
    const contactForm = document.getElementById('contact-form');
    const whatWeDo = document.getElementById('what-we-do')

    if (showModal) {
      sendData(100000000);
      aboutContainer.classList.add('blur');
      contactForm.classList.add('hidden');
      contactContainer.classList.add('blur');
      whatWeDo.classList.add('blur')
      info.style.visibility = "hidden";
      navbar.classList.add('opac');
    } else {
      sendData(1000);
      aboutContainer.classList.remove('blur');
      contactContainer.classList.remove('blur');
      whatWeDo.classList.remove('blur')
      contactForm.classList.remove('hidden');
      home.classList.remove('blur');
      info.style.visibility = 'visible';
      navbar.classList.remove('opac');
    }
  }, [showModal]);

  return (
    <div>
      <div className="text-white fixed top-0 left-0 right-0 z-10" id="navbar">
        <div className="flex justify-between p-4 text-2xl">
      
          <img onClick={() => handleItemClick(1)}  src={logo} alt="michelin" className="max-md:invisible h-[6vh] cursor-pointer max-md:w-0" />  
              

          <div className="flex space-x-4 max-md:w-full max-md:justify-between items-center">
          <img src={mobileLogo} alt="michelin" className="logo h-[6vh] md:invisible" />
            {/* <h1 className="md:invisible">DS</h1> */}
            <div>
              <p onClick={() => handleItemClick(4)} className="text-yellow-400 font-semibold cursor-pointer">Be our partner</p>
            </div>
            <div className="text-4xl">
              {showModal ? (
                <RiCloseLine
                  className="text-white transition-all duration-500 ease-in-out cursor-pointer"
                  onClick={toggleModal}
                />
              ) : (
                <RiMenu4Line
                  className="text-white transition-all duration-500 ease-in-out cursor-pointer"
                  onClick={toggleModal}
                />
              )}
            </div>
          </div>
        </div>
        {showModal && (
          <div className="modal h-screen m-auto  flex flex-col justify-evenly ">
            <div className="modal-content flex flex-col justify-end  px-14  ">
              <div className="">
              <div className="text-5xl space-y-6">
                  <p onClick={() => handleItemClick(1)} className="justify-center md:justify-end flex link">
                    Menu
                  </p>
                  <p onClick={() => handleItemClick(2)} className="justify-center md:justify-end flex link">
                    What we do
                  </p>
                  <p onClick={() => handleItemClick(3)} className="justify-center md:justify-end flex link">
                    About
                  </p>
                  <p onClick={() => handleItemClick(4)} className="justify-center md:justify-end flex link">
                    Contact
                  </p>
                </div>
              </div>
            </div>
            <div className="justify-between items-baseline flex max-md:flex-col p-6 px-14">
              <div className="p-4 text-3xl flex gap-2 justify max-md:m-auto">
                <AiFillFacebook />
                <FaInstagramSquare />
                <AiFillLinkedin />
              </div>
              <div className="adresa flex p-4 gap-4 items-center max-md:m-auto">
                <div className="text-3xl">
                  <ImLocation2 />
                </div>
                <div>Bucharest, Economu Cezarescu 52</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
