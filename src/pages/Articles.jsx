import { useParams } from 'react-router-dom';
import { articleAdm } from '../data/blog-posts';
import Container from '../layout/Container';
import HeaderSection from '../layout/HeaderSection';
import { useEffect } from 'react';
import { ArticleText } from '../components/Articletext';

const Articles = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const article = articleAdm.find((blog) => blog.id === parseInt(id));
  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <>
      <HeaderSection />
      <main>
        <Container>
          <section className='featured-sc bg-white'>
        
            {articleAdm.map((articleAdm) => (
              <div key={articleAdm.id} className='section-cases'>
                <ArticleText blogItemData={articleAdm} />
              </div>
            ))}
          
            
          </section>
        </Container>
      </main>
    </>
  );
};

export default Articles;
