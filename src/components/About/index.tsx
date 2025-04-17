import { Button } from "../Button";
import { Skills } from "../Skills";

export const About = () => {
  return (
    <section className="mt-20">
      <h2 className="text-center text-3xl uppercase underline p-4 lin text-red-600 font-extrabold">
        about me
      </h2>
      <p className="text-center text-2xl">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="flex justify-center flex-wrap mt-10 gap-5">
        <div className="w-[40%] text leading-10">
          <h2 className="text-3xl font-extrabold ">Know About me!</h2>
          <p>Hi! I'm Gustavo Edson, a passionate developer based in Brazil.</p>
          <p>
            I have strong experience with TypeScript, JavaScript, Node.js,
            React.js, and Next.js, working across both frontend and backend
            development.
          </p>
          <p>
            Throughout my career, I've built efficient, scalable digital
            solutions with a focus on clean, high-quality code. I enjoy tackling
            new challenges, learning continuously, and collaborating with others
            to create impactful products.
          </p>
          <p>
            If you're looking for someone to help bring your ideas to life, I'd
            love to connect. Let's build something great together!
          </p>
          <Button text="contact" />
        </div>
        <div className="w-[40%]">
          <h2 className="text-3xl font-extrabold">My Skills</h2>
          <Skills
            skills={[
              "JavaScript",
              "TypeScript",
              "Next.js",
              "MySQL",
              "Python",
              "C#",
              "HTML",
              "TailwindCSS",
              "CSS",
              "MongoDB",
              "Styled-Components",
            ]}
          />
        </div>
      </div>
    </section>
  );
};
