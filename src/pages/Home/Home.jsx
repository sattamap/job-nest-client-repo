import AppSote from "../../components/AppSote";
import Banner from "../../components/Banner";
import JobByCategory from "../../components/JobByCategory";
import Testimonials from "../../components/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobByCategory></JobByCategory> 
            <Testimonials></Testimonials>
            <AppSote></AppSote>
        </div>
    );
};

export default Home;