import Button from "@/components/common/Button";
import SidePanel from "@/components/common/sidePanel";
import Image from "next/image";
import { cartPage } from "@/lib/data";

type Props = {};

const Cart = (props: Props) => {
  return (
    <SidePanel>
      <div className="flex h-full flex-col overflow-y-scroll no-scrollbar">
        <div className="flow-root overflow-hidden overflow-y-auto flex-1 no-scrollbar">
          <ul role="list" className="divide-y divide-gray">
            {cartPage &&
              cartPage.cartProductList.map((item) => (
                <li
                  key={item.id}
                  className="grid grid-cols-[30%_1fr] py-2 gap-4"
                >
                  <div className="flex-shrink-0 overflow-hidden rounded-md border relative border-gray/30 aspect-square">
                    <Image
                      src={item.productImage}
                      alt={item.productName}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-between">
                      <p className="text-caption1 font-medium">
                        {item.productName}
                      </p>
                      {/* <p className="py-1 text-caption2">blue</p> */}
                      <p className="text-gray/60 text-caption2">Qty 5</p>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                      <div className="flex flex-col items-end">
                        <p className="font-semibold text-caption1">
                          ₹ {item.productPrice}
                        </p>
                      </div>
                      <Button
                        variant="outlined"
                        className="font-medium text-indigo-600 hover:text-red-500 !border-none !p-0"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="border-t border-gray/30 flex flex-col pt-2 gap-4">
          <div>
            <div className="flex justify-between items-center text-body2 font-semibold">
              <span>Subtotal</span>
              <span>₹ 100000</span>
            </div>
            <p className="text-caption2 text-gray">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
          <div className="grid gap-2">
            <Button variant="fill" color="green" className="!rounded-xl">
              <span className="sr-only">Checkout</span>
              Checkout
            </Button>
            <div className="flex justify-center items-center">
              <p>
                or &nbsp;
                <a href={"/cart"} className="text-gray">
                  Continue Shopping
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SidePanel>
  );
};

export default Cart;
