const Content = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex-grow">
    {children}
  </main>;
};

export default Content;
