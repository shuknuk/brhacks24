import React, { useEffect } from 'react';
import Title from '../components/Title';

const Intro = () => {
  useEffect(() => {
    const handleScroll = () => {
      let x = window.scrollY;
      document.getElementById('text').style.marginTop = x * 2.5 + 'px';
      document.getElementById('leaf').style.top = x * -1.5 + 'px';
      document.getElementById('leaf').style.left = x * 1.5 + 'px';
      document.getElementById('hill5').style.left = x * 1.5 + 'px';
      document.getElementById('hill4').style.left = x * -1.5 + 'px';
      document.getElementById('hill1').style.top = x * 1 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="relative flex justify-center items-center h-screen overflow-hidden">
        <img src="/pics/hill1.png" id="hill1" alt="hill1" className="absolute top-0 left-0 w-full pointer-events-none" />
        <img src="/pics/hill2.png" id="hill2" alt="hill2" className="absolute top-0 left-0 w-full pointer-events-none" />
        <img src="/pics/hill3.png" id="hill3" alt="hill3" className="absolute top-0 left-0 w-full pointer-events-none" />
        <img src="/pics/hill4.png" id="hill4" alt="hill4" className="absolute top-0 left-0 w-full pointer-events-none" />
        <img src="/pics/hill5.png" id="hill5" alt="hill5" className="absolute top-0 left-0 w-full pointer-events-none" />
        <img src="/pics/leaf.png" id="leaf" alt="leaf" className="absolute top-0 left-0 w-full pointer-events-none" />
        <img src="/pics/plant.png" id="plant" alt="plant" className="absolute top-0 left-0 w-full pointer-events-none" />
        <img src="/pics/tree.png" id="tree" alt="tree" className="absolute top-0 left-0 w-full pointer-events-none" />
        <div id="text" className="absolute">
          <Title />
        </div>

      </section>

      {/* <section className="relative bg-[#003329] h-screen p-24">
        <h2 className="text-white text-4xl font-bold mb-4">About</h2>
        <p className="text-white text-lg">yap yap yap yap ya</p>
      </section> */}
    </div>
  );
};

export default Intro;
