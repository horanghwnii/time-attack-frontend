import API from '@/api/index.api';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

interface CartListProps {
  item: any;
}

// 0으로 가면 새로고침 해야 목록에서 사라집니다...
// 서버에는 증가되는데 새로고침해야 갯수가 제대로 나타납니다...
function CartList({ item }: CartListProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const { mutateAsync: addItem } = useMutation({
    mutationFn: API.cart.addItemToCart,
  });

  const { mutateAsync: removeItem } = useMutation({
    mutationFn: API.cart.removeItemFromCart,
  });

  const handleClickAddItem = async (productId: number) => {
    await addItem(productId);
    setQuantity(quantity + 1);
  };

  const handleClickRemoveItem = async (productId: number) => {
    await removeItem(productId);
    setQuantity(quantity - 1);
  };

  return (
    <>
      <li className='flex w-[800px] mx-auto border-y-2 items-center'>
        <img
          src={item.product.imgSrc}
          alt={item.product.name}
          className='w-[150px]'
        />

        <div className='ml-5 py-2 flex flex-col gap-4'>
          <p className='font-bold'>
            {item.product.brand.nameKr} / {item.product.brand.nameEn}
          </p>
          <p>{item.product.name}</p>
          <div className='flex gap-2'>
            <p className='line-through text-red-500'>
              ₩{item.product.originalPrice}
            </p>
            <p>₩{item.product.price}</p>
          </div>
          <div className='flex gap-5'>
            <p className='border-r border-black pr-5'>
              {item.product.deliveryType}
            </p>
            <p>잔여재고 {item.product.onlineStock - quantity}ea</p>
          </div>
        </div>
        <div className='flex  ml-20'>
          <button
            onClick={() => handleClickRemoveItem(item.product.id)}
            className='font-bold border border-black w-10 bg-black text-white'
          >
            -
          </button>
          <input
            type='text'
            className='h-10 w-10 border border-black text-center font-bold'
            value={quantity}
            disabled
          />
          <button
            onClick={() => handleClickAddItem(item.product.id)}
            className='font-bold border border-black w-10 bg-black text-white'
          >
            +
          </button>
        </div>
      </li>
    </>
  );
}

export default CartList;
