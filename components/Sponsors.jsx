import Image from "next/image";

const sponsors = [
  {
    name: "Sample Sponsor 1",
    link: "",
    imageUrl: "/sponsors/SampleSponsor1.png",
  },
  {
    name: "Sample Sponsor 2",
    link: "",
    imageUrl: "/sponsors/SampleSponsor2.png",
  },
  // Add more sponsors as needed
];

const Sponsors = () => {
  const columns = sponsors.length <= 4 ? sponsors.length : 4;

  return (
    <section id="sponsors" className="py-12">
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
              <div className="w-full h-full bg-green-500 flex items-center justify-center text-white text-lg font-bold">
                Sponsor Here
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
