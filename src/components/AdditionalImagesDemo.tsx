"use client";
import React from "react";
import Image from "next/image";
import { FormattedStrapiProduct } from "@/types/strapi";
import { apiUtils } from "@/app/api/lib/api";

interface AdditionalImagesDemoProps {
  product: FormattedStrapiProduct;
}

export default function AdditionalImagesDemo({ product }: AdditionalImagesDemoProps) {
  if (!product.additionalImages || product.additionalImages.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded">
      <h4 className="text-sm font-semibold mb-2">Дополнительные изображения ({product.additionalImages.length}):</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {product.additionalImages.map((image, index) => (
          <div key={index} className="relative h-20 rounded overflow-hidden">
            <Image
              src={apiUtils.getImageUrl(image.url)}
              alt={image.alternativeText || `Дополнительное изображение ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
