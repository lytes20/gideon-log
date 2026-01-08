interface EducationItemProps {
  time: string;
  longTitle: string[];
}

const EducationItem = (props: EducationItemProps) => {
  const { time, longTitle } = props;
  return (
    <div className="mb-4">
      <div className="flex">
        <p className="mr-4 tracking-tight text-gray-900 dark:text-gray-100">
          {time}
        </p>

        <div>
          {longTitle?.map((lt) => (
            <p key={lt} className="text-gray-900 dark:text-gray-100 mb-0">
              {lt}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
