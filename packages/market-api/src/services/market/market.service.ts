import { Injectable, HttpService } from '@nestjs/common';
import { Market } from 'src/models/market.model';
import { v4 as uuid } from 'uuid';
import { jwtConstants } from 'src/utils/constants';

@Injectable()
export class MarketService {
  private readonly markets: Market[] = [];
  private readonly googleMapsApiKey = jwtConstants.googleAPIKey;

  constructor(private httpService: HttpService) {
    this.markets = [
      {
        "name": "Sunday Market",
        "description": "Sunday market sells groceries",
        "imageURLs": ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
        "category": "meat",
        "address": {
            "street": "Leye Pratt St, Olowora",
            "fullAddress": "13 Leye Pratt St, Olowora, Lagos, Nigeria",
            "location": {
                "lat": 6.6387417,
                "lng": 3.3768178
            },
            "state": "Lagos",
            "streetNumber": "13",
            "city": "Olowora",
            "country": "Nigeria"
        },
        "id": "10f15fca-86e0-4cb9-92d4-9c6e984528a2"
      },
      {
        "name": "Oynibo Market",
        "description": "Oynibo market sells cloths",
        "imageURLs": ['https://picsum.photos/200/300','https://picsum.photos/200/300'],
        "category": "Okrika Clothes",
        "address": {
            "street": "Allen Ave, Allen",
            "fullAddress": "13 Allen Ave, Allen, Ikeja, Nigeria",
            "location": {
                "lat": 6.5972297,
                "lng": 3.3541596
            },
            "streetNumber": "13",
            "state": "Lagos",
            "city": "Allen",
            "country": "Nigeria"
        },
        "id": "a55c069a-00e5-42e1-9ad5-0bf0b5018e0b"
      }
    ];
  }

  async create(market: Market) {
    market.id = uuid();
    try {
      // const googleAPI = await  this.httpService.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${market.address}&key=${this.googleMapsApiKey}`).toPromise();
      const googleAPI = await this.httpService.get('https://api.github.com/users/simdi').toPromise();
      const data: Market = await this.extractAddressFromGoogleResponse(googleAPI.data, market);
      console.log('Google', data);
      this.markets.push(data);
    } catch(e) {
      console.log('Error', e);
    }
  }

  async extractAddressFromGoogleResponse(data: any, market: Market) {
    if(data.results && data.results.length > 0 && data.status && data.status === 'OK') {
      const newMarket: any = {
        ...market,
        address: {
          ...market.address,
          location: data.results[0].geometry.location
        }
      };

      // const parts = data.results[0].address_components;
      // parts.forEach(part => {
      //   if (part.types.includes("country")) {
      //     address.country = part.long_name;
      //   }
      //   if (part.types.includes("neighborhood")) {
      //     address.city = part.long_name;
      //   }
      //   if (part.types.includes("street_number")) {
      //     address.streetNumber = part.long_name;
      //   }
      // });

      return newMarket;
    }
    return market;
  }

  async searchByNameCategoryAndLocation(search: string, lng: number, lat: number) {
    console.log('Service', search, lng, lat);
    return this.markets.filter(market => {
      const nameSearch = market.name.toLowerCase().includes(search);
      const categorySearch = market.category.toLowerCase().includes(search);
      if (nameSearch || categorySearch) {
        return market;
      }
    });
  }

  async findAll(): Promise<Market[]> {
    return this.markets;
  }

  async findById(id: string): Promise<Market> {
    const market =  this.markets.find(u => u.id === id);
    if (!market) {
      return null;
    }
    return market;
  }
}
