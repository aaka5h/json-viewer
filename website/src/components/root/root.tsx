import { Component, ReactNode, RefObject } from 'react';
import * as React from 'react';
import JsonParser from '../../../../packages/json-handler/implementations/json-parser';
import JpsonInputComponent from '../Input/Input';
import JsonItemInterface from '../../../../packages/json-handler/types/json-item.interface';
import JsonViewerComponent from '../../../../packages/components/Inline/JsonViewerComponent';

interface stateType {
  // mJson: JsonItemInterface;
  parseError: boolean;
  newJson: object;
}

export default class RootComponent extends Component<any, stateType> {

  test = {
    'ResultCounts': {
      'CommCount': [],
      'PaidCommCount': 11,
      'NbyCommCount': 0,
      'PaidNbyCommCount': 0,
      'HotDealsCount': 11,
      'QmiCount': 24,
      'TotalBrands': {},
      'HomeCount': 60,
      'TotalPlans': 36,
      'CommAllHomeCount': 59,
      'CommAllLuxuryCount': 0,
      'BlCount': 0,
      'BoylCommCount': 0,
      'BoylHomeCount': 0,
      'Facets': {
        'Sf': 10,
        'Mf': 1,
        'Pool': 0,
        'Green': 11,
        'Golf': 0,
        'Gated': 0,
        'Nature': 1,
        'Parks': 0,
        'Views': 1,
        'WaterFront': 1,
        'Sports': 0,
        'Adult': 0,
        'PrRange': '209900-399900',
        'BrRange': '3-6',
        'BaRange': '2-4',
        'SftRange': '1642-4110',
        'Custom': 0,
        'Boyl': 0,
        'Manufactured': 0,
        'Brands': [{'Key': 2940, 'Value': 'Smith Douglas Homes'}],
        'Builders': [],
        'SchoolDistricts': [{'Key': 4190, 'Value': 'Johnston Co SD'}, {'Key': 4109, 'Value': 'Lee Co SD'}, {
          'Key': 9964,
          'Value': 'Wake Co SD'
        }],
        'Communities': [{'Key': 133401, 'Value': 'Canyon Creek'}, {
          'Key': 111914,
          'Value': 'Copper Ridge East'
        }, {'Key': 115198, 'Value': 'Hayesbury Townes'}, {
          'Key': 103106,
          'Value': 'Knolls at the Neuse'
        }, {'Key': 122061, 'Value': 'Mendenhall'}, {'Key': 108499, 'Value': 'Nottingham'}, {
          'Key': 111248,
          'Value': 'Rhodes Estates'
        }, {'Key': 110758, 'Value': 'Sauls Farm'}, {'Key': 126616, 'Value': 'Sumerlyn'}, {
          'Key': 125640,
          'Value': 'Theys Mill'
        }, {'Key': 111697, 'Value': 'Vandora West'}],
        'Cities': [{'MarketId': 181, 'Count': 2, 'Key': 181, 'Value': 'Clayton', 'State': 'NC'}, {
          'MarketId': 181,
          'Count': 1,
          'Key': 181,
          'Value': 'Fuquay Varina',
          'State': 'NC'
        }, {'MarketId': 181, 'Count': 2, 'Key': 181, 'Value': 'Garner', 'State': 'NC'}, {
          'MarketId': 181,
          'Count': 2,
          'Key': 181,
          'Value': 'Raleigh',
          'State': 'NC'
        }, {'MarketId': 181, 'Count': 3, 'Key': 181, 'Value': 'Sanford', 'State': 'NC'}, {
          'MarketId': 181,
          'Count': 1,
          'Key': 181,
          'Value': 'Zebulon',
          'State': 'NC'
        }],
        'PostalCodes': [{'MarketId': 181, 'Count': 2, 'Key': 27330, 'Value': '27330', 'State': 'NC'}, {
          'MarketId': 181,
          'Count': 1,
          'Key': 27331,
          'Value': '27331',
          'State': 'NC'
        }, {'MarketId': 181, 'Count': 1, 'Key': 27520, 'Value': '27520', 'State': 'NC'}, {
          'MarketId': 181,
          'Count': 1,
          'Key': 27526,
          'Value': '27526',
          'State': 'NC'
        }, {'MarketId': 181, 'Count': 1, 'Key': 27527, 'Value': '27527', 'State': 'NC'}, {
          'MarketId': 181,
          'Count': 2,
          'Key': 27529,
          'Value': '27529',
          'State': 'NC'
        }, {'MarketId': 181, 'Count': 1, 'Key': 27597, 'Value': '27597', 'State': 'NC'}, {
          'MarketId': 181,
          'Count': 1,
          'Key': 27607,
          'Value': '27607',
          'State': 'NC'
        }, {'MarketId': 181, 'Count': 1, 'Key': 27610, 'Value': '27610', 'State': 'NC'}],
        'County': [{'MarketId': 181, 'Count': 2, 'Key': 181, 'Value': 'Johnston', 'State': 'NC'}, {
          'MarketId': 181,
          'Count': 3,
          'Key': 181,
          'Value': 'Lee',
          'State': 'NC'
        }, {'MarketId': 181, 'Count': 6, 'Key': 181, 'Value': 'Wake', 'State': 'NC'}]
      },
      'Radius': 0
    }, 'SearchType': 'MultiLocation', 'Time': '00:00:00.66', 'Status': 'OK', 'Server': 'NHSWEBAPI4', 'Result': [{
      'HomeId': 1527061,
      'CommId': 122061,
      'ParentCommId': 0,
      'PlanId': 1527061,
      'ListingId': 67972671,
      'IsBasic': 0,
      'CommName': 'Mendenhall',
      'PlanName': 'The Avery',
      'MoveInDate': '',
      'IsSpec': 0,
      'SpecNum': null,
      'MarketId': 181,
      'BuilderId': 41315,
      'Br': 3,
      'MasterBedLoc': 2,
      'Ba': 3,
      'HBa': 0,
      'St': 1.0,
      'Gr': 2.0,
      'Sft': 2404,
      'Price': '315900',
      'Addr': '6790 Mitchell Mill Rd. Zebulon, NC',
      'City': 'Zebulon',
      'County': 'Wake',
      'State': 'NC',
      'Zip': '27597',
      'Thumb1': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/32471031-190225.png',
      'Thumb2': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/21231377-170124.jpg',
      'IntImage': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/21231376-170124.jpg',
      'Status': 'R',
      'Lat': '35.890862',
      'Lng': '-78.430844',
      'Brand': {
        'Id': 2940,
        'Name': 'Smith Douglas Homes',
        'Logo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-MED.jpg',
        'LogoSmall': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
        'MarketId': 0,
        'SiteUrl': 'smithdouglas.com',
        'ShowCaseStatusId': 1
      },
      'SchoolDistricts': [{'Id': 9964, 'Name': 'Wake Co SD', 'DistrictName': null}],
      'IsHotHome': 0,
      'Dist': 0.0,
      'IsBl': 0,
      'Green': 1,
      'ImageCount': 15,
      'HasVideo': 1,
      'Promo': 1,
      'FloorPlanPath': 'N',
      'PlanViewer': 'https://rendering.house/app/smithdouglas/?nbrhood=Mendenhall&elevation=Avery%20A',
      'VirtualTour': 'N',
      'MarketingDesc': null,
      'SpecLat': null,
      'SpecLng': null,
      'CommStatus': 'G',
      'BrandLogo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
      'Desc': null,
      'IsDescAutoGenerated': 0,
      'Phone': '877-774-2473',
      'CommunityType': 'N',
      'ProjectType': 'SBC',
      'IsLuxury': 0,
      'HomeType': 'SF',
      'SpecSaleStatus': null,
      'NumLivingAreas': 0,
      'IsLandExcluded': false
    }, {
      'HomeId': 1569167,
      'CommId': 125640,
      'ParentCommId': 0,
      'PlanId': 1569167,
      'ListingId': 68081100,
      'IsBasic': 0,
      'CommName': 'Theys Mill',
      'PlanName': 'The Palmer',
      'MoveInDate': '',
      'IsSpec': 0,
      'SpecNum': null,
      'MarketId': 181,
      'BuilderId': 41315,
      'Br': 4,
      'MasterBedLoc': 0,
      'Ba': 3,
      'HBa': 1,
      'St': 2.0,
      'Gr': 2.0,
      'Sft': 2831,
      'Price': '299900',
      'Addr': '1320 Bowling Rd',
      'City': 'Fuquay Varina',
      'County': 'Wake',
      'State': 'NC',
      'Zip': '27526',
      'Thumb1': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/32413288-190221.png',
      'Thumb2': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/32413289-190221.png',
      'IntImage': null,
      'Status': 'R',
      'Lat': '35.564335',
      'Lng': '-78.800971',
      'Brand': {
        'Id': 2940,
        'Name': 'Smith Douglas Homes',
        'Logo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-MED.jpg',
        'LogoSmall': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
        'MarketId': 0,
        'SiteUrl': 'smithdouglas.com',
        'ShowCaseStatusId': 1
      },
      'SchoolDistricts': [{'Id': 9964, 'Name': 'Wake Co SD', 'DistrictName': null}],
      'IsHotHome': 0,
      'Dist': 0.0,
      'IsBl': 0,
      'Green': 1,
      'ImageCount': 5,
      'HasVideo': 0,
      'Promo': 1,
      'FloorPlanPath': 'N',
      'PlanViewer': 'https://rendering.house/app/smithdouglas/?nbrhood=Theys%20Mill&elevation=Palmer%20A',
      'VirtualTour': 'N',
      'MarketingDesc': null,
      'SpecLat': null,
      'SpecLng': null,
      'CommStatus': 'C',
      'BrandLogo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
      'Desc': null,
      'IsDescAutoGenerated': 0,
      'Phone': '877-276-6789',
      'CommunityType': 'N',
      'ProjectType': 'SBC',
      'IsLuxury': 0,
      'HomeType': 'SF',
      'SpecSaleStatus': null,
      'NumLivingAreas': 0,
      'IsLandExcluded': false
    }, {
      'HomeId': 1658449,
      'CommId': 133401,
      'ParentCommId': 0,
      'PlanId': 1658449,
      'ListingId': 68347016,
      'IsBasic': 0,
      'CommName': 'Canyon Creek',
      'PlanName': 'The Carlyle',
      'MoveInDate': '',
      'IsSpec': 0,
      'SpecNum': null,
      'MarketId': 181,
      'BuilderId': 41315,
      'Br': 3,
      'MasterBedLoc': 2,
      'Ba': 2,
      'HBa': 1,
      'St': 2.0,
      'Gr': 2.0,
      'Sft': 2144,
      'Price': '214900',
      'Addr': '1400 Dycus Rd, Sanford NC',
      'City': 'Sanford',
      'County': 'Lee',
      'State': 'NC',
      'Zip': '27330',
      'Thumb1': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/21250335-170125.jpg',
      'Thumb2': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/25690077-180105.jpg',
      'IntImage': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/25690066-180105.jpg',
      'Status': 'R',
      'Lat': '35.433228',
      'Lng': '-79.286552',
      'Brand': {
        'Id': 2940,
        'Name': 'Smith Douglas Homes',
        'Logo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-MED.jpg',
        'LogoSmall': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
        'MarketId': 0,
        'SiteUrl': 'smithdouglas.com',
        'ShowCaseStatusId': 1
      },
      'SchoolDistricts': [{'Id': 4109, 'Name': 'Lee Co SD', 'DistrictName': null}],
      'IsHotHome': 0,
      'Dist': 0.0,
      'IsBl': 0,
      'Green': 1,
      'ImageCount': 9,
      'HasVideo': 1,
      'Promo': 1,
      'FloorPlanPath': 'N',
      'PlanViewer': 'N',
      'VirtualTour': 'N',
      'MarketingDesc': null,
      'SpecLat': null,
      'SpecLng': null,
      'CommStatus': 'C',
      'BrandLogo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
      'Desc': null,
      'IsDescAutoGenerated': 0,
      'Phone': '888-204-5511',
      'CommunityType': 'N',
      'ProjectType': 'SBC',
      'IsLuxury': 0,
      'HomeType': 'SF',
      'SpecSaleStatus': null,
      'NumLivingAreas': 0,
      'IsLandExcluded': false
    }, {
      'HomeId': 1695520,
      'CommId': 125640,
      'ParentCommId': 0,
      'PlanId': 1565091,
      'ListingId': 68343087,
      'IsBasic': 0,
      'CommName': 'Theys Mill',
      'PlanName': 'The Bayfield',
      'MoveInDate': '',
      'IsSpec': 1,
      'SpecNum': null,
      'MarketId': 181,
      'BuilderId': 41315,
      'Br': 4,
      'MasterBedLoc': 2,
      'Ba': 2,
      'HBa': 1,
      'St': 0.0,
      'Gr': 2.0,
      'Sft': 2508,
      'Price': '325830',
      'Addr': '1204 London Meadow Way',
      'City': 'Fuquay Varina',
      'County': 'Wake',
      'State': 'NC',
      'Zip': '27526',
      'Thumb1': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/35113822-190810.jpg',
      'Thumb2': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/25668435-180104.jpg',
      'IntImage': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/25668430-180104.jpg',
      'Status': 'UC',
      'Lat': '35.564335',
      'Lng': '-78.800971',
      'Brand': {
        'Id': 2940,
        'Name': 'Smith Douglas Homes',
        'Logo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-MED.jpg',
        'LogoSmall': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
        'MarketId': 0,
        'SiteUrl': 'smithdouglas.com',
        'ShowCaseStatusId': 1
      },
      'SchoolDistricts': [{'Id': 9964, 'Name': 'Wake Co SD', 'DistrictName': null}],
      'IsHotHome': 0,
      'Dist': 0.0,
      'IsBl': 0,
      'Green': 1,
      'ImageCount': 34,
      'HasVideo': 0,
      'Promo': 1,
      'FloorPlanPath': 'N',
      'PlanViewer': 'N',
      'VirtualTour': 'N',
      'MarketingDesc': null,
      'SpecLat': null,
      'SpecLng': null,
      'CommStatus': 'C',
      'BrandLogo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
      'Desc': null,
      'IsDescAutoGenerated': 0,
      'Phone': '877-276-6789',
      'CommunityType': 'N',
      'ProjectType': 'SBC',
      'IsLuxury': 0,
      'HomeType': 'SF',
      'SpecSaleStatus': null,
      'NumLivingAreas': 0,
      'IsLandExcluded': false
    }, {
      'HomeId': 1527062,
      'CommId': 122061,
      'ParentCommId': 0,
      'PlanId': 1527062,
      'ListingId': 67972675,
      'IsBasic': 0,
      'CommName': 'Mendenhall',
      'PlanName': 'The Foster',
      'MoveInDate': '',
      'IsSpec': 0,
      'SpecNum': null,
      'MarketId': 181,
      'BuilderId': 41315,
      'Br': 5,
      'MasterBedLoc': 2,
      'Ba': 4,
      'HBa': 0,
      'St': 2.0,
      'Gr': 2.0,
      'Sft': 3058,
      'Price': '372900',
      'Addr': '6790 Mitchell Mill Rd. Zebulon, NC',
      'City': 'Zebulon',
      'County': 'Wake',
      'State': 'NC',
      'Zip': '27597',
      'Thumb1': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/32471070-190225.png',
      'Thumb2': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/21234386-170124.jpg',
      'IntImage': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/21234385-170124.jpg',
      'Status': 'R',
      'Lat': '35.890862',
      'Lng': '-78.430844',
      'Brand': {
        'Id': 2940,
        'Name': 'Smith Douglas Homes',
        'Logo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-MED.jpg',
        'LogoSmall': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
        'MarketId': 0,
        'SiteUrl': 'smithdouglas.com',
        'ShowCaseStatusId': 1
      },
      'SchoolDistricts': [{'Id': 9964, 'Name': 'Wake Co SD', 'DistrictName': null}],
      'IsHotHome': 0,
      'Dist': 0.0,
      'IsBl': 0,
      'Green': 1,
      'ImageCount': 20,
      'HasVideo': 0,
      'Promo': 1,
      'FloorPlanPath': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/21185301-170119.jpg',
      'PlanViewer': 'http://rendering.house/app/smithdouglas/?nbrhood=Mendenhall&elevation=Foster%20C',
      'VirtualTour': 'N',
      'MarketingDesc': null,
      'SpecLat': null,
      'SpecLng': null,
      'CommStatus': 'G',
      'BrandLogo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
      'Desc': null,
      'IsDescAutoGenerated': 0,
      'Phone': '877-774-2473',
      'CommunityType': 'N',
      'ProjectType': 'SBC',
      'IsLuxury': 0,
      'HomeType': 'SF',
      'SpecSaleStatus': null,
      'NumLivingAreas': 1,
      'IsLandExcluded': false
    }, {
      'HomeId': 1527063,
      'CommId': 122061,
      'ParentCommId': 0,
      'PlanId': 1527063,
      'ListingId': 67972676,
      'IsBasic': 0,
      'CommName': 'Mendenhall',
      'PlanName': 'The Hayden',
      'MoveInDate': '',
      'IsSpec': 0,
      'SpecNum': null,
      'MarketId': 181,
      'BuilderId': 41315,
      'Br': 3,
      'MasterBedLoc': 2,
      'Ba': 2,
      'HBa': 1,
      'St': 1.0,
      'Gr': 2.0,
      'Sft': 2081,
      'Price': '333900',
      'Addr': '6790 Mitchell Mill Rd. Zebulon, NC',
      'City': 'Zebulon',
      'County': 'Wake',
      'State': 'NC',
      'Zip': '27597',
      'Thumb1': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/32471084-190225.png',
      'Thumb2': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/27468065-180510.jpg',
      'IntImage': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/27468063-180510.jpg',
      'Status': 'R',
      'Lat': '35.890862',
      'Lng': '-78.430844',
      'Brand': {
        'Id': 2940,
        'Name': 'Smith Douglas Homes',
        'Logo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-MED.jpg',
        'LogoSmall': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
        'MarketId': 0,
        'SiteUrl': 'smithdouglas.com',
        'ShowCaseStatusId': 1
      },
      'SchoolDistricts': [{'Id': 9964, 'Name': 'Wake Co SD', 'DistrictName': null}],
      'IsHotHome': 0,
      'Dist': 0.0,
      'IsBl': 0,
      'Green': 1,
      'ImageCount': 19,
      'HasVideo': 1,
      'Promo': 1,
      'FloorPlanPath': 'N',
      'PlanViewer': 'https://rendering.house/app/smithdouglas/?nbrhood=Mendenhall&elevation=Hayden%20B',
      'VirtualTour': 'http://www.tourfactory.com/1973873',
      'MarketingDesc': null,
      'SpecLat': null,
      'SpecLng': null,
      'CommStatus': 'G',
      'BrandLogo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
      'Desc': null,
      'IsDescAutoGenerated': 0,
      'Phone': '877-774-2473',
      'CommunityType': 'N',
      'ProjectType': 'SBC',
      'IsLuxury': 0,
      'HomeType': 'SF',
      'SpecSaleStatus': null,
      'NumLivingAreas': 0,
      'IsLandExcluded': false
    }, {
      'HomeId': 1658454,
      'CommId': 133401,
      'ParentCommId': 0,
      'PlanId': 1658454,
      'ListingId': 68347013,
      'IsBasic': 0,
      'CommName': 'Canyon Creek',
      'PlanName': 'The Vinings',
      'MoveInDate': '',
      'IsSpec': 0,
      'SpecNum': null,
      'MarketId': 181,
      'BuilderId': 41315,
      'Br': 3,
      'MasterBedLoc': 2,
      'Ba': 2,
      'HBa': 0,
      'St': 1.0,
      'Gr': 2.0,
      'Sft': 1819,
      'Price': '212900',
      'Addr': '1400 Dycus Rd, Sanford NC',
      'City': 'Sanford',
      'County': 'Lee',
      'State': 'NC',
      'Zip': '27330',
      'Thumb1': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/35469870-190618.png',
      'Thumb2': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/35469871-190618.png',
      'IntImage': null,
      'Status': 'R',
      'Lat': '35.433228',
      'Lng': '-79.286552',
      'Brand': {
        'Id': 2940,
        'Name': 'Smith Douglas Homes',
        'Logo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-MED.jpg',
        'LogoSmall': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
        'MarketId': 0,
        'SiteUrl': 'smithdouglas.com',
        'ShowCaseStatusId': 1
      },
      'SchoolDistricts': [{'Id': 4109, 'Name': 'Lee Co SD', 'DistrictName': null}],
      'IsHotHome': 0,
      'Dist': 0.0,
      'IsBl': 0,
      'Green': 1,
      'ImageCount': 6,
      'HasVideo': 0,
      'Promo': 1,
      'FloorPlanPath': 'N',
      'PlanViewer': 'N',
      'VirtualTour': 'N',
      'MarketingDesc': null,
      'SpecLat': null,
      'SpecLng': null,
      'CommStatus': 'C',
      'BrandLogo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
      'Desc': null,
      'IsDescAutoGenerated': 0,
      'Phone': '888-204-5511',
      'CommunityType': 'N',
      'ProjectType': 'SBC',
      'IsLuxury': 0,
      'HomeType': 'SF',
      'SpecSaleStatus': null,
      'NumLivingAreas': 1,
      'IsLandExcluded': false
    }, {
      'HomeId': 1704235,
      'CommId': 133401,
      'ParentCommId': 0,
      'PlanId': 1658452,
      'ListingId': 68361495,
      'IsBasic': 0,
      'CommName': 'Canyon Creek',
      'PlanName': 'The McPherson',
      'MoveInDate': '',
      'IsSpec': 1,
      'SpecNum': null,
      'MarketId': 181,
      'BuilderId': 41315,
      'Br': 4,
      'MasterBedLoc': 2,
      'Ba': 2,
      'HBa': 1,
      'St': 0.0,
      'Gr': 2.0,
      'Sft': 2234,
      'Price': '263970',
      'Addr': '99996 Towerview Lane',
      'City': 'Sanford',
      'County': 'Lee',
      'State': 'NC',
      'Zip': '27330',
      'Thumb1': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/36975229-190810.jpg',
      'Thumb2': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/25781516-180113.jpg',
      'IntImage': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/25781528-180113.jpg',
      'Status': 'UC',
      'Lat': '35.433228',
      'Lng': '-79.286552',
      'Brand': {
        'Id': 2940,
        'Name': 'Smith Douglas Homes',
        'Logo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-MED.jpg',
        'LogoSmall': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
        'MarketId': 0,
        'SiteUrl': 'smithdouglas.com',
        'ShowCaseStatusId': 1
      },
      'SchoolDistricts': [{'Id': 4109, 'Name': 'Lee Co SD', 'DistrictName': null}],
      'IsHotHome': 0,
      'Dist': 0.0,
      'IsBl': 0,
      'Green': 1,
      'ImageCount': 29,
      'HasVideo': 0,
      'Promo': 1,
      'FloorPlanPath': 'N',
      'PlanViewer': 'N',
      'VirtualTour': 'N',
      'MarketingDesc': null,
      'SpecLat': null,
      'SpecLng': null,
      'CommStatus': 'C',
      'BrandLogo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
      'Desc': null,
      'IsDescAutoGenerated': 0,
      'Phone': '888-204-5511',
      'CommunityType': 'N',
      'ProjectType': 'SBC',
      'IsLuxury': 0,
      'HomeType': 'SF',
      'SpecSaleStatus': null,
      'NumLivingAreas': 0,
      'IsLandExcluded': false
    }, {
      'HomeId': 1577336,
      'CommId': 126616,
      'ParentCommId': 0,
      'PlanId': 1577336,
      'ListingId': 68110764,
      'IsBasic': 0,
      'CommName': 'Sumerlyn',
      'PlanName': 'The Bayfield',
      'MoveInDate': '',
      'IsSpec': 0,
      'SpecNum': null,
      'MarketId': 181,
      'BuilderId': 41315,
      'Br': 3,
      'MasterBedLoc': 2,
      'Ba': 2,
      'HBa': 0,
      'St': 1.0,
      'Gr': 2.0,
      'Sft': 1642,
      'Price': '214900',
      'Addr': '4453 Offshore Drive',
      'City': 'Raleigh',
      'County': 'Wake',
      'State': 'NC',
      'Zip': '27610',
      'Thumb1': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/32381375-190219.png',
      'Thumb2': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/25668435-180104.jpg',
      'IntImage': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/25668430-180104.jpg',
      'Status': 'R',
      'Lat': '35.716425',
      'Lng': '-78.538526',
      'Brand': {
        'Id': 2940,
        'Name': 'Smith Douglas Homes',
        'Logo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-MED.jpg',
        'LogoSmall': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
        'MarketId': 0,
        'SiteUrl': 'smithdouglas.com',
        'ShowCaseStatusId': 1
      },
      'SchoolDistricts': [{'Id': 9964, 'Name': 'Wake Co SD', 'DistrictName': null}],
      'IsHotHome': 0,
      'Dist': 0.0,
      'IsBl': 0,
      'Green': 1,
      'ImageCount': 11,
      'HasVideo': 1,
      'Promo': 1,
      'FloorPlanPath': 'N',
      'PlanViewer': 'https://rendering.house/app/smithdouglas/?nbrhood=Sumerlyn&elevation=Bayfield%20A',
      'VirtualTour': 'N',
      'MarketingDesc': null,
      'SpecLat': null,
      'SpecLng': null,
      'CommStatus': 'X',
      'BrandLogo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
      'Desc': null,
      'IsDescAutoGenerated': 0,
      'Phone': '888-637-0845',
      'CommunityType': 'N',
      'ProjectType': 'SBC',
      'IsLuxury': 0,
      'HomeType': 'SF',
      'SpecSaleStatus': null,
      'NumLivingAreas': 1,
      'IsLandExcluded': false
    }, {
      'HomeId': 1609589,
      'CommId': 110758,
      'ParentCommId': 0,
      'PlanId': 1385062,
      'ListingId': 68194676,
      'IsBasic': 0,
      'CommName': 'Sauls Farm',
      'PlanName': 'The Avery',
      'MoveInDate': '',
      'IsSpec': 1,
      'SpecNum': null,
      'MarketId': 181,
      'BuilderId': 41315,
      'Br': 4,
      'MasterBedLoc': 2,
      'Ba': 4,
      'HBa': 0,
      'St': 0.0,
      'Gr': 2.0,
      'Sft': 4110,
      'Price': '399900',
      'Addr': '376 Springhill Lane',
      'City': 'Garner',
      'County': 'Wake',
      'State': 'NC',
      'Zip': '27529',
      'Thumb1': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/33229056-190810.jpg',
      'Thumb2': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/21231377-170124.jpg',
      'IntImage': 'https://nhs-dynamic.secure.footprint.net/Images/Homes/Smith4827/21231376-170124.jpg',
      'Status': 'UC',
      'Lat': '35.611904',
      'Lng': '-78.585563',
      'Brand': {
        'Id': 2940,
        'Name': 'Smith Douglas Homes',
        'Logo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-MED.jpg',
        'LogoSmall': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
        'MarketId': 0,
        'SiteUrl': 'smithdouglas.com',
        'ShowCaseStatusId': 1
      },
      'SchoolDistricts': [{'Id': 4190, 'Name': 'Johnston Co SD', 'DistrictName': null}],
      'IsHotHome': 0,
      'Dist': 0.0,
      'IsBl': 0,
      'Green': 1,
      'ImageCount': 30,
      'HasVideo': 0,
      'Promo': 1,
      'FloorPlanPath': 'N',
      'PlanViewer': 'N',
      'VirtualTour': 'N',
      'MarketingDesc': null,
      'SpecLat': null,
      'SpecLng': null,
      'CommStatus': 'X',
      'BrandLogo': 'https://nhs-dynamic.secure.footprint.net/images/brands/2940-SML.jpg',
      'Desc': null,
      'IsDescAutoGenerated': 0,
      'Phone': '888-783-6158',
      'CommunityType': 'N',
      'ProjectType': 'SBC',
      'IsLuxury': 0,
      'HomeType': 'SF',
      'SpecSaleStatus': null,
      'NumLivingAreas': 0,
      'IsLandExcluded': false
    }]
  };
  jsonText: RefObject<any> = React.createRef();
  state: stateType = {
    // mJson: null,
    parseError: false,
    newJson: null,
  };

  constructor(props: any) {
    super(props);
  }

  parse = () => {
    const string = this.jsonText.current.value;
    try {
      // const t2 = (new JsonParser(string)).build();
      const jsonObject = JSON.parse(string);
      this.test = string;
      this.setState({
        // mJson: t2,
        newJson: jsonObject,
      });
    } catch (e) {
      console.error(e);
      this.setState({parseError: true});
    }

  };

  componentDidMount(): void {
    this.jsonText.current.value = this.test;
    this.jsonText.current.focus();
  }

  render() {
    return (
      <>
        {/*<JsonInputComponent textField={this.jsonText} onParseClick={this.parse} />*/}
        {/*<JsonTreeView item={this.state.mJson}/>*/}
        {this.state.newJson && <JsonViewerComponent json={this.state.newJson} />}
      </>
    );
  }
}