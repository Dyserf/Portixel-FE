const WaitListSuccess = ({
  displayCount = "0",
}: {
  displayCount: string | null;
}) => {
  return (
    <div className="my-auto">
      <p className="font-bold text-[46px]">
        You are number {displayCount} on the list
      </p>
      <p className="text-2xl font-normal text-textSecondary mt-6 max-w-[598px]">
        You are now a valuable part of Portixel. Let&apos;s Design with Ease!
      </p>
    </div>
  );
};

export default WaitListSuccess;
