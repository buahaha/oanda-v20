"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var transaction = require("./transaction");
exports.Position_Properties = [
    new base_1.Property('instrument', 'Instrument', "The Position's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('pl', 'Profit/Loss', 'Profit/loss realized by the Position over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The unrealized profit/loss of all open Trades that contribute to this Position.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used by the Position.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('resettablePL', 'Resettable Profit/Loss', "Profit/loss realized by the Position since the Account's resettablePL was last reset by the client.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('financing', 'Financing', 'The total amount of financing paid/collected for this instrument over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('commission', 'Commission', 'The total amount of commission paid for this instrument over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('guaranteedExecutionFees', 'Guranteed Execution Fee', 'The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders for this instrument.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('long', 'Long Side', 'The details of the long side of the Position.', 'object', 'position.PositionSide'),
    new base_1.Property('short', 'Short Side', 'The details of the short side of the Position.', 'object', 'position.PositionSide'),
];
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{instrument}, {pl} PL {unrealizedPL} UPL';
        _this._nameFormat = 'Position';
        _this._properties = exports.Position_Properties;
        data = data || {};
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['pl'] !== undefined) {
            _this.pl = data['pl'];
        }
        if (data['unrealizedPL'] !== undefined) {
            _this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['marginUsed'] !== undefined) {
            _this.marginUsed = data['marginUsed'];
        }
        if (data['resettablePL'] !== undefined) {
            _this.resettablePL = data['resettablePL'];
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        if (data['commission'] !== undefined) {
            _this.commission = data['commission'];
        }
        if (data['guaranteedExecutionFees'] !== undefined) {
            _this.guaranteedExecutionFees = data['guaranteedExecutionFees'];
        }
        if (data['long'] !== undefined) {
            _this.long = new PositionSide(data['long']);
        }
        if (data['short'] !== undefined) {
            _this.short = new PositionSide(data['short']);
        }
        return _this;
    }
    return Position;
}(base_1.Definition));
exports.Position = Position;
exports.PositionSide_Properties = [
    new base_1.Property('units', 'Units', 'Number of units in the position (negative value indicates short position, positive indicates long position).', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('averagePrice', 'Average Price', 'Volume-weighted average of the underlying Trade open prices for the Position.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('tradeIDs', 'Trade IDs', 'List of the open Trade IDs which contribute to the open Position.', 'array_primitive', 'TradeID'),
    new base_1.Property('pl', 'Profit/Loss', 'Profit/loss realized by the PositionSide over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The unrealized profit/loss of all open Trades that contribute to this PositionSide.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('resettablePL', 'Resettable Profit/Loss', "Profit/loss realized by the PositionSide since the Account's resettablePL was last reset by the client.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('financing', 'Financing', 'The total amount of financing paid/collected for this PositionSide over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('guaranteedExecutionFees', 'Guranteed Execution Fees', 'The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders attached to Trades for this PositionSide.', 'primitive', 'primitives.AccountUnits'),
];
var PositionSide = /** @class */ (function (_super) {
    __extends(PositionSide, _super);
    function PositionSide(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{units} @ {averagePrice}, {pl} PL {unrealizedPL} UPL';
        _this._nameFormat = '';
        _this._properties = exports.PositionSide_Properties;
        data = data || {};
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['averagePrice'] !== undefined) {
            _this.averagePrice = data['averagePrice'];
        }
        if (data['tradeIDs'] !== undefined) {
            _this.tradeIDs = data['tradeIDs'];
        }
        if (data['pl'] !== undefined) {
            _this.pl = data['pl'];
        }
        if (data['unrealizedPL'] !== undefined) {
            _this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['resettablePL'] !== undefined) {
            _this.resettablePL = data['resettablePL'];
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        if (data['guaranteedExecutionFees'] !== undefined) {
            _this.guaranteedExecutionFees = data['guaranteedExecutionFees'];
        }
        return _this;
    }
    return PositionSide;
}(base_1.Definition));
exports.PositionSide = PositionSide;
exports.CalculatedPositionState_Properties = [
    new base_1.Property('instrument', 'Instrument', "The Position's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('netUnrealizedPL', 'Net Unrealized Profit/Loss', "The Position's net unrealized profit/loss", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('longUnrealizedPL', 'Long Unrealized Profit/Loss', "The unrealized profit/loss of the Position's long open Trades", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('shortUnrealizedPL', 'Short Unrealized Profit/Loss', "The unrealized profit/loss of the Position's short open Trades", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used by the Position.', 'primitive', 'primitives.AccountUnits'),
];
var CalculatedPositionState = /** @class */ (function (_super) {
    __extends(CalculatedPositionState, _super);
    function CalculatedPositionState(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.CalculatedPositionState_Properties;
        data = data || {};
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['netUnrealizedPL'] !== undefined) {
            _this.netUnrealizedPL = data['netUnrealizedPL'];
        }
        if (data['longUnrealizedPL'] !== undefined) {
            _this.longUnrealizedPL = data['longUnrealizedPL'];
        }
        if (data['shortUnrealizedPL'] !== undefined) {
            _this.shortUnrealizedPL = data['shortUnrealizedPL'];
        }
        if (data['marginUsed'] !== undefined) {
            _this.marginUsed = data['marginUsed'];
        }
        return _this;
    }
    return CalculatedPositionState;
}(base_1.Definition));
exports.CalculatedPositionState = CalculatedPositionState;
var EntitySpec = /** @class */ (function () {
    function EntitySpec(context) {
        this.context = context;
        this.Position = Position;
        this.PositionSide = PositionSide;
        this.CalculatedPositionState = CalculatedPositionState;
    }
    EntitySpec.prototype.list = function (accountID, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/positions';
        path = path.replace('{' + 'accountID' + '}', accountID);
        var body = {};
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['positions'] !== undefined) {
                        response.body.positions = msg['positions'].map(function (x) { return new Position(x); });
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
    };
    EntitySpec.prototype.listOpen = function (accountID, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/openPositions';
        path = path.replace('{' + 'accountID' + '}', accountID);
        var body = {};
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['positions'] !== undefined) {
                        response.body.positions = msg['positions'].map(function (x) { return new Position(x); });
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
    };
    EntitySpec.prototype.get = function (accountID, instrument, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/positions/{instrument}';
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'instrument' + '}', instrument);
        var body = {};
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['position'] !== undefined) {
                        response.body.position = new Position(msg['position']);
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
    };
    EntitySpec.prototype.close = function (accountID, instrument, bodyParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/positions/{instrument}/close';
        bodyParams = bodyParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'instrument' + '}', instrument);
        var body = {};
        if (typeof bodyParams['longUnits'] !== 'undefined') {
            body['longUnits'] = bodyParams['longUnits'];
        }
        if (typeof bodyParams['longClientExtensions'] !== 'undefined') {
            body['longClientExtensions'] = bodyParams['longClientExtensions'];
        }
        if (typeof bodyParams['shortUnits'] !== 'undefined') {
            body['shortUnits'] = bodyParams['shortUnits'];
        }
        if (typeof bodyParams['shortClientExtensions'] !== 'undefined') {
            body['shortClientExtensions'] = bodyParams['shortClientExtensions'];
        }
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['longOrderCreateTransaction'] !== undefined) {
                        response.body.longOrderCreateTransaction = new transaction.MarketOrderTransaction(msg['longOrderCreateTransaction']);
                    }
                    if (msg['longOrderFillTransaction'] !== undefined) {
                        response.body.longOrderFillTransaction = new transaction.OrderFillTransaction(msg['longOrderFillTransaction']);
                    }
                    if (msg['longOrderCancelTransaction'] !== undefined) {
                        response.body.longOrderCancelTransaction = new transaction.OrderCancelTransaction(msg['longOrderCancelTransaction']);
                    }
                    if (msg['shortOrderCreateTransaction'] !== undefined) {
                        response.body.shortOrderCreateTransaction = new transaction.MarketOrderTransaction(msg['shortOrderCreateTransaction']);
                    }
                    if (msg['shortOrderFillTransaction'] !== undefined) {
                        response.body.shortOrderFillTransaction = new transaction.OrderFillTransaction(msg['shortOrderFillTransaction']);
                    }
                    if (msg['shortOrderCancelTransaction'] !== undefined) {
                        response.body.shortOrderCancelTransaction = new transaction.OrderCancelTransaction(msg['shortOrderCancelTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                    if (msg['longOrderRejectTransaction'] !== undefined) {
                        response.body.longOrderRejectTransaction = new transaction.MarketOrderRejectTransaction(msg['longOrderRejectTransaction']);
                    }
                    if (msg['shortOrderRejectTransaction'] !== undefined) {
                        response.body.shortOrderRejectTransaction = new transaction.MarketOrderRejectTransaction(msg['shortOrderRejectTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
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
                    if (msg['longOrderRejectTransaction'] !== undefined) {
                        response.body.longOrderRejectTransaction = new transaction.MarketOrderRejectTransaction(msg['longOrderRejectTransaction']);
                    }
                    if (msg['shortOrderRejectTransaction'] !== undefined) {
                        response.body.shortOrderRejectTransaction = new transaction.MarketOrderRejectTransaction(msg['shortOrderRejectTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
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
                else if (response.statusCode == 405) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                if (msg['errorCode'] !== undefined) {
                    response.body.errorCode = msg['errorCode'];
                }
                if (msg['errorMessage'] !== undefined) {
                    response.body.errorMessage = msg['errorMessage'];
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('PUT', path, body, undefined, handleResponse);
    };
    return EntitySpec;
}());
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=position.js.map