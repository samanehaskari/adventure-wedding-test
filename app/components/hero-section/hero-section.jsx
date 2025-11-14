import Image from "next/image";
import { images } from "../../assets/images";
import AnimatedText from "./animated-text";
import Typography from "../global/typography";

export default function HeroSection() {
  const text = " Create You Dream Elopement";
  const description =
    "We work with a huge pool of local elopement experts worldwide and can create a custom elopement package for you";

  return (
    <div className="h-[612px] w-full relative">
      <Image src={images.hero} alt=" adventure wedding hero section" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-1/6 flex flex-col items-center">
        <AnimatedText text={text} />
        <Typography
          variant="subtitle"
          as="p"
          className=" text-white font-clash text-center"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
}
