"use client";
import ProductCard from "../component/productCard";

export default function ProductsGrid({ produits }) {
  return (
<div className="grid grid-cols-4 gap-6 px-0">
  {produits.map((p) => (
    <ProductCard key={p.id} produit={p} />
  ))}
</div>
  );
}
