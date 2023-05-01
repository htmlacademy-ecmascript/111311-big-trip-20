(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",p="date",d="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},_=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},m={s:_,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,a=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:o,d:a,D:p,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=h;var b=function(t){return t instanceof E},g=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;$[o]=e,s=o}return!i&&s&&(y=s),s||!i&&y},M=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},D=m;D.l=g,D.i=b,D.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function h(t){this.$L=g(t.locale,null,!0),this.parse(t)}var _=h.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return D},_.isValid=function(){return!(this.$d.toString()===d)},_.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},_.isAfter=function(t,e){return M(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<M(t)},_.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var n=this,c=!!D.u(e)||e,d=D.p(t),f=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(a)},v=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},h=this.$W,_=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return c?f(1,0):f(31,11);case l:return c?f(1,_):f(0,_+1);case o:var $=this.$locale().weekStart||0,b=(h<$?h+7:h)-$;return f(c?m-b:m+(6-b),_);case a:case p:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case s:return v(y+"Seconds",2);case i:return v(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var o,c=D.p(t),d="set"+(this.$u?"UTC":""),f=(o={},o[a]=d+"Date",o[p]=d+"Date",o[l]=d+"Month",o[u]=d+"FullYear",o[r]=d+"Hours",o[s]=d+"Minutes",o[i]=d+"Seconds",o[n]=d+"Milliseconds",o)[c],v=c===a?this.$D+(e-this.$W):e;if(c===l||c===u){var h=this.clone().set(p,1);h.$d[f](v),h.init(),this.$d=h.set(p,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[D.p(t)]()},_.add=function(n,c){var p,d=this;n=Number(n);var f=D.p(c),v=function(t){var e=M(d);return D.w(e.date(e.date()+Math.round(t*n)),d)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return v(1);if(f===o)return v(7);var h=(p={},p[s]=t,p[r]=e,p[i]=1e3,p)[f]||1,_=this.$d.getTime()+n*h;return D.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},p=function(t){return D.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:D.s(r,2,"0"),h:p(1),hh:p(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(t,e){return e||h[t]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,p,d){var f,v=D.p(p),h=M(n),_=(h.utcOffset()-this.utcOffset())*t,m=this-h,y=D.m(this,h);return y=(f={},f[u]=y/12,f[l]=y,f[c]=y/3,f[o]=(m-_)/6048e5,f[a]=(m-_)/864e5,f[r]=m/e,f[s]=m/t,f[i]=m/1e3,f)[v]||m,d?y:D.a(y)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return $[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=g(t,e,!0);return i&&(n.$L=i),n},_.clone=function(){return D.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},h}(),w=E.prototype;return M.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",p]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,E,M),t.$i=!0),M},M.locale=g,M.isDayjs=b,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function e(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function i(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.BEFOREEND;n.insertAdjacentElement(i,e.getElement())}class s{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class r{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}var a=n(484),o=n.n(a);const l="HH:mm",c="DD/MM/YY HH:mm";function u(t){return t?o()(t).format(l):""}function p(t){return t?o()(t).format(c):""}function d(t){return t[0].toUpperCase()+t.slice(1)}const f={basePrice:0,destination:{description:"",name:"",pictures:[]},dateFrom:"",dateTo:"",isFavorite:!1,offers:[],type:"taxi"};function v(t){return`<div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="${t.id}" type="checkbox" name="event-offer-luggage" checked>\n      <label class="event__offer-label" for="${t.id}">\n        <span class="event__offer-title">${t.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </label>\n    </div>`}class h{constructor(t){let{tripPoint:e=f}=t;this.tripPoint=e}getTemplate(){return function(t){const e=p(t.dateFrom),n=p(t.dateTo),i=function(t){const e=function(t){let e="";for(const n of t)e+=`<img class="event__photo" src="${n.src}" alt="${n.description}">`;return e}(t.pictures);return`<section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${t.description}</p>\n\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n            ${e}\n        </div>\n      </div>\n    </section>`}(t.destination),s=function(t){let e="";for(const n of t)e+=v(n);return e}(t.offers),r=function(){const t=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];let e="";for(const n of t)e+=`<div class="event__type-item">\n        <input id="event-type-${n}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${n}">\n        <label class="event__type-label  event__type-label--${n}" for="event-type-${n}-1">${d(n)}</label>\n      </div>`;return e}();return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${t.type}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${r}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${d(t.type)}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t.destination.name}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="Amsterdam"></option>\n              <option value="Geneva"></option>\n              <option value="Chamonix"></option>\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${e}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${n}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${t.basePrice}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              ${s}\n            </div>\n          </section>\n\n          ${i}\n        </section>\n      </form>\n    </li>`}(this.tripPoint)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class _{constructor(t){let{tripPoint:e}=t;this.tripPoint=e}getTemplate(){return function(t){const e=(n=t.dateFrom)?o()(n).format("MMM DD"):"";var n;const i=u(t.dateFrom),s=u(t.dateTo),r=function(t,e){const n=o()(t),i=o()(e);return o()(n.diff(i)).format("DD HH:mm")}(t.dateFrom,t.dateTo),a=`${d(t.type)} ${t.destination.name}`,l=t.isFavorite?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${t.dateFrom}">${e}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${t.type}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${a}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${t.dateFrom}">${i}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${t.dateTo}">${s}</time>\n          </p>\n          <p class="event__duration">${r}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${t.basePrice}</span>\n        </p>\n        <button class="event__favorite-btn  ${l}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`}(this.tripPoint)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const m={basePrice:366,destination:{description:"Chamonix - middle-eastern paradise",name:"Helsinki",pictures:[{src:"https://20.objects.pages.academy/static/destinations/4.jpg",description:"Chamonix for those who value comfort and coziness"},{src:"https://20.objects.pages.academy/static/destinations/12.jpg",description:"Chamonix a true asian pearl"}]},dateFrom:"2023-06-14T01:28:01.397Z",dateTo:"2023-06-15T07:28:01.397Z",isFavorite:!0,offers:[{id:"123",type:"taxi",title:"Upgrade to a business class",price:154},{type:"train",title:"Book a taxi at the arrival point",price:97}],type:"bus"},y=document.querySelector(".page-header"),$=y.querySelector(".trip-main"),b=y.querySelector(".trip-controls__filters"),g=document.querySelector(".page-main").querySelector(".trip-events");i(new class{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},$,t.AFTERBEGIN),i(new class{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},b,t.BEFOREEND);const M=new class{#t=Array.of(m,m,m);getTripPoints(){return this.#t}},D=new class{tripSortComponent=new s;tripPointListComponent=new r;constructor(t){let{container:e,tripPointModel:n}=t;this.container=e,this.tripPointModel=n}init(){this.tripPoints=[...this.tripPointModel.getTripPoints()],i(this.tripSortComponent,this.container),i(this.tripPointListComponent,this.container),i(new h({tripPoint1:this.tripPoints[0]}),this.tripPointListComponent.getElement());for(const t of this.tripPoints)i(new _({tripPoint:t}),this.tripPointListComponent.getElement())}}({container:g,tripPointModel:M});D.init()})()})();
//# sourceMappingURL=bundle.52cd932d6adf9ce898cf.js.map