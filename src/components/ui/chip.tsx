const Chip = ({ title }: { title: string }) => {
  return (
    <div className="px-2 py-1 rounded-md border border-accent text-accent inline">
      {title}
    </div>
  );
};

export default Chip;
