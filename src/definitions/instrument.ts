import * as account from './account'
import * as instrument from './instrument'
import * as order from './order'
import * as trade from './trade'
import * as position from './position'
import * as transaction from './transaction'
import * as pricing from './pricing'
import * as pricingCommon from './pricingCommon'
import * as primitives from './primitives'
import { Candlestick, CandlestickData, OrderBook, OrderBookBucket, PositionBook, PositionBookBucket } from '../instrument'
export { Candlestick, CandlestickData, OrderBook, OrderBookBucket, PositionBook, PositionBookBucket } from '../instrument'



/**
 * The granularity of a candlestick https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export enum CandlestickGranularity {
  /**
   * 5 second candlesticks, minute alignment
   */
  'S5' = 'S5',

  /**
   * 10 second candlesticks, minute alignment
   */
  'S10' = 'S10',

  /**
   * 15 second candlesticks, minute alignment
   */
  'S15' = 'S15',

  /**
   * 30 second candlesticks, minute alignment
   */
  'S30' = 'S30',

  /**
   * 1 minute candlesticks, minute alignment
   */
  'M1' = 'M1',

  /**
   * 2 minute candlesticks, hour alignment
   */
  'M2' = 'M2',

  /**
   * 4 minute candlesticks, hour alignment
   */
  'M4' = 'M4',

  /**
   * 5 minute candlesticks, hour alignment
   */
  'M5' = 'M5',

  /**
   * 10 minute candlesticks, hour alignment
   */
  'M10' = 'M10',

  /**
   * 15 minute candlesticks, hour alignment
   */
  'M15' = 'M15',

  /**
   * 30 minute candlesticks, hour alignment
   */
  'M30' = 'M30',

  /**
   * 1 hour candlesticks, hour alignment
   */
  'H1' = 'H1',

  /**
   * 2 hour candlesticks, day alignment
   */
  'H2' = 'H2',

  /**
   * 3 hour candlesticks, day alignment
   */
  'H3' = 'H3',

  /**
   * 4 hour candlesticks, day alignment
   */
  'H4' = 'H4',

  /**
   * 6 hour candlesticks, day alignment
   */
  'H6' = 'H6',

  /**
   * 8 hour candlesticks, day alignment
   */
  'H8' = 'H8',

  /**
   * 12 hour candlesticks, day alignment
   */
  'H12' = 'H12',

  /**
   * 1 day candlesticks, day alignment
   */
  'D' = 'D',

  /**
   * 1 week candlesticks, aligned to start of week
   */
  'W' = 'W',

  /**
   * 1 month candlesticks, aligned to first day of the month
   */
  'M' = 'M',
}

export const CandlestickGranularityDescription = {
  'S5': '5 second candlesticks, minute alignment',
  'S10': '10 second candlesticks, minute alignment',
  'S15': '15 second candlesticks, minute alignment',
  'S30': '30 second candlesticks, minute alignment',
  'M1': '1 minute candlesticks, minute alignment',
  'M2': '2 minute candlesticks, hour alignment',
  'M4': '4 minute candlesticks, hour alignment',
  'M5': '5 minute candlesticks, hour alignment',
  'M10': '10 minute candlesticks, hour alignment',
  'M15': '15 minute candlesticks, hour alignment',
  'M30': '30 minute candlesticks, hour alignment',
  'H1': '1 hour candlesticks, hour alignment',
  'H2': '2 hour candlesticks, day alignment',
  'H3': '3 hour candlesticks, day alignment',
  'H4': '4 hour candlesticks, day alignment',
  'H6': '6 hour candlesticks, day alignment',
  'H8': '8 hour candlesticks, day alignment',
  'H12': '12 hour candlesticks, day alignment',
  'D': '1 day candlesticks, day alignment',
  'W': '1 week candlesticks, aligned to start of week',
  'M': '1 month candlesticks, aligned to first day of the month',
}

/**
 * The day of the week to use for candlestick granularities with weekly alignment. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export enum WeeklyAlignment {
  /**
   * Monday
   */
  'Monday' = 'Monday',

  /**
   * Tuesday
   */
  'Tuesday' = 'Tuesday',

  /**
   * Wednesday
   */
  'Wednesday' = 'Wednesday',

  /**
   * Thursday
   */
  'Thursday' = 'Thursday',

  /**
   * Friday
   */
  'Friday' = 'Friday',

  /**
   * Saturday
   */
  'Saturday' = 'Saturday',

  /**
   * Sunday
   */
  'Sunday' = 'Sunday',
}

export const WeeklyAlignmentDescription = {
  'Monday': 'Monday',
  'Tuesday': 'Tuesday',
  'Wednesday': 'Wednesday',
  'Thursday': 'Thursday',
  'Friday': 'Friday',
  'Saturday': 'Saturday',
  'Sunday': 'Sunday',
}

/**
 * The type of price adjustment. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export enum PriceAdjustmentType {
  /**
   * The present value adjustment is intended to back-out the interest component of the future-date contract expiry.
   */
  'PRESENT_VALUE' = 'PRESENT_VALUE',

  /**
   * The dividend adjustment is intended to include the impact of the dividend payment from the equities that make up the index.
   */
  'DIVIDEND' = 'DIVIDEND',

  /**
   * The basis adjustment is intended to offset the difference in the basis between the futures price and the index price.
   */
  'BASIS' = 'BASIS',

  /**
   * The fair value adjustment is intended to be configured manually by the Trading team to adjust the price of the CFD for any reason which is not captured by the other adjustments, and will typically be the 0.
   */
  'FAIR_VALUE' = 'FAIR_VALUE',
}

export const PriceAdjustmentTypeDescription = {
  'PRESENT_VALUE': 'The present value adjustment is intended to back-out the interest component of the future-date contract expiry.',
  'DIVIDEND': 'The dividend adjustment is intended to include the impact of the dividend payment from the equities that make up the index.',
  'BASIS': 'The basis adjustment is intended to offset the difference in the basis between the futures price and the index price.',
  'FAIR_VALUE': 'The fair value adjustment is intended to be configured manually by the Trading team to adjust the price of the CFD for any reason which is not captured by the other adjustments, and will typically be the 0.',
}

/**
 * Time interval at which data is sampled. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export enum SamplingInterval {
  /**
   * One minute sampling.
   */
  'M1' = 'M1',
}

export const SamplingIntervalDescription = {
  'M1': 'One minute sampling.',
}

export class CandlestickResponse {
  /**
   * The instrument whose Prices are represented by the candlesticks.
   */ 
  instrument?: primitives.InstrumentName

  /**
   * The granularity of the candlesticks provided.
   */ 
  granularity?: CandlestickGranularity

  /**
   * The list of candlesticks that satisfy the request.
   */ 
  candles?: Candlestick[]

}


export class RawMarketPriceLevel {
  /**
   * The amount of liquidity for the bucket.
   */ 
  liquidity?: primitives.DecimalNumber

  /**
   * The price to use for the bucket.
   */ 
  price?: primitives.DecimalNumber

}


export class RawMarketPriceDepthOfMarket {
  /**
   * The list of prices and liquidity available on the Instrument's bid side
   * of the RawMarketPrice.
   */ 
  bids?: RawMarketPriceLevel[]

  /**
   * The list of prices and liquidity available on the Instrument's ask side
   * of the RawMarketPrice.
   */ 
  asks?: RawMarketPriceLevel[]

}


export class PriceAdjustment {
  /**
   * The type of price adjustment.
   */ 
  type?: PriceAdjustmentType

  /**
   * The adjustment amount applied, represented in price units.
   */ 
  amount?: primitives.DecimalNumber

}


export class RawMarketPrice {
  /**
   * The ID of the liquidity pool the RawMarketPrice is for.
   */ 
  liquidityPoolID?: number

  /**
   * The name of the instrument the RawMarketPrice is for.
   */ 
  instrumentName?: primitives.InstrumentName

  /**
   * The name of the contract the RawMarketPrice is for.
   */ 
  contractName?: string

  /**
   * The date/time when the RawMarketPrice was created.
   */ 
  timestamp?: primitives.DateTime

  /**
   * The list of adjustments that were applied to the RawMarketPriceLevels of
   * bids and asks.
   */ 
  adjustments?: PriceAdjustment[]

  /**
   * The OrderBook depth of market. The list of bids and asks in an OrderBook
   * depth of market can be viewed as an independent bid/offer for the given
   * number of units at the specified price. To fill an order for a given
   * number of units the bids/asks are walked in order until the total desired
   * units are filled. The price at each level is used for the units obtained
   * from that level. Lists of bids in an OrderBook will always be in
   * decreasing price order, however there is no restriction on the liquidity
   * values for each level, they may increase, decrease or stay the same.
   * Lists of asks in an OrderBook representation will always be in increasing
   * price order, however there is no restriction on the liquidity values for
   * each level, they may increase, decrease or stay the same.
   */ 
  orderBook?: RawMarketPriceDepthOfMarket

  /**
   * The Ladder depth of market. The list of bid and ask price-liquidity pairs
   * in a Ladder depth of market can be viewed as a &#x2018;rung'. To determine what
   * price to use for a given target liquidity, find the first rung that
   * matches the target liquidity and use its price. Lists of bids in a Ladder
   * will always be in decreasing price order and the corresponding liquidity
   * values will always be increasing. Lists of asks in a Ladder will always
   * be in increasing price order and the corresponding liquidity values will
   * always be increasing.
   */ 
  ladder?: RawMarketPriceDepthOfMarket

}
