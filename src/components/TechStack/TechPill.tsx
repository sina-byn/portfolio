import { forwardRef } from 'react';

// * types
type TechPillProps = {
  name: string;
  image: string;
};

const TechPill = forwardRef<HTMLDivElement, TechPillProps>(
  ({ name, image }, ref) => {
    return (
      <div
        ref={ref}
        title={name}
        className='tech-pill bg-glassy-secondary place-items-center grid w-16 h-16 rounded-full'
      >
        <img src={image} alt={name} />
      </div>
    );
  }
);

export default TechPill;
