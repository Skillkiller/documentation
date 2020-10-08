(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{426:function(t,e,s){"use strict";s.r(e);var a=s(8),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dumps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dumps"}},[t._v("#")]),t._v(" Dumps")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("dumps")]),t._v(" route allows the creation of database dumps. Dumps are "),s("code",[t._v(".tar.gz")]),t._v(" files that can be used to launch MeiliSearch. Dumps are compatible between MeiliSearch versions.")]),t._v(" "),s("p",[t._v("Creating a dump is also referred to as exporting it, whereas launching MeiliSearch with a dump is referred to as importing it.")]),t._v(" "),s("p",[t._v("During a "),s("RouterLink",{attrs:{to:"/references/dump.html#create-a-dump"}},[t._v("dump export")]),t._v(", all indexes of the current instance are exported—together with their documents and settings—and saved as a single "),s("code",[t._v(".tar.gz")]),t._v(" file.")],1),t._v(" "),s("p",[t._v("During a dump import, all indexes contained in the indicated "),s("code",[t._v(".tar.gz")]),t._v(" file are imported along with their associated documents and settings. Any existing index with the same uid as an index in the dump file will be overwritten.")]),t._v(" "),s("p",[t._v("Dump imports are "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/configuration.html#import-dump"}},[t._v("performed at launch")]),t._v(" using an option. "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/configuration.html#dump-batch-size"}},[t._v("Batch size")]),t._v(" can also be set at this time.")],1),t._v(" "),s("h2",{attrs:{id:"create-a-dump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-dump"}},[t._v("#")]),t._v(" Create a Dump")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"POST",route:"/dumps"}}),t._v(" "),s("p",[t._v("Triggers a dump creation process. Once the process is complete, a dump is created in the "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/configuration.html#dumps-folder"}},[t._v("dumps folder")]),t._v(". If the dumps folder does not exist yet, it will be created.")],1),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("code-samples",{attrs:{id:"post_dump_1"}}),t._v(" "),s("h4",{attrs:{id:"response-202-accepted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("202 Accepted")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20200929-114144097"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"processing"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"get-dump-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-dump-status"}},[t._v("#")]),t._v(" Get dump status")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"GET",route:"/dumps/:dump_uid/status"}}),t._v(" "),s("p",[t._v("Get the status of a dump creation process using the uid returned after calling the "),s("RouterLink",{attrs:{to:"/references/dump.html#create-a-dump"}},[t._v("dump creation route")]),t._v("."),s("br"),t._v("\nThe returned status could be:")],1),t._v(" "),s("ul",[s("li",[s("code",[t._v("processing")]),t._v(": Dump creation is in progress.")]),t._v(" "),s("li",[s("code",[t._v("dump_process_failed")]),t._v(": An error occured during dump process, and the task was aborted.")]),t._v(" "),s("li",[s("code",[t._v("done")]),t._v(": Dump creation is finished and was successful.")])]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("code-samples",{attrs:{id:"get_dump_status_1"}}),t._v(" "),s("h4",{attrs:{id:"response-200-ok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20200929-114144097"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"done"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);