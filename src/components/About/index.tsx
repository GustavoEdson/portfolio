import { Skills } from "../Skills";

export const About = () => {
  return (
    <section className="mt-30">
      <h2 className="text-center text-3xl uppercase underline p-4 lin text-red-600 ">
        about me
      </h2>
      <p className="text-center text-2xl">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
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
        ]}
      />
    </section>
  );
};
