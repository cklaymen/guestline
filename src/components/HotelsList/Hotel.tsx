import { HotelData } from "../../hooks/useHotelsData";
import ImagesSlider from "../ImagesSlider";
import Rating from "../Rating/Rating";

const Hotel: React.FC<{ data: HotelData }> = ({ data }) => (
  <div className="flex flex-row items-start justify-between border-2 border-solid border-slate-300 p-2 gap-2">
    <ImagesSlider imagesUrl={data.images} />
    <div className="flex flex-col gap-1 ml-0 mr-auto">
      <span className="text-base">{data.name}</span>
      <span className="text-xs">{data.address1}</span>
      <span className="text-xs">{data.address2}</span>
    </div>
    <Rating rating={data.starRating} />
  </div>
);

export default Hotel;
