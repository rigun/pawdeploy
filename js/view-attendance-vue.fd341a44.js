(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-attendance-vue"],{1793:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contentlist"},[i("div",{staticClass:"flex-container"},[i("div",{staticClass:"columns m-t-10"},[i("div",{staticClass:"column",staticStyle:{display:"flex"}},[i("h1",{staticClass:"title",staticStyle:{"margin-bottom":"0","margin-right":"10px"}},[t._v("Presensi Pengenalan Pola")]),i("v-icon",{style:t.refresh?"transform:rotate(360deg)":"transform: none",on:{click:function(e){t.getData(),t.refresh=!0}}},[t._v("refresh")])],1)]),i("v-flex",{staticStyle:{"margin-top":"30px"},attrs:{xs12:""}},[i("v-card",{staticStyle:{"border-radius":"2px"},attrs:{text:""}},[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:""}},[i("b-field",[i("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"magnify"},nativeOn:{keyup:function(e){return t.setTime()},keydown:function(e){return t.clearTime()}},model:{value:t.tempSearch,callback:function(e){t.tempSearch=e},expression:"tempSearch"}})],1)],1),i("v-flex",{staticStyle:{display:"flex","justify-content":"right"},attrs:{xs12:"",sm6:""}},[i("b-button",{attrs:{type:"is-info"},on:{click:function(e){t.dialog=!0,t.openCamera()}}},[t._v("Verifikasi Mahasiswa")])],1)],1)],1)],1)],1),i("div",{staticStyle:{"margin-top":"20px"}},[i("b-table",{attrs:{data:t.usersList,paginated:!0,"per-page":t.perPage,"current-page":t.currentPage,loading:t.loadData,"pagination-simple":!0,narrowed:!0,"mobile-cards":!0,striped:!0,hoverable:!0,"default-sort-direction":t.defaultSortDirection,"default-sort":"created_at"},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[i("b-table-column",{attrs:{label:"No",sortable:""}},[t._v(t._s(e.index+1))]),i("b-table-column",{attrs:{label:"Foto",sortable:""}},[i("v-img",{staticStyle:{width:"100px",height:"auto"},attrs:{src:t.$apiUrl+"/model/realpict/"+e.row.npm+".jpg"}})],1),i("b-table-column",{attrs:{field:"name",label:"Nama",sortable:""}},[t._v(t._s(e.row.name))]),i("b-table-column",{attrs:{field:"npm",label:"NPM",sortable:""}},[t._v(t._s(e.row.npm))]),i("b-table-column",{attrs:{field:"created_at",label:"Mendaftar Pada",sortable:""}},[t._v(t._s(e.row.created_at))]),i("b-table-column",{attrs:{label:""}},[i("v-menu",{attrs:{transition:"slide-x-transition","offset-x":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{icon:""}},a),[i("v-icon",[t._v("more_vert")])],1)]}}],null,!0)},[i("v-list",[i("v-list-item",{on:{click:function(a){a.preventDefault(),t.editDialog=!0,t.setEditData(e.row)}}},[i("v-list-item-title",[t._v("Edit")])],1),i("v-list-item",{on:{click:function(a){a.preventDefault(),t.deleteDialog=!0,t.deleteId=e.row.id}}},[i("v-list-item-title",[t._v("Hapus")])],1)],1)],1)],1)]}}])},[i("template",{slot:"empty"},[i("section",{staticClass:"section"},[i("div",{staticClass:"content has-text-grey has-text-centered"},[i("p",[i("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),i("p",[t._v("Nothing here.")])])])])],2)],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Verifikasi Mahasiswa")])]),i("v-card-text",[i("v-container",[i("div",{staticClass:"cameraForm",staticStyle:{"min-height":"380px"}},[i("div",{style:t.uploading?"":"display: none"},[i("img",{attrs:{src:t.img,alt:""}})]),i("web-cam",{ref:"webcam",style:t.uploading?"display: none":"",attrs:{"device-id":t.deviceId,width:"100%"},on:{cameras:t.onCameras,"camera-change":t.onCameraChange}}),i("div",{staticClass:"deviceoption"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.camera,expression:"camera"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.camera=e.target.multiple?a:a[0]}}},[i("option",[t._v("-- Select Device --")]),t._l(t.devices,(function(e){return i("option",{key:e.deviceId,domProps:{value:e.deviceId}},[t._v(t._s(e.label))])}))],2)])],1)])],1),i("v-card-actions",[i("v-spacer"),i("b-button",{staticStyle:{"margin-left":"10px",width:"100%","max-width":"120px"},attrs:{type:"is-danger"},on:{click:function(e){t.dialog=!1,t.closeCamera()}}},[t._v("Batal")]),i("b-button",{staticStyle:{"margin-left":"10px",width:"100%","max-width":"120px"},attrs:{type:"is-success"},on:{click:function(e){return t.sendData()}}},[t.uploading?i("img",{staticStyle:{width:"20px"},attrs:{src:a("54c8"),alt:""}}):i("span",[t._v("Verifikasi")])])],1)],1)],1)],1),i("v-snackbar",{attrs:{color:t.snackbar.color,"multi-line":!0,timeout:3e3},model:{value:t.snackbar.disp,callback:function(e){t.$set(t.snackbar,"disp",e)},expression:"snackbar.disp"}},[t._v(" "+t._s(t.snackbar.text)+" "),i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.snackbar.disp=!1}}},[t._v("Close")])],1)],1)},s=[],n=(a("4de4"),a("7db0"),a("caad"),a("fb6a"),a("b0c0"),a("ac1f"),a("2532"),a("841c"),a("f4e8")),r=a("b3cb"),c={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},o={components:{WebCam:r["WebCam"]},mounted:function(){this.getData()},data:function(){return{data:new FormData,percentCompleted:0,uploading:!1,isActiveCamera:!0,dialog:!1,selectedFilter:-1,snackbar:{color:"#d32f2f",text:"msg",disp:!1},users:[],refresh:!1,typingTimer:null,tempSearch:"",search:"",loadData:!0,defaultSortDirection:"desc",currentPage:1,perPage:10,isPaginated:!0,isPaginationSimple:!0,img:null,camera:null,deviceId:null,devices:[]}},watch:{$route:function(t,e){t.params.view!=e.params.view&&this.getData()},camera:function(t){this.deviceId=t},devices:function(){var t=Object(n["a"])(this.devices),e=t[0];t.slice(1);e&&(this.camera=e.deviceId,this.deviceId=e.deviceId)}},computed:{device:function(){var t=this;return this.devices.find((function(e){return e.deviceId===t.deviceId}))},usersList:function(){var t=this;return this.users.filter((function(e){return""==t.search||e.name.toLowerCase().includes(t.search.toLowerCase())}))}},methods:{preparedata:function(){this.data=new FormData,this.img=this.$refs.webcam.capture(),this.data.append("picture",this.img)},sendData:function(){this.preparedata(),this.percentCompleted=0,this.uploading=!0;var t={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+localStorage.getItem("token")},onUploadProgress:function(t){this.percentCompleted=Math.round(100*t.loaded/t.total),this.$forceUpdate()}.bind(this)},e=this.$modelUrl+"/verify",a=this;this.$http.post(e,this.data,t).then(function(t){a.snackbar.disp=!0,a.snackbar.text=t.data.msg+"("+t.data.score+")",a.snackbar.color="#32bdca",a.uploading=!1}.bind(this)).catch((function(t){a.percentCompleted=0,a.snackbar.disp=!!t,a.snackbar.text="Coba lagi",a.snackbar.color="#d32f2f",a.uploading=!1}))},onCapture:function(){this.img=this.$refs.webcam.capture()},onCameras:function(t){this.devices=t},onCameraChange:function(t){this.deviceId=t,this.camera=t},closeCamera:function(){this.isActiveCamera&&(this.$refs.webcam.stop(),this.isActiveCamera=!1)},openCamera:function(){this.isActiveCamera||(this.$refs.webcam.start(),this.isActiveCamera=!0)},setTime:function(){this.loadData=!0,clearTimeout(this.typingTimer),this.typingTimer=setTimeout(this.setSearch,2e3)},clearTime:function(){clearTimeout(this.typingTimer)},setSearch:function(){this.loadData=!1,this.search=this.tempSearch},getData:function(){var t,e=this;this.loadData=!0,t=this.$apiUrl+"/api/attendance",this.$http.get(t,c).then((function(t){e.users=t.data,e.loadData=!1}))}}},l=o,d=a("2877"),u=Object(d["a"])(l,i,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=view-attendance-vue.fd341a44.js.map