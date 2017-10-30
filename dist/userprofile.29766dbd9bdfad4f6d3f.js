webpackJsonp([7],{1253:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={namespace:"profile",state:{},subscriptions:{setup:function(e){e.dispatch,e.history}},effects:{},reducers:{}},e.exports=t.default},1274:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),c=a(2),d=r(c),p=(a(119),a(13)),f=r(p),m=a(51),h=a(1692),_=r(h),b=a(2112),g=m.Form.Item,w=m.Select.Option,v=m.AutoComplete.Option,x=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],y=function(e){function t(e,a){l(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return r.handleSubmit=function(e){e.preventDefault(),r.props.form.validateFieldsAndScroll(function(e,t){e||console.log("Received values of form: ",t)})},r.handleReset=function(){r.props.form.resetFields()},r.handleConfirmBlur=function(e){var t=e.target.value;r.setState({confirmDirty:r.state.confirmDirty||!!t})},r.checkPassword=function(e,t,a){var n=r.props.form;t&&t!==n.getFieldValue("password")?a("Two passwords that you enter is inconsistent!"):a()},r.checkConfirm=function(e,t,a){var n=r.props.form;t&&r.state.confirmDirty&&n.validateFields(["confirm"],{force:!0}),a()},r.handleWebsiteChange=function(e){var t=void 0;t=e?[".com",".org",".net"].map(function(t){return""+e+t}):[],r.setState({autoCompleteResult:t})},r.state={confirmDirty:!1,autoCompleteResult:[]},r}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.autoCompleteResult,a={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}},r={wrapperCol:{xs:{span:24,offset:0},sm:{span:14,offset:6}}},l=e("prefix",{initialValue:"86"})(d.default.createElement(m.Select,{style:{width:60}},d.default.createElement(w,{value:"86"},"+86"),d.default.createElement(w,{value:"87"},"+87"))),o=t.map(function(e){return d.default.createElement(v,{key:e},e)});return d.default.createElement("div",null,d.default.createElement(m.Row,{className:_.default.showcase},d.default.createElement(m.Col,{span:15},d.default.createElement(m.Card,{bordered:!1,noHovering:!0,title:d.default.createElement("div",{className:(0,f.default)(_.default["card-header"],n({},_.default.pink,!0))},d.default.createElement("h4",null,d.default.createElement(m.Icon,{type:"user"})))},d.default.createElement(m.Form,{onSubmit:this.handleSubmit},d.default.createElement(g,s({},a,{label:"E-mail"}),e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(d.default.createElement(m.Input,null))),d.default.createElement(g,s({},a,{label:"Password"}),e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.checkConfirm}]})(d.default.createElement(m.Input,{type:"password"}))),d.default.createElement(g,s({},a,{label:"Confirm Password"}),e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.checkPassword}]})(d.default.createElement(m.Input,{type:"password",onBlur:this.handleConfirmBlur}))),d.default.createElement(g,s({},a,{label:d.default.createElement("span",null,"Nickname\xa0",d.default.createElement(m.Tooltip,{title:"What do you want other to call you?"},d.default.createElement(m.Icon,{type:"question-circle-o"})))}),e("nickname",{rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]})(d.default.createElement(m.Input,null))),d.default.createElement(g,s({},a,{label:"Habitual Residence"}),e("residence",{initialValue:["zhejiang","hangzhou","xihu"],rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}]})(d.default.createElement(m.Cascader,{options:x}))),d.default.createElement(g,s({},a,{label:"Phone Number"}),e("phone",{rules:[{required:!0,message:"Please input your phone number!"}]})(d.default.createElement(m.Input,{addonBefore:l,style:{width:"100%"}}))),d.default.createElement(g,s({},a,{label:"Website"}),e("website",{rules:[{required:!0,message:"Please input website!"}]})(d.default.createElement(m.AutoComplete,{dataSource:o,onChange:this.handleWebsiteChange,placeholder:"website"},d.default.createElement(m.Input,null)))),d.default.createElement(g,s({},r,{style:{marginBottom:8}}),e("agreement",{valuePropName:"checked"})(d.default.createElement(m.Checkbox,null,"I have read the ",d.default.createElement("a",{href:""},"agreement")))),d.default.createElement(g,r,d.default.createElement(m.Button,{type:"primary",htmlType:"submit"},"Update Profile")," ",d.default.createElement(m.Button,{type:"primary",style:{marginLeft:8},onClick:this.handleReset},"Reset"))))),d.default.createElement(m.Col,{span:1}),d.default.createElement(m.Col,{span:8},d.default.createElement(m.Card,{bordered:!1,noHovering:!0,title:d.default.createElement("div",{className:_.default["card-avatar"]},d.default.createElement("a",null,d.default.createElement("img",{className:_.default.img,src:b})))},d.default.createElement("div",{className:_.default["card-content"]},d.default.createElement("h6",null,"CEO / Co-Founder"),d.default.createElement("h4",null,"Alec Thompson"),d.default.createElement("p",null,"Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."),d.default.createElement("a",null,d.default.createElement(m.Button,{type:"primary"},"FOLLOW")))))))}}]),t}(d.default.Component),E=m.Form.create()(y);t.default=E,e.exports=t.default},1559:function(e,t,a){t=e.exports=a(59)(void 0),t.push([e.id,".showcase___3hwTN{margin-top:30px;padding:5px}.showcase___3hwTN .ant-card{border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.14)}.showcase___3hwTN .ant-card-head{border-bottom:0;border-radius:6px}.showcase___3hwTN .ant-card-head-title{overflow:visible!important}.showcase___3hwTN .card-header___uoGvh{color:#fff;border-radius:3px;position:relative;top:-20px;display:inline-block;float:left;text-align:center;min-width:90px}.showcase___3hwTN .card-header___uoGvh.pink___15SqJ{background:linear-gradient(60deg,#ec407a,#d81b60);box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(233,30,99,.4)}.showcase___3hwTN .card-header___uoGvh h4{color:#fff;font-size:30px;padding:10px}.showcase___3hwTN .card-avatar___oaJvT{max-width:130px;max-height:130px;margin:-50px auto 0;border-radius:50%;overflow:hidden;box-shadow:0 10px 30px -12px rgba(0,0,0,.42),0 4px 25px 0 rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.showcase___3hwTN .card-avatar___oaJvT .img___5tGvQ{width:100%;height:auto}.showcase___3hwTN .card-content___1I16N{margin-top:15px;padding:15px 20px;position:relative;text-align:center}.showcase___3hwTN .card-content___1I16N h6{color:#999!important;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:300;line-height:1.5em}.showcase___3hwTN .card-content___1I16N h4{margin-top:0;margin-bottom:3px;color:#3c4858!important}.showcase___3hwTN .card-content___1I16N p{color:#999!important}.showcase___3hwTN button{color:#fff;height:45px;margin-top:20px;background:linear-gradient(60deg,#ec407a,#d81b60);box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(233,30,99,.4);border:0;text-transform:uppercase}",""]),t.locals={showcase:"showcase___3hwTN","card-header":"card-header___uoGvh",pink:"pink___15SqJ","card-avatar":"card-avatar___oaJvT",img:"img___5tGvQ","card-content":"card-content___1I16N"}},1692:function(e,t,a){var r=a(1559);"string"==typeof r&&(r=[[e.id,r,""]]);a(66)(r,{});r.locals&&(e.exports=r.locals)},2112:function(e,t,a){e.exports=a.p+"static/marc.aba54d65.jpg"}});