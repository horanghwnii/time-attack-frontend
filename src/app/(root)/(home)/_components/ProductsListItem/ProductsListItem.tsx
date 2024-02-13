import { Product } from '@/types/product.type';
import Link from 'next/link';

interface ProductsListItemProps {
  product: Product;
}

function ProductsListItem({ product }: ProductsListItemProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <li className='shadow-md py-1 rounded flex flex-col min-h-[450px] max-h-[500px]'>
        {/* <Image src={product.imgSrc} alt={product.name} width={200} height={200} /> */}
        <img src={product.imgSrc} alt={product.name} className='w-80' />
        <div className=' flex flex-col px-2'>
          <h2 className='text-sm font-bold pt-2'>{product.brand.nameEn}</h2>
          <p className='flex-grow text-sm pt-2'>{product.name}</p>
          <div className='flex gap-4 text-sm pt-2'>
            <span className='line-through text-red-500'>
              ₩{product.originalPrice}
            </span>
            <span>₩{product.price}</span>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default ProductsListItem;

// 상세 페이지에서는 searchParams 써서 id값으로 ㅇㅋ?
