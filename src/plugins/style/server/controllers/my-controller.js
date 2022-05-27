'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('style')
      .service('myService')
      .getWelcomeMessage();
  },
};
