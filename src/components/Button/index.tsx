type buttonProps = {
  text: string;
};

export const Button = ({ text }: buttonProps) => (
  <button className="bg-red-600 uppercase m-20 rounded-md p-1.5 cursor-pointer">
    {text}
  </button>
);
