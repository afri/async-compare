

var f,makefakes;function wrap(f){return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Nb(function(){return __oni_rt.Return(function (x,y){var err,val;return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Suspend(function(__oni_env,resume){return __oni_rt.ex(__oni_rt.Nb(function(){return f(x,y,resume);},8),__oni_env)}, function() {err=arguments[0];val=arguments[1];}),__oni_rt.Nb(function(){if(err)return __oni_rt.ex(__oni_rt.Sc(10,__oni_rt.Throw,__oni_rt.Nb(function(){return err},10),10,'lib/fakesSJS-src.sjs'),this);},10),__oni_rt.Nb(function(){return __oni_rt.Return(val);},11)])});},12)])}function dummy(){return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Nb(function(){if(global.asyncTime)return __oni_rt.ex(__oni_rt.Nb(function(){return __oni_rt.Hold(global.asyncTime || 100);},17),this);else return __oni_rt.ex(__oni_rt.Suspend(function(__oni_env,resume){return __oni_rt.ex(__oni_rt.C(function(){return process.nextTick(resume)},19),__oni_env)}, function() {}),this);},16)])}function dummy_throwing(){return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[1,__oni_rt.Nb(function(){if(global.testThrow)return __oni_rt.ex(__oni_rt.Sc(undefined,__oni_rt.Throw,__oni_rt.Fcall(2,25,__oni_rt.Nb(function(){return Error},25),"Exception happened"),undefined,'lib/fakesSJS-src.sjs'),this);},24),__oni_rt.C(function(){return __oni_rt.Hold(global.asyncTime || 100)},27),__oni_rt.Sc(undefined,__oni_rt.Throw,__oni_rt.Fcall(2,33,__oni_rt.Nb(function(){return Error},33),"Exception happened"),undefined,'lib/fakesSJS-src.sjs')])}__oni_rt.exseq(this.arguments,this,'lib/fakesSJS-src.sjs',[24,__oni_rt.Sc(3,function(_oniX){return f=_oniX;},__oni_rt.C(function(){return require('./dummy.js')},1)),__oni_rt.Sc(5,function(_oniX){return makefakes=_oniX;},__oni_rt.C(function(){return require('./fakemaker.js')},3)),__oni_rt.C(function(){return makefakes(function(){return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[33,__oni_rt.Nb(function(){return dummy},36)])},function(){return __oni_rt.exseq(arguments,this,'lib/fakesSJS-src.sjs',[33,__oni_rt.Nb(function(){return dummy_throwing},36)])},wrap,global)},36)])
