import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import QuantityButton from "../../QuantityButton/QuantityButton";

import { Section, DetailDiv } from "./productDetailBox.style";

export default function SkeletonDetail() {
  return (
    <Section>
      <Skeleton variant="rounded" width={600} height={600} />
      <DetailDiv>
        <Skeleton variant="rounded" width={100} height={18} />
        <Skeleton
          variant="rounded"
          width={250}
          height={36}
          style={{ margin: "16px 0 20px" }}
        />
        <Skeleton variant="rounded" width={100} height={36} />
        <Skeleton
          variant="rounded"
          width={200}
          height={18}
          style={{
            marginTop: "165px",
            marginBottom: "20px",
          }}
        />
        <QuantityButton />
      </DetailDiv>
    </Section>
  );
}
