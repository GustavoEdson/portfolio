type ButtonProps = {
  text?: string;
};

export const Button = ({ text }: ButtonProps) => (
  <button className="bg-red-600 uppercase rounded-md p-2 cursor-pointer text-2xl">
    {text}
  </button>
);
