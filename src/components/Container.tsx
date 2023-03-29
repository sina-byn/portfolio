import clsx from 'clsx';

// * types
type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'content-container w-full h-full max-w-[1440px] mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
