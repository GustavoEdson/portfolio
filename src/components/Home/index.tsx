import { Button } from "../Button";

type Props = {
  text: string;
  name: string;
};

export const About = ({ name = "nameless", text = ":)" }: Props) => {
  return (
    <section className="flex justify-center items-center flex-col pt-50 gap-10 ">
      <h1 className="text-6xl uppercase font-extrabold ">
        hey, i'm <span className="text-red-700">{name}</span>
      </h1>
      <p className="text-2xl w-[50%] text-center">{text}</p>
      <div className="animate-bounce">
        <Button text="projects" />
      </div>
    </section>
  );
};
