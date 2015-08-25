window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: "throw", matchMessage: "Depending on arrays using a dependent key ending with `@each` is deprecated. Please refactor from `Ember.computed('data.@each', function() {});` to `Ember.computed('data.[]', function() {})`." },
    { handler: "throw", matchMessage: "Depending on arrays using a dependent key ending with `@each` is deprecated. Please refactor from `Ember.observer('data.@each', function() {});` to `Ember.computed('data.[]', function() {})`." },
    { handler: "throw", matchMessage: "Depending on arrays using a dependent key ending with `@each` is deprecated. Please refactor from `Ember.computed('mappedData.@each', function() {});` to `Ember.computed('mappedData.[]', function() {})`." },
    { handler: "throw", matchMessage: "Depending on arrays using a dependent key ending with `@each` is deprecated. Please refactor from `Ember.computed('renderedData.@each', function() {});` to `Ember.computed('renderedData.[]', function() {})`." },
    { handler: "silence", matchMessage: "the component:nf-graph test module is implicitly running in unit test mode, which will change to integration test mode by default in an upcoming version of ember-test-helpers. Add `unit: true` or a `needs:[]` list to explicitly opt in to unit test mode." },
    { handler: "silence", matchMessage: "the component:nf-horizontal-line test module is implicitly running in unit test mode, which will change to integration test mode by default in an upcoming version of ember-test-helpers. Add `unit: true` or a `needs:[]` list to explicitly opt in to unit test mode." },
    { handler: "silence", matchMessage: "the component:nf-vertical-line test module is implicitly running in unit test mode, which will change to integration test mode by default in an upcoming version of ember-test-helpers. Add `unit: true` or a `needs:[]` list to explicitly opt in to unit test mode." },
    { handler: "silence", matchMessage: "Using the same function as getter and setter is deprecated." },
    { handler: "throw", matchMessage: "Depending on arrays using a dependent key ending with `@each` is deprecated. Please refactor from `Ember.computed('xUniqueData.@each', function() {});` to `Ember.computed('xUniqueData.[]', function() {})`." },
    { handler: "throw", matchMessage: "Depending on arrays using a dependent key ending with `@each` is deprecated. Please refactor from `Ember.computed('yUniqueData.@each', function() {});` to `Ember.computed('yUniqueData.[]', function() {})`." }
  ]
};
