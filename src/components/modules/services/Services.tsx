export default function Services() {
  return (
    <div className="container mt">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="hover:bg-primary/30 rounded-lg border border-primary/30 hover:border-primary duration-300 p-5">
          <img src="/ecom_delivry.svg" alt="" />
          <h2 className="text-2xl mt-6 font-bold">Ecommerce Delivery</h2>
        </div>
        <div className="hover:bg-primary/30 rounded-lg border border-primary/30 hover:border-primary duration-300 p-5">
          <img src="/pick_n_drop.svg" alt="" />
          <h2 className="text-2xl mt-6 font-bold">Pick and Drop</h2>
        </div>
        <div className="hover:bg-primary/30 rounded-lg border border-primary/30 hover:border-primary duration-300 p-5">
          <img src="/packeging.svg" alt="" />
          <h2 className="text-2xl mt-6 font-bold">Packging</h2>
        </div>
        <div className="hover:bg-primary/30 rounded-lg border border-primary/30 hover:border-primary duration-300 p-5">
          <img src="/warehouse.svg" alt="" />
          <h2 className="text-2xl mt-6 font-bold">Warehousing</h2>
        </div>
      </div>
    </div>
  );
}
