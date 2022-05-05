import css from "styled-jsx/css";

export default css.global`
  .react-bootstrap-table table {
    table-layout: auto !important;
  }

  .overflow-scroll{
    overflow-x:scroll;
  }
  .react-bootstrap-table th.sortable {
    cursor: pointer;
  }
  .react-bootstrap-table th .order > .dropdown > .caret {
    margin: 10px 0 10px 5px;
    color: #ccc;
  }
  .react-bootstrap-table th .order > .dropup > .caret {
    margin: 10px 0;
    color: #ccc;
  }
  .react-bootstrap-table th > .react-bootstrap-table-sort-order > .caret {
    margin: 10px 6.5px;
  }
  .react-bootstrap-table th .order-4:before {
    margin-left: 3.5px;
    content: "\2191";
    opacity: 0.4;
  }
  .react-bootstrap-table th .order-4:after {
    content: "\2193";
    opacity: 0.4;
  }
  .react-bootstrap-table th .caret-4-asc:before {
    margin-left: 3.5px;
    content: "\2191";
  }
  .react-bootstrap-table th .caret-4-asc:after {
    content: "\2193";
    opacity: 0.4;
  }
  .react-bootstrap-table th .caret-4-desc:before {
    margin-left: 3.5px;
    content: "\2191";
    opacity: 0.4;
  }
  .react-bootstrap-table th .caret-4-desc:after {
    content: "\2193";
  }
  .react-bootstrap-table th[data-row-selection] {
    width: 30px;
  }
  .react-bootstrap-table td > .selection-input-4,
  .react-bootstrap-table th > .selection-input-4 {
    margin: -4px;
  }
  .react-bootstrap-table td.react-bs-table-no-data {
    text-align: center;
  }
  .react-bootstrap-table td.react-bootstrap-table-editing-cell .animated {
    animation-fill-mode: both;
  }
  .react-bootstrap-table
    td.react-bootstrap-table-editing-cell
    .animated.bounceIn,
  .react-bootstrap-table
    td.react-bootstrap-table-editing-cell
    .animated.bounceOut {
    animation-duration: 0.75s;
  }
  .react-bootstrap-table td.react-bootstrap-table-editing-cell .animated.shake {
    animation-duration: 0.3s;
  }
  @keyframes shake {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }
    10%,
    50%,
    90% {
      transform: translate3d(-10px, 0, 0);
    }
    30%,
    70% {
      transform: translate3d(10px, 0, 0);
    }
  }
  .react-bootstrap-table td.react-bootstrap-table-editing-cell .shake {
    animation-name: shake;
  }
  @keyframes bounceIn {
    20%,
    40%,
    60%,
    80%,
    from,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
  .react-bootstrap-table td.react-bootstrap-table-editing-cell .bounceIn {
    animation-name: bounceIn;
  }
  @keyframes bounceOut {
    20% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  /*! CSS Used from: Embedded */
  .react-bootstrap-table table {
    table-layout: fixed;
  }
  .react-bootstrap-table th.sortable {
    cursor: pointer;
  }
  .react-bootstrap-table th .order > .dropdown > .caret {
    margin: 10px 0 10px 5px;
    color: #ccc;
  }
  .react-bootstrap-table th .order > .dropup > .caret {
    margin: 10px 0;
    color: #ccc;
  }
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
  }
  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  }
  .table-bordered {
    border: 1px solid #dee2e6;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #dee2e6;
  }
  .table-bordered thead th {
    border-bottom-width: 2px;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  [hidden],
  template {
    display: none;
  }
  a {
    background-color: transparent;
  }
  a:active,
  a:hover {
    outline: 0;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bold;
  }
  dfn {
    font-style: italic;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  mark {
    background: #ff0;
    color: #000;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  img {
    border: 0;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
  }
  pre {
    overflow: auto;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  button {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  input {
    line-height: normal;
  }
  input[type="checkbox"],
  input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  input[type="search"] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    border: 0;
    padding: 0;
  }
  textarea {
    overflow: auto;
  }
  optgroup {
    font-weight: bold;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
  }
  input,
  button,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  a {
    color: #337ab7;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: #23527c;
    text-decoration: underline;
  }
  a:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  figure {
    margin: 0;
  }
  img {
    vertical-align: middle;
  }
  .img-responsive {
    display: block;
    max-width: 100%;
    height: auto;
  }
  .img-rounded {
    border-radius: 6px;
  }
  .img-thumbnail {
    padding: 4px;
    line-height: 1.42857143;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    display: inline-block;
    max-width: 100%;
    height: auto;
  }
  .img-circle {
    border-radius: 50%;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .sr-only-focusable:active,
  .sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto;
  }
  [role="button"] {
    cursor: pointer;
  }
  table {
    background-color: transparent;
  }
  table col[class*="col-"] {
    position: static;
    display: table-column;
    float: none;
  }
  table td[class*="col-"],
  table th[class*="col-"] {
    position: static;
    display: table-cell;
    float: none;
  }
  caption {
    padding-top: 8px;
    padding-bottom: 8px;
    color: #777;
    text-align: left;
  }
  th {
    text-align: left;
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .table > thead > tr > th,
  .table > tbody > tr > th,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > tbody > tr > td,
  .table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  .table > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
  }
  .table > caption + thead > tr:first-child > th,
  .table > colgroup + thead > tr:first-child > th,
  .table > thead:first-child > tr:first-child > th,
  .table > caption + thead > tr:first-child > td,
  .table > colgroup + thead > tr:first-child > td,
  .table > thead:first-child > tr:first-child > td {
    border-top: 0;
  }
  .table > tbody + tbody {
    border-top: 2px solid #ddd;
  }
  .table .table {
    background-color: #fff;
  }
  .table-condensed > thead > tr > th,
  .table-condensed > tbody > tr > th,
  .table-condensed > tfoot > tr > th,
  .table-condensed > thead > tr > td,
  .table-condensed > tbody > tr > td,
  .table-condensed > tfoot > tr > td {
    padding: 5px;
  }
  .table-bordered {
    border: 1px solid #ddd;
  }
  .table-bordered > thead > tr > th,
  .table-bordered > tbody > tr > th,
  .table-bordered > tfoot > tr > th,
  .table-bordered > thead > tr > td,
  .table-bordered > tbody > tr > td,
  .table-bordered > tfoot > tr > td {
    border: 1px solid #ddd;
  }
  .table-bordered > thead > tr > th,
  .table-bordered > thead > tr > td {
    border-bottom-width: 2px;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }
  .table-hover > tbody > tr:hover {
    background-color: #f5f5f5;
  }
  .table > thead > tr > td.active,
  .table > tbody > tr > td.active,
  .table > tfoot > tr > td.active,
  .table > thead > tr > th.active,
  .table > tbody > tr > th.active,
  .table > tfoot > tr > th.active,
  .table > thead > tr.active > td,
  .table > tbody > tr.active > td,
  .table > tfoot > tr.active > td,
  .table > thead > tr.active > th,
  .table > tbody > tr.active > th,
  .table > tfoot > tr.active > th {
    background-color: #f5f5f5;
  }
  .table-hover > tbody > tr > td.active:hover,
  .table-hover > tbody > tr > th.active:hover,
  .table-hover > tbody > tr.active:hover > td,
  .table-hover > tbody > tr:hover > .active,
  .table-hover > tbody > tr.active:hover > th {
    background-color: #e8e8e8;
  }
  .table > thead > tr > td.success,
  .table > tbody > tr > td.success,
  .table > tfoot > tr > td.success,
  .table > thead > tr > th.success,
  .table > tbody > tr > th.success,
  .table > tfoot > tr > th.success,
  .table > thead > tr.success > td,
  .table > tbody > tr.success > td,
  .table > tfoot > tr.success > td,
  .table > thead > tr.success > th,
  .table > tbody > tr.success > th,
  .table > tfoot > tr.success > th {
    background-color: #dff0d8;
  }
  .table-hover > tbody > tr > td.success:hover,
  .table-hover > tbody > tr > th.success:hover,
  .table-hover > tbody > tr.success:hover > td,
  .table-hover > tbody > tr:hover > .success,
  .table-hover > tbody > tr.success:hover > th {
    background-color: #d0e9c6;
  }
  .table > thead > tr > td.info,
  .table > tbody > tr > td.info,
  .table > tfoot > tr > td.info,
  .table > thead > tr > th.info,
  .table > tbody > tr > th.info,
  .table > tfoot > tr > th.info,
  .table > thead > tr.info > td,
  .table > tbody > tr.info > td,
  .table > tfoot > tr.info > td,
  .table > thead > tr.info > th,
  .table > tbody > tr.info > th,
  .table > tfoot > tr.info > th {
    background-color: #d9edf7;
  }
  .table-hover > tbody > tr > td.info:hover,
  .table-hover > tbody > tr > th.info:hover,
  .table-hover > tbody > tr.info:hover > td,
  .table-hover > tbody > tr:hover > .info,
  .table-hover > tbody > tr.info:hover > th {
    background-color: #c4e3f3;
  }
  .table > thead > tr > td.warning,
  .table > tbody > tr > td.warning,
  .table > tfoot > tr > td.warning,
  .table > thead > tr > th.warning,
  .table > tbody > tr > th.warning,
  .table > tfoot > tr > th.warning,
  .table > thead > tr.warning > td,
  .table > tbody > tr.warning > td,
  .table > tfoot > tr.warning > td,
  .table > thead > tr.warning > th,
  .table > tbody > tr.warning > th,
  .table > tfoot > tr.warning > th {
    background-color: #fcf8e3;
  }
  .table-hover > tbody > tr > td.warning:hover,
  .table-hover > tbody > tr > th.warning:hover,
  .table-hover > tbody > tr.warning:hover > td,
  .table-hover > tbody > tr:hover > .warning,
  .table-hover > tbody > tr.warning:hover > th {
    background-color: #faf2cc;
  }
  .table > thead > tr > td.danger,
  .table > tbody > tr > td.danger,
  .table > tfoot > tr > td.danger,
  .table > thead > tr > th.danger,
  .table > tbody > tr > th.danger,
  .table > tfoot > tr > th.danger,
  .table > thead > tr.danger > td,
  .table > tbody > tr.danger > td,
  .table > tfoot > tr.danger > td,
  .table > thead > tr.danger > th,
  .table > tbody > tr.danger > th,
  .table > tfoot > tr.danger > th {
    background-color: #f2dede;
  }
  .table-hover > tbody > tr > td.danger:hover,
  .table-hover > tbody > tr > th.danger:hover,
  .table-hover > tbody > tr.danger:hover > td,
  .table-hover > tbody > tr:hover > .danger,
  .table-hover > tbody > tr.danger:hover > th {
    background-color: #ebcccc;
  }
  .table-responsive {
    min-height: 0.01%;
    overflow-x: auto;
  }
  @media screen and (max-width: 767px) {
    .table-responsive {
      width: 100%;
      margin-bottom: 15px;
      overflow-y: hidden;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      border: 1px solid #ddd;
    }
    .table-responsive > .table {
      margin-bottom: 0;
    }
    .table-responsive > .table > thead > tr > th,
    .table-responsive > .table > tbody > tr > th,
    .table-responsive > .table > tfoot > tr > th,
    .table-responsive > .table > thead > tr > td,
    .table-responsive > .table > tbody > tr > td,
    .table-responsive > .table > tfoot > tr > td {
      white-space: nowrap;
    }
    .table-responsive > .table-bordered {
      border: 0;
    }
    .table-responsive > .table-bordered > thead > tr > th:first-child,
    .table-responsive > .table-bordered > tbody > tr > th:first-child,
    .table-responsive > .table-bordered > tfoot > tr > th:first-child,
    .table-responsive > .table-bordered > thead > tr > td:first-child,
    .table-responsive > .table-bordered > tbody > tr > td:first-child,
    .table-responsive > .table-bordered > tfoot > tr > td:first-child {
      border-left: 0;
    }
    .table-responsive > .table-bordered > thead > tr > th:last-child,
    .table-responsive > .table-bordered > tbody > tr > th:last-child,
    .table-responsive > .table-bordered > tfoot > tr > th:last-child,
    .table-responsive > .table-bordered > thead > tr > td:last-child,
    .table-responsive > .table-bordered > tbody > tr > td:last-child,
    .table-responsive > .table-bordered > tfoot > tr > td:last-child {
      border-right: 0;
    }
    .table-responsive > .table-bordered > tbody > tr:last-child > th,
    .table-responsive > .table-bordered > tfoot > tr:last-child > th,
    .table-responsive > .table-bordered > tbody > tr:last-child > td,
    .table-responsive > .table-bordered > tfoot > tr:last-child > td {
      border-bottom: 0;
    }
  }
  .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .btn:focus,
  .btn:active:focus,
  .btn.active:focus,
  .btn.focus,
  .btn:active.focus,
  .btn.active.focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  .btn:hover,
  .btn:focus,
  .btn.focus {
    color: #333;
    text-decoration: none;
  }
  .btn:active,
  .btn.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .btn.disabled,
  .btn[disabled],
  fieldset[disabled] .btn {
    cursor: not-allowed;
    filter: alpha(opacity=65);
    opacity: 0.65;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  a.btn.disabled,
  fieldset[disabled] a.btn {
    pointer-events: none;
  }
  .btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
  }
  .btn-default:focus,
  .btn-default.focus {
    color: #333;
    background-color: #e6e6e6;
    border-color: #8c8c8c;
  }
  .btn-default:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
  .btn-default:active,
  .btn-default.active,
  .open > .dropdown-toggle.btn-default {
    color: #333;
    background-color: #e6e6e6;
    background-image: none;
    border-color: #adadad;
  }
  .btn-default:active:hover,
  .btn-default.active:hover,
  .open > .dropdown-toggle.btn-default:hover,
  .btn-default:active:focus,
  .btn-default.active:focus,
  .open > .dropdown-toggle.btn-default:focus,
  .btn-default:active.focus,
  .btn-default.active.focus,
  .open > .dropdown-toggle.btn-default.focus {
    color: #333;
    background-color: #d4d4d4;
    border-color: #8c8c8c;
  }
  .btn-default.disabled:hover,
  .btn-default[disabled]:hover,
  fieldset[disabled] .btn-default:hover,
  .btn-default.disabled:focus,
  .btn-default[disabled]:focus,
  fieldset[disabled] .btn-default:focus,
  .btn-default.disabled.focus,
  .btn-default[disabled].focus,
  fieldset[disabled] .btn-default.focus {
    background-color: #fff;
    border-color: #ccc;
  }
  .btn-default .badge {
    color: #fff;
    background-color: #333;
  }
  .btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
  }
  .btn-primary:focus,
  .btn-primary.focus {
    color: #fff;
    background-color: #286090;
    border-color: #122b40;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
  }
  .btn-primary:active,
  .btn-primary.active,
  .open > .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #286090;
    background-image: none;
    border-color: #204d74;
  }
  .btn-primary:active:hover,
  .btn-primary.active:hover,
  .open > .dropdown-toggle.btn-primary:hover,
  .btn-primary:active:focus,
  .btn-primary.active:focus,
  .open > .dropdown-toggle.btn-primary:focus,
  .btn-primary:active.focus,
  .btn-primary.active.focus,
  .open > .dropdown-toggle.btn-primary.focus {
    color: #fff;
    background-color: #204d74;
    border-color: #122b40;
  }
  .btn-primary.disabled:hover,
  .btn-primary[disabled]:hover,
  fieldset[disabled] .btn-primary:hover,
  .btn-primary.disabled:focus,
  .btn-primary[disabled]:focus,
  fieldset[disabled] .btn-primary:focus,
  .btn-primary.disabled.focus,
  .btn-primary[disabled].focus,
  fieldset[disabled] .btn-primary.focus {
    background-color: #337ab7;
    border-color: #2e6da4;
  }
  .btn-primary .badge {
    color: #337ab7;
    background-color: #fff;
  }
  .btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }
  .btn-success:focus,
  .btn-success.focus {
    color: #fff;
    background-color: #449d44;
    border-color: #255625;
  }
  .btn-success:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
  }
  .btn-success:active,
  .btn-success.active,
  .open > .dropdown-toggle.btn-success {
    color: #fff;
    background-color: #449d44;
    background-image: none;
    border-color: #398439;
  }
  .btn-success:active:hover,
  .btn-success.active:hover,
  .open > .dropdown-toggle.btn-success:hover,
  .btn-success:active:focus,
  .btn-success.active:focus,
  .open > .dropdown-toggle.btn-success:focus,
  .btn-success:active.focus,
  .btn-success.active.focus,
  .open > .dropdown-toggle.btn-success.focus {
    color: #fff;
    background-color: #398439;
    border-color: #255625;
  }
  .btn-success.disabled:hover,
  .btn-success[disabled]:hover,
  fieldset[disabled] .btn-success:hover,
  .btn-success.disabled:focus,
  .btn-success[disabled]:focus,
  fieldset[disabled] .btn-success:focus,
  .btn-success.disabled.focus,
  .btn-success[disabled].focus,
  fieldset[disabled] .btn-success.focus {
    background-color: #5cb85c;
    border-color: #4cae4c;
  }
  .btn-success .badge {
    color: #5cb85c;
    background-color: #fff;
  }
  .btn-info {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;
  }
  .btn-info:focus,
  .btn-info.focus {
    color: #fff;
    background-color: #31b0d5;
    border-color: #1b6d85;
  }
  .btn-info:hover {
    color: #fff;
    background-color: #31b0d5;
    border-color: #269abc;
  }
  .btn-info:active,
  .btn-info.active,
  .open > .dropdown-toggle.btn-info {
    color: #fff;
    background-color: #31b0d5;
    background-image: none;
    border-color: #269abc;
  }
  .btn-info:active:hover,
  .btn-info.active:hover,
  .open > .dropdown-toggle.btn-info:hover,
  .btn-info:active:focus,
  .btn-info.active:focus,
  .open > .dropdown-toggle.btn-info:focus,
  .btn-info:active.focus,
  .btn-info.active.focus,
  .open > .dropdown-toggle.btn-info.focus {
    color: #fff;
    background-color: #269abc;
    border-color: #1b6d85;
  }
  .btn-info.disabled:hover,
  .btn-info[disabled]:hover,
  fieldset[disabled] .btn-info:hover,
  .btn-info.disabled:focus,
  .btn-info[disabled]:focus,
  fieldset[disabled] .btn-info:focus,
  .btn-info.disabled.focus,
  .btn-info[disabled].focus,
  fieldset[disabled] .btn-info.focus {
    background-color: #5bc0de;
    border-color: #46b8da;
  }
  .btn-info .badge {
    color: #5bc0de;
    background-color: #fff;
  }
  .btn-warning {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;
  }
  .btn-warning:focus,
  .btn-warning.focus {
    color: #fff;
    background-color: #ec971f;
    border-color: #985f0d;
  }
  .btn-warning:hover {
    color: #fff;
    background-color: #ec971f;
    border-color: #d58512;
  }
  .btn-warning:active,
  .btn-warning.active,
  .open > .dropdown-toggle.btn-warning {
    color: #fff;
    background-color: #ec971f;
    background-image: none;
    border-color: #d58512;
  }
  .btn-warning:active:hover,
  .btn-warning.active:hover,
  .open > .dropdown-toggle.btn-warning:hover,
  .btn-warning:active:focus,
  .btn-warning.active:focus,
  .open > .dropdown-toggle.btn-warning:focus,
  .btn-warning:active.focus,
  .btn-warning.active.focus,
  .open > .dropdown-toggle.btn-warning.focus {
    color: #fff;
    background-color: #d58512;
    border-color: #985f0d;
  }
  .btn-warning.disabled:hover,
  .btn-warning[disabled]:hover,
  fieldset[disabled] .btn-warning:hover,
  .btn-warning.disabled:focus,
  .btn-warning[disabled]:focus,
  fieldset[disabled] .btn-warning:focus,
  .btn-warning.disabled.focus,
  .btn-warning[disabled].focus,
  fieldset[disabled] .btn-warning.focus {
    background-color: #f0ad4e;
    border-color: #eea236;
  }
  .btn-warning .badge {
    color: #f0ad4e;
    background-color: #fff;
  }
  .btn-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
  }
  .btn-danger:focus,
  .btn-danger.focus {
    color: #fff;
    background-color: #c9302c;
    border-color: #761c19;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
  }
  .btn-danger:active,
  .btn-danger.active,
  .open > .dropdown-toggle.btn-danger {
    color: #fff;
    background-color: #c9302c;
    background-image: none;
    border-color: #ac2925;
  }
  .btn-danger:active:hover,
  .btn-danger.active:hover,
  .open > .dropdown-toggle.btn-danger:hover,
  .btn-danger:active:focus,
  .btn-danger.active:focus,
  .open > .dropdown-toggle.btn-danger:focus,
  .btn-danger:active.focus,
  .btn-danger.active.focus,
  .open > .dropdown-toggle.btn-danger.focus {
    color: #fff;
    background-color: #ac2925;
    border-color: #761c19;
  }
  .btn-danger.disabled:hover,
  .btn-danger[disabled]:hover,
  fieldset[disabled] .btn-danger:hover,
  .btn-danger.disabled:focus,
  .btn-danger[disabled]:focus,
  fieldset[disabled] .btn-danger:focus,
  .btn-danger.disabled.focus,
  .btn-danger[disabled].focus,
  fieldset[disabled] .btn-danger.focus {
    background-color: #d9534f;
    border-color: #d43f3a;
  }
  .btn-danger .badge {
    color: #d9534f;
    background-color: #fff;
  }
  .btn-link {
    font-weight: 400;
    color: #337ab7;
    border-radius: 0;
  }
  .btn-link,
  .btn-link:active,
  .btn-link.active,
  .btn-link[disabled],
  fieldset[disabled] .btn-link {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .btn-link,
  .btn-link:hover,
  .btn-link:focus,
  .btn-link:active {
    border-color: transparent;
  }
  .btn-link:hover,
  .btn-link:focus {
    color: #23527c;
    text-decoration: underline;
    background-color: transparent;
  }
  .btn-link[disabled]:hover,
  fieldset[disabled] .btn-link:hover,
  .btn-link[disabled]:focus,
  fieldset[disabled] .btn-link:focus {
    color: #777;
    text-decoration: none;
  }
  .btn-lg {
    //padding: 10px 16px;
    width:100%;
    font-size: 1rem;
    line-height: 1.3333333;
    border-radius: 6px;
  }
  .btn-sm {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
  }
  .btn-xs {
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
  }
  .btn-block {
    display: block;
    width: 100%;
  }
  .btn-block + .btn-block {
    margin-top: 5px;
  }
  input[type="submit"].btn-block,
  input[type="reset"].btn-block,
  input[type="button"].btn-block {
    width: 100%;
  }
  .fade {
    opacity: 0;
    -webkit-transition: opacity 0.15s linear;
    -o-transition: opacity 0.15s linear;
    transition: opacity 0.15s linear;
  }
  .fade.in {
    opacity: 1;
  }
  .collapse {
    display: none;
  }
  .collapse.in {
    display: block;
  }
  tr.collapse.in {
    display: table-row;
  }
  tbody.collapse.in {
    display: table-row-group;
  }
  .collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition-property: height, visibility;
    -o-transition-property: height, visibility;
    transition-property: height, visibility;
    -webkit-transition-duration: 0.35s;
    -o-transition-duration: 0.35s;
    transition-duration: 0.35s;
    -webkit-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
  }
  .caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid \9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }
  .dropup,
  .dropdown {
    position: relative;
  }
  .dropdown-toggle:focus {
    outline: 0;
  }
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  }
  .dropdown-menu.pull-right {
    right: 0;
    left: auto;
  }
  .dropdown-menu .divider {
    height: 1px;
    margin: 9px 0;
    overflow: hidden;
    background-color: #e5e5e5;
  }
  .dropdown-menu > li > a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
  }
  .dropdown-menu > li > a:hover,
  .dropdown-menu > li > a:focus {
    color: #262626;
    text-decoration: none;
    background-color: #f5f5f5;
  }
  .dropdown-menu > .active > a,
  .dropdown-menu > .active > a:hover,
  .dropdown-menu > .active > a:focus {
    color: #fff;
    text-decoration: none;
    background-color: #337ab7;
    outline: 0;
  }
  .dropdown-menu > .disabled > a,
  .dropdown-menu > .disabled > a:hover,
  .dropdown-menu > .disabled > a:focus {
    color: #777;
  }
  .dropdown-menu > .disabled > a:hover,
  .dropdown-menu > .disabled > a:focus {
    text-decoration: none;
    cursor: not-allowed;
    background-color: transparent;
    background-image: none;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  }
  .open > .dropdown-menu {
    display: block;
  }
  .open > a {
    outline: 0;
  }
  .dropdown-menu-right {
    right: 0;
    left: auto;
  }
  .dropdown-menu-left {
    right: auto;
    left: 0;
  }
  .dropdown-header {
    display: block;
    padding: 3px 20px;
    font-size: 12px;
    line-height: 1.42857143;
    color: #777;
    white-space: nowrap;
  }
  .dropdown-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 990;
  }
  .pull-right > .dropdown-menu {
    right: 0;
    left: auto;
  }
  .dropup .caret,
  .navbar-fixed-bottom .dropdown .caret {
    content: "";
    border-top: 0;
    border-bottom: 4px dashed;
    border-bottom: 4px solid \9;
  }
  .dropup .dropdown-menu,
  .navbar-fixed-bottom .dropdown .dropdown-menu {
    top: auto;
    bottom: 100%;
    margin-bottom: 2px;
  }
  @media (min-width: 768px) {
    .navbar-right .dropdown-menu {
      right: 0;
      left: auto;
    }
    .navbar-right .dropdown-menu-left {
      right: auto;
      left: 0;
    }
  }
  .pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
  }
  .pagination > li {
    display: inline;
  }
  .pagination > li > a,
  .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  .pagination > li > a:hover,
  .pagination > li > span:hover,
  .pagination > li > a:focus,
  .pagination > li > span:focus {
    z-index: 2;
    color: #23527c;
    background-color: #eee;
    border-color: #ddd;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
  }
  .pagination > .disabled > span,
  .pagination > .disabled > span:hover,
  .pagination > .disabled > span:focus,
  .pagination > .disabled > a,
  .pagination > .disabled > a:hover,
  .pagination > .disabled > a:focus {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
  }
  .pagination-lg > li > a,
  .pagination-lg > li > span {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
  }
  .pagination-lg > li:first-child > a,
  .pagination-lg > li:first-child > span {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .pagination-lg > li:last-child > a,
  .pagination-lg > li:last-child > span {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .pagination-sm > li > a,
  .pagination-sm > li > span {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
  }
  .pagination-sm > li:first-child > a,
  .pagination-sm > li:first-child > span {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .pagination-sm > li:last-child > a,
  .pagination-sm > li:last-child > span {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .pager {
    padding-left: 0;
    margin: 20px 0;
    text-align: center;
    list-style: none;
  }
  .pager li {
    display: inline;
  }
  .pager li > a,
  .pager li > span {
    display: inline-block;
    padding: 5px 14px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 15px;
  }
  .pager li > a:hover,
  .pager li > a:focus {
    text-decoration: none;
    background-color: #eee;
  }
  .pager .next > a,
  .pager .next > span {
    float: right;
  }
  .pager .previous > a,
  .pager .previous > span {
    float: left;
  }
  .pager .disabled > a,
  .pager .disabled > a:hover,
  .pager .disabled > a:focus,
  .pager .disabled > span {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
  }
  .tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42857143;
    line-break: auto;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    white-space: normal;
    font-size: 12px;
    filter: alpha(opacity=0);
    opacity: 0;
  }
  .tooltip.in {
    filter: alpha(opacity=90);
    opacity: 0.9;
  }
  .tooltip.top {
    padding: 5px 0;
    margin-top: -3px;
  }
  .tooltip.right {
    padding: 0 5px;
    margin-left: 3px;
  }
  .tooltip.bottom {
    padding: 5px 0;
    margin-top: 3px;
  }
  .tooltip.left {
    padding: 0 5px;
    margin-left: -3px;
  }
  .tooltip.top .tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000;
  }
  .tooltip.top-left .tooltip-arrow {
    right: 5px;
    bottom: 0;
    margin-bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000;
  }
  .tooltip.top-right .tooltip-arrow {
    bottom: 0;
    left: 5px;
    margin-bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000;
  }
  .tooltip.right .tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #000;
  }
  .tooltip.left .tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #000;
  }
  .tooltip.bottom .tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000;
  }
  .tooltip.bottom-left .tooltip-arrow {
    top: 0;
    right: 5px;
    margin-top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000;
  }
  .tooltip.bottom-right .tooltip-arrow {
    top: 0;
    left: 5px;
    margin-top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000;
  }
  .tooltip-inner {
    max-width: 200px;
    padding: 3px 8px;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 4px;
  }
  .tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .clearfix:before,
  .clearfix:after,
  .pager:before,
  .pager:after {
    display: table;
    content: " ";
  }
  .clearfix:after,
  .pager:after {
    clear: both;
  }
  .center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .pull-right {
    float: right !important;
  }
  .pull-left {
    float: left !important;
  }
  .hide {
    display: none !important;
  }
  .show {
    display: block !important;
  }
  .invisible {
    visibility: hidden;
  }
  .text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }
  .hidden {
    display: none !important;
  }
  .affix {
    position: fixed;
  }
  @-ms-viewport {
    width: device-width;
  }
  .visible-xs,
  .visible-sm,
  .visible-md,
  .visible-lg {
    display: none !important;
  }
  .visible-xs-block,
  .visible-xs-inline,
  .visible-xs-inline-block,
  .visible-sm-block,
  .visible-sm-inline,
  .visible-sm-inline-block,
  .visible-md-block,
  .visible-md-inline,
  .visible-md-inline-block,
  .visible-lg-block,
  .visible-lg-inline,
  .visible-lg-inline-block {
    display: none !important;
  }
  @media (max-width: 767px) {
    .visible-xs {
      display: block !important;
    }
    table.visible-xs {
      display: table !important;
    }
    tr.visible-xs {
      display: table-row !important;
    }
    th.visible-xs,
    td.visible-xs {
      display: table-cell !important;
    }
  }
  @media (max-width: 767px) {
    .visible-xs-block {
      display: block !important;
    }
  }
  @media (max-width: 767px) {
    .visible-xs-inline {
      display: inline !important;
    }
  }
  @media (max-width: 767px) {
    .visible-xs-inline-block {
      display: inline-block !important;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .visible-sm {
      display: block !important;
    }
    table.visible-sm {
      display: table !important;
    }
    tr.visible-sm {
      display: table-row !important;
    }
    th.visible-sm,
    td.visible-sm {
      display: table-cell !important;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .visible-sm-block {
      display: block !important;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .visible-sm-inline {
      display: inline !important;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .visible-sm-inline-block {
      display: inline-block !important;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .visible-md {
      display: block !important;
    }
    table.visible-md {
      display: table !important;
    }
    tr.visible-md {
      display: table-row !important;
    }
    th.visible-md,
    td.visible-md {
      display: table-cell !important;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .visible-md-block {
      display: block !important;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .visible-md-inline {
      display: inline !important;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .visible-md-inline-block {
      display: inline-block !important;
    }
  }
  @media (min-width: 1200px) {
    .visible-lg {
      display: block !important;
    }
    table.visible-lg {
      display: table !important;
    }
    tr.visible-lg {
      display: table-row !important;
    }
    th.visible-lg,
    td.visible-lg {
      display: table-cell !important;
    }
  }
  @media (min-width: 1200px) {
    .visible-lg-block {
      display: block !important;
    }
  }
  @media (min-width: 1200px) {
    .visible-lg-inline {
      display: inline !important;
    }
  }
  @media (min-width: 1200px) {
    .visible-lg-inline-block {
      display: inline-block !important;
    }
  }
  @media (max-width: 767px) {
    .hidden-xs {
      display: none !important;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .hidden-sm {
      display: none !important;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .hidden-md {
      display: none !important;
    }
  }
  @media (min-width: 1200px) {
    .hidden-lg {
      display: none !important;
    }
  }
  .visible-print {
    display: none !important;
  }
  @media print {
    .visible-print {
      display: block !important;
    }
    table.visible-print {
      display: table !important;
    }
    tr.visible-print {
      display: table-row !important;
    }
    th.visible-print,
    td.visible-print {
      display: table-cell !important;
    }
  }
  .visible-print-block {
    display: none !important;
  }
  @media print {
    .visible-print-block {
      display: block !important;
    }
  }
  .visible-print-inline {
    display: none !important;
  }
  @media print {
    .visible-print-inline {
      display: inline !important;
    }
  }
  .visible-print-inline-block {
    display: none !important;
  }
  @media print {
    .visible-print-inline-block {
      display: inline-block !important;
    }
  }
  @media print {
    .hidden-print {
      display: none !important;
    }
  }

  .col-md-6.col-xs-6.col-sm-6.col-lg-6 {
    width: 50%;
    float: left;
    position: relative;
  }

  .react-bootstrap-table-pagination-list.col-md-6.col-xs-6.col-sm-6.col-lg-6 {
    width: 50%;
    float: right;
    position: relative;
    text-align: end;
  }

  .pagination.react-bootstrap-table-page-btns-ul {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .react-bootstrap-table-pagination-total{
    margin-left:10px;
  }
  .react-bootstrap-table-pagination{
    margin-top:1rem;
  }
`;
