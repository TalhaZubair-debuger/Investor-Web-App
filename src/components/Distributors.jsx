import DistributorsList from "./DistributorsList";

const Distributors = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl">
          Distributor’s List
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          All the distributors listed on our app who require investments for
          thier businesss are listed here.
        </p>

        <div className="space-y-10">
          <DistributorsList />
          <DistributorsList />
          <DistributorsList />
        </div>
      </div>
    </section>

    // <div className="w-screen">

    // </div>
  );
};

export default Distributors;
