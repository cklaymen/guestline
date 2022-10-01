import { HotelData } from "../../hooks/useHotelsData";
import ImagesSlider from "../ImagesSlider";
import Rating from "../Rating/Rating";

const Hotel: React.FC<{ data: HotelData }> = ({ data }) => {
  return (
    <div>
      <div className="flex flex-row items-start justify-between border-2 border-solid border-slate-300 p-2 gap-4">
        <div className="w-40 h-40 flex items-center">
          <ImagesSlider imagesUrl={data.images} />
        </div>
        <div className="flex flex-col gap-1 ml-0 mr-auto">
          <span className="text-base">{data.name}</span>
          <span className="text-xs">{data.address1}</span>
          <span className="text-xs">{data.address2}</span>
        </div>
        <Rating rating={data.starRating} />
      </div>
      <div>
        {data.rooms.map(
          ({
            id,
            name,
            longDescription,
            occupancy: { maxAdults, maxChildren },
          }) => (
            <div
              key={id}
              className="flex flex-row text-sm gap-4 border-2 border-solid border-slate-300 p-2 border-t-0"
            >
              <div className="w-40 p-2">
                <div className="font-bold mb-1">{name}</div>
                <div>Adults: {maxAdults}</div>
                <div>Children: {maxChildren}</div>
              </div>
              <div className="flex-1">{longDescription}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Hotel;
