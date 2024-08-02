// eslint-disable-next-line react/prop-types
export const Section = ({ children, className, id }) => {
  return <section id={id} className={className}>{children}</section>;
};
