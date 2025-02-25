"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function CompanyAddressComponent() {
  const companyDetails = {
    name: "EvolTriv",
    address:
      "Office no. 9, vijayawada, Andhra Pradesh, India",
    phone: "9705130846",
    email: "samiafrudh45@gmail.com",
    website: "https://www.ution.com",
    mapUrl:
      "https://maps.app.goo.gl/93pDsHgBcPigqiAS7",
  };

  return (
    <div className="container px-0 py-0">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {companyDetails.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-6 px-6">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>{companyDetails.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>{companyDetails.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="hover:underline">
                  {companyDetails.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary" />
                <a
                  href={companyDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  {companyDetails.website}
                </a>
              </div>
            </div>
            <div className="w-full h-[360px]">
              <iframe
                src={companyDetails.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
                className="rounded-md"></iframe>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
