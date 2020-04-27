"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const trade = require("./trade");
const position = require("./position");
const order = require("./order");
const transaction = require("./transaction");
const primitives = require("./primitives");
exports.Account_Properties = [
    new base_1.Property('id', 'Account ID', "The Account's identifier", 'primitive', 'account.AccountID'),
    new base_1.Property('alias', 'Alias', 'Client-assigned alias for the Account. Only provided if the Account has an alias set', 'primitive', 'string'),
    new base_1.Property('currency', 'Home Currency', 'The home currency of the Account', 'primitive', 'primitives.Currency'),
    new base_1.Property('balance', 'Balance', 'The current balance of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('createdByUserID', 'Created by User ID', 'ID of the user that created the Account.', 'primitive', 'integer'),
    new base_1.Property('createdTime', 'Create Time', 'The date/time when the Account was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('guaranteedStopLossOrderMode', 'Guaranteed Stop Loss Order Mode', 'The current guaranteed Stop Loss Order mode of the Account.', 'primitive', 'account.GuaranteedStopLossOrderMode'),
    new base_1.Property('pl', 'Profit/Loss', 'The total profit/loss realized over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('resettablePL', 'Resettable Profit/Loss', 'The total realized profit/loss for the Account since it was last reset by the client.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('resettablePLTime', 'Profit/Loss Reset Time', "The date/time that the Account's resettablePL was last reset.", 'primitive', 'primitives.DateTime'),
    new base_1.Property('financing', 'Financing', 'The total amount of financing paid/collected over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('commission', 'Commission', 'The total amount of commission paid over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('guaranteedExecutionFees', 'Guaranteed Execution Fees', 'The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginRate', 'Margin Rate', "Client-provided margin rate override for the Account. The effective margin rate of the Account is the lesser of this value and the OANDA margin rate for the Account's division. This value is only provided if a margin rate override exists for the Account.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCallEnterTime', 'Margin Call Enter Time', 'The date/time when the Account entered a margin call state. Only provided if the Account is in a margin call.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('marginCallExtensionCount', 'Margin Call Extension Count', "The number of times that the Account's current margin call was extended.", 'primitive', 'integer'),
    new base_1.Property('lastMarginCallExtensionTime', 'Last Margin Call Extension Time', "The date/time of the Account's last margin call extension.", 'primitive', 'primitives.DateTime'),
    new base_1.Property('openTradeCount', 'Open Trade Count', 'The number of Trades currently open in the Account.', 'primitive', 'integer'),
    new base_1.Property('openPositionCount', 'Open Position Count', 'The number of Positions currently open in the Account.', 'primitive', 'integer'),
    new base_1.Property('pendingOrderCount', 'Pending Order Count', 'The number of Orders currently pending in the Account.', 'primitive', 'integer'),
    new base_1.Property('hedgingEnabled', 'Hedging Enabled', 'Flag indicating that the Account has hedging enabled.', 'primitive', 'boolean'),
    new base_1.Property('lastOrderFillTimestamp', 'Last Order Fill timestamp.', 'The date/time of the last order that was filled for this account.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The total unrealized profit/loss for all Trades currently open in the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('NAV', 'Net Asset Value', 'The net asset value of the Account. Equal to Account balance + unrealizedPL.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used for the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginAvailable', 'Margin Available', 'Margin available for Account currency.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('positionValue', 'Position Value', "The value of the Account's open positions represented in the Account's home currency.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutUnrealizedPL', 'Closeout UPL', "The Account's margin closeout unrealized PL.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutNAV', 'Closeout NAV', "The Account's margin closeout NAV.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutMarginUsed', 'Closeout Margin Used', "The Account's margin closeout margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutPercent', 'Margin Closeout Percentage', "The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCloseoutPositionValue', 'Margin Closeout Position Value', "The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('withdrawalLimit', 'Withdrawal Limit', 'The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallMarginUsed', 'Margin Call Margin Used', "The Account's margin call margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallPercent', 'Margin Call Percentage', "The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('lastTransactionID', 'Last Transaction ID', 'The ID of the last Transaction created for the Account.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('trades', 'Open Trades', 'The details of the Trades currently open in the Account.', 'array_object', 'TradeSummary'),
    new base_1.Property('positions', 'Positions', 'The details all Account Positions.', 'array_object', 'Position'),
    new base_1.Property('orders', 'Pending Orders', 'The details of the Orders currently pending in the Account.', 'array_object', 'Order'),
];
class Account extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = 'Account {id}';
        this._nameFormat = '';
        this._properties = exports.Account_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            this.id = data['id'];
        }
        if (data['alias'] !== undefined) {
            this.alias = data['alias'];
        }
        if (data['currency'] !== undefined) {
            this.currency = data['currency'];
        }
        if (data['balance'] !== undefined) {
            this.balance = data['balance'];
        }
        if (data['createdByUserID'] !== undefined) {
            this.createdByUserID = data['createdByUserID'];
        }
        if (data['createdTime'] !== undefined) {
            this.createdTime = data['createdTime'];
        }
        if (data['guaranteedStopLossOrderMode'] !== undefined) {
            this.guaranteedStopLossOrderMode = data['guaranteedStopLossOrderMode'];
        }
        if (data['pl'] !== undefined) {
            this.pl = data['pl'];
        }
        if (data['resettablePL'] !== undefined) {
            this.resettablePL = data['resettablePL'];
        }
        if (data['resettablePLTime'] !== undefined) {
            this.resettablePLTime = data['resettablePLTime'];
        }
        if (data['financing'] !== undefined) {
            this.financing = data['financing'];
        }
        if (data['commission'] !== undefined) {
            this.commission = data['commission'];
        }
        if (data['guaranteedExecutionFees'] !== undefined) {
            this.guaranteedExecutionFees = data['guaranteedExecutionFees'];
        }
        if (data['marginRate'] !== undefined) {
            this.marginRate = data['marginRate'];
        }
        if (data['marginCallEnterTime'] !== undefined) {
            this.marginCallEnterTime = data['marginCallEnterTime'];
        }
        if (data['marginCallExtensionCount'] !== undefined) {
            this.marginCallExtensionCount = data['marginCallExtensionCount'];
        }
        if (data['lastMarginCallExtensionTime'] !== undefined) {
            this.lastMarginCallExtensionTime = data['lastMarginCallExtensionTime'];
        }
        if (data['openTradeCount'] !== undefined) {
            this.openTradeCount = data['openTradeCount'];
        }
        if (data['openPositionCount'] !== undefined) {
            this.openPositionCount = data['openPositionCount'];
        }
        if (data['pendingOrderCount'] !== undefined) {
            this.pendingOrderCount = data['pendingOrderCount'];
        }
        if (data['hedgingEnabled'] !== undefined) {
            this.hedgingEnabled = data['hedgingEnabled'];
        }
        if (data['lastOrderFillTimestamp'] !== undefined) {
            this.lastOrderFillTimestamp = data['lastOrderFillTimestamp'];
        }
        if (data['unrealizedPL'] !== undefined) {
            this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['NAV'] !== undefined) {
            this.NAV = data['NAV'];
        }
        if (data['marginUsed'] !== undefined) {
            this.marginUsed = data['marginUsed'];
        }
        if (data['marginAvailable'] !== undefined) {
            this.marginAvailable = data['marginAvailable'];
        }
        if (data['positionValue'] !== undefined) {
            this.positionValue = data['positionValue'];
        }
        if (data['marginCloseoutUnrealizedPL'] !== undefined) {
            this.marginCloseoutUnrealizedPL = data['marginCloseoutUnrealizedPL'];
        }
        if (data['marginCloseoutNAV'] !== undefined) {
            this.marginCloseoutNAV = data['marginCloseoutNAV'];
        }
        if (data['marginCloseoutMarginUsed'] !== undefined) {
            this.marginCloseoutMarginUsed = data['marginCloseoutMarginUsed'];
        }
        if (data['marginCloseoutPercent'] !== undefined) {
            this.marginCloseoutPercent = data['marginCloseoutPercent'];
        }
        if (data['marginCloseoutPositionValue'] !== undefined) {
            this.marginCloseoutPositionValue = data['marginCloseoutPositionValue'];
        }
        if (data['withdrawalLimit'] !== undefined) {
            this.withdrawalLimit = data['withdrawalLimit'];
        }
        if (data['marginCallMarginUsed'] !== undefined) {
            this.marginCallMarginUsed = data['marginCallMarginUsed'];
        }
        if (data['marginCallPercent'] !== undefined) {
            this.marginCallPercent = data['marginCallPercent'];
        }
        if (data['lastTransactionID'] !== undefined) {
            this.lastTransactionID = data['lastTransactionID'];
        }
        if (data['trades'] !== undefined) {
            this.trades = data['trades'].map((x) => new trade.TradeSummary(x));
        }
        if (data['positions'] !== undefined) {
            this.positions = data['positions'].map((x) => new position.Position(x));
        }
        if (data['orders'] !== undefined) {
            this.orders = data['orders'].map((x) => order.Order.create(x));
        }
    }
}
exports.Account = Account;
exports.AccountChangesState_Properties = [
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The total unrealized profit/loss for all Trades currently open in the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('NAV', 'Net Asset Value', 'The net asset value of the Account. Equal to Account balance + unrealizedPL.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used for the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginAvailable', 'Margin Available', 'Margin available for Account currency.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('positionValue', 'Position Value', "The value of the Account's open positions represented in the Account's home currency.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutUnrealizedPL', 'Closeout UPL', "The Account's margin closeout unrealized PL.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutNAV', 'Closeout NAV', "The Account's margin closeout NAV.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutMarginUsed', 'Closeout Margin Used', "The Account's margin closeout margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutPercent', 'Margin Closeout Percentage', "The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCloseoutPositionValue', 'Margin Closeout Position Value', "The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('withdrawalLimit', 'Withdrawal Limit', 'The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallMarginUsed', 'Margin Call Margin Used', "The Account's margin call margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallPercent', 'Margin Call Percentage', "The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('orders', 'Order States', 'The price-dependent state of each pending Order in the Account.', 'array_object', 'DynamicOrderState'),
    new base_1.Property('trades', 'Trade States', 'The price-dependent state for each open Trade in the Account.', 'array_object', 'CalculatedTradeState'),
    new base_1.Property('positions', 'Position States', 'The price-dependent state for each open Position in the Account.', 'array_object', 'CalculatedPositionState'),
];
class AccountChangesState extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.AccountChangesState_Properties;
        data = data || {};
        if (data['unrealizedPL'] !== undefined) {
            this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['NAV'] !== undefined) {
            this.NAV = data['NAV'];
        }
        if (data['marginUsed'] !== undefined) {
            this.marginUsed = data['marginUsed'];
        }
        if (data['marginAvailable'] !== undefined) {
            this.marginAvailable = data['marginAvailable'];
        }
        if (data['positionValue'] !== undefined) {
            this.positionValue = data['positionValue'];
        }
        if (data['marginCloseoutUnrealizedPL'] !== undefined) {
            this.marginCloseoutUnrealizedPL = data['marginCloseoutUnrealizedPL'];
        }
        if (data['marginCloseoutNAV'] !== undefined) {
            this.marginCloseoutNAV = data['marginCloseoutNAV'];
        }
        if (data['marginCloseoutMarginUsed'] !== undefined) {
            this.marginCloseoutMarginUsed = data['marginCloseoutMarginUsed'];
        }
        if (data['marginCloseoutPercent'] !== undefined) {
            this.marginCloseoutPercent = data['marginCloseoutPercent'];
        }
        if (data['marginCloseoutPositionValue'] !== undefined) {
            this.marginCloseoutPositionValue = data['marginCloseoutPositionValue'];
        }
        if (data['withdrawalLimit'] !== undefined) {
            this.withdrawalLimit = data['withdrawalLimit'];
        }
        if (data['marginCallMarginUsed'] !== undefined) {
            this.marginCallMarginUsed = data['marginCallMarginUsed'];
        }
        if (data['marginCallPercent'] !== undefined) {
            this.marginCallPercent = data['marginCallPercent'];
        }
        if (data['orders'] !== undefined) {
            this.orders = data['orders'].map((x) => new order.DynamicOrderState(x));
        }
        if (data['trades'] !== undefined) {
            this.trades = data['trades'].map((x) => new trade.CalculatedTradeState(x));
        }
        if (data['positions'] !== undefined) {
            this.positions = data['positions'].map((x) => new position.CalculatedPositionState(x));
        }
    }
}
exports.AccountChangesState = AccountChangesState;
exports.AccountProperties_Properties = [
    new base_1.Property('id', 'ID', "The Account's identifier", 'primitive', 'account.AccountID'),
    new base_1.Property('mt4AccountID', 'MT4 Account ID', "The Account's associated MT4 Account ID. This field will not be present if the Account is not an MT4 account.", 'primitive', 'integer'),
    new base_1.Property('tags', 'Account Tags', "The Account's tags", 'array_primitive', 'string'),
];
class AccountProperties extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.AccountProperties_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            this.id = data['id'];
        }
        if (data['mt4AccountID'] !== undefined) {
            this.mt4AccountID = data['mt4AccountID'];
        }
        if (data['tags'] !== undefined) {
            this.tags = data['tags'];
        }
    }
}
exports.AccountProperties = AccountProperties;
exports.AccountSummary_Properties = [
    new base_1.Property('id', 'Account ID', "The Account's identifier", 'primitive', 'account.AccountID'),
    new base_1.Property('alias', 'Alias', 'Client-assigned alias for the Account. Only provided if the Account has an alias set', 'primitive', 'string'),
    new base_1.Property('currency', 'Home Currency', 'The home currency of the Account', 'primitive', 'primitives.Currency'),
    new base_1.Property('balance', 'Balance', 'The current balance of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('createdByUserID', 'Created by User ID', 'ID of the user that created the Account.', 'primitive', 'integer'),
    new base_1.Property('createdTime', 'Create Time', 'The date/time when the Account was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('guaranteedStopLossOrderMode', 'Guaranteed Stop Loss Order Mode', 'The current guaranteed Stop Loss Order mode of the Account.', 'primitive', 'account.GuaranteedStopLossOrderMode'),
    new base_1.Property('pl', 'Profit/Loss', 'The total profit/loss realized over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('resettablePL', 'Resettable Profit/Loss', 'The total realized profit/loss for the Account since it was last reset by the client.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('resettablePLTime', 'Profit/Loss Reset Time', "The date/time that the Account's resettablePL was last reset.", 'primitive', 'primitives.DateTime'),
    new base_1.Property('financing', 'Financing', 'The total amount of financing paid/collected over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('commission', 'Commission', 'The total amount of commission paid over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('guaranteedExecutionFees', 'Guaranteed Execution Fees', 'The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginRate', 'Margin Rate', "Client-provided margin rate override for the Account. The effective margin rate of the Account is the lesser of this value and the OANDA margin rate for the Account's division. This value is only provided if a margin rate override exists for the Account.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCallEnterTime', 'Margin Call Enter Time', 'The date/time when the Account entered a margin call state. Only provided if the Account is in a margin call.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('marginCallExtensionCount', 'Margin Call Extension Count', "The number of times that the Account's current margin call was extended.", 'primitive', 'integer'),
    new base_1.Property('lastMarginCallExtensionTime', 'Last Margin Call Extension Time', "The date/time of the Account's last margin call extension.", 'primitive', 'primitives.DateTime'),
    new base_1.Property('openTradeCount', 'Open Trade Count', 'The number of Trades currently open in the Account.', 'primitive', 'integer'),
    new base_1.Property('openPositionCount', 'Open Position Count', 'The number of Positions currently open in the Account.', 'primitive', 'integer'),
    new base_1.Property('pendingOrderCount', 'Pending Order Count', 'The number of Orders currently pending in the Account.', 'primitive', 'integer'),
    new base_1.Property('hedgingEnabled', 'Hedging Enabled', 'Flag indicating that the Account has hedging enabled.', 'primitive', 'boolean'),
    new base_1.Property('lastOrderFillTimestamp', 'Last Order Fill timestamp.', 'The date/time of the last order that was filled for this account.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The total unrealized profit/loss for all Trades currently open in the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('NAV', 'Net Asset Value', 'The net asset value of the Account. Equal to Account balance + unrealizedPL.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used for the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginAvailable', 'Margin Available', 'Margin available for Account currency.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('positionValue', 'Position Value', "The value of the Account's open positions represented in the Account's home currency.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutUnrealizedPL', 'Closeout UPL', "The Account's margin closeout unrealized PL.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutNAV', 'Closeout NAV', "The Account's margin closeout NAV.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutMarginUsed', 'Closeout Margin Used', "The Account's margin closeout margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutPercent', 'Margin Closeout Percentage', "The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCloseoutPositionValue', 'Margin Closeout Position Value', "The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('withdrawalLimit', 'Withdrawal Limit', 'The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallMarginUsed', 'Margin Call Margin Used', "The Account's margin call margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallPercent', 'Margin Call Percentage', "The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('lastTransactionID', 'Last Transaction ID', 'The ID of the last Transaction created for the Account.', 'primitive', 'transaction.TransactionID'),
];
class AccountSummary extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.AccountSummary_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            this.id = data['id'];
        }
        if (data['alias'] !== undefined) {
            this.alias = data['alias'];
        }
        if (data['currency'] !== undefined) {
            this.currency = data['currency'];
        }
        if (data['balance'] !== undefined) {
            this.balance = data['balance'];
        }
        if (data['createdByUserID'] !== undefined) {
            this.createdByUserID = data['createdByUserID'];
        }
        if (data['createdTime'] !== undefined) {
            this.createdTime = data['createdTime'];
        }
        if (data['guaranteedStopLossOrderMode'] !== undefined) {
            this.guaranteedStopLossOrderMode = data['guaranteedStopLossOrderMode'];
        }
        if (data['pl'] !== undefined) {
            this.pl = data['pl'];
        }
        if (data['resettablePL'] !== undefined) {
            this.resettablePL = data['resettablePL'];
        }
        if (data['resettablePLTime'] !== undefined) {
            this.resettablePLTime = data['resettablePLTime'];
        }
        if (data['financing'] !== undefined) {
            this.financing = data['financing'];
        }
        if (data['commission'] !== undefined) {
            this.commission = data['commission'];
        }
        if (data['guaranteedExecutionFees'] !== undefined) {
            this.guaranteedExecutionFees = data['guaranteedExecutionFees'];
        }
        if (data['marginRate'] !== undefined) {
            this.marginRate = data['marginRate'];
        }
        if (data['marginCallEnterTime'] !== undefined) {
            this.marginCallEnterTime = data['marginCallEnterTime'];
        }
        if (data['marginCallExtensionCount'] !== undefined) {
            this.marginCallExtensionCount = data['marginCallExtensionCount'];
        }
        if (data['lastMarginCallExtensionTime'] !== undefined) {
            this.lastMarginCallExtensionTime = data['lastMarginCallExtensionTime'];
        }
        if (data['openTradeCount'] !== undefined) {
            this.openTradeCount = data['openTradeCount'];
        }
        if (data['openPositionCount'] !== undefined) {
            this.openPositionCount = data['openPositionCount'];
        }
        if (data['pendingOrderCount'] !== undefined) {
            this.pendingOrderCount = data['pendingOrderCount'];
        }
        if (data['hedgingEnabled'] !== undefined) {
            this.hedgingEnabled = data['hedgingEnabled'];
        }
        if (data['lastOrderFillTimestamp'] !== undefined) {
            this.lastOrderFillTimestamp = data['lastOrderFillTimestamp'];
        }
        if (data['unrealizedPL'] !== undefined) {
            this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['NAV'] !== undefined) {
            this.NAV = data['NAV'];
        }
        if (data['marginUsed'] !== undefined) {
            this.marginUsed = data['marginUsed'];
        }
        if (data['marginAvailable'] !== undefined) {
            this.marginAvailable = data['marginAvailable'];
        }
        if (data['positionValue'] !== undefined) {
            this.positionValue = data['positionValue'];
        }
        if (data['marginCloseoutUnrealizedPL'] !== undefined) {
            this.marginCloseoutUnrealizedPL = data['marginCloseoutUnrealizedPL'];
        }
        if (data['marginCloseoutNAV'] !== undefined) {
            this.marginCloseoutNAV = data['marginCloseoutNAV'];
        }
        if (data['marginCloseoutMarginUsed'] !== undefined) {
            this.marginCloseoutMarginUsed = data['marginCloseoutMarginUsed'];
        }
        if (data['marginCloseoutPercent'] !== undefined) {
            this.marginCloseoutPercent = data['marginCloseoutPercent'];
        }
        if (data['marginCloseoutPositionValue'] !== undefined) {
            this.marginCloseoutPositionValue = data['marginCloseoutPositionValue'];
        }
        if (data['withdrawalLimit'] !== undefined) {
            this.withdrawalLimit = data['withdrawalLimit'];
        }
        if (data['marginCallMarginUsed'] !== undefined) {
            this.marginCallMarginUsed = data['marginCallMarginUsed'];
        }
        if (data['marginCallPercent'] !== undefined) {
            this.marginCallPercent = data['marginCallPercent'];
        }
        if (data['lastTransactionID'] !== undefined) {
            this.lastTransactionID = data['lastTransactionID'];
        }
    }
}
exports.AccountSummary = AccountSummary;
exports.CalculatedAccountState_Properties = [
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The total unrealized profit/loss for all Trades currently open in the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('NAV', 'Net Asset Value', 'The net asset value of the Account. Equal to Account balance + unrealizedPL.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used for the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginAvailable', 'Margin Available', 'Margin available for Account currency.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('positionValue', 'Position Value', "The value of the Account's open positions represented in the Account's home currency.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutUnrealizedPL', 'Closeout UPL', "The Account's margin closeout unrealized PL.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutNAV', 'Closeout NAV', "The Account's margin closeout NAV.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutMarginUsed', 'Closeout Margin Used', "The Account's margin closeout margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutPercent', 'Margin Closeout Percentage', "The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCloseoutPositionValue', 'Margin Closeout Position Value', "The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('withdrawalLimit', 'Withdrawal Limit', 'The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallMarginUsed', 'Margin Call Margin Used', "The Account's margin call margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallPercent', 'Margin Call Percentage', "The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.", 'primitive', 'primitives.DecimalNumber'),
];
class CalculatedAccountState extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.CalculatedAccountState_Properties;
        data = data || {};
        if (data['unrealizedPL'] !== undefined) {
            this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['NAV'] !== undefined) {
            this.NAV = data['NAV'];
        }
        if (data['marginUsed'] !== undefined) {
            this.marginUsed = data['marginUsed'];
        }
        if (data['marginAvailable'] !== undefined) {
            this.marginAvailable = data['marginAvailable'];
        }
        if (data['positionValue'] !== undefined) {
            this.positionValue = data['positionValue'];
        }
        if (data['marginCloseoutUnrealizedPL'] !== undefined) {
            this.marginCloseoutUnrealizedPL = data['marginCloseoutUnrealizedPL'];
        }
        if (data['marginCloseoutNAV'] !== undefined) {
            this.marginCloseoutNAV = data['marginCloseoutNAV'];
        }
        if (data['marginCloseoutMarginUsed'] !== undefined) {
            this.marginCloseoutMarginUsed = data['marginCloseoutMarginUsed'];
        }
        if (data['marginCloseoutPercent'] !== undefined) {
            this.marginCloseoutPercent = data['marginCloseoutPercent'];
        }
        if (data['marginCloseoutPositionValue'] !== undefined) {
            this.marginCloseoutPositionValue = data['marginCloseoutPositionValue'];
        }
        if (data['withdrawalLimit'] !== undefined) {
            this.withdrawalLimit = data['withdrawalLimit'];
        }
        if (data['marginCallMarginUsed'] !== undefined) {
            this.marginCallMarginUsed = data['marginCallMarginUsed'];
        }
        if (data['marginCallPercent'] !== undefined) {
            this.marginCallPercent = data['marginCallPercent'];
        }
    }
}
exports.CalculatedAccountState = CalculatedAccountState;
exports.AccountChanges_Properties = [
    new base_1.Property('ordersCreated', 'Orders Created', 'The Orders created. These Orders may have been filled, cancelled or triggered in the same period.', 'array_object', 'Order'),
    new base_1.Property('ordersCancelled', 'Orders Cancelled', 'The Orders cancelled.', 'array_object', 'Order'),
    new base_1.Property('ordersFilled', 'Orders Filled', 'The Orders filled.', 'array_object', 'Order'),
    new base_1.Property('ordersTriggered', 'Orders Triggered', 'The Orders triggered.', 'array_object', 'Order'),
    new base_1.Property('tradesOpened', 'Trades Opened', 'The Trades opened.', 'array_object', 'TradeSummary'),
    new base_1.Property('tradesReduced', 'Trades Reduced', 'The Trades reduced.', 'array_object', 'TradeSummary'),
    new base_1.Property('tradesClosed', 'Trades Closed', 'The Trades closed.', 'array_object', 'TradeSummary'),
    new base_1.Property('positions', 'Positions', 'The Positions changed.', 'array_object', 'Position'),
    new base_1.Property('transactions', 'Transactions', 'The Transactions that have been generated.', 'array_object', 'Transaction'),
];
class AccountChanges extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.AccountChanges_Properties;
        data = data || {};
        if (data['ordersCreated'] !== undefined) {
            this.ordersCreated = data['ordersCreated'].map((x) => order.Order.create(x));
        }
        if (data['ordersCancelled'] !== undefined) {
            this.ordersCancelled = data['ordersCancelled'].map((x) => order.Order.create(x));
        }
        if (data['ordersFilled'] !== undefined) {
            this.ordersFilled = data['ordersFilled'].map((x) => order.Order.create(x));
        }
        if (data['ordersTriggered'] !== undefined) {
            this.ordersTriggered = data['ordersTriggered'].map((x) => order.Order.create(x));
        }
        if (data['tradesOpened'] !== undefined) {
            this.tradesOpened = data['tradesOpened'].map((x) => new trade.TradeSummary(x));
        }
        if (data['tradesReduced'] !== undefined) {
            this.tradesReduced = data['tradesReduced'].map((x) => new trade.TradeSummary(x));
        }
        if (data['tradesClosed'] !== undefined) {
            this.tradesClosed = data['tradesClosed'].map((x) => new trade.TradeSummary(x));
        }
        if (data['positions'] !== undefined) {
            this.positions = data['positions'].map((x) => new position.Position(x));
        }
        if (data['transactions'] !== undefined) {
            this.transactions = data['transactions'].map((x) => transaction.Transaction.create(x));
        }
    }
}
exports.AccountChanges = AccountChanges;
class EntitySpec {
    constructor(context) {
        this.context = context;
        this.Account = Account;
        this.AccountChangesState = AccountChangesState;
        this.AccountProperties = AccountProperties;
        this.AccountSummary = AccountSummary;
        this.CalculatedAccountState = CalculatedAccountState;
        this.AccountChanges = AccountChanges;
    }
    list(responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        let path = '/v3/accounts';
        let body = {};
        let handleResponse = (err, response) => {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                let msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['accounts'] !== undefined) {
                        response.body.accounts = msg['accounts'].map((x) => new AccountProperties(x));
                    }
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 405) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    }
    get(accountID, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        let path = '/v3/accounts/{accountID}';
        path = path.replace('{' + 'accountID' + '}', accountID);
        let body = {};
        let handleResponse = (err, response) => {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                let msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['account'] !== undefined) {
                        response.body.account = new Account(msg['account']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 405) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    }
    summary(accountID, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        let path = '/v3/accounts/{accountID}/summary';
        path = path.replace('{' + 'accountID' + '}', accountID);
        let body = {};
        let handleResponse = (err, response) => {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                let msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['account'] !== undefined) {
                        response.body.account = new AccountSummary(msg['account']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 405) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    }
    instruments(accountID, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        let path = '/v3/accounts/{accountID}/instruments';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path + '?';
        if (typeof queryParams['instruments'] !== 'undefined') {
            path = path + 'instruments=' + queryParams['instruments'] + '&';
        }
        let body = {};
        let handleResponse = (err, response) => {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                let msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['instruments'] !== undefined) {
                        response.body.instruments = msg['instruments'].map((x) => new primitives.Instrument(x));
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 405) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    }
    configure(accountID, bodyParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        let path = '/v3/accounts/{accountID}/configuration';
        bodyParams = bodyParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        let body = {};
        if (typeof bodyParams['alias'] !== 'undefined') {
            body['alias'] = bodyParams['alias'];
        }
        if (typeof bodyParams['marginRate'] !== 'undefined') {
            body['marginRate'] = bodyParams['marginRate'];
        }
        let handleResponse = (err, response) => {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                let msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['clientConfigureTransaction'] !== undefined) {
                        response.body.clientConfigureTransaction = new transaction.ClientConfigureTransaction(msg['clientConfigureTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                    if (msg['clientConfigureRejectTransaction'] !== undefined) {
                        response.body.clientConfigureRejectTransaction = new transaction.ClientConfigureRejectTransaction(msg['clientConfigureRejectTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
                else if (response.statusCode == 403) {
                    if (msg['clientConfigureRejectTransaction'] !== undefined) {
                        response.body.clientConfigureRejectTransaction = new transaction.ClientConfigureRejectTransaction(msg['clientConfigureRejectTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 404) {
                }
                else if (response.statusCode == 405) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('PATCH', path, body, undefined, handleResponse);
    }
    changes(accountID, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        let path = '/v3/accounts/{accountID}/changes';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path + '?';
        if (typeof queryParams['sinceTransactionID'] !== 'undefined') {
            path = path + 'sinceTransactionID=' + queryParams['sinceTransactionID'] + '&';
        }
        let body = {};
        let handleResponse = (err, response) => {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                let msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['changes'] !== undefined) {
                        response.body.changes = new AccountChanges(msg['changes']);
                    }
                    if (msg['state'] !== undefined) {
                        response.body.state = new AccountChangesState(msg['state']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 404) {
                }
                else if (response.statusCode == 405) {
                }
                else if (response.statusCode == 416) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    }
}
exports.EntitySpec = EntitySpec;
class API {
    constructor(context, resolver) {
        this.context = context;
        this.resolver = resolver;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                new EntitySpec(this.context).list(this.resolver(resolve, reject));
            });
        });
    }
    get(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                new EntitySpec(this.context).get(accountID, this.resolver(resolve, reject));
            });
        });
    }
    summary(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                new EntitySpec(this.context).summary(accountID, this.resolver(resolve, reject));
            });
        });
    }
    instruments(accountID, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                new EntitySpec(this.context).instruments(accountID, body, this.resolver(resolve, reject));
            });
        });
    }
    configure(accountID, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                new EntitySpec(this.context).configure(accountID, body, this.resolver(resolve, reject));
            });
        });
    }
    changes(accountID, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                new EntitySpec(this.context).changes(accountID, body, this.resolver(resolve, reject));
            });
        });
    }
}
exports.API = API;
//# sourceMappingURL=account.js.map