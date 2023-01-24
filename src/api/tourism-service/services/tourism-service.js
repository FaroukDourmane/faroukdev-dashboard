'use strict';

/**
 * tourism-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tourism-service.tourism-service');
