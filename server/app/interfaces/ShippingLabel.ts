export interface Address {
  name: string;
  company: string;
  email: string;
  phone: string;
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  reference: string;
}

export interface Dimension {
  length: number;
  width: number;
  height: number;
}

export enum EPackageType {
  "ENVELOPE" = "envelope",
  "BOX" = "box",
  "PALLET" = "pallet",
}

export enum EPackagelenghtUnit {
  CM = "CM",
  IN = "IN",
}

export enum EPackageweightUnit {
  KG = "KG",
  IN = "LB",
}
export interface Package {
  content: string;
  amount: number;
  type: EPackageType;
  dimensions: Dimension;
  weight: number;
  insurance: number;
  declaredValue: number;
  weightUnit: EPackageweightUnit;
  lengthUnit: EPackagelenghtUnit;
}

export interface Shipment {
  carrier: string;
  service: string;
  type: number;
}

export interface Settings {
  printFormat: string;
  printSize: string;
  comments: string;
}

export interface ShippingRequest {
  origin: Address;
  destination: Address;
  packages: Package[];
  shipment: Shipment;
  settings: Settings;
}

export interface ShipmentResponseMeta {
  meta: string;
  data: ShipmentData[];
}

export interface ShipmentData {
  carrier: string;
  service: string;
  trackingNumber: string;
  trackUrl: string;
  label: string;
  additionalFiles: string[];
  totalPrice: number;
  currentBalance: number;
  currency: string;
}

export interface ShipmentResponse {
  code?: number;
  message?: string;
  description?: string;
  location?: string;
  reference?: string;
}
