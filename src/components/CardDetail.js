import { useParams } from 'react-router-dom';
import RestroCard from 'components/RestroCard';
import useRestrodata from 'utils/useRestrodata';

const CardDetail = () => {
  const { id } = useParams();
  const cardData = useRestrodata(id);
  return !cardData ? (
    <>Loading Data</>
  ) : (
    <div>
      <RestroCard {...cardData} />
    </div>
  );
};
export default CardDetail;
