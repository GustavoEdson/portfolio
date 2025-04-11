type buttonProps = {
  text: string;
};

export const Button = ({ text }: buttonProps) => (
  <button className="bg-red-600 uppercase rounded-md p-1.5 cursor-pointer p-4 text-2xl">
    {text}
  </button>
);
