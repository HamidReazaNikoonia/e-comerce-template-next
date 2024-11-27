

interface Product {
  id: number
  name: string
  price: number
  tags: string[]
}

interface ListProps {
  products: Product[]
}

export default function List({ products }: ListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id}>
          <div className="p-4">
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <div className="mt-2">
              {product.tags.map(tag => (
                <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

