import { Button } from "@/components/ui/button";

export default function HomeSlider() {
  return (
    <div className="bg-radial-[at_50%_75%] from-rose-200 via-white to-white to-90% py-10">
      <div className="container flex flex-col md:flex-row items-center gap-6">
        <div className="flex-2 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold dark:text-primary">
            We Deliver Parcel on Time with no Hassle
          </h1>
          <p className="dark:text-gray-900">
            Easy Tracking, fast Payment, and safe Delivery across country.
          </p>
          <Button>Become a Seller</Button>
        </div>
        <div className="flex-3">
          <img src="/rider.svg" alt="" />
        </div>
        <div className="hidden lg:block lg:flex-2">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <img
                src="/sm_marchant.svg"
                className="h-14 w-14 border border-primary/50 p-2 rounded-sm"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="text-3xl font-bold text-primary">300k +</h5>
                <p className="text-gray-500">Registered Merchant</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="/sm_rider.svg"
                className="h-14 w-14 border border-primary/50 p-2 rounded-sm"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="text-3xl font-bold text-primary">10k +</h5>
                <p className="text-gray-500">Delivery Man</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="/sm_hub.svg"
                className="h-14 w-14 border border-primary/50 p-2 rounded-sm"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="text-3xl font-bold text-primary">500 +</h5>
                <p className="text-gray-500">Delivery Point</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
