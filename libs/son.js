var SoundPool = (function() {
    var music_pool = [],
        dialogue_pool = [],
        sound_pool = [],
        current_music, current_dialogue, current_sound;
    var fadeinduration = 1000;
    var scenes = null;

    /**
     * Etant donné le tableau de sons/musiques/dialogues "ar" cette fonction retourne uniquement ceux qui sont dans le tableau de scènes
     * 
     * @param {any} ar 
     * @returns 
     */
    function restrictToScenes(ar) {
        console.group("restrict to scene");
        if (SoundPool.scenes !== null) {
            return _.filter(ar, function(o) {
                console.log("o", o);
                if (o.scene && o.scene !== false) {
                    return _.find(SoundPool.scenes, { "index": o.scene })
                } else if (o.scenes && o.scenes === "all") {
                    console.log("all scenes");
                    return true;
                }
            })
        } else {
            return ar;
        }
        console.groupEnd("restrict to scene");
    }

    function loadMusic(m, callback) {
        var l1 = false;
        var l2 = false;
        m.howl.start = new Howl({
            src: [baseurl + m.files.start],
            autoplay: false,
            loop: false,
            volume: 0.5,
            html5: false,
            onload: function() {
                m.howl.start.is_ended = false;
                l1 = true;
                if (l1 && l2) {
                    l1 = l2 = false;
                    callback();
                }
            },
            onloaderror: function(id, err) {
                callback();
            },
            onend: function() {
                if (!m.howl.loop.playing()) {
                    m.howl.start.is_ended = true;
                    m.howl.loop.play();
                }
            },
            onpause: function() {
                if (m.howl.loop.playing()) {
                    m.howl.loop.pause();
                }
            },
            onplay: function() {
                if (m.howl.loop.playing()) {
                    m.howl.loop.stop();
                }
            },
            onfade: function() {}
        });
        m.howl.loop = new Howl({
            src: [baseurl + m.files.loop],
            autoplay: false,
            loop: true,
            volume: 0.5,
            html5: false,
            onload: function() {
                l2 = true;
                if (l1 && l2) {
                    l1 = l2 = false;
                    callback();
                }
            },
            onloaderror: function(id, err) {
                callback();
            },
            onplay: function() {},
            onpause: function() {},
            onend: function() {},
            onfade: function() {}
        });
    }

    function loadDialogue(m, callback) {
        m.howl = new Howl({
            src: [baseurl + m.file],
            autoplay: false,
            loop: false,
            volume: 0.7,
            html5: false,
            onload: function() {
                callback();
            },
            onloaderror: function(id, err) {
                callback();
            },
            onend: function() {},
            onpause: function() {},
            onplay: function() {},
            onfade: function() {}
        });
    }

    function loadSound(m, callback) {
        m.howl = new Howl({
            src: [baseurl + m.file],
            autoplay: false,
            loop: false,
            volume: 0.4,
            html5: false,
            onload: function() {
                callback();
            },
            onloaderror: function(id, err) {
                callback();
            },
            onend: function() {},
            onpause: function() {},
            onplay: function() {},
            onfade: function() {}
        });
    }

    function toggleSound(v) {
        withsound = v;
        window.sessionStorage.setItem("lsqr_with_sound", v);
    }

    function toggleMusic(v) {
        withmusic = v;
        window.sessionStorage.setItem("lsqr_with_music", v);
    }

    return {
        allowSound: function() {
            toggleSound(true);
        },
        disableSound: function() {
            toggleSound(false);
        },
        allowMusic: function() {
            toggleMusic(true);
        },
        disableMusic: function(n) {
            var m = _.find(sound_pool, {
                name: n || current_sound
            });
            if (m && m.howl && m.howl.playing())
                m.howl.pause();

            toggleMusic(false);
            SoundPool.pauseMusic();
        },
        getSoundStatus: function() {
            withsound = window.sessionStorage.getItem("lsqr_with_sound") !== null ? window.sessionStorage.getItem("lsqr_with_sound") === "true" : true;
            if (!withsound) {
                SoundPool.pauseDialogue();
            }
            return withsound;
        },
        getMusicStatus: function() {
            withmusic = window.sessionStorage.getItem("lsqr_with_music") !== null ? window.sessionStorage.getItem("lsqr_with_music") === "true" : true;
            if (!withmusic) {
                SoundPool.pauseDialogue();
            }
            return withmusic;
        },
        addMusic: function(name, start, loop, scene_ids) {
            if (!music_pool) {
                music_pool = [];
            }
            music_pool.push({
                loaded: false,
                scenes: scene_ids,
                name: name,
                files: {
                    start: start,
                    loop: loop
                },
                howl: {
                    start: undefined,
                    loop: undefined
                }
            });
        },
        setMusic: function(name) {
            function fadeInOut(n, cb) {
                m.howl.start.once("fade", function() {
                    cb();
                    current_music = n;
                    SoundPool.playMusic(true);
                });
                m.howl.start.fade(1.0, 0.0, fadeinduration);
                /*if(m.howl.start.playing())
                    m.howl.start.fade(1.0, 0.0, fadeinduration);
                if(m.howl.loop.playing())
                    m.howl.loop.fade(1.0, 0.0, fadeinduration);*/
            }

            if (name !== current_music) {
                var playing = true;
                if (current_music) {
                    var m = _.find(music_pool, {
                        name: current_music
                    });
                    if (m && m.howl.start) {
                        playing = m.howl.start.playing() || m.howl.loop.playing();
                        fadeInOut(name, function() {
                            m.howl.start.stop();
                            m.howl.loop.stop();
                        });
                    }
                } else {
                    current_music = name;
                    if (playing) {
                        SoundPool.playMusic();
                    }
                }
            } else {
                SoundPool.playMusic();
            }
        },
        playMusic: function(wf) {
            var _wf_ = wf || false;
            var m = _.find(music_pool, {
                name: current_music
            });
            if (m && m.howl.start) {
                if (!m.howl.start.is_ended && !m.howl.start.playing()) {
                    m.howl.start.play();
                    if (_wf_) {
                        m.howl.start.volume(0);
                        m.howl.start.fade(0.0, 1.0, fadeinduration);
                    }
                } else if (m.howl.start.is_ended && !m.howl.loop.playing()) {
                    m.howl.loop.play();
                }
            }
        },
        pauseMusic: function() {
            var m = _.find(music_pool, {
                name: current_music
            });
            if (m && m.howl && m.howl.start && m.howl.start.playing())
                m.howl.start.pause();
            if (m && m.howl && m.howl.loop && m.howl.loop.playing())
                m.howl.loop.pause();
        },
        addDialogue: function(name, file, scene_id) {
            if (!dialogue_pool) {
                dialogue_pool = [];
            }
            dialogue_pool.push({
                loaded: false,
                scene: scene_id,
                name: name,
                file: file,
                howl: undefined
            });
        },
        playDialogue: function(n, callback) {
            n = n || current_dialogue;
            if (n !== current_dialogue) {
                var m = _.find(dialogue_pool, {
                    name: current_dialogue
                });
                if (m && m.howl) {
                    m.howl.stop();
                }
                current_dialogue = n;
                var m = _.find(dialogue_pool, {
                    name: current_dialogue
                });
                if (m && m.howl) {
                    m.howl.stop();
                }
            }
            var m = _.find(dialogue_pool, {
                name: current_dialogue
            });
            if (m && m.howl && !m.howl.playing()) {
                m.howl.play();
            }
        },
        pauseDialogue: function() {
            var m = _.find(dialogue_pool, {
                name: current_dialogue
            });
            if (m && m.howl && m.howl.playing())
                m.howl.pause();
        },
        stopDialogue: function() {
            var m = _.find(dialogue_pool, {
                name: current_dialogue
            });
            if (m && m.howl) {
                m.howl.stop();
            }
        },
        addSound: function(name, file, scene_ids) {
            if (!sound_pool) {
                sound_pool = [];
            }
            sound_pool.push({
                loaded: false,
                scenes: scene_ids,
                name: name,
                file: file,
                howl: undefined
            });
        },
        playSound: function(n, sender, callback) {
            var ws = SoundPool.getSoundStatus();
            if (ws) {
                n = n || current_sound;
                if (n !== current_sound) {
                    var m = _.find(sound_pool, { name: current_sound });
                    if (m && m.howl) {
                        m.howl.stop();
                    }
                    current_sound = n;
                    var m = _.find(sound_pool, { name: current_sound });
                    if (m && m.howl) {
                        m.howl.stop();
                    }
                }
                var m = _.find(sound_pool, {
                    name: current_sound
                });
                if (m && m.howl) {
                    m.howl.stop();
                }
                if (m && m.howl && !m.howl.playing()) {
                    m.howl.play();
                    m.howl.scene = sender;
                }
            }
        },
        repeatSound: function(n, sender, callback) {
            var ws = SoundPool.getSoundStatus();
            if (ws) {
                n = n || current_sound;
                if (n !== current_sound) {
                    // var m = _.find(sound_pool, {name: current_sound});
                    // if (m && m.howl) {
                    //     m.howl.stop();
                    // }
                    current_sound = n;
                    // var m = _.find(sound_pool, {name: current_sound});
                    // if (m && m.howl) {
                    //     m.howl.stop();
                    // }
                }
                var m = _.find(sound_pool, {
                    name: current_sound
                });
                if (m && m.howl && !m.howl.playing()) {
                    m.howl.loop(true).play();
                    m.howl.scene = sender;
                }
            }
        },
        pauseSound: function(n) {
            var _sound_pool = _.filter(sound_pool, { "loaded": true });
            if (_sound_pool.length > 0) {
                var m = _.find(_sound_pool, {
                    name: n || current_sound
                });
                if (m && m.howl && m.howl.playing())
                    m.howl.pause();
            }
        },
        stopSound: function(n) {
            var _sound_pool = _.filter(sound_pool, { "loaded": true });
            var m = _.find(_sound_pool, {
                name: n || current_sound
            });
            if (m && m.howl) {
                m.howl.stop();
            }
        },
        stopSounds: function(scene) {
            var _sound_pool = _.filter(sound_pool, { "loaded": true });
            for (var i = 0; i < _sound_pool.length; i++) {
                if (_sound_pool[i].howl.scene === scene) {
                    _sound_pool[i].howl.pause().stop();
                }
            }
        },
        pauseSounds: function(scene) {
            var _sound_pool = _.filter(sound_pool, { "loaded": true });
            for (var i = 0; i < _sound_pool.length; i++) {
                if (scene === _sound_pool[i].howl.scene) {
                    _sound_pool[i].howl.pause();
                }
            }
        },
        playSounds: function(scene) {
            var _sound_pool = _.filter(sound_pool, { "loaded": true });
            for (var i = 0; i < _sound_pool.length; i++) {
                if (scene === _sound_pool[i].howl.scene) {
                    _sound_pool[i].howl.play();
                }
            }
        },
        card: function() {
            var _music_pool = _.filter(restrictToScenes(music_pool), { "loaded": false });
            var _dialogue_pool = _.filter(restrictToScenes(dialogue_pool), { "loaded": false });
            var _sound_pool = _.filter(restrictToScenes(sound_pool), { "loaded": false });
            return _music_pool.length + _dialogue_pool.length + _sound_pool.length;
        },
        limitToScenes: function(scenes) {
            this.scenes = scenes;
        },
        load: function(intercallback, endcallback) {
            var l1 = false;
            var l1card = 0;
            var l2 = false;
            var l2card = 0;
            var l3 = false;
            var l3card = 0;
            var _music_pool = _.filter(restrictToScenes(music_pool), { "loaded": false });
            var _dialogue_pool = _.filter(restrictToScenes(dialogue_pool), { "loaded": false });
            var _sound_pool = _.filter(restrictToScenes(sound_pool), { "loaded": false });
            if (_music_pool.length === 0) {
                l1 = true;
            }
            if (_dialogue_pool.length === 0) {
                l2 = true;
            }
            if (_sound_pool.length === 0) {
                l3 = true;
            }
            if (l1 & l2 & l3) {
                endcallback();
            } else {
                _.each(_music_pool, function(el, i, arr) {
                    loadMusic(el, function() {
                        el.loaded = true;
                        l1card += 1;
                        intercallback(l1 + l2 + l3);
                        if (l1card === arr.length) {
                            l1 = true;
                            music_pool = _.unionWith(music_pool, _music_pool, function(a, b) { return a.name === b.name });
                            if (l1 && l2 && l3) {
                                l1 = l2 = l3 = false;
                                endcallback();
                            }
                        }
                    });
                });
                _.each(_dialogue_pool, function(el, i, arr) {
                    loadDialogue(el, function() {
                        el.loaded = true;
                        l2card += 1;
                        intercallback(l1 + l2 + l3);
                        if (l2card === arr.length) {
                            l2 = true;
                            dialog_pool = _.unionWith(dialogue_pool, _dialogue_pool, function(a, b) { return a.name === b.name });
                            if (l1 && l2 && l3) {
                                l1 = l2 = l3 = false;
                                endcallback();
                            }
                        }
                    });
                });
                _.each(_sound_pool, function(el, i, arr) {
                    loadSound(el, function() {
                        el.loaded = true;
                        l3card += 1;
                        intercallback(l1 + l2 + l3);
                        if (l3card === arr.length) {
                            l3 = true;
                            sound_pool = _.unionWith(sound_pool, _sound_pool, function(a, b) { return a.name === b.name });
                            if (l1 && l2 && l3) {
                                l1 = l2 = l3 = false;
                                endcallback();
                            }
                        }
                    });
                });
            }
        }
    }
})();