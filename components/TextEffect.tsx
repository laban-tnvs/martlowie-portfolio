import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Ui/Ux Designer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Front End Dev',
        1500,
        'Graphic Designer',
        1500,

      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#2DDC9A] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;