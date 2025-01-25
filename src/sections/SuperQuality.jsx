import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Product You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span>
          <span> Shoe</span>
        </h2>
        <p className="mt-4 lg:max-w-full info-text">
          We are a team of passionate individuals who are dedicated to creating
          high-quality shoes that not only look great but also feel amazing.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our mission is to help people discover and enjoy the best shoes in the
          market, while also providing them with the tools and resources to
          create their own unique style.
        </p>
        <div className="mt-10">
          <Button label="view details" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={560}
          height={520}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
