(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),s=a("Bl7J"),r=a("vrFN"),c=a("Wbzz"),p=a("/MKj"),i=a("/t/q");var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.componentWillMount=function(){this.props.authToken||(this.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in"))},s.render=function(){return o.a.createElement("div",null,this.props.children)},n}(o.a.Component),l={setErrorMessage:i.l},h=Object(p.b)((function(e){return{authToken:e.auth.token}}),l)(u),m=a("07Dp"),d=(a("f3/d"),a("IP2g")),f=a("wHSu"),k=a("QojX"),j=a("wx14"),g=a("zLVn"),E=a("TSYQ"),O=a.n(E),b=a("1oE0"),y=a("vUet"),_=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.size,s=e.className,r=e.as,c=void 0===r?"div":r,p=Object(g.a)(e,["bsPrefix","size","className","as"]);return a=Object(y.a)(a,"input-group"),o.a.createElement(c,Object(j.a)({ref:t},p,{className:O()(s,a,n&&a+"-"+n)}))})),C=Object(b.a)("input-group-append"),v=Object(b.a)("input-group-prepend"),T=Object(b.a)("input-group-text",{Component:"span"});_.displayName="InputGroup",_.Text=T,_.Radio=function(e){return o.a.createElement(T,null,o.a.createElement("input",Object(j.a)({type:"radio"},e)))},_.Checkbox=function(e){return o.a.createElement(T,null,o.a.createElement("input",Object(j.a)({type:"checkbox"},e)))},_.Append=C,_.Prepend=v;var N=_,S=a("jDKy"),I=a("cWnB");var M=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).toggleControls=function(){return!t.props.hideControlsIfEmpty||t.props.inputValue},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement(k.a,{onSubmit:this.props.handleOnSubmit},o.a.createElement(N,{size:"lg"},o.a.createElement(S.a,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",placeholder:"Enter Project Name ...",value:this.props.inputValue,onChange:this.props.handleOnChange})),this.toggleControls()&&o.a.createElement("div",{className:"form__controls"},o.a.createElement(I.a,{className:"form__btn",variant:"primary",type:"submit"},this.props.submitBtnName),o.a.createElement(I.a,{className:"form__btn",variant:"secondary",onClick:this.props.handleOnCancel},"Cancel")))},n}(o.a.Component),A=M,z={prefix:"far",iconName:"check-square",icon:[448,512,[],"f14a","M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"]},w={prefix:"far",iconName:"square",icon:[448,512,[],"f0c8","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"]};var P=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).toggleControls=function(){return!t.props.hideControlsIfEmpty||t.props.inputValue},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement(k.a,{onSubmit:this.props.handleOnSubmit},o.a.createElement(N,{size:"lg"},o.a.createElement(S.a,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",placeholder:"Enter Task Name ...",value:this.props.inputValue,onChange:this.props.handleOnChange})),this.toggleControls()&&o.a.createElement("div",{className:"form__controls"},o.a.createElement(I.a,{className:"form__btn",size:"sm",variant:"success",type:"submit"},this.props.submitBtnName),o.a.createElement(I.a,{className:"form__btn",size:"sm",variant:"light",onClick:this.props.handleOnCancel},"Cancel")))},n}(o.a.Component);var x=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleOnEdit=function(){console.log(a.state),a.setState({taskNameInput:a.state.name,taskEditorIsOpen:!0})},a.handleOnCancel=function(){a.setState({taskNameInput:"",taskEditorIsOpen:!1})},a.handleOnChange=function(e){a.setState({taskNameInput:e.target.value})},a.handleOnSave=function(e){e.preventDefault();var t={task:{name:a.state.taskNameInput}};fetch("https://todolist-endpoints.herokuapp.com/projects/"+a.props.projectId+"/tasks/"+a.state.id,{method:"PATCH",body:JSON.stringify(t),headers:{Accept:"application/json",Authorization:a.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 200:a.props.setSuccessMessage('Task "'+a.state.name+'" successfully updated!'),a.setState({name:a.state.taskNameInput,taskEditorIsOpen:!1});break;case 401:a.props.destroyAuthToken(),a.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return a.props.setErrorMessage(e.message)}))},a.handleOnTrash=function(e){e.preventDefault(),fetch("https://todolist-endpoints.herokuapp.com/projects/"+a.props.projectId+"/tasks/"+a.state.id,{method:"DELETE",headers:{Accept:"application/json",Authorization:a.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 200:a.props.setSuccessMessage('Task "'+a.state.name+'" successfully deleted!'),a.props.deleteComponent(a.state.id);break;case 401:a.props.destroyAuthToken(),a.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return a.props.setErrorMessage(e.message)}))},a.completeTask=function(e){e.preventDefault(),fetch("https://todolist-endpoints.herokuapp.com/tasks/"+a.state.id+"/complete",{method:"PATCH",headers:{Accept:"application/json",Authorization:a.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 200:a.setState({completed:!0}),a.props.setSuccessMessage('Task "'+a.state.name+'" successfully completed!');break;case 401:a.props.destroyAuthToken(),a.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return a.props.setErrorMessage(e.message)}))},a.state={id:a.props.task.id,name:a.props.task.attributes.name,completed:a.props.task.attributes.completed,taskNameInput:"",taskEditorIsOpen:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,this.state.taskEditorIsOpen?o.a.createElement(P,{submitBtnName:"Save",inputValue:this.state.taskNameInput,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSave,handleOnCancel:this.handleOnCancel}):o.a.createElement("div",{className:"task"},o.a.createElement("div",{className:"task__title"},this.state.completed?o.a.createElement(d.a,{icon:z,className:"task__element"}):o.a.createElement(d.a,{icon:w,className:"task__element",onClick:this.completeTask}),o.a.createElement("span",{className:this.state.completed?"task__completed":"task__not-completed"},this.state.name)),o.a.createElement("div",{className:"task__controls"},o.a.createElement(d.a,{icon:f.d,className:"task__element",onClick:this.handleOnEdit}),o.a.createElement(d.a,{icon:f.f,className:"task__element",onClick:this.handleOnTrash}))))},n}(o.a.Component),V={destroyAuthToken:m.c,setSuccessMessage:i.m,setErrorMessage:i.l},Y=Object(p.b)((function(e){return{authToken:e.auth.token}}),V)(x);a("91GP");var D=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleOnCancel=function(){a.setState(Object.assign({},a.state,{taskNameInput:""}))},a.handleOnChange=function(e){a.setState(Object.assign({},a.state,{taskNameInput:e.target.value}))},a.handleOnSubmit=function(e){e.preventDefault();var t={task:{name:a.state.taskNameInput}};fetch("https://todolist-endpoints.herokuapp.com/projects/"+a.props.projectId+"/tasks",{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json",Authorization:a.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 201:e.json().then((function(e){return a.props.addTaskComponent(e.data)})),a.props.setSuccessMessage('Task "'+a.state.taskNameInput+'" successfully created!'),a.handleOnCancel();break;case 422:a.props.setErrorMessage("The task with such name does already exist.");break;case 401:a.props.destroyAuthToken(),a.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return a.props.setErrorMessage(e.message)}))},a.state={taskNameInput:""},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement("div",{className:"task__new-form"},o.a.createElement(P,{submitBtnName:"Create Task",hideControlsIfEmpty:"true",inputValue:this.state.taskNameInput,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSubmit,handleOnCancel:this.handleOnCancel}))},n}(o.a.Component),L={destroyAuthToken:m.c,setSuccessMessage:i.m,setErrorMessage:i.l},B=Object(p.b)((function(e){return{authToken:e.auth.token}}),L)(D);function H(e){var t=e.tasks.map((function(t){return o.a.createElement(Y,{key:t.id,projectId:e.projectId,task:t,deleteComponent:e.deleteTaskComponent})}));return o.a.createElement("div",null,t)}var q=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).addTaskComponent=function(e){a.setState({tasks:a.state.tasks.concat([e])})},a.deleteTaskComponent=function(e){a.setState({tasks:a.state.tasks.filter(function(e){return function(t){return t.id!==e}}(e))})},a.state={tasks:[]},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.componentWillMount=function(){var e=this;fetch("https://todolist-endpoints.herokuapp.com/projects/"+this.props.projectId+"/tasks",{method:"GET",headers:{Accept:"application/json",Authorization:this.props.authToken,"Content-Type":"application/json"}}).then((function(t){switch(t.status){case 200:t.json().then((function(t){return e.setState({tasks:t.data})}));break;case 401:e.props.destroyAuthToken(),e.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(t){return e.props.setErrorMessage(t.message)}))},s.render=function(){return o.a.createElement("div",{className:"tasks-list hidden"},o.a.createElement(H,{projectId:this.props.projectId,tasks:this.state.tasks,deleteTaskComponent:this.deleteTaskComponent}),o.a.createElement(B,{projectId:this.props.projectId,addTaskComponent:this.addTaskComponent}))},n}(o.a.Component),J={destroyAuthToken:m.c,setErrorMessage:i.l},G=Object(p.b)((function(e){return{authToken:e.auth.token}}),J)(q);var W=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleOnEdit=function(){a.setState({projectNameInput:a.state.name,projectEditorIsOpen:!0})},a.handleOnCancel=function(){a.setState({projectNameInput:"",projectEditorIsOpen:!1})},a.handleOnChange=function(e){a.setState({projectNameInput:e.target.value})},a.handleOnSave=function(e){e.preventDefault();var t={project:{name:a.state.projectNameInput}};fetch("https://todolist-endpoints.herokuapp.com/projects/"+a.state.id,{method:"PATCH",body:JSON.stringify(t),headers:{Accept:"application/json",Authorization:a.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 200:a.props.setSuccessMessage('Project "'+a.state.name+'" successfully updated!'),a.setState({name:a.state.projectNameInput,projectEditorIsOpen:!1});break;case 401:a.props.destroyAuthToken(),a.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return a.props.setErrorMessage(e.message)}))},a.handleOnTrash=function(e){e.stopPropagation(),fetch("https://todolist-endpoints.herokuapp.com/projects/"+a.state.id,{method:"DELETE",headers:{Accept:"application/json",Authorization:a.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 200:a.props.setSuccessMessage('Project "'+a.state.name+'" successfully deleted!'),a.props.deleteComponent(a.state.id);break;case 401:a.props.destroyAuthToken(),a.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return a.props.setErrorMessage(e.message)}))},a.handleTitleClick=function(e){e.stopPropagation();var t=e.target.closest(".project"),a=t.parentNode.querySelector(".tasks-list"),n=t.querySelector(".fa-caret-right"),o=t.querySelector(".fa-caret-down");t.classList.toggle("project__expanded"),a.classList.toggle("hidden"),n.classList.toggle("hidden"),o.classList.toggle("hidden")},a.state={id:a.props.project.id,name:a.props.project.attributes.name,projectNameInput:"",projectEditorIsOpen:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,this.state.projectEditorIsOpen?o.a.createElement(A,{submitBtnName:"Save",inputValue:this.state.projectNameInput,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSave,handleOnCancel:this.handleOnCancel}):o.a.createElement("div",null,o.a.createElement("div",{className:"form-control form__element project",onClick:this.handleTitleClick},o.a.createElement("div",{className:"project__title"},o.a.createElement(d.a,{icon:f.b,className:"project__element"}),o.a.createElement(d.a,{icon:f.a,className:"project__element hidden"}),o.a.createElement("span",{className:"project__element"},this.state.name)),o.a.createElement("div",{className:"project__controls"},o.a.createElement(d.a,{icon:f.d,className:"project__element",onClick:this.handleOnEdit}),o.a.createElement(d.a,{icon:f.f,className:"project__element",onClick:this.handleOnTrash}))),o.a.createElement(G,{projectId:this.state.id})))},n}(o.a.Component),F={destroyAuthToken:m.c,setSuccessMessage:i.m,setErrorMessage:i.l},R=Object(p.b)((function(e){return{authToken:e.auth.token}}),F)(W);var K=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleOnCancel=function(){a.setState(Object.assign({},a.state,{projectNameInput:""}))},a.handleOnChange=function(e){a.setState(Object.assign({},a.state,{projectNameInput:e.target.value}))},a.handleOnSubmit=function(e){e.preventDefault();var t={project:{name:a.state.projectNameInput}};fetch("https://todolist-endpoints.herokuapp.com/projects",{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json",Authorization:a.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 201:e.json().then((function(e){return a.props.addProjectComponent(e.data)})),a.props.setSuccessMessage('Project "'+a.state.projectNameInput+'" successfully created!'),a.handleOnCancel();break;case 422:a.props.setErrorMessage("The project with such name does already exist.");break;case 401:a.props.destroyAuthToken(),a.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return a.props.setErrorMessage(e.message)}))},a.state={projectNameInput:""},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement("div",{className:"project__new-form"},o.a.createElement(A,{submitBtnName:"Create Project",hideControlsIfEmpty:"true",inputValue:this.state.projectNameInput,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSubmit,handleOnCancel:this.handleOnCancel}))},n}(o.a.Component),Q={destroyAuthToken:m.c,setSuccessMessage:i.m,setErrorMessage:i.l},X=Object(p.b)((function(e){return{authToken:e.auth.token}}),Q)(K);function U(e){var t=e.projects.map((function(t){return o.a.createElement(R,{key:t.id,project:t,deleteComponent:e.deleteProjectComponent})}));return o.a.createElement("div",null,t)}var Z=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).addProjectComponent=function(e){a.setState({projects:a.state.projects.concat([e])})},a.deleteProjectComponent=function(e){a.setState({projects:a.state.projects.filter(function(e){return function(t){return t.id!==e}}(e))})},a.state={projects:[]},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.componentWillMount=function(){var e=this;fetch("https://todolist-endpoints.herokuapp.com/projects",{method:"GET",headers:{Accept:"application/json",Authorization:this.props.authToken,"Content-Type":"application/json"}}).then((function(t){switch(t.status){case 200:t.json().then((function(t){return e.setState({projects:t.data})}));break;case 401:e.props.destroyAuthToken(),e.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(t){return e.props.setErrorMessage(t.message)}))},s.render=function(){return o.a.createElement("div",null,o.a.createElement("h3",{className:"todo__title"},"Projects"),o.a.createElement(U,{projects:this.state.projects,deleteProjectComponent:this.deleteProjectComponent}),o.a.createElement(X,{addProjectComponent:this.addProjectComponent}))},n}(o.a.Component),$={destroyAuthToken:m.c,setErrorMessage:i.l},ee=Object(p.b)((function(e){return{authToken:e.auth.token}}),$)(Z);t.default=function(){return o.a.createElement(s.a,{pageInfo:{pageName:"index"}},o.a.createElement(r.a,{title:"Home",keywords:["gatsby","react","bootstrap"]}),o.a.createElement(h,null,o.a.createElement("div",{className:"todo__content_wrapper"},o.a.createElement(ee,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9aa9efcf1aa3c91024a9.js.map