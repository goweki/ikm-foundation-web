import KenyaMap from "../Maps/Kenya";

const index = () => {
  return (
    <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 m-32">
      <h2 className="text-4xl sm:text-65xl font-bold text-center">
        Kenya & Beyond
      </h2>
      {/* <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
        It takes human hands
      </h3> */}
      <div className="grid grid-cols-1 my-16">
        <KenyaMap />
      </div>
    </div>
  );
};

export default index;
