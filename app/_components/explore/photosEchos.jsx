"use client";
import Echos from "../reusables/Echos";
import { useGetPhotosEchos } from "../../../network/customHooks";
import EchoSkeleton from "../reusables/echoSkeleton";

const PhotosEchoList = () => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetPhotosEchos();

  if (status === "pending") {
    return <EchoSkeleton count={5} />;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  return (
    <Echos
      echos={data.pages}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default PhotosEchoList;
