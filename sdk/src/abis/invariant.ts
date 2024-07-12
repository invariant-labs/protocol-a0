export const abi = `
{
  "source": {
    "hash": "0x24ae0239ce4ae019c50e5f1e3655a13ab4b6501afbfafc3144b8b5c1f9f7e391",
    "language": "ink! 5.0.0",
    "compiler": "rustc 1.77.0",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "4.1.1",
      "rust_toolchain": "stable-x86_64-unknown-linux-gnu",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "invariant",
    "version": "0.1.0",
    "authors": [
      "Invariant Labs"
    ]
  },
  "image": null,
  "spec": {
    "constructors": [
      {
        "args": [
          {
            "label": "protocol_fee",
            "type": {
              "displayName": [
                "Percentage"
              ],
              "type": 18
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 54
        },
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
    "environment": {
      "accountId": {
        "displayName": [
          "AccountId"
        ],
        "type": 2
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 11
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 0
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 113
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 111
      },
      "maxEventTopics": 4,
      "staticBufferSize": 16384,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 9
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "timestamp",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 9
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "pool",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "liquidity",
            "type": {
              "displayName": [
                "Liquidity"
              ],
              "type": 19
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "lower_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "upper_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "current_sqrt_price",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 26
            }
          }
        ],
        "docs": [],
        "label": "CreatePositionEvent",
        "module_path": "invariant::contracts::events",
        "signature_topic": "0x50a25822f8984babdbc09246e1d170630167a27235d98a5ff8ac7516a5cdab15"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "timestamp",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 9
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "pool",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "indexes",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 103
            }
          }
        ],
        "docs": [],
        "label": "CrossTickEvent",
        "module_path": "invariant::contracts::events",
        "signature_topic": "0xcccff012aed0ec795ebacacf32bce7106d512938af21db8ed9c2db1d2673378d"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "timestamp",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 9
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "pool",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "liquidity",
            "type": {
              "displayName": [
                "Liquidity"
              ],
              "type": 19
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "lower_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "upper_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "current_sqrt_price",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 26
            }
          }
        ],
        "docs": [],
        "label": "RemovePositionEvent",
        "module_path": "invariant::contracts::events",
        "signature_topic": "0x9f0ecfca7dad4ac575484802040e0a5b1ce0a4c53a3e2cc6bb41ccb6e9a5db12"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "timestamp",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 9
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "pool",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "amount_in",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 21
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "amount_out",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 21
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "fee",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 21
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "start_sqrt_price",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 26
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "target_sqrt_price",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 26
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "x_to_y",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 33
            }
          }
        ],
        "docs": [],
        "label": "SwapEvent",
        "module_path": "invariant::contracts::events",
        "signature_topic": "0xa2fa68a09109e5201d1e015005173040754b008fc2dc7203c0da57236f0ba81e"
      },
      {
        "args": [
          {
            "docs": [
              "Account providing allowance."
            ],
            "indexed": true,
            "label": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [
              "Allowance beneficiary."
            ],
            "indexed": true,
            "label": "spender",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [
              "New allowance amount."
            ],
            "indexed": false,
            "label": "amount",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 11
            }
          }
        ],
        "docs": [
          "Event emitted when allowance by 'owner' to 'spender' changes."
        ],
        "label": "Approval",
        "module_path": "token::events",
        "signature_topic": "0x25cdb6c93882e925abbfc9a8b7c85884b73c038c03a2492f238a5e5ba3fbff8c"
      },
      {
        "args": [
          {
            "docs": [
              "Transfer sender. 'None' in case of minting new tokens."
            ],
            "indexed": true,
            "label": "from",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 112
            }
          },
          {
            "docs": [
              "Transfer recipient. 'None' in case of burning tokens."
            ],
            "indexed": true,
            "label": "to",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 112
            }
          },
          {
            "docs": [
              "Amount of tokens transferred (or minted/burned)."
            ],
            "indexed": false,
            "label": "value",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 11
            }
          }
        ],
        "docs": [
          "Event emitted when transfer of tokens occurs."
        ],
        "label": "Transfer",
        "module_path": "token::events",
        "signature_topic": "0x990df076cb1e9527aa102cd100c1481efe393eeabb5825f9af1f5e58221864de"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 55
    },
    "messages": [
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_protocol_fee",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 56
        },
        "selector": "0xe285b69a"
      },
      {
        "args": [
          {
            "label": "pool_key",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::withdraw_protocol_fee",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 57
        },
        "selector": "0x5a059796"
      },
      {
        "args": [
          {
            "label": "protocol_fee",
            "type": {
              "displayName": [
                "Percentage"
              ],
              "type": 18
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::change_protocol_fee",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 57
        },
        "selector": "0xc8bd0f58"
      },
      {
        "args": [
          {
            "label": "pool_key",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "label": "fee_receiver",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::change_fee_receiver",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 57
        },
        "selector": "0x0ebd3ec6"
      },
      {
        "args": [
          {
            "label": "pool_key",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "label": "lower_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          },
          {
            "label": "upper_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          },
          {
            "label": "liquidity_delta",
            "type": {
              "displayName": [
                "Liquidity"
              ],
              "type": 19
            }
          },
          {
            "label": "slippage_limit_lower",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 26
            }
          },
          {
            "label": "slippage_limit_upper",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 26
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::create_position",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 60
        },
        "selector": "0x0a1ca76b"
      },
      {
        "args": [
          {
            "label": "pool_key",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "label": "x_to_y",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 33
            }
          },
          {
            "label": "amount",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 21
            }
          },
          {
            "label": "by_amount_in",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 33
            }
          },
          {
            "label": "sqrt_price_limit",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 26
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::swap",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 62
        },
        "selector": "0x1c590004"
      },
      {
        "args": [
          {
            "label": "amount_in",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 21
            }
          },
          {
            "label": "expected_amount_out",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 21
            }
          },
          {
            "label": "slippage",
            "type": {
              "displayName": [
                "Percentage"
              ],
              "type": 18
            }
          },
          {
            "label": "swaps",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 66
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::swap_route",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 57
        },
        "selector": "0x5ff8d655"
      },
      {
        "args": [
          {
            "label": "pool_key",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "label": "x_to_y",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 33
            }
          },
          {
            "label": "amount",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 21
            }
          },
          {
            "label": "by_amount_in",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 33
            }
          },
          {
            "label": "sqrt_price_limit",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 26
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::quote",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 68
        },
        "selector": "0xa2bd3fc7"
      },
      {
        "args": [
          {
            "label": "amount_in",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 21
            }
          },
          {
            "label": "swaps",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 66
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::quote_route",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 71
        },
        "selector": "0x879b5256"
      },
      {
        "args": [
          {
            "label": "index",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "label": "receiver",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::transfer_position",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 57
        },
        "selector": "0xe5af145a"
      },
      {
        "args": [
          {
            "label": "owner_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "index",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_position",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 60
        },
        "selector": "0xccb84930"
      },
      {
        "args": [
          {
            "label": "owner_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_all_positions",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 73
        },
        "selector": "0xa509d69f"
      },
      {
        "args": [
          {
            "label": "owner_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "size",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "label": "offset",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_positions",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 75
        },
        "selector": "0xb2155f6b"
      },
      {
        "args": [
          {
            "label": "index",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::claim_fee",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 80
        },
        "selector": "0x4eb580e1"
      },
      {
        "args": [
          {
            "label": "index",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::remove_position",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 80
        },
        "selector": "0xfe63d239"
      },
      {
        "args": [
          {
            "label": "fee_tier",
            "type": {
              "displayName": [
                "FeeTier"
              ],
              "type": 17
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::add_fee_tier",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 57
        },
        "selector": "0x009b6a3d"
      },
      {
        "args": [
          {
            "label": "fee_tier",
            "type": {
              "displayName": [
                "FeeTier"
              ],
              "type": 17
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::remove_fee_tier",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 57
        },
        "selector": "0x3b497d6e"
      },
      {
        "args": [
          {
            "label": "fee_tier",
            "type": {
              "displayName": [
                "FeeTier"
              ],
              "type": 17
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::fee_tier_exist",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 83
        },
        "selector": "0x4e9e07ce"
      },
      {
        "args": [
          {
            "label": "token_0",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "token_1",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "fee_tier",
            "type": {
              "displayName": [
                "FeeTier"
              ],
              "type": 17
            }
          },
          {
            "label": "init_sqrt_price",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 26
            }
          },
          {
            "label": "init_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::create_pool",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 57
        },
        "selector": "0x98b595e9"
      },
      {
        "args": [
          {
            "label": "token_0",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "token_1",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "fee_tier",
            "type": {
              "displayName": [
                "FeeTier"
              ],
              "type": 17
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_pool",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 84
        },
        "selector": "0xf91e4a49"
      },
      {
        "args": [
          {
            "label": "token0",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "token1",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_all_pools_for_pair",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 86
        },
        "selector": "0xb62aa10d"
      },
      {
        "args": [
          {
            "label": "key",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "label": "index",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_tick",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 90
        },
        "selector": "0xeebd620b"
      },
      {
        "args": [
          {
            "label": "key",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "label": "index",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::is_tick_initialized",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 83
        },
        "selector": "0xdbae15e5"
      },
      {
        "args": [
          {
            "label": "size",
            "type": {
              "displayName": [
                "u16"
              ],
              "type": 10
            }
          },
          {
            "label": "offset",
            "type": {
              "displayName": [
                "u16"
              ],
              "type": 10
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_pool_keys",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 92
        },
        "selector": "0x57d47dcb"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_fee_tiers",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 96
        },
        "selector": "0xd05b6003"
      },
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "offset",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_position_ticks",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 97
        },
        "selector": "0xcc9476e7"
      },
      {
        "args": [
          {
            "label": "pool_key",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "label": "lower_tick_index",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          },
          {
            "label": "upper_tick_index",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          },
          {
            "label": "x_to_y",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 33
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_tickmap",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 100
        },
        "selector": "0x3b83b256"
      },
      {
        "args": [
          {
            "label": "pool_key",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "label": "tickmap",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 103
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_liquidity_ticks",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 104
        },
        "selector": "0x8ef8d345"
      },
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_user_position_amount",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 108
        },
        "selector": "0xd842f034"
      },
      {
        "args": [
          {
            "label": "pool_key",
            "type": {
              "displayName": [
                "PoolKey"
              ],
              "type": 16
            }
          },
          {
            "label": "lower_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          },
          {
            "label": "upper_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 12
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_liquidity_ticks_amount",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 109
        },
        "selector": "0xf360dea7"
      },
      {
        "args": [
          {
            "label": "address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::withdraw_all_wazero",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 57
        },
        "selector": "0x06099ca3"
      },
      {
        "args": [
          {
            "label": "code_hash",
            "type": {
              "displayName": [
                "Hash"
              ],
              "type": 111
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::set_code",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 57
        },
        "selector": "0xe33a2343"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0xf93ac913",
                              "ty": 0
                            }
                          },
                          "root_key": "0xf93ac913",
                          "ty": 1
                        }
                      },
                      "name": "positions_length"
                    },
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "struct": {
                              "fields": [
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xaa6cd0bf",
                                              "ty": 2
                                            }
                                          },
                                          "name": "token_x"
                                        },
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xaa6cd0bf",
                                              "ty": 2
                                            }
                                          },
                                          "name": "token_y"
                                        },
                                        {
                                          "layout": {
                                            "struct": {
                                              "fields": [
                                                {
                                                  "layout": {
                                                    "struct": {
                                                      "fields": [
                                                        {
                                                          "layout": {
                                                            "leaf": {
                                                              "key": "0xaa6cd0bf",
                                                              "ty": 9
                                                            }
                                                          },
                                                          "name": "0"
                                                        }
                                                      ],
                                                      "name": "Percentage"
                                                    }
                                                  },
                                                  "name": "fee"
                                                },
                                                {
                                                  "layout": {
                                                    "leaf": {
                                                      "key": "0xaa6cd0bf",
                                                      "ty": 10
                                                    }
                                                  },
                                                  "name": "tick_spacing"
                                                }
                                              ],
                                              "name": "FeeTier"
                                            }
                                          },
                                          "name": "fee_tier"
                                        }
                                      ],
                                      "name": "PoolKey"
                                    }
                                  },
                                  "name": "pool_key"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xaa6cd0bf",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "Liquidity"
                                    }
                                  },
                                  "name": "liquidity"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xaa6cd0bf",
                                      "ty": 12
                                    }
                                  },
                                  "name": "lower_tick_index"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xaa6cd0bf",
                                      "ty": 12
                                    }
                                  },
                                  "name": "upper_tick_index"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xaa6cd0bf",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "FeeGrowth"
                                    }
                                  },
                                  "name": "fee_growth_inside_x"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xaa6cd0bf",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "FeeGrowth"
                                    }
                                  },
                                  "name": "fee_growth_inside_y"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xaa6cd0bf",
                                      "ty": 9
                                    }
                                  },
                                  "name": "last_block_number"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xaa6cd0bf",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "TokenAmount"
                                    }
                                  },
                                  "name": "tokens_owed_x"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xaa6cd0bf",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "TokenAmount"
                                    }
                                  },
                                  "name": "tokens_owed_y"
                                }
                              ],
                              "name": "Position"
                            }
                          },
                          "root_key": "0xaa6cd0bf",
                          "ty": 13
                        }
                      },
                      "name": "positions"
                    }
                  ],
                  "name": "Positions"
                }
              },
              "name": "positions"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "struct": {
                              "fields": [
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xfe7b1486",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "Liquidity"
                                    }
                                  },
                                  "name": "liquidity"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xfe7b1486",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "SqrtPrice"
                                    }
                                  },
                                  "name": "sqrt_price"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xfe7b1486",
                                      "ty": 12
                                    }
                                  },
                                  "name": "current_tick_index"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xfe7b1486",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "FeeGrowth"
                                    }
                                  },
                                  "name": "fee_growth_global_x"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xfe7b1486",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "FeeGrowth"
                                    }
                                  },
                                  "name": "fee_growth_global_y"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xfe7b1486",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "TokenAmount"
                                    }
                                  },
                                  "name": "fee_protocol_token_x"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xfe7b1486",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "TokenAmount"
                                    }
                                  },
                                  "name": "fee_protocol_token_y"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xfe7b1486",
                                      "ty": 9
                                    }
                                  },
                                  "name": "start_timestamp"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xfe7b1486",
                                      "ty": 9
                                    }
                                  },
                                  "name": "last_timestamp"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xfe7b1486",
                                      "ty": 2
                                    }
                                  },
                                  "name": "fee_receiver"
                                }
                              ],
                              "name": "Pool"
                            }
                          },
                          "root_key": "0xfe7b1486",
                          "ty": 24
                        }
                      },
                      "name": "pools"
                    }
                  ],
                  "name": "Pools"
                }
              },
              "name": "pools"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0xd41cdba5",
                              "ty": 9
                            }
                          },
                          "root_key": "0xd41cdba5",
                          "ty": 29
                        }
                      },
                      "name": "bitmap"
                    }
                  ],
                  "name": "Tickmap"
                }
              },
              "name": "tickmap"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "struct": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xbc43a840",
                                      "ty": 12
                                    }
                                  },
                                  "name": "index"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xbc43a840",
                                      "ty": 33
                                    }
                                  },
                                  "name": "sign"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xbc43a840",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "Liquidity"
                                    }
                                  },
                                  "name": "liquidity_change"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xbc43a840",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "Liquidity"
                                    }
                                  },
                                  "name": "liquidity_gross"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xbc43a840",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "SqrtPrice"
                                    }
                                  },
                                  "name": "sqrt_price"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xbc43a840",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "FeeGrowth"
                                    }
                                  },
                                  "name": "fee_growth_outside_x"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xbc43a840",
                                              "ty": 11
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "FeeGrowth"
                                    }
                                  },
                                  "name": "fee_growth_outside_y"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xbc43a840",
                                      "ty": 9
                                    }
                                  },
                                  "name": "seconds_outside"
                                }
                              ],
                              "name": "Tick"
                            }
                          },
                          "root_key": "0xbc43a840",
                          "ty": 34
                        }
                      },
                      "name": "ticks"
                    }
                  ],
                  "name": "Ticks"
                }
              },
              "name": "ticks"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 39
                        }
                      },
                      "name": "fee_tiers"
                    }
                  ],
                  "name": "FeeTiers"
                }
              },
              "name": "fee_tiers"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x19e555c8",
                              "ty": 10
                            }
                          },
                          "root_key": "0x19e555c8",
                          "ty": 40
                        }
                      },
                      "name": "pool_keys"
                    },
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "struct": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x68879322",
                                      "ty": 2
                                    }
                                  },
                                  "name": "token_x"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x68879322",
                                      "ty": 2
                                    }
                                  },
                                  "name": "token_y"
                                },
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "struct": {
                                              "fields": [
                                                {
                                                  "layout": {
                                                    "leaf": {
                                                      "key": "0x68879322",
                                                      "ty": 9
                                                    }
                                                  },
                                                  "name": "0"
                                                }
                                              ],
                                              "name": "Percentage"
                                            }
                                          },
                                          "name": "fee"
                                        },
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0x68879322",
                                              "ty": 10
                                            }
                                          },
                                          "name": "tick_spacing"
                                        }
                                      ],
                                      "name": "FeeTier"
                                    }
                                  },
                                  "name": "fee_tier"
                                }
                              ],
                              "name": "PoolKey"
                            }
                          },
                          "root_key": "0x68879322",
                          "ty": 43
                        }
                      },
                      "name": "pool_keys_by_index"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 10
                        }
                      },
                      "name": "pool_keys_length"
                    }
                  ],
                  "name": "PoolKeys"
                }
              },
              "name": "pool_keys"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 2
                        }
                      },
                      "name": "admin"
                    },
                    {
                      "layout": {
                        "struct": {
                          "fields": [
                            {
                              "layout": {
                                "leaf": {
                                  "key": "0x00000000",
                                  "ty": 9
                                }
                              },
                              "name": "0"
                            }
                          ],
                          "name": "Percentage"
                        }
                      },
                      "name": "protocol_fee"
                    }
                  ],
                  "name": "InvariantConfig"
                }
              },
              "name": "config"
            }
          ],
          "name": "Invariant"
        }
      },
      "root_key": "0x00000000",
      "ty": 46
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "K",
            "type": 2
          },
          {
            "name": "V",
            "type": 0
          },
          {
            "name": "KeyType",
            "type": 5
          }
        ],
        "path": [
          "ink_storage",
          "lazy",
          "mapping",
          "Mapping"
        ]
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 3,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "AccountId"
        ]
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 4
          }
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "L",
            "type": 6
          },
          {
            "name": "R",
            "type": 7
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ResolverKey"
        ]
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "composite": {}
        },
        "path": [
          "ink_storage_traits",
          "impls",
          "AutoKey"
        ]
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "ParentKey",
            "type": 8
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ManualKey"
        ]
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 9,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 10,
      "type": {
        "def": {
          "primitive": "u16"
        }
      }
    },
    {
      "id": 11,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 12,
      "type": {
        "def": {
          "primitive": "i32"
        }
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "K",
            "type": 14
          },
          {
            "name": "V",
            "type": 15
          },
          {
            "name": "KeyType",
            "type": 22
          }
        ],
        "path": [
          "ink_storage",
          "lazy",
          "mapping",
          "Mapping"
        ]
      }
    },
    {
      "id": 14,
      "type": {
        "def": {
          "tuple": [
            2,
            0
          ]
        }
      }
    },
    {
      "id": 15,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "pool_key",
                "type": 16,
                "typeName": "PoolKey"
              },
              {
                "name": "liquidity",
                "type": 19,
                "typeName": "Liquidity"
              },
              {
                "name": "lower_tick_index",
                "type": 12,
                "typeName": "i32"
              },
              {
                "name": "upper_tick_index",
                "type": 12,
                "typeName": "i32"
              },
              {
                "name": "fee_growth_inside_x",
                "type": 20,
                "typeName": "FeeGrowth"
              },
              {
                "name": "fee_growth_inside_y",
                "type": 20,
                "typeName": "FeeGrowth"
              },
              {
                "name": "last_block_number",
                "type": 9,
                "typeName": "u64"
              },
              {
                "name": "tokens_owed_x",
                "type": 21,
                "typeName": "TokenAmount"
              },
              {
                "name": "tokens_owed_y",
                "type": 21,
                "typeName": "TokenAmount"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "storage",
          "position",
          "Position"
        ]
      }
    },
    {
      "id": 16,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "token_x",
                "type": 2,
                "typeName": "AccountId"
              },
              {
                "name": "token_y",
                "type": 2,
                "typeName": "AccountId"
              },
              {
                "name": "fee_tier",
                "type": 17,
                "typeName": "FeeTier"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "storage",
          "pool_key",
          "PoolKey"
        ]
      }
    },
    {
      "id": 17,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "fee",
                "type": 18,
                "typeName": "Percentage"
              },
              {
                "name": "tick_spacing",
                "type": 10,
                "typeName": "u16"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "storage",
          "fee_tier",
          "FeeTier"
        ]
      }
    },
    {
      "id": 18,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 9,
                "typeName": "u64"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "math",
          "types",
          "percentage",
          "Percentage"
        ]
      }
    },
    {
      "id": 19,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 11,
                "typeName": "u128"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "math",
          "types",
          "liquidity",
          "Liquidity"
        ]
      }
    },
    {
      "id": 20,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 11,
                "typeName": "u128"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "math",
          "types",
          "fee_growth",
          "FeeGrowth"
        ]
      }
    },
    {
      "id": 21,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 11,
                "typeName": "u128"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "math",
          "types",
          "token_amount",
          "TokenAmount"
        ]
      }
    },
    {
      "id": 22,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "L",
            "type": 6
          },
          {
            "name": "R",
            "type": 23
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ResolverKey"
        ]
      }
    },
    {
      "id": 23,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "ParentKey",
            "type": 8
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ManualKey"
        ]
      }
    },
    {
      "id": 24,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "K",
            "type": 16
          },
          {
            "name": "V",
            "type": 25
          },
          {
            "name": "KeyType",
            "type": 27
          }
        ],
        "path": [
          "ink_storage",
          "lazy",
          "mapping",
          "Mapping"
        ]
      }
    },
    {
      "id": 25,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "liquidity",
                "type": 19,
                "typeName": "Liquidity"
              },
              {
                "name": "sqrt_price",
                "type": 26,
                "typeName": "SqrtPrice"
              },
              {
                "name": "current_tick_index",
                "type": 12,
                "typeName": "i32"
              },
              {
                "name": "fee_growth_global_x",
                "type": 20,
                "typeName": "FeeGrowth"
              },
              {
                "name": "fee_growth_global_y",
                "type": 20,
                "typeName": "FeeGrowth"
              },
              {
                "name": "fee_protocol_token_x",
                "type": 21,
                "typeName": "TokenAmount"
              },
              {
                "name": "fee_protocol_token_y",
                "type": 21,
                "typeName": "TokenAmount"
              },
              {
                "name": "start_timestamp",
                "type": 9,
                "typeName": "u64"
              },
              {
                "name": "last_timestamp",
                "type": 9,
                "typeName": "u64"
              },
              {
                "name": "fee_receiver",
                "type": 2,
                "typeName": "AccountId"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "storage",
          "pool",
          "Pool"
        ]
      }
    },
    {
      "id": 26,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 11,
                "typeName": "u128"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "math",
          "types",
          "sqrt_price",
          "SqrtPrice"
        ]
      }
    },
    {
      "id": 27,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "L",
            "type": 6
          },
          {
            "name": "R",
            "type": 28
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ResolverKey"
        ]
      }
    },
    {
      "id": 28,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "ParentKey",
            "type": 8
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ManualKey"
        ]
      }
    },
    {
      "id": 29,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "K",
            "type": 30
          },
          {
            "name": "V",
            "type": 9
          },
          {
            "name": "KeyType",
            "type": 31
          }
        ],
        "path": [
          "ink_storage",
          "lazy",
          "mapping",
          "Mapping"
        ]
      }
    },
    {
      "id": 30,
      "type": {
        "def": {
          "tuple": [
            10,
            16
          ]
        }
      }
    },
    {
      "id": 31,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "L",
            "type": 6
          },
          {
            "name": "R",
            "type": 32
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ResolverKey"
        ]
      }
    },
    {
      "id": 32,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "ParentKey",
            "type": 8
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ManualKey"
        ]
      }
    },
    {
      "id": 33,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 34,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "K",
            "type": 35
          },
          {
            "name": "V",
            "type": 36
          },
          {
            "name": "KeyType",
            "type": 37
          }
        ],
        "path": [
          "ink_storage",
          "lazy",
          "mapping",
          "Mapping"
        ]
      }
    },
    {
      "id": 35,
      "type": {
        "def": {
          "tuple": [
            16,
            12
          ]
        }
      }
    },
    {
      "id": 36,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "index",
                "type": 12,
                "typeName": "i32"
              },
              {
                "name": "sign",
                "type": 33,
                "typeName": "bool"
              },
              {
                "name": "liquidity_change",
                "type": 19,
                "typeName": "Liquidity"
              },
              {
                "name": "liquidity_gross",
                "type": 19,
                "typeName": "Liquidity"
              },
              {
                "name": "sqrt_price",
                "type": 26,
                "typeName": "SqrtPrice"
              },
              {
                "name": "fee_growth_outside_x",
                "type": 20,
                "typeName": "FeeGrowth"
              },
              {
                "name": "fee_growth_outside_y",
                "type": 20,
                "typeName": "FeeGrowth"
              },
              {
                "name": "seconds_outside",
                "type": 9,
                "typeName": "u64"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "storage",
          "tick",
          "Tick"
        ]
      }
    },
    {
      "id": 37,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "L",
            "type": 6
          },
          {
            "name": "R",
            "type": 38
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ResolverKey"
        ]
      }
    },
    {
      "id": 38,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "ParentKey",
            "type": 8
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ManualKey"
        ]
      }
    },
    {
      "id": 39,
      "type": {
        "def": {
          "sequence": {
            "type": 17
          }
        }
      }
    },
    {
      "id": 40,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "K",
            "type": 16
          },
          {
            "name": "V",
            "type": 10
          },
          {
            "name": "KeyType",
            "type": 41
          }
        ],
        "path": [
          "ink_storage",
          "lazy",
          "mapping",
          "Mapping"
        ]
      }
    },
    {
      "id": 41,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "L",
            "type": 6
          },
          {
            "name": "R",
            "type": 42
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ResolverKey"
        ]
      }
    },
    {
      "id": 42,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "ParentKey",
            "type": 8
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ManualKey"
        ]
      }
    },
    {
      "id": 43,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "K",
            "type": 10
          },
          {
            "name": "V",
            "type": 16
          },
          {
            "name": "KeyType",
            "type": 44
          }
        ],
        "path": [
          "ink_storage",
          "lazy",
          "mapping",
          "Mapping"
        ]
      }
    },
    {
      "id": 44,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "L",
            "type": 6
          },
          {
            "name": "R",
            "type": 45
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ResolverKey"
        ]
      }
    },
    {
      "id": 45,
      "type": {
        "def": {
          "composite": {}
        },
        "params": [
          {
            "name": "ParentKey",
            "type": 8
          }
        ],
        "path": [
          "ink_storage_traits",
          "impls",
          "ManualKey"
        ]
      }
    },
    {
      "id": 46,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "positions",
                "type": 47,
                "typeName": "<Positions as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<4203942951u32, ()>,>>::Type"
              },
              {
                "name": "pools",
                "type": 48,
                "typeName": "<Pools as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<376105818u32, ()>,>>::Type"
              },
              {
                "name": "tickmap",
                "type": 49,
                "typeName": "<Tickmap as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<494648388u32, ()>,>>::Type"
              },
              {
                "name": "ticks",
                "type": 50,
                "typeName": "<Ticks as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<3714784162u32, ()>,>>::Type"
              },
              {
                "name": "fee_tiers",
                "type": 51,
                "typeName": "<FeeTiers as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<2632500823u32, ()>,>>::Type"
              },
              {
                "name": "pool_keys",
                "type": 52,
                "typeName": "<PoolKeys as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<1198328142u32, ()>,>>::Type"
              },
              {
                "name": "config",
                "type": 53,
                "typeName": "<InvariantConfig as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<3494350023u32, ()>,>>::Type"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "invariant",
          "Invariant"
        ]
      }
    },
    {
      "id": 47,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "positions_length",
                "type": 1,
                "typeName": "<Mapping<AccountId, u32> as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<331954937u32, ()>,>>::Type"
              },
              {
                "name": "positions",
                "type": 13,
                "typeName": "<Mapping<(AccountId, u32), Position> as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<3218107562u32,()>,>>::Type"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "collections",
          "positions",
          "Positions"
        ]
      }
    },
    {
      "id": 48,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "pools",
                "type": 24,
                "typeName": "<Mapping<PoolKey, Pool> as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<2249489406u32, ()>,>>::Type"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "collections",
          "pools",
          "Pools"
        ]
      }
    },
    {
      "id": 49,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "bitmap",
                "type": 29,
                "typeName": "<Mapping<(u16, PoolKey), u64> as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<2782600404u32,()>,>>::Type"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "storage",
          "tickmap",
          "Tickmap"
        ]
      }
    },
    {
      "id": 50,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "ticks",
                "type": 34,
                "typeName": "<Mapping<(PoolKey, i32), Tick> as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<1084769212u32,()>,>>::Type"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "collections",
          "ticks",
          "Ticks"
        ]
      }
    },
    {
      "id": 51,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "fee_tiers",
                "type": 39,
                "typeName": "<Vec<FeeTier> as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<2342165498u32, ()>,>>::Type"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "collections",
          "fee_tiers",
          "FeeTiers"
        ]
      }
    },
    {
      "id": 52,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "pool_keys",
                "type": 40,
                "typeName": "<Mapping<PoolKey, u16> as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<3361072409u32, ()>,>>::Type"
              },
              {
                "name": "pool_keys_by_index",
                "type": 43,
                "typeName": "<Mapping<u16, PoolKey> as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<580093800u32, ()>,>>::Type"
              },
              {
                "name": "pool_keys_length",
                "type": 10,
                "typeName": "<u16 as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<3842874649u32, ()>,>>::Type"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "collections",
          "pool_keys",
          "PoolKeys"
        ]
      }
    },
    {
      "id": 53,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "admin",
                "type": 2,
                "typeName": "<AccountId as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<423649979u32, ()>,>>::Type"
              },
              {
                "name": "protocol_fee",
                "type": 18,
                "typeName": "<Percentage as::ink::storage::traits::AutoStorableHint<::ink::storage::traits::ManualKey<1271871885u32, ()>,>>::Type"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "storage",
          "invariant_config",
          "InvariantConfig"
        ]
      }
    },
    {
      "id": 54,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 8
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 8
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 55,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 1,
                "name": "CouldNotReadInput"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "LangError"
        ]
      }
    },
    {
      "id": 56,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 18
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 18
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 57,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 58
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 58
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 58,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 8
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 8
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 59,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "NotAdmin"
              },
              {
                "index": 1,
                "name": "NotFeeReceiver"
              },
              {
                "index": 2,
                "name": "PoolAlreadyExist"
              },
              {
                "index": 3,
                "name": "PoolNotFound"
              },
              {
                "index": 4,
                "name": "TickAlreadyExist"
              },
              {
                "index": 5,
                "name": "InvalidTickIndexOrTickSpacing"
              },
              {
                "index": 6,
                "name": "PositionNotFound"
              },
              {
                "index": 7,
                "name": "TickNotFound"
              },
              {
                "index": 8,
                "name": "FeeTierNotFound"
              },
              {
                "index": 9,
                "name": "PoolKeyNotFound"
              },
              {
                "index": 10,
                "name": "AmountIsZero"
              },
              {
                "index": 11,
                "name": "WrongLimit"
              },
              {
                "index": 12,
                "name": "PriceLimitReached"
              },
              {
                "index": 13,
                "name": "NoGainSwap"
              },
              {
                "index": 14,
                "name": "InvalidTickSpacing"
              },
              {
                "index": 15,
                "name": "FeeTierAlreadyExist"
              },
              {
                "index": 16,
                "name": "PoolKeyAlreadyExist"
              },
              {
                "index": 17,
                "name": "UnauthorizedFeeReceiver"
              },
              {
                "index": 18,
                "name": "ZeroLiquidity"
              },
              {
                "index": 19,
                "name": "TransferError"
              },
              {
                "index": 20,
                "name": "TokensAreSame"
              },
              {
                "index": 21,
                "name": "AmountUnderMinimumAmountOut"
              },
              {
                "index": 22,
                "name": "InvalidFee"
              },
              {
                "index": 23,
                "name": "NotEmptyTickDeinitialization"
              },
              {
                "index": 24,
                "name": "InvalidInitTick"
              },
              {
                "index": 25,
                "name": "InvalidInitSqrtPrice"
              },
              {
                "index": 26,
                "name": "InvalidSize"
              },
              {
                "index": 27,
                "name": "InvalidTickIndex"
              },
              {
                "index": 28,
                "name": "TickLimitReached"
              },
              {
                "fields": [
                  {
                    "type": 11,
                    "typeName": "u128"
                  },
                  {
                    "type": 11,
                    "typeName": "u128"
                  }
                ],
                "index": 29,
                "name": "AddOverflow"
              },
              {
                "fields": [
                  {
                    "type": 11,
                    "typeName": "u128"
                  },
                  {
                    "type": 11,
                    "typeName": "u128"
                  }
                ],
                "index": 30,
                "name": "SubUnderflow"
              },
              {
                "index": 31,
                "name": "MulOverflow"
              },
              {
                "index": 32,
                "name": "DivByZero"
              },
              {
                "index": 33,
                "name": "WAZEROWithdrawError"
              },
              {
                "index": 34,
                "name": "SetCodeHashError"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "error",
          "InvariantError"
        ]
      }
    },
    {
      "id": 60,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 61
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 61
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 61,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 15
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 15
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 62,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 63
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 63
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 63,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 64
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 64
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 64,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "amount_in",
                "type": 21,
                "typeName": "TokenAmount"
              },
              {
                "name": "amount_out",
                "type": 21,
                "typeName": "TokenAmount"
              },
              {
                "name": "start_sqrt_price",
                "type": 26,
                "typeName": "SqrtPrice"
              },
              {
                "name": "target_sqrt_price",
                "type": 26,
                "typeName": "SqrtPrice"
              },
              {
                "name": "fee",
                "type": 21,
                "typeName": "TokenAmount"
              },
              {
                "name": "pool",
                "type": 25,
                "typeName": "Pool"
              },
              {
                "name": "ticks",
                "type": 65,
                "typeName": "Vec<Tick>"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "swap_structs",
          "CalculateSwapResult"
        ]
      }
    },
    {
      "id": 65,
      "type": {
        "def": {
          "sequence": {
            "type": 36
          }
        }
      }
    },
    {
      "id": 66,
      "type": {
        "def": {
          "sequence": {
            "type": 67
          }
        }
      }
    },
    {
      "id": 67,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "pool_key",
                "type": 16,
                "typeName": "PoolKey"
              },
              {
                "name": "x_to_y",
                "type": 33,
                "typeName": "bool"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "swap_structs",
          "SwapHop"
        ]
      }
    },
    {
      "id": 68,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 69
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 69
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 69,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 70
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 70
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 70,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "amount_in",
                "type": 21,
                "typeName": "TokenAmount"
              },
              {
                "name": "amount_out",
                "type": 21,
                "typeName": "TokenAmount"
              },
              {
                "name": "target_sqrt_price",
                "type": 26,
                "typeName": "SqrtPrice"
              },
              {
                "name": "ticks",
                "type": 65,
                "typeName": "Vec<Tick>"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "swap_structs",
          "QuoteResult"
        ]
      }
    },
    {
      "id": 71,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 72
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 72
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 72,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 21
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 21
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 73,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 74
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 74
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 74,
      "type": {
        "def": {
          "sequence": {
            "type": 15
          }
        }
      }
    },
    {
      "id": 75,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 76
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 76
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 76,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 77
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 77
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 77,
      "type": {
        "def": {
          "tuple": [
            78,
            0
          ]
        }
      }
    },
    {
      "id": 78,
      "type": {
        "def": {
          "sequence": {
            "type": 79
          }
        }
      }
    },
    {
      "id": 79,
      "type": {
        "def": {
          "tuple": [
            15,
            25
          ]
        }
      }
    },
    {
      "id": 80,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 81
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 81
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 81,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 82
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 82
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 82,
      "type": {
        "def": {
          "tuple": [
            21,
            21
          ]
        }
      }
    },
    {
      "id": 83,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 33
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 33
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 84,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 85
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 85
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 85,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 25
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 25
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 86,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 87
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 87
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 87,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 88
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 88
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 88,
      "type": {
        "def": {
          "sequence": {
            "type": 89
          }
        }
      }
    },
    {
      "id": 89,
      "type": {
        "def": {
          "tuple": [
            17,
            25
          ]
        }
      }
    },
    {
      "id": 90,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 91
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 91
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 91,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 36
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 36
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 92,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 93
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 93
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 93,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 94
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 94
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 94,
      "type": {
        "def": {
          "tuple": [
            95,
            10
          ]
        }
      }
    },
    {
      "id": 95,
      "type": {
        "def": {
          "sequence": {
            "type": 16
          }
        }
      }
    },
    {
      "id": 96,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 39
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 39
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 97,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 98
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 98
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 98,
      "type": {
        "def": {
          "sequence": {
            "type": 99
          }
        }
      }
    },
    {
      "id": 99,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "index",
                "type": 12,
                "typeName": "i32"
              },
              {
                "name": "fee_growth_outside_x",
                "type": 20,
                "typeName": "FeeGrowth"
              },
              {
                "name": "fee_growth_outside_y",
                "type": 20,
                "typeName": "FeeGrowth"
              },
              {
                "name": "seconds_outside",
                "type": 9,
                "typeName": "u64"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "storage",
          "tick",
          "PositionTick"
        ]
      }
    },
    {
      "id": 100,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 101
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 101
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 101,
      "type": {
        "def": {
          "sequence": {
            "type": 102
          }
        }
      }
    },
    {
      "id": 102,
      "type": {
        "def": {
          "tuple": [
            10,
            9
          ]
        }
      }
    },
    {
      "id": 103,
      "type": {
        "def": {
          "sequence": {
            "type": 12
          }
        }
      }
    },
    {
      "id": 104,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 105
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 105
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 105,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 106
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 106
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 106,
      "type": {
        "def": {
          "sequence": {
            "type": 107
          }
        }
      }
    },
    {
      "id": 107,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "index",
                "type": 12,
                "typeName": "i32"
              },
              {
                "name": "liquidity_change",
                "type": 19,
                "typeName": "Liquidity"
              },
              {
                "name": "sign",
                "type": 33,
                "typeName": "bool"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "contracts",
          "storage",
          "tick",
          "LiquidityTick"
        ]
      }
    },
    {
      "id": 108,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 109,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 110
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 55
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 110
          },
          {
            "name": "E",
            "type": 55
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 110,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          },
          {
            "name": "E",
            "type": 59
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 111,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 3,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "Hash"
        ]
      }
    },
    {
      "id": 112,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 2
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 2
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 113,
      "type": {
        "def": {
          "variant": {}
        },
        "path": [
          "ink_env",
          "types",
          "NoChainExtension"
        ]
      }
    }
  ],
  "version": 5
}`
