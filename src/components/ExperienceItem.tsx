interface ExperienceItemProps {
  time: string;
  title: string;
}

const ExperienceItem = (props: ExperienceItemProps) => {
  const { time, title } = props;
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <p className="mr-4 tracking-tight text-gray-900 dark:text-gray-100">
          {time}
        </p>
        <p className="text-gray-900 dark:text-gray-100">{title}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
