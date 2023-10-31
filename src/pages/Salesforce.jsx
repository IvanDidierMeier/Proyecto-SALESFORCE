import Container from '../layout/Container';
import {
  CardWide,
  Header,
  CardSalesforce,
} from '../components';
import { testimonials } from '../data/blog-posts';

const Salesforce = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <section className='featured-sc bg-white'>
            <CardWide blogItemData={testimonials[0]} />
          </section>
        </Container>
        <CardSalesforce />
      </main>
    </>
  );
};

export default Salesforce;
