import React from "react";
import { PropertyDetails } from "./types/types";
import { Ic } from "./icons/icons";
import { Field } from "./input";
import {
  handleChangeInput,
  handleChangeTextarea,
} from "@/components/helper/input";
import { onPhoneKeyDown } from "@/components/helper/common";

function OnboardingForm({
  details,
  setDetails,
}: {
  details: PropertyDetails;
  setDetails: React.Dispatch<React.SetStateAction<PropertyDetails>>;
}) {
  return (
    <div key="step2" className="flex flex-col gap-4 flex-1 fade-up d2">
      {/* Basic */}
      <div>
        <p className="font-jakarta text-[9px] uppercase tracking-widest text-stone-300 mb-2.5">
          Basic Info
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="Hotel Name *"
            value={details.name}
            onChange={(e) => handleChangeInput(setDetails, e, "name")}
            // onChange={handleChangeInput("name")}
            placeholder="The Grand Meridian"
            icon={<Ic.Hotel />}
          />

          {/* Description — full width */}
          <div className="col-span-2">
            <label className="font-jakarta text-[10px] uppercase tracking-widest text-stone-400 block mb-1.5">
              Description
            </label>
            <textarea
              value={details.description}
              onChange={(e) =>
                handleChangeTextarea(setDetails, e, "description")
              }
              placeholder="A brief description of your property for guests…"
              rows={3}
              className="ob-textarea w-full font-jakarta text-sm text-stone-700 placeholder-stone-300 bg-amber-50/40 border border-stone-200 rounded-xl px-4 py-2.5 resize-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <p className="font-jakarta text-[9px] uppercase tracking-widest text-stone-300 mb-2.5">
          Location
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="Street Address"
            value={details.address}
            onChange={(e) => handleChangeInput(setDetails, e, "address")}
            placeholder="123 Marina Walk"
            icon={<Ic.MapPin />}
          />
          <Field
            label="City *"
            value={details.city}
            onChange={(e) => handleChangeInput(setDetails, e, "city")}
            placeholder="Dubai"
            icon={<Ic.City />}
            half
          />
          <Field
            label="Country *"
            value={details.country}
            onChange={(e) => handleChangeInput(setDetails, e, "country")}
            placeholder="UAE"
            icon={<Ic.Globe />}
            half
          />
        </div>
      </div>

      {/* Contact */}
      <div>
        <p className="font-jakarta text-[9px] uppercase tracking-widest text-stone-300 mb-2.5">
          Contact
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="Phone"
            value={details.phone}
            onChange={(e) => handleChangeInput(setDetails, e, "phone")}
            handleKeyDown={onPhoneKeyDown}
            placeholder="+971 4 000 0000"
            icon={<Ic.Phone />}
            half
          />
          <Field
            label="Email"
            value={details.email}
            onChange={(e) => handleChangeInput(setDetails, e, "email")}
            placeholder="info@hotel.com"
            icon={<Ic.Mail />}
            half
          />
        </div>
      </div>
    </div>
  );
}

export default OnboardingForm;
