import PropTypes from 'prop-types';
import '../../styles/Card.scss';

const CardArticles = ({ blogItemData }) => {
  return (
    
      <div className='card-grid-text'>
        <div>
          <h2 className='title-lg title featured-title'>
            {blogItemData.title}
          </h2>
          <div className='card-grid-text'>
          <p className='text-lg text'>{blogItemData.content}</p>
          </div>
          <br></br>
          <h3 className='card-grid-text'>{blogItemData.listTitle}</h3>
          <br></br>
          <div className='card-grid-text'>{blogItemData.list}</div>
        </div>

        <div className='card-footer flex justify-between items-center'>
          <div className='date-info text text-base'>{blogItemData.date}</div>
        </div>
      </div>
   
  );
};

export default CardArticles;

CardArticles.propTypes = {
  blogItemData: PropTypes.object,
};
