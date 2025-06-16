"use client";

import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Ticket, ArrowUpRight, MoreHorizontal } from "lucide-react";
import Image from "next/image";

// Keen Slider plugin for thumbnail navigation. No idea why that is deprecated below.
function ThumbnailPlugin(
  mainRef: React.MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }
    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }
    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

// Mock product data and a function for the slider.
const product = {
  images: [
    "/images/mac/mac1.jpg",
    "/images/mac/mac2.jpg",
    "/images/mac/mac3.jpg",
    "/images/mac/mac4.jpg",
  ],
  name: "Macbook Pro 16",
  id: "C02CG123DC79",
  details: "MBP bought from Copper Store at Central Ladprao",
  price: 47000,
  item_count: 15,
  category: "Laptops",
  subunits: ["Accounting", "HR", "Design"],
};

// Mock service history data for the Macbook
const macbookServiceHistory = [
  {
    tickId: "#MBP001",
    description: "Assigned to John Doe (IT)",
    date: "Jan 10th",
    status: "Assign",
    order: 1,
  },
  {
    tickId: "#MBP002",
    description: "Battery replaced",
    date: "Feb 2nd",
    status: "Replace",
    order: 2,
  },
  {
    tickId: "#MBP003",
    description: "Screen repair",
    date: "Feb 15th",
    status: "Repair",
    order: 3,
  },
  {
    tickId: "#MBP004",
    description: "Returned to HR",
    date: "Mar 1st",
    status: "Return",
    order: 4,
  },
  {
    tickId: "#MBP005",
    description: "Assigned to Jane Smith (Design)",
    date: "Mar 5th",
    status: "Assign",
    order: 5,
  },
  {
    tickId: "#MBP006",
    description: "SSD upgrade",
    date: "Apr 12th",
    status: "Install",
    order: 6,
  },
  {
    tickId: "#MBP007",
    description: "Keyboard replacement",
    date: "May 3rd",
    status: "Replace",
    order: 7,
  },
  {
    tickId: "#MBP008",
    description: "Assigned to Alex Lee (Engineering)",
    date: "May 10th",
    status: "Assign",
    order: 8,
  },
  {
    tickId: "#MBP010",
    description: "Logic board repair",
    date: "Jun 15th",
    status: "Repair",
    order: 10,
  },
];

// Status colors for the service history tags
const statusColors: { [key: string]: string } = {
  Repair: "bg-blue-100 text-blue-600",
  Replace: "bg-yellow-100 text-yellow-600",
  Install: "bg-green-100 text-green-600",
  Return: "bg-red-100 text-red-600",
  Assign: "bg-purple-100 text-purple-600",
};

// Component for displaying the Macbook service history. Should probably move it to it's own file.
const MacbookServiceHistory = () => {
  return (
    <div>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-sm font-normal text-stone-500">
            <th className="text-start p-1.5">Ticket ID</th>
            <th className="text-start p-1.5">Activity</th>
            <th className="text-start p-1.5">Date</th>
            <th className="text-start p-1.5">Status</th>
            <th className="w-8"></th>
          </tr>
        </thead>
        <tbody>
          {macbookServiceHistory.map((row) => (
            <tr
              className={row.order % 2 ? "bg-stone-100 text-sm" : "text-sm"}
              key={row.tickId}
            >
              <td className="p-1.5">
                <a
                  href="#"
                  className="text-red-600 underline flex items-center gap-1"
                >
                  {row.tickId} <ArrowUpRight size={14} />
                </a>
              </td>
              <td className="p-1.5">{row.description}</td>
              <td className="p-1.5">{row.date}</td>
              {/* The tags are custom. I can change them to shadcn badges but they look better and different than the Sub-Unit badges. */}
              <td className="p-1.5">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    statusColors[row.status] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="w-8">
                <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
                  <MoreHorizontal size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Actual component for this Product details page.
const ProductDetailsPage = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-bold">{product.name}</h2>
            </CardTitle>
            <CardDescription>
              <div className="text-sm text-gray-500">Item ID: {product.id}</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Image Carousel */}
            <div
              ref={sliderRef}
              className="keen-slider rounded-lg overflow-hidden mb-4"
            >
              {product.images.map((src, idx) => (
                <div className="keen-slider__slide" key={idx}>
                  <Image
                    src={src}
                    alt={product.name}
                    width={512}
                    height={256}
                    className="w-full h-64 object-cover"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
            {/* Thumbnails */}
            <div ref={thumbnailRef} className="keen-slider thumbnail mb-4">
              {product.images.map((src, idx) => (
                <div className="keen-slider__slide" key={idx}>
                  <Image
                    src={src}
                    alt={`Thumbnail ${idx + 1}`}
                    width={80}
                    height={64}
                    className="w-20 h-16 object-cover rounded cursor-pointer border"
                  />
                </div>
              ))}
            </div>
            {/* Product Info */}
            <div className="space-y-2 text-center">
              <div className="text-base italic text-left">
                {product.details}
              </div>
              <div className="text-lg font-semibold text-blue-600">
                ฿{product.price.toLocaleString()}
              </div>
              <div className="text-sm">Item Count: {product.item_count}</div>
              <div className="text-sm">Category: {product.category}</div>
              <div className="flex flex-col items-center gap-2">
                <Label className="mt-6 text-sm font-semibold">
                  Sub-Unit(s):
                </Label>
                <div className="flex flex-wrap justify-center gap-2">
                  {product.subunits.map((unit, idx) => (
                    <Badge key={idx} className="bg-blue-100 text-blue-600">
                      {unit}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Right column: two stacked cards */}
      <div className="flex flex-col gap-6 col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Additional Info</CardTitle>
            <CardDescription>
              Additional fields for product details can be added in the
              settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <div>
                <Label className="text-xs text-gray-500">Brand</Label>
                <div className="font-medium">Apple</div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Model</Label>
                <div className="font-medium">MacBook Pro 16</div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">SKU</Label>
                <div className="font-medium">MBP14-M4P-2TB-GR-A2338</div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Assigned To</Label>
                <div className="font-medium">Alex Lee (Engineering)</div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Processor</Label>
                <div className="font-medium">Apple M1 Pro</div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">RAM</Label>
                <div className="font-medium">32 GB</div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Storage</Label>
                <div className="font-medium">1 TB SSD</div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Purchase Date</Label>
                <div className="font-medium">2023-01-15</div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">Warranty Type</Label>
                <div className="font-medium">AppleCare</div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">
                  Warranty End Date
                </Label>
                <div className="font-medium">2024-01-15</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ticket />
              Service History
            </CardTitle>
            <CardDescription>
              Internal info: the status tags are Assign, Replace, Repair,
              Install, Return. We can change them later and this part is not
              linked to anything until we are done with the technicians part.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MacbookServiceHistory />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
