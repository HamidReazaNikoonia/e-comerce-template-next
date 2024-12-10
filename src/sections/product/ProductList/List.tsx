import ProductCard from '@/components/Card/ProductCard';
import {IProduct} from '@/types/Product';

interface ListProps {
  products: IProduct[]
}

export default function List({ products }: ListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  )
}

