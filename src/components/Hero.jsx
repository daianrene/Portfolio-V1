import { BsLinkedin, BsGithub } from "react-icons/bs";
import HeroPic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-4xl mb-5 text-slate-300">I'm</p>
        <h1 className="text-6xl">Daián René</h1>
        <hr className="mt-5" />
        <p className="mt-10 text-slate-300 font-sans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
          voluptatum maiores. Quo, quisquam culpa nemo laboriosam unde nam natus
          deleniti veniam quam aut repudiandae? Consequatur architecto optio
          dolores. Obcaecati, repellendus.
        </p>
      </div>
      <div className="lg:w-1/3 ssm:w-fit">
        <img
          src={HeroPic}
          alt=""
          width={250}
          height={250}
          className="rounded-full w-full border-8 border-white"
        />
      </div>
      <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">About Me</p>
        <p className="text-slate-300">Let's build quality in programming</p>
        <button
          className="bg-white text-indigo-600 px-10 py-2
         my-3 rounded-full hover:bg-indigo-800 hover:text-white"
        >
          Show More...
        </button>
        <div className="flex mt-5 space-x-5 cursor-pointer">
          <BsGithub
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsLinkedin
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
