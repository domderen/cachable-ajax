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

## Installation

Install the package
`bower install cachable-ajax --save`

## Usage

Use the following markup on your page
`<cachable-ajax
auto
url="http://gdata.youtube.com/feeds/api/videos/"
params='{"alt":"json", "q":"chrome"}'
handleAs="json"
on-core-response="{{handleResponse}}"
cacheResponse="true"
key="localStorageKey"></cachable-ajax>`

## Attributes

*auto* - boolean - If true, automatically performs an Ajax request when either url or params changes. Defaults to false.

*url* - string - The URL target of the request. Defaults to ''.

*params* - string (JSON) - Parameters to send to the specified URL, as JSON. Defaults to ''.

*handleAs* - string - Specifies what data to store in the response property, and to deliver as event.response in response events. Details [here](https://www.polymer-project.org/docs/elements/core-elements.html#core-ajax). Defaults to 'text'.

*cacheResponse* - boolean - Property defining if the ajax response should be cached using the local storage. Defaults to true.

*key* - property defining the key to use in communication with local storage. If the value is falsy, storage key will be generated based on the request parameters. Defaults to undefined.

## Methods

*go* - Method which performs the server request. Returns promise which will be resolved when the server response will come.

## Change log

*0.3.1*
- Added promise response from the 'go' method. Now this component can be easily used as a service for http requests, from other components.
- Refactored unnecessary public properties to private fields, for cleaner component API.

*0.2.1*
- Added new parameter 'key', for defining custom cache key.
- Added calculation of generated cache key, based on the xhrArgs object of the request. Basically now component calculated md5 cache of the request.

*0.1.1*
- Added basic version of the component, being able to cache responses to localstorage.

