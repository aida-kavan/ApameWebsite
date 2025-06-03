import { useQuery } from "@tanstack/react-query";
import { getPrintingServices } from "../lib/api";
import { useNavigate } from "react-router-dom";
import Spinner from "@/components/ui/Spinner";

interface PrintingService {
  id: number;
  name: string;
}

function PrintServices() {
  const navigate = useNavigate();
  const {
    data: prints,
    isLoading,
    error,
  } = useQuery<PrintingService[]>({
    queryKey: ['printingservices'],
    queryFn: getPrintingServices,
  });

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        خطا در دریافت داده‌ها
      </div>
    );

  function handleServiceClick(serviceId: number) {
    navigate("/offset-services", { 
      state: { 
        serviceId: serviceId 
      } 
    });
  }

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-3">
        {prints?.map((service) => (
          <button 
            key={service.id}
            className="bg-gray-100 px-4 py-2 rounded-lg"
            onClick={() => handleServiceClick(service.id)}
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PrintServices;
