const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, AbortSignal, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({
      where: { id: ctx.request.userId },
    }, info);
  },
  async users(parent, args, ctx, info) {
    // 1. Check to see if they are login in
    if (!ctx.request.userId) {
      throw new Error('yopu must be logged in');
    }
    // 2. Check if the user has the permisions to Query all the Users
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // 3. If they do, Query the Users
    return ctx.db.query.users({}, info);
  },
};

module.exports = Query;
