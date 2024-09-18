export interface WeightDetails{
    id: number | null
    title: string | null
    value: string | null
}

export interface optionsDate {
    weekday?: 'long' | 'short' | 'narrow';
    year?: 'numeric' | '2-digit';
    month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    day?: 'numeric' | '2-digit';
  }

  export interface optionsTime {
    hour?: 'numeric' | '2-digit';
    minute?: 'numeric' | '2-digit';
  }

export interface Ticket{
    id:number | null
    setNumber:string | null
    takeOff:string | null
    landing: string | null
    price: number | null
    setType: string | null
    positionType: string | null
    carryWeightDetails:WeightDetails[]
}

export interface Flight{
    id:number | null
    name: string | null
    fromDate:string | null
    toDate:string | null
    flightType:string | null
    ticket:Ticket[]
}



