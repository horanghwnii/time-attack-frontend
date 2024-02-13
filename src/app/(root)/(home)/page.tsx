import Page from '@/components/Page';
import ProductsList from './_components/ProductsList';

export default function HomePage() {
  return (
    <Page title='Trending'>
      <ProductsList />
    </Page>
  );
}
