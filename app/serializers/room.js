import DS from 'ember-data';

const {RESTSerializer} = DS;

export default RESTSerializer.extend({
  primaryKey: 'category'

  // normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {
  //   console.log('payload', payload)
  //   payload.room.id = payload.room.rates[0].rateToken;
  //   return this._super(store, primaryModelClass, payload, id, requestType)
  // }
});
