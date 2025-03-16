"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image"; // Image bileşeni eklendi
import urunDetaylari from "../../../public/data/urun-detaylari.json";
import styles from "../products/ProductCard.module.css"; // Ürünler sayfasındaki CSS dosyasını kullanıyoruz
import Breadcrumb from '@/components/Breadcrumb';

// JSON verisi için TypeScript tipi belirlendi
interface SubProduct {
  product_id: string;
  group_id: string;
  img_path: string;
  product_title: string;
  product_description: string;
}

const SubProductsPage: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SubProductsHeader />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <SubProductsContent />
      </Suspense>
    </div>
  );
};

const SubProductsHeader: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const groupName = urunDetaylari.find((product: SubProduct) => product.group_id === id)?.product_title || "Alt Ürünler";

  return (
    <>
      <div style={{ textAlign: 'center', margin: '0 auto', padding: '10px', backgroundColor: '#f8d7da', borderRadius: '8px', maxWidth: '1200px' }}>
        <h1 style={{ fontSize: '2em' }}>{groupName}</h1>
      </div>
      <Breadcrumb items={[{ name: 'Anasayfa', href: '/' }, { name: 'Ürünler', href: '/products' }, { name: groupName, href: '/subproducts' }]} />
    </>
  );
};

const SubProductsContent: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [subProducts, setSubProducts] = useState<SubProduct[]>([]); // `any[]` yerine SubProduct tipini kullandık
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const filteredProducts = urunDetaylari.filter(
        (product: SubProduct) => product.group_id === id
      );
      setSubProducts(filteredProducts);
    }
  }, [id]);

  const handleProductClick = (productId: string) => {
    router.push(`/product_detail?id=${productId}`);
  };

  return (
    <div className={styles.productList}>
      {subProducts.map((product) => (
        <div
          key={product.product_id}
          className={styles.productCard}
          onClick={() => handleProductClick(product.product_id)}
        >
          <div className={styles.productImageContainer}>
            <Image
              src={product.img_path}
              alt={product.product_title}
              width={200}
              height={200}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productInfo}>
            <h3>{product.product_title}</h3>
            <p>{product.product_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubProductsPage;
