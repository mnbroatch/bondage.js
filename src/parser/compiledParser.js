var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,19],$V1=[1,20],$V2=[1,12],$V3=[1,18],$V4=[1,17],$V5=[5,18,19,24,35,37,80],$V6=[1,24],$V7=[1,25],$V8=[1,27],$V9=[1,28],$Va=[5,14,16,22,24,35,37],$Vb=[5,14,16,18,19,22,24,35,37,80],$Vc=[1,31],$Vd=[1,32],$Ve=[1,35],$Vf=[1,36],$Vg=[1,37],$Vh=[1,38],$Vi=[5,14,16,18,22,24,35,37,80],$Vj=[1,42],$Vk=[1,52],$Vl=[1,51],$Vm=[1,46],$Vn=[1,47],$Vo=[1,48],$Vp=[1,53],$Vq=[1,54],$Vr=[1,55],$Vs=[1,56],$Vt=[1,57],$Vu=[5,16,18,19,24,35,37,80],$Vv=[1,68],$Vw=[1,79],$Vx=[1,80],$Vy=[1,81],$Vz=[1,82],$VA=[1,83],$VB=[1,84],$VC=[1,85],$VD=[1,86],$VE=[1,87],$VF=[1,88],$VG=[1,89],$VH=[1,90],$VI=[1,91],$VJ=[1,92],$VK=[1,93],$VL=[27,50,55,57,58,59,60,61,62,64,65,66,67,68,69,70,71,72,74,81],$VM=[27,38,50,55,57,58,59,60,61,62,64,65,66,67,68,69,70,71,72,74,75,76,77,78,79,80,81],$VN=[27,38,75,76,77,78,79,80],$VO=[27,50,55,57,58,59,60,61,64,65,66,67,68,69,70,71,72,74,81],$VP=[27,50,55,74,81],$VQ=[1,132],$VR=[1,133],$VS=[27,50,55,57,58,64,65,66,67,68,69,70,71,72,74,81],$VT=[27,50,55,64,65,66,67,68,69,70,71,72,74,81],$VU=[55,74],$VV=[16,18,19,24,35,80];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"node":3,"statements":4,"EndOfInput":5,"conditionalBlock":6,"statement":7,"text":8,"shortcut":9,"genericCommand":10,"assignmentCommand":11,"jumpCommand":12,"stopCommand":13,"Comment":14,"hashtags":15,"EndOfLine":16,"escapedTextRaw":17,"Text":18,"EscapedCharacter":19,"escapedText":20,"inlineExpression":21,"Hashtag":22,"conditional":23,"BeginCommand":24,"If":25,"expression":26,"EndCommand":27,"EndIf":28,"additionalConditionalBlocks":29,"else":30,"Else":31,"elseif":32,"ElseIf":33,"shortcutOption":34,"ShortcutOption":35,"Indent":36,"Dedent":37,"Identifier":38,"genericCommandArguments":39,"genericCommandArgument":40,"literal":41,"Jump":42,"Stop":43,"setCommandInner":44,"declareCommandInner":45,"Set":46,"Variable":47,"EqualToOrAssign":48,"Declare":49,"As":50,"ExplicitType":51,"functionArgument":52,"functionCall":53,"LeftParen":54,"RightParen":55,"UnaryMinus":56,"Add":57,"Minus":58,"Exponent":59,"Multiply":60,"Divide":61,"Modulo":62,"Not":63,"Or":64,"And":65,"Xor":66,"EqualTo":67,"NotEqualTo":68,"GreaterThan":69,"GreaterThanOrEqualTo":70,"LessThan":71,"LessThanOrEqualTo":72,"parenExpressionArgs":73,"Comma":74,"True":75,"False":76,"Number":77,"String":78,"Null":79,"BeginInlineExp":80,"EndInlineExp":81,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EndOfInput",14:"Comment",16:"EndOfLine",18:"Text",19:"EscapedCharacter",22:"Hashtag",24:"BeginCommand",25:"If",27:"EndCommand",28:"EndIf",31:"Else",33:"ElseIf",35:"ShortcutOption",36:"Indent",37:"Dedent",38:"Identifier",42:"Jump",43:"Stop",46:"Set",47:"Variable",48:"EqualToOrAssign",49:"Declare",50:"As",51:"ExplicitType",54:"LeftParen",55:"RightParen",56:"UnaryMinus",57:"Add",58:"Minus",59:"Exponent",60:"Multiply",61:"Divide",62:"Modulo",63:"Not",64:"Or",65:"And",66:"Xor",67:"EqualTo",68:"NotEqualTo",69:"GreaterThan",70:"GreaterThanOrEqualTo",71:"LessThan",72:"LessThanOrEqualTo",74:"Comma",75:"True",76:"False",77:"Number",78:"String",79:"Null",80:"BeginInlineExp",81:"EndInlineExp"},
productions_: [0,[3,2],[4,1],[4,2],[4,1],[4,2],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,2],[7,2],[7,2],[17,1],[17,1],[17,2],[17,2],[20,1],[8,1],[8,1],[8,2],[15,1],[15,2],[23,4],[6,6],[6,4],[6,2],[30,3],[30,2],[32,4],[32,2],[29,5],[29,5],[29,3],[34,2],[34,3],[34,2],[34,2],[34,3],[34,2],[9,1],[9,5],[10,3],[10,4],[39,1],[39,2],[40,1],[40,1],[40,1],[12,4],[12,4],[13,3],[11,3],[11,3],[44,4],[45,4],[45,6],[26,1],[26,1],[26,3],[26,2],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,2],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[53,3],[53,4],[73,3],[73,1],[52,1],[52,1],[52,1],[41,1],[41,1],[41,1],[41,1],[41,1],[21,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1].flat();
break;
case 2: case 4: case 7: case 8: case 9: case 10: case 11: case 21: case 46: case 82:
this.$ = [$$[$0]];
break;
case 3:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 5: case 47:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 6: case 60:
this.$ = $$[$0]
break;
case 12: case 14: case 28: case 31: case 32: case 54: case 61:
this.$ = $$[$0-1];
break;
case 13:
this.$ = $$[$0-1].map(s => Object.assign(s, { hashtags: $$[$0] }));
break;
case 15: case 48: case 49: case 59: case 83: case 84:
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
this.$ = new yy.FunctionResultNode($$[$0-1], [], this._$);
break;
case 45:
this.$ = new yy.FunctionResultNode($$[$0-2], $$[$0-1], this._$);
break;
case 50:
this.$ = new yy.TextNode($$[$0]);
break;
case 51: case 52:
this.$ = new yy.JumpNode($$[$0-1]);
break;
case 53:
this.$ = new yy.StopNode();
break;
case 55:
this.$ = null
break;
case 56:
this.$ = new yy.SetVariableEqualToNode($$[$0-2].substring(1), $$[$0]);
break;
case 57:
this.$ = null;yy.registerDeclaration($$[$0-2].substring(1), $$[$0])
break;
case 58:
this.$ = null;yy.registerDeclaration($$[$0-4].substring(1), $$[$0-2], $$[$0])
break;
case 62:
this.$ = new yy.UnaryMinusExpressionNode($$[$0]);
break;
case 63:
this.$ = new yy.ArithmeticExpressionAddNode($$[$0-2], $$[$0]);
break;
case 64:
this.$ = new yy.ArithmeticExpressionMinusNode($$[$0-2], $$[$0]);
break;
case 65:
this.$ = new yy.ArithmeticExpressionExponentNode($$[$0-2], $$[$0]);
break;
case 66:
this.$ = new yy.ArithmeticExpressionMultiplyNode($$[$0-2], $$[$0]);
break;
case 67:
this.$ = new yy.ArithmeticExpressionDivideNode($$[$0-2], $$[$0]);
break;
case 68:
this.$ = new yy.ArithmeticExpressionModuloNode($$[$0-2], $$[$0]);
break;
case 69:
this.$ = new yy.NegatedBooleanExpressionNode($$[$0]);
break;
case 70:
this.$ = new yy.BooleanOrExpressionNode($$[$0-2], $$[$0]);
break;
case 71:
this.$ = new yy.BooleanAndExpressionNode($$[$0-2], $$[$0]);
break;
case 72:
this.$ = new yy.BooleanXorExpressionNode($$[$0-2], $$[$0]);
break;
case 73:
this.$ = new yy.EqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 74:
this.$ = new yy.NotEqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 75:
this.$ = new yy.GreaterThanExpressionNode($$[$0-2], $$[$0]);
break;
case 76:
this.$ = new yy.GreaterThanOrEqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 77:
this.$ = new yy.LessThanExpressionNode($$[$0-2], $$[$0]);
break;
case 78:
this.$ = new yy.LessThanOrEqualToExpressionNode($$[$0-2], $$[$0]);
break;
case 79:
this.$ = new yy.FunctionResultNode($$[$0-2], []);
break;
case 80:
this.$ = new yy.FunctionResultNode($$[$0-3], $$[$0-1]);
break;
case 81:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 85:
this.$ = new yy.VariableNode($$[$0].substring(1));
break;
case 86: case 87:
this.$ = new yy.BooleanLiteralNode($$[$0]);
break;
case 88:
this.$ = new yy.NumericLiteralNode($$[$0]);
break;
case 89:
this.$ = new yy.StringLiteralNode($$[$0]);
break;
case 90:
this.$ = new yy.NullLiteralNode($$[$0]);
break;
case 91:
this.$ = new yy.InlineExpressionNode($$[$0-1], this._$);
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,80:$V4},{1:[3]},{5:[1,21],6:22,7:23,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,80:$V4},o($V5,[2,2],{16:$V6}),o($V5,[2,4],{15:26,14:$V7,16:$V8,22:$V9}),{16:[1,29]},o($Va,[2,6],{20:13,21:14,17:16,8:30,18:$V0,19:$V1,80:$V4}),o($Vb,[2,7]),o($Vb,[2,8]),o($Vb,[2,9]),o($Vb,[2,10]),o($Vb,[2,11]),{25:$Vc,38:$Vd,42:$Ve,43:$Vf,44:33,45:34,46:$Vg,49:$Vh},o($Vb,[2,20]),o($Vb,[2,21]),o($V5,[2,42],{15:40,14:[1,41],16:[1,39],22:$V9}),o($Vi,[2,19],{19:$Vj}),{21:49,26:43,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{8:58,17:16,18:$V0,19:$V1,20:13,21:14,80:$V4},o($Vb,[2,15]),o([5,14,16,22,24,35,37,80],[2,16],{17:59,18:$V0,19:$V1}),{1:[2,1]},o($V5,[2,3],{16:$V6}),o($V5,[2,5],{15:26,14:$V7,16:$V8,22:$V9}),o($Vu,[2,28]),o($Vb,[2,12]),o($Vb,[2,13]),o($Vb,[2,14]),o([5,14,16,18,19,24,35,37,80],[2,23],{15:60,22:$V9}),{4:61,6:3,7:4,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,80:$V4},o($Va,[2,22],{20:13,21:14,17:16,8:30,18:$V0,19:$V1,80:$V4}),{21:49,26:62,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:66,27:[1,63],38:$Vv,39:64,40:65,41:67,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{27:[1,69]},{27:[1,70]},{21:72,38:[1,71],80:$V4},{27:[1,73]},{47:[1,74]},{47:[1,75]},o($Vb,[2,41],{36:[1,76]}),o([5,16,18,19,22,24,35,37,80],[2,38],{14:[1,77]}),o($Vb,[2,39]),o($Vb,[2,17]),{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,64:$VC,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK,81:[1,78]},o($VL,[2,59]),o($VL,[2,60]),{21:49,26:94,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:95,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:96,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},o($VL,[2,83]),o($VL,[2,84]),o($VL,[2,85]),{54:[1,97]},o($VM,[2,86]),o($VM,[2,87]),o($VM,[2,88]),o($VM,[2,89]),o($VM,[2,90]),o([5,14,16,22,35,37],[2,36],{20:13,21:14,17:16,8:30,23:98,18:$V0,19:$V1,24:[1,99],80:$V4}),o($Vi,[2,18],{19:$Vj}),o($Vb,[2,24]),{6:22,7:23,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:[1,100],29:101,30:102,32:103,34:15,35:$V3,80:$V4},{27:[1,104],57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,64:$VC,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK},o($Vb,[2,44]),{21:66,27:[1,105],38:$Vv,40:106,41:67,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},o($VN,[2,46]),o($VN,[2,48]),o($VN,[2,49]),o($VN,[2,50]),o($Vb,[2,54]),o($Vb,[2,55]),{27:[1,107]},{27:[1,108]},o($Vb,[2,53]),{48:[1,109]},{48:[1,110]},{4:111,6:3,7:4,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,80:$V4},o($Vb,[2,40]),o([5,14,16,18,19,22,24,27,35,37,38,50,55,57,58,59,60,61,62,64,65,66,67,68,69,70,71,72,74,75,76,77,78,79,80,81],[2,91]),{21:49,26:112,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:113,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:114,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:115,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:116,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:117,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:118,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:119,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:120,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:121,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:122,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:123,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:124,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:125,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:126,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{55:[1,127],57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,64:$VC,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK},o($VO,[2,62],{62:$VB}),o($VP,[2,69],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,64:$VC,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK}),{21:49,26:130,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,55:[1,128],56:$Vn,63:$Vo,73:129,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},o($Vb,[2,37]),{25:$Vc},{25:$Vc,28:[1,131],31:$VQ,33:$VR,38:$Vd,42:$Ve,43:$Vf,44:33,45:34,46:$Vg,49:$Vh},o($Vu,[2,27]),{4:134,6:3,7:4,8:6,9:7,10:8,11:9,12:10,13:11,16:[1,135],17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,80:$V4},{4:136,6:3,7:4,8:6,9:7,10:8,11:9,12:10,13:11,16:[1,137],17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,80:$V4},o($Vb,[2,25]),o($Vb,[2,45]),o($VN,[2,47]),o($Vb,[2,51]),o($Vb,[2,52]),{21:49,26:138,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{21:49,26:139,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{6:22,7:23,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:$V2,34:15,35:$V3,37:[1,140],80:$V4},o($VS,[2,63],{59:$Vy,60:$Vz,61:$VA,62:$VB}),o($VS,[2,64],{59:$Vy,60:$Vz,61:$VA,62:$VB}),o($VO,[2,65],{62:$VB}),o($VO,[2,66],{62:$VB}),o($VO,[2,67],{62:$VB}),o($VP,[2,68],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,64:$VC,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK}),o([27,50,55,64,74,81],[2,70],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK}),o([27,50,55,64,65,74,81],[2,71],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK}),o([27,50,55,64,65,66,74,81],[2,72],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK}),o($VT,[2,73],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB}),o($VT,[2,74],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB}),o($VT,[2,75],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB}),o($VT,[2,76],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB}),o($VT,[2,77],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB}),o($VT,[2,78],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB}),o($VL,[2,61]),o($VL,[2,79]),{55:[1,141],74:[1,142]},o($VU,[2,82],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,64:$VC,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK}),{27:[1,143]},{27:[1,144]},{21:49,26:145,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},{6:22,7:23,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:[1,146],34:15,35:$V3,80:$V4},o($VV,[2,30]),{6:22,7:23,8:6,9:7,10:8,11:9,12:10,13:11,17:16,18:$V0,19:$V1,20:13,21:14,23:5,24:[1,147],29:148,30:102,32:103,34:15,35:$V3,80:$V4},o($VV,[2,32]),{27:[2,56],57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,64:$VC,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK},{27:[2,57],50:[1,149],57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,64:$VC,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK},o($Vb,[2,43]),o($VL,[2,80]),{21:49,26:150,38:$Vk,41:50,47:$Vl,52:44,53:45,54:$Vm,56:$Vn,63:$Vo,75:$Vp,76:$Vq,77:$Vr,78:$Vs,79:$Vt,80:$V4},o($Vu,[2,26]),o($VV,[2,29]),{27:[1,151],57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,64:$VC,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK},{25:$Vc,28:[1,152],38:$Vd,42:$Ve,43:$Vf,44:33,45:34,46:$Vg,49:$Vh},{25:$Vc,28:[1,153],31:$VQ,33:$VR,38:$Vd,42:$Ve,43:$Vf,44:33,45:34,46:$Vg,49:$Vh},o($Vu,[2,35]),{51:[1,154]},o($VU,[2,81],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,62:$VB,64:$VC,65:$VD,66:$VE,67:$VF,68:$VG,69:$VH,70:$VI,71:$VJ,72:$VK}),o($VV,[2,31]),{27:[1,155]},{27:[1,156]},{27:[2,58]},o($Vu,[2,33]),o($Vu,[2,34])],
defaultActions: {21:[2,1],154:[2,58]},
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