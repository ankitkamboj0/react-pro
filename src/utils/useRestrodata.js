import { Restro } from 'common/config';
import { useEffect, useState } from 'react';

const useRestrodata = (id)=>{
    const [cardData, setCardData] = useState(null);
    const getCardData = async () => {
      await fetch(`${Restro}=${id}`)
        .then(data => data.json())
        .then(({ data }) => setCardData(data));
    };
    useEffect(() => {
      getCardData();
    }, []);
    return cardData
}
export default useRestrodata