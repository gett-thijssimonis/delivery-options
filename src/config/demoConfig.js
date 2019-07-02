export default {
  address: {
    cc: 'NL',
    postalCode: '1025 WK',
    number: '576',
    city: 'Amsterdam',
  },
  config: {
    // CUSTOM!
    carriers: '1,2,3',
    currency: 'EUR',
    // END OF CUSTOM
    apiBaseUrl: 'https://api.myparcel.nl/',
    carrier: '1',
    priceMorningDelivery: 8.99,
    priceNormalDelivery: 6.95,
    priceEveningDelivery: 7.99,
    priceSignature: -0.35,
    priceOnlyRecipient: 0.23,
    pricePickup: -1,
    pricePickupExpress: 3.95,
    allowMondayDelivery: 1,
    allowMorningDelivery: 1,
    allowEveningDelivery: 1,
    allowSignature: 1,
    allowOnlyRecipient: 1,
    allowPickupPoints: 1,
    allowPickupExpress: 1,
    dropOffDays: '1;2;3;4',
    saturdayCutoffTime: '16:00',
    cutoffTime: '17:00',
    deliverydaysWindow: 1,
    dropoffDelay: '1',
  },
  textToTranslate: {
    // CUSTOM!
    carrierPostnlTitle: 'PostNL',
    carrierDpdTitle: 'DPD',
    carrierBpostTitle: 'bpost',
    // END OF CUSTOM
    deliveryTitle: 'Delivered at home or at work',
    deliveryMorningTitle: 'Morning delivery',
    deliveryStandardTitle: 'Standard delivery',
    deliveryEveningTitle: 'Evening delivery',
    signatureTitle: 'Signature on delivery',
    onlyRecipientTitle: 'Home address only',
    saturdayDeliveryTitle: 'saturday_delivery_title',
    pickupTitle: 'PostNL Pickup',
    headerDeliveryOptions: 'Delivery options',
    BEdeliveryTitle: 'Delivery',
    BEdeliveryStandardTitle: 'Standard delivery',
    addressNotFound: 'Address details are not entered',
    pickUpFrom: 'Pick up from',
    openingHours: 'Opening hours',
    closed: 'Closed',
    postcode: 'Postcode',
    houseNumber: 'House number',
    city: 'City',
    retry: 'Retry',
    wrongHouseNumberPostcode: 'House number/postcode combination unknown',
    quickDelivery: 'Deliver as quickly as possible',
    again: 'Again',
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
  },
};
