import OwnerPic from "../assets/Talha Zubair.jpg";
import OwnerPic1 from "../assets/Muhammad Bilal.png";
import OwnerPic2 from "../assets/Hassnain Aoub.png";
import TeamItem from "./TeamItem";

const TeamMember = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Our team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl">
            Crafting Excellence Together: Unveiling Our Team’s Collective
            Creative Journey.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center m-auto align-center mb-4">
          <TeamItem
            image={OwnerPic}
            name="Talha Bin Zubair"
            rank="CEO/Co-founder"
          />
          <TeamItem
            image={OwnerPic1}
            name="Muhammad Bilal"
            rank="COO/Co-founder"
          />
          <TeamItem
            image={OwnerPic2}
            name="Hassnain Ayoub"
            rank="CMO/Co-founder"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
