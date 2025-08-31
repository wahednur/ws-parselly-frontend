import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div>
      <div className="py">
        <h1 className="text-2xl lg:text-5xl">Frequently asked Questions</h1>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">
            Why WS Parselly
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              WS Parselly stands out for its commitment to delivering parcels
              nationwide on time and without any hassle. We pride ourselves on
              offering fast payment, easy tracking, a dedicated customer service
              team, and ensuring the safe delivery of your parcels.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">
            What is the coverage area of WS Parselly
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              WS Parselly extends its services across 8 divisions, 495 Upazilas,
              and 330 Municipal Corporations. Click here for a comprehensive
              list of detailed service locations.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">
            {" "}
            What services does Steadfast Courier provide?{" "}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Revel in the excellence of E-commerce delivery, pick-and-drop ,
              cutting-edge warehousing, entrust your goods to our
              state-of-the-art warehousing, and witness perfection in packaging
              solutions.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
