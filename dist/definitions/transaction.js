"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transaction_1 = require("../transaction");
exports.Transaction = transaction_1.Transaction;
exports.CreateTransaction = transaction_1.CreateTransaction;
exports.CloseTransaction = transaction_1.CloseTransaction;
exports.ReopenTransaction = transaction_1.ReopenTransaction;
exports.ClientConfigureTransaction = transaction_1.ClientConfigureTransaction;
exports.ClientConfigureRejectTransaction = transaction_1.ClientConfigureRejectTransaction;
exports.TransferFundsTransaction = transaction_1.TransferFundsTransaction;
exports.TransferFundsRejectTransaction = transaction_1.TransferFundsRejectTransaction;
exports.MarketOrderTransaction = transaction_1.MarketOrderTransaction;
exports.MarketOrderRejectTransaction = transaction_1.MarketOrderRejectTransaction;
exports.FixedPriceOrderTransaction = transaction_1.FixedPriceOrderTransaction;
exports.LimitOrderTransaction = transaction_1.LimitOrderTransaction;
exports.LimitOrderRejectTransaction = transaction_1.LimitOrderRejectTransaction;
exports.StopOrderTransaction = transaction_1.StopOrderTransaction;
exports.StopOrderRejectTransaction = transaction_1.StopOrderRejectTransaction;
exports.MarketIfTouchedOrderTransaction = transaction_1.MarketIfTouchedOrderTransaction;
exports.MarketIfTouchedOrderRejectTransaction = transaction_1.MarketIfTouchedOrderRejectTransaction;
exports.TakeProfitOrderTransaction = transaction_1.TakeProfitOrderTransaction;
exports.TakeProfitOrderRejectTransaction = transaction_1.TakeProfitOrderRejectTransaction;
exports.StopLossOrderTransaction = transaction_1.StopLossOrderTransaction;
exports.StopLossOrderRejectTransaction = transaction_1.StopLossOrderRejectTransaction;
exports.TrailingStopLossOrderTransaction = transaction_1.TrailingStopLossOrderTransaction;
exports.TrailingStopLossOrderRejectTransaction = transaction_1.TrailingStopLossOrderRejectTransaction;
exports.OrderFillTransaction = transaction_1.OrderFillTransaction;
exports.OrderCancelTransaction = transaction_1.OrderCancelTransaction;
exports.OrderCancelRejectTransaction = transaction_1.OrderCancelRejectTransaction;
exports.OrderClientExtensionsModifyTransaction = transaction_1.OrderClientExtensionsModifyTransaction;
exports.OrderClientExtensionsModifyRejectTransaction = transaction_1.OrderClientExtensionsModifyRejectTransaction;
exports.TradeClientExtensionsModifyTransaction = transaction_1.TradeClientExtensionsModifyTransaction;
exports.TradeClientExtensionsModifyRejectTransaction = transaction_1.TradeClientExtensionsModifyRejectTransaction;
exports.MarginCallEnterTransaction = transaction_1.MarginCallEnterTransaction;
exports.MarginCallExtendTransaction = transaction_1.MarginCallExtendTransaction;
exports.MarginCallExitTransaction = transaction_1.MarginCallExitTransaction;
exports.DelayedTradeClosureTransaction = transaction_1.DelayedTradeClosureTransaction;
exports.DailyFinancingTransaction = transaction_1.DailyFinancingTransaction;
exports.ResetResettablePLTransaction = transaction_1.ResetResettablePLTransaction;
exports.ClientExtensions = transaction_1.ClientExtensions;
exports.TakeProfitDetails = transaction_1.TakeProfitDetails;
exports.StopLossDetails = transaction_1.StopLossDetails;
exports.TrailingStopLossDetails = transaction_1.TrailingStopLossDetails;
exports.TradeOpen = transaction_1.TradeOpen;
exports.TradeReduce = transaction_1.TradeReduce;
exports.MarketOrderTradeClose = transaction_1.MarketOrderTradeClose;
exports.MarketOrderMarginCloseout = transaction_1.MarketOrderMarginCloseout;
exports.MarketOrderDelayedTradeClose = transaction_1.MarketOrderDelayedTradeClose;
exports.MarketOrderPositionCloseout = transaction_1.MarketOrderPositionCloseout;
exports.LiquidityRegenerationSchedule = transaction_1.LiquidityRegenerationSchedule;
exports.LiquidityRegenerationScheduleStep = transaction_1.LiquidityRegenerationScheduleStep;
exports.OpenTradeFinancing = transaction_1.OpenTradeFinancing;
exports.PositionFinancing = transaction_1.PositionFinancing;
exports.TransactionHeartbeat = transaction_1.TransactionHeartbeat;
/**
 * The possible types of a Transaction https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var TransactionType;
(function (TransactionType) {
    /**
     * Account Create Transaction
     */
    TransactionType["CREATE"] = "CREATE";
    /**
     * Account Close Transaction
     */
    TransactionType["CLOSE"] = "CLOSE";
    /**
     * Account Reopen Transaction
     */
    TransactionType["REOPEN"] = "REOPEN";
    /**
     * Client Configuration Transaction
     */
    TransactionType["CLIENT_CONFIGURE"] = "CLIENT_CONFIGURE";
    /**
     * Client Configuration Reject Transaction
     */
    TransactionType["CLIENT_CONFIGURE_REJECT"] = "CLIENT_CONFIGURE_REJECT";
    /**
     * Transfer Funds Transaction
     */
    TransactionType["TRANSFER_FUNDS"] = "TRANSFER_FUNDS";
    /**
     * Transfer Funds Reject Transaction
     */
    TransactionType["TRANSFER_FUNDS_REJECT"] = "TRANSFER_FUNDS_REJECT";
    /**
     * Market Order Transaction
     */
    TransactionType["MARKET_ORDER"] = "MARKET_ORDER";
    /**
     * Market Order Reject Transaction
     */
    TransactionType["MARKET_ORDER_REJECT"] = "MARKET_ORDER_REJECT";
    /**
     * Fixed Price Order Transaction
     */
    TransactionType["FIXED_PRICE_ORDER"] = "FIXED_PRICE_ORDER";
    /**
     * Limit Order Transaction
     */
    TransactionType["LIMIT_ORDER"] = "LIMIT_ORDER";
    /**
     * Limit Order Reject Transaction
     */
    TransactionType["LIMIT_ORDER_REJECT"] = "LIMIT_ORDER_REJECT";
    /**
     * Stop Order Transaction
     */
    TransactionType["STOP_ORDER"] = "STOP_ORDER";
    /**
     * Stop Order Reject Transaction
     */
    TransactionType["STOP_ORDER_REJECT"] = "STOP_ORDER_REJECT";
    /**
     * Market if Touched Order Transaction
     */
    TransactionType["MARKET_IF_TOUCHED_ORDER"] = "MARKET_IF_TOUCHED_ORDER";
    /**
     * Market if Touched Order Reject Transaction
     */
    TransactionType["MARKET_IF_TOUCHED_ORDER_REJECT"] = "MARKET_IF_TOUCHED_ORDER_REJECT";
    /**
     * Take Profit Order Transaction
     */
    TransactionType["TAKE_PROFIT_ORDER"] = "TAKE_PROFIT_ORDER";
    /**
     * Take Profit Order Reject Transaction
     */
    TransactionType["TAKE_PROFIT_ORDER_REJECT"] = "TAKE_PROFIT_ORDER_REJECT";
    /**
     * Stop Loss Order Transaction
     */
    TransactionType["STOP_LOSS_ORDER"] = "STOP_LOSS_ORDER";
    /**
     * Stop Loss Order Reject Transaction
     */
    TransactionType["STOP_LOSS_ORDER_REJECT"] = "STOP_LOSS_ORDER_REJECT";
    /**
     * Trailing Stop Loss Order Transaction
     */
    TransactionType["TRAILING_STOP_LOSS_ORDER"] = "TRAILING_STOP_LOSS_ORDER";
    /**
     * Trailing Stop Loss Order Reject Transaction
     */
    TransactionType["TRAILING_STOP_LOSS_ORDER_REJECT"] = "TRAILING_STOP_LOSS_ORDER_REJECT";
    /**
     * Order Fill Transaction
     */
    TransactionType["ORDER_FILL"] = "ORDER_FILL";
    /**
     * Order Cancel Transaction
     */
    TransactionType["ORDER_CANCEL"] = "ORDER_CANCEL";
    /**
     * Order Cancel Reject Transaction
     */
    TransactionType["ORDER_CANCEL_REJECT"] = "ORDER_CANCEL_REJECT";
    /**
     * Order Client Extensions Modify Transaction
     */
    TransactionType["ORDER_CLIENT_EXTENSIONS_MODIFY"] = "ORDER_CLIENT_EXTENSIONS_MODIFY";
    /**
     * Order Client Extensions Modify Reject Transaction
     */
    TransactionType["ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"] = "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT";
    /**
     * Trade Client Extensions Modify Transaction
     */
    TransactionType["TRADE_CLIENT_EXTENSIONS_MODIFY"] = "TRADE_CLIENT_EXTENSIONS_MODIFY";
    /**
     * Trade Client Extensions Modify Reject Transaction
     */
    TransactionType["TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"] = "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT";
    /**
     * Margin Call Enter Transaction
     */
    TransactionType["MARGIN_CALL_ENTER"] = "MARGIN_CALL_ENTER";
    /**
     * Margin Call Extend Transaction
     */
    TransactionType["MARGIN_CALL_EXTEND"] = "MARGIN_CALL_EXTEND";
    /**
     * Margin Call Exit Transaction
     */
    TransactionType["MARGIN_CALL_EXIT"] = "MARGIN_CALL_EXIT";
    /**
     * Delayed Trade Closure Transaction
     */
    TransactionType["DELAYED_TRADE_CLOSURE"] = "DELAYED_TRADE_CLOSURE";
    /**
     * Daily Financing Transaction
     */
    TransactionType["DAILY_FINANCING"] = "DAILY_FINANCING";
    /**
     * Dividend Adjustment Transaction
     */
    TransactionType["DIVIDEND_ADJUSTMENT"] = "DIVIDEND_ADJUSTMENT";
    /**
     * Reset Resettable PL Transaction
     */
    TransactionType["RESET_RESETTABLE_PL"] = "RESET_RESETTABLE_PL";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
exports.TransactionTypeDescription = {
    'CREATE': 'Account Create Transaction',
    'CLOSE': 'Account Close Transaction',
    'REOPEN': 'Account Reopen Transaction',
    'CLIENT_CONFIGURE': 'Client Configuration Transaction',
    'CLIENT_CONFIGURE_REJECT': 'Client Configuration Reject Transaction',
    'TRANSFER_FUNDS': 'Transfer Funds Transaction',
    'TRANSFER_FUNDS_REJECT': 'Transfer Funds Reject Transaction',
    'MARKET_ORDER': 'Market Order Transaction',
    'MARKET_ORDER_REJECT': 'Market Order Reject Transaction',
    'FIXED_PRICE_ORDER': 'Fixed Price Order Transaction',
    'LIMIT_ORDER': 'Limit Order Transaction',
    'LIMIT_ORDER_REJECT': 'Limit Order Reject Transaction',
    'STOP_ORDER': 'Stop Order Transaction',
    'STOP_ORDER_REJECT': 'Stop Order Reject Transaction',
    'MARKET_IF_TOUCHED_ORDER': 'Market if Touched Order Transaction',
    'MARKET_IF_TOUCHED_ORDER_REJECT': 'Market if Touched Order Reject Transaction',
    'TAKE_PROFIT_ORDER': 'Take Profit Order Transaction',
    'TAKE_PROFIT_ORDER_REJECT': 'Take Profit Order Reject Transaction',
    'STOP_LOSS_ORDER': 'Stop Loss Order Transaction',
    'STOP_LOSS_ORDER_REJECT': 'Stop Loss Order Reject Transaction',
    'TRAILING_STOP_LOSS_ORDER': 'Trailing Stop Loss Order Transaction',
    'TRAILING_STOP_LOSS_ORDER_REJECT': 'Trailing Stop Loss Order Reject Transaction',
    'ORDER_FILL': 'Order Fill Transaction',
    'ORDER_CANCEL': 'Order Cancel Transaction',
    'ORDER_CANCEL_REJECT': 'Order Cancel Reject Transaction',
    'ORDER_CLIENT_EXTENSIONS_MODIFY': 'Order Client Extensions Modify Transaction',
    'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT': 'Order Client Extensions Modify Reject Transaction',
    'TRADE_CLIENT_EXTENSIONS_MODIFY': 'Trade Client Extensions Modify Transaction',
    'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT': 'Trade Client Extensions Modify Reject Transaction',
    'MARGIN_CALL_ENTER': 'Margin Call Enter Transaction',
    'MARGIN_CALL_EXTEND': 'Margin Call Extend Transaction',
    'MARGIN_CALL_EXIT': 'Margin Call Exit Transaction',
    'DELAYED_TRADE_CLOSURE': 'Delayed Trade Closure Transaction',
    'DAILY_FINANCING': 'Daily Financing Transaction',
    'DIVIDEND_ADJUSTMENT': 'Dividend Adjustment Transaction',
    'RESET_RESETTABLE_PL': 'Reset Resettable PL Transaction',
};
/**
 * The reason that an Account is being funded. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var FundingReason;
(function (FundingReason) {
    /**
     * The client has initiated a funds transfer
     */
    FundingReason["CLIENT_FUNDING"] = "CLIENT_FUNDING";
    /**
     * Funds are being transferred between two Accounts.
     */
    FundingReason["ACCOUNT_TRANSFER"] = "ACCOUNT_TRANSFER";
    /**
     * Funds are being transferred as part of a Division migration
     */
    FundingReason["DIVISION_MIGRATION"] = "DIVISION_MIGRATION";
    /**
     * Funds are being transferred as part of a Site migration
     */
    FundingReason["SITE_MIGRATION"] = "SITE_MIGRATION";
    /**
     * Funds are being transferred as part of an Account adjustment
     */
    FundingReason["ADJUSTMENT"] = "ADJUSTMENT";
})(FundingReason = exports.FundingReason || (exports.FundingReason = {}));
exports.FundingReasonDescription = {
    'CLIENT_FUNDING': 'The client has initiated a funds transfer',
    'ACCOUNT_TRANSFER': 'Funds are being transferred between two Accounts.',
    'DIVISION_MIGRATION': 'Funds are being transferred as part of a Division migration',
    'SITE_MIGRATION': 'Funds are being transferred as part of a Site migration',
    'ADJUSTMENT': 'Funds are being transferred as part of an Account adjustment',
};
/**
 * The reason that the Market Order was created https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var MarketOrderReason;
(function (MarketOrderReason) {
    /**
     * The Market Order was created at the request of a client
     */
    MarketOrderReason["CLIENT_ORDER"] = "CLIENT_ORDER";
    /**
     * The Market Order was created to close a Trade at the request of a client
     */
    MarketOrderReason["TRADE_CLOSE"] = "TRADE_CLOSE";
    /**
     * The Market Order was created to close a Position at the request of a client
     */
    MarketOrderReason["POSITION_CLOSEOUT"] = "POSITION_CLOSEOUT";
    /**
     * The Market Order was created as part of a Margin Closeout
     */
    MarketOrderReason["MARGIN_CLOSEOUT"] = "MARGIN_CLOSEOUT";
    /**
     * The Market Order was created to close a trade marked for delayed closure
     */
    MarketOrderReason["DELAYED_TRADE_CLOSE"] = "DELAYED_TRADE_CLOSE";
})(MarketOrderReason = exports.MarketOrderReason || (exports.MarketOrderReason = {}));
exports.MarketOrderReasonDescription = {
    'CLIENT_ORDER': 'The Market Order was created at the request of a client',
    'TRADE_CLOSE': 'The Market Order was created to close a Trade at the request of a client',
    'POSITION_CLOSEOUT': 'The Market Order was created to close a Position at the request of a client',
    'MARGIN_CLOSEOUT': 'The Market Order was created as part of a Margin Closeout',
    'DELAYED_TRADE_CLOSE': 'The Market Order was created to close a trade marked for delayed closure',
};
/**
 * The reason that the Fixed Price Order was created https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var FixedPriceOrderReason;
(function (FixedPriceOrderReason) {
    /**
     * The Fixed Price Order was created as part of a platform account migration
     */
    FixedPriceOrderReason["PLATFORM_ACCOUNT_MIGRATION"] = "PLATFORM_ACCOUNT_MIGRATION";
    /**
     * The Fixed Price Order was created to close a Trade as part of division account migration
     */
    FixedPriceOrderReason["TRADE_CLOSE_DIVISION_ACCOUNT_MIGRATION"] = "TRADE_CLOSE_DIVISION_ACCOUNT_MIGRATION";
    /**
     * The Fixed Price Order was created to close a Trade administratively
     */
    FixedPriceOrderReason["TRADE_CLOSE_ADMINISTRATIVE_ACTION"] = "TRADE_CLOSE_ADMINISTRATIVE_ACTION";
})(FixedPriceOrderReason = exports.FixedPriceOrderReason || (exports.FixedPriceOrderReason = {}));
exports.FixedPriceOrderReasonDescription = {
    'PLATFORM_ACCOUNT_MIGRATION': 'The Fixed Price Order was created as part of a platform account migration',
    'TRADE_CLOSE_DIVISION_ACCOUNT_MIGRATION': 'The Fixed Price Order was created to close a Trade as part of division account migration',
    'TRADE_CLOSE_ADMINISTRATIVE_ACTION': 'The Fixed Price Order was created to close a Trade administratively',
};
/**
 * The reason that the Limit Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var LimitOrderReason;
(function (LimitOrderReason) {
    /**
     * The Limit Order was initiated at the request of a client
     */
    LimitOrderReason["CLIENT_ORDER"] = "CLIENT_ORDER";
    /**
     * The Limit Order was initiated as a replacement for an existing Order
     */
    LimitOrderReason["REPLACEMENT"] = "REPLACEMENT";
})(LimitOrderReason = exports.LimitOrderReason || (exports.LimitOrderReason = {}));
exports.LimitOrderReasonDescription = {
    'CLIENT_ORDER': 'The Limit Order was initiated at the request of a client',
    'REPLACEMENT': 'The Limit Order was initiated as a replacement for an existing Order',
};
/**
 * The reason that the Stop Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var StopOrderReason;
(function (StopOrderReason) {
    /**
     * The Stop Order was initiated at the request of a client
     */
    StopOrderReason["CLIENT_ORDER"] = "CLIENT_ORDER";
    /**
     * The Stop Order was initiated as a replacement for an existing Order
     */
    StopOrderReason["REPLACEMENT"] = "REPLACEMENT";
})(StopOrderReason = exports.StopOrderReason || (exports.StopOrderReason = {}));
exports.StopOrderReasonDescription = {
    'CLIENT_ORDER': 'The Stop Order was initiated at the request of a client',
    'REPLACEMENT': 'The Stop Order was initiated as a replacement for an existing Order',
};
/**
 * The reason that the Market-if-touched Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var MarketIfTouchedOrderReason;
(function (MarketIfTouchedOrderReason) {
    /**
     * The Market-if-touched Order was initiated at the request of a client
     */
    MarketIfTouchedOrderReason["CLIENT_ORDER"] = "CLIENT_ORDER";
    /**
     * The Market-if-touched Order was initiated as a replacement for an existing Order
     */
    MarketIfTouchedOrderReason["REPLACEMENT"] = "REPLACEMENT";
})(MarketIfTouchedOrderReason = exports.MarketIfTouchedOrderReason || (exports.MarketIfTouchedOrderReason = {}));
exports.MarketIfTouchedOrderReasonDescription = {
    'CLIENT_ORDER': 'The Market-if-touched Order was initiated at the request of a client',
    'REPLACEMENT': 'The Market-if-touched Order was initiated as a replacement for an existing Order',
};
/**
 * The reason that the Take Profit Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var TakeProfitOrderReason;
(function (TakeProfitOrderReason) {
    /**
     * The Take Profit Order was initiated at the request of a client
     */
    TakeProfitOrderReason["CLIENT_ORDER"] = "CLIENT_ORDER";
    /**
     * The Take Profit Order was initiated as a replacement for an existing Order
     */
    TakeProfitOrderReason["REPLACEMENT"] = "REPLACEMENT";
    /**
     * The Take Profit Order was initiated automatically when an Order was filled that opened a new Trade requiring a Take Profit Order.
     */
    TakeProfitOrderReason["ON_FILL"] = "ON_FILL";
})(TakeProfitOrderReason = exports.TakeProfitOrderReason || (exports.TakeProfitOrderReason = {}));
exports.TakeProfitOrderReasonDescription = {
    'CLIENT_ORDER': 'The Take Profit Order was initiated at the request of a client',
    'REPLACEMENT': 'The Take Profit Order was initiated as a replacement for an existing Order',
    'ON_FILL': 'The Take Profit Order was initiated automatically when an Order was filled that opened a new Trade requiring a Take Profit Order.',
};
/**
 * The reason that the Stop Loss Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var StopLossOrderReason;
(function (StopLossOrderReason) {
    /**
     * The Stop Loss Order was initiated at the request of a client
     */
    StopLossOrderReason["CLIENT_ORDER"] = "CLIENT_ORDER";
    /**
     * The Stop Loss Order was initiated as a replacement for an existing Order
     */
    StopLossOrderReason["REPLACEMENT"] = "REPLACEMENT";
    /**
     * The Stop Loss Order was initiated automatically when an Order was filled that opened a new Trade requiring a Stop Loss Order.
     */
    StopLossOrderReason["ON_FILL"] = "ON_FILL";
})(StopLossOrderReason = exports.StopLossOrderReason || (exports.StopLossOrderReason = {}));
exports.StopLossOrderReasonDescription = {
    'CLIENT_ORDER': 'The Stop Loss Order was initiated at the request of a client',
    'REPLACEMENT': 'The Stop Loss Order was initiated as a replacement for an existing Order',
    'ON_FILL': 'The Stop Loss Order was initiated automatically when an Order was filled that opened a new Trade requiring a Stop Loss Order.',
};
/**
 * The reason that the Trailing Stop Loss Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var TrailingStopLossOrderReason;
(function (TrailingStopLossOrderReason) {
    /**
     * The Trailing Stop Loss Order was initiated at the request of a client
     */
    TrailingStopLossOrderReason["CLIENT_ORDER"] = "CLIENT_ORDER";
    /**
     * The Trailing Stop Loss Order was initiated as a replacement for an existing Order
     */
    TrailingStopLossOrderReason["REPLACEMENT"] = "REPLACEMENT";
    /**
     * The Trailing Stop Loss Order was initiated automatically when an Order was filled that opened a new Trade requiring a Trailing Stop Loss Order.
     */
    TrailingStopLossOrderReason["ON_FILL"] = "ON_FILL";
})(TrailingStopLossOrderReason = exports.TrailingStopLossOrderReason || (exports.TrailingStopLossOrderReason = {}));
exports.TrailingStopLossOrderReasonDescription = {
    'CLIENT_ORDER': 'The Trailing Stop Loss Order was initiated at the request of a client',
    'REPLACEMENT': 'The Trailing Stop Loss Order was initiated as a replacement for an existing Order',
    'ON_FILL': 'The Trailing Stop Loss Order was initiated automatically when an Order was filled that opened a new Trade requiring a Trailing Stop Loss Order.',
};
/**
 * The reason that an Order was filled https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var OrderFillReason;
(function (OrderFillReason) {
    /**
     * The Order filled was a Limit Order
     */
    OrderFillReason["LIMIT_ORDER"] = "LIMIT_ORDER";
    /**
     * The Order filled was a Stop Order
     */
    OrderFillReason["STOP_ORDER"] = "STOP_ORDER";
    /**
     * The Order filled was a Market-if-touched Order
     */
    OrderFillReason["MARKET_IF_TOUCHED_ORDER"] = "MARKET_IF_TOUCHED_ORDER";
    /**
     * The Order filled was a Take Profit Order
     */
    OrderFillReason["TAKE_PROFIT_ORDER"] = "TAKE_PROFIT_ORDER";
    /**
     * The Order filled was a Stop Loss Order
     */
    OrderFillReason["STOP_LOSS_ORDER"] = "STOP_LOSS_ORDER";
    /**
     * The Order filled was a Trailing Stop Loss Order
     */
    OrderFillReason["TRAILING_STOP_LOSS_ORDER"] = "TRAILING_STOP_LOSS_ORDER";
    /**
     * The Order filled was a Market Order
     */
    OrderFillReason["MARKET_ORDER"] = "MARKET_ORDER";
    /**
     * The Order filled was a Market Order used to explicitly close a Trade
     */
    OrderFillReason["MARKET_ORDER_TRADE_CLOSE"] = "MARKET_ORDER_TRADE_CLOSE";
    /**
     * The Order filled was a Market Order used to explicitly close a Position
     */
    OrderFillReason["MARKET_ORDER_POSITION_CLOSEOUT"] = "MARKET_ORDER_POSITION_CLOSEOUT";
    /**
     * The Order filled was a Market Order used for a Margin Closeout
     */
    OrderFillReason["MARKET_ORDER_MARGIN_CLOSEOUT"] = "MARKET_ORDER_MARGIN_CLOSEOUT";
    /**
     * The Order filled was a Market Order used for a delayed Trade close
     */
    OrderFillReason["MARKET_ORDER_DELAYED_TRADE_CLOSE"] = "MARKET_ORDER_DELAYED_TRADE_CLOSE";
    /**
     * The Order filled was a Fixed Price Order
     */
    OrderFillReason["FIXED_PRICE_ORDER"] = "FIXED_PRICE_ORDER";
    /**
     * The Order filled was a Fixed Price Order created as part of a platform account migration
     */
    OrderFillReason["FIXED_PRICE_ORDER_PLATFORM_ACCOUNT_MIGRATION"] = "FIXED_PRICE_ORDER_PLATFORM_ACCOUNT_MIGRATION";
    /**
     * The Order filled was a Fixed Price Order created to close a Trade as part of division account migration
     */
    OrderFillReason["FIXED_PRICE_ORDER_DIVISION_ACCOUNT_MIGRATION"] = "FIXED_PRICE_ORDER_DIVISION_ACCOUNT_MIGRATION";
    /**
     * The Order filled was a Fixed Price Order created to close a Trade administratively
     */
    OrderFillReason["FIXED_PRICE_ORDER_ADMINISTRATIVE_ACTION"] = "FIXED_PRICE_ORDER_ADMINISTRATIVE_ACTION";
})(OrderFillReason = exports.OrderFillReason || (exports.OrderFillReason = {}));
exports.OrderFillReasonDescription = {
    'LIMIT_ORDER': 'The Order filled was a Limit Order',
    'STOP_ORDER': 'The Order filled was a Stop Order',
    'MARKET_IF_TOUCHED_ORDER': 'The Order filled was a Market-if-touched Order',
    'TAKE_PROFIT_ORDER': 'The Order filled was a Take Profit Order',
    'STOP_LOSS_ORDER': 'The Order filled was a Stop Loss Order',
    'TRAILING_STOP_LOSS_ORDER': 'The Order filled was a Trailing Stop Loss Order',
    'MARKET_ORDER': 'The Order filled was a Market Order',
    'MARKET_ORDER_TRADE_CLOSE': 'The Order filled was a Market Order used to explicitly close a Trade',
    'MARKET_ORDER_POSITION_CLOSEOUT': 'The Order filled was a Market Order used to explicitly close a Position',
    'MARKET_ORDER_MARGIN_CLOSEOUT': 'The Order filled was a Market Order used for a Margin Closeout',
    'MARKET_ORDER_DELAYED_TRADE_CLOSE': 'The Order filled was a Market Order used for a delayed Trade close',
    'FIXED_PRICE_ORDER': 'The Order filled was a Fixed Price Order',
    'FIXED_PRICE_ORDER_PLATFORM_ACCOUNT_MIGRATION': 'The Order filled was a Fixed Price Order created as part of a platform account migration',
    'FIXED_PRICE_ORDER_DIVISION_ACCOUNT_MIGRATION': 'The Order filled was a Fixed Price Order created to close a Trade as part of division account migration',
    'FIXED_PRICE_ORDER_ADMINISTRATIVE_ACTION': 'The Order filled was a Fixed Price Order created to close a Trade administratively',
};
/**
 * The reason that an Order was cancelled. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var OrderCancelReason;
(function (OrderCancelReason) {
    /**
     * The Order was cancelled because at the time of filling, an unexpected internal server error occurred.
     */
    OrderCancelReason["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    /**
     * The Order was cancelled because at the time of filling the account was locked.
     */
    OrderCancelReason["ACCOUNT_LOCKED"] = "ACCOUNT_LOCKED";
    /**
     * The order was to be filled, however the account is configured to not allow new positions to be created.
     */
    OrderCancelReason["ACCOUNT_NEW_POSITIONS_LOCKED"] = "ACCOUNT_NEW_POSITIONS_LOCKED";
    /**
     * Filling the Order wasn’t possible because it required the creation of a dependent Order and the Account is locked for Order creation.
     */
    OrderCancelReason["ACCOUNT_ORDER_CREATION_LOCKED"] = "ACCOUNT_ORDER_CREATION_LOCKED";
    /**
     * Filling the Order was not possible because the Account is locked for filling Orders.
     */
    OrderCancelReason["ACCOUNT_ORDER_FILL_LOCKED"] = "ACCOUNT_ORDER_FILL_LOCKED";
    /**
     * The Order was cancelled explicitly at the request of the client.
     */
    OrderCancelReason["CLIENT_REQUEST"] = "CLIENT_REQUEST";
    /**
     * The Order cancelled because it is being migrated to another account.
     */
    OrderCancelReason["MIGRATION"] = "MIGRATION";
    /**
     * Filling the Order wasn’t possible because the Order’s instrument was halted.
     */
    OrderCancelReason["MARKET_HALTED"] = "MARKET_HALTED";
    /**
     * The Order is linked to an open Trade that was closed.
     */
    OrderCancelReason["LINKED_TRADE_CLOSED"] = "LINKED_TRADE_CLOSED";
    /**
     * The time in force specified for this order has passed.
     */
    OrderCancelReason["TIME_IN_FORCE_EXPIRED"] = "TIME_IN_FORCE_EXPIRED";
    /**
     * Filling the Order wasn’t possible because the Account had insufficient margin.
     */
    OrderCancelReason["INSUFFICIENT_MARGIN"] = "INSUFFICIENT_MARGIN";
    /**
     * Filling the Order would have resulted in a a FIFO violation.
     */
    OrderCancelReason["FIFO_VIOLATION"] = "FIFO_VIOLATION";
    /**
     * Filling the Order would have violated the Order’s price bound.
     */
    OrderCancelReason["BOUNDS_VIOLATION"] = "BOUNDS_VIOLATION";
    /**
     * The Order was cancelled for replacement at the request of the client.
     */
    OrderCancelReason["CLIENT_REQUEST_REPLACED"] = "CLIENT_REQUEST_REPLACED";
    /**
     * Filling the Order wasn’t possible because enough liquidity available.
     */
    OrderCancelReason["INSUFFICIENT_LIQUIDITY"] = "INSUFFICIENT_LIQUIDITY";
    /**
     * Filling the Order would have resulted in the creation of a Take Profit Order with a GTD time in the past.
     */
    OrderCancelReason["TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"] = "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST";
    /**
     * Filling the Order would result in the creation of a Take Profit Order that would have been filled immediately, closing the new Trade at a loss.
     */
    OrderCancelReason["TAKE_PROFIT_ON_FILL_LOSS"] = "TAKE_PROFIT_ON_FILL_LOSS";
    /**
     * Filling the Order would result in the creation of a Take Profit Loss Order that would close the new Trade at a loss when filled.
     */
    OrderCancelReason["LOSING_TAKE_PROFIT"] = "LOSING_TAKE_PROFIT";
    /**
     * Filling the Order would have resulted in the creation of a Stop Loss Order with a GTD time in the past.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"] = "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST";
    /**
     * Filling the Order would result in the creation of a Stop Loss Order that would have been filled immediately, closing the new Trade at a loss.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_LOSS"] = "STOP_LOSS_ON_FILL_LOSS";
    /**
     * Filling the Order would result in the creation of a Stop Loss Order whose price would be zero or negative due to the specified distance.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"] = "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED";
    /**
     * Filling the Order would not result in the creation of Stop Loss Order, however the Account’s configuration requires that all Trades have a Stop Loss Order attached to them.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_REQUIRED"] = "STOP_LOSS_ON_FILL_REQUIRED";
    /**
     * Filling the Order would not result in the creation of a guaranteed Stop Loss Order, however the Account’s configuration requires that all Trades have a guaranteed Stop Loss Order attached to them.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"] = "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED";
    /**
     * Filling the Order would result in the creation of a guaranteed Stop Loss Order, however the Account’s configuration does not allow guaranteed Stop Loss Orders.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"] = "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED";
    /**
     * Filling the Order would result in the creation of a guaranteed Stop Loss Order with a distance smaller than the configured minimum distance.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"] = "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET";
    /**
     * Filling the Order would result in the creation of a guaranteed Stop Loss Order with trigger price and number of units that that violates the account’s guaranteed Stop Loss Order level restriction.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"] = "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED";
    /**
     * Filling the Order would result in the creation of a guaranteed Stop Loss Order for a hedged Trade, however the Account’s configuration does not allow guaranteed Stop Loss Orders for hedged Trades/Positions.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED"] = "STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED";
    /**
     * Filling the Order would result in the creation of a Stop Loss Order whose TimeInForce value is invalid. A likely cause would be if the Account requires guaranteed stop loss orders and the TimeInForce value were not GTC.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"] = "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID";
    /**
     * Filling the Order would result in the creation of a Stop Loss Order whose TriggerCondition value is invalid. A likely cause would be if the stop loss order is guaranteed and the TimeInForce is not TRIGGER_DEFAULT or TRIGGER_BID for a long trade, or not TRIGGER_DEFAULT or TRIGGER_ASK for a short trade.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"] = "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID";
    /**
     * Filling the Order would result in the creation of a Take Profit Order whose price would be zero or negative due to the specified distance.
     */
    OrderCancelReason["TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"] = "TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED";
    /**
     * Filling the Order would have resulted in the creation of a Trailing Stop Loss Order with a GTD time in the past.
     */
    OrderCancelReason["TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"] = "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST";
    /**
     * Filling the Order would result in the creation of a new Open Trade with a client Trade ID already in use.
     */
    OrderCancelReason["CLIENT_TRADE_ID_ALREADY_EXISTS"] = "CLIENT_TRADE_ID_ALREADY_EXISTS";
    /**
     * Closing out a position wasn’t fully possible.
     */
    OrderCancelReason["POSITION_CLOSEOUT_FAILED"] = "POSITION_CLOSEOUT_FAILED";
    /**
     * Filling the Order would cause the maximum open trades allowed for the Account to be exceeded.
     */
    OrderCancelReason["OPEN_TRADES_ALLOWED_EXCEEDED"] = "OPEN_TRADES_ALLOWED_EXCEEDED";
    /**
     * Filling the Order would have resulted in exceeding the number of pending Orders allowed for the Account.
     */
    OrderCancelReason["PENDING_ORDERS_ALLOWED_EXCEEDED"] = "PENDING_ORDERS_ALLOWED_EXCEEDED";
    /**
     * Filling the Order would have resulted in the creation of a Take Profit Order with a client Order ID that is already in use.
     */
    OrderCancelReason["TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS"] = "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS";
    /**
     * Filling the Order would have resulted in the creation of a Stop Loss Order with a client Order ID that is already in use.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS"] = "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS";
    /**
     * Filling the Order would have resulted in the creation of a Trailing Stop Loss Order with a client Order ID that is already in use.
     */
    OrderCancelReason["TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS"] = "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS";
    /**
     * Filling the Order would have resulted in the Account’s maximum position size limit being exceeded for the Order’s instrument.
     */
    OrderCancelReason["POSITION_SIZE_EXCEEDED"] = "POSITION_SIZE_EXCEEDED";
    /**
     * Filling the Order would result in the creation of a Trade, however there already exists an opposing (hedged) Trade that has a guaranteed Stop Loss Order attached to it. Guaranteed Stop Loss Orders cannot be combined with hedged positions.
     */
    OrderCancelReason["HEDGING_GSLO_VIOLATION"] = "HEDGING_GSLO_VIOLATION";
    /**
     * Filling the order would cause the maximum position value allowed for the account to be exceeded. The Order has been cancelled as a result.
     */
    OrderCancelReason["ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED"] = "ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED";
    /**
     * Filling the order would require the creation of a short trade, however the instrument is configured such that orders being filled using bid prices can only reduce existing positions. New short positions cannot be created, but existing long positions may be reduced or closed.
     */
    OrderCancelReason["INSTRUMENT_BID_REDUCE_ONLY"] = "INSTRUMENT_BID_REDUCE_ONLY";
    /**
     * Filling the order would require the creation of a long trade, however the instrument is configured such that orders being filled using ask prices can only reduce existing positions. New long positions cannot be created, but existing short positions may be reduced or closed.
     */
    OrderCancelReason["INSTRUMENT_ASK_REDUCE_ONLY"] = "INSTRUMENT_ASK_REDUCE_ONLY";
    /**
     * Filling the order would require using the bid, however the instrument is configured such that the bids are halted, and so no short orders may be filled.
     */
    OrderCancelReason["INSTRUMENT_BID_HALTED"] = "INSTRUMENT_BID_HALTED";
    /**
     * Filling the order would require using the ask, however the instrument is configured such that the asks are halted, and so no long orders may be filled.
     */
    OrderCancelReason["INSTRUMENT_ASK_HALTED"] = "INSTRUMENT_ASK_HALTED";
    /**
     * Filling the Order would result in the creation of a Guaranteed Stop Loss Order (GSLO). Since the trade is long the GSLO would be short, however the bid side is currently halted. GSLOs cannot be created in this situation.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_GUARANTEED_BID_HALTED"] = "STOP_LOSS_ON_FILL_GUARANTEED_BID_HALTED";
    /**
     * Filling the Order would result in the creation of a Guaranteed Stop Loss Order (GSLO). Since the trade is short the GSLO would be long, however the ask side is currently halted. GSLOs cannot be created in this situation.
     */
    OrderCancelReason["STOP_LOSS_ON_FILL_GUARANTEED_ASK_HALTED"] = "STOP_LOSS_ON_FILL_GUARANTEED_ASK_HALTED";
    /**
     * Filling the Order would have resulted in a new Trade that violates the FIFO violation safeguard constraints.
     */
    OrderCancelReason["FIFO_VIOLATION_SAFEGUARD_VIOLATION"] = "FIFO_VIOLATION_SAFEGUARD_VIOLATION";
    /**
     * Filling the Order would have reduced an existing Trade such that the reduced Trade violates the FIFO violation safeguard constraints.
     */
    OrderCancelReason["FIFO_VIOLATION_SAFEGUARD_PARTIAL_CLOSE_VIOLATION"] = "FIFO_VIOLATION_SAFEGUARD_PARTIAL_CLOSE_VIOLATION";
})(OrderCancelReason = exports.OrderCancelReason || (exports.OrderCancelReason = {}));
exports.OrderCancelReasonDescription = {
    'INTERNAL_SERVER_ERROR': 'The Order was cancelled because at the time of filling, an unexpected internal server error occurred.',
    'ACCOUNT_LOCKED': 'The Order was cancelled because at the time of filling the account was locked.',
    'ACCOUNT_NEW_POSITIONS_LOCKED': 'The order was to be filled, however the account is configured to not allow new positions to be created.',
    'ACCOUNT_ORDER_CREATION_LOCKED': 'Filling the Order wasn’t possible because it required the creation of a dependent Order and the Account is locked for Order creation.',
    'ACCOUNT_ORDER_FILL_LOCKED': 'Filling the Order was not possible because the Account is locked for filling Orders.',
    'CLIENT_REQUEST': 'The Order was cancelled explicitly at the request of the client.',
    'MIGRATION': 'The Order cancelled because it is being migrated to another account.',
    'MARKET_HALTED': 'Filling the Order wasn’t possible because the Order’s instrument was halted.',
    'LINKED_TRADE_CLOSED': 'The Order is linked to an open Trade that was closed.',
    'TIME_IN_FORCE_EXPIRED': 'The time in force specified for this order has passed.',
    'INSUFFICIENT_MARGIN': 'Filling the Order wasn’t possible because the Account had insufficient margin.',
    'FIFO_VIOLATION': 'Filling the Order would have resulted in a a FIFO violation.',
    'BOUNDS_VIOLATION': 'Filling the Order would have violated the Order’s price bound.',
    'CLIENT_REQUEST_REPLACED': 'The Order was cancelled for replacement at the request of the client.',
    'INSUFFICIENT_LIQUIDITY': 'Filling the Order wasn’t possible because enough liquidity available.',
    'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST': 'Filling the Order would have resulted in the creation of a Take Profit Order with a GTD time in the past.',
    'TAKE_PROFIT_ON_FILL_LOSS': 'Filling the Order would result in the creation of a Take Profit Order that would have been filled immediately, closing the new Trade at a loss.',
    'LOSING_TAKE_PROFIT': 'Filling the Order would result in the creation of a Take Profit Loss Order that would close the new Trade at a loss when filled.',
    'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST': 'Filling the Order would have resulted in the creation of a Stop Loss Order with a GTD time in the past.',
    'STOP_LOSS_ON_FILL_LOSS': 'Filling the Order would result in the creation of a Stop Loss Order that would have been filled immediately, closing the new Trade at a loss.',
    'STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED': 'Filling the Order would result in the creation of a Stop Loss Order whose price would be zero or negative due to the specified distance.',
    'STOP_LOSS_ON_FILL_REQUIRED': 'Filling the Order would not result in the creation of Stop Loss Order, however the Account’s configuration requires that all Trades have a Stop Loss Order attached to them.',
    'STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED': 'Filling the Order would not result in the creation of a guaranteed Stop Loss Order, however the Account’s configuration requires that all Trades have a guaranteed Stop Loss Order attached to them.',
    'STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED': 'Filling the Order would result in the creation of a guaranteed Stop Loss Order, however the Account’s configuration does not allow guaranteed Stop Loss Orders.',
    'STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET': 'Filling the Order would result in the creation of a guaranteed Stop Loss Order with a distance smaller than the configured minimum distance.',
    'STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED': 'Filling the Order would result in the creation of a guaranteed Stop Loss Order with trigger price and number of units that that violates the account’s guaranteed Stop Loss Order level restriction.',
    'STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED': 'Filling the Order would result in the creation of a guaranteed Stop Loss Order for a hedged Trade, however the Account’s configuration does not allow guaranteed Stop Loss Orders for hedged Trades/Positions.',
    'STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID': 'Filling the Order would result in the creation of a Stop Loss Order whose TimeInForce value is invalid. A likely cause would be if the Account requires guaranteed stop loss orders and the TimeInForce value were not GTC.',
    'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID': 'Filling the Order would result in the creation of a Stop Loss Order whose TriggerCondition value is invalid. A likely cause would be if the stop loss order is guaranteed and the TimeInForce is not TRIGGER_DEFAULT or TRIGGER_BID for a long trade, or not TRIGGER_DEFAULT or TRIGGER_ASK for a short trade.',
    'TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED': 'Filling the Order would result in the creation of a Take Profit Order whose price would be zero or negative due to the specified distance.',
    'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST': 'Filling the Order would have resulted in the creation of a Trailing Stop Loss Order with a GTD time in the past.',
    'CLIENT_TRADE_ID_ALREADY_EXISTS': 'Filling the Order would result in the creation of a new Open Trade with a client Trade ID already in use.',
    'POSITION_CLOSEOUT_FAILED': 'Closing out a position wasn’t fully possible.',
    'OPEN_TRADES_ALLOWED_EXCEEDED': 'Filling the Order would cause the maximum open trades allowed for the Account to be exceeded.',
    'PENDING_ORDERS_ALLOWED_EXCEEDED': 'Filling the Order would have resulted in exceeding the number of pending Orders allowed for the Account.',
    'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS': 'Filling the Order would have resulted in the creation of a Take Profit Order with a client Order ID that is already in use.',
    'STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS': 'Filling the Order would have resulted in the creation of a Stop Loss Order with a client Order ID that is already in use.',
    'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS': 'Filling the Order would have resulted in the creation of a Trailing Stop Loss Order with a client Order ID that is already in use.',
    'POSITION_SIZE_EXCEEDED': 'Filling the Order would have resulted in the Account’s maximum position size limit being exceeded for the Order’s instrument.',
    'HEDGING_GSLO_VIOLATION': 'Filling the Order would result in the creation of a Trade, however there already exists an opposing (hedged) Trade that has a guaranteed Stop Loss Order attached to it. Guaranteed Stop Loss Orders cannot be combined with hedged positions.',
    'ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED': 'Filling the order would cause the maximum position value allowed for the account to be exceeded. The Order has been cancelled as a result.',
    'INSTRUMENT_BID_REDUCE_ONLY': 'Filling the order would require the creation of a short trade, however the instrument is configured such that orders being filled using bid prices can only reduce existing positions. New short positions cannot be created, but existing long positions may be reduced or closed.',
    'INSTRUMENT_ASK_REDUCE_ONLY': 'Filling the order would require the creation of a long trade, however the instrument is configured such that orders being filled using ask prices can only reduce existing positions. New long positions cannot be created, but existing short positions may be reduced or closed.',
    'INSTRUMENT_BID_HALTED': 'Filling the order would require using the bid, however the instrument is configured such that the bids are halted, and so no short orders may be filled.',
    'INSTRUMENT_ASK_HALTED': 'Filling the order would require using the ask, however the instrument is configured such that the asks are halted, and so no long orders may be filled.',
    'STOP_LOSS_ON_FILL_GUARANTEED_BID_HALTED': 'Filling the Order would result in the creation of a Guaranteed Stop Loss Order (GSLO). Since the trade is long the GSLO would be short, however the bid side is currently halted. GSLOs cannot be created in this situation.',
    'STOP_LOSS_ON_FILL_GUARANTEED_ASK_HALTED': 'Filling the Order would result in the creation of a Guaranteed Stop Loss Order (GSLO). Since the trade is short the GSLO would be long, however the ask side is currently halted. GSLOs cannot be created in this situation.',
    'FIFO_VIOLATION_SAFEGUARD_VIOLATION': 'Filling the Order would have resulted in a new Trade that violates the FIFO violation safeguard constraints.',
    'FIFO_VIOLATION_SAFEGUARD_PARTIAL_CLOSE_VIOLATION': 'Filling the Order would have reduced an existing Trade such that the reduced Trade violates the FIFO violation safeguard constraints.',
};
/**
 * The reason that the Market Order was created to perform a margin closeout https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var MarketOrderMarginCloseoutReason;
(function (MarketOrderMarginCloseoutReason) {
    /**
     * Trade closures resulted from violating OANDA’s margin policy
     */
    MarketOrderMarginCloseoutReason["MARGIN_CHECK_VIOLATION"] = "MARGIN_CHECK_VIOLATION";
    /**
     * Trade closures came from a margin closeout event resulting from regulatory conditions placed on the Account’s margin call
     */
    MarketOrderMarginCloseoutReason["REGULATORY_MARGIN_CALL_VIOLATION"] = "REGULATORY_MARGIN_CALL_VIOLATION";
    /**
     * Trade closures resulted from violating the margin policy imposed by regulatory requirements
     */
    MarketOrderMarginCloseoutReason["REGULATORY_MARGIN_CHECK_VIOLATION"] = "REGULATORY_MARGIN_CHECK_VIOLATION";
})(MarketOrderMarginCloseoutReason = exports.MarketOrderMarginCloseoutReason || (exports.MarketOrderMarginCloseoutReason = {}));
exports.MarketOrderMarginCloseoutReasonDescription = {
    'MARGIN_CHECK_VIOLATION': 'Trade closures resulted from violating OANDA’s margin policy',
    'REGULATORY_MARGIN_CALL_VIOLATION': 'Trade closures came from a margin closeout event resulting from regulatory conditions placed on the Account’s margin call',
    'REGULATORY_MARGIN_CHECK_VIOLATION': 'Trade closures resulted from violating the margin policy imposed by regulatory requirements',
};
/**
 * The reason that a Transaction was rejected. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var TransactionRejectReason;
(function (TransactionRejectReason) {
    /**
     * An unexpected internal server error has occurred
     */
    TransactionRejectReason["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    /**
     * The system was unable to determine the current price for the Order’s instrument
     */
    TransactionRejectReason["INSTRUMENT_PRICE_UNKNOWN"] = "INSTRUMENT_PRICE_UNKNOWN";
    /**
     * The Account is not active
     */
    TransactionRejectReason["ACCOUNT_NOT_ACTIVE"] = "ACCOUNT_NOT_ACTIVE";
    /**
     * The Account is locked
     */
    TransactionRejectReason["ACCOUNT_LOCKED"] = "ACCOUNT_LOCKED";
    /**
     * The Account is locked for Order creation
     */
    TransactionRejectReason["ACCOUNT_ORDER_CREATION_LOCKED"] = "ACCOUNT_ORDER_CREATION_LOCKED";
    /**
     * The Account is locked for configuration
     */
    TransactionRejectReason["ACCOUNT_CONFIGURATION_LOCKED"] = "ACCOUNT_CONFIGURATION_LOCKED";
    /**
     * The Account is locked for deposits
     */
    TransactionRejectReason["ACCOUNT_DEPOSIT_LOCKED"] = "ACCOUNT_DEPOSIT_LOCKED";
    /**
     * The Account is locked for withdrawals
     */
    TransactionRejectReason["ACCOUNT_WITHDRAWAL_LOCKED"] = "ACCOUNT_WITHDRAWAL_LOCKED";
    /**
     * The Account is locked for Order cancellation
     */
    TransactionRejectReason["ACCOUNT_ORDER_CANCEL_LOCKED"] = "ACCOUNT_ORDER_CANCEL_LOCKED";
    /**
     * The instrument specified is not tradeable by the Account
     */
    TransactionRejectReason["INSTRUMENT_NOT_TRADEABLE"] = "INSTRUMENT_NOT_TRADEABLE";
    /**
     * Creating the Order would result in the maximum number of allowed pending Orders being exceeded
     */
    TransactionRejectReason["PENDING_ORDERS_ALLOWED_EXCEEDED"] = "PENDING_ORDERS_ALLOWED_EXCEEDED";
    /**
     * Neither the Order ID nor client Order ID are specified
     */
    TransactionRejectReason["ORDER_ID_UNSPECIFIED"] = "ORDER_ID_UNSPECIFIED";
    /**
     * The Order specified does not exist
     */
    TransactionRejectReason["ORDER_DOESNT_EXIST"] = "ORDER_DOESNT_EXIST";
    /**
     * The Order ID and client Order ID specified do not identify the same Order
     */
    TransactionRejectReason["ORDER_IDENTIFIER_INCONSISTENCY"] = "ORDER_IDENTIFIER_INCONSISTENCY";
    /**
     * Neither the Trade ID nor client Trade ID are specified
     */
    TransactionRejectReason["TRADE_ID_UNSPECIFIED"] = "TRADE_ID_UNSPECIFIED";
    /**
     * The Trade specified does not exist
     */
    TransactionRejectReason["TRADE_DOESNT_EXIST"] = "TRADE_DOESNT_EXIST";
    /**
     * The Trade ID and client Trade ID specified do not identify the same Trade
     */
    TransactionRejectReason["TRADE_IDENTIFIER_INCONSISTENCY"] = "TRADE_IDENTIFIER_INCONSISTENCY";
    /**
     * The Account had insufficient margin to perform the action specified. One possible reason for this is due to the creation or modification of a guaranteed StopLoss Order.
     */
    TransactionRejectReason["INSUFFICIENT_MARGIN"] = "INSUFFICIENT_MARGIN";
    /**
     * Order instrument has not been specified
     */
    TransactionRejectReason["INSTRUMENT_MISSING"] = "INSTRUMENT_MISSING";
    /**
     * The instrument specified is unknown
     */
    TransactionRejectReason["INSTRUMENT_UNKNOWN"] = "INSTRUMENT_UNKNOWN";
    /**
     * Order units have not been not specified
     */
    TransactionRejectReason["UNITS_MISSING"] = "UNITS_MISSING";
    /**
     * Order units specified are invalid
     */
    TransactionRejectReason["UNITS_INVALID"] = "UNITS_INVALID";
    /**
     * The units specified contain more precision than is allowed for the Order’s instrument
     */
    TransactionRejectReason["UNITS_PRECISION_EXCEEDED"] = "UNITS_PRECISION_EXCEEDED";
    /**
     * The units specified exceeds the maximum number of units allowed
     */
    TransactionRejectReason["UNITS_LIMIT_EXCEEDED"] = "UNITS_LIMIT_EXCEEDED";
    /**
     * The units specified is less than the minimum number of units required
     */
    TransactionRejectReason["UNITS_MINIMUM_NOT_MET"] = "UNITS_MINIMUM_NOT_MET";
    /**
     * The price has not been specified
     */
    TransactionRejectReason["PRICE_MISSING"] = "PRICE_MISSING";
    /**
     * The price specified is invalid
     */
    TransactionRejectReason["PRICE_INVALID"] = "PRICE_INVALID";
    /**
     * The price specified contains more precision than is allowed for the instrument
     */
    TransactionRejectReason["PRICE_PRECISION_EXCEEDED"] = "PRICE_PRECISION_EXCEEDED";
    /**
     * The price distance has not been specified
     */
    TransactionRejectReason["PRICE_DISTANCE_MISSING"] = "PRICE_DISTANCE_MISSING";
    /**
     * The price distance specified is invalid
     */
    TransactionRejectReason["PRICE_DISTANCE_INVALID"] = "PRICE_DISTANCE_INVALID";
    /**
     * The price distance specified contains more precision than is allowed for the instrument
     */
    TransactionRejectReason["PRICE_DISTANCE_PRECISION_EXCEEDED"] = "PRICE_DISTANCE_PRECISION_EXCEEDED";
    /**
     * The price distance exceeds that maximum allowed amount
     */
    TransactionRejectReason["PRICE_DISTANCE_MAXIMUM_EXCEEDED"] = "PRICE_DISTANCE_MAXIMUM_EXCEEDED";
    /**
     * The price distance does not meet the minimum allowed amount
     */
    TransactionRejectReason["PRICE_DISTANCE_MINIMUM_NOT_MET"] = "PRICE_DISTANCE_MINIMUM_NOT_MET";
    /**
     * The TimeInForce field has not been specified
     */
    TransactionRejectReason["TIME_IN_FORCE_MISSING"] = "TIME_IN_FORCE_MISSING";
    /**
     * The TimeInForce specified is invalid
     */
    TransactionRejectReason["TIME_IN_FORCE_INVALID"] = "TIME_IN_FORCE_INVALID";
    /**
     * The TimeInForce is GTD but no GTD timestamp is provided
     */
    TransactionRejectReason["TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"] = "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING";
    /**
     * The TimeInForce is GTD but the GTD timestamp is in the past
     */
    TransactionRejectReason["TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"] = "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST";
    /**
     * The price bound specified is invalid
     */
    TransactionRejectReason["PRICE_BOUND_INVALID"] = "PRICE_BOUND_INVALID";
    /**
     * The price bound specified contains more precision than is allowed for the Order’s instrument
     */
    TransactionRejectReason["PRICE_BOUND_PRECISION_EXCEEDED"] = "PRICE_BOUND_PRECISION_EXCEEDED";
    /**
     * Multiple Orders on fill share the same client Order ID
     */
    TransactionRejectReason["ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"] = "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS";
    /**
     * The Order does not support Trade on fill client extensions because it cannot create a new Trade
     */
    TransactionRejectReason["TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"] = "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED";
    /**
     * The client Order ID specified is invalid
     */
    TransactionRejectReason["CLIENT_ORDER_ID_INVALID"] = "CLIENT_ORDER_ID_INVALID";
    /**
     * The client Order ID specified is already assigned to another pending Order
     */
    TransactionRejectReason["CLIENT_ORDER_ID_ALREADY_EXISTS"] = "CLIENT_ORDER_ID_ALREADY_EXISTS";
    /**
     * The client Order tag specified is invalid
     */
    TransactionRejectReason["CLIENT_ORDER_TAG_INVALID"] = "CLIENT_ORDER_TAG_INVALID";
    /**
     * The client Order comment specified is invalid
     */
    TransactionRejectReason["CLIENT_ORDER_COMMENT_INVALID"] = "CLIENT_ORDER_COMMENT_INVALID";
    /**
     * The client Trade ID specified is invalid
     */
    TransactionRejectReason["CLIENT_TRADE_ID_INVALID"] = "CLIENT_TRADE_ID_INVALID";
    /**
     * The client Trade ID specified is already assigned to another open Trade
     */
    TransactionRejectReason["CLIENT_TRADE_ID_ALREADY_EXISTS"] = "CLIENT_TRADE_ID_ALREADY_EXISTS";
    /**
     * The client Trade tag specified is invalid
     */
    TransactionRejectReason["CLIENT_TRADE_TAG_INVALID"] = "CLIENT_TRADE_TAG_INVALID";
    /**
     * The client Trade comment is invalid
     */
    TransactionRejectReason["CLIENT_TRADE_COMMENT_INVALID"] = "CLIENT_TRADE_COMMENT_INVALID";
    /**
     * The OrderFillPositionAction field has not been specified
     */
    TransactionRejectReason["ORDER_FILL_POSITION_ACTION_MISSING"] = "ORDER_FILL_POSITION_ACTION_MISSING";
    /**
     * The OrderFillPositionAction specified is invalid
     */
    TransactionRejectReason["ORDER_FILL_POSITION_ACTION_INVALID"] = "ORDER_FILL_POSITION_ACTION_INVALID";
    /**
     * The TriggerCondition field has not been specified
     */
    TransactionRejectReason["TRIGGER_CONDITION_MISSING"] = "TRIGGER_CONDITION_MISSING";
    /**
     * The TriggerCondition specified is invalid
     */
    TransactionRejectReason["TRIGGER_CONDITION_INVALID"] = "TRIGGER_CONDITION_INVALID";
    /**
     * The OrderFillPositionAction field has not been specified
     */
    TransactionRejectReason["ORDER_PARTIAL_FILL_OPTION_MISSING"] = "ORDER_PARTIAL_FILL_OPTION_MISSING";
    /**
     * The OrderFillPositionAction specified is invalid.
     */
    TransactionRejectReason["ORDER_PARTIAL_FILL_OPTION_INVALID"] = "ORDER_PARTIAL_FILL_OPTION_INVALID";
    /**
     * When attempting to reissue an order (currently only a MarketIfTouched) that was immediately partially filled, it is not possible to create a correct pending Order.
     */
    TransactionRejectReason["INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"] = "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL";
    /**
     * A Take Profit Order for the specified Trade already exists
     */
    TransactionRejectReason["TAKE_PROFIT_ORDER_ALREADY_EXISTS"] = "TAKE_PROFIT_ORDER_ALREADY_EXISTS";
    /**
     * The Take Profit Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints.
     */
    TransactionRejectReason["TAKE_PROFIT_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD"] = "TAKE_PROFIT_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD";
    /**
     * The Take Profit on fill specified does not provide a price
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_PRICE_MISSING"] = "TAKE_PROFIT_ON_FILL_PRICE_MISSING";
    /**
     * The Take Profit on fill specified contains an invalid price
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_PRICE_INVALID"] = "TAKE_PROFIT_ON_FILL_PRICE_INVALID";
    /**
     * The Take Profit on fill specified contains a price with more precision than is allowed by the Order’s instrument
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"] = "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED";
    /**
     * The Take Profit on fill specified does not provide a TimeInForce
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"] = "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING";
    /**
     * The Take Profit on fill specifies an invalid TimeInForce
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"] = "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID";
    /**
     * The Take Profit on fill specifies a GTD TimeInForce but does not provide a GTD timestamp
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"] = "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING";
    /**
     * The Take Profit on fill specifies a GTD timestamp that is in the past
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"] = "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST";
    /**
     * The Take Profit on fill client Order ID specified is invalid
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"] = "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID";
    /**
     * The Take Profit on fill client Order tag specified is invalid
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"] = "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID";
    /**
     * The Take Profit on fill client Order comment specified is invalid
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"] = "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID";
    /**
     * The Take Profit on fill specified does not provide a TriggerCondition
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"] = "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING";
    /**
     * The Take Profit on fill specifies an invalid TriggerCondition
     */
    TransactionRejectReason["TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"] = "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID";
    /**
     * A Stop Loss Order for the specified Trade already exists
     */
    TransactionRejectReason["STOP_LOSS_ORDER_ALREADY_EXISTS"] = "STOP_LOSS_ORDER_ALREADY_EXISTS";
    /**
     * An attempt was made to to create a non-guaranteed stop loss order in an account that requires all stop loss orders to be guaranteed.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_GUARANTEED_REQUIRED"] = "STOP_LOSS_ORDER_GUARANTEED_REQUIRED";
    /**
     * An attempt to create a guaranteed stop loss order with a price that is within the current tradeable spread.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"] = "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD";
    /**
     * An attempt was made to create a guaranteed Stop Loss Order, however the Account’s configuration does not allow guaranteed Stop Loss Orders.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"] = "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED";
    /**
     * An attempt was made to create a guaranteed Stop Loss Order when the market was halted.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"] = "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION";
    /**
     * An attempt was made to re-create a guaranteed Stop Loss Order with a tighter fill price when the market was halted.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"] = "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION";
    /**
     * An attempt was made to create a guaranteed Stop Loss Order on a hedged Trade (ie there is an existing open Trade in the opposing direction), however the Account’s configuration does not allow guaranteed Stop Loss Orders for hedged Trades/Positions.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"] = "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED";
    /**
     * An attempt was made to create a guaranteed Stop Loss Order, however the distance between the current price and the trigger price does not meet the Account’s configured minimum Guaranteed Stop Loss distance.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"] = "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET";
    /**
     * An attempt was made to cancel a Stop Loss Order, however the Account’s configuration requires every Trade have an associated Stop Loss Order.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_NOT_CANCELABLE"] = "STOP_LOSS_ORDER_NOT_CANCELABLE";
    /**
     * An attempt was made to cancel and replace a Stop Loss Order, however the Account’s configuration prevents the modification of Stop Loss Orders.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_NOT_REPLACEABLE"] = "STOP_LOSS_ORDER_NOT_REPLACEABLE";
    /**
     * An attempt was made to create a guaranteed Stop Loss Order, however doing so would exceed the Account’s configured guaranteed StopLoss Order level restriction volume.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"] = "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED";
    /**
     * The Stop Loss Order request contains both the price and distance fields.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"] = "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED";
    /**
     * The Stop Loss Order request contains neither the price nor distance fields.
     */
    TransactionRejectReason["STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"] = "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING";
    /**
     * The Stop Loss Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints
     */
    TransactionRejectReason["STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD"] = "STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD";
    /**
     * An attempt to create a pending Order was made with no Stop Loss Order on fill specified and the Account’s configuration requires that every Trade have an associated Stop Loss Order.
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"] = "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER";
    /**
     * An attempt to create a pending Order was made with a Stop Loss Order on fill that was explicitly configured to be guaranteed, however the Account’s configuration does not allow guaranteed Stop Loss Orders.
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"] = "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED";
    /**
     * An attempt to create a pending Order was made with a Stop Loss Order on fill that was explicitly configured to be not guaranteed, however the Account’s configuration requires guaranteed Stop Loss Orders.
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"] = "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED";
    /**
     * The Stop Loss on fill specified does not provide a price
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_PRICE_MISSING"] = "STOP_LOSS_ON_FILL_PRICE_MISSING";
    /**
     * The Stop Loss on fill specifies an invalid price
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_PRICE_INVALID"] = "STOP_LOSS_ON_FILL_PRICE_INVALID";
    /**
     * The Stop Loss on fill specifies a price with more precision than is allowed by the Order’s instrument
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"] = "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED";
    /**
     * An attempt to create a pending Order was made with the distance between the guaranteed Stop Loss Order on fill’s price and the pending Order’s price is less than the Account’s configured minimum guaranteed stop loss distance.
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"] = "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET";
    /**
     * An attempt to create a pending Order was made with a guaranteed Stop Loss Order on fill configured, and the Order’s units exceed the Account’s configured guaranteed StopLoss Order level restriction volume.
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"] = "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED";
    /**
     * The Stop Loss on fill distance is invalid
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_DISTANCE_INVALID"] = "STOP_LOSS_ON_FILL_DISTANCE_INVALID";
    /**
     * The Stop Loss on fill price distance exceeds the maximum allowed amount
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"] = "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED";
    /**
     * The Stop Loss on fill distance contains more precision than is allowed by the instrument
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"] = "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED";
    /**
     * The Stop Loss on fill contains both the price and distance fields.
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"] = "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED";
    /**
     * The Stop Loss on fill contains neither the price nor distance fields.
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"] = "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING";
    /**
     * The Stop Loss on fill specified does not provide a TimeInForce
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"] = "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING";
    /**
     * The Stop Loss on fill specifies an invalid TimeInForce
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"] = "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID";
    /**
     * The Stop Loss on fill specifies a GTD TimeInForce but does not provide a GTD timestamp
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"] = "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING";
    /**
     * The Stop Loss on fill specifies a GTD timestamp that is in the past
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"] = "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST";
    /**
     * The Stop Loss on fill client Order ID specified is invalid
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"] = "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID";
    /**
     * The Stop Loss on fill client Order tag specified is invalid
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"] = "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID";
    /**
     * The Stop Loss on fill client Order comment specified is invalid
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"] = "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID";
    /**
     * The Stop Loss on fill specified does not provide a TriggerCondition
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"] = "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING";
    /**
     * The Stop Loss on fill specifies an invalid TriggerCondition
     */
    TransactionRejectReason["STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"] = "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID";
    /**
     * A Trailing Stop Loss Order for the specified Trade already exists
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"] = "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS";
    /**
     * The Trailing Stop Loss Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD"] = "TRAILING_STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD";
    /**
     * The Trailing Stop Loss on fill specified does not provide a distance
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"] = "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING";
    /**
     * The Trailing Stop Loss on fill distance is invalid
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"] = "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID";
    /**
     * The Trailing Stop Loss on fill distance contains more precision than is allowed by the instrument
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"] = "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED";
    /**
     * The Trailing Stop Loss on fill price distance exceeds the maximum allowed amount
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"] = "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED";
    /**
     * The Trailing Stop Loss on fill price distance does not meet the minimum allowed amount
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"] = "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET";
    /**
     * The Trailing Stop Loss on fill specified does not provide a TimeInForce
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"] = "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING";
    /**
     * The Trailing Stop Loss on fill specifies an invalid TimeInForce
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"] = "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID";
    /**
     * The Trailing Stop Loss on fill TimeInForce is specified as GTD but no GTD timestamp is provided
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"] = "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING";
    /**
     * The Trailing Stop Loss on fill GTD timestamp is in the past
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"] = "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST";
    /**
     * The Trailing Stop Loss on fill client Order ID specified is invalid
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"] = "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID";
    /**
     * The Trailing Stop Loss on fill client Order tag specified is invalid
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"] = "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID";
    /**
     * The Trailing Stop Loss on fill client Order comment specified is invalid
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"] = "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID";
    /**
     * A client attempted to create either a Trailing Stop Loss order or an order with a Trailing Stop Loss On Fill specified, which may not yet be supported.
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"] = "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED";
    /**
     * The Trailing Stop Loss on fill specified does not provide a TriggerCondition
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"] = "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING";
    /**
     * The Tailing Stop Loss on fill specifies an invalid TriggerCondition
     */
    TransactionRejectReason["TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"] = "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID";
    /**
     * The request to close a Trade does not specify a full or partial close
     */
    TransactionRejectReason["CLOSE_TRADE_TYPE_MISSING"] = "CLOSE_TRADE_TYPE_MISSING";
    /**
     * The request to close a Trade partially did not specify the number of units to close
     */
    TransactionRejectReason["CLOSE_TRADE_PARTIAL_UNITS_MISSING"] = "CLOSE_TRADE_PARTIAL_UNITS_MISSING";
    /**
     * The request to partially close a Trade specifies a number of units that exceeds the current size of the given Trade
     */
    TransactionRejectReason["CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"] = "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE";
    /**
     * The Position requested to be closed out does not exist
     */
    TransactionRejectReason["CLOSEOUT_POSITION_DOESNT_EXIST"] = "CLOSEOUT_POSITION_DOESNT_EXIST";
    /**
     * The request to closeout a Position was specified incompletely
     */
    TransactionRejectReason["CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"] = "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION";
    /**
     * A partial Position closeout request specifies a number of units that exceeds the current Position
     */
    TransactionRejectReason["CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"] = "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE";
    /**
     * The request to closeout a Position could not be fully satisfied
     */
    TransactionRejectReason["CLOSEOUT_POSITION_REJECT"] = "CLOSEOUT_POSITION_REJECT";
    /**
     * The request to partially closeout a Position did not specify the number of units to close.
     */
    TransactionRejectReason["CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"] = "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING";
    /**
     * The markup group ID provided is invalid
     */
    TransactionRejectReason["MARKUP_GROUP_ID_INVALID"] = "MARKUP_GROUP_ID_INVALID";
    /**
     * The PositionAggregationMode provided is not supported/valid.
     */
    TransactionRejectReason["POSITION_AGGREGATION_MODE_INVALID"] = "POSITION_AGGREGATION_MODE_INVALID";
    /**
     * No configuration parameters provided
     */
    TransactionRejectReason["ADMIN_CONFIGURE_DATA_MISSING"] = "ADMIN_CONFIGURE_DATA_MISSING";
    /**
     * The margin rate provided is invalid
     */
    TransactionRejectReason["MARGIN_RATE_INVALID"] = "MARGIN_RATE_INVALID";
    /**
     * The margin rate provided would cause an immediate margin closeout
     */
    TransactionRejectReason["MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"] = "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT";
    /**
     * The account alias string provided is invalid
     */
    TransactionRejectReason["ALIAS_INVALID"] = "ALIAS_INVALID";
    /**
     * No configuration parameters provided
     */
    TransactionRejectReason["CLIENT_CONFIGURE_DATA_MISSING"] = "CLIENT_CONFIGURE_DATA_MISSING";
    /**
     * The margin rate provided would cause the Account to enter a margin call state.
     */
    TransactionRejectReason["MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"] = "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL";
    /**
     * Funding is not possible because the requested transfer amount is invalid
     */
    TransactionRejectReason["AMOUNT_INVALID"] = "AMOUNT_INVALID";
    /**
     * The Account does not have sufficient balance to complete the funding request
     */
    TransactionRejectReason["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
    /**
     * Funding amount has not been specified
     */
    TransactionRejectReason["AMOUNT_MISSING"] = "AMOUNT_MISSING";
    /**
     * Funding reason has not been specified
     */
    TransactionRejectReason["FUNDING_REASON_MISSING"] = "FUNDING_REASON_MISSING";
    /**
     * The list of Order Identifiers provided for a One Cancels All Order contains an Order Identifier that refers to a Stop Loss Order. OCA groups cannot contain Stop Loss Orders.
     */
    TransactionRejectReason["OCA_ORDER_IDS_STOP_LOSS_NOT_ALLOWED"] = "OCA_ORDER_IDS_STOP_LOSS_NOT_ALLOWED";
    /**
     * Neither Order nor Trade on Fill client extensions were provided for modification
     */
    TransactionRejectReason["CLIENT_EXTENSIONS_DATA_MISSING"] = "CLIENT_EXTENSIONS_DATA_MISSING";
    /**
     * The Order to be replaced has a different type than the replacing Order.
     */
    TransactionRejectReason["REPLACING_ORDER_INVALID"] = "REPLACING_ORDER_INVALID";
    /**
     * The replacing Order refers to a different Trade than the Order that is being replaced.
     */
    TransactionRejectReason["REPLACING_TRADE_ID_INVALID"] = "REPLACING_TRADE_ID_INVALID";
    /**
     * Canceling the order would cause an immediate margin closeout.
     */
    TransactionRejectReason["ORDER_CANCEL_WOULD_TRIGGER_CLOSEOUT"] = "ORDER_CANCEL_WOULD_TRIGGER_CLOSEOUT";
})(TransactionRejectReason = exports.TransactionRejectReason || (exports.TransactionRejectReason = {}));
exports.TransactionRejectReasonDescription = {
    'INTERNAL_SERVER_ERROR': 'An unexpected internal server error has occurred',
    'INSTRUMENT_PRICE_UNKNOWN': 'The system was unable to determine the current price for the Order’s instrument',
    'ACCOUNT_NOT_ACTIVE': 'The Account is not active',
    'ACCOUNT_LOCKED': 'The Account is locked',
    'ACCOUNT_ORDER_CREATION_LOCKED': 'The Account is locked for Order creation',
    'ACCOUNT_CONFIGURATION_LOCKED': 'The Account is locked for configuration',
    'ACCOUNT_DEPOSIT_LOCKED': 'The Account is locked for deposits',
    'ACCOUNT_WITHDRAWAL_LOCKED': 'The Account is locked for withdrawals',
    'ACCOUNT_ORDER_CANCEL_LOCKED': 'The Account is locked for Order cancellation',
    'INSTRUMENT_NOT_TRADEABLE': 'The instrument specified is not tradeable by the Account',
    'PENDING_ORDERS_ALLOWED_EXCEEDED': 'Creating the Order would result in the maximum number of allowed pending Orders being exceeded',
    'ORDER_ID_UNSPECIFIED': 'Neither the Order ID nor client Order ID are specified',
    'ORDER_DOESNT_EXIST': 'The Order specified does not exist',
    'ORDER_IDENTIFIER_INCONSISTENCY': 'The Order ID and client Order ID specified do not identify the same Order',
    'TRADE_ID_UNSPECIFIED': 'Neither the Trade ID nor client Trade ID are specified',
    'TRADE_DOESNT_EXIST': 'The Trade specified does not exist',
    'TRADE_IDENTIFIER_INCONSISTENCY': 'The Trade ID and client Trade ID specified do not identify the same Trade',
    'INSUFFICIENT_MARGIN': 'The Account had insufficient margin to perform the action specified. One possible reason for this is due to the creation or modification of a guaranteed StopLoss Order.',
    'INSTRUMENT_MISSING': 'Order instrument has not been specified',
    'INSTRUMENT_UNKNOWN': 'The instrument specified is unknown',
    'UNITS_MISSING': 'Order units have not been not specified',
    'UNITS_INVALID': 'Order units specified are invalid',
    'UNITS_PRECISION_EXCEEDED': 'The units specified contain more precision than is allowed for the Order’s instrument',
    'UNITS_LIMIT_EXCEEDED': 'The units specified exceeds the maximum number of units allowed',
    'UNITS_MINIMUM_NOT_MET': 'The units specified is less than the minimum number of units required',
    'PRICE_MISSING': 'The price has not been specified',
    'PRICE_INVALID': 'The price specified is invalid',
    'PRICE_PRECISION_EXCEEDED': 'The price specified contains more precision than is allowed for the instrument',
    'PRICE_DISTANCE_MISSING': 'The price distance has not been specified',
    'PRICE_DISTANCE_INVALID': 'The price distance specified is invalid',
    'PRICE_DISTANCE_PRECISION_EXCEEDED': 'The price distance specified contains more precision than is allowed for the instrument',
    'PRICE_DISTANCE_MAXIMUM_EXCEEDED': 'The price distance exceeds that maximum allowed amount',
    'PRICE_DISTANCE_MINIMUM_NOT_MET': 'The price distance does not meet the minimum allowed amount',
    'TIME_IN_FORCE_MISSING': 'The TimeInForce field has not been specified',
    'TIME_IN_FORCE_INVALID': 'The TimeInForce specified is invalid',
    'TIME_IN_FORCE_GTD_TIMESTAMP_MISSING': 'The TimeInForce is GTD but no GTD timestamp is provided',
    'TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST': 'The TimeInForce is GTD but the GTD timestamp is in the past',
    'PRICE_BOUND_INVALID': 'The price bound specified is invalid',
    'PRICE_BOUND_PRECISION_EXCEEDED': 'The price bound specified contains more precision than is allowed for the Order’s instrument',
    'ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS': 'Multiple Orders on fill share the same client Order ID',
    'TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED': 'The Order does not support Trade on fill client extensions because it cannot create a new Trade',
    'CLIENT_ORDER_ID_INVALID': 'The client Order ID specified is invalid',
    'CLIENT_ORDER_ID_ALREADY_EXISTS': 'The client Order ID specified is already assigned to another pending Order',
    'CLIENT_ORDER_TAG_INVALID': 'The client Order tag specified is invalid',
    'CLIENT_ORDER_COMMENT_INVALID': 'The client Order comment specified is invalid',
    'CLIENT_TRADE_ID_INVALID': 'The client Trade ID specified is invalid',
    'CLIENT_TRADE_ID_ALREADY_EXISTS': 'The client Trade ID specified is already assigned to another open Trade',
    'CLIENT_TRADE_TAG_INVALID': 'The client Trade tag specified is invalid',
    'CLIENT_TRADE_COMMENT_INVALID': 'The client Trade comment is invalid',
    'ORDER_FILL_POSITION_ACTION_MISSING': 'The OrderFillPositionAction field has not been specified',
    'ORDER_FILL_POSITION_ACTION_INVALID': 'The OrderFillPositionAction specified is invalid',
    'TRIGGER_CONDITION_MISSING': 'The TriggerCondition field has not been specified',
    'TRIGGER_CONDITION_INVALID': 'The TriggerCondition specified is invalid',
    'ORDER_PARTIAL_FILL_OPTION_MISSING': 'The OrderFillPositionAction field has not been specified',
    'ORDER_PARTIAL_FILL_OPTION_INVALID': 'The OrderFillPositionAction specified is invalid.',
    'INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL': 'When attempting to reissue an order (currently only a MarketIfTouched) that was immediately partially filled, it is not possible to create a correct pending Order.',
    'TAKE_PROFIT_ORDER_ALREADY_EXISTS': 'A Take Profit Order for the specified Trade already exists',
    'TAKE_PROFIT_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD': 'The Take Profit Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints.',
    'TAKE_PROFIT_ON_FILL_PRICE_MISSING': 'The Take Profit on fill specified does not provide a price',
    'TAKE_PROFIT_ON_FILL_PRICE_INVALID': 'The Take Profit on fill specified contains an invalid price',
    'TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED': 'The Take Profit on fill specified contains a price with more precision than is allowed by the Order’s instrument',
    'TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING': 'The Take Profit on fill specified does not provide a TimeInForce',
    'TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID': 'The Take Profit on fill specifies an invalid TimeInForce',
    'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING': 'The Take Profit on fill specifies a GTD TimeInForce but does not provide a GTD timestamp',
    'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST': 'The Take Profit on fill specifies a GTD timestamp that is in the past',
    'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID': 'The Take Profit on fill client Order ID specified is invalid',
    'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID': 'The Take Profit on fill client Order tag specified is invalid',
    'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID': 'The Take Profit on fill client Order comment specified is invalid',
    'TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING': 'The Take Profit on fill specified does not provide a TriggerCondition',
    'TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID': 'The Take Profit on fill specifies an invalid TriggerCondition',
    'STOP_LOSS_ORDER_ALREADY_EXISTS': 'A Stop Loss Order for the specified Trade already exists',
    'STOP_LOSS_ORDER_GUARANTEED_REQUIRED': 'An attempt was made to to create a non-guaranteed stop loss order in an account that requires all stop loss orders to be guaranteed.',
    'STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD': 'An attempt to create a guaranteed stop loss order with a price that is within the current tradeable spread.',
    'STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED': 'An attempt was made to create a guaranteed Stop Loss Order, however the Account’s configuration does not allow guaranteed Stop Loss Orders.',
    'STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION': 'An attempt was made to create a guaranteed Stop Loss Order when the market was halted.',
    'STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION': 'An attempt was made to re-create a guaranteed Stop Loss Order with a tighter fill price when the market was halted.',
    'STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED': 'An attempt was made to create a guaranteed Stop Loss Order on a hedged Trade (ie there is an existing open Trade in the opposing direction), however the Account’s configuration does not allow guaranteed Stop Loss Orders for hedged Trades/Positions.',
    'STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET': 'An attempt was made to create a guaranteed Stop Loss Order, however the distance between the current price and the trigger price does not meet the Account’s configured minimum Guaranteed Stop Loss distance.',
    'STOP_LOSS_ORDER_NOT_CANCELABLE': 'An attempt was made to cancel a Stop Loss Order, however the Account’s configuration requires every Trade have an associated Stop Loss Order.',
    'STOP_LOSS_ORDER_NOT_REPLACEABLE': 'An attempt was made to cancel and replace a Stop Loss Order, however the Account’s configuration prevents the modification of Stop Loss Orders.',
    'STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED': 'An attempt was made to create a guaranteed Stop Loss Order, however doing so would exceed the Account’s configured guaranteed StopLoss Order level restriction volume.',
    'STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED': 'The Stop Loss Order request contains both the price and distance fields.',
    'STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING': 'The Stop Loss Order request contains neither the price nor distance fields.',
    'STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD': 'The Stop Loss Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints',
    'STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER': 'An attempt to create a pending Order was made with no Stop Loss Order on fill specified and the Account’s configuration requires that every Trade have an associated Stop Loss Order.',
    'STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED': 'An attempt to create a pending Order was made with a Stop Loss Order on fill that was explicitly configured to be guaranteed, however the Account’s configuration does not allow guaranteed Stop Loss Orders.',
    'STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED': 'An attempt to create a pending Order was made with a Stop Loss Order on fill that was explicitly configured to be not guaranteed, however the Account’s configuration requires guaranteed Stop Loss Orders.',
    'STOP_LOSS_ON_FILL_PRICE_MISSING': 'The Stop Loss on fill specified does not provide a price',
    'STOP_LOSS_ON_FILL_PRICE_INVALID': 'The Stop Loss on fill specifies an invalid price',
    'STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED': 'The Stop Loss on fill specifies a price with more precision than is allowed by the Order’s instrument',
    'STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET': 'An attempt to create a pending Order was made with the distance between the guaranteed Stop Loss Order on fill’s price and the pending Order’s price is less than the Account’s configured minimum guaranteed stop loss distance.',
    'STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED': 'An attempt to create a pending Order was made with a guaranteed Stop Loss Order on fill configured, and the Order’s units exceed the Account’s configured guaranteed StopLoss Order level restriction volume.',
    'STOP_LOSS_ON_FILL_DISTANCE_INVALID': 'The Stop Loss on fill distance is invalid',
    'STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED': 'The Stop Loss on fill price distance exceeds the maximum allowed amount',
    'STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED': 'The Stop Loss on fill distance contains more precision than is allowed by the instrument',
    'STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED': 'The Stop Loss on fill contains both the price and distance fields.',
    'STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING': 'The Stop Loss on fill contains neither the price nor distance fields.',
    'STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING': 'The Stop Loss on fill specified does not provide a TimeInForce',
    'STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID': 'The Stop Loss on fill specifies an invalid TimeInForce',
    'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING': 'The Stop Loss on fill specifies a GTD TimeInForce but does not provide a GTD timestamp',
    'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST': 'The Stop Loss on fill specifies a GTD timestamp that is in the past',
    'STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID': 'The Stop Loss on fill client Order ID specified is invalid',
    'STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID': 'The Stop Loss on fill client Order tag specified is invalid',
    'STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID': 'The Stop Loss on fill client Order comment specified is invalid',
    'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING': 'The Stop Loss on fill specified does not provide a TriggerCondition',
    'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID': 'The Stop Loss on fill specifies an invalid TriggerCondition',
    'TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS': 'A Trailing Stop Loss Order for the specified Trade already exists',
    'TRAILING_STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD': 'The Trailing Stop Loss Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints',
    'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING': 'The Trailing Stop Loss on fill specified does not provide a distance',
    'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID': 'The Trailing Stop Loss on fill distance is invalid',
    'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED': 'The Trailing Stop Loss on fill distance contains more precision than is allowed by the instrument',
    'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED': 'The Trailing Stop Loss on fill price distance exceeds the maximum allowed amount',
    'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET': 'The Trailing Stop Loss on fill price distance does not meet the minimum allowed amount',
    'TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING': 'The Trailing Stop Loss on fill specified does not provide a TimeInForce',
    'TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID': 'The Trailing Stop Loss on fill specifies an invalid TimeInForce',
    'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING': 'The Trailing Stop Loss on fill TimeInForce is specified as GTD but no GTD timestamp is provided',
    'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST': 'The Trailing Stop Loss on fill GTD timestamp is in the past',
    'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID': 'The Trailing Stop Loss on fill client Order ID specified is invalid',
    'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID': 'The Trailing Stop Loss on fill client Order tag specified is invalid',
    'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID': 'The Trailing Stop Loss on fill client Order comment specified is invalid',
    'TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED': 'A client attempted to create either a Trailing Stop Loss order or an order with a Trailing Stop Loss On Fill specified, which may not yet be supported.',
    'TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING': 'The Trailing Stop Loss on fill specified does not provide a TriggerCondition',
    'TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID': 'The Tailing Stop Loss on fill specifies an invalid TriggerCondition',
    'CLOSE_TRADE_TYPE_MISSING': 'The request to close a Trade does not specify a full or partial close',
    'CLOSE_TRADE_PARTIAL_UNITS_MISSING': 'The request to close a Trade partially did not specify the number of units to close',
    'CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE': 'The request to partially close a Trade specifies a number of units that exceeds the current size of the given Trade',
    'CLOSEOUT_POSITION_DOESNT_EXIST': 'The Position requested to be closed out does not exist',
    'CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION': 'The request to closeout a Position was specified incompletely',
    'CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE': 'A partial Position closeout request specifies a number of units that exceeds the current Position',
    'CLOSEOUT_POSITION_REJECT': 'The request to closeout a Position could not be fully satisfied',
    'CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING': 'The request to partially closeout a Position did not specify the number of units to close.',
    'MARKUP_GROUP_ID_INVALID': 'The markup group ID provided is invalid',
    'POSITION_AGGREGATION_MODE_INVALID': 'The PositionAggregationMode provided is not supported/valid.',
    'ADMIN_CONFIGURE_DATA_MISSING': 'No configuration parameters provided',
    'MARGIN_RATE_INVALID': 'The margin rate provided is invalid',
    'MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT': 'The margin rate provided would cause an immediate margin closeout',
    'ALIAS_INVALID': 'The account alias string provided is invalid',
    'CLIENT_CONFIGURE_DATA_MISSING': 'No configuration parameters provided',
    'MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL': 'The margin rate provided would cause the Account to enter a margin call state.',
    'AMOUNT_INVALID': 'Funding is not possible because the requested transfer amount is invalid',
    'INSUFFICIENT_FUNDS': 'The Account does not have sufficient balance to complete the funding request',
    'AMOUNT_MISSING': 'Funding amount has not been specified',
    'FUNDING_REASON_MISSING': 'Funding reason has not been specified',
    'OCA_ORDER_IDS_STOP_LOSS_NOT_ALLOWED': 'The list of Order Identifiers provided for a One Cancels All Order contains an Order Identifier that refers to a Stop Loss Order. OCA groups cannot contain Stop Loss Orders.',
    'CLIENT_EXTENSIONS_DATA_MISSING': 'Neither Order nor Trade on Fill client extensions were provided for modification',
    'REPLACING_ORDER_INVALID': 'The Order to be replaced has a different type than the replacing Order.',
    'REPLACING_TRADE_ID_INVALID': 'The replacing Order refers to a different Trade than the Order that is being replaced.',
    'ORDER_CANCEL_WOULD_TRIGGER_CLOSEOUT': 'Canceling the order would cause an immediate margin closeout.',
};
/**
 * A filter that can be used when fetching Transactions https://developer.oanda.com/rest-live-v20/transaction-df/
 */
var TransactionFilter;
(function (TransactionFilter) {
    /**
     * Order-related Transactions. These are the Transactions that create, cancel, fill or trigger Orders
     */
    TransactionFilter["ORDER"] = "ORDER";
    /**
     * Funding-related Transactions
     */
    TransactionFilter["FUNDING"] = "FUNDING";
    /**
     * Administrative Transactions
     */
    TransactionFilter["ADMIN"] = "ADMIN";
    /**
     * Account Create Transaction
     */
    TransactionFilter["CREATE"] = "CREATE";
    /**
     * Account Close Transaction
     */
    TransactionFilter["CLOSE"] = "CLOSE";
    /**
     * Account Reopen Transaction
     */
    TransactionFilter["REOPEN"] = "REOPEN";
    /**
     * Client Configuration Transaction
     */
    TransactionFilter["CLIENT_CONFIGURE"] = "CLIENT_CONFIGURE";
    /**
     * Client Configuration Reject Transaction
     */
    TransactionFilter["CLIENT_CONFIGURE_REJECT"] = "CLIENT_CONFIGURE_REJECT";
    /**
     * Transfer Funds Transaction
     */
    TransactionFilter["TRANSFER_FUNDS"] = "TRANSFER_FUNDS";
    /**
     * Transfer Funds Reject Transaction
     */
    TransactionFilter["TRANSFER_FUNDS_REJECT"] = "TRANSFER_FUNDS_REJECT";
    /**
     * Market Order Transaction
     */
    TransactionFilter["MARKET_ORDER"] = "MARKET_ORDER";
    /**
     * Market Order Reject Transaction
     */
    TransactionFilter["MARKET_ORDER_REJECT"] = "MARKET_ORDER_REJECT";
    /**
     * Limit Order Transaction
     */
    TransactionFilter["LIMIT_ORDER"] = "LIMIT_ORDER";
    /**
     * Limit Order Reject Transaction
     */
    TransactionFilter["LIMIT_ORDER_REJECT"] = "LIMIT_ORDER_REJECT";
    /**
     * Stop Order Transaction
     */
    TransactionFilter["STOP_ORDER"] = "STOP_ORDER";
    /**
     * Stop Order Reject Transaction
     */
    TransactionFilter["STOP_ORDER_REJECT"] = "STOP_ORDER_REJECT";
    /**
     * Market if Touched Order Transaction
     */
    TransactionFilter["MARKET_IF_TOUCHED_ORDER"] = "MARKET_IF_TOUCHED_ORDER";
    /**
     * Market if Touched Order Reject Transaction
     */
    TransactionFilter["MARKET_IF_TOUCHED_ORDER_REJECT"] = "MARKET_IF_TOUCHED_ORDER_REJECT";
    /**
     * Take Profit Order Transaction
     */
    TransactionFilter["TAKE_PROFIT_ORDER"] = "TAKE_PROFIT_ORDER";
    /**
     * Take Profit Order Reject Transaction
     */
    TransactionFilter["TAKE_PROFIT_ORDER_REJECT"] = "TAKE_PROFIT_ORDER_REJECT";
    /**
     * Stop Loss Order Transaction
     */
    TransactionFilter["STOP_LOSS_ORDER"] = "STOP_LOSS_ORDER";
    /**
     * Stop Loss Order Reject Transaction
     */
    TransactionFilter["STOP_LOSS_ORDER_REJECT"] = "STOP_LOSS_ORDER_REJECT";
    /**
     * Trailing Stop Loss Order Transaction
     */
    TransactionFilter["TRAILING_STOP_LOSS_ORDER"] = "TRAILING_STOP_LOSS_ORDER";
    /**
     * Trailing Stop Loss Order Reject Transaction
     */
    TransactionFilter["TRAILING_STOP_LOSS_ORDER_REJECT"] = "TRAILING_STOP_LOSS_ORDER_REJECT";
    /**
     * One Cancels All Order Transaction
     */
    TransactionFilter["ONE_CANCELS_ALL_ORDER"] = "ONE_CANCELS_ALL_ORDER";
    /**
     * One Cancels All Order Reject Transaction
     */
    TransactionFilter["ONE_CANCELS_ALL_ORDER_REJECT"] = "ONE_CANCELS_ALL_ORDER_REJECT";
    /**
     * One Cancels All Order Trigger Transaction
     */
    TransactionFilter["ONE_CANCELS_ALL_ORDER_TRIGGERED"] = "ONE_CANCELS_ALL_ORDER_TRIGGERED";
    /**
     * Order Fill Transaction
     */
    TransactionFilter["ORDER_FILL"] = "ORDER_FILL";
    /**
     * Order Cancel Transaction
     */
    TransactionFilter["ORDER_CANCEL"] = "ORDER_CANCEL";
    /**
     * Order Cancel Reject Transaction
     */
    TransactionFilter["ORDER_CANCEL_REJECT"] = "ORDER_CANCEL_REJECT";
    /**
     * Order Client Extensions Modify Transaction
     */
    TransactionFilter["ORDER_CLIENT_EXTENSIONS_MODIFY"] = "ORDER_CLIENT_EXTENSIONS_MODIFY";
    /**
     * Order Client Extensions Modify Reject Transaction
     */
    TransactionFilter["ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"] = "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT";
    /**
     * Trade Client Extensions Modify Transaction
     */
    TransactionFilter["TRADE_CLIENT_EXTENSIONS_MODIFY"] = "TRADE_CLIENT_EXTENSIONS_MODIFY";
    /**
     * Trade Client Extensions Modify Reject Transaction
     */
    TransactionFilter["TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"] = "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT";
    /**
     * Margin Call Enter Transaction
     */
    TransactionFilter["MARGIN_CALL_ENTER"] = "MARGIN_CALL_ENTER";
    /**
     * Margin Call Extend Transaction
     */
    TransactionFilter["MARGIN_CALL_EXTEND"] = "MARGIN_CALL_EXTEND";
    /**
     * Margin Call Exit Transaction
     */
    TransactionFilter["MARGIN_CALL_EXIT"] = "MARGIN_CALL_EXIT";
    /**
     * Delayed Trade Closure Transaction
     */
    TransactionFilter["DELAYED_TRADE_CLOSURE"] = "DELAYED_TRADE_CLOSURE";
    /**
     * Daily Financing Transaction
     */
    TransactionFilter["DAILY_FINANCING"] = "DAILY_FINANCING";
    /**
     * Reset Resettable PL Transaction
     */
    TransactionFilter["RESET_RESETTABLE_PL"] = "RESET_RESETTABLE_PL";
})(TransactionFilter = exports.TransactionFilter || (exports.TransactionFilter = {}));
exports.TransactionFilterDescription = {
    'ORDER': 'Order-related Transactions. These are the Transactions that create, cancel, fill or trigger Orders',
    'FUNDING': 'Funding-related Transactions',
    'ADMIN': 'Administrative Transactions',
    'CREATE': 'Account Create Transaction',
    'CLOSE': 'Account Close Transaction',
    'REOPEN': 'Account Reopen Transaction',
    'CLIENT_CONFIGURE': 'Client Configuration Transaction',
    'CLIENT_CONFIGURE_REJECT': 'Client Configuration Reject Transaction',
    'TRANSFER_FUNDS': 'Transfer Funds Transaction',
    'TRANSFER_FUNDS_REJECT': 'Transfer Funds Reject Transaction',
    'MARKET_ORDER': 'Market Order Transaction',
    'MARKET_ORDER_REJECT': 'Market Order Reject Transaction',
    'LIMIT_ORDER': 'Limit Order Transaction',
    'LIMIT_ORDER_REJECT': 'Limit Order Reject Transaction',
    'STOP_ORDER': 'Stop Order Transaction',
    'STOP_ORDER_REJECT': 'Stop Order Reject Transaction',
    'MARKET_IF_TOUCHED_ORDER': 'Market if Touched Order Transaction',
    'MARKET_IF_TOUCHED_ORDER_REJECT': 'Market if Touched Order Reject Transaction',
    'TAKE_PROFIT_ORDER': 'Take Profit Order Transaction',
    'TAKE_PROFIT_ORDER_REJECT': 'Take Profit Order Reject Transaction',
    'STOP_LOSS_ORDER': 'Stop Loss Order Transaction',
    'STOP_LOSS_ORDER_REJECT': 'Stop Loss Order Reject Transaction',
    'TRAILING_STOP_LOSS_ORDER': 'Trailing Stop Loss Order Transaction',
    'TRAILING_STOP_LOSS_ORDER_REJECT': 'Trailing Stop Loss Order Reject Transaction',
    'ONE_CANCELS_ALL_ORDER': 'One Cancels All Order Transaction',
    'ONE_CANCELS_ALL_ORDER_REJECT': 'One Cancels All Order Reject Transaction',
    'ONE_CANCELS_ALL_ORDER_TRIGGERED': 'One Cancels All Order Trigger Transaction',
    'ORDER_FILL': 'Order Fill Transaction',
    'ORDER_CANCEL': 'Order Cancel Transaction',
    'ORDER_CANCEL_REJECT': 'Order Cancel Reject Transaction',
    'ORDER_CLIENT_EXTENSIONS_MODIFY': 'Order Client Extensions Modify Transaction',
    'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT': 'Order Client Extensions Modify Reject Transaction',
    'TRADE_CLIENT_EXTENSIONS_MODIFY': 'Trade Client Extensions Modify Transaction',
    'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT': 'Trade Client Extensions Modify Reject Transaction',
    'MARGIN_CALL_ENTER': 'Margin Call Enter Transaction',
    'MARGIN_CALL_EXTEND': 'Margin Call Extend Transaction',
    'MARGIN_CALL_EXIT': 'Margin Call Exit Transaction',
    'DELAYED_TRADE_CLOSURE': 'Delayed Trade Closure Transaction',
    'DAILY_FINANCING': 'Daily Financing Transaction',
    'RESET_RESETTABLE_PL': 'Reset Resettable PL Transaction',
};
var DividendAdjustmentTransaction = /** @class */ (function () {
    function DividendAdjustmentTransaction() {
    }
    return DividendAdjustmentTransaction;
}());
exports.DividendAdjustmentTransaction = DividendAdjustmentTransaction;
var OpenTradeDividendAdjustment = /** @class */ (function () {
    function OpenTradeDividendAdjustment() {
    }
    return OpenTradeDividendAdjustment;
}());
exports.OpenTradeDividendAdjustment = OpenTradeDividendAdjustment;
//# sourceMappingURL=transaction.js.map