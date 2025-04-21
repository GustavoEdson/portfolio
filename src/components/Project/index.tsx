import { Card } from "../Card";

export const Project = () => {
  return (
    <section className="">
      <h2 className="text-center text-3xl uppercase underline p-4 lin text-red-600 font-extrabold">
        projects
      </h2>
      <p className="text-center text-2xl">
        Discover a range of projects I've crafted, including personal and client
        work, with each project featuring its own compelling case study.
      </p>
      <div className="flex flex-col m-[50px] gap-4 ">
        <Card
          img="https://i.ibb.co/Z6Cmfc5S/organo-app.png"
          title="API"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum dolorum
        unde eius expedita voluptatum enim libero exercitationem modi explicabo
        eaque, aliquid tenetur est, quidem recusandae! Vel consequuntur eligendi
        quam?"
        />
        <Card
          img="https://i.ibb.co/gZKgqz0q/advice-app.png"
          title="API"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum dolorum
        unde eius expedita voluptatum enim libero exercitationem modi explicabo
        eaque, aliquid tenetur est, quidem recusandae! Vel consequuntur eligendi
        quam?"
        />
      </div>
    </section>
  );
};
