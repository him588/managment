import { useServiceContext } from "@/context/service-context";
import EmptyState from "../staff/empty-state";
import { useGetServices } from "../hooks/use-api";
import ActiveService from "./active-service";

function Service() {
  const { setServiceModal } = useServiceContext();
  const { data } = useGetServices();

  return (
    <section className=" h-[100%]">
      {data?.data.services.length === 0 ? (
        <EmptyState
          title="No Services Found"
          description="This property doesn’t have any services yet. Start by adding one."
          buttonText="Add Service"
          className=""
          onButtonClick={() => setServiceModal("Services")}
        />
      ) : (
        <ActiveService />
      )}
    </section>
  );
}

export default Service;
