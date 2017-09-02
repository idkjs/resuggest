// Generated by BUCKLESCRIPT VERSION 1.8.2, PLEASE EDIT WITH CARE
'use strict';

var List        = require("bs-platform/lib/js/list.js");
var $$Array     = require("bs-platform/lib/js/array.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var $$String    = require("bs-platform/lib/js/string.js");
var Caml_obj    = require("bs-platform/lib/js/caml_obj.js");
var Caml_float  = require("bs-platform/lib/js/caml_float.js");
var Caml_int32  = require("bs-platform/lib/js/caml_int32.js");
var Pervasives  = require("bs-platform/lib/js/pervasives.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");

function suggest_1(funcs, input, output) {
  return $$Array.of_list(List.map((function (prim) {
                    return prim[1];
                  }), List.filter((function (param) {
                          return +(Curry._1(param[0], input) === output);
                        }))(funcs)));
}

function suggest_2(funcs, input1, input2, output) {
  return $$Array.of_list(List.map((function (prim) {
                    return prim[1];
                  }), List.filter((function (param) {
                          return +(Curry._2(param[0], input1, input2) === output);
                        }))(funcs)));
}

function suggest_3(funcs, input1, input2, input3, output) {
  return $$Array.of_list(List.map((function (prim) {
                    return prim[1];
                  }), List.filter((function (param) {
                          return +(Curry._3(param[0], input1, input2, input3) === output);
                        }))(funcs)));
}

var partial_arg_000 = /* tuple */[
  (function (prim) {
      return -prim | 0;
    }),
  "(~-)"
];

var partial_arg_001 = /* :: */[
  /* tuple */[
    (function (prim) {
        return prim;
      }),
    "(~+)"
  ],
  /* :: */[
    /* tuple */[
      (function (prim) {
          return prim + 1 | 0;
        }),
      "succ"
    ],
    /* :: */[
      /* tuple */[
        (function (prim) {
            return prim - 1 | 0;
          }),
        "pred"
      ],
      /* :: */[
        /* tuple */[
          Pervasives.abs,
          "abs"
        ],
        /* :: */[
          /* tuple */[
            Pervasives.lnot,
            "lnot"
          ],
          /* [] */0
        ]
      ]
    ]
  ]
];

var partial_arg = /* :: */[
  partial_arg_000,
  partial_arg_001
];

function int_int(param, param$1) {
  return suggest_1(partial_arg, param, param$1);
}

var partial_arg_000$1 = /* tuple */[
  (function (prim) {
      return -prim;
    }),
  "(~-.)"
];

var partial_arg_001$1 = /* :: */[
  /* tuple */[
    (function (prim) {
        return prim;
      }),
    "(~+.)"
  ],
  /* :: */[
    /* tuple */[
      (function (prim) {
          return Math.sqrt(prim);
        }),
      "sqrt"
    ],
    /* :: */[
      /* tuple */[
        (function (prim) {
            return Math.exp(prim);
          }),
        "exp"
      ],
      /* :: */[
        /* tuple */[
          (function (prim) {
              return Math.log(prim);
            }),
          "log"
        ],
        /* :: */[
          /* tuple */[
            (function (prim) {
                return Math.log10(prim);
              }),
            "log10"
          ],
          /* :: */[
            /* tuple */[
              Caml_float.caml_expm1_float,
              "expm1"
            ],
            /* :: */[
              /* tuple */[
                (function (prim) {
                    return Math.cos(prim);
                  }),
                "cos"
              ],
              /* :: */[
                /* tuple */[
                  (function (prim) {
                      return Math.sin(prim);
                    }),
                  "sin"
                ],
                /* :: */[
                  /* tuple */[
                    (function (prim) {
                        return Math.tan(prim);
                      }),
                    "tan"
                  ],
                  /* :: */[
                    /* tuple */[
                      (function (prim) {
                          return Math.acos(prim);
                        }),
                      "acos"
                    ],
                    /* :: */[
                      /* tuple */[
                        (function (prim) {
                            return Math.asin(prim);
                          }),
                        "asin"
                      ],
                      /* :: */[
                        /* tuple */[
                          (function (prim) {
                              return Math.atan(prim);
                            }),
                          "atan"
                        ],
                        /* :: */[
                          /* tuple */[
                            (function (prim) {
                                return Math.cosh(prim);
                              }),
                            "cosh"
                          ],
                          /* :: */[
                            /* tuple */[
                              (function (prim) {
                                  return Math.sinh(prim);
                                }),
                              "sinh"
                            ],
                            /* :: */[
                              /* tuple */[
                                (function (prim) {
                                    return Math.tanh(prim);
                                  }),
                                "tanh"
                              ],
                              /* :: */[
                                /* tuple */[
                                  (function (prim) {
                                      return Math.ceil(prim);
                                    }),
                                  "ceil"
                                ],
                                /* :: */[
                                  /* tuple */[
                                    (function (prim) {
                                        return Math.floor(prim);
                                      }),
                                    "floor"
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      (function (prim) {
                                          return Math.abs(prim);
                                        }),
                                      "abs_float"
                                    ],
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var partial_arg$1 = /* :: */[
  partial_arg_000$1,
  partial_arg_001$1
];

function float_float(param, param$1) {
  return suggest_1(partial_arg$1, param, param$1);
}

var partial_arg_000$2 = /* tuple */[
  (function (prim, prim$1) {
      return prim + prim$1 | 0;
    }),
  "(+)"
];

var partial_arg_001$2 = /* :: */[
  /* tuple */[
    (function (prim, prim$1) {
        return prim - prim$1 | 0;
      }),
    "(-)"
  ],
  /* :: */[
    /* tuple */[
      Caml_int32.imul,
      "(*)"
    ],
    /* :: */[
      /* tuple */[
        Caml_int32.div,
        "(/)"
      ],
      /* :: */[
        /* tuple */[
          Caml_int32.mod_,
          "(mod)"
        ],
        /* :: */[
          /* tuple */[
            (function (prim, prim$1) {
                return prim & prim$1;
              }),
            "(land)"
          ],
          /* :: */[
            /* tuple */[
              (function (prim, prim$1) {
                  return prim | prim$1;
                }),
              "(lor)"
            ],
            /* :: */[
              /* tuple */[
                (function (prim, prim$1) {
                    return prim ^ prim$1;
                  }),
                "(lxor)"
              ],
              /* :: */[
                /* tuple */[
                  (function (prim, prim$1) {
                      return (prim << prim$1);
                    }),
                  "lsl"
                ],
                /* :: */[
                  /* tuple */[
                    (function (prim, prim$1) {
                        return (prim >>> prim$1) | 0;
                      }),
                    "lsr"
                  ],
                  /* :: */[
                    /* tuple */[
                      (function (prim, prim$1) {
                          return (prim >> prim$1);
                        }),
                      "ars"
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var partial_arg$2 = /* :: */[
  partial_arg_000$2,
  partial_arg_001$2
];

function int_int_int(param, param$1, param$2) {
  return suggest_2(partial_arg$2, param, param$1, param$2);
}

var partial_arg_000$3 = /* tuple */[
  (function (prim, prim$1) {
      return prim + prim$1;
    }),
  "(+.)"
];

var partial_arg_001$3 = /* :: */[
  /* tuple */[
    (function (prim, prim$1) {
        return prim - prim$1;
      }),
    "(-.)"
  ],
  /* :: */[
    /* tuple */[
      (function (prim, prim$1) {
          return prim * prim$1;
        }),
      "(*.)"
    ],
    /* :: */[
      /* tuple */[
        (function (prim, prim$1) {
            return prim / prim$1;
          }),
        "(/.)"
      ],
      /* :: */[
        /* tuple */[
          (function (prim, prim$1) {
              return Math.pow(prim, prim$1);
            }),
          "(**)"
        ],
        /* :: */[
          /* tuple */[
            (function (prim, prim$1) {
                return Math.atan2(prim, prim$1);
              }),
            "atan2"
          ],
          /* :: */[
            /* tuple */[
              Caml_float.caml_hypot_float,
              "hypot"
            ],
            /* :: */[
              /* tuple */[
                Caml_float.caml_copysign_float,
                "copysign"
              ],
              /* :: */[
                /* tuple */[
                  (function (prim, prim$1) {
                      return prim % prim$1;
                    }),
                  "mod_float"
                ],
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var partial_arg$3 = /* :: */[
  partial_arg_000$3,
  partial_arg_001$3
];

function float_float_float(param, param$1, param$2) {
  return suggest_2(partial_arg$3, param, param$1, param$2);
}

var partial_arg_000$4 = /* tuple */[
  Caml_string.get,
  "String.get"
];

var partial_arg$4 = /* :: */[
  partial_arg_000$4,
  /* [] */0
];

function string_int_char(param, param$1, param$2) {
  return suggest_2(partial_arg$4, param, param$1, param$2);
}

var partial_arg_000$5 = /* tuple */[
  $$String.make,
  "String.make"
];

var partial_arg$5 = /* :: */[
  partial_arg_000$5,
  /* [] */0
];

function int_char_string(param, param$1, param$2) {
  return suggest_2(partial_arg$5, param, param$1, param$2);
}

var partial_arg_000$6 = /* tuple */[
  $$String.init,
  "String.init"
];

var partial_arg$6 = /* :: */[
  partial_arg_000$6,
  /* [] */0
];

function int_intToChar_string(param, param$1, param$2) {
  return suggest_2(partial_arg$6, param, param$1, param$2);
}

var partial_arg_000$7 = /* tuple */[
  $$String.sub,
  "String.sub"
];

var partial_arg$7 = /* :: */[
  partial_arg_000$7,
  /* [] */0
];

function string_int_int_string(param, param$1, param$2) {
  return suggest_2(partial_arg$7, param, param$1, param$2);
}

var partial_arg_000$8 = /* tuple */[
  $$String.mapi,
  "String.mapi"
];

var partial_arg$8 = /* :: */[
  partial_arg_000$8,
  /* [] */0
];

function intToCharToChar_string_string(param, param$1, param$2) {
  return suggest_2(partial_arg$8, param, param$1, param$2);
}

var partial_arg_000$9 = /* tuple */[
  $$String.map,
  "String.map"
];

var partial_arg$9 = /* :: */[
  partial_arg_000$9,
  /* [] */0
];

function charToChar_string_string(param, param$1, param$2) {
  return suggest_2(partial_arg$9, param, param$1, param$2);
}

var partial_arg_000$10 = /* tuple */[
  $$String.trim,
  "String.trim"
];

var partial_arg_001$4 = /* :: */[
  /* tuple */[
    $$String.escaped,
    "String.escaped"
  ],
  /* :: */[
    /* tuple */[
      $$String.uppercase,
      "String.uppercase"
    ],
    /* :: */[
      /* tuple */[
        $$String.lowercase,
        "String.lowercase"
      ],
      /* :: */[
        /* tuple */[
          $$String.capitalize,
          "String.capitalize"
        ],
        /* :: */[
          /* tuple */[
            $$String.uncapitalize,
            "String.uncapitalize"
          ],
          /* [] */0
        ]
      ]
    ]
  ]
];

var partial_arg$10 = /* :: */[
  partial_arg_000$10,
  partial_arg_001$4
];

function string_string(param, param$1) {
  return suggest_1(partial_arg$10, param, param$1);
}

var partial_arg_000$11 = /* tuple */[
  $$String.index,
  "String.index"
];

var partial_arg_001$5 = /* :: */[
  /* tuple */[
    $$String.rindex,
    "String.rindex"
  ],
  /* [] */0
];

var partial_arg$11 = /* :: */[
  partial_arg_000$11,
  partial_arg_001$5
];

function suggest_string_char_int(param, param$1, param$2) {
  return suggest_2(partial_arg$11, param, param$1, param$2);
}

var partial_arg_000$12 = /* tuple */[
  $$String.index_from,
  "String.index_from"
];

var partial_arg_001$6 = /* :: */[
  /* tuple */[
    $$String.rindex_from,
    "String.rindex_from"
  ],
  /* [] */0
];

var partial_arg$12 = /* :: */[
  partial_arg_000$12,
  partial_arg_001$6
];

function string_int_char_int(param, param$1, param$2) {
  return suggest_2(partial_arg$12, param, param$1, param$2);
}

var partial_arg_000$13 = /* tuple */[
  $$String.contains,
  "String.contains"
];

var partial_arg$13 = /* :: */[
  partial_arg_000$13,
  /* [] */0
];

function string_char_bool(param, param$1) {
  return suggest_1(partial_arg$13, param, param$1);
}

var partial_arg_000$14 = /* tuple */[
  $$String.contains_from,
  "String.contains_from"
];

var partial_arg_001$7 = /* :: */[
  /* tuple */[
    $$String.rcontains_from,
    "String.rcontains_from"
  ],
  /* [] */0
];

var partial_arg$14 = /* :: */[
  partial_arg_000$14,
  partial_arg_001$7
];

function string_int_char_bool(param, param$1, param$2, param$3) {
  return suggest_3(partial_arg$14, param, param$1, param$2, param$3);
}

var partial_arg_000$15 = /* tuple */[
  Pervasives.$caret,
  "(^)"
];

var partial_arg$15 = /* :: */[
  partial_arg_000$15,
  /* [] */0
];

function string_string_string(param, param$1, param$2) {
  return suggest_2(partial_arg$15, param, param$1, param$2);
}

var partial_arg_000$16 = /* tuple */[
  Pervasives.string_of_bool,
  "string_of_bool"
];

var partial_arg$16 = /* :: */[
  partial_arg_000$16,
  /* [] */0
];

function bool_string(param, param$1) {
  return suggest_1(partial_arg$16, param, param$1);
}

var partial_arg_000$17 = /* tuple */[
  Pervasives.bool_of_string,
  "bool_of_string"
];

var partial_arg$17 = /* :: */[
  partial_arg_000$17,
  /* [] */0
];

function string_bool(param, param$1) {
  return suggest_1(partial_arg$17, param, param$1);
}

var partial_arg_000$18 = /* tuple */[
  Pervasives.string_of_int,
  "string_of_int"
];

var partial_arg$18 = /* :: */[
  partial_arg_000$18,
  /* [] */0
];

function int_string(param, param$1) {
  return suggest_1(partial_arg$18, param, param$1);
}

var partial_arg_000$19 = /* tuple */[
  Caml_format.caml_int_of_string,
  "int_of_string"
];

var partial_arg_001$8 = /* :: */[
  /* tuple */[
    (function (prim) {
        return prim.length;
      }),
    "String.length"
  ],
  /* [] */0
];

var partial_arg$19 = /* :: */[
  partial_arg_000$19,
  partial_arg_001$8
];

function string_int(param, param$1) {
  return suggest_1(partial_arg$19, param, param$1);
}

var partial_arg_000$20 = /* tuple */[
  Pervasives.string_of_float,
  "string_of_float"
];

var partial_arg$20 = /* :: */[
  partial_arg_000$20,
  /* [] */0
];

function float_string(param, param$1) {
  return suggest_1(partial_arg$20, param, param$1);
}

var partial_arg_000$21 = /* tuple */[
  Caml_format.caml_float_of_string,
  "float_of_string"
];

var partial_arg$21 = /* :: */[
  partial_arg_000$21,
  /* [] */0
];

function string_float(param, param$1) {
  return suggest_1(partial_arg$21, param, param$1);
}

function a_a_bool(i1, i2, o) {
  return suggest_2(/* :: */[
              /* tuple */[
                Caml_obj.caml_equal,
                "="
              ],
              /* [] */0
            ], i1, i2, o);
}

function lista_lista_lista(i1, i2, o) {
  return suggest_2(/* :: */[
              /* tuple */[
                Pervasives.$at,
                "(@)"
              ],
              /* :: */[
                /* tuple */[
                  List.append,
                  "List.append"
                ],
                /* :: */[
                  /* tuple */[
                    List.rev_append,
                    "List.rev_append"
                  ],
                  /* [] */0
                ]
              ]
            ], i1, i2, o);
}

function lista_int(i1, o) {
  return suggest_1(/* :: */[
              /* tuple */[
                List.length,
                "List.length"
              ],
              /* [] */0
            ], i1, o);
}

function lista_a(i1, o) {
  return suggest_1(/* :: */[
              /* tuple */[
                List.hd,
                "List.hd"
              ],
              /* [] */0
            ], i1, o);
}

function lista_lista(i1, o) {
  return suggest_1(/* :: */[
              /* tuple */[
                List.tl,
                "List.tl"
              ],
              /* :: */[
                /* tuple */[
                  List.rev,
                  "List.rev"
                ],
                /* [] */0
              ]
            ], i1, o);
}

function lista_int_a(i1, i2, o) {
  return suggest_2(/* :: */[
              /* tuple */[
                List.nth,
                "List.nth"
              ],
              /* [] */0
            ], i1, i2, o);
}

function listOflista_lista(i1, o) {
  return suggest_1(/* :: */[
              /* tuple */[
                List.concat,
                "List.concat"
              ],
              /* :: */[
                /* tuple */[
                  List.flatten,
                  "List.flatten"
                ],
                /* [] */0
              ]
            ], i1, o);
}

function aToB_lista_listb(i1, i2, o) {
  return suggest_2(/* :: */[
              /* tuple */[
                List.map,
                "List.map"
              ],
              /* :: */[
                /* tuple */[
                  List.rev_map,
                  "List.rev_map"
                ],
                /* [] */0
              ]
            ], i1, i2, o);
}

function intToAToB_lista_listb(i1, i2, o) {
  return suggest_2(/* :: */[
              /* tuple */[
                List.mapi,
                "List.mapi"
              ],
              /* [] */0
            ], i1, i2, o);
}

function aToBToA_a_listb_a(i1, i2, i3, o) {
  return suggest_3(/* :: */[
              /* tuple */[
                List.fold_left,
                "List.fold_left"
              ],
              /* [] */0
            ], i1, i2, i3, o);
}

function aToBToB_lista_b_b(i1, i2, i3, o) {
  return suggest_3(/* :: */[
              /* tuple */[
                List.fold_right,
                "List.fold_right"
              ],
              /* [] */0
            ], i1, i2, i3, o);
}

var list_map2 = /* tuple */[
  List.map2,
  "List.map2"
];

var list_rev_map2 = /* tuple */[
  List.rev_map2,
  "List.rev_map2"
];

var list_fold_left2 = /* tuple */[
  List.fold_left2,
  "List.fold_left2"
];

var list_fold_right2 = /* tuple */[
  List.fold_right2,
  "List.fold_right2"
];

var list_exists = /* tuple */[
  List.exists,
  "List.exists"
];

var list_exists2 = /* tuple */[
  List.exists2,
  "List.exists2"
];

var list_mem = /* tuple */[
  List.mem,
  "List.mem"
];

var list_memq = /* tuple */[
  List.memq,
  "List.memq"
];

var list_find = /* tuple */[
  List.find,
  "List.find"
];

var list_filter = /* tuple */[
  List.filter,
  "List.filter"
];

var list_find_all = /* tuple */[
  List.find_all,
  "List.find_all"
];

var list_partition = /* tuple */[
  List.partition,
  "List.partition"
];

var list_sort = /* tuple */[
  List.sort,
  "List.sort"
];

var list_stable_sort = /* tuple */[
  List.stable_sort,
  "List.stable_sort"
];

var list_fast_sort = /* tuple */[
  List.fast_sort,
  "List.fast_sort"
];

var list_sort_uniq = /* tuple */[
  List.sort_uniq,
  "List.sort_uniq"
];

var list_merge = /* tuple */[
  List.merge,
  "List.merge"
];

exports.suggest_1                     = suggest_1;
exports.suggest_2                     = suggest_2;
exports.suggest_3                     = suggest_3;
exports.int_int                       = int_int;
exports.float_float                   = float_float;
exports.int_int_int                   = int_int_int;
exports.float_float_float             = float_float_float;
exports.string_int_char               = string_int_char;
exports.int_char_string               = int_char_string;
exports.int_intToChar_string          = int_intToChar_string;
exports.string_int_int_string         = string_int_int_string;
exports.intToCharToChar_string_string = intToCharToChar_string_string;
exports.charToChar_string_string      = charToChar_string_string;
exports.string_string                 = string_string;
exports.suggest_string_char_int       = suggest_string_char_int;
exports.string_int_char_int           = string_int_char_int;
exports.string_char_bool              = string_char_bool;
exports.string_int_char_bool          = string_int_char_bool;
exports.string_string_string          = string_string_string;
exports.bool_string                   = bool_string;
exports.string_bool                   = string_bool;
exports.int_string                    = int_string;
exports.string_int                    = string_int;
exports.float_string                  = float_string;
exports.string_float                  = string_float;
exports.a_a_bool                      = a_a_bool;
exports.lista_lista_lista             = lista_lista_lista;
exports.lista_int                     = lista_int;
exports.lista_a                       = lista_a;
exports.lista_lista                   = lista_lista;
exports.lista_int_a                   = lista_int_a;
exports.listOflista_lista             = listOflista_lista;
exports.aToB_lista_listb              = aToB_lista_listb;
exports.intToAToB_lista_listb         = intToAToB_lista_listb;
exports.aToBToA_a_listb_a             = aToBToA_a_listb_a;
exports.aToBToB_lista_b_b             = aToBToB_lista_b_b;
exports.list_map2                     = list_map2;
exports.list_rev_map2                 = list_rev_map2;
exports.list_fold_left2               = list_fold_left2;
exports.list_fold_right2              = list_fold_right2;
exports.list_exists                   = list_exists;
exports.list_exists2                  = list_exists2;
exports.list_mem                      = list_mem;
exports.list_memq                     = list_memq;
exports.list_find                     = list_find;
exports.list_filter                   = list_filter;
exports.list_find_all                 = list_find_all;
exports.list_partition                = list_partition;
exports.list_sort                     = list_sort;
exports.list_stable_sort              = list_stable_sort;
exports.list_fast_sort                = list_fast_sort;
exports.list_sort_uniq                = list_sort_uniq;
exports.list_merge                    = list_merge;
/* No side effect */
