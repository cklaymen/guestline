import useHotelsData from "../../hooks/useHotelsData";
import Hotel from "./Hotel";

const HotelsList: React.FC = () => {
  const { data, loading, error } = useHotelsData();
  if (loading) {
    return <div>loading...</div>;
  }
  if (!data) {
    return <div>No data.</div>;
  }
  if (error) {
    return <div>Something went wrong.</div>;
  }
  return (
    <div className="flex flex-col items-center pt-6">
      <div className="flex flex-col gap-2 max-w-screen-md w-full">
        {data.map((hotel) => (
          <Hotel data={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelsList;
