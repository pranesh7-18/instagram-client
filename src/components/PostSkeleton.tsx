import { Skeleton } from './ui/skeleton';

export function PostSkeleton() {
  return (
    <div className="border-b border-border pb-4 mb-4">
      <div className="flex items-center px-4 py-2">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="ml-3 h-4 w-24" />
      </div>

      <Skeleton className="w-full aspect-square" />

      <div className="px-4 pt-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <Skeleton className="w-6 h-6" />
            <Skeleton className="w-6 h-6" />
            <Skeleton className="w-6 h-6" />
          </div>
          <Skeleton className="w-6 h-6" />
        </div>

        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-40" />
      </div>
    </div>
  );
}