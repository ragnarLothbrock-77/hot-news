"use strict";(self.webpackChunkhot_news=self.webpackChunkhot_news||[]).push([[434],{"./src/pages/Main/ui/Main.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Main_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./src/app/styles/themes/dark.theme.scss"),__webpack_require__("./src/app/styles/themes/light.theme.scss");var ThemeDecorator=__webpack_require__("./src/shared/config/storybookDecorators/ThemeDecorator.tsx"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Main_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Main/ui/Main.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Main_module.A,options);let ui_Main_module=Main_module.A&&Main_module.A.locals?Main_module.A.locals:void 0;var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ErrorHandleButton=function(){var t=(0,es.Bd)().t,_useState=_sliced_to_array((0,react.useState)(!1),2),error=_useState[0],setError=_useState[1];return(0,react.useEffect)(function(){if(error)throw Error()},[error]),(0,jsx_runtime.jsx)(Button.$,{variant:Button.A.REGULLAR,isRegullarActive:!0,onClick:function(){setError(!0)},children:t("Throw synthetic error")})},Main=function(props){var className=props.className,t=(0,es.Bd)().t;return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.cn)(ui_Main_module.main,{},[className]),children:[(0,jsx_runtime.jsx)(ErrorHandleButton,{}),(0,jsx_runtime.jsx)("span",{children:t("Main Page")})]})};try{Main.displayName="Main",Main.__docgenInfo={description:"",displayName:"Main",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/Main/ui/Main.tsx#Main"]={docgenInfo:Main.__docgenInfo,name:"Main",path:"src/pages/Main/ui/Main.tsx#Main"})}catch(__react_docgen_typescript_loader_error){}let Main_stories={title:"page/Main",component:Main,tags:["autodocs"],args:{}};var Light={args:{}},Dark={args:{},decorators:[function(Story){return(0,jsx_runtime.jsx)(ThemeDecorator.n,{theme:ThemeProvider.bx.DARK,children:(0,jsx_runtime.jsx)(Story,{})})}]};Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [Story => <ThemeDecorator theme={AppTheme.DARK}>\n        <Story />\n      </ThemeDecorator>]\n}",...Dark.parameters?.docs?.source}}};let __namedExportsOrder=["Light","Dark"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Main/ui/Main.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-pages-Main-ui--Main-module__main{display:flex;flex-direction:column;gap:30px;text-align:center}","",{version:3,sources:["webpack://./src/pages/Main/ui/Main.module.scss"],names:[],mappings:"AAAA,sCACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,iBAAA",sourcesContent:[".main {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  text-align: center;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={main:"src-pages-Main-ui--Main-module__main"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);