import { moduleForModel, test } from 'ember-qunit';

moduleForModel('org', 'Unit | Serializer | org', {
  // Specify the other units that are required for this test.
  needs: ['serializer:org']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
