var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,19],$V1=[1,20],$V2=[1,12],$V3=[1,18],$V4=[1,17],$V5=[5,18,19,24,35,37,78],$V6=[1,24],$V7=[1,25],$V8=[1,27],$V9=[1,28],$Va=[5,14,16,18,19,22,24,35,37,78],$Vb=[1,31],$Vc=[1,35],$Vd=[1,36],$Ve=[1,37],$Vf=[1,38],$Vg=[5,14,16,18,19,22,24,27,35,37,78],$Vh=[5,14,16,18,22,24,27,35,37,78],$Vi=[1,42],$Vj=[1,52],$Vk=[1,51],$Vl=[1,46],$Vm=[1,47],$Vn=[1,48],$Vo=[1,53],$Vp=[1,54],$Vq=[1,55],$Vr=[1,56],$Vs=[1,57],$Vt=[5,16,18,19,24,35,37,78],$Vu=[1,74],$Vv=[1,75],$Vw=[1,76],$Vx=[1,77],$Vy=[1,78],$Vz=[1,79],$VA=[1,80],$VB=[1,81],$VC=[1,82],$VD=[1,83],$VE=[1,84],$VF=[1,85],$VG=[1,86],$VH=[1,87],$VI=[1,88],$VJ=[27,47,52,54,55,56,57,58,59,61,62,63,64,65,66,67,68,69,71,79],$VK=[27,47,52,54,55,56,57,58,61,62,63,64,65,66,67,68,69,71,79],$VL=[27,47,52,71,79],$VM=[1,125],$VN=[1,126],$VO=[27,47,52,54,55,61,62,63,64,65,66,67,68,69,71,79],$VP=[27,47,52,61,62,63,64,65,66,67,68,69,71,79],$VQ=[52,71],$VR=[16,18,19,24,35,78];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"node":3,"statements":4,"EndOfInput":5,"conditionalBlock":6,"statement":7,"text":8,"shortcut":9,"genericCommand":10,"assignmentCommand":11,"jumpCommand":12,"stopCommand":13,"Comment":14,"hashtags":15,"EndOfLine":16,"escapedTextRaw":17,"Text":18,"EscapedCharacter":19,"escapedText":20,"inlineExpression":21,"Hashtag":22,"conditional":23,"BeginCommand":24,"If":25,"expression":26,"EndCommand":27,"EndIf":28,"additionalConditionalBlocks":29,"else":30,"Else":31,"elseif":32,"ElseIf":33,"shortcutOption":34,"ShortcutOption":35,"Indent":36,"Dedent":37,"Jump":38,"Identifier":39,"Stop":40,"setCommandInner":41,"declareCommandInner":42,"Set":43,"Variable":44,"EqualToOrAssign":45,"Declare":46,"As":47,"ExplicitType":48,"functionArgument":49,"functionCall":50,"LeftParen":51,"RightParen":52,"UnaryMinus":53,"Add":54,"Minus":55,"Exponent":56,"Multiply":57,"Divide":58,"Modulo":59,"Not":60,"Or":61,"And":62,"Xor":63,"EqualTo":64,"NotEqualTo":65,"GreaterThan":66,"GreaterThanOrEqualTo":67,"LessThan":68,"LessThanOrEqualTo":69,"parenExpressionArgs":70,"Comma":71,"literal":72,"True":73,"False":74,"Number":75,"String":76,"Null":77,"BeginInlineExp":78,"EndInlineExp":79,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EndOfInput",14:"Comment",16:"EndOfLine",18:"Text",19:"EscapedCharacter",22:"Hashtag",24:"BeginCommand",25:"If",27:"EndCommand",28:"EndIf",31:"Else",33:"ElseIf",35:"ShortcutOption",36:"Indent",37:"Dedent",38:"Jump",39:"Identifier",40:"Stop",43:"Set",44:"Variable",45:"EqualToOrAssign",46:"Declare",47:"As",48:"ExplicitType",51:"LeftParen",52:"RightParen",53:"UnaryMinus",54:"Add",55:"Minus",56:"Exponent",57:"Multiply",58:"Divide",59:"Modulo",60:"Not",61:"Or",62:"And",63:"Xor",64:"EqualTo",65:"NotEqualTo",66:"GreaterThan",67:"GreaterThanOrEqualTo",68:"LessThan",69:"LessThanOrEqualTo",71:"Comma",73:"True",74:"False",75:"Number",76:"String",77:"Null",78:"BeginInlineExp",79:"EndInlineExp"},
productions_: [0,[3,2],[4,1],[4,2],[4,1],[4,2],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,2],[7,2],[7,2],[17,1],[17,1],[17,2],[17,2],[20,1],[8,1],[8,1],[8,2],[15,1],[15,2],[23,4],[6,6],[6,4],[6,2],[30,3],[30,2],[32,4],[32,2],[29,5],[29,5],[29,3],[34,2],[34,3],[34,2],[34,2],[34,3],[34,2],[9,1],[9,5],[10,3],[12,4],[12,4],[13,3],[11,3],[11,3],[41,4],[42,4],[42,6],[26,1],[26,1],[26,3],[26,2],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,2],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[50,3],[50,4],[70,3],[70,1],[49,1],[49,1],[49,1],[72,1],[72,1],[72,1],[72,1],[72,1],[21,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1].flat();
break;
case 2: case 4: case 7: case 8: case 9: case 10: case 11: case 21: case 76:
this.$ = [$$[$0]];
break;
case 3:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 5:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 6: case 54:
this.$ = $$[$0]
break;
case 12: case 14: case 28: case 31: case 32: case 48: case 55:
this.$ = $$[$0-1];
break;
case 13:
this.$ = $$[$0-1].map(s => Object.assign(s, { hashtags: $$[$0] }));
break;
case 15: case 53: case 77: case 78:
this.$ = $$[$0];
break;
case 16:
this.$ = $$[$0].substring(1);
break;
case 17:
this.$ = $$[$0-1].concat($$[$0].substring(1));
break;
case 18:
this.$ = $$[$0-1].substring(1).concat($$[$0]);
break;
case 19:
this.$ = new yy.TextNode($$[$0], this._$);
break;
case 20:
this.$ = [$$[$0]]
break;
case 22:
this.$ = $$[$0-1].concat($$[$0]); 
break;
case 23:
this.$ = [$$[$0].substring(1)];
break;
case 24:
this.$ = [$$[$0-1].substring(1)].concat($$[$0]);
break;
case 25: case 39: case 41:
this.$ = $$[$0-1]
break;
case 26:
this.$ = new yy.IfNode($$[$0-5], $$[$0-3].flat());
break;
case 27:
this.$ = new yy.IfElseNode($$[$0-3], $$[$0-1].flat(), $$[$0]);
break;
case 29: case 30:
this.$ = undefined
break;
case 33:
this.$ = new yy.ElseNode($$[$0-3].flat());
break;
case 34:
this.$ = new yy.ElseIfNode($$[$0-4], $$[$0-3].flat());
break;
case 35:
this.$ = new yy.ElseIfNode($$[$0-2], $$[$0-1].flat(), $$[$0]);
break;
case 36:
this.$ = { text: $$[$0] };
break;
case 37:
this.$ = { text: $$[$0-1], conditional: $$[$0] };
break;
case 38:
this.$ = { ...$$[$0-1], hashtags: $$[$0] }
break;
case 40:
this.$ = { ...$$[$0-2], hashtags: $$[$0-1] }
break;
case 42:
this.$ = new yy.DialogShortcutNode($$[$0].text, undefined, this._$, $$[$0].hashtags, $$[$0].conditional);
break;
case 43:
this.$ = new yy.DialogShortcutNode($$[$0-4].text, $$[$0-1].flat(), this._$, $$[$0-4].hashtags, $$[$0-4].conditional);
break;
case 44:
this.$ = new yy.GenericCommandNode($$[$0-1], this._$);
break;
case 45: case 46:
this.$ = new yy.JumpCommandNode($$[$0-1]);
break;
case 47:
this.$ = new yy.StopCommandNode();
break;
case 49:
this.$ = null
break;
case 50:
this.$ = new yy.SetVariableEqualToNode($$[$0-2].substring(1), $$[$0]);
break;
case 51:
this.$ = null;yy.registerDeclaration($$[$0-2].substring(1), $$[$0])
break;
case 52:
this.$ = null;yy.registerDeclaration($$[$0-4].substring(1), $$[$0-2], $$[$0])
break;
case 56:
this.$ = new yy.UnaryMinusExpressionNode($$[$0]);
break;
case 57:
this.$ = new yy.ArithmeticExpressionAddNode($$[$0-2], $$[$0]);
break;
case 58:
this.$ = new yy.ArithmeticExpressionMinusNode($$[$0-2], $$[$0]);
break;
case 59:
this.$ = new yy.ArithmeticExpressionExponentNode($$[$0-2], $$[$0]);
break;
case 60:
this.$ = new yy.ArithmeticExpressionMultiplyNode($$[$0-2], $$[$0]);
break;
case 61:
this.$ = new yy.ArithmeticExpressionDivideNode($$[$0-2], $$[$0]);
break;
case 62:
this.$ = new yy.ArithmeticExpressionModuloNode($$[$0-2], $$[$0]);
break;
case 63:
this.$ = new yy.NegatedBooleanExpressionNode($$[$0]);
break;
case 64:
this.$ = new yy.BooleanOrExpressionNode($$[$0-2], $$[$0]);
break;
case 65:
this.$ = new yy.BooleanAndExpressionNode($$[$0-2], $$[$0]);
break;
case 66:
this.$ = new yy.BooleanXorExpressionNode($$[$0-2], $$[$0]);
break;
case 67:
this.$ = new yy.EqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 68:
this.$ = new yy.NotEqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 69:
this.$ = new yy.GreaterThanExpressionNode($$[$0-2], $$[$0]);
break;
case 70:
this.$ = new yy.GreaterThanOrEqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 71:
this.$ = new yy.LessThanExpressionNode($$[$0-2], $$[$0]);
break;
case 72:
this.$ = new yy.LessThanOrEqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 73:
this.$ = new yy.FunctionResultNode($$[$0-2], []);
break;
case 74:
this.$ = new yy.FunctionResultNode($$[$0-3], $$[$0-1]);
break;
case 75:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 79:
this.$ = new yy.VariableNode($$[$0].substring(1));
break;
case 80: case 81:
this.$ = new yy.BooleanLiteralNode($$[$0]);
break;
case 82:
this.$ = new yy.NumericLiteralNode($$[$0]);
break;
case 83:
this.$ = new yy.StringLiteralNode($$[$0]);
break;
case 84:
this.$ = new yy.NullLiteralNode($$[$0]);
break;
case 85:
this.$ = new yy.InlineExpressionNode($$[$0-1], this._$);
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,78:$V4},{1:[3]},{5:[1,21],6:22,7:23,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,78:$V4},o($V5,[2,2],{16:$V6}),o($V5,[2,4],{15:26,14:$V7,16:$V8,22:$V9}),{16:[1,29]},o([5,14,16,22,24,35,37],[2,6],{20:13,21:14,17:16,8:30,18:$V0,19:$V1,78:$V4}),o($Va,[2,7]),o($Va,[2,8]),o($Va,[2,9]),o($Va,[2,10]),o($Va,[2,11]),{8:32,17:16,18:$V0,19:$V1,20:13,21:14,25:$Vb,38:$Vc,40:$Vd,41:33,42:34,43:$Ve,46:$Vf,78:$V4},o($Vg,[2,20]),o($Vg,[2,21]),o($V5,[2,42],{15:40,14:[1,41],16:[1,39],22:$V9}),o($Vh,[2,19],{19:$Vi}),{21:49,26:43,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{8:58,17:16,18:$V0,19:$V1,20:13,21:14,78:$V4},o($Vg,[2,15]),o([5,14,16,22,24,27,35,37,78],[2,16],{17:59,18:$V0,19:$V1}),{1:[2,1]},o($V5,[2,3],{16:$V6}),o($V5,[2,5],{15:26,14:$V7,16:$V8,22:$V9}),o($Vt,[2,28]),o($Va,[2,12]),o($Va,[2,13]),o($Va,[2,14]),o([5,14,16,18,19,24,35,37,78],[2,23],{15:60,22:$V9}),{4:61,6:3,7:4,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,78:$V4},o([5,14,16,22,24,27,35,37],[2,22],{20:13,21:14,17:16,8:30,18:$V0,19:$V1,78:$V4}),{21:49,26:62,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{8:30,17:16,18:$V0,19:$V1,20:13,21:14,27:[1,63],78:$V4},{27:[1,64]},{27:[1,65]},{21:67,39:[1,66],78:$V4},{27:[1,68]},{44:[1,69]},{44:[1,70]},o($Va,[2,41],{36:[1,71]}),o([5,16,18,19,22,24,35,37,78],[2,38],{14:[1,72]}),o($Va,[2,39]),o($Vg,[2,17]),{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI,79:[1,73]},o($VJ,[2,53]),o($VJ,[2,54]),{21:49,26:89,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:90,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:91,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},o($VJ,[2,77]),o($VJ,[2,78]),o($VJ,[2,79]),{51:[1,92]},o($VJ,[2,80]),o($VJ,[2,81]),o($VJ,[2,82]),o($VJ,[2,83]),o($VJ,[2,84]),o([5,14,16,22,35,37],[2,36],{20:13,21:14,17:16,8:30,23:93,18:$V0,19:$V1,24:[1,94],78:$V4}),o($Vh,[2,18],{19:$Vi}),o($Va,[2,24]),{6:22,7:23,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:[1,95],29:96,30:97,32:98,34:15,35:$V3,78:$V4},{27:[1,99],54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI},o($Va,[2,44]),o($Va,[2,48]),o($Va,[2,49]),{27:[1,100]},{27:[1,101]},o($Va,[2,47]),{45:[1,102]},{45:[1,103]},{4:104,6:3,7:4,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,78:$V4},o($Va,[2,40]),o([5,14,16,18,19,22,24,27,35,37,47,52,54,55,56,57,58,59,61,62,63,64,65,66,67,68,69,71,78,79],[2,85]),{21:49,26:105,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:106,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:107,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:108,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:109,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:110,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:111,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:112,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:113,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:114,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:115,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:116,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:117,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:118,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:119,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{52:[1,120],54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI},o($VK,[2,56],{59:$Vz}),o($VL,[2,63],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI}),{21:49,26:123,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,52:[1,121],53:$Vm,60:$Vn,70:122,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},o($Va,[2,37]),{25:$Vb},{8:32,17:16,18:$V0,19:$V1,20:13,21:14,25:$Vb,28:[1,124],31:$VM,33:$VN,38:$Vc,40:$Vd,41:33,42:34,43:$Ve,46:$Vf,78:$V4},o($Vt,[2,27]),{4:127,6:3,7:4,8:6,9:7,10:8,11:9,12:10,13:11,16:[1,128],17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,78:$V4},{4:129,6:3,7:4,8:6,9:7,10:8,11:9,12:10,13:11,16:[1,130],17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,78:$V4},o($Va,[2,25]),o($Va,[2,45]),o($Va,[2,46]),{21:49,26:131,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{21:49,26:132,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{6:22,7:23,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,37:[1,133],78:$V4},o($VO,[2,57],{56:$Vw,57:$Vx,58:$Vy,59:$Vz}),o($VO,[2,58],{56:$Vw,57:$Vx,58:$Vy,59:$Vz}),o($VK,[2,59],{59:$Vz}),o($VK,[2,60],{59:$Vz}),o($VK,[2,61],{59:$Vz}),o($VL,[2,62],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI}),o([27,47,52,61,71,79],[2,64],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI}),o([27,47,52,61,62,71,79],[2,65],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI}),o([27,47,52,61,62,63,71,79],[2,66],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI}),o($VP,[2,67],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz}),o($VP,[2,68],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz}),o($VP,[2,69],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz}),o($VP,[2,70],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz}),o($VP,[2,71],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz}),o($VP,[2,72],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz}),o($VJ,[2,55]),o($VJ,[2,73]),{52:[1,134],71:[1,135]},o($VQ,[2,76],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI}),{27:[1,136]},{27:[1,137]},{21:49,26:138,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},{6:22,7:23,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:[1,139],34:15,35:$V3,78:$V4},o($VR,[2,30]),{6:22,7:23,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:[1,140],29:141,30:97,32:98,34:15,35:$V3,78:$V4},o($VR,[2,32]),{27:[2,50],54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI},{27:[2,51],47:[1,142],54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI},o($Va,[2,43]),o($VJ,[2,74]),{21:49,26:143,39:$Vj,44:$Vk,49:44,50:45,51:$Vl,53:$Vm,60:$Vn,72:50,73:$Vo,74:$Vp,75:$Vq,76:$Vr,77:$Vs,78:$V4},o($Vt,[2,26]),o($VR,[2,29]),{27:[1,144],54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI},{8:32,17:16,18:$V0,19:$V1,20:13,21:14,25:$Vb,28:[1,145],38:$Vc,40:$Vd,41:33,42:34,43:$Ve,46:$Vf,78:$V4},{8:32,17:16,18:$V0,19:$V1,20:13,21:14,25:$Vb,28:[1,146],31:$VM,33:$VN,38:$Vc,40:$Vd,41:33,42:34,43:$Ve,46:$Vf,78:$V4},o($Vt,[2,35]),{48:[1,147]},o($VQ,[2,75],{54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,61:$VA,62:$VB,63:$VC,64:$VD,65:$VE,66:$VF,67:$VG,68:$VH,69:$VI}),o($VR,[2,31]),{27:[1,148]},{27:[1,149]},{27:[2,52]},o($Vt,[2,33]),o($Vt,[2,34])],
defaultActions: {21:[2,1],147:[2,52]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Parser() { this.yy = {} };
Parser.prototype = parser;
parser.Parser = Parser;
export {parser, Parser};