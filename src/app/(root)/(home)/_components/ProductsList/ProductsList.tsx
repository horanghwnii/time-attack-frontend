'use client';

import API from '@/api/index.api';
import { Product } from '@/types/Product.type';
import { useQuery } from '@tanstack/react-query';
import ProductsListItem from '../ProductsListItem';

function ProductsList() {
  const returnValueOfUseQuery = useQuery<Product[]>({
    queryKey: ['products', { isList: false }],
    queryFn: API.product.getProducts,
  });

  const { data: products, isLoading } = returnValueOfUseQuery;

  if (isLoading)
    return <h2 className='text-center font-bold'>잠시만 기다려주세요...</h2>;

  return (
    <div>
      <ul className='grid grid-cols-6 gap-8 px-2'>
        {products?.map((product: Product) => (
          <ProductsListItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
