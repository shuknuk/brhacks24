import Image from "next/image";

const sponsors = [
  {
    name: "Google",
    link: "https://www.google.com",
    imageUrl: "/sponsors/Google.png",
  },
  {
    name: "Microsoft",
    link: "https://www.microsoft.com",
    imageUrl: "/sponsors/Microsoft.png",
  },
  // Add more sponsors as needed
];

const Sponsors = () => {
  const columns = sponsors.length <= 4 ? sponsors.length : 4;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center max-w-screen-lg mx-auto`}
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[10rem] h-32 relative"
            >
              <Image
                src={sponsor.imageUrl}
                alt={`${sponsor.name} logo`}
                layout={"fill"}
                objectFit="contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
