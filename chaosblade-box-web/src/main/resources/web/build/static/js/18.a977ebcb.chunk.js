(this["webpackJsonpchaos-platform-fe"]=this["webpackJsonpchaos-platform-fe"]||[]).push([[18],{589:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(117),i=n(11),r=function(e,t,n,r){return{page:e,pageSize:t,showTotal:function(e,t){return Object(i.jsx)(a.a,{id:"page.pagination.total",values:{total:"".concat(e)}})},current:e,total:n,onChange:r}}},633:function(e,t,n){e.exports={stepTab:"Creating_stepTab__3BMO7",stepContent:"Creating_stepContent__P1QJu",stepMachineContent:"Creating_stepMachineContent__302PH",step:"Creating_step__1DPKH","fade-out":"Creating_fade-out__3dSyZ","fade-in":"Creating_fade-in__38FKr",stepsAction:"Creating_stepsAction__3OWNS",stepLayout:"Creating_stepLayout__2bADC",experimentHeader:"Creating_experimentHeader__M0RKZ",stepCardSelected:"Creating_stepCardSelected__3goYs",stepCardNoSelected:"Creating_stepCardNoSelected__YM1kw"}},789:function(e,t,n){"use strict";n.r(t);var a=n(55),i=(n(297),n(119)),r=(n(298),n(81)),c=(n(423),n(183)),s=n(67),o=n(68),l=n(70),d=n(69),p=(n(420),n(271)),m=n(1),u=n.n(m),g=n(117),h=(n(644),n(646)),j=n(80),b=(n(296),n(130)),f=(n(590),n(591)),x=n(154),O=(n(680),n(678)),y=n(633),S=n.n(y),v=n(12),C=(n(421),n(303)),E=(n(586),n(587)),N=(n(594),n(588)),I=(n(674),n(679)),R=(n(307),n(124)),k=(n(428),n(274)),F=n(309),P=n(15),M=n.n(P),T=n(24),_=n(589),A=n(11),D=k.a.TreeNode,z=R.a.Sider,K=R.a.Content,w=R.a.Footer,q={labelCol:{span:8},wrapperCol:{span:12}},H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).scenarioForm=u.a.createRef(),a.onCategorySelect=function(e){var t=a.props,n=t.getScenariosPageable,i=t.dimension,r=t.onScenarioCategoryChanged,c=t.scenarioCategoryIdSelected,s=t.onScenarioChanged,o=t.page,l=t.pageSize,d=e[0];s(null),d!==c&&(r({categoryId:d}),n({categoryId:d,scopeType:i,status:F.a.STATUS_PUBLISH.code,page:o,pageSize:l}))},a.onScenarioSelect=function(e){var t=a.props,n=t.getScenarioById,i=t.machinesSelected;n({scenarioId:e,dimension:t.dimension,machines:i})},a.updateScenarioSelected=function(e){if(!M.a.isEmpty(e)){var t=[];M.a.forEach(e,(function(e,n){return t.push({name:n,value:e})}));var n=a.props,i=n.scenarioSelected,r=n.scenarioCategoryIdSelected,c=n.onScenarioChanged;i.parameters=t,i.categoryIds=[r],c({scenario:i})}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getScenarioCategories,n=e.event,a=e.dimension,i=e.scenarioSelectedFromExperiment,r=e.scenarioCategoryIdSelected;n(this),t({dimension:a,scenarioCategoryIdSelected:r}),null!==i&&this.onScenarioSelect(i.scenarioId)}},{key:"scenarioCategoryTreeRender",value:function(e){var t=this;return M.a.isEmpty(e)?Object(A.jsx)("span",{children:"\u6682\u65e0\u6570\u636e"}):e.map((function(e){return e.children?Object(A.jsx)(D,{title:e.name,dataRef:e,children:t.scenarioCategoryTreeRender(e.children)},e.categoryId):Object(A.jsx)(D,{title:e.name,dataRef:e},e.categoryId)}))}},{key:"onFinish",value:function(e){var t=this,n=this.props.handleError;this.scenarioForm.current?this.scenarioForm.current.validateFields().then((function(n){e(),t.updateScenarioSelected(n)})).catch((function(e){var t=e.errorFields[0].errors,a=t?t[0]:T.a.PARAMETER_ERROR.message;n(T.a.PARAMETER_ERROR.code,a)})):n(T.a.PARAMETER_ERROR.code,"\u5fc5\u987b\u9009\u62e9\u4e00\u4e2a\u573a\u666f")}},{key:"getScenarioParameterValues",value:function(){var e=this.props.scenarioSelected;if(null===e)return{};if(M.a.isEmpty(e.parameters))return{};var t={};return e.parameters.map((function(e){t[e.name]=e.value})),t}},{key:"getScenariosList",value:function(){var e=this.props,t=e.scenarioSelected,n=e.categories,a=e.dimension,i=e.page,r=e.pageSize,c=e.getScenariosPageable;if(""===e.scenarioCategoryIdSelected&&0!==n.length){var s="";if(null===t){s=n[0].categoryId;for(var o=0;o<n.length;o++)if(""!==n[o].parentId){s=n[o].categoryId;break}}else s=t.categoryId;c({categoryId:s,scopeType:a,status:F.a.STATUS_PUBLISH.code,page:i,pageSize:r})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.categories,i=t.scenarios,r=t.loading,s=t.scenarioSelected,o=t.getScenariosPageable,l=t.page,d=t.pageSize,p=t.dimension,m=t.total,u=t.scenarioCategoryIdSelected;return Object(A.jsx)(R.a,{children:Object(A.jsx)(C.a,{spinning:r,children:Object(A.jsxs)(R.a,{className:S.a.stepLayout,children:[Object(A.jsx)(z,{children:n.length>0&&Object(A.jsx)(k.a,{defaultExpandAll:!0,defaultSelectedKeys:[u],onSelect:this.onCategorySelect.bind(this),children:this.scenarioCategoryTreeRender(n)})}),Object(A.jsxs)(R.a,{children:[Object(A.jsx)(K,{children:Object(A.jsx)(I.b,{grid:{gutter:8,column:4},dataSource:i,pagination:Object(_.a)(l,d,m,(function(){o({categoryId:u,scopeType:p,status:F.a.STATUS_PUBLISH.code,page:l,pageSize:d})})),renderItem:function(t){return Object(A.jsx)(I.b.Item,{children:Object(A.jsx)(c.a,{className:s&&t.scenarioId===s.scenarioId?S.a.stepCardSelected:S.a.stepCardNoSelected,hoverable:!0,onClick:e.onScenarioSelect.bind(e,t.scenarioId),style:{textAlign:"center",height:72},title:null,children:t.name})})}})}),Object(A.jsx)(f.a,{dashed:!0}),Object(A.jsx)(w,{children:Object(A.jsx)(c.a,{title:Object(A.jsx)("span",{children:"\u573a\u666f\u53c2\u6570"}),children:M.a.isEmpty(s)?Object(A.jsx)("div",{}):M.a.isEmpty(s.parameters)?"\u65e0\u53c2\u6570":Object(A.jsx)(E.a,Object(a.a)(Object(a.a)({},q),{},{ref:this.scenarioForm,initialValues:this.getScenarioParameterValues(),children:s.parameters.map((function(e){return Object(A.jsx)(E.a.Item,{label:e.name,name:e.name,help:e.description,rules:[{required:!!e.required}],children:Object(A.jsx)(N.a,{disabled:!!e.component&&!e.component.editable})})}))}))})})]})]})})})}}]),n}(u.a.Component),B=Object(j.b)((function(e){var t=e.experimentCreating.toJS();return{loading:t.loading,experimentName:t.experimentName,categories:t.categories||[],scenarios:t.scenarios.scenarios||[],scenarioSelected:t.scenarioSelected,dimension:t.dimension,scenarioCategoryIdSelected:t.scenarioCategoryIdSelected,page:t.scenarios.page,pageSize:t.scenarios.pageSize,total:t.scenarios.total,machinesSelected:t.machinesSelected,scenarioSelectedFromExperiment:t.scenarioSelectedFromExperiment}}),(function(e){return{clearResult:function(){return e(v.a.clearExperimentCreatingResult())},getScenarioCategories:function(t){return e(v.a.getScenarioCategories(t))},getScenariosPageable:function(t){return e(v.a.getScenariosPageable(t))},onScenarioCategoryChanged:function(t){return e(v.a.onScenarioCategoryChanged(t))},onScenarioChanged:function(t){return e(v.a.onScenarioChanged(t))},handleError:function(t,n){return e(v.a.handleError(t,n))},getScenarioById:function(t){return e(v.a.getScenarioById(t))}}}))(H),J=k.a.TreeNode,L=R.a.Sider,U=R.a.Content,V=(R.a.Footer,{labelCol:{span:4},wrapperCol:{span:16}}),W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).metricForm=u.a.createRef(),a.state={initialized:!1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.queryMetricCategory,n=e.event;t(),n(this)}},{key:"isCreatingFromSelected",value:function(){var e=Ae.getExperimentId();return!M.a.isEmpty(e)}},{key:"initSelectedFinished",value:function(){if(!this.isCreatingFromSelected())return!0;var e=this.props.metricSelected;return this.state.initialized||null!==e}},{key:"getMetricSelectedKey",value:function(){var e=this.props.metricSelected,t=this.state.initialized;return!this.isCreatingFromSelected()||t||M.a.isEmpty(e)||this.setState({initialized:!0}),e?e.categoryId:""}},{key:"onMetricSelect",value:function(e,t){var n=t.selectedNodes.length>0?t.selectedNodes[0].dataRef:null,a=this.props.onMetricChanged;M.a.isEmpty(n)||a({metric:n})}},{key:"metricCategoryTreeRender",value:function(e){var t=this;return M.a.isEmpty(e)?Object(A.jsx)("span",{children:"\u6682\u4e0d\u652f\u6301\u63a5\u5165"}):e.map((function(e){return e.children?Object(A.jsx)(J,{title:e.name,dataRef:e,children:t.metricCategoryTreeRender(e.children)},e.categoryId):Object(A.jsx)(J,{title:e.name,dataRef:e},e.categoryId)}))}},{key:"updateMetricSelected",value:function(e){if(!M.a.isEmpty(e)){var t=[],n=this.props,a=n.metricSelected,i=n.onMetricChanged;M.a.forEach(e,(function(e,n){if(void 0!==e&&null!==e){if("metricName"!==n)return t.push({name:n,value:e});a.name=e}})),a.params=t,i({metric:a})}}},{key:"onFinish",value:function(e){var t=this;if(this.metricForm.current){var n=this.props.handleError;this.metricForm.current.validateFields().then((function(n){e(),t.updateMetricSelected(n)})).catch((function(e){var t=e.errorFields[0].errors,a=t?t[0]:T.a.PARAMETER_ERROR.message;n(T.a.PARAMETER_ERROR.code,a)}))}else e(),this.updateMetricSelected([])}},{key:"getMetricInitialValues",value:function(){var e=this.props.metricSelected;if(M.a.isEmpty(e))return{};if(M.a.isEmpty(e.params))return{};var t={};return e.params.map((function(e){t[e.name]=e.value})),t}},{key:"render",value:function(){var e=this.props,t=e.metricCategories,n=e.loading,i=e.metricSelected,r=this.initSelectedFinished();return Object(A.jsx)(R.a,{className:S.a.stepLayout,children:r&&Object(A.jsx)(C.a,{spinning:n||!r,children:Object(A.jsxs)(R.a,{children:[Object(A.jsx)(L,{children:t.length>0&&Object(A.jsx)(k.a,{defaultExpandAll:!0,defaultSelectedKeys:[this.getMetricSelectedKey()],onSelect:this.onMetricSelect.bind(this),children:this.metricCategoryTreeRender(t)})}),Object(A.jsx)(R.a,{children:Object(A.jsx)(U,{children:M.a.isEmpty(i)?Object(A.jsx)("div",{}):M.a.isEmpty(i.params)?"\u65e0\u53c2\u6570":Object(A.jsxs)(E.a,Object(a.a)(Object(a.a)({},V),{},{ref:this.metricForm,initialValues:this.getMetricInitialValues(),children:[i.params.map((function(e){return Object(A.jsx)(E.a.Item,{label:e.name,name:e.name,rules:[{required:!!e.required}],children:Object(A.jsx)(N.a,{placeholder:e.code})})})),Object(A.jsx)(E.a.Item,{label:"\u76d1\u63a7\u540d\u79f0",name:"metricName",children:Object(A.jsx)(N.a,{placeholder:i.name})})]}))})})]})})})}}]),n}(u.a.Component),Y=Object(j.b)((function(e){var t=e.experimentCreating.toJS();return{loading:t.loading,dimension:t.dimension,metricCategories:t.metricCategories,metricSelected:t.metricSelected}}),(function(e){return{clearResult:function(){return e(v.a.clearExperimentCreatingResult())},queryMetricCategory:function(t){return e(v.a.queryMetricCategory(t))},onMetricChanged:function(t){return e(v.a.onMetricChanged(t))},handleError:function(t,n){return e(v.a.handleError(t,n))}}}))(W),Z={labelCol:{span:4},wrapperCol:{span:16}},Q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).experimentNameForm=u.a.createRef(),a.onExperimentNameFormChange=function(){a.experimentNameForm.current&&a.experimentNameForm.current.validateFields().then((function(e){(0,a.props.onExperimentNameChanged)({name:e.experimentName})}))},a.getExperimentName=function(){var e=a.props,t=e.experimentName,n=e.dimension,i=e.scenarioSelected,r=e.onExperimentNameChanged;if(!M.a.isEmpty(t))return t;var c=[];M.a.isEmpty(n)||c.push(n),M.a.isEmpty(i)||c.push(i.name),c.push((new Date).getTime());var s=M.a.join(c,"-");return r({name:s}),s},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.getExperimentName();return Object(A.jsx)("div",{style:{marginTop:30},children:Object(A.jsx)(E.a,Object(a.a)(Object(a.a)({},Z),{},{ref:this.experimentNameForm,name:"experimentForm",onChange:this.onExperimentNameFormChange,initialValues:{experimentName:e},children:Object(A.jsx)(E.a.Item,{name:"experimentName",label:"\u5b9e\u9a8c\u540d\u79f0",help:"\u4e0d\u586b\u5199\u65f6\u4f7f\u7528\u9ed8\u8ba4\u503c",children:Object(A.jsx)(N.a,{placeholder:e})})}))})}}]),n}(u.a.Component),G=Object(j.b)((function(e){var t=e.experimentCreating.toJS();return{loading:t.loading,dimension:t.dimension,experimentName:t.experimentName,scenarioSelected:t.scenarioSelected}}),(function(e){return{onExperimentNameChanged:function(t){return e(v.a.onExperimentNameChanged(t))}}}))(Q),X=O.a.Step,$=[{title:"page.experiment.creating.step.title.resource",description:"page.item.required.true"},{title:"page.experiment.creating.step.title.scenario",description:"page.item.required.true"},{title:"page.experiment.creating.step.title.monitor",description:"page.item.required.false"},{title:"page.experiment.creating.step.title.name",description:"page.item.required.false"}],ee=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onCreatingTabChange=function(e){a.setState({current:e})},a.machineEvent=function(e){a._machine=e},a.scenarioEvent=function(e){a._scenario=e},a.monitorEvent=function(e){a._monitor=e},a.onCreatingNext=function(){var e=a.state.current+1;switch(e){case 1:a.submitMachineForm(e);break;case 2:a._scenario.onFinish(a.changeCurrent.bind(Object(x.a)(a),e));break;case 3:a._monitor.onFinish(a.changeCurrent.bind(Object(x.a)(a),e));break;default:a.changeCurrent(e)}},a.onCreatingPre=function(){var e=a.state.current-1;a.setState({current:e})},a.getMachines=function(){var e=a.props.machinesSelected,t=[];return e.map((function(e){var n=M.a.split(e,"-");t.push({machineId:n[0],ip:n[1]})})),t},a.createExperiment=function(){var e=a.props,t=e.scenarioSelected,n=e.metricSelected,i=e.experimentName,r=e.dimension,c=e.createExperiment,s=e.collect,o=e.scenarioCategoryIdSelected,l=e.machinesSelected;c({categoryId:o,scenarioId:t.scenarioId,parameters:t.parameters,metrics:n?[n]:[],experimentName:i,machines:l,dimension:r,collect:s})},a.updateExperiment=function(){var e=a.props,t=e.scenarioSelected,n=e.metricSelected,i=e.experimentName,r=e.dimension,c=e.updateExperiment,s=e.collect,o=e.scenarioCategoryIdSelected,l=e.machinesSelected;c({experimentId:Ae.getExperimentId(),categoryId:o,scenarioId:t.scenarioId,parameters:t.parameters,metrics:n?[n]:[],experimentName:i,machines:l,dimension:r,collect:s})},a.state={current:0},a}return Object(o.a)(n,[{key:"changeCurrent",value:function(e){this.setState({current:e})}},{key:"componentWillUnmount",value:function(){(0,this.props.clearResult)()}},{key:"submitMachineForm",value:function(e){var t=this.props.machineForm;M.a.isEmpty(t)||t.submit(),this.changeCurrent(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.machineStep,a=t.dimension,i=this.state.current,r=Ae.getExperimentId();return Object(A.jsxs)("div",{children:[Object(A.jsx)(O.a,{direction:"horizontal",size:"default",current:i,children:$.map((function(e){return Object(A.jsx)(X,{title:Object(A.jsx)(g.a,{id:e.title}),description:Object(A.jsx)("span",{children:Object(A.jsx)(g.a,{id:e.description})})})}))}),Object(A.jsxs)("div",{className:S.a.stepContent,children:[0===i?Object(A.jsx)("div",{className:S.a.fadeIn,children:n}):Object(A.jsx)("div",{className:S.a.step}),1===i?Object(A.jsx)("div",{className:S.a.fadeIn,children:Object(A.jsx)(B,{dimension:a,current:i,event:this.scenarioEvent})}):Object(A.jsx)("div",{className:S.a.step}),2===i?Object(A.jsx)("div",{className:S.a.fadeIn,children:Object(A.jsx)(Y,{dimension:a,current:i,event:this.monitorEvent})}):Object(A.jsx)("div",{className:S.a.step}),3===i?Object(A.jsx)("div",{className:S.a.fadeIn,children:Object(A.jsx)(G,{dimension:a,current:i})}):Object(A.jsx)("div",{className:S.a.step})]}),Object(A.jsx)(f.a,{dashed:!0}),Object(A.jsxs)("div",{className:S.a.stepsAction,children:[i>0&&Object(A.jsx)(b.a,{style:{marginRight:8},onClick:function(){return e.onCreatingPre()},children:"\u4e0a\u4e00\u6b65"}),i<$.length-1&&Object(A.jsx)(b.a,{type:"primary",onClick:function(){return e.onCreatingNext()},children:"\u4e0b\u4e00\u6b65"}),i===$.length-1&&(r?Object(A.jsx)(b.a,{type:"primary",onClick:function(){return e.updateExperiment()},children:"\u66f4\u65b0\u5b9e\u9a8c"}):Object(A.jsx)(b.a,{type:"primary",onClick:function(){return e.createExperiment()},children:"\u521b\u5efa\u5b9e\u9a8c"}))]})]})}}]),n}(u.a.Component),te=Object(j.b)((function(e){var t=e.experimentCreating.toJS();return{loading:t.loading,experimentName:t.experimentName,categories:t.categories||[],scenarios:t.scenarios.scenarios||[],scenarioSelected:t.scenarioSelected,dimension:t.dimension,metricCategories:t.metricCategories,metricSelected:t.metricSelected,machinesSelected:t.machinesSelected,scenarioCategoryIdSelected:t.scenarioCategoryIdSelected}}),(function(e){return{clearResult:function(){return e(v.a.clearExperimentCreatingResult())},createExperiment:function(t){return e(v.a.createExperiment(t))},updateExperiment:function(t){return e(v.a.updateExperiment(t))},onMachinesChanged:function(t){return e(v.a.onMachinesChanged(t))}}}))(ee),ne=(n(774),n(783)),ae=n(35),ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).transferFilter=function(e,t){return t.description.indexOf(e)>-1},a.getTargetKeys=function(){var e=a.props,t=e.machinesSelected,n=e.dimension;if(M.a.isEmpty(t))return[];var i=[];switch(n){case ae.b.HOST:t.map((function(e){i.push(M.a.join([e.machineId,e.ip],"/"))}));break;case ae.b.NODE:t.map((function(e){i.push(e.nodeName)}));break;case ae.b.POD:t.map((function(e){i.push(M.a.join([e.namespace,e.podName],"/"))}));break;case ae.b.CONTAINER:t.map((function(e){i.push(M.a.join([e.namespace,e.podName,e.containerName],"/"))}))}return i},a.transferChange=function(e){var t=a.props,n=t.onMachinesChanged,i=t.dimension,r=[];switch(i){case ae.b.HOST:e.map((function(e){var t=M.a.split(e,"/");M.a.isEmpty(t[0])||M.a.isEmpty(t[1])||r.push({machineId:t[0],ip:t[1]})}));break;case ae.b.NODE:e.map((function(e){r.push({nodeName:e})}));break;case ae.b.POD:case ae.b.CONTAINER:e.map((function(e){var t=M.a.split(e,"/");2===t.length?r.push({namespace:t[0],podName:t[1]}):3===t.length&&r.push({namespace:t[0],podName:t[1],containerName:t[2]})}))}n({machines:r})},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.creatingFromMachine()}},{key:"creatingFromMachine",value:function(){if(M.a.isEmpty(this.props.location))return!1;var e=this.props.location,t=e.dimension,n=e.machineId,a=e.machineIp,i=this.props,r=i.creatingFromMachine,c=i.clearResult;return!!(t&&n&&a)&&(c(),r({dimension:t,machineIp:a,machineId:n}),!0)}},{key:"render",value:function(){var e=this.props,t=e.titles,n=e.machines,a=(e.pagination,e.loading);return Object(A.jsx)("div",{className:S.a.stepMachineContent,children:Object(A.jsx)(C.a,{spinning:a,children:Object(A.jsx)(ne.a,{dataSource:n,showSearch:!0,targetKeys:this.getTargetKeys(),onChange:this.transferChange,filterOption:this.transferFilter,render:function(e){return e.title},listStyle:{width:510,height:400},titles:t,pagination:!0})})})}}]),n}(u.a.Component),re=Object(j.b)((function(e){var t=e.experimentCreating.toJS();return{loading:t.loading,machinesSelected:t.machinesSelected,dimension:t.dimension}}),(function(e){return{clearResult:function(){return e(v.a.clearExperimentCreatingResult())},creatingFromMachine:function(t){return e(v.a.creatingFromMachine(t))},onMachinesChanged:function(t){return e(v.a.onMachinesChanged(t))},handleError:function(t,n){return e(v.a.handleError(t,n))}}}))(ie),ce=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={dimension:"host",query:e.query||{}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.page;(0,e.getMachinesForHostPageable)({page:t,pageSize:24})}},{key:"render",value:function(){var e=this.props,t=e.page,n=e.total,a=e.machines,i=e.getMachinesForHostPageable;return Object(A.jsx)(te,{dimension:"host",machineStep:Object(A.jsxs)("div",{children:[Object(A.jsx)(h.a,{style:{textAlign:"center"},message:Object(A.jsx)(g.a,{id:"page.experiment.creating.resource.host.alert.message"}),type:"info",showIcon:!0,closable:!0}),Object(A.jsx)(re,{machines:a,pagination:Object(_.a)(t,24,n,(function(e,t){return i({page:e,pageSize:t})}))})]})})}}]),n}(u.a.Component),se=Object(j.b)((function(e){var t=e.experimentCreating.toJS().hosts;return{machines:t.machines,page:t.page,total:t.total}}),(function(e){return{getMachinesForHostPageable:function(t){return e(v.a.getMachinesForHostPageable(Object(a.a)(Object(a.a)({},t),{},{original:"host"})))}}}))(ce),oe=n(305),le=n(122),de=n.n(le),pe=n.p+"static/media/linux.90f8b1a6.svg",me=n.p+"static/media/kubernetes.90835154.svg",ue=n.p+"static/media/application.e54281ed.svg",ge=(n(419),n(181)),he=(n(417),n(299)),je=(n(272),n(112)),be=n(596),fe=n(797),xe=n(416),Oe=n(798),ye=n(799),Se=n(800),ve=p.a.TabPane,Ce=(N.a.TextArea,je.a.SubMenu,R.a.Content,R.a.Sider,Object(A.jsx)(g.a,{id:"page.experiment.creating.node.name.tips"})),Ee=Object(A.jsx)(g.a,{id:"page.experiment.creating.pod.namespace.tips"}),Ne=Object(A.jsx)(g.a,{id:"page.experiment.creating.pod.name.tips"}),Ie=Object(A.jsx)(g.a,{id:"page.experiment.creating.container.name.tips"}),Re=Object(A.jsx)(h.a,{style:{textAlign:"center"},message:Object(A.jsx)(g.a,{id:"page.experiment.creating.resource.k8s.collect.alert.message"}),type:"info",showIcon:!0,closable:!0}),ke=Object(A.jsx)(h.a,{style:{textAlign:"center"},message:Object(A.jsx)(g.a,{id:"page.experiment.creating.resource.k8s.alert.message"}),type:"warning",showIcon:!0,closable:!0}),Fe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).containerFormRef=u.a.createRef(),e.podFormRef=u.a.createRef(),e.nodeFormRef=u.a.createRef(),e.onFinish=function(t){(0,e.props.onMachinesChanged)({machines:t.machines})},e.collectContainersEnabledRender=function(){var t=e.props,n=t.podPage,a=t.podPageSize,i=t.podTotal,r=t.containers,c=t.getPodsPageable;return Object(A.jsx)(re,{machines:r,pagination:Object(_.a)(n,a,i,(function(e,t){return c({page:e,pageSize:t})})),titles:[Object(A.jsxs)("div",{style:{display:"inline-block"},children:[Object(A.jsx)(g.a,{id:"page.experiment.creating.resource.disabled.message"}),"\xa0",Object(A.jsx)(he.a,{title:Object(A.jsx)(g.a,{id:"page.experiment.creating.resource.disabled.tips"}),children:Object(A.jsx)(be.a,{})})]})]})},e.collectDisabledRender=function(t){var n=e.props,i=n.dimension,r=n.machinesSelected;return Object(A.jsx)("div",{children:Object(A.jsx)(E.a,{ref:t,name:"control-ref",onFinish:e.onFinish,initialValues:{machines:r},children:Object(A.jsx)(E.a.List,{name:"machines",children:function(e,t){var n=t.add,r=t.remove;return Object(A.jsxs)(A.Fragment,{children:[e.map((function(e){return i===ae.b.NODE?Object(A.jsxs)(ge.b,{style:{padding:16},align:"baseline",children:[Object(A.jsx)(E.a.Item,Object(a.a)(Object(a.a)({},e),{},{fieldKey:[e.fieldKey,"nodeName"],name:[e.name,"nodeName"],label:"nodeName",help:Ce,rules:[{required:!0}],children:Object(A.jsx)(N.a,{})})),Object(A.jsx)(fe.a,{onClick:function(){return r(e.name)}})]},e.key):Object(A.jsxs)(ge.b,{style:{padding:16},align:"baseline",children:[Object(A.jsx)(E.a.Item,Object(a.a)(Object(a.a)({},e),{},{fieldKey:[e.fieldKey,"namespace"],name:[e.name,"namespace"],label:"namespace",help:Ee,rules:[{required:!0}],children:Object(A.jsx)(N.a,{})})),Object(A.jsx)(E.a.Item,Object(a.a)(Object(a.a)({},e),{},{fieldKey:[e.fieldKey,"podName"],name:[e.name,"podName"],label:"podName",help:Ne,rules:[{required:!0}],children:Object(A.jsx)(N.a,{})})),i===ae.b.CONTAINER?Object(A.jsx)(E.a.Item,Object(a.a)(Object(a.a)({},e),{},{fieldKey:[e.fieldKey,"containerName"],name:[e.name,"containerName"],label:"containerName",help:Ie,rules:[{required:!1}],children:Object(A.jsx)(N.a,{})})):Object(A.jsx)(A.Fragment,{}),Object(A.jsx)(fe.a,{onClick:function(){return r(e.name)}})]},e.key)})),Object(A.jsx)(E.a.Item,{children:Object(A.jsx)(b.a,{type:"dashed",onClick:function(){return n()},block:!0,icon:Object(A.jsx)(xe.a,{}),children:"Add field"})})]})}})})})},e.collectPodsEnabledRender=function(){var t=e.props,n=t.podPage,a=t.podPageSize,i=t.podTotal,r=t.pods,c=t.getPodsPageable;return Object(A.jsx)(re,{machines:r,pagination:Object(_.a)(n,a,i,(function(e,t){return c({page:e,pageSize:t})})),titles:[Object(A.jsxs)("div",{style:{display:"inline-block"},children:[Object(A.jsx)(g.a,{id:"page.experiment.creating.resource.disabled.message"}),"\xa0",Object(A.jsx)(he.a,{title:Object(A.jsx)(g.a,{id:"page.experiment.creating.resource.disabled.tips"}),children:Object(A.jsx)(be.a,{})})]})]})},e.collectNodesEnabledRender=function(){var t=e.props,n=t.nodePage,a=t.nodePageSize,i=t.nodeTotal,r=t.nodes,c=t.getNodesPageable;return Object(A.jsx)(re,{machines:r,pagination:Object(_.a)(n,a,i,(function(e,t){return c({page:e,pageSize:t})})),titles:[Object(A.jsxs)("div",{style:{display:"inline-block"},children:[Object(A.jsx)(g.a,{id:"page.experiment.creating.resource.disabled.message"}),"\xa0",Object(A.jsx)(he.a,{title:Object(A.jsx)(g.a,{id:"page.experiment.creating.resource.disabled.tips"}),children:Object(A.jsx)(be.a,{})})]})]})},e.machinesRender=function(){var t=e.props,n=t.collect,a=t.dimension;return a?Object(A.jsxs)(p.a,{defaultActiveKey:a,onChange:e.onTargetTabChange,children:[Object(A.jsx)(ve,{tab:Object(A.jsxs)("span",{children:[Object(A.jsx)(Oe.a,{}),Object(A.jsx)(g.a,{id:"page.experiment.creating.container.title"})]}),children:n?e.collectContainersEnabledRender():e.collectDisabledRender(e.containerFormRef)},"container"),Object(A.jsx)(ve,{tab:Object(A.jsxs)("span",{children:[Object(A.jsx)(ye.a,{}),Object(A.jsx)(g.a,{id:"page.experiment.creating.pod.title"})]}),children:n?e.collectPodsEnabledRender():e.collectDisabledRender(e.podFormRef)},"pod"),Object(A.jsx)(ve,{tab:Object(A.jsxs)("span",{children:[Object(A.jsx)(Se.a,{}),Object(A.jsx)(g.a,{id:"page.experiment.creating.node.title"})]}),children:n?e.collectNodesEnabledRender():e.collectDisabledRender(e.nodeFormRef)},"node")]}):Object(A.jsx)("div",{})},e.onTargetTabChange=function(t){var n=e.props,a=n.onDimensionChanged,i=n.clearResult;e.getMachinesByDimension(t),a({dimension:t}),i()},e}return Object(o.a)(n,[{key:"getMachinesByDimension",value:function(e){var t=this.props,n=t.getPodsPageable,a=t.getNodesPageable,i=t.podPage,r=t.podPageSize,c=t.nodePage,s=t.nodePageSize;switch(e){case ae.b.NODE:a({page:c,pageSize:s});break;case ae.b.CONTAINER:case ae.b.POD:n({page:i,pageSize:r})}}},{key:"componentDidMount",value:function(){var e=this.props,t=e.getClusterInfo,n=e.queryCollectStatus,a=e.onDimensionChanged,i=e.dimension,r=Ae.getExperimentId();n(),t();var c=i;M.a.isEmpty(r)&&M.a.isEmpty(i)&&a({dimension:c="pod"}),this.getMachinesByDimension(c)}},{key:"render",value:function(){var e=this.props,t=e.collect,n=e.dimension,a=null;switch(n){case ae.b.NODE:a=this.nodeFormRef;break;case ae.b.POD:a=this.podFormRef;break;case ae.b.CONTAINER:a=this.containerFormRef}return n?Object(A.jsx)(te,{dimension:n,machineForm:a?a.current:null,machineStep:Object(A.jsxs)("div",{children:[t?Re:ke,this.machinesRender()]})}):Object(A.jsx)("div",{})}}]),n}(u.a.Component),Pe=Object(j.b)((function(e){var t=e.experimentCreating.toJS(),n=t.pods,a=t.nodes;return{podPage:n.page,podPageSize:n.pageSize,podTotal:n.total,pods:n.machines,containers:n.containers,nodePage:a.page,nodePageSize:a.pageSize,nodeTotal:a.total,nodes:a.machines,collect:t.collect,dimension:t.dimension,machinesSelected:t.machinesSelected}}),(function(e){return{getClusterInfo:function(){return e(v.a.getClusterInfo())},getKubernetesNamespaces:function(){return e(v.a.getKubernetesNamespaces())},getPodsPageable:function(t){return e(v.a.getMachinesForPodPageable(t))},getNodesPageable:function(t){return e(v.a.getMachinesForNodePageable(t))},queryCollectStatus:function(){return e(v.a.queryCollectStatus())},onDimensionChanged:function(t){return e(v.a.onDimensionChanged(t))},onMachinesChanged:function(t){return e(v.a.onMachinesChanged(t))},clearResult:function(){return e(v.a.clearExperimentCreatingResult())}}}))(Fe),Me=p.a.TabPane,Te=[{title:"page.experiment.creating.host.dimension.name",key:"host",imgAlt:"host",imgSrc:pe,content:Object(A.jsx)(se,{})},{title:"page.experiment.creating.kubernetes.dimension.name",key:"kubernetes",imgAlt:"kubernetes",imgSrc:me,content:Object(A.jsx)(Pe,{})},{title:"page.experiment.creating.application.dimension.name",key:"application",imgAlt:"application",imgSrc:ue,content:Object(A.jsx)("h1",{children:"Coming soon..."})}],_e=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={history:null,experimentId:null,finished:!1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.getExperimentById,t=n.getExperimentId();M.a.isEmpty(t)||e(t)}},{key:"onTabChange",value:function(e){var t=this.props,n=t.dimension,a=t.onDimensionChanged,i=t.clearResult;if(e!==n&&(e===ae.b.KUBERNETES&&(e=ae.b.POD),a({dimension:e})),i(),e===ae.b.HOST){var r=this.props,c=r.page;(0,r.getMachinesForHostPageable)({page:c,pageSize:24})}}},{key:"getTabKey",value:function(){var e=this.props,t=e.dimension,a=e.onDimensionChanged,i=n.getExperimentId(),r=t;return M.a.isEmpty(i)&&M.a.isEmpty(t)?a({dimension:r=ae.b.DEFAULT}):!M.a.isEmpty(i)&&M.a.isEmpty(t)?r="":r!==ae.b.CONTAINER&&r!==ae.b.POD&&r!==ae.b.NODE||(r=ae.b.KUBERNETES),r}},{key:"render",value:function(){var e=this.getTabKey();return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:Object(A.jsx)(g.a,{id:"page.experiment.creating.dimension"})}),Object(A.jsx)("div",{className:S.a.experimentHeader,children:e?Object(A.jsx)(i.a,{children:Object(A.jsx)(p.a,{defaultActiveKey:e,className:S.a.stepTab,onChange:this.onTabChange.bind(this),children:Te.map((function(e){return Object(A.jsx)(Me,{tab:Object(A.jsx)(r.a,{span:4,children:Object(A.jsx)(c.a,{style:{width:300},bordered:!0,hoverable:!0,title:Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(g.a,{id:e.title})}),cover:Object(A.jsx)("img",{alt:e.imgAlt,src:e.imgSrc,style:{width:296,height:182}})})}),children:e.content},e.key)}))})}):Object(A.jsx)(i.a,{})})]})}}],[{key:"getExperimentId",value:function(){return de.a.parse(window.location.search).id}},{key:"getDerivedStateFromProps",value:function(e){var t=e.history,n=e.experimentId,a=e.clearResult;return e.finished&&!M.a.isEmpty(n)&&(a(),t.push("/experiment/detail/?".concat(oe.a({id:n})))),null}}]),n}(u.a.Component),Ae=t.default=Object(j.b)((function(e){var t=e.experimentCreating.toJS();return{dimension:t.dimension,experimentId:t.experimentId,finished:t.finished}}),(function(e){return{clearResult:function(){return e(v.a.clearExperimentCreatingResult())},onDimensionChanged:function(t){return e(v.a.onDimensionChanged(t))},getExperimentById:function(t){return e(v.a.getExperimentById(t))},getMachinesForHostPageable:function(t){return e(v.a.getMachinesForHostPageable(Object(a.a)(Object(a.a)({},t),{},{original:"host"})))}}}))(_e)}}]);
//# sourceMappingURL=18.a977ebcb.chunk.js.map