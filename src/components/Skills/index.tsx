type SkillsProps = {
  skills: string[];
};

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="flex flex-wrap">
      {skills.map((skill, i) => (
        <div className="bg-red-500 text-center m-2 p-2 rounded-md" key={i}>
          {skill}
        </div>
      ))}
    </div>
  );
};
