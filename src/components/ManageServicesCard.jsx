import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";

const ManageServicesCard = ({ service, handleDelete }) => {
  return (
    <div className="p-6 rounded-lg border border-gray-200  space-y-4" data-aos="fade-up">
      <div>
        <img className="rounded-md " src={service.imageUrl} alt="" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center ">
          <img
            src={service.providerImage}
            referrerpolicy="no-referrer"
            alt=""
            className="rounded-full w-12 h-12"
          />
          <span className="ml-2 font-semibold">{service.providerName}</span>
        </div>
        <h3 className="text-xl font-semibold">{service.serviceName}</h3>
        <p>
          {service.description.length > 100
            ? `${service.description.substring(0, 100)}...`
            : service.description}
        </p>
        <div className="flex items-center justify-between ">
          <p className="font-semibold ">Price: ${service.price}</p>
          <div className="flex gap-4">
            <Link to={`/editService/${service._id}`}>
              <MdEdit size={24} className="cursor-pointer" />
            </Link>
            <MdDelete
              onClick={() => handleDelete(service._id)}
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServicesCard;
