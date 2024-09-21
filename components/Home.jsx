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
      <div id="hill1-wrapper" className="absolute inset-0 w-full h-full">
        <Image
          src="/pics/hill1.svg"
          id="hill1"
          alt="Hill 1"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div id="hill2-wrapper" className="absolute inset-0 w-full h-full">
        <Image
          src="/pics/hill2.svg"
          id="hill2"
          alt="Hill 2"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div id="hill3-wrapper" className="absolute inset-0 w-full h-full">
        <Image
          src="/pics/hill3.svg"
          id="hill3"
          alt="Hill 3"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div id="tree-wrapper" className="absolute inset-0 w-full h-full">
        <Image
          src="/pics/tree.svg"
          id="tree"
          alt="Tree"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div id="leaf-wrapper" className="absolute inset-0 w-full h-full">
        <Image
          src="/pics/leaf.svg"
          id="leaf"
          alt="Leaf"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2
        id="title"
        className="text-center font-black uppercase leading-none fancy"
        style={{
          fontSize: "100px",
          textShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)",
          fontFamily: ", sans-serif",
        }}
      >
        BRHS Hacks
      </h2>

      <Image src="/pics/plant.png" id="plant" alt="Plant" layout="fill" />
    </section>
  );
}
