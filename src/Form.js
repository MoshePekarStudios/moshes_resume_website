const Form = `
<script src="https://cdn02.jotfor.ms/static/prototype.forms.js?3.3.38669" type="text/javascript"></script>
<script src="https://cdn03.jotfor.ms/static/jotform.forms.js?3.3.38669" type="text/javascript"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/punycode/1.4.1/punycode.js"></script>
<script type="text/javascript">	JotForm.newDefaultTheme = false;
	JotForm.extendsNewTheme = false;
	JotForm.singleProduct = false;
	JotForm.newPaymentUIForNewCreatedForms = false;
	JotForm.clearFieldOnHide="disable";

	JotForm.init(function(){
	/*INIT-START*/
if (window.JotForm && JotForm.accessible) $('input_8').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_4').setAttribute('tabindex',0);
      JotForm.alterTexts({"confirmClearForm":"Are you sure you want to clear the form","inputCarretErrorA":"Input should not less than the minimum value:","inputCarretErrorB":"Input should not greater than the maximum value:"});
	/*INIT-END*/
	});

   JotForm.prepareCalculationsOnTheFly([null,null,{"name":"submit","qid":"2","text":"SUBMIT","type":"control_button"},null,{"name":"message4","qid":"4","text":"Message","type":"control_textarea"},null,null,{"name":"email","qid":"7","text":"E-mail","type":"control_email"},{"name":"fullName","qid":"8","text":"Full Name","type":"control_textbox"},{"name":"clickTo","qid":"9","text":"Contact Me","type":"control_head"}]);
   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,null,{"name":"submit","qid":"2","text":"SUBMIT","type":"control_button"},null,{"name":"message4","qid":"4","text":"Message","type":"control_textarea"},null,null,{"name":"email","qid":"7","text":"E-mail","type":"control_email"},{"name":"fullName","qid":"8","text":"Full Name","type":"control_textbox"},{"name":"clickTo","qid":"9","text":"Contact Me","type":"control_head"}]);}, 20); 
</script>
<link href="https://cdn01.jotfor.ms/static/formCss.css?3.3.38669" rel="stylesheet" type="text/css" />
<link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/css/styles/nova.css?3.3.38669" />
<style type="text/css">@media print{.form-section{display:inline!important}.form-pagebreak{display:none!important}.form-section-closed{height:auto!important}.page-section{position:initial!important}}</style>
<link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/css/styles/payment/payment_feature.css?3.3.38669" />
<style type="text/css">
    .form-label-left{
        width:156px;
    }
    .form-line{
        padding-top:12px;
        padding-bottom:12px;
    }
    .form-label-right{
        width:156px;
    }
    .form-all{
        width:500px;
        color:#6a4a3c !important;
        font-family:'Roboto';
        font-size:14px;
    }
    .form-radio-item label, .form-checkbox-item label, .form-grading-label, .form-header{
        color: #2E2E2E;
    }

</style>

<style type="text/css" id="form-designer-style">
@import "https://fonts.googleapis.com/css?family=Orbitron:light,lightitalic,normal,italic,bold,bolditalic|Roboto:light,lightitalic,normal,italic,bold,bolditalic|Exo+2:light,lightitalic,normal,italic,bold,bolditalic";
    /* Injected CSS Code */

.form-all:after {
  content: "";
  display: table;
  clear: both;
}
.form-all {
  font-family: "Roboto", sans-serif;
}
.form-all {
  width: 500px;
}
.form-label-left,
.form-label-right {
  width: 156px;
}
.form-label {
  white-space: normal;
}
.form-label.form-label-auto {
  display: block;
  float: none;
  word-break: break-word;
  text-align: left;
}
.form-label-left {
  display: inline-block;
  white-space: normal;
  float: left;
  text-align: left;
}
.form-label-right {
  display: inline-block;
  white-space: normal;
  float: left;
  text-align: right;
}
.form-label-top {
  white-space: normal;
  display: block;
  float: none;
  text-align: left;
}
.form-radio-item label:before {
  top: 0;
}
.form-all {
  font-size: 14px;
}
.form-label {
  font-weight: bold;
}
.form-checkbox-item label,
.form-radio-item label {
  font-weight: normal;
}
.supernova {
  background-color: #85ff00;
  background-color: #31221f;
}
.supernova body {
  background-color: transparent;
}
/*
@width30: (unit(@formWidth, px) + 60px);
@width60: (unit(@formWidth, px)+ 120px);
@width90: (unit(@formWidth, px)+ 180px);
*/
/* | */
@media screen and (min-width: 480px) {
  .supernova .form-all {
    border: 1px solid #120c0b;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);
  }
}
/* | */
/* | */
@media screen and (max-width: 480px) {
  .jotform-form .form-all {
    margin: 0;
    width: 100%;
  }
}
/* | */
/* | */
@media screen and (min-width: 480px) and (max-width: 767px) {
  .jotform-form .form-all {
    margin: 0;
    width: 100%;
  }
}
/* | */
/* | */
@media screen and (min-width: 480px) and (max-width: 499px) {
  .jotform-form .form-all {
    margin: 0;
    width: 100%;
  }
}
/* | */
/* | */
@media screen and (min-width: 768px) {
  .jotform-form {
    padding: 60px 0;
  }
}
/* | */
/* | */
@media screen and (max-width: 499px) {
  .jotform-form .form-all {
    margin: 0;
    width: 100%;
  }
}
/* | */
.supernova .form-all,
.form-all {
  background-color: #85ff00;
  border: 1px solid transparent;
}
.form-header-group {
  border-color: #6acc00;
}
.form-matrix-table tr {
  border-color: #6acc00;
}
.form-matrix-table tr:nth-child(2n) {
  background-color: #78e600;
}
.form-all {
  color: #6a4a3c;
}
.form-header-group .form-header {
  color: #6a4a3c;
}
.form-header-group .form-subHeader {
  color: #8b614e;
}
.form-sub-label {
  color: #8b614e;
}
.form-label-top,
.form-label-left,
.form-label-right,
.form-html {
  color: #090b7c;
}
.form-checkbox-item label,
.form-radio-item label {
  color: #0c0fac;
}
.form-line.form-line-active {
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -ms-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -ms-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -ms-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
  background-color: rgba(235, 104, 65, 0.4);
}
/* omer */
.form-radio-item,
.form-checkbox-item {
  padding-bottom: 0px !important;
}
.form-radio-item:last-child,
.form-checkbox-item:last-child {
  padding-bottom: 0;
}
/* omer */
.form-single-column .form-checkbox-item,
.form-single-column .form-radio-item {
  width: 100%;
}
.form-checkbox-item .editor-container div,
.form-radio-item .editor-container div {
  position: relative;
}
.form-checkbox-item .editor-container div:before,
.form-radio-item .editor-container div:before {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  left: 0;
  width: 18px;
  height: 18px;
}
.form-checkbox-item,
.form-radio-item {
  padding-left: 2px;
}
.form-checkbox-item input,
.form-radio-item input {
  margin-top: 2px;
}
.supernova {
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center top;
  background-repeat: repeat;
}
.supernova {
  background-image: none;
}
#stage {
  background-image: none;
}
/* | */
.form-all {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center top;
  background-repeat: repeat;
}
.form-header-group {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center top;
}
.form-line {
  margin-top: 11px;
  margin-bottom: 11px;
}
.form-line {
  padding: 0px 17px;
}
.form-all .form-submit-button,
.form-all .form-submit-reset,
.form-all .form-submit-print {
  border-radius: 100px;
}
.form-all .form-sub-label {
  margin-left: 3px;
}
.form-all {
  border-radius: 20px;
}
.form-section:first-child {
  border-radius: 20px 20px 0 0;
}
.form-section:last-child {
  border-radius: 0 0 20px 20px;
}
.form-all .qq-upload-button,
.form-all .form-submit-button,
.form-all .form-submit-reset,
.form-all .form-submit-print {
  height: 42px;
  width: 108px;
  font-size: 1.15em;
  padding: 12px 18px;
  display: block;
  width: 100%;
  margin: 0;
  font-family: "Orbitron", sans-serif;
  font-size: 16px;
  font-weight: bolder;
  border: none;
  border-width: 0px !important;
  border-style: solid !important;
  border-color: #9e9e9e !important;
}
.form-all .form-buttons-wrapper {
  margin-left: 0 !important;
}
.form-all .form-pagebreak-back-container,
.form-all .form-pagebreak-next-container {
  width: 48% !important;
  padding: 24px 0;
}
.form-all .form-pagebreak-next-container {
  margin-left: 4%;
}
.form-all .form-submit-print {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.form-all .form-pagebreak-back,
.form-all .form-pagebreak-next {
  font-size: 1em;
  padding: 9px 15px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: normal;
}
.form-all .form-pagebreak-back,
.form-all .form-pagebreak-next {
  box-shadow: none;
  text-shadow: none;
  color: #6a4a3c !important;
  background: false;
}
h2.form-header {
  line-height: 1.618em;
  font-size: 1.714em;
}
h2 ~ .form-subHeader {
  line-height: 1.5em;
  font-size: 1.071em;
}
.form-header-group {
  text-align: left;
}
/*.form-dropdown,
.form-radio-item,
.form-checkbox-item,
.form-radio-other-input,
.form-checkbox-other-input,*/
.form-captcha input,
.form-spinner input,
.form-error-message {
  padding: 4px 3px 2px 3px;
}
.form-header-group {
  font-family: "Exo 2", sans-serif;
}
.form-section {
  padding: 16px 0px 16px 0px;
}
.form-header-group {
  margin: 0px 0px 0px 0px;
}
.form-header-group {
  padding: 24px 36px 24px 36px;
}
.form-header-group .form-header,
.form-header-group .form-subHeader {
  color: #3e3e3e;
}
.form-header-group {
  background-color: #e4e4e4;
}
.form-textbox,
.form-textarea {
  border-width: 1px;
  border-style: solid;
  border-color: #bdbdbd;
  color: #3e3e3e;
  padding: 4px 3px 2px 3px;
}
.form-textbox,
.form-textarea,
.form-radio-other-input,
.form-checkbox-other-input,
.form-captcha input,
.form-spinner input {
  background-color: #c3daac;
}
.form-matrix-row-headers,
.form-matrix-column-headers,
.form-matrix-values {
  padding: 4px;
}
[data-type="control_dropdown"] .form-input,
[data-type="control_dropdown"] .form-input-wide {
  width: 150px;
}
.form-buttons-wrapper {
  margin-left: 0 !important;
  text-align: center;
}
.form-header-group {
  border-bottom: none;
}
.form-label {
  font-family: "Roboto", sans-serif;
}
li[data-type="control_image"] div {
  text-align: left;
}
li[data-type="control_image"] img {
  border: none;
  border-width: 0px !important;
  border-style: solid !important;
  border-color: false !important;
}
.form-line-column {
  width: auto;
}
.form-line-error {
  background-color: #85ff00;
  box-shadow: inset 0px 3px 11px -7px #ff3200;
}
.form-line-error input:not(#coupon-input),
.form-line-error textarea,
.form-line-error .form-validation-error {
  -webkit-transition-property: none;
  -moz-transition-property: none;
  -ms-transition-property: none;
  -o-transition-property: none;
  transition-property: none;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -ms-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -ms-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
  border: 1px solid #fff4f4;
  box-shadow: 0 0 3px #fff4f4;
}
.form-line-error .form-error-message {
  margin: 0;
  position: absolute;
  color: #fff;
  display: inline-block;
  right: 0;
  font-size: 12px;
  position: absolute!important;
  box-shadow: none;
  top: 0px;
  color: #FFF;
  background: #ff3200;
  padding: 0px 5px;
  bottom: auto;
  border-radius: 0;
  box-shadow: 0px 2px 4px rgba(102, 102, 102, 0.5);
}
.form-line-error .form-error-message img,
.form-line-error .form-error-message .form-error-arrow {
  display: none;
}
.ie-8 .form-all {
  margin-top: auto;
  margin-top: initial;
}
.ie-8 .form-all:before {
  display: none;
}
[data-type="control_clear"] {
  display: none;
}
/* | */
@media screen and (max-width: 480px), screen and (max-device-width: 767px) and (orientation: portrait), screen and (max-device-width: 415px) and (orientation: landscape) {
  .testOne {
    letter-spacing: 0;
  }
  .form-all {
    border: 0;
    max-width: initial;
  }
  .form-sub-label-container {
    width: 100%;
    margin: 0;
    margin-right: 0;
    float: left;
    box-sizing: border-box;
  }
  span.form-sub-label-container + span.form-sub-label-container {
    margin-right: 0;
  }
  .form-sub-label {
    white-space: normal;
  }
  .form-address-table td,
  .form-address-table th {
    padding: 0 1px 10px;
  }
  .form-submit-button,
  .form-submit-print,
  .form-submit-reset {
    width: 100%;
    margin-left: 0!important;
  }
  div[id*=at_] {
    font-size: 14px;
    font-weight: 700;
    height: 8px;
    margin-top: 6px;
  }
  .showAutoCalendar {
    width: 20px;
  }
  img.form-image {
    max-width: 100%;
    height: auto;
  }
  .form-matrix-row-headers {
    width: 100%;
    word-break: break-all;
    min-width: 80px;
  }
  .form-collapse-table,
  .form-header-group {
    margin: 0;
  }
  .form-collapse-table {
    height: 100%;
    display: inline-block;
    width: 100%;
  }
  .form-collapse-hidden {
    display: none !important;
  }
  .form-input {
    width: 100%;
  }
  .form-label {
    width: 100% !important;
  }
  .form-label-left,
  .form-label-right {
    display: block;
    float: none;
    text-align: left;
    width: auto!important;
  }
  .form-line,
  .form-line.form-line-column {
    padding: 2% 5%;
    box-sizing: border-box;
  }
  input[type=text],
  input[type=email],
  input[type=tel],
  textarea {
    width: 100%;
    box-sizing: border-box;
    max-width: initial !important;
  }
  .form-radio-other-input,
  .form-checkbox-other-input {
    max-width: 55% !important;
  }
  .form-dropdown,
  .form-textarea,
  .form-textbox {
    width: 100%!important;
    box-sizing: border-box;
  }
  .form-input,
  .form-input-wide,
  .form-textarea,
  .form-textbox,
  .form-dropdown {
    max-width: initial!important;
  }
  .form-checkbox-item:not(#foo),
  .form-radio-item:not(#foo) {
    width: 100%;
  }
  .form-address-city,
  .form-address-line,
  .form-address-postal,
  .form-address-state,
  .form-address-table,
  .form-address-table .form-sub-label-container,
  .form-address-table select,
  .form-input {
    width: 100%;
  }
  div.form-header-group {
    padding: 24px 36px !important;
    padding-left: 5%!important;
    padding-right: 5%!important;
    margin: 0 0px 2% !important;
    box-sizing: border-box;
  }
  div.form-header-group.hasImage img {
    max-width: 100%;
  }
  [data-type="control_button"] {
    margin-bottom: 0 !important;
  }
  [data-type=control_fullname] .form-sub-label-container {
    width: 48%;
  }
  [data-type=control_fullname] .form-sub-label-container:first-child {
    margin-right: 4%;
  }
  [data-type=control_phone] .form-sub-label-container {
    width: 65%;
    margin-right: 0;
    margin-left: 0;
    float: left;
  }
  [data-type=control_phone] .form-sub-label-container:first-child {
    width: 31%;
    margin-right: 4%;
  }
  [data-type=control_datetime] .allowTime-container {
    width: 100%;
  }
  [data-type=control_datetime] .allowTime-container .form-sub-label-container {
    width: 24%!important;
    margin-left: 6%;
    margin-right: 0;
  }
  [data-type=control_datetime] .allowTime-container .form-sub-label-container:first-child {
    margin-left: 0;
  }
  [data-type=control_datetime] span + span + span > span:first-child {
    display: block;
    width: 100% !important;
  }
  [data-type=control_birthdate] .form-sub-label-container,
  [data-type=control_time] .form-sub-label-container {
    width: 27.3%!important;
    margin-right: 6% !important;
  }
  [data-type=control_time] .form-sub-label-container:last-child {
    width: 33.3%!important;
    margin-right: 0 !important;
  }
  .form-pagebreak-back-container,
  .form-pagebreak-next-container {
    min-height: 1px;
    width: 50% !important;
  }
  .form-pagebreak-back,
  .form-pagebreak-next,
  .form-product-item.hover-product-item {
    width: 100%;
  }
  .form-pagebreak-back-container {
    padding: 0;
    text-align: right;
  }
  .form-pagebreak-next-container {
    padding: 0;
    text-align: left;
  }
  .form-pagebreak {
    margin: 0 auto;
  }
  .form-buttons-wrapper {
    margin: 0!important;
    margin-left: 0!important;
  }
  .form-buttons-wrapper button {
    width: 100%;
  }
  .form-buttons-wrapper .form-submit-print {
    margin: 0 !important;
  }
  table {
    width: 100%!important;
    max-width: initial!important;
  }
  table td + td {
    padding-left: 3%;
  }
  .form-checkbox-item,
  .form-radio-item {
    white-space: normal!important;
  }
  .form-checkbox-item input,
  .form-radio-item input {
    width: auto;
  }
  .form-collapse-table {
    margin: 0 5%;
    display: block;
    zoom: 1;
    width: auto;
  }
  .form-collapse-table:before,
  .form-collapse-table:after {
    display: table;
    content: '';
    line-height: 0;
  }
  .form-collapse-table:after {
    clear: both;
  }
  .fb-like-box {
    width: 98% !important;
  }
  .form-error-message {
    clear: both;
    bottom: -10px;
  }
  .date-separate,
  .phone-separate {
    display: none;
  }
  .custom-field-frame,
  .direct-embed-widgets,
  .signature-pad-wrapper {
    width: 100% !important;
  }
}
/* | */

/*__INSPECT_SEPERATOR__*/
.form-all {
    -moz-box-sizing : border-box;
    -webkit-box-sizing : border-box;
    box-sizing : border-box;
}

[data-type="control_head"] {
    padding-bottom : 20px;
}

/*responsive fields*/
[data-type="control_textbox"] .form-textbox, 
[data-type="control_fullname"] .form-textbox,
[data-type="control_email"] .form-textbox,
[data-type="control_textarea"] .form-textarea, 
[data-type="control_dropdown"] .form-dropdown {
    width : 100% !important;
    max-width : none !important;
}

.form-textbox, .form-textarea, .form-dropdown {
    max-width : none !important;
    box-shadow : none;
    outline : none;
    box-sizing : border-box;
    -webkit-box-sizing : border-box;
    -moz-box-sizing : border-box;
    font-family : inherit;
    padding : 6px;
}

.form-textarea-limit>span {
    display : block;
}

[data-type="control_dropdown"] .form-input, 
[data-type="control_dropdown"] .form-input-wide {
    width : 100%;
}

/*input focus*/
.form-line-active input:focus, .form-line-active textarea:focus, .form-line-active select:focus {
    box-shadow : none;
}

/*reset error*/
.form-line-error {
    box-shadow : none;
}

/*input error*/
.form-line-error input:not(#coupon-input), .form-line-error textarea, .form-line-error select, .form-line-error .form-validation-error {
    border : 1px solid #e15353 !important;
    box-shadow : none !important;
}

.form-line-active {
    color : inherit !important;
}

/*responsive content -wide or shrink*/
.form-label {
    width : 35% !important;
    box-sizing : border-box;
    -webkit-box-sizing : border-box;
    -moz-box-sizing : border-box;
}

.form-label-top {
    width : 100% !important;
}

.form-line {
    box-sizing : border-box;
    -webkit-box-sizing : border-box;
    -moz-box-sizing : border-box;
    width : 100%;
}

.form-checkbox-other-input {
    width : 80% !important;
}

.form-input {
    width : 65% !important;
    max-width : none !important;
}

.form-input-wide {
    max-width : none !important;
    display : inline-block;
    width : 100%;
}

/*single fields with sublabels*/
[data-type="control_textbox"] .form-input-wide .form-sub-label-container, 
[data-type="control_fullname"] .form-input-wide .form-sub-label-container,
[data-type="control_email"] .form-input-wide .form-sub-label-container,
[data-type="control_textarea"] .form-input-wide .form-sub-label-container, 
[data-type="control_dropdown"] .form-input-wide .form-sub-label-container,
[data-type="control_textbox"] .form-input .form-sub-label-container, 
[data-type="control_fullname"] .form-input .form-sub-label-container,
[data-type="control_email"] .form-input .form-sub-label-container,
[data-type="control_textarea"] .form-input .form-sub-label-container, 
[data-type="control_dropdown"] .form-input .form-sub-label-container {
    width : 100%;
    max-width : none !important;
}

[data-type="control_dropdown"] .form-input-wide {
    width : 100%;
}

/*responsive full name*/
[data-type="control_fullname"] .form-sub-label-container {
    width : 50% !important;
    margin : 0;
    float : left;
    box-sizing : border-box;
}

[data-type="control_fullname"] .form-label + div .form-sub-label-container {
    display : inline-block;
    padding-right : 5px;
}

[data-type="control_fullname"] .form-label + div .form-sub-label-container + .form-sub-label-container {
    margin-right : 0;
    padding-right : 0;
    padding-left : 5px;
}

[data-type="control_fullname"] .form-label + div .form-sub-label-container + .form-sub-label-container {
    margin-right : 0;
    padding-right : 0;
    padding-left : 5px;
}

[data-type="control_fullname"] .form-label + div .form-sub-label-container + .form-sub-label-container + .form-sub-label-container {
    padding-left : 0;
    padding-right : 5px;
}

[data-type="control_fullname"] .form-label + div .form-sub-label-container + .form-sub-label-container + .form-sub-label-container + .form-sub-label-container {
    padding-left : 5px;
    padding-right : 0;
}

[data-type="control_fullname"] .form-label + div .form-sub-label-container + .form-sub-label-container  + .form-sub-label-container + .form-sub-label-container + .form-sub-label-container {
    padding-right : 5px;
    padding-left : 0;
}

#sublabel_prefix, #sublabel_first, #sublabel_middle {
    /*margin-bottom : 10px;
    */;
}

/*remove sepatators on date and phone*/
.phone-separate, .date-separate {
    display : none;
}

/*responsive phone fields*/
[data-type="control_phone"] input[name$="[area]"] {
    width : 100%;
}

[data-type="control_phone"] input[name$="[phone]"] {
    width : 100%;
}

[data-type="control_phone"] input[name$="[full]"] {
    width : 100%;
}

[data-type="control_phone"] .form-sub-label-container {
    width : 40%;
    float : left;
    box-sizing : border-box;
    margin-right : 0;
    padding-right : 12px;
}

/* responsive date time field */
[data-type="control_datetime"] .form-textbox,
[data-type="control_datetime"] .form-dropdown {
    width : 100%;
}

[data-type="control_datetime"] .form-sub-label-container {
    width : 28%;
    padding-left : 4px;
    box-sizing : border-box;
    margin-right : 0;
}

[data-type="control_datetime"] .form-sub-label-container:first-child {
    padding-left : 0;
}

[data-type="control_datetime"] .form-sub-label-container:first-child + .form-sub-label-container + .form-sub-label-container {
    padding-right : 0;
}

[data-type="control_datetime"] .form-sub-label-container:last-child {
    width : auto !important;
}

.allowTime-container .form-sub-label-container:last-child {
    width : 20% !important;
}

span.allowTime-container {
    width : 80%;
    padding-top : 14px;
}

.allowTime-container span.form-sub-label-container {
    width : 35%;
}

span.allowTime-container .form-dropdown {
    width : 100%;
}

span.allowTime-container > span:first-child {
    display : none;
}

span.allowTime-container > span:first-child + span {
    padding-left : 0;
}

.showAutoCalendar + label {
    display : none;
}

span.allowTime-container + span {
    padding-top : 14px;
}

/*calendar lite mode*/
[data-type="control_datetime"] div[style*="none"] + .form-sub-label-container {
    width : 84%;
    padding-left : 0;
}

/*responsive phone field*/
[data-type="control_phone"] .form-sub-label-container + .form-sub-label-container {
    width : 60%;
    margin-right : 0;
    padding-right : 0;
    padding-left : 12px;
}

/*responsive full address fields*/
.form-address-city, .form-address-line, .form-address-postal, 
.form-address-state, .form-address-table, 
.form-address-table .form-sub-label-container, .form-address-table select {
    width : 100%;
    max-width : 100%;
}

[data-type="control_address"] input[name$="[city]"],
[data-type="control_address"] input[name$="[postal]"] {
    width : 90% !important;
}

[data-type="control_address"] input[name$="[area]"] {
    width : 60%;
}

/*reset submit button*/
[data-type="control_button"] {
    background : transparent !important;
}

.form-submit-button,
.form-submit-reset,
.form-submit-print {
    outline : none;
}

/*remove other checkbox*/
.form-checkbox-other, 
.form-radio-other {
    visibility : hidden !important;
}

/*shruken fields*/
.form-line-column {
    width : 50%;
}

.form-line-column .form-label-top {
    width : 100% !important;
}

/*fix form builder display*/
div#stage.form-all {
    max-width : none !important;
    margin-right : 0;
}

div#stage .form-input {
    width : 64% !important;
}

/*remove first pagebreak back button*/
.form-all .page-section:first-child .form-pagebreak .form-pagebreak-back-container {
    display : none !important;
}

/* responsive pagebreak */
.form-pagebreak-back-container {
    width : 50% !important;
    text-align : left;
    box-sizing : border-box;
    -webkit-box-sizing : border-box;
    float : left;
}

.form-pagebreak-next-container {
    width : 50% !important;
    text-align : right;
    box-sizing : border-box;
    -webkit-box-sizing : border-box;
    float : left;
}

/* radio-checkbox button make border 1px */
.form-radio-item:not(#foo) label:after,
.form-radio-item:not(#foo) label:before {
    border-radius : 50%;
}

.form-checkbox-item:not(#foo) label:after,
.form-checkbox-item:not(#foo) label:before {
    border-radius : 0;
}

.form-radio-item:not(#foo) label:before,
.form-checkbox-item:not(#foo) label:before {
    border-width : 1px;
}

/*responsive credit card on payment fields*/
table td + td {
    padding-left : 0;
}

.form-address-table {
    width : 100%;
}

[data-type="control_stripe"] .form-address-table,
[data-type="control_stripe"] .form-address-table .form-textbox,
[data-type="control_authnet"] .form-address-table,
[data-type="control_authnet"] .form-address-table .form-textbox,
#creditCardTable.form-address-table,
#creditCardTable.form-address-table .form-textbox {
    max-width : none;
}

[data-type="control_stripe"] .form-address-table td:last-child .form-sub-label-container,
[data-type="control_authnet"] .form-address-table td:last-child .form-sub-label-container,
#creditCardTable.form-address-table td:last-child .form-sub-label-container {
    margin-left : 0;
    white-space : normal;
}

[data-type="control_stripe"] .form-address-table td .form-sub-label-container,
[data-type="control_authnet"] .form-address-table td .form-sub-label-container,
#creditCardTable.form-address-table td .form-sub-label-container {
    width : 100%;
}

[data-type="control_stripe"] .form-address-table .form-textbox,
[data-type="control_stripe"] .form-address-table .form-dropdown,
[data-type="control_authnet"] .form-address-table .form-textbox,
[data-type="control_authnet"] .form-address-table .form-dropdown,
#creditCardTable.form-address-table .form-textbox,
#creditCardTable.form-address-table .form-dropdown {
    width : 100%;
    visibility : visible;
}

[data-type="control_stripe"] .form-address-table tbody > tr:first-child + tr td:first-child span,
[data-type="control_authnet"] .form-address-table tbody > tr:first-child + tr td:first-child span,
#creditCardTable.form-address-table tbody > tr:first-child + tr td:first-child span {
    margin : 0;
    padding-right : 6px;
    box-sizing : border-box;
    -webkit-box-sizing : border-box;
}

[data-type="control_stripe"] .form-address-table tbody > tr:first-child + tr td:first-child + td span,
[data-type="control_authnet"] .form-address-table tbody > tr:first-child + tr td:first-child + td span,
#creditCardTable.form-address-table tbody > tr:first-child + tr td:first-child + td span {
    margin : 0;
    padding-left : 6px;
    box-sizing : border-box;
    -webkit-box-sizing : border-box;
}

[data-type="control_stripe"] .form-address-table tbody > tr:first-child + tr +tr td:first-child span,
[data-type="control_stripe"] .form-address-table tbody > tr:first-child + tr +tr+tr td:first-child span,
[data-type="control_authnet"] .form-address-table tbody > tr:first-child + tr +tr td:first-child span,
[data-type="control_authnet"] .form-address-table tbody > tr:first-child + tr +tr+tr td:first-child span,
#creditCardTable.form-address-table tbody > tr:first-child + tr +tr td:first-child span,
#creditCardTable.form-address-table tbody > tr:first-child + tr +tr+tr td:first-child span {
    margin : 0;
    padding-right : 6px;
    width : 50% !important;
    visibility : hidden;
    float : left;
    box-sizing : border-box;
    -webkit-box-sizing : border-box;
}

[data-type="control_stripe"] .form-address-table tbody > tr:first-child + tr +tr td:first-child span + span,
[data-type="control_stripe"] .form-address-table tbody > tr:first-child + tr +tr+tr td:first-child span + span,
[data-type="control_authnet"] .form-address-table tbody > tr:first-child + tr +tr td:first-child span + span,
[data-type="control_authnet"] .form-address-table tbody > tr:first-child + tr +tr+tr td:first-child span + span,
#creditCardTable.form-address-table tbody > tr:first-child + tr +tr td:first-child span + span,
#creditCardTable.form-address-table tbody > tr:first-child + tr +tr+tr td:first-child span + span {
    margin : 0;
    padding-top : 0 !important;
    padding-right : 0;
    padding-left : 6px;
    width : 50% !important;
    box-sizing : border-box;
    -webkit-box-sizing : border-box;
}

.cc_ccv {
    width : 100% !important;
}

[data-type="control_stripe"] .form-address-table .form-sub-label,
[data-type="control_authnet"] .form-address-table .form-sub-label,
#creditCardTable.form-address-table .form-sub-label {
    visibility : visible;
}

/*cc fix city state, country */
[data-type="control_stripe"] .form-address-table td[width="50%"]>span:first-child,
[data-type="control_authnet"] .form-address-table td[width="50%"]>span:first-child,
#creditCardTable.form-address-table td[width="50%"]>span:first-child {
    box-sizing : border-box;
    padding-right : 7px;
}

[data-type="control_stripe"] .form-address-table td[width="50%"] + td >span:first-child,
[data-type="control_authnet"] .form-address-table td[width="50%"] + td >span:first-child,
#creditCardTable.form-address-table td[width="50%"] + td >span:first-child {
    box-sizing : border-box;
    padding-left : 7px;
}

[data-type="control_stripe"] .form-address-table td[width="50%"] + td[width="50%"] >span:first-child,
[data-type="control_authnet"] .form-address-table td[width="50%"] + td[width="50%"] >span:first-child,
#creditCardTable.form-address-table td[width="50%"] + td[width="50%"] >span:first-child {
    box-sizing : border-box;
    padding-right : 0;
}

.hover-product-item:hover {
    color : inherit;
}

/*fix for braintree cc styling*/
[data-type="control_braintree"] .form-sub-label-container {
    width : 100% !important;
    padding : 4px;
    box-sizing : border-box;
}

[data-type="control_braintree"] .form-textbox {
    width : 100%;
}

.braintree-hosted-fields {
    width : 100% !important;
    box-sizing : border-box;
    min-height : 28px;
}

/*remove bottom spacing on CC section*/
#creditCardTable.form-address-table tbody tr + tr + tr td,
[data-type="control_stripe"] .form-address-table tbody tr + tr + tr td,
[data-type="control_authnet"] .form-address-table tbody tr + tr + tr td {
    padding-bottom : 0;
}

@media screen and (max-device-width:768px){
    .form-all {
        margin : 0 auto !important;
        width : 100% !important;
    }

    [data-type=control_fullname] .form-sub-label-container:first-child {
        margin-right : 0;
    }

}

@media screen and (max-device-width:480px){
    .jotform-form {
        padding : 0;
    }

    .form-input {
        width : 100% !important;
    }

    .form-label {
        width : 100% !important;
        float : none !important;
    }

    .form-line-column {
        width : 100% !important;
    }

    div.form-header-group {
        margin : 0 !important;
        padding : 24px 20px !important;
    }

    [data-type="control_datetime"] .form-sub-label-container {
        float : left;
    }

    [data-type=control_fullname] .form-sub-label-container:first-child {
        margin-right : 0;
    }

}


    /* Injected CSS Code */
</style>

<link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/css/styles/buttons/form-submit-button-denim_dark_blue.css?3.3.38669"/>
<form class="jotform-form" action="https://submit.jotform.com/submit/230017643879158/" method="post" name="form_230017643879158" id="230017643879158" accept-charset="utf-8" autocomplete="on"><input type="hidden" name="formID" value="230017643879158" /><input type="hidden" id="JWTContainer" value="" /><input type="hidden" id="cardinalOrderNumber" value="" />
  <div role="main" class="form-all">
    <ul class="form-section page-section">
      <li id="cid_9" class="form-input-wide" data-type="control_head">
        <div class="form-header-group  header-large">
          <div class="header-text httal htvam">
            <h1 id="header_9" class="form-header" data-component="header">Contact Me</h1>
            <div id="subHeader_9" class="form-subHeader">Please fill this form in a decent manner</div>
          </div>
        </div>
      </li>
      <li class="form-line jf-required" data-type="control_textbox" id="id_8"><label class="form-label form-label-top form-label-auto" id="label_8" for="input_8"> Full Name<span class="form-required">*</span> </label>
        <div id="cid_8" class="form-input-wide jf-required"> <input type="text" id="input_8" name="q8_fullName" data-type="input-textbox" class="form-textbox validate[required]" data-defaultvalue="" size="25" value="" placeholder=" " data-component="textbox" aria-labelledby="label_8" required="" /> </div>
      </li>
      <li class="form-line jf-required" data-type="control_email" id="id_7"><label class="form-label form-label-top form-label-auto" id="label_7" for="input_7"> E-mail<span class="form-required">*</span> </label>
        <div id="cid_7" class="form-input-wide jf-required"> <input type="email" id="input_7" name="q7_email" class="form-textbox validate[required, Email]" data-defaultvalue="" size="25" value="" placeholder=" " data-component="email" aria-labelledby="label_7" required="" /> </div>
      </li>
      <li class="form-line jf-required" data-type="control_textarea" id="id_4"><label class="form-label form-label-top form-label-auto" id="label_4" for="input_4"> Message<span class="form-required">*</span> </label>
        <div id="cid_4" class="form-input-wide jf-required"> <textarea id="input_4" class="form-textarea validate[required]" name="q4_message4" cols="28" rows="6" data-component="textarea" required="" aria-labelledby="label_4"></textarea> </div>
      </li>
      <li class="form-line" data-type="control_button" id="id_2">
        <div id="cid_2" class="form-input-wide">
          <div data-align="center" class="form-buttons-wrapper form-buttons-center   jsTest-button-wrapperField"><button id="input_2" type="submit" class="form-submit-button form-submit-button-denim_dark_blue submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content="">SUBMIT</button></div>
        </div>
      </li>
      <li style="display:none">Should be Empty: <input type="text" name="website" value="" /></li>
    </ul>
  </div>
  <script>
    JotForm.showJotFormPowered = "new_footer";
  </script>
  <script>
    JotForm.poweredByText = "Powered by Jotform";
  </script><input type="hidden" class="simple_spc" id="simple_spc" name="simple_spc" value="230017643879158" />
  <script type="text/javascript">
    var all_spc = document.querySelectorAll("form[id='230017643879158'] .si" + "mple" + "_spc");
    for (var i = 0; i < all_spc.length; i++)
    {
      all_spc[i].value = "230017643879158-230017643879158";
    }
  </script>
  <div class="formFooter-heightMask"></div>
</form><script type="text/javascript">JotForm.ownerView=true;</script>
`
export default Form