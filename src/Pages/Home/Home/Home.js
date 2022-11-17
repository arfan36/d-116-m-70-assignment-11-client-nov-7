import useTitle from '../../../hooks/useTitle';
import AddService from '../../AddService/AddService';
import FamilyDeal from '../../FamilyDeal/FamilyDeal';
import PriceChart from '../../PriceChart/PriceChart';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    useTitle('');
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <AddService></AddService>
            <FamilyDeal></FamilyDeal>
            <PriceChart></PriceChart>
        </div>
    );
};

export default Home;