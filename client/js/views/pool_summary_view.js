'use strict';

const views = require('../util/views.js');

const template = views.getTemplate('pool-summary');

class PoolSummaryView {
    constructor(ctx) {
        this._pool = ctx.pool;
        this._hostNode = ctx.hostNode;
        views.replaceContent(this._hostNode, template(ctx));
    }

    showSuccess(message) {
        views.showSuccess(this._hostNode, message);
    }

    showError(message) {
        views.showError(this._hostNode, message);
    }
}

module.exports = PoolSummaryView;
