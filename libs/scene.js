 function Scene(n) {
     this.ref = [];
     this.allyeux = [];
     this.index = n;
     this.el = undefined;
     this.images = [];
     this.loaded = false;
     this.stoppable = [];
     this.bgmusic = undefined;
     this.background("ecrans/" + (n < 10 ? "0" : "") + n + "/back.jpg");
 }

 Scene.prototype.hidefirst = function() {

 };

 Scene.prototype.runsecond = function() {

 };

 Scene.prototype.toggle = function(fa, fb, delay) {
     return _.throttle(function() {
         var sign = fa.toString() + fb.toString();
         if (this[sign] === 1) {
             fb();
             this[sign] = 0;
         } else {
             fa();
             this[sign] = 1;
         }
     }, delay);
 };

 Scene.prototype.runEyesAnimation = function(extclos, extouverts) {
     var tl = new TimelineMax({
         repeat: -1
     });
     if (extouverts === null) {
         tl.set("." + extclos.name, {
                 opacity: 0
             })
             .to("." + extclos.name, 1 / animation_steps, {
                 opacity: 1,
                 delay: Math.random() * 2 + 2 * animation_steps / 12
             })
             .to("." + extclos.name, 1 / animation_steps, {
                 opacity: 0,
                 delay: Math.random() * animation_steps / 12
             });
     } else if (extclos === null) {
         tl.set("." + extouverts.name, {
                 opacity: 1
             })
             .to("." + extouverts.name, 1 / animation_steps, {
                 opacity: 0,
                 delay: Math.random() * 2 + 3 * animation_steps / 12
             })
             .to("." + extouverts.name, 1 / animation_steps, {
                 opacity: 1,
                 delay: Math.random() * animation_steps / 12
             });
     } else {
         tl.set("." + extclos.name, {
             opacity: 0
         });
         tl.to("." + extouverts.name, 1 / animation_steps, {
             opacity: 1
         });
         tl.to("." + extouverts.name, 1 / animation_steps, {
             opacity: 0
         }, 2 + Math.random() * 1.5);
         tl.to("." + extclos.name, 1 / animation_steps, {
             opacity: 1,
             delay: 3 / animation_steps
         });
         tl.to("." + extclos.name, 1 / animation_steps, {
             opacity: 0
         });
     }
     tl.play();
     return tl;
 };

 Scene.prototype.stopEyesAnimation = function(v) {
     var me = this;
     _.forEach(this.allyeux, function(values) {
         if (((values[0] && values[0].name === v) || (values[1] && values[1].name === v)) && values.tl) {
             values.tl.seek(0);
             values.tl.pause();
             TweenMax.set("." + v, {
                 opacity: 0
             });
         }
     });
 };

 Scene.prototype.unstopEyesAnimation = function(v) {
     var me = this;
     _.forEach(this.allyeux, function(values) {
         if (((values[0] && values[0].name === v) || (values[1] && values[1].name === v)) && values.tl) {
             TweenMax.set("." + v, {
                 opacity: 1
             });
             values.tl.seek(0);
             values.tl.play();
         }
     });
 };

 Scene.prototype.beforerun = function(index) {
     var me = this;
     if (mydebug === 1) document.querySelector(".slidenum").innerHTML = index;
     _.forEach(this.allyeux, function(values, index) {
         if (values[2])
             me.allyeux[index].tl = me.runEyesAnimation(values[0], values[1]);
     });
 };

 Scene.prototype.find = function(name) {
     var me = this;

     if (name[0] === "." || name[0] === "#") {
         name = name.substring(1);
     }

     _.forEach(this.allyeux, function(values) {
         if (((values[0] && values[0].name === name) || (values[1] && values[1].name === name)) && values.tl) {
             return values.tl;
         } else if (((values[0] && values[0].name === name) || (values[1] && values[1].name === name)) && !values.tl) {
             return me.runEyesAnimation(values[0], values[1]);
         }
     });

     var b = TweenMax.getTweensOf("." + name);
     if (b && b.length > 0) {
         return b[0];
     }

     var el = _.find(this.ref, {
         name: name
     });
     if (el) {
         return el.el;
     } else {}
 };


 Scene.prototype.wait = function(s) {
     this.wait = s * 1000;
 };

 Scene.prototype.stop = function(onlysound) {
     var me = this;
     TweenMax.killAll();
     SoundPool.stopDialogue();
     SoundPool.stopSounds(me);
     //    me.images.map(function (e, index, arr) {
     _.forEach(me.images, function(e) {
         e.loaded = false;
         e.stop();
     });
     _.forEach(me.stoppable, function(e) {
         //    me.stoppable.map(function (e, index, arr) {
         e.loaded = false;
         e.stop();
     });
 };

 Scene.prototype.checkIfAllIsLoaded = function(callback) {
     var loaded = 0;
     this.images.map(function(e, index, arr) {
         loaded += e.loaded ? 1 : 0;
     });
     if (loaded === this.images.length) {
         setTimeout(function() {
             callback();
         }, 250);
     }
 };

 Scene.prototype.load = function(el, callback) {
     var me = this;
     me.el = document.querySelector(el);
     _.forEach(me.images, function(e) {
         e.loaded = false;
         e.create(e, function() {
             me.loaded = true;
             callback();
         }, function() {});
     });
 };

 Scene.prototype.display = function(callback) {
     var me = this;
     if (withmusic && withsound) {
         if (this.bgmusic) {
             SoundPool.setMusic(this.bgmusic);
         }
         _.delay(function() {
             SoundPool.playDialogue("d" + me.index);
             callback();
         }, animation_waiting_time);
     } else if (!withmusic && withsound) {
         _.delay(function() {
             SoundPool.playDialogue("d" + me.index);
             callback();
         }, animation_waiting_time);
     } else if (withmusic && !withsound) {
         SoundPool.setMusic(this.bgmusic);
         _.delay(callback, 0);
     } else if (!withmusic && !withsound) {
         _.delay(callback, 0);
     }
     if (!me.wait) {
         me.wait = animation_waiting_time;
     }
     _.delay(function() {
         enableNav(me.index);
     }, me.wait);
 };

 Scene.prototype.makeDisappearFor = function(el, time, duration, oncomplete) {
     var me = this;
     if (typeof duration === "function") {
         oncomplete = duration;
         duration = 0.1;
     }
     var d = duration || 0.1;
     if (this.find(el) && this.find(el).seek) {
         this.find(el).seek(0).pause();
     }
     TweenMax.set(el, {
         opacity: 0
     });
     _.delay(function() {
         TweenMax.to(el, d, {
             opacity: 1,
             onComplete: function() {
                 if (me.find(el) && me.find(el).play) {
                     me.find(el).play();
                 }
                 if (oncomplete) oncomplete();
             }
         });
     }, time * 1000);
 };

 Scene.prototype.makeAppearFor = function(el, time, duration, oncomplete) {
     var me = this;
     if (typeof duration === "function") {
         oncomplete = duration;
         duration = 0.1;
     }
     var d = duration || 0.1;
     if (this.find(el) && this.find(el).seek) {
         this.find(el).seek(0).play();
     }
     TweenMax.set(el, {
         opacity: 1
     });
     _.delay(function() {
         TweenMax.to(el, d, {
             opacity: 0,
             onComplete: function() {
                 if (me.find(el) && me.find(el).seek) {
                     me.find(el).seek(0).pause();
                 }
                 if (oncomplete) oncomplete();
             }
         });
     }, time * 1000);
 };

 Scene.prototype.makeAppearOnce = function(el, callback, endwaittime, options1, options2) {
     var me = this;
     var endwaittime = endwaittime || 0;
     if (endwaittime > 100) {
         endwaitime = endwaittime / 1000
     }
     options1 = _.merge(options1, {
         duration: 0.1,
         opacity: 0
     });
     if (me.find(el) && me.find(el).sprite) {
         me.find(el).seek(0).pause();
     }
     options2 = _.merge(options2, {
         opacity: 1,
         onComplete: function() {
             if (me.find(el) && me.find(el).sprite) {
                 me.find(el).seek(0).repeat(0).play().eventCallback("onComplete", function() {
                     _.delay(function() {
                         TweenMax.to(el, options1.duration, options1);
                         me.find(el).seek(0).pause();
                         if (typeof callback === "function") {
                             callback();
                         }
                     }, endwaittime * 1000);
                 });
             } else {
                 _.delay(function() {
                     TweenMax.to(el, options1.duration, options1);
                     if (typeof callback === "function") {
                         callback();
                     }
                 }, endwaittime * 1000);
             }
         }
     });
     TweenMax.fromTo(el, options1.duration, options1, options2);
 };

 Scene.prototype.swapDuring = function(el1, el2, duration) {
     var me = this;
     var sign = "" + el1 + el2;
     if (!me[sign]) {
         me[sign] = 1;
         TweenMax.set("." + el1, {
             opacity: 0
         });
         if (me.find(el1) && me.find(el1).sprite) {
             me.find(el1).seek(0).pause();
         }
         if (me.find(el2) && me.find(el2).sprite) {
             me.find(el2).seek(0).play();
         }
         TweenMax.fromTo("." + el2, 0.01, {
             opacity: 0
         }, {
             opacity: 1,
             repeat: 1,
             repeatDelay: duration,
             onComplete: function() {
                 TweenMax.set("." + el2, {
                     opacity: 0
                 });
                 TweenMax.set("." + el1, {
                     opacity: 1
                 });
                 if (me.find(el1) && me.find(el1).sprite) {
                     me.find(el1).seek(0).play();
                 }
                 if (me.find(el2) && me.find(el2).sprite) {
                     me.find(el2).seek(0).pause();
                 }
                 me[sign] = null;
             }
         })
     }
 };

 Scene.prototype.extractName = function(url) {
     var mat = url.match(/([^/]+)\.([^.]+)$/);
     var name = url,
         is_sprite = false,
         steps = null,
         width = null,
         height = null;
     if (mat && mat[1]) {
         name = mat[1];
         var mat = name.match(/_([0-9]+)_([0-9]+)_([0-9]+)/);
         if (mat && mat.length > 1) {
             name = name.match(/([^_]+)/)[1];
             is_sprite = true;
             steps = mat[1];
             width = mat[2];
             height = mat[3];
         }
     }
     return {
         name: name,
         is_sprite: is_sprite,
         steps: steps,
         width: width,
         height: height
     }
 };

 Scene.prototype.extractAltFileName = function(url) {
     var mat = url.match(/^ecrans\/([0-9]+)\/([^_]+)(.*)\.png$/);
     if (mat && mat[1] && mat[2])
         return "ecrans/" + mat[1] + "/alt-" + mat[2] + ".png";
     else
         return null;
 };


 Scene.prototype.music = function(m) {
     this.bgmusic = m;
 };

 Scene.prototype.background = function(url, options) {
     var me = this;
     var imgindex = this.images.length + 100;
     this.images.push({
         url: baseurl + url,
         loaded: false,
         options: options,
         create: function(e, resolve, reject) {
             var img = new Image();
             img.addEventListener("load", function(ev) {
                 e.loaded = true;
                 me.el.appendChild(img);
                 me.checkIfAllIsLoaded(resolve, reject);
                 me.ref.push({
                     name: "background",
                     el: img
                 });
             });
             img.style.width = "100%";
             img.style.height = "auto";
             img.style.zIndex = imgindex;
             img.classList.add("background");
             img.classList.add("first");
             img.src = baseurl + url;
         },
         stop: function() {}
     });
     if (is_two_screens) {
         var newurl = url.replace(/back/, "back-second");
         this.images.push({
             url: baseurl + newurl,
             loaded: false,
             options: options,
             create: function(e, resolve, reject) {
                 var img = new Image();
                 img.addEventListener("load", function(ev) {
                     e.loaded = true;
                     me.el.appendChild(img);
                     me.checkIfAllIsLoaded(resolve, reject);
                     me.ref.push({
                         name: "backgroundsecond",
                         el: img
                     });
                 });
                 img.style.width = "100%";
                 img.style.height = "auto";
                 img.style.position = "absolute";
                 img.style.top = "0";
                 img.style.left = "1024px";
                 img.style.zIndex = imgindex + 1;
                 img.classList.add("background");
                 img.classList.add("second");
                 img.src = baseurl + newurl;
             },
             stop: function() {}
         });
     }
 };

 Scene.prototype.asset = function(url, options) {
     var ext = this.extractName(url);
     if (options.name) {
         ext.name = options.name;
     }
     if (!ext.is_sprite)
         this.image(ext.name, url, options, options.aftercreate ? options.aftercreate : null);
     else {
         options.width = ext.steps * ext.width;
         options.height = ext.height;
         options.steps = ext.steps;
         options.duration = options.duration || ext.steps / animation_steps;
         this.sprite(ext.name, url, options, options.aftercreate ? options.aftercreate : null);
     }
 };

 Scene.prototype.duplicate = function(name, card, options) {
     var me = this;

     function getSource(name) {
         return _.find(me.images, {
             "name": (name[0] === '.' ? name.substr(1) : name)
         });
     }

     if (m = getSource(name)) {
         for (var index = 1; index <= card; index++) {
             var newname = m.name + "_" + index;
             var nn = document.querySelector(name).cloneNode(true);
             nn.classList.remove(m.name);
             nn.classList.add(newname);
             document.querySelector(name).parentNode.append(nn);
             TweenMax.set("." + newname, options);
         }
     }
 };


 Scene.prototype.yeux = function(url, options) {
     var clos_options = _.cloneDeep(options);
     options.visible = options.visible !== undefined ? options.visible : true;
     clos_options.visible = false;
     var extclos = this.extractName(url + "_yeux_clos.png");
     this.image(extclos.name, url + "_yeux_clos.png", clos_options);
     var extouverts = this.extractName(url + "_yeux_ouverts.png");
     this.image(extouverts.name, url + "_yeux_ouverts.png", options);
     this.allyeux.push([extclos, extouverts, options.visible]);
     this.ref.push({
         name: this.extractName(url + "_yeux.png").name,
         el: [extclos, extouverts]
     });
 };


 Scene.prototype.yeuxclos = function(url, options) {
     var clos_options = _.cloneDeep(options);
     options.visible = options.visible !== undefined ? options.visible : true;
     clos_options.visible = false;
     var extclos = this.extractName(url + "_yeux_clos.png");
     this.image(extclos.name, url + "_yeux_clos.png", clos_options);
     this.allyeux.push([extclos, null, options.visible]);
     this.ref.push({
         name: this.extractName(url + "_yeux.png").name,
         el: [extclos, null]
     });
 };


 Scene.prototype.yeuxouverts = function(url, options) {
     var ouverts_options = _.cloneDeep(options);
     options.visible = options.visible !== undefined ? options.visible : true;
     ouverts_options.visible = false;
     var extouverts = this.extractName(url + "_yeux_ouverts.png");
     this.image(extouverts.name, url + "_yeux_ouverts.png", ouverts_options);
     this.allyeux.push([null, extouverts, options.visible]);
     this.ref.push({
         name: this.extractName(url + "_yeux.png").name,
         el: [null, extouverts]
     });
 };

 Scene.prototype.runAndRepositionAfter = function(el, duration) {
     var me = this;
     me.find(el).seek(0).repeat(0).play().eventCallback("onComplete", function() {
         _.delay(function() {
             me.find(el).seek(0).pause();
         }, (duration > 100 ? duration / 1000 : duration) * 1000);
     });

 };

 Scene.prototype.rescale = function(group) {
     _.forEach(document.querySelectorAll(group), function(item) {
         var scale = 1 + (Math.random() * (1 - 2 * Math.random()));
         TweenMax.set(item, {
             scale: scale
         });
     });
 };

 Scene.prototype.image = function(name, url, options, aftercreate) {
     var me = this;
     var imgindex = this.images.length + 100;
     this.images.push({
         name: name,
         url: baseurl + url,
         loaded: false,
         options: options,
         create: function(e, resolve, reject) {
             var img = new Image();
             img.addEventListener("load", function(ev) {
                 e.loaded = true;
                 if (me.el) me.el.appendChild(img);
                 if (aftercreate) aftercreate(me);
                 me.checkIfAllIsLoaded(resolve, reject);
                 me.ref.push({
                     name: name,
                     el: img
                 });
             });
             img.style.top = options.top + "px";
             img.style.left = options.left + "px";
             img.style.zIndex = imgindex;
             if (options.scale) {
                 img.style[Modernizr.prefixed("transform")] = "scale(" + options.scale + ")";
             }
             if (options.transform) {
                 img.style[Modernizr.prefixed("transform")] = options.transform;
             }
             img.classList.add("asset");
             img.classList.add(name);
             img.style.opacity = options.alpha || options.opacity || options.visible || 0;
             img.src = baseurl + url;
         },
         stop: function() {
             var img = document.querySelector(".asset." + name);
             img.style.top = options.top + "px";
             img.style.left = options.left + "px";
             img.style.zIndex = imgindex;
             if (options.scale) {
                 img.style[Modernizr.prefixed("transform")] = "scale(" + options.scale + ")";
             }
             if (options.transform) {
                 img.style[Modernizr.prefixed("transform")] = options.transform;
             }
             img.style.opacity = options.alpha || 0;
         }
     });
 };

 Scene.prototype.sprite = function(name, url, options, aftercreate) {
     var me = this;
     var imgindex = options.zindex || (this.images.length + 100);
     var repeat = options.repeat >= 0 ? options.repeat : -1;
     var thisindex = this.images.push({
         name: name,
         url: baseurl + url,
         loaded: false,
         options: options,
         sprite: undefined,
         create: function(e, resolve, reject) {
             var img = new Image();

             function altName() {
                 img.removeEventListener("error", altName);
                 options.steps = 1;
                 options.alpha = options.opacity = options.visible = 1;
                 options.delay = 0;
                 options.autorun = true;
             }

             function eventLoad() {
                 e.loaded = true;
                 var div = document.createElement("div");
                 div.classList.add("asset");
                 div.classList.add("sprite");
                 div.classList.add(name);
                 div.style.background = "url(" + baseurl + url + ") no-repeat 0 0";
                 div.style.backgroundSize = options.width + "px, " + options.height + "px";
                 div.style.opacity = options.alpha || options.opacity || options.visible || 0;
                 div.style.top = (options.top || 0) + "px";
                 div.style.left = (options.left || 0) + "px";
                 div.style.zIndex = imgindex;

                 div.style.width = options.width / options.steps + "px";
                 div.style.height = options.height + "px";
                 me.el.appendChild(div);
                 me.images[thisindex - 1].sprite = TweenMax.fromTo("." + name, (options.duration || options.steps / animation_steps), {
                     backgroundPosition: "0 0"
                 }, {
                     repeat: repeat,
                     delay: options.delay || 0,
                     repeatDelay: options.repeatDelay || 0,
                     backgroundPosition: options.steps > 1 ? "-" + (options.width - options.width / options.steps) + "px 0" : "0 0",
                     ease: options.steps > 1 ? new SteppedEase(options.steps - 1) : "none",
                     onComplete: function() {
                         if (options.onComplete) {
                             options.onComplete(me);
                         }
                     }
                 });
                 if ((options.autorun !== undefined) && (options.autorun === false)) {
                     me.images[thisindex - 1].sprite.invalidate().pause().seek(0);
                 } else {
                     me.images[thisindex - 1].sprite.invalidate().restart().play();
                 }
                 if (aftercreate) aftercreate(me, me.images[thisindex - 1]);
                 me.checkIfAllIsLoaded(resolve, reject);
                 me.ref.push({
                     name: name,
                     el: me.images[thisindex - 1].sprite
                 });
             }

             img.addEventListener("error", altName);
             img.addEventListener("load", eventLoad);

             img.src = baseurl + url;
         },
         stop: function() {
             me.images[thisindex - 1].sprite.invalidate().kill();
         },
         pause: function() {
             me.images[thisindex - 1].sprite.restart().pause(); //.pause().seek(0);
         },
         play: function() {
             TweenMax.fromTo("." + name, (options.duration || options.steps / animation_steps), {
                 backgroundPosition: "0 0"
             }, {
                 repeat: repeat,
                 repeatDelay: options.repeatDelay || 0,
                 backgroundPosition: "-" + (options.width - options.width / options.steps) + "px 0",
                 ease: new SteppedEase(options.steps - 1),
                 onComplete: function() {
                     if (options.onComplete) {
                         options.onComplete(me);
                     }
                 }
             });
         }
     });
     return thisindex - 1;
 };

 // Scene.prototype.spriteOnOff = function (name, calltoaction, on, off) {
 //     off.sp = this.sprite(name + "off", off.src, off.options);
 //     on.sp = this.sprite(name + "on", on.src, on.options, function (me) {
 //         document.querySelector("." + name + "on").style.display = "none";
 //         var thediv = document.createElement("div");
 //         thediv.classList.add("calltoaction");
 //         thediv.classList.add(name);
 //         thediv.style.position = "absolute";
 //         thediv.style.zIndex = me.images.length + 100;
 //         thediv.style.opacity = 0;
 //         thediv.style.top = calltoaction.top + "px";
 //         thediv.style.left = calltoaction.left + "px";
 //         thediv.style.width = calltoaction.width + "px";
 //         thediv.style.height = calltoaction.height + "px";
 //         thediv.appendChild(document.querySelector("." + name + "on"));
 //         thediv.appendChild(document.querySelector("." + name + "off"));
 //         me.el.appendChild(thediv);
 //         thediv.addEventListener("click", function (ev) {
 //             if (document.querySelector("." + name + "on").style.display === "none") {
 //                 document.querySelector("." + name + "on").style.display = "block";
 //                 document.querySelector("." + name + "on").style.opacity = "1";
 //                 document.querySelector("." + name + "off").style.display = "none";
 //                 document.querySelector("." + name + "off").style.opacity = "0";
 //                 me.images[off.sp].stop();
 //                 me.images[on.sp].play();
 //                 if (on.calltoaction) on.calltoaction();
 //             } else {
 //                 document.querySelector("." + name + "on").style.display = "none";
 //                 document.querySelector("." + name + "on").style.opacity = "0";
 //                 document.querySelector("." + name + "off").style.display = "block";
 //                 document.querySelector("." + name + "off").style.opacity = "1";
 //                 me.images[off.sp].play();
 //                 me.images[on.sp].stop();
 //                 if (off.calltoaction) off.calltoaction();
 //             }
 //         });
 //         document.querySelector("." + name + "on").style.display = "none";
 //         document.querySelector("." + name + "off").style.display = "block";
 //         document.querySelector("." + name + "off").style.opacity = "1";
 //         me.images[on.sp].stop();
 //         console.log(me.images[off.sp]);
 //     });
 // };

 Scene.prototype.spriteOnClick = function(name, calltoaction, on, off) {

     var thescene = this;
     var onloaded = false;
     var offloaded = false;
     var thediv = document.createElement("div");
     var me = this;

     thediv.style.cursor = "pointer";

     thediv.click = function() {
         if (document.querySelector("." + name + "on").style.display === "none") {
             document.querySelector("." + name + "on").style.display = "block";
             document.querySelector("." + name + "on").style.opacity = "1";
             document.querySelector("." + name + "off").style.display = "none";
             document.querySelector("." + name + "off").style.opacity = "0";
             thescene.images[off.sp].stop();
             thescene.images[on.sp].play();
             if (on.calltoaction) on.calltoaction();
         }
     };

     function insider() {
         if (onloaded && offloaded) {
             onloaded = offloaded = false;

             if (_.find(thescene.ref, {
                     "name": name
                 })) {
                 thescene.el.removeChild(document.querySelector("." + name + "on"));
                 thescene.el.removeChild(document.querySelector("." + name + "off"));
                 var s = _.find(thescene.ref, {
                     "name": name + "off"
                 });
                 if (s) {
                     s.el.invalidate().play();
                 }
             }
             thescene.el.appendChild(thediv);

             thediv.classList.add("calltoaction");
             thediv.classList.add(name);
             thediv.style.position = "absolute";
             thediv.style.opacity = 0;
             thediv.style.zIndex = thescene.images.length + 100;
             thediv.style.top = calltoaction.top + "px";
             thediv.style.left = calltoaction.left + "px";
             thediv.style.width = calltoaction.width + "px";
             thediv.style.height = calltoaction.height + "px";

             if (document.querySelector("." + name + "on")) {
                 thediv.appendChild(document.querySelector("." + name + "on"));
                 document.querySelector("." + name + "on").style.display = "none";
                 document.querySelector("." + name + "on").style.opacity = "0";
             }
             if (document.querySelector("." + name + "off")) {
                 thediv.appendChild(document.querySelector("." + name + "off"));
                 document.querySelector("." + name + "off").style.display = "block";
                 document.querySelector("." + name + "off").style.opacity = "1";
             }

             thescene.images[on.sp].stop();

             thediv.addEventListener("click", function() {
                 thediv.click();
             });

             thescene.ref.push({
                 name: name,
                 el: thediv
             });
         }
     }

     var cb = function() {};
     on.options.onComplete = function() {
         //cb();
         document.querySelector("." + name + "off").style.display = "block";
         document.querySelector("." + name + "off").style.opacity = "1";
         document.querySelector("." + name + "on").style.display = "none";
         document.querySelector("." + name + "on").style.opacity = "0";
         thescene.images[on.sp].stop();
         thescene.images[off.sp].play();
     };
     on.options.repeat = 1;

     off.sp = thescene.sprite(name + "off", off.src, off.options, function() {
         offloaded = true;
         insider();
     });
     if (on.options.onComplete) {
         cb = on.options.onComplete;
     }
     on.sp = thescene.sprite(name + "on", on.src, on.options, function() {
         onloaded = true;
         insider();
     });

     return thediv;
 };

 Scene.prototype.elementToCoord = function(el, card) {
     if (document.querySelector(el)) {
         card = card || 1;
         var bcr = document.querySelector(el).getBoundingClientRect();
         var canvas = document.querySelector("#canvas").getBoundingClientRect();
         return [
             bcr.left - canvas.left,
             bcr.top - canvas.top,
             bcr.width / card,
             bcr.height
         ];
     } else {
         return [0, 0, 0, 0];
     }
 };

 Scene.prototype.addClickOn = function(el, callback, name, isoverlined) {
     isoverlined = isoverlined === undefined ? false : true;
     var me = this;
     var name = name || callback.name + (document.querySelectorAll(".asset").length + 1);
     if (typeof el === "string") {
         document.querySelector(el).style.cursor = "pointer";
         document.querySelector(el).style.display = "block";
         document.querySelector(el).classList.add("clickable");
         if (isoverlined) document.querySelector(el).classList.add("overline");
         document.querySelector(el).addEventListener("click", function(ev) {
             ev.preventDefault();
             callback();
             return false;
         });
     } else if (typeof el === "object") {
         if (el.length === 4 && (typeof(el[0]) === "number")) {
             var d = document.createElement("div");
             d.classList.add("asset");
             d.classList.add("clickable");
             if (isoverlined) d.classList.add("overline");
             if (isoverlined) _.delay(function() {
                 d.classList.add("on");
             }, 250);
             d.classList.add("click_" + name);
             d.style.left = "" + el[0] + "px";
             d.style.top = "" + el[1] + "px";
             d.style.width = "" + el[2] + "px";
             d.style.height = "" + el[3] + "px";
             d.style.zIndex = 999997;
             // d.style.border = "1px solid red";
             // d.style.background = "red";
             document.querySelector(".screen").appendChild(d);
             el = d;
             el.style.cursor = "pointer";
             el.addEventListener("click", function(ev) {
                 ev.preventDefault();
                 callback();
                 return false;
             });
             return d;
         } else {
             _.forEach(el, function(value) {
                 me.addClickOn(value, callback, name);
             });
         }
     }
 };

 Scene.pathDataToBezier = function(start, points, ampx, ampy) {
     ampx = ampx || 0;
     ampy = ampy || 0;
     var gsapPoints = [];
     points.forEach(function(elt, i, ar) {
         gsapPoints.push({
             x: elt[0] + (Math.random() * (2 * ampx - ampx)) - start[0],
             y: elt[1] + (Math.random() * (2 * ampy - ampy)) - start[1]
         });
     });
     return gsapPoints;
 };

 Scene.prototype.followPath = function(elt, duration, points, options) {
     options = options || {};
     options.ampx = options.ampx || 0;
     options.ampy = options.ampy || 0;
     options.ease = options.ease || Linear.easeNone;
     options.bezier = {
         values: Scene.pathDataToBezier(points[0], points, options.ampx, options.ampy),
         type: "thru",
         curviness: 1,
         autoRotate: options.autoRotate || false
     };
     delete options.autoRotate;
     delete options.ampx;
     delete options.ampy;
     TweenMax.to(elt, duration, options);
 };

 Scene.prototype.moveOnArc = function(obj) {
     obj.forEach(function(elt, ind, arr) {
         TweenMax.to("." + elt, 1, {
             delay: ind * 500 / 1000,
             opacity: 1,
             alpha: 1
         });
         TweenMax.to("." + elt, 5, {
             bezier: {
                 values: Scene.pathDataToBezier([0, 0], [
                     [0, 0],
                     [Math.random() * 100, -150 + Math.random() * 20],
                     [100 + Math.random() * 500, -200 + Math.random() * 50],
                     [700 + Math.random() * 300, -300 + Math.random() * 50],
                     [1000 + Math.random() * 500, -100 + Math.random() * 20]
                 ]),
                 type: "thru",
                 curviness: 1,
                 autoRotate: false
             },
             ease: Power1.easeOut,
             delay: ind * 500 / 1000
         });
     });

 };

 Scene.prototype.moveOnRandom = function(obj, options) {
     var defaults = {
         duration: 5,
         delay: 5,
         amplitude_x_max: 250,
         amplitude_x_min: -250,
         amplitude_y_max: -250,
         amplitude_y_min: 250,
         points: 10
     };
     options = _.merge(defaults, options);
     obj.forEach(function(elt, ind, arr) {
         TweenMax.to("." + elt, 0.5, {
             alpha: 1,
             opacity: 1
         });
     });
     obj.forEach(function(elt, ind, arr) {
         var points = [];
         for (i = 0; i < options.points; i++) {
             points.push([
                 options.amplitude_x_min + Math.random() * (options.amplitude_x_max - options.amplitude_x_min),
                 options.amplitude_y_min + Math.random() * (options.amplitude_y_max - options.amplitude_y_min)
             ]);
         }
         TweenMax.to("." + elt, options.duration, {
             bezier: {
                 values: Scene.pathDataToBezier([0, 0], points),
                 type: "thru",
                 curviness: 1,
                 autoRotate: options.autoRotate || true
             },
             ease: Linear.easeOut,
             delay: ind * options.delay / 1000,
             repeat: -1,
             yoyo: true
         });
     });
 };

 Scene.prototype.dansLeVent = function(elt, myoptions, inc) {
     var options = {
         duration: 5,
         startRotation: -5,
         rotation: 10,
         delay: 1,
         margeDelay: 1
     };

     inc = inc || 0;

     options = _.merge(options, myoptions);


     if (typeof(elt) === "string") {
         var d = options.delay + Math.random() * options.margeDelay;
         var alea = Math.random() * inc;
         TweenMax.fromTo(elt, options.duration + Math.random() * inc / 2, {
             transformOrigin: "bottom center",
             rotation: options.startRotation - alea,
             delay: d
         }, {
             transformOrigin: "bottom center",
             rotation: options.startRotation + options.rotation + alea,
             yoyo: true,
             repeat: -1,
             ease: Bounce.easeInOut
         });
     } else {
         for (var inc = 0, max = elt.length; inc < max; inc++) {
             this.dansLeVent(elt[inc], options, inc);
         }
     }

 };

 Scene.prototype.nuage = function(elt, myoptions, inc) {
     var options = {
         duration: 50,
         altmin: 100,
         altmax: 200,
         delay: 1,
         ecart: 1,
         margeDelay: 1
     };

     inc = inc || 0;

     options = _.merge(options, myoptions);


     if (typeof(elt) === "string") {
         var alea = Math.random() * inc;
         var d = options.delay + Math.random() * (options.margeDelay + inc + alea);
         TweenMax.set(elt, {
             opacity: 1
         });
         TweenMax.fromTo(elt, options.duration + options.duration * Math.random() * inc / 2, {
             left: 1030 + inc * (1000 / options.ecart),
             top: options.altmin + Math.random() * (options.altmin - options.altmax) + alea,
             delay: d,
             ease: Power0.easeNone
         }, {
             left: -512,
             repeat: -1,
             repeatDelay: alea,
             ease: Power0.easeNone
         });
     } else {
         options.ecart = elt.length;
         for (var inc = 0, max = elt.length; inc < max; inc++) {
             this.nuage(elt[inc], options, inc);
         }
     }

 };

 Scene.prototype.run = function() {};

 Scene.prototype.disableNavigation = function() {
     document.querySelector(".buttons").classList.add("offnext");
     document.querySelector(".buttons").classList.add("offprevious");
 };
 Scene.prototype.enableNavigation = function() {
     document.querySelector(".buttons").classList.remove("offnext");
     document.querySelector(".buttons").classList.add("offprevious");
     if (current_scene !== current_next_scene) {
         this.jumpToScene(current_scene + 1);
     }
 };

 Scene.prototype.disableNext = function() {
     document.querySelector(".buttons").classList.add("offnext");
 };

 Scene.prototype.disablePrevious = function() {
     document.querySelector(".buttons").classList.add("offprevious");
 };
 Scene.prototype.enableNext = function() {
     document.querySelector(".buttons").classList.remove("offnext");
 };

 Scene.prototype.enablePrevious = function() {
     document.querySelector(".buttons").classList.remove("offprevious");
 };

 Scene.prototype.navigationButton = function(target, scene_num, next_scene_num) {
     var me = this;
     var page = "index.html";
     TweenMax.set(target, {
         cursor: "pointer"
     });
     if (target[0] === ".next") {
         var next = document.querySelector(".next");
         next.parentNode.replaceChild(next.cloneNode(true), next);
         document.querySelector(".next").addEventListener("click", function(e) {
             e.preventDefault;
             documentlocation(page + "?p=" + scene_num + (undefined !== next_scene_num ? "&nxt=" + next_scene_num : ""));
             return false;
         });
     } else {
         var targets = document.querySelectorAll(target);
         console.log(targets);
         _.each(targets, function(a) {
             a.addEventListener("click", function(e) {
                 e.preventDefault;
                 documentlocation(page + "?p=" + scene_num + (undefined !== next_scene_num ? "&nxt=" + next_scene_num : ""));
                 return false;
             });
         });
     }
 };

 Scene.prototype.extractNextScene = function() {
     return current_next_scene;
 };

 Scene.prototype.jumpToScene = function(scene_num) {
     var page = "index.html";
     var next = document.querySelector(".next");
     next.parentNode.replaceChild(next.cloneNode(true), next);
     document.querySelector(".next").addEventListener("click", function(e) {
         e.preventDefault;
         documentlocation(page + "?p=" + scene_num);
         return false;
     });
 };

 Scene.prototype.makeObjectDisappear = function(name, oncomplete) {
     var me = this;
     [].forEach.call(name, function(a) {
         me.addClickOn(a, function() {
             TweenMax.to(a, 0.25, {
                 opacity: 0,
                 onStart: function() {
                     SoundPool.playSound('harpe', me);
                 },
                 onComplete: function() {
                     if (undefined !== oncomplete) {
                         oncomplete();
                     }
                 }
             });
         })
     })
 };

 Scene.prototype.printDocument = function(name) {
     function forceDownload(filename) {
         var anchor = document.createElement('a');
         anchor.href = filename;
         anchor.target = '_blank';
         anchor.download = filename;
         e = document.createEvent('MouseEvents');
         e.initEvent("click", true, true);
         anchor.dispatchEvent(e);
         _.delay(function() {
             documentlocation("?p=0");
         }, 500);
     }
     forceDownload(getFile(name), function() {
         documentlocation("?p=0");
     });
 }

 var scenes = [];
 var current_scene = -1;