(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),s=n("Bl7J"),r=n("vrFN"),c=n("Wbzz"),p=n("/MKj"),i=n("/t/q");var u=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.componentWillMount=function(){this.props.authToken||(this.props.setErrorMessage("You are not authorized to perform this action."),"undefined"!=typeof window&&Object(c.navigate)("/sign_in"))},s.render=function(){return o.a.createElement("div",null,this.props.children)},a}(o.a.Component),l={setErrorMessage:i.l},h=Object(p.b)((function(e){return{authToken:e.auth.token}}),l)(u),d=n("07Dp"),m=(n("f3/d"),n("IP2g")),f=n("wHSu"),k=n("QojX"),j=n("wx14"),g=n("zLVn"),E=n("TSYQ"),y=n.n(E),O=n("1oE0"),b=n("vUet"),_=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.size,s=e.className,r=e.as,c=void 0===r?"div":r,p=Object(g.a)(e,["bsPrefix","size","className","as"]);return n=Object(b.a)(n,"input-group"),o.a.createElement(c,Object(j.a)({ref:t},p,{className:y()(s,n,a&&n+"-"+a)}))})),C=Object(O.a)("input-group-append"),v=Object(O.a)("input-group-prepend"),T=Object(O.a)("input-group-text",{Component:"span"});_.displayName="InputGroup",_.Text=T,_.Radio=function(e){return o.a.createElement(T,null,o.a.createElement("input",Object(j.a)({type:"radio"},e)))},_.Checkbox=function(e){return o.a.createElement(T,null,o.a.createElement("input",Object(j.a)({type:"checkbox"},e)))},_.Append=C,_.Prepend=v;var N=_,S=n("jDKy"),I=n("cWnB");var M=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).toggleControls=function(){return!t.props.hideControlsIfEmpty||t.props.inputValue},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(k.a,{onSubmit:this.props.handleOnSubmit},o.a.createElement(N,{size:"lg"},o.a.createElement(S.a,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",placeholder:"Enter Project Name ...",value:this.props.inputValue,onChange:this.props.handleOnChange})),this.toggleControls()&&o.a.createElement("div",{className:"form__controls"},o.a.createElement(I.a,{className:"form__btn",variant:"primary",type:"submit"},this.props.submitBtnName),o.a.createElement(I.a,{className:"form__btn",variant:"secondary",onClick:this.props.handleOnCancel},"Cancel")))},a}(o.a.Component),w=M,A={prefix:"far",iconName:"check-square",icon:[448,512,[],"f14a","M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"]},z={prefix:"far",iconName:"square",icon:[448,512,[],"f0c8","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"]};var P=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).toggleControls=function(){return!t.props.hideControlsIfEmpty||t.props.inputValue},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(k.a,{onSubmit:this.props.handleOnSubmit},o.a.createElement(N,{size:"lg"},o.a.createElement(S.a,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",placeholder:"Enter Task Name ...",value:this.props.inputValue,onChange:this.props.handleOnChange})),this.toggleControls()&&o.a.createElement("div",{className:"form__controls"},o.a.createElement(I.a,{className:"form__btn",size:"sm",variant:"success",type:"submit"},this.props.submitBtnName),o.a.createElement(I.a,{className:"form__btn",size:"sm",variant:"light",onClick:this.props.handleOnCancel},"Cancel")))},a}(o.a.Component);var x=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleOnEdit=function(){console.log(n.state),n.setState({taskNameInput:n.state.name,taskEditorIsOpen:!0})},n.handleOnCancel=function(){n.setState({taskNameInput:"",taskEditorIsOpen:!1})},n.handleOnChange=function(e){n.setState({taskNameInput:e.target.value})},n.handleOnSave=function(e){e.preventDefault();var t={task:{name:n.state.taskNameInput}};fetch("https://todolist-endpoints.herokuapp.com/projects/"+n.props.projectId+"/tasks/"+n.state.id,{method:"PATCH",body:JSON.stringify(t),headers:{Accept:"application/json",Authorization:n.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 200:n.props.setSuccessMessage('Task "'+n.state.name+'" successfully updated!'),n.setState({name:n.state.taskNameInput,taskEditorIsOpen:!1});break;case 401:n.props.destroyAuthToken(),n.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return n.props.setErrorMessage(e.message)}))},n.handleOnTrash=function(e){e.preventDefault(),fetch("https://todolist-endpoints.herokuapp.com/projects/"+n.props.projectId+"/tasks/"+n.state.id,{method:"DELETE",headers:{Accept:"application/json",Authorization:n.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 200:n.props.setSuccessMessage('Task "'+n.state.name+'" successfully deleted!'),n.props.deleteComponent(n.state.id);break;case 401:n.props.destroyAuthToken(),n.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return n.props.setErrorMessage(e.message)}))},n.completeTask=function(e){e.preventDefault(),fetch("https://todolist-endpoints.herokuapp.com/tasks/"+n.state.id+"/complete",{method:"PATCH",headers:{Accept:"application/json",Authorization:n.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 200:n.setState({completed:!0}),n.props.setSuccessMessage('Task "'+n.state.name+'" successfully completed!');break;case 401:n.props.destroyAuthToken(),n.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return n.props.setErrorMessage(e.message)}))},n.state={id:n.props.task.id,name:n.props.task.attributes.name,completed:n.props.task.attributes.completed,taskNameInput:"",taskEditorIsOpen:!1},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,this.state.taskEditorIsOpen?o.a.createElement(P,{submitBtnName:"Save",inputValue:this.state.taskNameInput,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSave,handleOnCancel:this.handleOnCancel}):o.a.createElement("div",{className:"task"},o.a.createElement("div",{className:"task__title"},this.state.completed?o.a.createElement(m.a,{icon:A,className:"task__element"}):o.a.createElement(m.a,{icon:z,className:"task__element",onClick:this.completeTask}),o.a.createElement("span",{className:this.state.completed?"task__completed":"task__not-completed"},this.state.name)),o.a.createElement("div",{className:"task__controls"},o.a.createElement(m.a,{icon:f.d,className:"task__element",onClick:this.handleOnEdit}),o.a.createElement(m.a,{icon:f.f,className:"task__element",onClick:this.handleOnTrash}))))},a}(o.a.Component),V={destroyAuthToken:d.c,setSuccessMessage:i.m,setErrorMessage:i.l},Y=Object(p.b)((function(e){return{authToken:e.auth.token}}),V)(x);n("91GP");var D=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleOnCancel=function(){n.setState(Object.assign({},n.state,{taskNameInput:""}))},n.handleOnChange=function(e){n.setState(Object.assign({},n.state,{taskNameInput:e.target.value}))},n.handleOnSubmit=function(e){e.preventDefault();var t={task:{name:n.state.taskNameInput}};fetch("https://todolist-endpoints.herokuapp.com/projects/"+n.props.projectId+"/tasks",{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json",Authorization:n.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 201:e.json().then((function(e){return n.props.addTaskComponent(e.data)})),n.props.setSuccessMessage('Task "'+n.state.taskNameInput+'" successfully created!'),n.handleOnCancel();break;case 422:n.props.setErrorMessage("The task with such name does already exist.");break;case 401:n.props.destroyAuthToken(),n.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return n.props.setErrorMessage(e.message)}))},n.state={taskNameInput:""},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement("div",{className:"task__new-form"},o.a.createElement(P,{submitBtnName:"Create Task",hideControlsIfEmpty:"true",inputValue:this.state.taskNameInput,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSubmit,handleOnCancel:this.handleOnCancel}))},a}(o.a.Component),L={destroyAuthToken:d.c,setSuccessMessage:i.m,setErrorMessage:i.l},B=Object(p.b)((function(e){return{authToken:e.auth.token}}),L)(D);function H(e){var t=e.tasks.map((function(t){return o.a.createElement(Y,{key:t.id,projectId:e.projectId,task:t,deleteComponent:e.deleteTaskComponent})}));return o.a.createElement("div",null,t)}var q=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).addTaskComponent=function(e){n.setState({tasks:n.state.tasks.concat([e])})},n.deleteTaskComponent=function(e){n.setState({tasks:n.state.tasks.filter(function(e){return function(t){return t.id!==e}}(e))})},n.state={tasks:[]},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.componentWillMount=function(){var e=this;fetch("https://todolist-endpoints.herokuapp.com/projects/"+this.props.projectId+"/tasks",{method:"GET",headers:{Accept:"application/json",Authorization:this.props.authToken,"Content-Type":"application/json"}}).then((function(t){switch(t.status){case 200:t.json().then((function(t){return e.setState({tasks:t.data})}));break;case 401:e.props.destroyAuthToken(),e.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(t){return e.props.setErrorMessage(t.message)}))},s.render=function(){return o.a.createElement("div",{className:"tasks-list hidden"},o.a.createElement(H,{projectId:this.props.projectId,tasks:this.state.tasks,deleteTaskComponent:this.deleteTaskComponent}),o.a.createElement(B,{projectId:this.props.projectId,addTaskComponent:this.addTaskComponent}))},a}(o.a.Component),J={destroyAuthToken:d.c,setErrorMessage:i.l},G=Object(p.b)((function(e){return{authToken:e.auth.token}}),J)(q);var W=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleOnEdit=function(){n.setState({projectNameInput:n.state.name,projectEditorIsOpen:!0})},n.handleOnCancel=function(){n.setState({projectNameInput:"",projectEditorIsOpen:!1})},n.handleOnChange=function(e){n.setState({projectNameInput:e.target.value})},n.handleOnSave=function(e){e.preventDefault();var t={project:{name:n.state.projectNameInput}};"undefined"!=typeof window&&window.fetch("https://todolist-endpoints.herokuapp.com/projects/"+n.state.id,{method:"PATCH",body:JSON.stringify(t),headers:{Accept:"application/json",Authorization:n.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 200:n.props.setSuccessMessage('Project "'+n.state.name+'" successfully updated!'),n.setState({name:n.state.projectNameInput,projectEditorIsOpen:!1});break;case 401:n.props.destroyAuthToken(),n.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return n.props.setErrorMessage(e.message)}))},n.handleOnTrash=function(e){e.stopPropagation(),fetch("https://todolist-endpoints.herokuapp.com/projects/"+n.state.id,{method:"DELETE",headers:{Accept:"application/json",Authorization:n.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 200:n.props.setSuccessMessage('Project "'+n.state.name+'" successfully deleted!'),n.props.deleteComponent(n.state.id);break;case 401:n.props.destroyAuthToken(),n.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return n.props.setErrorMessage(e.message)}))},n.handleTitleClick=function(e){e.stopPropagation();var t=e.target.closest(".project"),n=t.parentNode.querySelector(".tasks-list"),a=t.querySelector(".fa-caret-right"),o=t.querySelector(".fa-caret-down");t.classList.toggle("project__expanded"),n.classList.toggle("hidden"),a.classList.toggle("hidden"),o.classList.toggle("hidden")},n.state={id:n.props.project.id,name:n.props.project.attributes.name,projectNameInput:"",projectEditorIsOpen:!1},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,this.state.projectEditorIsOpen?o.a.createElement(w,{submitBtnName:"Save",inputValue:this.state.projectNameInput,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSave,handleOnCancel:this.handleOnCancel}):o.a.createElement("div",null,o.a.createElement("div",{className:"form-control form__element project",onClick:this.handleTitleClick},o.a.createElement("div",{className:"project__title"},o.a.createElement(m.a,{icon:f.b,className:"project__element"}),o.a.createElement(m.a,{icon:f.a,className:"project__element hidden"}),o.a.createElement("span",{className:"project__element"},this.state.name)),o.a.createElement("div",{className:"project__controls"},o.a.createElement(m.a,{icon:f.d,className:"project__element",onClick:this.handleOnEdit}),o.a.createElement(m.a,{icon:f.f,className:"project__element",onClick:this.handleOnTrash}))),o.a.createElement(G,{projectId:this.state.id})))},a}(o.a.Component),F={destroyAuthToken:d.c,setSuccessMessage:i.m,setErrorMessage:i.l},R=Object(p.b)((function(e){return{authToken:e.auth.token}}),F)(W);var K=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleOnCancel=function(){n.setState(Object.assign({},n.state,{projectNameInput:""}))},n.handleOnChange=function(e){n.setState(Object.assign({},n.state,{projectNameInput:e.target.value}))},n.handleOnSubmit=function(e){e.preventDefault();var t={project:{name:n.state.projectNameInput}};"undefined"!=typeof window&&window.fetch("https://todolist-endpoints.herokuapp.com/projects",{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json",Authorization:n.props.authToken,"Content-Type":"application/json"}}).then((function(e){switch(e.status){case 201:e.json().then((function(e){return n.props.addProjectComponent(e.data)})),n.props.setSuccessMessage('Project "'+n.state.projectNameInput+'" successfully created!'),n.handleOnCancel();break;case 422:n.props.setErrorMessage("The project with such name does already exist.");break;case 401:n.props.destroyAuthToken(),n.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(e){return n.props.setErrorMessage(e.message)}))},n.state={projectNameInput:""},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement("div",{className:"project__new-form"},o.a.createElement(w,{submitBtnName:"Create Project",hideControlsIfEmpty:"true",inputValue:this.state.projectNameInput,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSubmit,handleOnCancel:this.handleOnCancel}))},a}(o.a.Component),Q={destroyAuthToken:d.c,setSuccessMessage:i.m,setErrorMessage:i.l},X=Object(p.b)((function(e){return{authToken:e.auth.token}}),Q)(K);function U(e){var t=e.projects.map((function(t){return o.a.createElement(R,{key:t.id,project:t,deleteComponent:e.deleteProjectComponent})}));return o.a.createElement("div",null,t)}var Z=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).addProjectComponent=function(e){n.setState({projects:n.state.projects.concat([e])})},n.deleteProjectComponent=function(e){n.setState({projects:n.state.projects.filter(function(e){return function(t){return t.id!==e}}(e))})},n.state={projects:[]},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.componentWillMount=function(){var e=this;"undefined"!=typeof window&&window.fetch("https://todolist-endpoints.herokuapp.com/projects",{method:"GET",headers:{Accept:"application/json",Authorization:this.props.authToken,"Content-Type":"application/json"}}).then((function(t){switch(t.status){case 200:t.json().then((function(t){return e.setState({projects:t.data})}));break;case 401:e.props.destroyAuthToken(),e.props.setErrorMessage("You are not authorized to perform this action."),Object(c.navigate)("/sign_in")}})).catch((function(t){return e.props.setErrorMessage(t.message)}))},s.render=function(){return o.a.createElement("div",null,o.a.createElement("h3",{className:"todo__title"},"Projects"),o.a.createElement(U,{projects:this.state.projects,deleteProjectComponent:this.deleteProjectComponent}),o.a.createElement(X,{addProjectComponent:this.addProjectComponent}))},a}(o.a.Component),$={destroyAuthToken:d.c,setErrorMessage:i.l},ee=Object(p.b)((function(e){return{authToken:e.auth.token}}),$)(Z);t.default=function(){return o.a.createElement(s.a,{pageInfo:{pageName:"index"}},o.a.createElement(r.a,{title:"Home",keywords:["gatsby","react","bootstrap"]}),o.a.createElement(h,null,o.a.createElement("div",{className:"todo__content_wrapper"},o.a.createElement(ee,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0f292681b0d4f317c265.js.map