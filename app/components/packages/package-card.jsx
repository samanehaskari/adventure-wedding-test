"use client";

import Image from "next/image";
import AddFavoriteButton from "./add-favorite-button";
import Typography from "../global/typography";
import { formatMoneyDollar } from "../../libs/utils";
import Button from "../global/button";
import { useCart } from "../../context/CartContext";

export default function PackageCard({ pack }) {
  const { addToCart, isInCart } = useCart();
  const alreadyInCart = isInCart(pack.id);

  const handleAddToCart = () => {
    addToCart(pack);
  };

  return (
    <div className=" group relative h-[438px] w-full rounded-[10px] overflow-hidden cursor-pointer ">
      <AddFavoriteButton />
      <Image
        src={pack.image}
        className="w-full h-full group-hover:scale-105 transition-all duration-500"
        alt={pack.title}
        unoptimized
      />

      <div className=" absolute left-1/2 -translate-x-1/2 w-full p-5 bottom-0">
        <Typography
          variant="h3"
          as="h3"
          className=" font-clash text-white w-full text-center"
        >
          {pack.title}
        </Typography>
        {alreadyInCart ? (
          <p className="mt-4 text-center text-sm font-medium text-white">
            This package is already in your cart
          </p>
        ) : (
          <div className=" mt-4 flex items-center justify-between">
            <div className=" font-clash text-[20px] text-white">
              {formatMoneyDollar(pack.price)}
            </div>
            <Button size="sm" rounded="full" onClick={handleAddToCart}>
              ADD TO CART
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
