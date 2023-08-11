(()=>{"use strict";var e={287:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(537),s=a.n(i),r=a(645),d=a.n(r)()(s());d.push([e.id,".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}","",{version:3,sources:["webpack://./src/views/editor-view.css"],names:[],mappings:"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}"],sourceRoot:""}]);const n=d},766:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(537),s=a.n(i),r=a(645),d=a.n(r)()(s());d.push([e.id,".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n","",{version:3,sources:["webpack://./src/views/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n"],sourceRoot:""}]);const n=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",i=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),i&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),i&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(i)for(var n=0;n<this.length;n++){var c=this[n][0];null!=c&&(d[c]=!0)}for(var o=0;o<e.length;o++){var f=[].concat(e[o]);i&&d[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),a&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=a):f[2]=a),s&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=s):f[4]="".concat(s)),t.push(f))}},t}},537:e=>{e.exports=function(e){var t=e[1],a=e[3];if(!a)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function a(e){for(var a=-1,i=0;i<t.length;i++)if(t[i].identifier===e){a=i;break}return a}function i(e,i){for(var r={},d=[],n=0;n<e.length;n++){var c=e[n],o=i.base?c[0]+i.base:c[0],f=r[o]||0,l="".concat(o," ").concat(f);r[o]=f+1;var p=a(l),b={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(b);else{var u=s(b,i);i.byIndex=n,t.splice(n,0,{identifier:l,updater:u,references:1})}d.push(l)}return d}function s(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var d=0;d<r.length;d++){var n=a(r[d]);t[n].references--}for(var c=i(e,s),o=0;o<r.length;o++){var f=a(r[o]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}r=c}}},569:e=>{var t={};e.exports=function(e,a){var i=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var i="";a.supports&&(i+="@supports (".concat(a.supports,") {")),a.media&&(i+="@media ".concat(a.media," {"));var s=void 0!==a.layer;s&&(i+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),i+=a.css,s&&(i+="}"),a.media&&(i+="}"),a.supports&&(i+="}");var r=a.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.nc=void 0,(()=>{class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}}const t=e;function i(e,...t){return e.reduce(((e,a,i)=>{const s=t[i-1];return void 0===s?e+a:Array.isArray(s)?e+s.join("")+a:e+s+a}))}customElements.define("add-button-view",class extends t{createHtml(){return i`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled="">New event</button>
    `}});customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return i`
      <div class="trip-sort__item  trip-sort__item--day">
        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="">
        <label class="trip-sort__btn" for="sort-day">Day</label>
      </div>
      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>
      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
        <label class="trip-sort__btn" for="sort-time">Time</label>
      </div>
      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
        <label class="trip-sort__btn" for="sort-price">Price</label>
      </div>
      <div class="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
      </div>
    `}});var s=a(379),r=a.n(s),d=a(795),n=a.n(d),c=a(569),o=a.n(c),f=a(565),l=a.n(f),p=a(216),b=a.n(p),u=a(589),m=a.n(u),v=a(766),_={};_.styleTagTransform=m(),_.setAttributes=l(),_.insert=o().bind(null,"head"),_.domAPI=n(),_.insertStyleElement=b(),r()(v.Z,_),v.Z&&v.Z.locals&&v.Z.locals;class h extends t{constructor(){super()}createHtml(){return i`
      <div class="event">
        ${this.createStartDateHtml()}
        ${this.createTypeIconHtml()}
        ${this.createDestinationHtml()}
        ${this.createScheduleHtml()}
        ${this.createPriceHtml()}
        ${this.createOfferListHtml()}
        ${this.createFavoriteButtonHtml()}
        ${this.createOpenButtonHtml()}
      </div>
    `}createStartDateHtml(){return i`
      <time class="event__date" datetime="2019-03-18">MAR 18</time>
    `}createTypeIconHtml(){return i`
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
      </div>
    `}createDestinationHtml(){return i`
      <h3 class="event__title">Taxi Amsterdam</h3>
    `}createScheduleHtml(){return i`
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
          —
          <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
        </p>
        <p class="event__duration">30M</p>
      </div>
    `}createPriceHtml(){return i`
      <p class="event__price">
        €&nbsp;<span class="event__price-value">20</span>
      </p>
    `}createOfferListHtml(){return i`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Order Uber</span>
          +€&nbsp;
          <span class="event__offer-price">20</span>
        </li>
      </ul>
    `}createFavoriteButtonHtml(){return i`
      <button class="event__favorite-btn event__favorite-btn--active" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
    `}createOpenButtonHtml(){return i`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}}customElements.define("card-view",h);const y=h;var g=a(287),w={};w.styleTagTransform=m(),w.setAttributes=l(),w.insert=o().bind(null,"head"),w.domAPI=n(),w.insertStyleElement=b(),r()(g.Z,w),g.Z&&g.Z.locals&&g.Z.locals;class T extends t{constructor(){super()}createHtml(){return i`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${this.createTypeFieldHtml()}
          ${this.createDestinationFieldHtml()}
          ${this.createScheduleFieldHtml()}
          ${this.createPriceFieldHtml()}
          ${this.createSubmitButtonHtml()}
          ${this.createResetButtonHtml()}
          ${this.createCloseButtonHtml()}
        </header>
        <section class="event__details">
          ${this.createOfferListFieldHtml()}
          ${this.createDestinationHtml()}
        </section>
      </form>
    `}createTypeFieldHtml(){const{types:e}=this.state;return i`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img
            class="event__type-icon"
            width="17"
            height="17"
            src="img/icons/${e.find((e=>e.isSelected)).value}.png"
            alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${e.map((e=>i`
              <div class="event__type-item">
                <input
                  id="event-type-${e.value}-1"
                  class="event__type-input  visually-hidden"
                  type="radio"
                  name="event-type"
                  value="${e.value}"
                  ${e.isSelected?"checked":""}>
                <label
                  class="event__type-label  event__type-label--${e.value}"
                  for="event-type-${e.value}-1">
                  ${e.value}
                </label>
              </div>
            `))}
          </fieldset>
        </div>
      </div>
    `}createDestinationFieldHtml(){const{types:e,destinations:t}=this.state;return i`
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${e.find((e=>e.isSelected)).value}
        </label>
        <input
          class="event__input  event__input--destination"
          id="event-destination-1"
          type="text"
          name="event-destination"
          value="${t.find((e=>e.isSelected))?.name}"
          list="destination-list-1">
        <datalist id="destination-list-1">
        ${t.map((e=>i`
        <option value="${e.name}"></option>
      `))}
        </datalist>
      </div>
    `}createScheduleFieldHtml(){const{dateFrom:e,dateTo:t}=this.state;return i`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input
          class="event__input  event__input--time"
          id="event-start-time-1"
          type="text"
          name="event-start-time"
          value="${e}">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input
          class="event__input  event__input--time"
          id="event-end-time-1"
          type="text"
          name="event-end-time"
          value="${t}">
      </div>
    `}createPriceFieldHtml(){const{basePrice:e}=this.state;return i`
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input
          class="event__input  event__input--price"
          id="event-price-1"
          type="text"
          name="event-price"
          value="${e}">
      </div>
    `}createSubmitButtonHtml(){return i`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return i`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `}createCloseButtonHtml(){return i`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Close event</span>
      </button>
    `}createOfferListFieldHtml(){const{offers:e}=this.state;return e.length?i`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${e.map((e=>i`
        <div class="event__offer-selector">
          <input
            class="event__offer-checkbox  visually-hidden"
            id="${e.id}"
            type="checkbox"
            name="event-offer"
            value="${e.id}"
            ${e.isSelected?"checked":""}>
          <label class="event__offer-label" for="${e.id}">
            <span class="event__offer-title">${e.title}</span>
            +€&nbsp;
            <span class="event__offer-price">${e.price}</span>
          </label>
        </div>
      `))}
        </div>
      </section>
    `:""}createDestinationHtml(){const{destinations:e}=this.state,t=e.find((e=>e.isSelected));return t?i`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${t.description}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
          ${t.pictures.map((e=>i`
          <img class="event__photo" src="${e.src}" alt="${e.description}">
        `))}
          </div>
        </div>
      </section>
    `:""}}customElements.define("editor-view",T);const A=T;customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=this.state.items.map((e=>{const t=e.isEditable?new A:new y;return t.classList.add("trip-list__item"),t.setAttribute("role","listitem"),t.setState(e),t}));this.replaceChildren(...e)}});const j=class{},Z=class extends j{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dateFrom=e.date_from,this.dateTo=e.date_to,this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offerIds=structuredClone(e.offers),this.type=e.type}},x=JSON.parse('[{"id":"03d14abb-9e5f-4ce3-bd6e-8b06cd9d6c0b","base_price":7126,"date_from":"2023-08-03T21:00:00.531Z","date_to":"2023-08-12T19:00:00.531Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"dcbffcb9-1ea9-4d08-bba8-ab387569ec66","base_price":2596,"date_from":"2023-08-03T21:00:00.531Z","date_to":"2023-08-11T13:00:00.531Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["c787fed3-3749-4745-b1dc-c46d2fc7afc6","67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"1eb3273d-cd0f-4f32-b4c9-4b011141c0de","base_price":5321,"date_from":"2023-07-29T21:00:00.531Z","date_to":"2023-08-12T01:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":[],"type":"restaurant"},{"id":"b8cb2160-b413-4bb7-89f1-564df9d29f04","base_price":6212,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-11T23:00:00.532Z","destination":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","is_favorite":false,"offers":["83570f51-33a9-4f08-bddf-169aa9699416","31dab9b4-3a4f-4227-a873-c708181b3e9b"],"type":"drive"},{"id":"73480071-2287-4bbd-adba-54c11b18eaff","base_price":7647,"date_from":"2023-08-01T21:00:00.532Z","date_to":"2023-08-12T05:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["6ca7f0d1-f1ca-430f-a78b-d24b3168f55d","9cb63b44-43eb-41f8-a400-f3dae11d3ce7","853ee9fe-8aa5-4a0b-81b8-e32442fc822a","95c84a9e-2205-4d61-b0a4-237d4ef8f511"],"type":"taxi"},{"id":"382c91cc-8815-45b7-ab9b-4a031412ec86","base_price":3312,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-12T18:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":true,"offers":["67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"ac9aeb25-5c1b-4e5e-8f50-b3c5fd37b3ec","base_price":9767,"date_from":"2023-08-05T21:00:00.532Z","date_to":"2023-08-11T03:00:00.532Z","destination":"f4680965-86bd-4e60-b723-0e81be33a007","is_favorite":true,"offers":["83570f51-33a9-4f08-bddf-169aa9699416","31dab9b4-3a4f-4227-a873-c708181b3e9b"],"type":"drive"},{"id":"c3c7421c-f344-42cc-b139-98ffc610f9aa","base_price":9431,"date_from":"2023-08-03T21:00:00.532Z","date_to":"2023-08-12T05:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":["d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"4d1bf327-19ac-4d89-91d3-a2160018351f","base_price":4645,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-12T14:00:00.532Z","destination":"e7d7bec7-6321-43bc-8f30-3d20d74bb2bc","is_favorite":false,"offers":["8d626a89-5a23-4849-abf2-623e4f0b174a","d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"cb8388c6-a7c2-4fc1-b05a-dfe1e3a1e419","base_price":9163,"date_from":"2023-07-30T21:00:00.532Z","date_to":"2023-08-11T19:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":["d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"2508e06c-16a2-4dfa-bbc5-e9f811329bac","base_price":3431,"date_from":"2023-08-01T21:00:00.532Z","date_to":"2023-08-12T20:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":["83570f51-33a9-4f08-bddf-169aa9699416","31dab9b4-3a4f-4227-a873-c708181b3e9b"],"type":"drive"},{"id":"970afe30-6890-4e98-8721-7742059d6346","base_price":7368,"date_from":"2023-08-03T21:00:00.532Z","date_to":"2023-08-11T13:00:00.532Z","destination":"e7d7bec7-6321-43bc-8f30-3d20d74bb2bc","is_favorite":true,"offers":["81056bf4-1de3-4939-bec7-231741c0eae2"],"type":"check-in"},{"id":"6edbbc21-fcbe-4376-9cbd-98b7d01dd151","base_price":2011,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-11T07:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["db89b1f1-c57e-4ab8-91e7-b69abe59f7ee"],"type":"restaurant"},{"id":"e9014984-06f8-49ed-a9a8-8276ca674355","base_price":452,"date_from":"2023-08-01T21:00:00.532Z","date_to":"2023-08-12T04:00:00.532Z","destination":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","is_favorite":false,"offers":["8d626a89-5a23-4849-abf2-623e4f0b174a","d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"f61eeca3-115a-4e0e-9d4b-34f406b4812d","base_price":7046,"date_from":"2023-08-07T21:00:00.532Z","date_to":"2023-08-11T18:00:00.532Z","destination":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"232fe3c1-a652-43dd-bdef-5d2c7f23159a","base_price":3274,"date_from":"2023-08-06T21:00:00.532Z","date_to":"2023-08-12T01:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":true,"offers":[],"type":"drive"},{"id":"c05bd18c-7fac-4790-a18e-9fad984088ef","base_price":7421,"date_from":"2023-08-04T21:00:00.532Z","date_to":"2023-08-12T19:00:00.532Z","destination":"9be7169f-ece9-419d-a926-24acc4ead65e","is_favorite":false,"offers":[],"type":"bus"},{"id":"4dac3d2c-e069-407f-92e8-4bd5db7541c0","base_price":3930,"date_from":"2023-07-31T21:00:00.532Z","date_to":"2023-08-11T23:00:00.532Z","destination":"1e2e5223-9446-4646-b3ec-e1907a95f3ba","is_favorite":true,"offers":["0ce31f25-9760-42c3-a0b5-b9123309b164"],"type":"flight"},{"id":"e661bd13-0fb4-455d-b89b-c339968b7e20","base_price":7521,"date_from":"2023-07-29T21:00:00.532Z","date_to":"2023-08-12T09:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["9b2ed293-0f05-471b-9270-39d018a378d4","7fbc431f-0cd7-4892-bf69-ba3abfc4433f","f6440f21-d18d-40bb-8b9a-a6ca64179cb1","e5731bfd-cdde-4df8-83f7-8fb8b935aa00","81056bf4-1de3-4939-bec7-231741c0eae2"],"type":"check-in"},{"id":"c7555222-e755-4e00-bc7b-8a9b37ab3a26","base_price":2419,"date_from":"2023-08-06T21:00:00.532Z","date_to":"2023-08-12T12:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":[],"type":"train"},{"id":"aa270ba5-a9b5-4fed-9db6-39b0a1bf610a","base_price":7248,"date_from":"2023-07-30T21:00:00.532Z","date_to":"2023-08-11T22:00:00.532Z","destination":"1f8e77e4-b185-45a9-b9da-77dac347a39c","is_favorite":false,"offers":["c787fed3-3749-4745-b1dc-c46d2fc7afc6","67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"7b74bb34-5dca-499c-86c2-5588403b2eae","base_price":4893,"date_from":"2023-08-05T21:00:00.532Z","date_to":"2023-08-11T20:00:00.532Z","destination":"5daad181-4871-4c6f-8953-da0360c6471d","is_favorite":false,"offers":[],"type":"restaurant"},{"id":"b058c54f-b013-4c2d-924b-b6e75d1bcc4d","base_price":3525,"date_from":"2023-08-05T21:00:00.565Z","date_to":"2023-08-11T08:00:00.565Z","destination":"430ed559-03ac-43cd-97af-1ac60623b769","is_favorite":true,"offers":["0f73880e-2c26-4618-ac0d-679f3d611a61","8d626a89-5a23-4849-abf2-623e4f0b174a","d60ccd4d-38da-4838-b42c-500c28896eb9"],"type":"train"},{"id":"ba0bbbc3-b375-4127-95c3-dc07a433855f","base_price":4311,"date_from":"2023-08-03T21:00:00.565Z","date_to":"2023-08-11T16:00:00.565Z","destination":"430ed559-03ac-43cd-97af-1ac60623b769","is_favorite":true,"offers":["67d873c9-8393-4d9a-af91-0d5e4166f1bf","ca9751b7-1856-4e2a-9fde-4df504db9dec"],"type":"bus"},{"id":"b9e18bcf-62de-404b-83f0-13a7006e2a69","base_price":7447,"date_from":"2023-07-30T21:00:00.565Z","date_to":"2023-08-12T10:00:00.565Z","destination":"415d5d96-be4d-4473-9c31-a62d2bf3d323","is_favorite":true,"offers":["95c84a9e-2205-4d61-b0a4-237d4ef8f511"],"type":"taxi"}]'),H=JSON.parse('[{"id":"1e2e5223-9446-4646-b3ec-e1907a95f3ba","description":"Valencia - with an embankment of a mighty river as a centre of attraction","name":"Valencia","pictures":[]},{"id":"430ed559-03ac-43cd-97af-1ac60623b769","description":"Hiroshima - is a beautiful city","name":"Hiroshima","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Hiroshima famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/20.jpg","description":"Hiroshima with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/8.jpg","description":"Hiroshima a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Hiroshima with crowded streets"},{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Hiroshima with a beautiful old town"}]},{"id":"e7d7bec7-6321-43bc-8f30-3d20d74bb2bc","name":"Sochi"},{"id":"1f8e77e4-b185-45a9-b9da-77dac347a39c","description":"Amsterdam - middle-eastern paradise","name":"Amsterdam","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/13.jpg","description":"Amsterdam famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Amsterdam middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Amsterdam a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/17.jpg","description":"Amsterdam famous for its crowded street markets with the best street food in Asia"}]},{"id":"8fa3a3fb-8205-4da2-8aaa-954159347305","description":"Tokio - with crowded streets","name":"Tokio","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Tokio with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Tokio famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Tokio for those who value comfort and coziness"}]},{"id":"5daad181-4871-4c6f-8953-da0360c6471d","description":"Oslo - for those who value comfort and coziness","name":"Oslo","pictures":[]},{"id":"f4680965-86bd-4e60-b723-0e81be33a007","description":"Madrid - full of of cozy canteens where you can try the best coffee in the Middle East","name":"Madrid","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/19.jpg","description":"Madrid a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Madrid middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/13.jpg","description":"Madrid full of of cozy canteens where you can try the best coffee in the Middle East"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Madrid middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/14.jpg","description":"Madrid famous for its crowded street markets with the best street food in Asia"}]},{"id":"415d5d96-be4d-4473-9c31-a62d2bf3d323","description":"Chamonix - in a middle of Europe","name":"Chamonix","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/8.jpg","description":"Chamonix famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Chamonix is a beautiful city"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Chamonix full of of cozy canteens where you can try the best coffee in the Middle East"},{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Chamonix famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Chamonix famous for its crowded street markets with the best street food in Asia"}]},{"id":"31fd5b9d-de8d-402f-8d15-863cb0d0401b","description":"Venice - in a middle of Europe","name":"Venice","pictures":[]},{"id":"9be7169f-ece9-419d-a926-24acc4ead65e","description":"Berlin - in a middle of Europe","name":"Berlin","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Berlin with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/12.jpg","description":"Berlin famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Berlin a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Berlin with crowded streets"}]}]'),C=JSON.parse('[{"type":"taxi","offers":[{"id":"c75c7bbc-3f32-45c3-ada8-f7274d979601","title":"Upgrade to a business class","price":92},{"id":"6ca7f0d1-f1ca-430f-a78b-d24b3168f55d","title":"Choose the radio station","price":51},{"id":"9cb63b44-43eb-41f8-a400-f3dae11d3ce7","title":"Choose temperature","price":53},{"id":"853ee9fe-8aa5-4a0b-81b8-e32442fc822a","title":"Drive quickly, I\'m in a hurry","price":169},{"id":"95c84a9e-2205-4d61-b0a4-237d4ef8f511","title":"Drive slowly","price":163}]},{"type":"bus","offers":[{"id":"c787fed3-3749-4745-b1dc-c46d2fc7afc6","title":"Infotainment system","price":94},{"id":"67d873c9-8393-4d9a-af91-0d5e4166f1bf","title":"Order meal","price":132},{"id":"ca9751b7-1856-4e2a-9fde-4df504db9dec","title":"Choose seats","price":167}]},{"type":"train","offers":[{"id":"0f73880e-2c26-4618-ac0d-679f3d611a61","title":"Book a taxi at the arrival point","price":176},{"id":"8d626a89-5a23-4849-abf2-623e4f0b174a","title":"Order a breakfast","price":100},{"id":"d60ccd4d-38da-4838-b42c-500c28896eb9","title":"Wake up at a certain time","price":147}]},{"type":"flight","offers":[{"id":"aae16dfe-fe4f-4b16-9cfa-a4bc3d6c884c","title":"Choose meal","price":149},{"id":"fd17b530-30d2-46e0-b0f1-198acb42c3a8","title":"Choose seats","price":51},{"id":"45ef4dec-385b-4fd2-a50b-1aa952e06d7a","title":"Upgrade to comfort class","price":159},{"id":"cf752849-59a1-46ff-8c1d-cb93b45de4e3","title":"Upgrade to business class","price":163},{"id":"79a535b5-b702-497b-9b89-98a7e867d9dd","title":"Add luggage","price":111},{"id":"0ce31f25-9760-42c3-a0b5-b9123309b164","title":"Business lounge","price":88}]},{"type":"check-in","offers":[{"id":"9b2ed293-0f05-471b-9270-39d018a378d4","title":"Choose the time of check-in","price":40},{"id":"7fbc431f-0cd7-4892-bf69-ba3abfc4433f","title":"Choose the time of check-out","price":110},{"id":"f6440f21-d18d-40bb-8b9a-a6ca64179cb1","title":"Add breakfast","price":195},{"id":"e5731bfd-cdde-4df8-83f7-8fb8b935aa00","title":"Laundry","price":61},{"id":"81056bf4-1de3-4939-bec7-231741c0eae2","title":"Order a meal from the restaurant","price":51}]},{"type":"sightseeing","offers":[]},{"type":"ship","offers":[{"id":"4e6408dc-c790-4b8b-a722-246570482666","title":"Choose meal","price":157},{"id":"3d5b8c54-e2c4-471d-ba0b-6b72bd13dad1","title":"Choose seats","price":34},{"id":"110d4d36-8112-4a9e-96c6-c8f384a96ed7","title":"Upgrade to comfort class","price":107},{"id":"972af80d-d8d2-4960-9c25-50b563ed5db6","title":"Upgrade to business class","price":109},{"id":"62405be9-04df-48ff-ae7a-dc28063369cd","title":"Add luggage","price":184},{"id":"4d2dd4cb-cc78-4ed0-a92e-076e228b58ac","title":"Business lounge","price":158}]},{"type":"drive","offers":[{"id":"83570f51-33a9-4f08-bddf-169aa9699416","title":"With automatic transmission","price":128},{"id":"31dab9b4-3a4f-4227-a873-c708181b3e9b","title":"With air conditioning","price":47}]},{"type":"restaurant","offers":[{"id":"7b286829-27a9-4105-81f3-7b54729ddf1a","title":"Choose live music","price":159},{"id":"db89b1f1-c57e-4ab8-91e7-b69abe59f7ee","title":"Choose VIP area","price":119}]}]'),S=class{constructor(e,t){this.view=e,this.model=t,window.queueMicrotask((()=>this.updateView()))}updateView(){}},$=class extends S{constructor(...e){super(...e)}updateView(){this.view.render()}},k=class extends S{constructor(...e){super(...e)}updateView(){this.view.render()}},E=class extends S{constructor(...e){super(...e)}updateView(){this.view.render()}},B=class extends S{constructor(...e){super(...e)}updateView(){this.view.render()}},O=class extends S{constructor(...e){super(...e)}updateView(){const e=this.model.getPoints(),t=this.model.getDestinations(),a=this.model.getOfferGroups(),i=e.map(((e,i)=>{const{offers:s}=a.find((t=>t.type===e.type));return{id:e.id,types:a.map((t=>({value:t.type,isSelected:t.type===e.type}))),destinations:t.map((t=>({...t,isSelected:t.id===e.destinationId}))),dateFrom:e.dateFrom,dateTo:e.dateTo,basePrice:e.basePrice,offers:s.map((t=>({...t,isSelected:e.offerIds?.includes(t.id)}))),isFavorite:e.isFavorite,isEditable:1===i}}));this.view.setState({items:i})}},M=new class extends j{constructor(){super(),this.points=[],this.destinations=[],this.offerGroups=[]}async ready(){this.points=x,this.destinations=H,this.offerGroups=C}getPoints(){return this.points.map((e=>new Z(e)))}getDestinations(){return structuredClone(this.destinations)}getOfferGroups(){return structuredClone(this.offerGroups)}};M.ready().then((()=>{new $(document.querySelector("brief-view"),M),new k(document.querySelector("filter-view"),M),new E(document.querySelector("add-button-view"),M),new B(document.querySelector("sort-view"),M),new O(document.querySelector("list-view"),M)}));const F=document.querySelector("brief-view"),P=document.querySelector("filter-view"),I=document.querySelector("add-button-view"),L=document.querySelector("sort-view"),D=document.querySelector("list-view");F.render(),P.render(),I.render(),L.render(),D.render()})()})();
//# sourceMappingURL=bundle.fa940cf598342b47fd2e.js.map