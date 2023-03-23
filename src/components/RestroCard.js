import { imgUrl } from 'common/config';
import { Link } from 'react-router-dom';

const RestroCard = ({ cloudinaryImageId, name, cuisines, id }) => {
  const cardStyle = {
    width: '350px',
  };
  const img = imgUrl + '/' + cloudinaryImageId;
  return (
    <div className="flex-column shimmer-card flex" style={cardStyle}>
      <Link to={`/card-detail/${id}`}>
        <img src={img}></img>
        <div className="p20">
          <p>{name}</p>
          <p>{cuisines?.join(', ')}</p>
        </div>
      </Link>
    </div>
  );
};
export default RestroCard;
