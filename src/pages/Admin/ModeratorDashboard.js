import Layout from '../../components/Layouts/Layout';
import ModMenu from './ModeratorMenu';

const ModDashboard = () => {
    return (
        <Layout title={"Dashboard - Admin Panel"}>
            <div className="container-fluid mt-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <ModMenu />
                    </div>
                    <div className="col-md-9">
                        <h2 className='text-center my-3'>
                            <i className="fa-solid fa-gauge" /> Dashboard
                        </h2>
                        <div className="row m-2 card p-3 text-center">
                            <h1>Congratulations!!</h1>
                            <h2>You've just got upgraded as a Moderator</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ModDashboard;