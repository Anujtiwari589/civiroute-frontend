import Skeleton from "./Skeleton";

function StatsCardSkeleton() {
  return (
    <div className="
      bg-white
      border
      border-slate-200
      rounded-3xl
      p-6
      shadow-sm
    ">

      <div className="
        flex
        items-center
        justify-between
      ">

        <div className="space-y-3 w-full">

          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-8 w-20" />

        </div>

        <Skeleton className="w-14 h-14 rounded-2xl" />

      </div>

    </div>
  );
}

export default StatsCardSkeleton;