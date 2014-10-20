cachable-ajax
================
This element extends core-ajax element. It exposes the same API (docs: https://www.polymer-project.org/docs/elements/core-elements.html#core-ajax).

See the [component page](http://domderen.github.io/components/cachable-ajax) for more information.

## Getting Started

A connection point between core-ajax component and core-localstorage, where 
the content downloaded from the server, can be cached on the localstorage, if that is the wish of the user.
This element extends the core-ajax element exposing the same interface (events and attributes).
Value is cached in the local storage as the MD5 hash from the url + params (stringified) + handleAs.
If some value is found in cache, it is returned to through the core-response event. The detail.response
property will contain the object returned from cache. It is the same property as in case of 
core-ajax and it's usual response.

If user will start the ajax request for the first time, he/she should get just one callback of 
core-response handler. On any consecutive same ajax request, data will be taken from cache,
before returning the value from server (core-response event callback will fire twice).