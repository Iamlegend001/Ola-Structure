import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addAllToCart,
  removeAllOfType,
  clearCart,
  selectCartItems,
  selectCartTotal,
} from "../store/Slice/cartSlice";
import { scooterData } from "../Constants/scooterData";
import { motorcycleData } from "../Constants/motorcycleData";
import ProductCard from "../Components/ProductCard";
import { Button } from "../Components/ui/button";
import { Card } from "../Components/ui/card";

const Buy = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const allScooters = scooterData.map((s) => ({ ...s, type: "scooter" }));
  const allMotorcycles = motorcycleData.map((m) => ({
    ...m,
    type: "motorcycle",
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">🚀 Buy Your Ride</h1>

      {/* Scooters */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">🛵 Scooters</h2>
          <div className="flex gap-2">
            <Button
              onClick={() => dispatch(addAllToCart(allScooters))}
              className="bg-black hover:bg-gray-800 text-white"
            >
              Add All
            </Button>
            <Button
              onClick={() => dispatch(removeAllOfType("scooter"))}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
              Remove All
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {scooterData.map((scooter) => (
            <ProductCard
              key={scooter.id}
              item={scooter}
              type="scooter"
              onAdd={(item) => dispatch(addToCart(item))}
              onRemove={(item) => dispatch(removeFromCart(item))}
            />
          ))}
        </div>
      </section>

      {/* Motorcycles */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">🏍️ Motorcycles</h2>
          <div className="flex gap-2">
            <Button
              onClick={() => dispatch(addAllToCart(allMotorcycles))}
              className="bg-black hover:bg-gray-800 text-white"
            >
              Add All
            </Button>
            <Button
              onClick={() => dispatch(removeAllOfType("motorcycle"))}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
              Remove All
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {motorcycleData.map((bike) => (
            <ProductCard
              key={bike.id}
              item={bike}
              type="motorcycle"
              onAdd={(item) => dispatch(addToCart(item))}
              onRemove={(item) => dispatch(removeFromCart(item))}
            />
          ))}
        </div>
      </section>

      {/* Cart Summary */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">🛒 Cart Summary</h2>
        <Button
          onClick={() => dispatch(clearCart())}
          disabled={cart.length === 0}
          className="mb-4"
          variant="destructive"
        >
          Clear Cart
        </Button>

        {cart.length === 0 ? (
          <p className="text-muted-foreground">Your cart is empty.</p>
        ) : (
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {cart.map((item, i) => (
              <li key={i}>
                {item.name} ({item.type}) - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 text-lg font-semibold">
          Total: ₹{total.toLocaleString()}
        </div>
        <Button
          className="mt-4 text-white text-lg"
          disabled={cart.length === 0}
        >
          Proceed to Buy
        </Button>
      </Card>
    </div>
  );
};

export default Buy;
