// * types
type TagProps = {
  title: string;
};

const Tag = ({ title }: TagProps) => {
  return (
    <span className='tag bg-glassy-secondary text-xs rounded-lg capitalize p-2'>
      {title}
    </span>
  );
};

export default Tag;
