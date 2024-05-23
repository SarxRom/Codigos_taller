TempoClock.tempo=60/120;

(
(
~son1 = Pdef(\son1, Pbind(\instrument, \audio1,
	\dur, Pseq([2/8], inf),
	\sus, Pseq([0.5], inf),
	\rel, Pseq([3], inf),
	\rate, Pseq([-27, -34, -24].midicps, inf),
	\sp, Pseq([0.1,Pn (0,9)], inf),
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
);

~son1.play.quant(4);
~son1.stop;
~son2.play.quant(4);
~son2.stop;

s.quit;