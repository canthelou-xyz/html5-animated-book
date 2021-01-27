var start_scene = 0;
var end_scene = 98;
var prev_chapitre = 0;
var next_chapitre = 0;

var scene_num = start_scene - 1;

SoundPool.addDialogue("d0", "ecrans/00/titre.m4a", 0);
for (var di = (start_scene === 0 ? 1 : start_scene); di <= end_scene; di++) {
    SoundPool.addDialogue("d" + di, 'ecrans/' + (di < 10 ? "0" + di : di) + '/' + di + '.m4a', di);
}

SoundPool.addSound("harpe", "ui/harpe.m4a", "all");

function getFile(name) {
    var file = "default.pdf";
    switch (name) {
        case "crumblepomme":
            file = "ecrans/fiche_recette_1_22_crumble_sucre.pdf";
            break;
        case "cake":
            file = "ecrans/fiche_recette_2_23_cake_sucre.pdf";
            break;
        case "crumblesale":
            file = "ecrans/fiche_recette_3_24_crumble_sale.pdf";
            break;
        case "cakesale":
            file = "ecrans/fiche_recette_4_25_cake_sale.pdf";
            break;
        case "gateauchocolat":
            file = "ecrans/fiche_recette_5_26_gateau_chocolat.pdf";
            break;
        case "clafoutis":
            file = "ecrans/fiche_recette_6_27_clafoutis.pdf";
            break;
        case "rizaulait":
            file = "ecrans/fiche_recette_7_28_riz_au_lait.pdf";
            break;
        case "milkshake":
            file = "ecrans/fiche_recette_8_29_milk_shake.pdf";
            break;
    }
    return file;
}

/**
 * SCENE 0
 */
scene_num = 0;
scenes[scene_num] = new Scene(scene_num);
//scenes[scene_num].asset("ecrans/00/masque.jpg", {left: 0, top: 0, visible: true, autorun: false});
scenes[scene_num].yeuxclos("ecrans/00/etoiles00", {
    left: 340,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/00/credits00.png", {
    left: 709,
    top: 348,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/00/sorciere00_25_338_386.png", {
    left: -7,
    top: 142,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/00/chat00.png", {
    left: 7,
    top: 370,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/00/arbre00.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/00/souris00a.png", {
    left: 155,
    top: 462,
    visible: true,
    autorun: false
});
scenes[scene_num].yeuxclos("ecrans/00/souris00b", {
    left: 235,
    top: 497,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/00/arbregris00.png", {
    left: 872,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/00/bn00_26_191_365.png", {
    left: 419,
    top: 174,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/00/prince00_24_190_412.png", {
    left: 290,
    top: 138,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/00/fee00_28_129_104.png", {
    left: 727,
    top: 159,
    visible: true,
    autorun: true
});
scenes[scene_num].yeuxclos("ecrans/00/chat00", {
    left: 73,
    top: 411,
    visible: true,
    autorun: false
});
scenes[scene_num].yeuxclos("ecrans/00/yeux00ecureil", {
    left: 291,
    top: 26,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/00/texte00.png", {
    left: 427,
    top: 59,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    // charge le chemin du prince
    loadOtherScenesById([12, 13, 14, 26, 27, 28], 10, function(kind) {
        if (kind === "start") {
            me.disableNavigation();
        }
        if (kind === "end") {
            me.enableNavigation();
        }
    });
};


/**
 * SCENE INTRO
 */

scene_num = 1;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/01/escargot01.png", {
    left: 935,
    top: 510,
    visible: true,
    autorun: false
});
scenes[scene_num].yeuxclos("ecrans/01/escargotyeux01", {
    left: 944,
    top: 530,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/01/fee01_28_349_219.png", {
    left: 28,
    top: 178,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/01/01_texte.png", {
    left: 373,
    top: 74,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();

    TweenMax.to(".escargot01", 40, {
        left: 530
    });
    TweenMax.to(".escargotyeux01_yeux_clos", 40, {
        left: 539
    });
};


/**
 * SCENE 1-1
 */

scene_num = 2;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/02/feu02_06_98_74.png", {
    left: 262,
    top: 169,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/02/bn02_24_259_432.png", {
    left: 124,
    top: 113,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/02/prince02_24_195_448.png", {
    left: 0,
    top: 75,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/02/nain02_24_490_322.png", {
    left: 534,
    top: 220,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/02/texte02.png", {
    left: 436,
    top: 23,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    var tl = new TimelineMax();
    me.find(".bn02").seek(0.5);
    tl.to(".prince02", 2, {
        onStart: function() {
            me.find(".prince02").play().repeatDelay(2.5);
        },

        onComplete: function() {
            me.find(".bn02").play().repeatDelay(3);
        }


    });

};

/**
 * SCENE 1-2
 */

scene_num = 3;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/03/texte_choix103.png", {
    left: 635,
    top: 483,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/03/texte_choix203.png", {
    left: 634,
    top: 533,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/03/mainverte03.png", {
    left: 589,
    top: 534,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/03/mainrouge03.png", {
    left: 589,
    top: 487,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/03/bn03_24_87_77.png", {
    left: 33,
    top: 57,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/03/chat03_24_126_99.png", {
    left: 108,
    top: 467,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/03/prince03_24_139_135.png", {
    left: 457,
    top: 82,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/03/souris03_14_82_100.png", {
    left: 261,
    top: 202,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/03/texte03.png", {
    left: 617,
    top: 51,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.navigationButton([".mainrouge03", ".texte_choix103"], 98, 7);
    me.navigationButton([".mainverte03", ".texte_choix203"], 4);
    me.find(".prince03").delay(3).repeatDelay(3);
    me.find(".bn03").repeatDelay(3);
};

/**
 * SCENE 2-progression
 */

scene_num = 4;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/04/prince04a_08_135_299.png", {
    left: -200,
    top: 124,
    visible: true,
    autorun: true,
    ease: Power0.easeIn,
});
scenes[scene_num].asset("ecrans/04/arbre04.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/04/ecureuil04_24_94_143.png", {
    left: 22,
    top: 55,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/04/oiseau04_24_59_88.png", {
    left: 878,
    top: 65,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/04/prince04b_stop.png", {
    left: 401,
    top: 125,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/04/texte04.png", {
    left: 123,
    top: 443,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    TweenMax.set(".prince04b", {
        opacity: 0
    });
    TweenMax.fromTo(".prince04a", 5, {
        left: -200
    }, {
        left: 401,
        ease: Power1.easeOut,
        onComplete: function() {
            TweenMax.set(".prince04a", {
                opacity: 0
            });
            TweenMax.set(".prince04b_stop", {
                opacity: 1
            });
        }
    });
    // charge le chemin du prince
    loadOtherScenesById([15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], 10, function(kind) {
        if (kind === "start") {
            me.disableNavigation();
        }
        if (kind === "end") {
            me.enableNavigation();
        }
    });
};

/**
 * SCENE 2-1
 */

scene_num = 5;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/05/choix105.png", {
    left: 72,
    top: 144,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/05/choix205.png", {
    left: 72,
    top: 195,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/05/mainverte05.png", {
    left: 37,
    top: 198,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/05/mainrouge05.png", {
    left: 37,
    top: 145,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/05/girouette05_24_43_69.png", {
    left: 750,
    top: 48,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/05/poisson05_40_100_80.png", {
    left: 346,
    top: 455,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/05/prince05a_08_60_134.png", {
    left: -150,
    top: 350,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/05/prince05b_stop.png", {
    left: 611,
    top: 202,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/05/texte105.png", {
    left: 37,
    top: 52,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.navigationButton([".mainrouge05", ".choix105"], 6);
    me.navigationButton([".mainverte05", ".choix205"], 11);
    //me.jumpToScene(8);
    TweenMax.set(".prince05b", {
        opacity: 0
    });
    var tl = new TimelineMax();
    tl.to(".prince05a", 2, {
        left: 36,
        top: 307,
        ease: Power0.easeNone
    });
    tl.to(".prince05a", 2, {
        left: 246,
        top: 242,
        scale: 0.8,
        ease: Power0.easeNone
    });
    tl.to(".prince05a", 2, {
        left: 446,
        top: 215,
        scale: 0.9,
        ease: Power0.easeNone
    });
    tl.to(".prince05a", 1.8, {
        left: 556,
        top: 210,
        scale: 1,
        ease: Power0.easeNone
    });
    tl.to(".prince05a", 1, {
        left: 611,
        top: 202,
        ease: Power0.easeNone,
        onComplete: function() {
            TweenMax.set(".prince05a", {
                opacity: 0
            });
            TweenMax.set(".prince05b_stop", {
                opacity: 1
            });
        }
    });
};


/**
 * SCENE 2-2
 */

scene_num = 6;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/06/prince06_12_819_576.png", {
    left: 15,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/06/texte106.png", {
    left: 552,
    top: 56,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.navigationButton([".next"], 97, 9);

};

/**
 * SCENE 3-1
 */

scene_num = 7;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/07/bnmarche07_12_208_374.png", {
    left: -250,
    top: 127,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/07/bnstop07_22_208_374.png", {
    left: 210,
    top: 127,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/07/loup07_25_434_488.png", {
    left: 357,
    top: 32,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/07/arbre07.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: true
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.set(".bnstop07", {
        opacity: 0
    });
    TweenMax.fromTo(".bnmarche07", 3, {
        left: -250
    }, {
        left: 210,
        ease: Power1.easeOut,
        onComplete: function() {
            TweenMax.set(".bnmarche07", {
                opacity: 0
            });
            TweenMax.set(".bnstop07", {
                opacity: 1
            });
            me.find(".loup07").play()
        }
    });
};


/**
 * SCENE 3-2 --------- VERIFIER CLIC LAIT
 */

scene_num = 8;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/08/bn08_24_299_390.png", {
    left: 304,
    top: 186,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/08/loup08.png", {
    left: 494,
    top: 0,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/08/loup08b_24_530_576.png", {
    left: 494,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/08/texte108.png", {
    left: 21,
    top: 25,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.addClickOn([".loup08b"], function() {
        SoundPool.playSound('harpe', this);
        TweenMax.set(".loup08", {
            autoAlpha: 1
        });
        TweenMax.set(".loup08b", {
            autoAlpha: 0
        });
        me.enableNavigation();
        me.navigationButton([".next"], 98, 26);
    })
    me.find(".loup08b").delay(3).repeatDelay(3);
    me.find(".bn08").repeatDelay(3);
};

/**
 * SCENE 4-1
 */

scene_num = 9;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/09/prince09_8_135_299.png", {
    left: -150,
    top: 42,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/09/pcr9_21_666_576.png", {
    left: 360,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/09/princestop9.png", {
    left: 150,
    top: 42,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/09/texte09.png", {
    left: 30,
    top: 420,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.to(".prince09", 2, {
        left: 150,
        onComplete: function() {
            TweenMax.to(".prince09", 0, {
                opacity: 0
            });
            TweenMax.to(".princestop9", 0, {
                opacity: 1
            });
        }
    });
};


/**
 * SCENE 4-2
 */

scene_num = 10;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/10/prince10_18_340_576.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: true,
    repeat: 0
});
scenes[scene_num].asset("ecrans/10/princeparle10_18_340_576.png", {
    left: 0,
    top: 0,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/10/chapsansbeurre10.png", {
    left: 0,
    top: 275,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/10/chaperon10_24_591_312.png", {
    left: 215,
    top: 264,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/10/texte110.png", {
    left: 404,
    top: 30,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/10/choix110.png", {
    left: 770,
    top: 492,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/10/choix210.png", {
    left: 770,
    top: 541,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/10/mainverte10.png", {
    left: 735,
    top: 534,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/10/mainrouge10.png", {
    left: 729,
    top: 489,
    visible: false,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.navigationButton([".mainrouge10", ".choix110"], 13);
    me.navigationButton([".mainverte10", ".choix210"], 97, 15);
    TweenMax.fromTo(".princeparle10", 1.5, {
        opacity: 0
    }, {
        opacity: 0,
        onComplete: function() {
            TweenMax.to(".prince10", 0, {
                opacity: 0
            });
            TweenMax.to(".princeparle10", 0, {
                opacity: 1
            });
        }

    });
    me.find(".chaperon10").delay(3).play().repeatDelay(3);
    me.find(".princeparle10").repeatDelay(3);

    TweenMax.set(".chaperon10", { cursor: "pointer" });
    document.querySelector(".chaperon10").addEventListener("click", function() {
        TweenMax.to(".chaperon10", 0.25, { autoAlpha: 0 });
        TweenMax.to(".chapsansbeurre10", 0.25, { opacity: 1 });
        TweenMax.set([".mainverte10", ".mainrouge10", ".choix110", ".choix210"], { opacity: 1 });
        SoundPool.playSound('harpe', this);
    });
    //me.addClickOn(".chaperon", function() {
    //    TweenMax.to(".chaperon", 0, {
    //        opacity: 0
    //    });
    //    TweenMax.to(".chapsansbeurre10", 0, {
    //        opacity: 1
    //    });
    //    TweenMax.to([".mainverte", ".mainrouge", ".choix1", ".choix2"], 0, {
    //        opacity: 1
    //    });
    //    SoundPool.playSound('harpe', this);
    //})
};


/**
 * SCENE 5-1
 */

scene_num = 11;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/11/lapin10_25_108_156.png", {
    left: 776,
    top: 556,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/11/poisson210_12_78_65.png", {
    left: 300,
    top: 500,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/11/princefrappe10_18_68_134.png", {
    left: 628,
    top: 208,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/11/princemarche10_08_62_132.png", {
    left: 310,
    top: 228,
    visible: true,
    autorun: true
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    var tl = new TimelineMax();

    tl.to(".princemarche10", 2, {
        left: 400,
        ease: Power0.easeNone
    });
    tl.to(".princemarche10", 1.5, {
        left: 490,
        scale: 0.95,
        top: 203,
        ease: Power0.easeNone
    });
    tl.to(".princemarche10", 2, {
        left: 628,
        scale: 1,
        top: 208,
        ease: Power0.easeNone,
        onComplete: function() {
            me.find(".princemarche10").pause();
            TweenMax.to(".princemarche10", 0, {
                opacity: 0
            });
            TweenMax.to(".princefrappe10", 0, {
                opacity: 1,
                onComplete: function() {
                    me.find(".princefrappe10").play();
                }
            });
            tl.to(".princefrappe10", 2, {
                opacity: 1,
                onComplete: function() {
                    me.find(".princefrappe10").pause();
                }
            })
        }
    });

    var tl2 = new TimelineMax();
    tl2.to(".poisson210", 1, {
        left: 315,
        top: 495,
        ease: Power0.easeNone
    });
    tl2.to(".poisson210", 1, {
        left: 312,
        top: 500,
        ease: Power0.easeNone
    });
    tl2.to(".poisson210", 1, {
        left: 307,
        top: 490,
        ease: Power0.easeNone
    });
    tl2.to(".poisson210", 1, {
        left: 305,
        top: 493,
        ease: Power0.easeNone
    });
    tl2.to(".poisson210", 1, {
        left: 310,
        top: 497,
        ease: Power0.easeNone
    });
    tl2.to(".poisson210", 1, {
        left: 300,
        top: 500,
        ease: Power0.easeNone
    });
    tl2.repeat(3);

    var tl3 = new TimelineMax();
    for (var i = 0; i <= 3; i++) {
        tl3.to(".lapin10", 0.3, {
            top: 456
        });
        tl3.to(".lapin10", 1.5, {
            top: 456
        });
        tl3.to(".lapin10", 0.3, {
            top: 506
        });
    }

    tl3.to(".lapin10", 0.3, {
        top: 456
    });



};


/**
 * SCENE 5-2
 */

scene_num = 12;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/12/meunier12_24_519_535.png", {
    left: 507,
    top: 48,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/12/princecorps12.png", {
    left: 277,
    top: 318,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/12/prince12_24_249_267.png", {
    left: 275,
    top: 114,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/12/farine12.png", {
    left: 930,
    top: 474,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/12/levure12.png", {
    left: 964,
    top: 517,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/12/cache12.png", {
    left: 867,
    top: 513,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/12/texte12.png", {
    left: 19,
    top: 25,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/vide.png", {
    left: 919,
    top: 455,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();

    var cpt = 0;
    addCpt = function() {
        if (++cpt >= 2) {
            me.enableNavigation();
            me.navigationButton(['.next'], 97, 17);
        }
    };
    TweenMax.set([".levure12", ".farine12", ".vide"], { cursor: "pointer" });

    document.querySelector(".vide").addEventListener("click", function() {
        TweenMax.to(".levure12", 0, {
            opacity: 0,
            onComplete: function() {
                SoundPool.playSound('harpe', this);
                addCpt();
                document.querySelector(".vide").addEventListener("click", function() {
                    TweenMax.to(".farine12", 0, { opacity: 0 });
                    TweenMax.set(".vide", { cursor: "default" });
                    SoundPool.playSound('harpe', this);
                    addCpt();
                });
            }
        });
    });
    var tl = new TimelineMax();
    tl.to(".prince12", 2, {
        onStart: function() {
            me.find(".prince12").play().repeatDelay(3);
        },

        onComplete: function() {
            me.find(".meunier12").play().repeatDelay(3);
        }
    });
};


/**
 * SCENE 6-1
 */

scene_num = 13;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/13/princemarche13_08_175_414.png", {
    left: -180,
    top: 130,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/13/princestop13.png", {
    left: 600,
    top: 160,
    visible: false,
    autorun: true
});
scenes[scene_num].yeuxclos("ecrans/13/chien13", {
    left: 743,
    top: 308,
    visible: true,
    autorun: false
});
scenes[scene_num].yeuxclos("ecrans/13/cigogne13", {
    left: 759,
    top: 38,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    var tl = new TimelineMax();

    tl.to(".princemarche13", 3, {
        left: 60,
        onComplete: function() {
            me.find(".princemarche13").pause();
        }
    });
    tl.to(".princemarche13", 1, {
        opacity: 1
    });

    tl.to(".princemarche13", 5, {
        onStart: function() {
            me.find(".princemarche13").play();
        },
        left: 600,
        top: 160,
        scale: 0.5
    });

    tl.to(".princemarche13", 0, {
        opacity: 0,
        onComplete: function() {
            TweenMax.set(".princestop13", {
                opacity: 1,
                scale: 0.5,
                top: 58,
                left: 558
            });
        }
    });



};


/**
 * SCENE 6-2 ------------ A TERMINER : CLIC SUR POT DE SUCRE et mainverte et mainrouge cliquable et texte choix à regarder
 */
scene_num = 14;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/14/fondblanc14.png", {
    left: 730,
    top: 459,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/14/texte_choix114.png", {
    left: 789,
    top: 481,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/14/texte_choix214.png", {
    left: 789,
    top: 522,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/14/mainverte14.png", {
    left: 753,
    top: 531,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/14/mainrouge14.png", {
    left: 753,
    top: 483,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/14/grandmere14_24_301_262.png", {
    left: 694,
    top: 204,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/14/fumeedestasses14_12_72_69.png", {
    left: 540,
    top: 369,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/14/princeassis14_24_210_442.png", {
    left: 501,
    top: 11,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/14/texte14.png", {
    left: 22,
    top: 14,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/14/sucre14.png", {
    left: 431,
    top: 405,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.find(".princeassis14").repeatDelay(3);
    me.find(".grandmere14").delay(3).repeatDelay(3);
    me.disableNavigation();
    me.navigationButton([".mainverte14", ".texte_choix214"], 97, 21);
    me.navigationButton([".mainrouge14", ".texte_choix114"], 97, 19);
    TweenMax.fromTo(".princeassis14", 0, {
        opacity: 1
    }, {
        opacity: 0,
        onComplete: function() {
            TweenMax.set(".princeassis14", {
                opacity: 1
            });
        }
    });
    TweenMax.fromTo(".grandmere14", 0, {
        opacity: 1
    }, {
        opacity: 0,
        onComplete: function() {
            TweenMax.set(".grandmere14", {
                opacity: 1
            });
        }
    });

    me.makeObjectDisappear([".sucre14"], function() {
        TweenMax.to([".mainverte14", ".mainrouge14", ".texte_choix114", ".texte_choix214", ".fondblanc14"], 0, {
            opacity: 1
        })

    });

};

/**
 * SCENE 7-1
 */
scene_num = 15;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/15/bdor15.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/15/bdo15_25_91_94.png", {
    left: 788,
    top: 97,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/15/prince15_08_195_394.png", {
    left: 0,
    top: 52,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/15/princestopetparle15_22_195_394.png", {
    left: 0,
    top: 52,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/15/raton15_25_128_109.png", {
    left: 726,
    top: 287,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/15/raton215_25_190_106.png", {
    left: 38,
    top: 470,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/15/texte15.png", {
    left: 219,
    top: 192,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    var tl = new TimelineMax();
    tl.to(".prince15", 3, {
        onStart: function() {
            me.find(".princestopetparle15").play().repeatDelay(3);
        },

        onComplete: function() {
            me.find(".bdo15").repeatDelay(2.8).play();
        }
    })
};

/**
 * SCENE 7-2
 */
scene_num = 16;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/16/bdor16.png", {
    left: 516,
    top: 223,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/16/bdorparle16_25_206_181.png", {
    left: 600,
    top: 349,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/16/princecorps16.png", {
    left: 4,
    top: 251,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/16/princeparle16_25_369_354.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/16/texte16.png", {
    left: 351,
    top: 29,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.navigationButton([".next"], 97, 23);
    var tl = new TimelineMax();
    tl.to(".bdorparle16", 3, {
        onStart: function() {
            me.find(".bdorparle16").play().repeatDelay(3.5);
        },

        onComplete: function() {
            me.find(".princeparle16").repeatDelay(2.8).play();
        }
    })
};

/**
 * SCENE 8-1
 */
scene_num = 17;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/17/fond17.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/17/prince17_25_95_463.png", {
    left: 0,
    top: 30,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/17/decor17.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/17/abeille17_25_218_178.png", {
    left: 737,
    top: 15,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/17/mamanourse17_25_148_121.png", {
    left: 762,
    top: 266,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/17/ourson17_25_147_87.png", {
    left: 136,
    top: 350,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/17/papaours17_25_166_95.png", {
    left: 517,
    top: 222,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/17/texte17.png", {
    left: 184,
    top: 35,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
};

/**
 * SCENE 8-2
 */
scene_num = 18;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/18/abeillebouge18_30_235_318.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/18/abeillenosac18_10_160_280.png", {
    left: 38,
    top: 29,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/18/abeillefixe18_4_235_318.png", {
    left: 0,
    top: 0,
    visible: false,
    autorun: true
});



scenes[scene_num].asset("ecrans/18/mamanourse18_25_162_124.png", {
    left: 755,
    top: 288,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/18/ourson18_30_149_110.png", {
    left: 133,
    top: 351,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/18/papaours18_25_148_118.png", {
    left: 519,
    top: 238,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/18/princecorps18.png", {
    left: 223,
    top: 228,
    visible: true,
    autorun: false
});

scenes[scene_num].asset("ecrans/18/prince18_25_285_289.png", {
    left: 189,
    top: -1,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/18/texte18.png", {
    left: 494,
    top: 41,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    TweenMax.set(".abeillefixe18", {
        cursor: "pointer"
    });
    me.find(".abeillebouge18").play().repeat(0).eventCallback("onComplete", function() {
        TweenMax.to(".abeillebouge18", 0, {
            opacity: 0
        });
        TweenMax.to(".abeillefixe18", 0, {
            opacity: 1
        });
    });

    document.querySelector(".abeillefixe18").addEventListener("click", function() {
        SoundPool.playSound('harpe', this);
        TweenMax.to(".abeillefixe18", 0, {
            opacity: 0
        });
        TweenMax.to(".abeillenosac18", 0, {
            opacity: 1
        });
        me.enableNavigation();
        me.navigationButton(['.next'], 97, 25);
    });
    me.find(".papaours18").repeatDelay(3);
    me.find(".prince18").delay(3).repeatDelay(3);
};

/**
 * SCENE 9-1
 */
scene_num = 19;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/19/princemefiant19_25_383_473.png", {
    left: -300,
    top: 148,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/19/sorciere19_25_662_576.png", {
    left: 1200,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/19/texte19.png", {
    left: 39,
    top: 33,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();

    TweenMax.to(".princemefiant19", 3, {
        left: 0,
        onComplete: function() {
            me.find(".princemefiant19").play().delay(3).repeatDelay(3);
        }
    });
    TweenMax.to(".sorciere19", 3, {
        left: 362,
        onComplete: function() {
            me.find(".sorciere19").play().repeatDelay(3);
        }
    });
};

/**
 * SCENE 9-2
 */
scene_num = 20;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/20/princeinquiet20_25_183_413.png", {
    left: 37,
    top: 149,
    visible: true,
    autorun: true
});

scenes[scene_num].asset("ecrans/20/texte20.png", {
    left: 551,
    top: 385,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/20/sorcieresanspomme20.png", {
    left: 201,
    top: 100,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/20/sorciere20_25_460_492.png", {
    left: 166,
    top: 83,
    visible: true,
    autorun: true
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    TweenMax.set(".sorciere20", {
        cursor: "pointer"
    });
    document.querySelector(".sorciere20").addEventListener("click", function() {
        SoundPool.playSound('harpe', this);
        TweenMax.to(".sorcieresanspomme20", 0, {
            opacity: 1
        });
        TweenMax.to(".sorciere20", 0, {
            opacity: 0
        });
        me.enableNavigation();
        me.navigationButton([".next"], 96, 50);
    })
};

/**
 * SCENE 10-1
 */
scene_num = 21;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/21/bonhom121_25_446_291.png", {
    left: 576,
    top: 287,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/21/bonhomX221_25_253_167.png", {
    left: 163,
    top: 208,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/21/fumee21_24_201_83.png", {
    left: 445,
    top: 1,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/21/prince21_24_276_468.png", {
    left: 0,
    top: 109,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/21/texte21.png", {
    left: 39,
    top: 23,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
};


/**
 * SCENE 10-2
 */
scene_num = 22;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/22/prince22_25_157_260.png", {
    left: 0,
    top: 110,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/22/hansel22_8_252_310.png", {
    left: 300,
    top: 192,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/22/gretel22_10_334_314.png", {
    left: 473,
    top: 310,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/22/texte22.png", {
    left: 630,
    top: 50,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/22/fruitsconfits22.png", {
    left: 390,
    top: 147,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    TweenMax.to(".hansel22", 5, {
        delay: 20,
        left: 650,
        top: 570,
        onStart: function() {
            me.find(".hansel22").play()
        }
    });
    TweenMax.to(".gretel22", 5, {
        delay: 20,
        left: 700,
        top: 600,
        onStart: function() {
            me.find(".gretel22").play()
        }
    });

    me.makeObjectDisappear([".fruitsconfits22"], function() {
        me.enableNavigation();
        me.navigationButton([".next"], 96, 54);
    });
};


/**
 * SCENE 11-1
 */
scene_num = 23;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/23/poucet23_30_273_215.png", {
    left: 337,
    top: 339,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/23/prince23_25_160_328.png", {
    left: 864,
    top: 33,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/23/texte23.png", {
    left: 22,
    top: 20,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
};


/**
 * SCENE 11-2
 */
scene_num = 24;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/24/enfants24_30_94_78.png", {
    left: 723,
    top: 122,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/24/frered24_30_141_106.png", {
    left: 511,
    top: 329,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/24/prince24_30_203_337.png", {
    left: 823,
    top: 19,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/24/sac24.png", {
    left: 807,
    top: 165,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/24/texte24.png", {
    left: 453,
    top: 43,
    visible: true,
    autorun: false
});
scenes[scene_num].yeuxclos("ecrans/24/enfmilieu24", {
    left: 215,
    top: 195,
    visible: true,
    autorun: false
});
scenes[scene_num].yeuxclos("ecrans/24/enfgauche24", {
    left: 0,
    top: 167,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.makeObjectDisappear([".sac24"], function() {
        me.enableNavigation();
        me.navigationButton(['.next'], 96, 57);
    });
    me.find(".prince24").delay(1).repeat(0);

};


/**
 * SCENE 12
 */
scene_num = 25;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/25/texte25.png", {
    left: 17,
    top: 355,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/25/prince25_25_204_409.png", {
    left: 258,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/25/chasseur1_30_82_61.png", {
    left: 632,
    top: 140,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/25/chasseur2_30_101_59.png", {
    left: 747,
    top: 156,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/25/chasseur3_30_96_84.png", {
    left: 886,
    top: 180,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/25/chien25_24_270_141.png", {
    left: 755,
    top: 412,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/25/ecurueilin25_22_121_109.png", {
    left: 902,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/25/ecurueil25_25_85_76.png", {
    left: 902,
    top: 35,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/25/jambon25.png", {
    left: 425,
    top: 347,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/25/fromage25.png", {
    left: 677,
    top: 425,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.find(".prince25").delay(3).repeatDelay(3);
    me.find(".chasseur1").repeatDelay(3);
    me.find(".chasseur2").delay(6).repeatDelay(3);
    me.find(".chasseur3").delay(9).repeatDelay(3);

    var cpt = 0;
    addCpt = function() {
        if (++cpt > 1) {
            me.enableNavigation();
            me.navigationButton(['.next'], 96, 60);
        }
    };

    me.makeObjectDisappear([".jambon25", ".fromage25"], addCpt);


    me.find(".ecurueilin25").play().repeat(0);
    TweenMax.to(".ecurueil25", 2.5, {
        opacity: 0,
        onComplete: function() {
            TweenMax.to(".ecurueil25", 0, {
                opacity: 1
            });
            TweenMax.to(".ecurueilin25", 0, {
                opacity: 0
            });
        }
    });

};


/**
 * SCENE 13-1
 */
scene_num = 26;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/26/poule26_25_179_173.png", {
    left: 613,
    top: 203,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/26/bn26_25_328_478.png", {
    left: 0,
    top: 97,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/26/mainrouge26.png", {
    left: 694,
    top: 503,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/26/mainverte26.png", {
    left: 694,
    top: 535,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/26/choix126.png", {
    left: 739,
    top: 507,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/26/choix226.png", {
    left: 738,
    top: 542,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/26/texte26.png", {
    left: 256,
    top: 410,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    // charge le chemin de la princesse
    loadOtherScenesById([29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72], 30, function(kind) {
        if (kind === "start") {
            me.disableNavigation();
        }
        if (kind === "end") {
            me.navigationButton([".mainverte26", ".choix226"], 98, 29);
            me.navigationButton([".mainrouge26", ".choix126"], 27);
        }
    });
};


/**
 * SCENE 13-2
 */
scene_num = 27;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/27/poule27_25_200_227.png", {
    left: 506,
    top: 199,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/27/bn27_25_112_87.png", {
    left: 137,
    top: 125,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/27/texte27.png", {
    left: 39,
    top: 36,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/27/gateau27.png", {
    left: 262,
    top: 328,
    visible: true,
    autorun: false
});



scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".poule27").repeatDelay(3);
    me.find(".bn27").delay(3).repeatDelay(3);
};


/**
 * SCENE 13-3
 */
scene_num = 28;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/28/poulesansoeuf28.png", {
    left: 267,
    top: 252,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/28/poule28_25_585_342.png", {
    left: 323,
    top: 234,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/28/bn28_25_301_218.png", {
    left: 55,
    top: 34,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/28/mainverte28.png", {
    left: 694,
    top: 535,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/28/choix128.png", {
    left: 748,
    top: 508,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/28/choix228.png", {
    left: 748,
    top: 542,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/28/texte28.png", {
    left: 358,
    top: 75,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/28/mainrouge28.png", {
    left: 694,
    top: 503,
    visible: false,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.navigationButton([".mainverte28", ".choix228"], 36);
    me.navigationButton([".mainrouge28", ".choix128"], 33);
    TweenMax.set(".poule28", {
        cursor: "pointer"
    });
    document.querySelector(".poule28").addEventListener("click", function() {
        TweenMax.set(".poule28", {
            opacity: 0
        });
        TweenMax.set(".poulesansoeuf28", {
            opacity: 1
        });
        TweenMax.set([".choix128", ".choix228", ".mainrouge28", ".mainverte28"], {
            opacity: 1,
            cursor: "pointer"
        });
        SoundPool.playSound('harpe', this);
    });
    me.find(".poule28").repeatDelay(3);
    me.find(".bn28").delay(3).repeatDelay(3);
};


/**
 * SCENE 14-1
 */
scene_num = 29;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/29/bnmarche29_12_182_344.png", {
    left: -200,
    top: 194,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/29/bnparle29_12_182_344.png", {
    left: 73,
    top: 194,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/29/fee29_15_51_91.png", {
    left: 383,
    top: 307,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/29/ver29_12_60_54.png", {
    left: 673,
    top: 505,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/29/texte29.png", {
    left: 531,
    top: 31,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.to(".bnmarche29", 3, {
        left: 73,
        onComplete: function() {
            TweenMax.set(".bnparle29", {
                opacity: 1
            });
            TweenMax.set(".bnmarche29", {
                opacity: 0
            });
        }
    });
};


/**
 * SCENE 14-2
 */
scene_num = 30;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/30/bn30_25_314_297.png", {
    left: 81,
    top: 195,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/30/fee30_25_268_256.png", {
    left: 534,
    top: 197,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/30/texte30.png", {
    left: 601,
    top: 35,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".bn30").repeatDelay(3);
};


/**
 * SCENE 14-3
 */
scene_num = 31;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].yeuxclos("ecrans/31/etoiles", {
    left: 70,
    top: 89,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/31/fee31_72_350_350.png", {
    left: 620,
    top: 0,
    visible: true,
    autorun: true
});

scenes[scene_num].asset("ecrans/31/texte31.png", {
    left: 55,
    top: 51,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
};


/**
 * SCENE 14-4
 */
scene_num = 32;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/32/choix132.png", {
    left: 786,
    top: 515,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/32/choix232.png", {
    left: 783,
    top: 543,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/32/mainverte32.png", {
    left: 742,
    top: 536,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/32/mainrouge32.png", {
    left: 742,
    top: 504,
    visible: false,
    autorun: false
});

scenes[scene_num].asset("ecrans/32/feesansvanille32.png", {
    left: 463,
    top: 263,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/32/bn32_25_371_300.png", {
    left: 90,
    top: 18,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/32/texte32.png", {
    left: 540,
    top: 75,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/32/fee32_30_346_303.png", {
    left: 415,
    top: 200,
    visible: true,
    autorun: true
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.navigationButton([".mainverte32", ".choix232"], 41);
    me.navigationButton([".mainrouge32", ".choix132"], 98, 38);
    TweenMax.set(".fee32", {
        cursor: "pointer"
    });
    document.querySelector(".fee32").addEventListener("click", function() {
        TweenMax.to(".fee32", 0, {
            opacity: 0
        });
        TweenMax.to(".feesansvanille32", 0, {
            opacity: 1
        });
        TweenMax.to([".mainrouge32", ".mainverte32", ".choix132", ".choix232"], 0, {
            opacity: 1
        });
        SoundPool.playSound('harpe', this);
    });

    me.find(".bn32").delay(3).repeatDelay(3);
};


/**
 * SCENE 15-1
 */
scene_num = 33;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/33/nuage133.png", {
    left: 39,
    top: 84,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/33/nuage233.png", {
    left: 162,
    top: 29,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/33/nuage333.png", {
    left: 619,
    top: 32,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/33/nuage433.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/33/poisson33_40_100_80.png", {
    left: 472,
    top: 429,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/33/girouette33_24_70_71.png", {
    left: 776,
    top: 68,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/33/bnmarche33_12_76_144.png", {
    left: -200,
    top: 340,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/33/bnstop33.png", {
    left: 675,
    top: 245,
    visible: false,
    autorun: true
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();

    var tl = new TimelineMax();
    tl.to(".bnmarche33", 1.8, {
        left: 36,
        top: 342,
        ease: Power0.easeNone
    });
    tl.to(".bnmarche33", 1.7, {
        left: 246,
        top: 252,
        ease: Power0.easeNone
    });
    tl.to(".bnmarche33", 1.4, {
        left: 446,
        top: 230,
        scale: 0.9,
        ease: Power0.easeNone
    });
    tl.to(".bnmarche33", 1.2, {
        left: 556,
        top: 250,
        scale: 0.8,
        ease: Power0.easeNone
    });
    tl.to(".bnmarche33", 1.1, {
        left: 675,
        top: 255,
        scale: 0.7,
        ease: Power0.easeNone,
        onComplete: function() {
            TweenMax.set(".bnmarche33", {
                opacity: 0
            });
            TweenMax.set(".bnstop33", {
                scale: 0.7,
                opacity: 1
            });
        }
    });

    TweenMax.fromTo(".nuage233", 3, {
        left: 162
    }, {
        left: 200,
        yoyo: true,
        repeat: -1,
        delay: 0.5,
        repeatDelay: 1,
        ease: Power1.easeOut
    });
    TweenMax.fromTo(".nuage133", 3, {
        left: 39
    }, {
        left: 19,
        yoyo: true,
        repeat: -1,
        delay: 0.5,
        repeatDelay: 1,
        ease: Power1.easeOut
    });
    TweenMax.fromTo(".nuage333", 3, {
        left: 619
    }, {
        left: 640,
        yoyo: true,
        repeat: -1,
        delay: 0.5,
        repeatDelay: 1,
        ease: Power1.easeOut
    });
};


/**
 * SCENE 15-2
 */
scene_num = 34;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/34/bnmarche34_12_218_357.png", {
    left: -200,
    top: 96,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/34/bnstop34.png", {
    left: 35,
    top: 96,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/34/chat34_12_148_91.png", {
    left: 762,
    top: 106,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/34/souris34_12_161_145.png", {
    left: 554,
    top: 432,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/34/ombrefarine34.png", {
    left: 411,
    top: 255,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/34/farine34.png", {
    left: 428,
    top: 204,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/34/texte34.png", {
    left: 35,
    top: 460,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    TweenMax.to(".bnmarche34", 3, {
        left: 12,
        onComplete: function() {
            TweenMax.set(".bnstop34", {
                opacity: 1
            });
            TweenMax.set(".bnmarche34", {
                opacity: 0
            });
        }
    });

    TweenMax.set(".farine34", {
        cursor: "pointer"
    });

    document.querySelector(".farine34").addEventListener("click", function() {
        SoundPool.playSound('harpe', this);
        TweenMax.to(".farine34", 0, {
            opacity: 0
        });
        me.enableNavigation();
    });


};


/**
 * SCENE 15-3 ------------- A TERMINER : ANIMATIONS BN et ANIMAUX
 */
scene_num = 35;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/35/bn35_25_288_327.png", {
    left: 397,
    top: 248,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/35/souris35.png", {
    left: 257,
    top: 485,
    visible: true,
    autorun: false
});
scenes[scene_num].yeuxclos("ecrans/35/souris35", {
    left: 257,
    top: 485,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/35/levure35.png", {
    left: 289,
    top: 522,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/35/sourisbras35.png", {
    left: 305,
    top: 536,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/35/meunier35_25_527_547.png", {
    left: -10,
    top: 29,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/35/texte35.png", {
    left: 480,
    top: 21,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/vide.png", {
    left: 270,
    top: 500,
    visible: true,
    autorun: false
});



scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    TweenMax.set(".vide", {
        cursor: "pointer"
    });
    document.querySelector(".vide").addEventListener("click", function() {
        TweenMax.to(".levure35", 0, {
            opacity: 0
        });
        me.enableNavigation();
        me.navigationButton([".next"], 98, 43);
        SoundPool.playSound('harpe', this);
    });
    me.find(".meunier35").repeatDelay(3);
    me.find(".bn35").delay(3).repeatDelay(3);

};


/**
 * SCENE 16-1
 */
scene_num = 36;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/36/bnmarche36_12_115_207.png", {
    left: -200,
    top: 245,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/36/bnstop36.png", {
    left: 396,
    top: 261,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/36/escargot36_12_91_69.png", {
    left: 693,
    top: 252,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/36/ver36_12_69_60.png", {
    left: 318,
    top: 46,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/36/texte36.png", {
    left: 518,
    top: 403,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.to(".bnmarche36", 6, {
        left: 386,
        onComplete: function() {
            TweenMax.set(".bnstop36", {
                opacity: 1
            });
            TweenMax.set(".bnmarche36", {
                opacity: 0
            });
        }
    });
};


/**
 * SCENE 16-2
 */
scene_num = 37;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/37/bnstop37.png", {
    left: 65,
    top: 115,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/37/bn37_25_497_482.png", {
    left: 65,
    top: 95,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/37/texte37.png", {
    left: 621,
    top: 391,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    TweenMax.set(".bn37", { cursor: "pointer" });
    document.querySelector(".bn37").addEventListener("click", function() {
        SoundPool.playSound('harpe', this);
        TweenMax.to(".bn37", 0, {
            opacity: 0
        });
        TweenMax.to(".bnstop37", 0, {
            opacity: 1
        });
        me.enableNavigation();
        me.navigationButton([".next"], 98, 46);
    });
};


/**
 * SCENE 17-1
 */
scene_num = 38;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/38/bnmarche38_12_204_360.png", {
    left: -200,
    top: 191,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/38/bnstop38.png", {
    left: 51,
    top: 191,
    visible: false,
    autorun: false
});
scenes[scene_num].asset("ecrans/38/cochon38_25_219_259.png", {
    left: 292,
    top: 281,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/38/fumee38_24_145_122.png", {
    left: 125,
    top: 0,
    visible: true,
    autorun: true
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.to(".bnmarche38", 5, {
        left: 51,
        onComplete: function() {
            TweenMax.set(".bnstop38", {
                opacity: 1
            });
            TweenMax.set(".bnmarche38", {
                opacity: 0
            });
        }
    });
};


/**
 * SCENE 17-2
 */
scene_num = 39;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/39/bn39_25_120_101.png", {
    left: 484,
    top: 83,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/39/loup39_25_233_108.png", {
    left: 88,
    top: 33,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/39/pig39_12_283_330.png", {
    left: 632,
    top: 218,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/39/texte39.png", {
    left: 24,
    top: 316,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".pig39").repeatDelay(3);
    me.find(".bn39").delay(3).repeatDelay(3);
};

/**
 * SCENE 17-3
 */
scene_num = 40;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/40/bn40_25_342_280.png", {
    left: 53,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/40/pig40_12_520_310.png", {
    left: 416,
    top: 266,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/40/riz40.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/40/texte40.png", {
    left: 457,
    top: 73,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    TweenMax.to(".riz40", {
        cursor: "pointer"
    });
    me.makeObjectDisappear([".riz40"], function() {
        me.enableNavigation();
        me.navigationButton([".next"], 98, 48);
    });
    me.find(".bn40").repeatDelay(3);
    me.find(".pig40").delay(3).repeatDelay(3);


};


/**
 * SCENE 18-1
 */
scene_num = 41;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/41/bn41_38_538_183.png", {
    left: 130,
    top: 392,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/41/carin41_12_431_311.png", {
    left: -400,
    top: 100,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/41/carstop41_15_431_311.png", {
    left: 0,
    top: 100,
    visible: false,
    autorun: true
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    //TweenMax.to(".car41", 5, {left: 0});
    TweenMax.to(".carin41", 7, {
        left: 0,
        ease: Power0.easeOut,
        onComplete: function() {
            TweenMax.to(".carin41", 0, {
                opacity: 0
            });
            TweenMax.to(".carstop41", 0, {
                opacity: 1
            });
        }
    });
};


/**
 * SCENE 18-2
 */
scene_num = 42;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/42/chat42_18_467_282.png", {
    left: 278,
    top: 308,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/42/bn42.png", {
    left: 628,
    top: 99,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/42/bn42_25_132_107.png", {
    left: 806,
    top: 33,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/42/chien42_12_196_424.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/42/sourismarche42_8_222_288.png", {
    left: -200,
    top: 288,
    visible: true,
    autorun: true
});

scenes[scene_num].asset("ecrans/42/sourissansbanane_08_222_288.png", {
    left: 45,
    top: 288,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/42/sourisavecbanane_07_222_288.png", {
    left: 45,
    top: 288,
    visible: false,
    autorun: true
});

scenes[scene_num].asset("ecrans/42/texte42.png", {
    left: 247,
    top: 26,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    TweenMax.set(".sourisavecbanane", {
        cursor: "pointer"
    });
    TweenMax.to(".sourismarche42", 5, {
        left: 45,
        onComplete: function() {
            TweenMax.to(".sourisavecbanane", 0, {
                opacity: 1
            });
            TweenMax.to(".sourismarche42", 0, {
                opacity: 0
            });
        }
    });
    var banane = document.querySelector(".sourisavecbanane");
    banane.addEventListener("click", function() {
        TweenMax.to(".sourisavecbanane", 0, {
            opacity: 0,
            onComplete: function() {
                TweenMax.to(".sourissansbanane", 0, {
                    opacity: 1
                });
                me.enableNavigation();
                me.navigationButton([".next"], 95, 70);
            }
        });
        SoundPool.playSound('harpe', this);
    })

};


/**
 * SCENE 19-1
 */
scene_num = 43;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/43/bn43_50_1024_576.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/43/lapin43_25_27_25.png", {
    left: 152,
    top: 276,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/43/ours43_24_433_187.png", {
    left: 410,
    top: 225,
    visible: true,
    autorun: true
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".bn43").repeat(0).play();
};


/**
 * SCENE 19-2
 */
scene_num = 44;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/44/bn44_25_181_147.png", {
    left: 765,
    top: 21,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/44/ours44_24_695_315.png", {
    left: 52,
    top: 28,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/44/texte44.png", {
    left: 51,
    top: 416,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".bn44").delay(3).repeatDelay(3);
};


/**
 * SCENE 19-3
 */
scene_num = 45;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/45/ourscorps45.png", {
    left: 462,
    top: 282,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/45/ours45_20_419_202.png", {
    left: 481,
    top: 263,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/45/beurre45.png", {
    left: 780,
    top: 438,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/45/chocolat45.png", {
    left: 491,
    top: 440,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/45/sucre45.png", {
    left: 525,
    top: 456,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/45/mainsours45.png", {
    left: 477,
    top: 479,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/45/bn45_25_267_222.png", {
    left: 101,
    top: 32,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/45/texte45.png", {
    left: 390,
    top: 117,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    var cpt = 0;
    me.disableNavigation();

    function addCpt() {
        SoundPool.playSound('harpe', this);
        if (++cpt >= 3) {
            me.enableNavigation();
            me.navigationButton([".next"], 95, 62);
        }
    }
    me.addClickOn([780, 438, 91, 98], function() {
        TweenMax.set(".beurre45", {
            opacity: 0
        });
        addCpt();
    });
    me.addClickOn([525, 456, 67, 108], function() {
        TweenMax.set(".sucre45", {
            opacity: 0
        });
        addCpt();
    });
    me.addClickOn([491, 440, 116, 89], function() {
        TweenMax.set(".chocolat45", {
            opacity: 0
        });
        addCpt();
    })
    me.find(".ours45").repeatDelay(3);
    me.find(".bn45").delay(3).repeatDelay(3);
};


/**
 * SCENE 20-2 ------------- A TERMINER : ANIMATIONS OBJETS ET ANIMAUX et DIALOGUES BN ET GM et CLIC ALIMENTS (REDUCTION ALIMENTS) ALLANT DANS SAC
 */
scene_num = 46;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/46/bn46_25_712_1086.png", {
    left: -200,
    top: 200,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/46/bntoc46_14_712_1086.png", {
    left: 670,
    top: 190,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/46/fumee46_24_213_72.png", {
    left: 754,
    top: 0,
    visible: true,
    autorun: true
});

scenes[scene_num].asset("ecrans/46/texte46.png", {
    left: 334,
    top: 371,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/46/massif46.png", {
    left: 563,
    top: 290,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".bntoc46").repeat(10);
    TweenMax.to(".bn46", 8, {
        left: 670,
        top: 190,
        scale: 0.12,
        onComplete: function() {
            TweenMax.to(".bn46", 0, {
                opacity: 0
            });
            TweenMax.set(".bntoc46", {
                scale: 0.12,
                opacity: 1,
                repeat: 2
            });
        }
    });
};


/**
 * SCENE 20-2 ------------- A TERMINER : ANIMATIONS OBJETS ET ANIMAUX et DIALOGUES BN ET GM et CLIC ALIMENTS (REDUCTION ALIMENTS) ALLANT DANS SAC
 */
scene_num = 47;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/47/bn47_24_110_87.png", {
    left: 555,
    top: 83,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/47/fumee47_12_72_69.png", {
    left: 532,
    top: 365,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/47/farine47.png", {
    left: 910,
    top: 258,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/47/gdmere47_24_301_262.png", {
    left: 684,
    top: 203,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/47/texte47.png", {
    left: 41,
    top: 25,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/47/sucre47.png", {
    left: 432,
    top: 421,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    var cpt = 0;

    function addCpt() {
        SoundPool.playSound('harpe', this);
        if (++cpt > 1) {
            me.enableNavigation();
            me.navigationButton([".next"], 95, 65);
        }
    }
    me.disableNavigation();
    me.makeObjectDisappear([".sucre47"], addCpt);
    me.addClickOn([920, 260, 70, 120], function() {
        addCpt();
        TweenMax.set(".farine47", {
            autoAlpha: 0
        });
    });



    var tl = new TimelineMax();
    tl.to(".bn47", 2, {
        onStart: function() {
            me.find(".bn47").play().repeatDelay(2.5);
        },

        onComplete: function() {
            me.find(".gdmere47").play().repeatDelay(3);
        }


    });

};


/**
 * SCENE 21-1 ------------- A TERMINER : ANIMATIONS ANIMAUX ET BN
 */
scene_num = 48;
scenes[scene_num] = new Scene(scene_num);

//scenes[scene_num].asset("ecrans/48/masque.jpg", {left:0, top: 0, visible: true, autorun: false});
scenes[scene_num].asset("ecrans/48/bn48_25_133_212.png", {
    left: 0,
    top: 231,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/48/zzz48_12_53_50.png", {
    left: 747,
    top: 11,
    visible: true,
    autorun: true
});

scenes[scene_num].asset("ecrans/48/texte48.png", {
    left: 167,
    top: 466,
    visible: true,
    autorun: false
});

TweenMax.set(".fondgris", {
    opacity: 0
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    var tl = new TimelineMax();
    tl.to(".bn48", 3, {
        left: 365,
        ease: Power0.easeOut
    });
    tl.to(".bn48", 3, {
        left: 625,
        top: 181,
        scale: 0.8,
        ease: Power0.easeOut,
        onComplete: function() {
            me.find(".bn48").pause();
        }
    });
};


/**
 * SCENE 21-2 ------------- A TERMINER : ANIMATIONS BN, GM ET CHIENS et CLIC SUR POT DE SUCRE ALLANT DANS LE SAC
 */
scene_num = 49;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/49/dog49_24_192_127.png", {
    left: 537,
    top: 210,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/49/bn49_24_331_409.png", {
    left: 637,
    top: 167,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/49/zzz49_12_29_33.png", {
    left: 709,
    top: 95,
    visible: true,
    autorun: true
});

scenes[scene_num].asset("ecrans/49/sucre49.png", {
    left: 441,
    top: 412,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/49/texte49.png", {
    left: 57,
    top: 59,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.makeObjectDisappear([".sucre49"], function() {
        me.enableNavigation();
        me.navigationButton([".next"], 95, 68);
    });
    // document.querySelector(".vide").addEventListener("click", function() {
    //     TweenMax.to(".sucre49", 0, {
    //         opacity: 0
    //     });
    //     me.enableNavigation();
    //     SoundPool.playSound('harpe', this);
    // });

};


/**
 * SCENE 22-1
 */
scene_num = 50;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/50/cat50_24_150_72.png", {
    left: 182,
    top: 247,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/50/bnrobe50.png", {
    left: 73,
    top: 282,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/50/bn50_25_147_148.png", {
    left: 40,
    top: 91,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/50/prince50.png", {
    left: 347,
    top: 67,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/50/prince50_24_180_178.png", {
    left: 382,
    top: 47,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/50/texte50.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".bn50").repeatDelay(3);
    me.find(".prince50").delay(3).repeatDelay(3);
};


/**
 * SCENE 22-2 ------------- A TERMINER : A AJOUTER ANIMATION CORPS BN
 */
scene_num = 51;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/51/sorciererire51_24_113_82.png", {
    left: 741,
    top: 29,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/51/sorcierein51_30_113_82.png", {
    left: 741,
    top: 29,
    visible: true,
    autorun: true
});


scenes[scene_num].asset("ecrans/51/princecorps51.png", {
    left: 333,
    top: 198,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/51/teteprince51_24_235_232.png", {
    left: 428,
    top: 3,
    visible: true,
    autorun: true
});

scenes[scene_num].asset("ecrans/51/texte51.png", {
    left: 632,
    top: 296,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/51/bn51_23_533_530.png", {
    left: 0,
    top: 45,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/51/elementstable51.png", {
    left: 0,
    top: 337,
    visible: true,
    autorun: false
});



scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.to(".sorcierein51", 2, {
        left: 741,
        onComplete: function() {
            me.find(".sorcierein51").pause();
            TweenMax.to(".sorcierein51", 0, {
                opacity: 0
            });
            TweenMax.to(".sorciererire51", 0, {
                opacity: 1,
            });
        }
    });
    me.find(".bn51").repeatDelay(3);
    me.find(".teteprince51").delay(3).repeatDelay(3);

};


/**
 * SCENE 22-3
 */
scene_num = 52;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/52/bn52_24_643_576.png", {
    left: -2,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/52/prince52_24_228_378.png", {
    left: 695,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/52/plat52_12_125_138.png", {
    left: 857,
    top: 284,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/52/texte52.png", {
    left: 572,
    top: 469,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
};


/**
 * SCENE 22-4
 */
scene_num = 53;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/53/nain353_21_153_282.png", {
    left: 871,
    top: 178,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/53/nain153_20_256_298.png", {
    left: 640,
    top: 278,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/53/nain453_12_203_209.png", {
    left: 720,
    top: 91,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/53/bn53_8_328_465.png", {
    left: 0,
    top: 27,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/53/prince53_8_129_336.png", {
    left: 614,
    top: 10,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/53/nain253_18_201_250.png", {
    left: 832,
    top: 330,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/53/tablepremierplan53.png", {
    left: 0,
    top: 359,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/53/texte53.png", {
    left: 272,
    top: 218,
    visible: true,
    autorun: false
});
scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.addClickOn([860, 110, 130, 100], function() {
        me.printDocument("crumblepomme")
    }, "crumblepomme");
};


/**
 * SCENE 23-1 --------------- PRINCE MARCHE A INSERER
 */
scene_num = 54;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/54/bncorps54.png", {
    left: 435,
    top: 116,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/54/bn54_25_102_94.png", {
    left: 450,
    top: 69,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/54/chat54_12_201_140.png", {
    left: 771,
    top: 414,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/54/princeparle54_24_175_415.png", {
    left: 251,
    top: 5,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/54/pmarche54_8_171_407.png", {
    left: -150,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/54/texte54.png", {
    left: 8,
    top: 393,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.to(".pmarche54", 3, {
        scale: 1.05,
        left: 246,
        onComplete: function() {
            TweenMax.set(".pmarche54", {
                opacity: 0
            });
            TweenMax.set(".princeparle54", {
                opacity: 1
            });
            me.find(".bn54").play().repeatDelay(3);
        }
    });
    me.find(".princeparle54").delay(3).repeatDelay(3);
};

/**
 * SCENE 23-2 ------------- A TERMINER : ANIMATION FOUR et ANIMATIONS SOURIS et DIALOGUES
 */
scene_num = 55;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/55/bncorps55.png", {
    left: 378,
    top: 239,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/55/princecorps55.png", {
    left: 590,
    top: 140,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/55/bn55_25_267_212.png", {
    left: 380,
    top: 110,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/55/prince55_24_117_217.png", {
    left: 592,
    top: 35,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/55/gretel55_24_167_212.png", {
    left: 857,
    top: 112,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/55/hansel55_24_209_274.png", {
    left: 715,
    top: 113,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/55/fumee55_12_54_69.png", {
    left: 969,
    top: 98,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/55/premierplantable55.png", {
    left: 0,
    top: 388,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/55/texte55.png", {
    left: 24,
    top: 23,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/55/greteljambes55.png", {
    left: 876,
    top: 319,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/55/souris55_24_129_137.png", {
    left: 0,
    top: 438,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".prince55").repeatDelay(6);
    me.find(".hansel55").delay(3).repeatDelay(3);
    me.find(".gretel55").delay(6).repeatDelay(3);
};


/**
 * SCENE 23-3
 */
scene_num = 56;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/56/bncorps56.png", {
    left: 159,
    top: 235,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/56/bn56_25_132_107.png", {
    left: 166,
    top: 175,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/56/nain156_24_149_119.png", {
    left: 320,
    top: 211,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/56/nain256_24_133_133.png", {
    left: 460,
    top: 197,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/56/nain356_24_140_135.png", {
    left: 580,
    top: 200,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/56/nain756_24_197_252.png", {
    left: 141,
    top: 270,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/56/gretel56_24_109_142.png", {
    left: 714,
    top: 221,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/56/princecorps56.png", {
    left: 780,
    top: 233,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/56/prince56_24_148_145.png", {
    left: 796,
    top: 130,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/56/hansel56_24_192_295.png", {
    left: 834,
    top: 281,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/56/table56.png", {
    left: 184,
    top: 288,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/56/texte56.png", {
    left: 262,
    top: 13,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/56/feu56.png", {
    left: 87,
    top: 213,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.addClickOn([95, 140, 95, 100], function() {
        me.printDocument("cake")
    }, "cake");
    me.find(".prince56").repeatDelay(3);
    me.find(".bn56").delay(3).repeatDelay(3);
};


/**
 * SCENE 24-1
 */
scene_num = 57;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/57/bn57_24_259_383.png", {
    left: 370,
    top: 143,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/57/prince57a.png", {
    left: 74,
    top: 168,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/57/prince57b_24_132_150.png", {
    left: 97,
    top: 47,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/57/texte57.png", {
    left: 652,
    top: 32,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".prince57b").repeatDelay(3);
    me.find(".bn57").delay(3).repeatDelay(3);
};


/**
 * SCENE 24-2
 */
scene_num = 58;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/58/prince58_24_339_576.png", {
    left: 496,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/58/bdo58_24_351_357.png", {
    left: 1300,
    top: 221,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/58/bn58_24_331_496.png", {
    left: 357,
    top: 81,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/58/fumee58_12_54_69.png", {
    left: 955,
    top: 86,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/58/premierplantable58.png", {
    left: 0,
    top: 330,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/58/texte58.png", {
    left: 27,
    top: 30,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.to(".bdo58", 5, {
        delay: 15,
        left: 673,
        onComplete: function() {
            me.find(".bdo58").play();
        }
    });
    me.find(".prince58").play().repeatDelay(3);
    me.find(".bn58").play().delay(3).repeatDelay(3);
    me.find(".bdo58").repeatDelay(3);
};


/**
 * SCENE 24-3
 */
scene_num = 59;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/59/texte59.png", {
    left: 328,
    top: 29,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/59/feu59_6_98_74.png", {
    left: 148,
    top: 174,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/59/prince59.png", {
    left: 0,
    top: 100,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/59/bdo59.png", {
    left: 191,
    top: 248,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/59/tablenains59_24_613_352.png", {
    left: 411,
    top: 228,
    visible: true,
    autorun: true
});


scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.addClickOn([155, 140, 95, 100], function() {
        me.printDocument("crumblesale")
    }, "crumblesale");
};


/**
 * SCENE 25-1
 */
scene_num = 60;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/60/cigogne60_24_114_83.png", {
    left: 734,
    top: 35,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/60/fumee60_12_118_179.png", {
    left: 823,
    top: 0,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/60/bnprince60_24_626_576.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/60/table60.png", {
    left: 0,
    top: 330,
    visible: true,
    autorun: false
});

scenes[scene_num].asset("ecrans/60/texte60.png", {
    left: 632,
    top: 319,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.to(".fumee60", 5, {
        opacity: 1,
        delay: 25
    });
};


/**
 * SCENE 25-2
 */
scene_num = 61;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/61/cigogne61_24_114_83.png", {
    left: 733,
    top: 35,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/61/fumee61_12_118_179.png", {
    left: 823,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/61/bip61_24_771_221.png", {
    left: 250,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/61/nain261_24_182_217.png", {
    left: 596,
    top: 137,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/61/nain361_24_181_227.png", {
    left: 847,
    top: 152,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/61/nain461_24_216_248.png", {
    left: 693,
    top: 148,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/61/teteprince61_24_246_224.png", {
    left: 13,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/61/tetebn61_25_250_196.png", {
    left: 229,
    top: 60,
    visible: true,
    autorun: false
});

scenes[scene_num].asset("ecrans/61/table61.png", {
    left: 0,
    top: 330,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/61/texte61.png", {
    left: 597,
    top: 420,
    visible: true,
    autorun: false
});

scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.addClickOn([880, 100, 130, 100], function() {
        me.printDocument("cakesale")
    }, "cakesale");
    me.find(".teteprince61").delay(3).repeatDelay(3);

};


/**
 * SCENE 26-1
 */
scene_num = 62;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/62/texte62.png", {
    left: 44,
    top: 61,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/62/tetebn62_25_281_233.png", {
    left: 743,
    top: 3,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/62/teteprince62_24_288_462.png", {
    left: 329,
    top: -3,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".tetebn62").repeatDelay(3);
    me.find(".teteprince62").delay(3).repeatDelay(3);
};


/**
 * SCENE 26-2
 */
scene_num = 63;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/63/texte63.png", {
    left: 469,
    top: 265,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/63/fumee63_12_54_69.png", {
    left: 895,
    top: 95,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/63/nain363_49_134_266.png", {
    left: 1300,
    top: 92,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/63/nain263_24_185_290.png", {
    left: 1300,
    top: 237,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/63/nain163_24_183_271.png", {
    left: 1200,
    top: 305,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/63/souris63_25_82_112.png", {
    left: 421,
    top: 153,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/63/tetebn63_25_259_208.png", {
    left: 4,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/63/teteprince63_24_276_238.png", {
    left: 200,
    top: 0,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    TweenMax.to([".nain163", ".nain263"], 5, {
        delay: 25,
        left: 840
    });
    TweenMax.to([".nain363"], 5, {
        delay: 25,
        left: 892
    });
    me.enableNavigation();
    me.find(".tetebn63").repeatDelay(3);
    me.find(".teteprince63").delay(3).repeatDelay(3);
};

/**
 * SCENE 26-3
 */
scene_num = 64;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/64/texte64.png", {
    left: 270,
    top: 36,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/64/feu64_12_138_84.png", {
    left: 64,
    top: 196,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/64/bn64_25_162_301.png", {
    left: 149,
    top: 170,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/64/chat64_24_206_96.png", {
    left: 712,
    top: 289,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/64/nain164_25_145_119.png", {
    left: 318,
    top: 211,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/64/nain264_25_136_132.png", {
    left: 462,
    top: 199,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/64/nain364_25_140_140.png", {
    left: 603,
    top: 195,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/64/nain764_25_204_294.png", {
    left: 128,
    top: 262,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/64/nain464.png", {
    left: 680,
    top: 331,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/64/gateau64.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/64/prince64_24_188_317.png", {
    left: 775,
    top: 125,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/64/fesseprince64.png", {
    left: 872,
    top: 440,
    visible: true,
    autorun: false
});

scenes[scene_num].asset("ecrans/64/souris64_30_74_106.png", {
    left: 608,
    top: 469,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.addClickOn([95, 140, 95, 100], function() {
        me.printDocument("gateauchocolat")
    }, "gateauchocolat");
    me.find(".bn64").repeatDelay(3);
    me.find(".prince64").delay(3).repeatDelay(3);
};


/**
 * SCENE 27-1
 */
scene_num = 65;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/65/texte65.png", {
    left: 534,
    top: 266,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/65/bn65_25_274_488.png", {
    left: 676,
    top: 36,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/65/prince65_25_390_557.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/65/ronpich65_25_163_133.png", {
    left: 270,
    top: 156,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
};


/**
 * SCENE 27-2
 */
scene_num = 66;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/66/texte66.png", {
    left: 306,
    top: 182,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/66/bn66_25_314_254.png", {
    left: 710,
    top: 64,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/66/prince66_25_324_311.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: true
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".bn66").repeatDelay(3);
    me.find(".prince66").delay(3).repeatDelay(3);
};


/**
 * SCENE 27-3
 */
scene_num = 67;
scenes[scene_num] = new Scene(scene_num);


scenes[scene_num].asset("ecrans/67/texte67.png", {
    left: 538,
    top: 367,
    visible: true,
    autorun: false
});

scenes[scene_num].asset("ecrans/67/nain567_25_151_186.png", {
    left: 711,
    top: 137,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/67/nain367_25_137_200.png", {
    left: 444,
    top: 95,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/67/nain167_25_155_194.png", {
    left: 368,
    top: 113,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/67/nain267_25_181_206.png", {
    left: 466,
    top: 134,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/67/nain467_25_146_203.png", {
    left: 630,
    top: 136,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/67/nain667_25_171_212.png", {
    left: 776,
    top: 149,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/67/nain767_25_99_200.png", {
    left: 927,
    top: 236,
    visible: true,
    autorun: true
});

scenes[scene_num].asset("ecrans/67/prince67_26_1024_576.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/67/ver67_24_74_50.png", {
    left: 416,
    top: 526,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/67/bn67_25_250_196.png", {
    left: 173,
    top: 54,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.addClickOn([880, 100, 130, 100], function() {
        me.printDocument("clafoutis")
    }, "clafoutis");
    me.find(".bn67").repeatDelay(3);
    me.find(".prince67").delay(3).repeatDelay(3);
};


/**
 * SCENE 28-1 ------------- A TERMINER : DIALOGUE BN ET P et ANIMATION FEE
 */
scene_num = 68;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/68/texte68.png", {
    left: 32,
    top: 37,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/68/prince68_28_400_576.png", {
    left: 318,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/68/table68.png", {
    left: 0,
    top: 351,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/68/fee68_28_70_53.png", {
    left: 738,
    top: 49,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/68/bn68_24_394_576.png", {
    left: 602,
    top: 0,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    var tl = new TimelineMax();
    me.find(".prince68").repeatDelay(3);
    me.find(".bn68").delay(3).repeatDelay(3);

};

/**
 * SCENE 28-2 ------------- A TERMINER : DIALOGUES P ET BN et ANIMATIONS FUMEES CHEMINEE ET BOL DE RIZ et ANIMATION FEE ET SOURIS
 */
scene_num = 69;
scenes[scene_num] = new Scene(scene_num);

// scenes[scene_num].asset("ecrans/69/masque.jpg", {left: 0, top: 0, visible: true, autorun: false});
scenes[scene_num].asset("ecrans/69/texte69.png", {
    left: 407,
    top: 13,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/69/nain169_24_148_124.png", {
    left: 475,
    top: 234,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/69/nain269_24_145_138.png", {
    left: 615,
    top: 219,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/69/nain769_24_204_258.png", {
    left: 287,
    top: 300,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/69/bols69.png", {
    left: 400,
    top: 335,
    visible: true,
    autorun: false
});


scenes[scene_num].asset("ecrans/69/feu69_12_126_92.png", {
    left: 220,
    top: 214,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/69/bncorps69.png", {
    left: 33,
    top: 148,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/69/tetebn69_25_108_89.png", {
    left: 129,
    top: 93,
    visible: true,
    autorun: true
});


scenes[scene_num].asset("ecrans/69/fumee69_12_54_69.png", {
    left: 630,
    top: 300,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/69/fumee269_12_54_69.png", {
    left: 848,
    top: 374,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/69/fumee369_12_54_69.png", {
    left: 392,
    top: 380,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/69/fumee469_12_54_69.png", {
    left: 550,
    top: 300,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/69/fumee669_12_54_69.png", {
    left: 800,
    top: 315,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/69/fumee769_12_54_69.png", {
    left: 577,
    top: 378,
    visible: true,
    autorun: true
});

scenes[scene_num].asset("ecrans/69/nain469.png", {
    left: 850,
    top: 354,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/69/nain669.png", {
    left: 467,
    top: 361,
    visible: true,
    autorun: false
});

scenes[scene_num].asset("ecrans/69/teteprince69_24_130_145.png", {
    left: 8,
    top: 22,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/69/sourisfee69_25_110_89.png", {
    left: 885,
    top: 201,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    me.addClickOn([235, 160, 95, 100], function() {
        me.printDocument("rizaulait")
    }, "rizaulait");
    me.disableNavigation();
    TweenMax.to(".fumee369", 0, {
        scale: 0.7
    });
    TweenMax.to(".fumee669", 0, {
        scale: 0.7
    });
    TweenMax.to(".fumee769", 0, {
        scale: 0.7
    });



};


/**
 * SCENE 29-1 ------------- A TERMINER : ANIMATION P et DIALOGUE P ET BN et ANIMATION SOURIS
 */
scene_num = 70;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/70/texte70.png", {
    left: 20,
    top: 25,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/70/prince70_24_203_455.png", {
    left: 464,
    top: 15,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/70/souris70_25_54_71.png", {
    left: 650,
    top: 164,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/70/sourisgrise70_25_47_69.png", {
    left: 743,
    top: 32,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/70/tetebn70_25_275_224.png", {
    left: 738,
    top: 26,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".tetebn70").delay(3).repeatDelay(3);
};


/**
 * SCENE 29-2 ------------- A TERMINER : DIALOGUES P ET BN et ANIMATIONS SOURIS
 */
scene_num = 71;
scenes[scene_num] = new Scene(scene_num);

// scenes[scene_num].asset("ecrans/71/masque.jpg", {left: 20, top: 25, visible: true, autorun: false});

scenes[scene_num].asset("ecrans/71/texte71.png", {
    left: 63,
    top: 74,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/71/prince71_25_412_576.png", {
    left: 632,
    top: 0,
    visible: true,
    autorun: true
});

scenes[scene_num].asset("ecrans/71/bn71_24_370_576.png", {
    left: 410,
    top: 25,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    me.find(".prince71").repeatDelay(3);
    me.find(".bn71").delay(3).repeatDelay(3);
};

/**
 * SCENE 29-3 ------------- A TERMINER : DIALOGUES P ET BN et ANIMATIONS SOURIS
 */
scene_num = 72;
scenes[scene_num] = new Scene(scene_num);

// scenes[scene_num].asset("ecrans/72/masque.jpg", {left: 0, top: 0, visible: true, autorun: false});

scenes[scene_num].asset("ecrans/72/texte72.png", {
    left: 502,
    top: 361,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/72/table72.png", {
    left: 0,
    top: 342,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/72/bn72_25_154_270.png", {
    left: 549,
    top: 25,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/72/prince72_25_263_214.png", {
    left: 69,
    top: 0,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/72/br72_10_528_182.png", {
    left: 341,
    top: 5,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/72/nain2marche72_6_165_187.png", {
    left: 1250,
    top: 158,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/72/nain2stop72_24_165_187.png", {
    left: 698,
    top: 158,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/72/nain3marche72_6_138_178.png", {
    left: 1250,
    top: 162,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/72/nain3stop72_12_138_178.png", {
    left: 853,
    top: 162,
    visible: false,
    autorun: true
});
scenes[scene_num].asset("ecrans/72/nain172_9_78_217.png", {
    left: 1250,
    top: 150,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/72/nain1stop72_16_78_217.png", {
    left: 946,
    top: 150,
    visible: false,
    autorun: true
});


scenes[scene_num].asset("ecrans/72/souris72_25_59_101.png", {
    left: 446,
    top: 142,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/72/sourischapeau72_12_85_57.png", {
    left: 368,
    top: 173,
    visible: true,
    autorun: true
});



scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.addClickOn([880, 100, 130, 100], function() {
        me.printDocument("milkshake")
    }, "milkshake");
    me.find(".prince72").repeatDelay(3);
    me.find(".bn72").delay(3).repeatDelay(3);
    TweenMax.to(".nain3marche72", 3, {
        left: 853,
        delay: 10,
        onComplete: function() {
            TweenMax.set(".nain3stop72", {
                opacity: 1
            });
            TweenMax.set(".nain3marche72", {
                opacity: 0
            });
        }
    });
    TweenMax.to(".nain2marche72", 3.5, {
        left: 698,
        delay: 10,
        onComplete: function() {
            TweenMax.set(".nain2stop72", {
                opacity: 1
            });
            TweenMax.set(".nain2marche72", {
                opacity: 0
            });
        }
    });
    TweenMax.to(".nain172", 0.4, {
        left: 946,
        delay: 10,
        onComplete: function() {
            TweenMax.set(".nain1stop72", {
                opacity: 1
            });
            TweenMax.set(".nain172", {
                opacity: 0
            });
        }
    });
};

/**
 * SCENE retour BN
 */
scene_num = 95;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/95/texte95.png", {
    left: 48,
    top: 439,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/95/lapin95_26_169_208.png", {
    left: 762,
    top: 392,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/95/poisson95_24_91_77.png", {
    left: 946,
    top: 310,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/95/bn25_12_159_281.png", {
    left: 31,
    top: 141,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/95/arbre95.png", {
    left: 450,
    top: 0,
    visible: true,
    autorun: false
});
SoundPool.addDialogue("d95", 'ecrans/95/95.m4a');
scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.addClickOn([790, 146, 130, 100], function() {
        me.find(".bn25").play();
        var tl = new TimelineMax({
            onComplete: function() {
                documentlocation("?p=" + me.extractNextScene());
            }
        });
        var speed = 3;
        tl.to(".bn25", 1 * speed, { left: "+=400", top: "+=20", scale: 0.95, ease: Power0.easeNone })
            .to(".bn25", 0.8 * speed, { left: 661, top: 195, scale: 0.6, ease: Power0.easeNone })
            .to(".bn25", 0.7 * speed, { left: 740, top: 200, scale: 0.4, ease: Power0.easeNone })
            .to(".bn25", 0.6 * speed, { left: 800, top: 190, scale: 0.3, ease: Power0.easeNone })
    });
    me.find(".lapin95").duration(4).play();
    me.find(".poisson95").duration(4).play();
};

/**
 * SCENE retour prince
 */

scene_num = 96;
scenes[scene_num] = new Scene(scene_num);
scenes[scene_num].asset("ecrans/96/texte96.png", {
    left: 48,
    top: 447,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/96/lapin96_26_169_208.png", {
    left: 794,
    top: 392,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/96/poisson96_24_91_77.png", {
    left: 946,
    top: 310,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/96/pretour_8_138_310.png", {
    left: 31 + 50,
    top: 141 - 29,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/96/arbre96.png", {
    left: 483,
    top: 0,
    visible: true,
    autorun: false
});
SoundPool.addDialogue("d96", 'ecrans/96/96.m4a');
scenes[scene_num].run = function() {
    var me = this;
    me.disableNavigation();
    me.addClickOn([790, 146, 130, 100], function() {
        me.find(".pretour").play();
        var tl = new TimelineMax({
            onComplete: function() {
                documentlocation("?p=" + me.extractNextScene());
            }
        });
        var speed = 3;
        tl.to(".pretour", 1 * speed, { left: "+=400", top: "+=20", scale: 0.95, ease: Power0.easeNone })
            .to(".pretour", 0.8 * speed, { left: 661 + 50, top: 195 - 29, scale: 0.6, ease: Power0.easeNone })
            .to(".pretour", 0.7 * speed, { left: 740 + 50, top: 200 - 29, scale: 0.4, ease: Power0.easeNone })
            .to(".pretour", 0.6 * speed, { left: 800 + 50, top: 190 - 29, scale: 0.3, ease: Power0.easeNone })
    });
    me.find(".lapin96").duration(4).play();
    me.find(".poisson96").duration(4).play();
};

/**
 * SCENE progression prince
 */

scene_num = 97;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/97/prince97_08_135_299.png", {
    left: -200,
    top: 180,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/97/arbre97.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/97/ecureuil97_24_94_143.png", {
    left: 22,
    top: 55,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/97/oiseau97_24_59_88.png", {
    left: 878,
    top: 65,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/97/fleurs97.png", {
    left: 624,
    top: 430,
    visible: true,
    autorun: false
});


scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.fromTo(".prince97", 10, {
        left: -200
    }, {
        left: 1300
    });
    me.jumpToScene(me.extractNextScene());

};

/**
 * SCENE écran progression blanche neige
 */
scene_num = 98;
scenes[scene_num] = new Scene(scene_num);

scenes[scene_num].asset("ecrans/98/bnmarche98_12_208_374.png", {
    left: -250,
    top: 150,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/98/troncnoir98.png", {
    left: 0,
    top: 0,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/98/ecureuil98.png", {
    left: 28,
    top: 62,
    visible: true,
    autorun: false
});
scenes[scene_num].yeuxclos("ecrans/98/test98", {
    left: 75,
    top: 71,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/98/oiseau98.png", {
    left: 878,
    top: 67,
    visible: true,
    autorun: false
});
scenes[scene_num].yeuxclos("ecrans/98/oiseau98", {
    left: 892,
    top: 92,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/98/fleurs98.png", {
    left: 624,
    top: 430,
    visible: true,
    autorun: false
});
scenes[scene_num].run = function() {
    var me = this;
    me.enableNavigation();
    TweenMax.to(".bnmarche98", 15, {
        left: 1300
    });
    me.jumpToScene(me.extractNextScene());
};


/**
 * Ecran "à suivre"
 */
scene_num = 99;
scenes[scene_num] = new Scene(scene_num);
SoundPool.addDialogue("d99", 'ecrans/99/99.m4a');
scenes[scene_num].asset("ecrans/99/texte99.png", {
    left: 797,
    top: 453,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/99/nuage199.png", {
    left: 825,
    top: 313,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/99/nuage299.png", {
    left: 73,
    top: 22,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/99/nuage399.png", {
    left: 153,
    top: 188,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/99/nuage499.png", {
    left: 548,
    top: 63,
    visible: true,
    autorun: false
});
scenes[scene_num].asset("ecrans/99/nuage599.png", {
    left: 848,
    top: 185,
    visible: true,
    autorun: false
});

scenes[scene_num].asset("ecrans/99/lapin99_12_65_88.png", {
    left: 120,
    top: 511,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/99/oiseau99_48_150_120.png", {
    left: 383,
    top: 98,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/99/poisson99_12_36_33.png", {
    left: 267,
    top: 527,
    visible: true,
    autorun: true
});
scenes[scene_num].asset("ecrans/99/souris99_40_500_395.png", {
    left: 372,
    top: 105,
    visible: true,
    autorun: true
});


scenes[scene_num].run = function() {
    var me = this;
    TweenMax.to(".nuage199", 25, {
        left: 600
    });
    TweenMax.to(".nuage299", 25, {
        left: 10
    });
    TweenMax.to(".nuage399", 25, {
        left: 100
    });
    TweenMax.to(".nuage499", 25, {
        left: 300
    });
    TweenMax.to(".nuage599", 25, {
        left: 600
    });
    TweenMax.fromTo(".lapin99", 1, {
        top: 550
    }, {
        top: 511,
        repeat: 2,
        repeatDelay: 2,
        yoyo: true
    });

};