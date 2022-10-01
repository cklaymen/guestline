import useData from "./useData";

interface HotelRoomsData {
  id: string;
  name: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
  };
}

export interface HotelData {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  starRating: number;
  images: Array<{ url: string; alt?: string }>;
  rooms: HotelRoomsData[];
}

interface ApiHotelData extends Omit<HotelData, "starRating"> {
  starRating: string;
}

const mapHotelsFn = (data: ApiHotelData[]): Omit<HotelData, "rooms">[] =>
  data.map((hotel) => ({ ...hotel, starRating: Number(hotel.starRating) }));

const loadData = async () => {
  const hotels = await fetch(
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
  )
    .then((res) => res.json())
    .then(mapHotelsFn);

  const hotelsWithRooms = await Promise.all(
    hotels.map<Promise<HotelData>>(async (hotel) => {
      return {
        ...hotel,
        rooms: await fetch(
          `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotel.id}`
        )
          .then((res) => res.json())
          .then((data) => data.rooms),
      };
    })
  );

  return hotelsWithRooms;
};

const useHotelsData = () => {
  return useData(loadData);
};

export default useHotelsData;
