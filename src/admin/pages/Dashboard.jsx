import DashboardBgImage from '../../assets/dashboard-bg.jpg';

const Dashboard = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover min-h-[100vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${DashboardBgImage})` }}
    >
      <div className="p-4 md:p-12 lg:p-16 bg-white bg-opacity-40 backdrop-blur-lg rounded-md">
        Dashboard
      </div>
    </div>
  );
};

export default Dashboard;
