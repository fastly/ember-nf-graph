import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('nf-horizontal-line', {
  unit: true
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('lineY pins to zero', function(assert) {
  var component = this.subject();

  Ember.run(() => {
    component.set('yScale', function() { return -99; });
    component.set('y', 0);
  });

  assert.equal(component.get('lineY'), 0);
});
