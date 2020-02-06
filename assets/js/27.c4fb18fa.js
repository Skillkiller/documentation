(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{241:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[e._v("#")]),e._v(" Search")]),e._v(" "),a("h3",{attrs:{id:"finding-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finding-documents"}},[e._v("#")]),e._v(" Finding documents")]),e._v(" "),a("p",[e._v("When the query input is received, MeiliSearch is building a more complex query taking into account "),a("em",[e._v("typos")]),e._v(", n-grams, and "),a("em",[e._v("synonyms")]),e._v(" if configured.")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Typos")]),e._v(" - For example, if the query string is "),a("code",[e._v("botman")]),e._v(", MeiliSearch will return documents containing "),a("code",[e._v("batman")]),e._v(". "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/typotolerance.html"}},[e._v("Read more about the typo rules")]),e._v(".")],1),e._v(" "),a("li",[a("em",[e._v("N-grams")]),e._v(" - MeiliSearch is set to merge multi-words query into a single word. Ex: Searching for "),a("code",[e._v("bat mobile")]),e._v(" will returns documents containing "),a("code",[e._v("batmobile")]),e._v(". Each words of the query will also be split in many ways so MeiliSearch can returns documents containing "),a("code",[e._v("new york")]),e._v(" when querying for "),a("code",[e._v("newyork")]),e._v(".")]),e._v(" "),a("li",[a("em",[e._v("Synonyms")]),e._v(" - MeiliSearch will return documents containing "),a("code",[e._v("batman")]),e._v(" when searching for "),a("code",[e._v("the dark knight")]),e._v(". Synonyms are not set by default because they are domain-specific. "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/synonyms.html"}},[e._v("Read more about synonyms")]),e._v(".")],1)]),e._v(" "),a("h3",{attrs:{id:"sorting-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sorting-documents"}},[e._v("#")]),e._v(" Sorting documents")]),e._v(" "),a("blockquote",[a("p",[e._v("It would not be a search engine if there was not a notion of relevancy in the results returned.")])]),e._v(" "),a("p",[e._v("When all documents corresponding to the request have been collected, "),a("em",[e._v("MeiliSearch sorts the documents")]),e._v(" using a bucket sort.")]),e._v(" "),a("p",[e._v("A bucket sort can be described as an ordered set of sorting criteria. All the documents are sorted within the first criterion, then documents that can not be distinguished will be sorted using the second criterion, and so on. Thus, every document is not sorted for every criterion, which induces a reduced compute time.\nHere is the ordered list of the default criteria used in MeiliSearch:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Number of Typos")]),e._v(" - The fewer typos there are between the query words and the document words, the better is the document.")]),e._v(" "),a("li",[a("em",[e._v("Number of Words")]),e._v(" - A document containing more of the query words will be more important than one that contains less.")]),e._v(" "),a("li",[a("em",[e._v("Words Proximity")]),e._v(" - The closer the query words are in the document, the better is the document.")]),e._v(" "),a("li",[a("em",[e._v("Attribute")]),e._v(" - A document containing the query words in a more important attribute than another document is considered better.")]),e._v(" "),a("li",[a("em",[e._v("Position")]),e._v(" - A document containing the query words at the start of an attribute is considered better than a document that contains them at the end.")]),e._v(" "),a("li",[a("em",[e._v("Exact")]),e._v(" - A document containing the query words in their exact form, not only a prefix of them, is considered better.")])]),e._v(" "),a("p",[e._v("You can change the order of these criteria, but you should know that these work well for a majority of use-cases. You can also add your own criteria for domains specific needs. For example, you could add a date sorting criterion when searching into documents where the date of publication is essential. "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/ranking.html#custom-ranking-rules"}},[e._v("Read more about ranking")]),e._v(" to see how to add custom criteria.")],1),e._v(" "),a("h3",{attrs:{id:"search-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-options"}},[e._v("#")]),e._v(" Search options")]),e._v(" "),a("p",[e._v("A lot of configuration can be made at "),a("em",[e._v("query-time")]),e._v(". Here are some usage examples:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Pagination")]),e._v(" - Results can be paginated using the query params "),a("code",[e._v("limit")]),e._v(" and "),a("code",[e._v("offset")])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -X GET "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://localhost:7700/indexes/4eb345y7/search?q=batman&limit=5&offset=10'")]),e._v("\n")])])]),a("ul",[a("li",[a("em",[e._v("Search only in specific attributes")]),e._v(" - Search can be configured at query time. For example, you can search only in selected attributes.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -X GET "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://localhost:7700/indexes/4eb345y7/search?q=moliere&attributesToSearchIn=title'")]),e._v("\n")])])]),a("ul",[a("li",[a("em",[e._v("Filters")]),e._v(" - You can build a faceted search using the query param "),a("code",[e._v("filter")]),e._v(". It will only return the specific filtered documents.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -X GET "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://localhost:7700/indexes/4eb345y7/search?q=batman&filters=director:Christopher%20Nolan'")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);