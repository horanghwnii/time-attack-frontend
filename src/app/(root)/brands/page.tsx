import Page from '@/components/Page';
import ProductsList from '../(home)/_components/ProductsList';
import BrandsList from './_components/BrandsList';

function BrandsPage() {
  return (
    <Page title='brands'>
      <BrandsList />
      <ProductsList />
    </Page>
  );
}

export default BrandsPage;
