import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    useTitle('');
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
        </div>
    );
};

export default Home;