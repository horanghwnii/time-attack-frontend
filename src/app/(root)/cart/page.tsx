'use client';

import API from '@/api/index.api';
import Page from '@/components/Page';
import { useQuery } from '@tanstack/react-query';
import CartList from './_components/CartList/CartList';

function CartPage() {
  const returnValueOfUseQuery = useQuery({
    queryKey: ['cartItems', { isList: false }],
    queryFn: API.cart.getCart,
  });

  const { data: cart, isLoading } = returnValueOfUseQuery;

  if (isLoading) return <h1>잠시만 기다려주세요.</h1>;

  return (
    <Page title='장바구니'>
      <ul>
        {cart.map((item: any) => (
          <CartList key={item.product.id} item={item} />
        ))}
      </ul>
    </Page>
  );
}

export default CartPage;
