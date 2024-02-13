import Page from '@/components/Page';
import ProductDetail from './_components/ProductDetail';

function ProductDetailPage(props: { params: { productId: number } }) {
  const productId = props.params.productId;
  console.log(productId);
  return (
    <Page>
      <ProductDetail productId={productId} />
    </Page>
  );
}

export default ProductDetailPage;
