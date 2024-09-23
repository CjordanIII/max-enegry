import Image from "next/image";
import Link from "next/link";
import {
  handleStartTodayButtion,
  startToday,
  svg,
} from "../../components/button/buttonMetadata.jsx";
import Button from "../button/Button";
import FooterLinks from "./FooterLinks.jsx";
const Footer = () => {
  // todo change to better yello
  return (
    <footer className="bg-yellow-400 w-screen h-full pb-5 flex-1 justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col w-96 justify-center items-center gap-8">
          <h1 className="text-5xl text-center text-white ">
            Try MAXX Energy today!
          </h1>
          <p className="text-sm text-white text-center">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <Button
            style={startToday.style}
            btnLabel={startToday.btnLabel}
            svg={svg}
            handleButtion={handleStartTodayButtion}
          />
          <p className="text-sm text-white text-center">
            {" "}
            Have more questions? Help is available under Contact Us
          </p>
          <div className="flex justify-evenly gap-5">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="./icons/apple-logo.svg"
                width={35}
                height={35}
                alt="android logo"
              />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="./icons/windows-logo.svg"
                width={35} 
                height={35}
                alt="Maxx Energy White Logo"
              />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="./icons/android-logo.svg"
                width={35}
                height={35}
                alt="android logo"
              />
            </Link>
          </div>
          <Image
            src="/MAXX-Energy-White.svg"
            width={200}
            height={200}
            alt="android logo"
            className="mt-44"
          />
        </div>
      </div>
      <FooterLinks />
      <span className="flex justify-center mt-20">
        {" "}
        <hr className="w-5/6 " />
      </span>

      <span className="flex justify-around text-white">
        <span className="flex justify-between gap-5">
          <Link href="#" target="_blank">
            Terms & privacy
          </Link>
          <Link href="#" target="_blank">
            Security
          </Link>
          <Link href="#" target="_blank">
            Status
          </Link>
          <p> &copy; Whitepace LLC.</p>
        </span>
        <span className="flex justify-between gap-5">
          <Link href="#" target="_blank">
            {" "}
            <Image
              src="./icons/Facebook-icon.svg"
              width={15}
              height={15}
              alt="facebook logo"
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              src="./icons/Twitter.svg"
              width={30}
              height={30}
              alt="Twitter logo"
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              src="./icons/Linkedin.svg"
              width={30}
              height={30}
              alt="linkedin logo"
            />
          </Link>
        </span>
      </span>
    </footer>
  );
};
export default Footer;
// todo add the right side
