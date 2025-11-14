"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "../global/container";
import { images } from "../../assets/images";
import { headerLinks } from "../../libs/header-data";
import Button from "../global/button";
import IconButton from "../global/icon-button";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);

  return (
    <header
      className={` h-24 w-full transition-all duration-200 bg-black z-50 ${
        scroll ? " backdrop-blur-lg top-0 sticky" : ""
      }`}
    >
      <Container className={"h-full"}>
        <div className=" flex items-center h-full justify-between w-full ">
          <div className=" flex items-center gap-6">
            <div>
              <Image alt="samaneh Askari logo" src={images.logo} />
            </div>
            <div className=" flex items-center gap-5">
              <ul className=" flex gap-[30px] text-base text-white">
                {headerLinks.map((item, index) => (
                  <li key={"header-link" + index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Button size="md" color="white" variant="outlined" rounded="full">
              LOGIN / REGISTER
            </Button>
            <IconButton icon="solar:cart-large-minimalistic-bold" />
          </div>
        </div>
      </Container>
    </header>
  );
}
