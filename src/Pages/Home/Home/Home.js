import useTitle from '../../../hooks/useTitle';
import AddService from '../../AddService/AddService';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    useTitle('');
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <AddService></AddService>
        </div>
    );
};

export default Home;