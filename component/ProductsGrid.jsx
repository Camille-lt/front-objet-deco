"use client";
import ProductCard from "../component/productCard";
import Image from "next/image";
import MidCenturyImage from '../public/styles/midcentury.jpg';

export default function ProductsGrid({ produits }) {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-0">
  {produits.slice(0, 2).map((p) => (
    <ProductCard key={p.id} produit={p} />
  ))}
  {/* Image promo 1 petite */}
<div className="col-span-2">
  <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Promotion"
          className="object-cover h-full w-full"
          width={500}
          height={300}
        />
</div>

  {produits.slice(3, 7).map((p) => (
    <ProductCard key={p.id} produit={p} />
  ))}
  {/* Image promo 2 grande */}

<div className="col-span-2 row-span-2">
  <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Promotion"
          className="object-cover h-full w-full"
          width={500}
          height={300}
        />
</div>

  {produits.slice(7, 17).map((p) => (
    <ProductCard key={p.id} produit={p} />
  ))}
  {/* Image promo 3 petite */}
  <div className="col-span-2">
  <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Promotion"
          className="object-cover h-full w-full"
          width={500}
          height={300}
        />
</div>
  {produits.slice(17, 21).map((p) => (
    <ProductCard key={p.id} produit={p} />
  ))}
  
  {/* Image promo 4 grande */}
<div className="col-span-2 row-span-2">
  <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Promotion"
          className="object-cover h-full w-full"
          width={500}
          height={300}
        />
</div>
    {produits.slice(21, 31).map((p) => (
    <ProductCard key={p.id} produit={p} />
  ))}
   {/* Image promo 5 petite */}
    <div className="col-span-2">
  <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Promotion"
          className="object-cover h-full w-full"
          width={500}
          height={300}
        />
</div>
      {produits.slice(31, produits.length).map((p) => (
    <ProductCard key={p.id} produit={p} />
  ))}
  
  
  
  
  
  
</div>
  );
}
