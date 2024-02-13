'use client';

import API from '@/api/index.api';
import LogInModal from '@/components/LogInModal';
import { useAuth } from '@/contexts/auth.context';
import { setModal } from '@/redux/slices/modal.slice';
import { useAppDispatch } from '@/redux/store';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface ProductDetailProps {
  productId: number;
}

function ProductDetail({ productId }: ProductDetailProps) {
  const { mutateAsync: addItem } = useMutation({
    mutationFn: API.cart.addItemToCart,
  });
  const { mutateAsync: clearItem } = useMutation({
    mutationFn: API.cart.clearItemInCart,
  });

  const returnValueOfUseQuery = useQuery({
    queryKey: ['product', { isList: false, productId }],
    queryFn: () => API.product.getProductDetail(productId),
  });

  const { data: product, isLoading } = returnValueOfUseQuery;

  const { isLoggedIn } = useAuth();

  const router = useRouter();

  const dispatch = useAppDispatch();

  if (isLoading)
    return <h1 className='text-center font-bold'>잠시만 기다려주세요...</h1>;

  const handleClickAddItem = async (productId: number) => {
    if (!isLoggedIn) {
      const action = setModal(<LogInModal />);
      dispatch(action);
      return;
    }

    await addItem(productId);
    return alert('장바구니에 담겼습니다.');
  };

  const handleClickClearItem = async (productId: number) => {
    const returnValue = await clearItem(productId);
    return returnValue;
  };

  return (
    <div className='flex max-w-[1000px] mx-auto'>
      <div className='flex-1'>
        <img src={product.imgSrc} alt={product.name} className='object-cover' />
      </div>
      <div className='flex-1 px-2 ml-5'>
        <div className='border-b  pb-2'>
          <h2 className='text-sm font-bold'>
            {product.brand.nameKr} / {product.brand.nameEn}
          </h2>
        </div>
        <div className='pt-2 pb-10'>
          <p className='text-lg'>{product.name}</p>
        </div>
        <div>
          <ul className='grid grid-cols-4 gap-y-5'>
            <li className='font-bold'>정가</li>
            <li className='col-span-3 line-through text-red-500'>
              ₩{product.originalPrice}
            </li>
            <li className='font-bold'>판매가</li>
            <li className='col-span-3 font-semibold'>₩{product.price}</li>
            <li className='font-bold'>배송</li>
            <li className='col-span-3'>{product.deliveryType}</li>
            <li className='font-bold'>잔여재고</li>
            <li className='col-span-3'>{product.onlineStock}</li>
          </ul>
        </div>
        <button
          onClick={() => handleClickAddItem(product.id)}
          className='border w-full py-5 bg-black text-white mt-14 text-sm'
        >
          장바구니에 담기
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
