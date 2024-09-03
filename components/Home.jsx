import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const hill1 = document.getElementById("hill1");
      const hill2 = document.getElementById("hill2");
      const hill3 = document.getElementById("hill3");
      const tree = document.getElementById("tree");
      const leaf = document.getElementById("leaf");
      const title = document.getElementById("title");

      title.style.marginTop = value * 1.1 + "px";
      hill1.style.bottom = -value * 2 + "px";
      hill2.style.left = value * -1.5 + "px";
      hill3.style.left = value * 1.5 + "px";
      leaf.style.top = value * -1.5 + "px";
      leaf.style.left = value * 1.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="parallax">
      <Image src="/pics/hill1.png" id="hill1" alt="Hill 1" layout="fill" />
      <Image src="/pics/hill2.png" id="hill2" alt="Hill 2" layout="fill" />
      <Image src="/pics/hill3.png" id="hill3" alt="Hill 3" layout="fill" />
      <Image src="/pics/tree.png" id="tree" alt="Tree" layout="fill" />
      <Image src="/pics/leaf.png" id="leaf" alt="Leaf" layout="fill" />
      <h2 id="title" className=" text-center font-black uppercase leading-none fancy" style={{ fontSize: '80px', textShadow: '2px 4px 6px rgba(0, 0, 0, 0.5)' }}>
        BRHS Hacks
        </h2>

      {/* <Image src="/pics/plant.png" id="plant" alt="Plant" layout="fill" /> */}
    </section>
  );
}
