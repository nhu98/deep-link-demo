// pages/products/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';

// Sample product data (In real scenarios, fetch this from an API or database)
const products = [
  { id: 1, name: 'Product One', description: 'Detailed description of Product One.' },
  { id: 2, name: 'Product Two', description: 'Detailed description of Product Two.' },
  { id: 3, name: 'Product Three', description: 'Detailed description of Product Three.' },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Find the product based on the id
  const product = products.find((p) => p.id === parseInt(id));

  // If the page is not yet generated, show a loading state
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <Link href="/pages/products">
        <a >Back to Products</a>
      </Link>
    </div>
  );
}
