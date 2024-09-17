"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function CompanyAddressComponent() {
  const companyDetails = {
    name: "GW Infra Solutions",
    address:
      "Office no. 9, Azad Singh state, Marol pipe line, Andheri East, Mumbai - 400059",
    phone: "9967823681, 9137107084, 9892292231",
    email: "gwinfrasolutions@gmail.com",
    website: "https://www.gwinfrasolution.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d519.6841867257617!2d72.87827803557482!3d19.1085550303956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90987928d65%3A0xc184bbaaea6d49cd!2sOffice!5e0!3m2!1sen!2sin!4v1726607891959!5m2!1sen!2sin",
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
