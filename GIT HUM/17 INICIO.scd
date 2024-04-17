Platform.recordingsDir

SampleTexto2.help

s.boot;

~a=SampleTexto2.new;
~a.init(path: "C:/Users/UAML/Desktop/Optativa art.audiovisual/Sonidos/S.complet");
~a.st(7).play;

~a.stsel;
~a.stm(0).play;
~a.sts(4).play;
~a.info;

~a.monosynth();
~a.stereosynth();

Synth(\m0)
Synth(\s0)