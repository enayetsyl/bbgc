import stdImg from '../../assets/logo.jpg';

const personalInfo = [
  {
    title: 'Name',
    text: 'Shafayetur Rahman',
  },
  {
    title: 'ID',
    text: '5439034278',
  },
  {
    title: 'Registration No',
    text: '3457094320',
  },
  {
    title: 'Roll No',
    text: '1107',
  },
  {
    title: 'Subject',
    text: 'Bangla',
  },
];

const StdPersonalAndAcademic = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="container px-4 mx-auto">
        <div className="bg-cyan-400 bg-opacity-5 rounded-md p-4 md:p-12">
          <h4 className="text-3xl font-bold mb-4">Personal Informations:</h4>
          <img
            src={stdImg}
            alt="student Image"
            className="rounded-sm w-20 h-20"
          />
          {personalInfo.map((item, i) => {
            const { title, text } = item;
            return (
              <div
                className="flex justify-between items-center gap-3 w-[400px] mt-2"
                key={i}
              >
                <h5 className="min-w-[200px]">{title}:</h5>
                <h5 className="min-w-[200px] font-semibold">{text}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StdPersonalAndAcademic;
