export declare class GeoLocation {
    coordinates: number[];
    type: string;
}
export declare class Address {
    street: string;
    houseNumber: string;
    zipCode: string;
    city: string;
    country: string;
    phoneNumber?: string;
    location: GeoLocation;
}
