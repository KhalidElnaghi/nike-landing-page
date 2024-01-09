import { star } from "../assets/icons";

const PopularProductCard = ({ rating, name, price, imgURL }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center">
      <img className="w-[240px] h-[240px]" src={imgURL} alt={name} />
      <div className="mt-2 flex justify-start items-center gap-2.5">
        <img src={star} width={24} height={24} alt="rating" />
        <p className="text-xl leading-normal text-slate-gray font-montserrat">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
