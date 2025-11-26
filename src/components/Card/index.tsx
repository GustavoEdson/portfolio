import { Button } from "../Button";

type PropsCard = {
  img?: string;
  title: string;
  description: string;
  link?: string;
};

export const Card = ({ img, title, description, link }: PropsCard) => {
  return (
    <div className="h-[100%] w-[100%] flex p-5 justify-around gap-3 rounded-2xl">
      <div>
        <img src={img} alt={img} className="w-2xl" />
      </div>
      <div>
        <h2 className="text-3xl">{title}</h2>
        <p className="w-[50%]">{description}</p>
        <a href={link}>
          <Button text="visit project" />
        </a>
      </div>
    </div>
  );
};
