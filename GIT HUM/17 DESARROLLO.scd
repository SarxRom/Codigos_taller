TempoClock.tempo=(135/60)/4;

(
~sq1=Pdef(\glitch,
Pbind(\instrument, Pseq([\m0,\m1],inf),
	\dur, Pseq([1/4, 1/8], inf),
    \sus, 0.1,//sostiene dependiendo el tiempo
    \sp, 0.25,//lee desde donde le cortes
	\rate, Pseq([1,1.5,1.8,2],inf),
    \amp, 0.7
		\out,0
))
);

~sql.play.quant(4);
~sql.stop;