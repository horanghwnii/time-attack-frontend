'use client';

import API from '@/api/index.api';
import { Brand } from '@/types/Brand.type';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import BrandsListItem from './components/BrandsListItem';

function BrandsList() {
  const returnValueOfUseQuery = useQuery<Brand[]>({
    queryKey: ['brands', { isList: false }],
    queryFn: API.brands.getBrands,
  });

  const { data, isLoading } = returnValueOfUseQuery;

  if (isLoading) return <h1>잠시만 기다려주세요.</h1>;

  return (
    <div className='w-[700px] mx-auto text-center mb-10'>
      <Link href='/brands' className='active: font-bold'>
        ALL
      </Link>
      <ul className='grid grid-cols-6 gap-3 mt-5'>
        {data?.map((brand: Brand) => (
          <BrandsListItem key={brand.id} brand={brand} />
          // <li key={brand.id}>{brand.nameKr}</li>
        ))}
      </ul>
    </div>
  );
}

export default BrandsList;
