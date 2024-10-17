import Link from 'next/link';

// Sample product data
const products = [
  { id: 1, name: 'Product One', description: 'This is the first product.' },
  { id: 2, name: 'Product Two', description: 'This is the second product.' },
  { id: 3, name: 'Product Three', description: 'This is the third product.' },
];

export default function Products() {
  return (
    <div >
      <h1>Our Products</h1>
      <ul >
        {products.map((product) => (
          <li key={product.id} >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link href={`/products/${product.id}`}>
              <a >View Details</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/public">
        <a >Back to Home</a>
      </Link>
    </div>
  );
}
