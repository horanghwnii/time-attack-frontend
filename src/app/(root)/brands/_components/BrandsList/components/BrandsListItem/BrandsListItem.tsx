'use client';

import { Brand } from '@/types/Brand.type';
import Link from 'next/link';

interface BrandsListItemProps {
  brand: Brand;
}

function BrandsListItem({ brand }: BrandsListItemProps) {
  return (
    <li className='text-center text-sm'>
      <Link href={`/brands?brandId=${brand.id}`}>{brand.nameKr}</Link>
    </li>
  );
}

export default BrandsListItem;
