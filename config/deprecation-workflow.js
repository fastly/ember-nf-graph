window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [

    // Deprecations from Running Test Suite
    { handler: "silence", matchMessage: "Using the same function as getter and setter is deprecated." },

    //Deprecations from running real app only
    { handler: "silence", matchMessage: "You modified ShouldDisplay(graph.hasData) twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" },
    { handler: "silence", matchMessage: "You modified concat([d]; separator=\"\") twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" },
    { handler: "silence", matchMessage: "You modified concat([height]; separator=\"\") twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" },
    { handler: "silence", matchMessage: "You modified concat([graphHeight]; separator=\"\") twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" },
    { handler: "silence", matchMessage: "You modified view.transform twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" },
    { handler: "silence", matchMessage: "You modified concat([leftX]; separator=\"\") twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" },
    { handler: "silence", matchMessage: "You modified concat([rightWidth]; separator=\"\") twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" },
    { handler: "silence", matchMessage: "You modified concat([rightX]; separator=\"\") twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" },
    { handler: "silence", matchMessage: "You modified each(ticks) twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" },
    { handler: "silence", matchMessage: "You modified concat([width]; separator=\"\") twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" },
    { handler: "silence", matchMessage: "You modified concat([graphWidth]; separator=\"\") twice in a single render. This was unreliable in Ember 1.x and will be removed in Ember 2.0" }
  ]
};
