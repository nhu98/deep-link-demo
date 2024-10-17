import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
};

const products: Product[] = [
  { id: 1, name: 'Sản Phẩm Một', slug: 'san-pham-mot', description: 'Mô tả chi tiết sản phẩm một.' },
  { id: 2, name: 'Sản Phẩm Hai', slug: 'san-pham-hai', description: 'Mô tả chi tiết sản phẩm hai.' },
  { id: 3, name: 'Sản Phẩm Ba', slug: 'san-pham-ba', description: 'Mô tả chi tiết sản phẩm ba.' },
];

async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((product) => product.id.toString() === slug);
}


export default async function ProductDetail({ params }: { params: { id: string } }) {

  const product = await getProductBySlug(params.id);

  if (!product) {
    return <div>Sản phẩm không tồn tại.</div>;
  }

  return (
    <div >
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <Link href="/products">
        <p >Back to Products screen</p>
      </Link>
    </div>
  );
}
