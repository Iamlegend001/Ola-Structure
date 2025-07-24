// components/ProductCard.jsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({ item, type, onAdd, onRemove }) => {
  return (
    <Card className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg hover:shadow-2xl hover:scale-[1.025] transition-all duration-200 flex flex-col overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-44 object-cover rounded-t-2xl border-b border-gray-100 shadow-sm"
      />
      <CardHeader className="pb-1 pt-3 px-4">
        <CardTitle className="text-xl font-semibold text-gray-900 mb-1 truncate">
          {item.name}
        </CardTitle>
        <p className="text-base font-bold text-black">
          ₹{item.price.toLocaleString()}
        </p>
      </CardHeader>
      <CardContent className="mt-auto px-4 pb-4 pt-2">
        <div className="flex gap-3">
          <Button
            className="w-1/2 bg-black hover:bg-gray-800 text-white font-semibold shadow-md transition-all"
            onClick={() => onAdd({ ...item, type })}
          >
            Add
          </Button>
          <Button
            className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold shadow-md transition-all"
            onClick={() => onRemove({ ...item, type })}
          >
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
