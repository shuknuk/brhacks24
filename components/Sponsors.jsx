import Image from "next/image";

const sponsors = [
  {
    name: "Qualcomm",
    link: "https://www.qualcomm.com/",
    imageUrl: "/sponsors24/Qualcomm 2.png",
    style: "col-span-2 row-span-1 justify-self-center", // centered
  },
  {
    name: "Bridgewater Acura",
    link: "https://www.bridgewateracura.com/",
    imageUrl: "/sponsors24/Bill Vince_s Bridgewater Acura.png",
    style: "col-span-2 row-span-1 justify-self-center", // centered
  },
  {
    name: "M & E Engineering",
    link: "https://www.meengineers.com/",
    imageUrl: "/sponsors24/mAndEengineers.jpg",
    style: "col-span-2 row-span-1 justify-self-center", // centered
  },
  {
    name: "Perfect Connections",
    link: "https://www.perfectconnectionsinc.com/",
    imageUrl: "/sponsors24/Perfect Connections.png",
    style: "col-span-2 row-span-1 justify-self-center", // centered
  },
  {
    name: "Sticker Giant",
    link: "https://www.stickergiant.com/",
    imageUrl: "/sponsors24/Sticker Giant.png",
    style: "col-span-1 row-span-1 justify-self-end", // left-aligned
  },
  {
    name: "Gimmee Gimmee Tees",
    link: "https://gimmeegimmeetees.com/",
    imageUrl: "/sponsors24/Gimmee Gimmee Tees.png",
    style: "col-span-1 row-span-1 justify-self-start", // right-aligned
  },
  {
    name: "Balsamiq",
    link: "https://balsamiq.com/",
    imageUrl: "/sponsors24/Balsamiq.png",
    style: "col-span-1 row-span-1 justify-self-end", // left-aligned
  },
  {
    name: "SMD Technologies",
    link: "https://smdtechnologies.com/",
    imageUrl: "/sponsors24/SMD Global 2.png",
    style: "col-span-1 row-span-1 justify-self-start", // right-aligned
  },
  {
    name: "Wolfram",
    link: "https://www.wolfram.com/",
    imageUrl: "/sponsors24/Woflram.png",
    style: "col-span-1 row-span-1 justify-self-end", // left-aligned
  },
  {
    name: "Arya Nail Lounge",
    link: "https://aryanailloungenj.com/",
    imageUrl: "/sponsors24/Arya Nail Lounge.png",
    style: "col-span-1 row-span-1 justify-self-start", // right-aligned
  },
  {
    name: "FSTONE",
    link: "https://fstonetechnologies.com/",
    imageUrl: "/sponsors24/FSTONE.png",
    style: "col-span-1 row-span-1 justify-self-end", // left-aligned
  },
  {
    name: "Wegmans",
    link: "https://www.wegmans.com/",
    imageUrl: "/sponsors24/Wegmans 2.png",
    style: "col-span-1 row-span-1 justify-self-start", // right-aligned
  },
  {
    name: "Kumon",
    link: "https://www.kumon.com/",
    imageUrl: "/sponsors24/Kumon 2.png",
    style: "col-span-2 row-span-1 justify-self-center", // centered at bottom
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
        <div
          className="grid grid-cols-2 gap-y-8 gap-x-4"
          style={{
            gridTemplateRows: `repeat(8, auto)`, // control the number of rows
          }}
        >
          {/* Qualcomm at top */}
          <a
            href={sponsors[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[14rem] h-40 relative ${sponsors[0].style}`} // Increased size
          >
            <Image
              src={sponsors[0].imageUrl}
              alt={sponsors[0].name}
              fill
              className="object-contain"
            />
          </a>

          {/* Bridgewater Acura */}
          <a
            href={sponsors[1].link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[14rem] h-40 relative ${sponsors[1].style}`} // Increased size
          >
            <Image
              src={sponsors[1].imageUrl}
              alt={sponsors[1].name}
              fill
              className="object-contain"
            />
          </a>

          {/* Perfect Connections */}
          <a
            href={sponsors[2].link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[14rem] h-40 relative ${sponsors[2].style}`} // Increased size
          >
            <Image
              src={sponsors[2].imageUrl}
              alt={sponsors[2].name}
              fill
              className="object-contain"
            />
          </a>

          {/* Sticker Giant and Gimmee Gimmee Tees */}
          {sponsors.slice(3, 5).map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-[12rem] h-36 relative ${sponsor.style}`} // Increased size
            >
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </a>
          ))}

          {/* Balsamiq and SMD */}
          {sponsors.slice(5, 7).map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-[12rem] h-36 relative ${sponsor.style}`} // Increased size
            >
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </a>
          ))}

          {/* Wolfram and Arya Nail Lounge */}
          {sponsors.slice(7, 9).map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-[12rem] h-36 relative ${sponsor.style}`} // Increased size
            >
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </a>
          ))}

          {/* FSTONE and Wegmans */}
          {sponsors.slice(9, 11).map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-[12rem] h-36 relative ${sponsor.style}`} // Increased size
            >
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </a>
          ))}

          {/* Kumon at the bottom, centered */}
          <a
            href={sponsors[11].link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[14rem] h-40 relative ${sponsors[11].style}`} // Increased size
          >
            <Image
              src={sponsors[11].imageUrl}
              alt={sponsors[11].name}
              fill
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
