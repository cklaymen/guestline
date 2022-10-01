import useData, { UseDataResult } from "./useData";

export interface HotelData {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  starRating: number;
  images: Array<{ url: string; alt?: string }>;
}

interface ApiHotelData extends Omit<HotelData, "starRating"> {
  starRating: string;
}

const mapFn = (data: ApiHotelData[]): HotelData[] =>
  data.map((hotel) => ({ ...hotel, starRating: Number(hotel.starRating) }));

const useHotelsData = (): UseDataResult<HotelData[]> => {
  return useData(
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG",
    mapFn
  );
};

export default useHotelsData;
