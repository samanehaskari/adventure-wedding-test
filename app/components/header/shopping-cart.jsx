"use client";

import { useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import { useCart } from "../../context/CartContext";
import { formatMoneyDollar } from "../../libs/utils";

export default function ShoppingCart() {
  const [open, setOpen] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.price ?? 0), 0),
    [cartItems]
  );

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 transition-all duration-200 hover:bg-primary-600"
        aria-label="Shopping cart"
      >
        <Icon icon="solar:cart-large-minimalistic-bold" className="text-white" />
        {cartItems.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-semibold text-primary-500">
            {cartItems.length}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-14 z-50 w-80 rounded-2xl border border-white/10 bg-white/95 p-4 text-zinc-800 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold">Shopping Cart</p>
            <button
              className="text-sm text-primary-500"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="mt-6 text-sm text-zinc-500">
              You haven&apos;t added any packages yet.
            </p>
          ) : (
            <>
              <ul className="mt-4 flex max-h-64 flex-col gap-3 overflow-auto">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between rounded-xl bg-zinc-100 p-3"
                  >
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <span className="text-xs text-zinc-500">
                        {formatMoneyDollar(item.price)}
                      </span>
                    </div>
                    <button
                      className="text-xs text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center justify-between rounded-xl bg-primary-50 px-4 py-2 text-sm font-semibold">
                <span>Total</span>
                <span>{formatMoneyDollar(total)}</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
