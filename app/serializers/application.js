import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    const newPayload = {}

    switch(primaryModelClass.modelName) {
      case 'post': 

        newPayload['posts'] = payload
        return this._super(store, primaryModelClass, newPayload, id, requestType)

      case 'user':
        newPayload['users'] = payload
        return this._super(store, primaryModelClass, newPayload, id, requestType)     

      default:
      return this._super(...arguments)
    }

  },

  keyForRelationship(key, relationship, method) {
    if (relationship === 'belongsTo') {
      return `${key}Id`
    }
  }
});
