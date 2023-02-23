import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ItemContainer } from "./productList.style";

export default function SkeletonList() {
  return (
    <ItemContainer>
      <Skeleton variant="rounded" width={380} height={380} />
      <Skeleton variant="rounded" width={100} height={18} />
      <Skeleton variant="rounded" width={200} height={18} />
      <Skeleton variant="rounded" width={140} height={18} />
    </ItemContainer>
  );
}
