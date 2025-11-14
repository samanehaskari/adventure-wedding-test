"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "../global/container";
import { images } from "../../assets/images";
import { headerLinks } from "../../libs/header-data";
import Button from "../global/button";
import ShoppingCart from "./shopping-cart";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);

  return (
    <header
      className={` h-24 w-full transition-all duration-200 z-50 fixed top-0 left-0  ${
        scroll ? " backdrop-blur-lg " : ""
      }`}
    >
      <Container className="h-full">
        <div className=" flex items-center h-full justify-between w-full ">
          <div className=" flex items-center gap-6">
            <div>
              <Image alt="adventure wedding logo" src={images.logo} />
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
            <ShoppingCart />
          </div>
        </div>
      </Container>
    </header>
  );
}
