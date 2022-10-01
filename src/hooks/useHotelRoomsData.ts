import useData, { UseDataResult } from "./useData";

interface HotelRoomsData {
  name: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
  };
}

const useHotelRoomsData = (
  roomId: string
): UseDataResult<{ rooms: HotelRoomsData[] }> => {
  return useData(
    `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${roomId}`
  );
};

export default useHotelRoomsData;
