export class Purchaseorder {
    constructor  (
        public id: string,
        public consignee: string,
        
         public shippingType: string,
            public Country: string,
            public City: string,
            public State: string,
            public Postal: string,
            public departure: string,
            public country: string,
            public city: string,
            public state: string,
            public postal: string,
            public arrival: string,
            public quantity: string,
            public quantityunit: string,
            public totalweight: string,
            public weightunit: string,
            public length: string,
            public width: string,
            public height: string,
            public units: string,
            public stackable: boolean,
            public hazardous: boolean,
            public insurance: boolean,
            public incotermsunit: string,
            public comment: string,
            public amount: string,
        ) {}
        
    }