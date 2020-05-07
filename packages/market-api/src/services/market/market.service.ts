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
        "category": "Meat",
        "address": {
            "street": "Ozumba Mbadiwe Ave",
            "fullAddress": "Plot GA 1, Ozumba Mbadiwe Ave, Victoria Island, Lagos",
            "location": {
                "lat": 6.437949499999999,
                "lng": 3.4230012
            },
            "state": "Lagos",
            "streetNumber": "13",
            "city": "Victoria Island",
            "country": "Nigeria"
        },
        "id": "10f15fca-86e0-4cb9-92d4-9c6e984528a2"
      },
      {
        "name": "Eko Market",
        "description": "Eko sells all kinds of stuff",
        "imageURLs": ['https://picsum.photos/200/300','https://picsum.photos/200/300'],
        "category": "Clothes",
        "address": {
            "street": "Adetokunbo Ademola",
            "fullAddress": "Plot 1415 Adetokunbo Ademola Street, PMB 12724, Victoria Island, Lagos Nigeria",
            "location": {
                "lat": 6.426759800000001,
                "lng": 3.4301443
            },
            "streetNumber": "1415",
            "state": "Lagos",
            "city": "Victoria Island",
            "country": "Nigeria"
        },
        "id": "a55c069a-00e5-42e1-9ad5-0bf0b5018e0b"
      },
      {
        "name": "Lasode Market",
        "description": "Lasode market sells all kind of meat",
        "imageURLs": ['https://picsum.photos/200/300','https://picsum.photos/200/300'],
        "category": "Meat market",
        "address": {
            "street": "Lasode Cresent",
            "fullAddress": "8, Lasode Cresent Victoria Island, Lagos,Nigeria",
            "location": {
              "lat": 6.4353943,
              "lng": 3.4410672
            },
            "streetNumber": "8",
            "state": "Lagos",
            "city": "Victoria Island",
            "country": "Nigeria"
        },
        "id": "a55c069a-00e5-42e1-9ad5-0bf0b5014304"
      }
    ];
  }

  async create(market: Market) {
    market.id = uuid();
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${market.address}&key=${this.googleMapsApiKey}`;
      const googleAPI = await  this.httpService.get(url).toPromise();
      const data: Market = await this.extractAddressFromGoogleResponse(googleAPI.data, market);
      this.markets.push(data);
    } catch(e) {
      console.error('Error', e);
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

      return newMarket;
    }
    return market;
  }

  async searchByNameCategoryAndLocation(search: string, lng: number, lat: number) {
    try {
      if (lng || lat) {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.googleMapsApiKey}`;
        // Get users location from google api
        const googleAPI = await this.httpService.get(url).toPromise();
        // Get city, state, and country
        const googleRes = await this.extractLocationFromGoogleResponse(googleAPI.data);
        if (googleRes) {
          const { city, state, country } = googleRes;
          return this.markets.filter(market => {
            const nameSearch = market.name.toLowerCase().includes(search.toLowerCase());
            const categorySearch = market.category.toLowerCase().includes(search.toLowerCase());
            const citySearch = market.address.city.toLowerCase().includes(city.toLowerCase());
            const stateSearch = market.address.state.toLowerCase().includes(state.toLowerCase());
            const countrySearch = market.address.country.toLowerCase().includes(country.toLowerCase());
            if ((nameSearch || categorySearch) && (citySearch && stateSearch && countrySearch)) {
              return market;
            }
          });
        }
      } else {
        return this.markets.filter(market => {
          const nameSearch = market.name.toLowerCase().includes(search);
          const categorySearch = market.category.toLowerCase().includes(search);
          if (nameSearch || categorySearch) {
            return market;
          }
        });
      }
    } catch (e) {
      console.error('Error', e);
    }
  }

  async extractLocationFromGoogleResponse(data: any) {
    if(data.results && data.results.length > 0 && data.status && data.status === 'OK') {
      const address: any = {};
      const parts = data.results[0].address_components;
      parts.forEach(part => {
        if (part.types.includes("country")) {
          address.country = part.long_name;
        }
        if (part.types.includes("neighborhood") || part.types.includes('administrative_area_level_2') || part.types.includes('locality')) {
          address.city = part.long_name;
        }
        if (part.types.includes("administrative_area_level_1")) {
          address.state = part.long_name;
        }
      });

      return address;
    }
    return null;
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
