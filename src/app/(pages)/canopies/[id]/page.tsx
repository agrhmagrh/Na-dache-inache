import { StrapiCanopyDetailPage } from './StrapiCanopyDetailPage';
import { productsApi } from "@/app/api/lib/api";

export async function generateStaticParams() {
  try {
    const products = await productsApi.getByCategory('canopies');
    return products.map((product) => ({
      id: product.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default function CanopyDetailsPage() {
  return <StrapiCanopyDetailPage />;
}


