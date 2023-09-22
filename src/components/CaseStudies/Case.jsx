import { CardWide } from '../CardWide';
import { testimonials } from '../../data/blog-posts';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Case = () => {
  return (
    <section className='case-sc'>
      <div className='container'>
        <div className='case-content'>
          <div className='section-head flex items-end justify-between'>
            <div className='sc-head-l'>
              <h4 className='title title-lg'>Casos de Estudios</h4>
              <p className='text text-base'>La Transformación de Jessica</p>
            </div>
            <div className='sc-head-r'>
              <Link to='/cases' type='button' className='btn btn-o-primary'>
                Ver Más
                <span className='btn-icon'>
                  <HiArrowLongRight className='bi bi-arrow-right' />
                </span>
              </Link>
            </div>
          </div>

          <CardWide blogItemData={testimonials[1]} />
        </div>
      </div>
    </section>
  );
};

export default Case;
