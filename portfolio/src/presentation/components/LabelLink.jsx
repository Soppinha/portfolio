// eslint-disable-next-line react/prop-types
export const LabelLink = ({ label, link, className}) => {
  return (
    <a href={link} className={className}>
      {label}
    </a>
  );
};
