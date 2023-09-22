import PropTypes from 'prop-types';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import '../../styles/Card.scss';

const CardWide = ({ blogItemData }) => {
  return (
    <div className='card-grid grid'>
      <div className='card-grid-img'>
        <img
          src={`${blogItemData.image}`}
          alt='Featured image'
          className='object-fit-cover'
        />
      </div>
      <div className='card-grid-text'>
        <div>
          {blogItemData.outstanding && (
            <div className='badge badge-primary'>
              {blogItemData.outstanding}
            </div>
          )}
          <h2 className='title-lg title featured-title'>
            {blogItemData.title}
          </h2>
          <p className='text-lg text'>{blogItemData.content}</p>
        </div>

        <div className='card-footer flex justify-between items-center'>
          <div className='writer-info grid'>
            <div className='info-avatar'>
              <img
                src={`${blogItemData.authorImage}`}
                alt=''
                className='object-fit-cover'
              />
            </div>
            <div className='info-intro'>
              <p className='intro-name text-base'>{blogItemData.author}</p>
              <div className='intro-verify flex items-center'>
                <TfiLayoutLineSolid className='verify-icon' />
                <span className='verify-status text-sm text'>
                  {blogItemData.career}
                </span>
              </div>
            </div>
          </div>
          <div className='date-info text text-base'>{blogItemData.date}</div>
        </div>
      </div>
    </div>
  );
};

export default CardWide;

CardWide.propTypes = {
  blogItemData: PropTypes.object,
};
