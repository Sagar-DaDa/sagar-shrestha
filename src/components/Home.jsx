import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => (
  <div className="flex flex-col-reverse md:flex-row p-5 md:p-20">
    <div className="md:w-7/12 space-y-2">
      <p className="text-xl  font-semibold">
        Hello, <span className="text-red-500">I'm</span>
      </p>
      <p className="righteous text-3xl md:text-5xl">Ságàr Shrésthà</p>
      <p className="text-md md:text-xl font-semibold">
        Full Stack Web Developer
      </p>
      <p className="text-sm md:pr-5">
        Coding is not just typing keys faster and giving some instruction to the
        computer, it is an art of commanding a comupter to work as what we want.
      </p>
      <div className="text-center text-sm md:text-left space-y-1 pt-2">
        <p>FIND ME ON</p>
        <div className="flex gap-1">
          <div className="w-8 h-8 rounded flex justify-center items-center bg-neutral-800">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="w-8 h-8 rounded flex justify-center items-center bg-neutral-800">
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
          <div className="w-8 h-8 rounded flex justify-center items-center bg-neutral-800">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="w-8 h-8 rounded flex justify-center items-center bg-neutral-800">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className="w-8 h-8 rounded flex justify-center items-center bg-neutral-800">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>
    </div>
    <div className="md:w-5/12 p-5">
      <img src="/svgs/pp.svg" alt="" />
    </div>
  </div>
);

export default Home;
