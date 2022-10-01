import { useMemo } from "react";

import useFilters from "../../hooks/useFilters/useFilters";
import useHotelsData from "../../hooks/useHotelsData";
import Hotel from "./Hotel";

const HotelsList: React.FC = () => {
  const { data, loading, error } = useHotelsData();
  const { rating } = useFilters();
  const hotels = useMemo(
    () =>
      rating !== null
        ? data?.filter((hotel) => hotel.starRating >= rating)
        : data,
    [data, rating]
  );

  if (loading) {
    return <div>loading...</div>;
  }
  if (!hotels?.length) {
    return <div>No data.</div>;
  }
  if (error) {
    return <div>Something went wrong.</div>;
  }
  return (
    <div className="flex flex-col items-center pt-6">
      <div className="flex flex-col gap-8 max-w-screen-md w-full">
        {hotels?.map((hotel) => (
          <Hotel key={hotel.id} data={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelsList;
