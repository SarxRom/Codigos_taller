//==================================
// Secuencias para sintes de sonido
//==================================

// Instrucciones:
// 1 primero declara los buffers y synthdefs del documento sintes_de_sonido.scd
// 2 declara el Pdef
// 3 declara play
// 4 modifica los valores del Pdef y declara al vuelo para hacer live coding

// establece el tempo de la pieza. 60/120 equivale a un tempo 0 bpm de 120
TempoClock.tempo=60/120;

//(
(
~son1 = Pdef(\son1, Pbind(\instrument, \audio1,
	\dur, Pseq([2/8], inf),
	\sus, Pseq([0.5], inf),
	\rel, Pseq([3], inf),
	\rate, Pseq([-27, -34,- 24].midicps, inf),
	\sp, Pseq([0.1,Pn(0,9)], inf),
	\amp, 0.4
))
);

(
~son2 = Pdef(\son2, Pbind(\instrument, \audio2,
	\dur, Pseq([1/6], inf),
	\sus, Pseq([0.2], inf),
	\rel, Pseq([5,1], inf),
	\rate, Pseq([20,31], inf),
	\sp, Pseq([0,1], inf),
	\amp, 0.8
))
);

(
~son3 = Pdef(\son3, Pbind(\instrument, \audio3,
	\dur, Pseq([1/4], inf),
	\sus, Pseq([0.2], inf),
	\rel, Pseq([5,4/8], inf),
	\rate, Pseq([28,15,10], inf),
	\sp, Pseq([0], inf),
	\amp, 2
))
)

(
~son4 = Pdef(\son4, Pbind(\instrument, \audio4,
	\dur, Pseq([4.5/7], inf),
	\sus, Pseq([0.6], inf),
	\rel, Pseq([0.8], inf),
	\rate, Pseq([1,4,2], inf),
	\sp, Pseq([-24], inf),
	\amp, 0.5,
	\out, 0
))
);

(
~son5 = Pdef(\son5, Pbind(\instrument, \audio5,
	\dur, Pseq([2/8], inf),
	\sus, Pseq([0.5], inf),
	\rel, Pseq([0.3], inf),
	\rate, Pseq([1,4,9,2], inf),
	\sp,Pseq([-28], inf),
	\amp, 1.5
))
);

(
~son6 = Pdef(\son6, Pbind(\instrument, \audio6,
	\dur, Pseq([1/4], inf),
	\sus, Pseq([0.4, 0.02], inf),
	\rel, Pseq([0.6, 2, 2.5], inf),
	\rate, Pseq([2,6,9], inf),
	\sp, Pseq([3, 0], inf),
	\amp, 0.7
))
);
);

~son1.play.quant(4);
~son1.stop;
~son2.play.quant(4);
~son2.stop;
~son3.play.quant(4);
~son3.stop;
~son4.play.quant(4);
~son4.stop;
~son5.play.quant(4);
~son5.stop;
~son6.play.quant(4);
~son6.stop;


s.quit; // APAGA supercollider