export default function Container({ className, children }) {
  return (
    <div className={` ${className} container max-w-[1264px] mx-auto`}>
      {children}
    </div>
  );
}
