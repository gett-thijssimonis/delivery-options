declare namespace MyParcelCheckout {
  type Carrier = 'postnl' | 'bpost' | 'dpd';
  type Platform = 'myparcel' | 'belgie' | 'flespakket';

  /**
   * Configuration object supplied by the platform.
   */
  interface CheckoutConfiguration {
    address: CheckoutAddress,
    strings: CheckoutStrings,
    config: CheckoutConfig,
  }

  /**
   * Address object from the external platform.
   */
  interface CheckoutAddress {
    cc: String,
    number: String | Number,
    postalCode: String,
    city?: String
  }

  /**
   * Strings object from the external platform.
   */
  interface CheckoutStrings {
    city: String,
    postcode: String,
    houseNumber: String,
    addressNotFound: String,
    again: String,
    closed: String,
    discount: String,
    free: String,
    from: String,
    loadMore: String,
    retry: String,
    deliveryEveningTitle: String,
    deliveryMorningTitle: String,
    deliveryStandardTitle: String,
    deliveryTitle: String,
    onlyRecipientTitle: String,
    pickUpFrom: String,
    pickupTitle: String,
    signatureTitle: String,
    openingHours: String,

    // BE only
    saturdayDeliveryTitle?: String,
    wrongPostalCodeCity?: String,

    // NL only
    beDeliveryStandardTitle?: String,
    beDeliveryTitle?: String,
    wrongHouseNumberPostcode?: String,
  }

  /**
   * Response from /pickup_locations
   */
  interface PickupLocation {
    address: {
      cc: String,
      city: String
      number: String,
      postal_code: String,
      street: String,
    },
    location: {
      distance: String,
      latitude: String,
      location_code: String,
      location_name: String,
      longitude: String,
      phone_number: String,
      retail_network_id: String,
      opening_hours: {
        monday: StartEndDate[],
        tuesday: StartEndDate[],
        wednesday: StartEndDate[],
        thursday: StartEndDate[],
        friday: StartEndDate[],
        saturday: StartEndDate[],
        sunday: StartEndDate[]
      }
    },
    possibilities: DeliveryPossibility[]
  }

  /**
   * Configuration object from the external platform.
   */
  interface CheckoutConfig {
    apiBaseUrl: String,
    locale: String,
    carriers: String | Array<String>,
    platform: Platform,
    currency: String,

    cutoffTime: String,
    deliveryDaysWindow: String | Number,
    dropOffDays: String,
    dropOffDelay: String | Number,

    // BE only
    saturdayCutoffTime?: String,

    allowDeliveryOptions: Boolean,
    allowPickupPoints: Boolean,

    carrierSettings: CarrierSettings,
  }

  type CarrierSettings = {
    [key in Carrier]?: {
      allowEveningDelivery?: Boolean,
      allowMorningDelivery?: Boolean,
      allowOnlyRecipient?: Boolean,
      allowPickupExpress?: Boolean,
      allowSignature?: Boolean,

      // NL only
      allowSaturdayDelivery?: Boolean,

      // BE only
      allowMondayDelivery?: Boolean,

      priceEveningDelivery?: Number,
      priceMorningDelivery?: Number,
      priceOnlyRecipient?: Number,
      pricePickup?: Number,
      pricePickupExpress?: Number,
      priceSignature?: Number,
      priceStandardDelivery?: Number,
    };
  };

  interface CarrierData {
    id: Number,
    name: String,
    human: String,
    meta: {
      logo_png: String,
      logo_svg: String,
    }
  }

  interface Timestamp {
    date: String,
    timezone: String,
    timezone_type: Number,
  }

  /**
   * A start and end date object.
   */
  interface StartEndDate {
    start: Timestamp,
    end: Timestamp,
  }

  interface ShipmentOption {
    name: 'cooled_delivery' | 'large_format' | 'only_recipient' | 'signature' | 'return',
    schema: {
      type: String,
      enum: Boolean[]
    }
  }

  interface DeliveryTimeFrame {
    type: String,
    date_time: Timestamp
  }

  interface DeliveryPossibility {
    type: 'morning' | 'standard' | 'evening',
    shipment_options: ShipmentOption[],
    collect_date: any,
    delivery_time_frames: DeliveryTimeFrame[],
  }
}

declare module 'MyParcel' {
  export = MyParcel;
}
