import PaymentPage from "@/features/payment/payment";
import React, { use } from "react";

function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  console.log(id);
  return <PaymentPage id={id} />;
}

export default Page;
