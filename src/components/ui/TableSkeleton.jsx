import Skeleton from "./Skeleton";

function TableSkeleton({ rows = 5 }) {
  return (
    <div className="space-y-4">

      {[...Array(rows)].map((_, i) => (
        <div
          key={i}
          className="
            flex
            items-center
            justify-between
            gap-4
            py-4
            border-b
            border-slate-100
          "
        >

          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />

        </div>
      ))}

    </div>
  );
}

export default TableSkeleton;