import {
  ifFeature
} from 'ember-feature-flags/helpers/if-feature';
import { withFeature } from 'ember-feature-flags/tests/helpers/with-feature';
import features from 'ember-feature-flags/features';

module('Feature Flag Helper', {
  teardown: function() {
    features.setup({});
  }
});

test('it calls the true case when feature is on', function() {
  expect(1);
  withFeature('some-feature');
  function t() {
    ok(true, 'This function should be called');
  }

  function f() {
    ok(false, 'This function should not be called');
  }

  var options = {
    fn: t,
    inverse: f
  };

  ifFeature('some-feature', options);
});

test('it calls the true case when feature is off', function() {
  expect(1);
  function t() {
    ok(false, 'This function should not be called');
  }

  function f() {
    ok(true, 'This function should be called');
  }

  var options = {
    fn: t,
    inverse: f
  };

  ifFeature('some-feature', options);
});

