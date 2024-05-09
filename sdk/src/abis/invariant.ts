export const abi = `
{
  "source": {
    "hash": "0xfdead5944afc0bf4292ebca2ddf552a8b09e8efe39dd67614b766b70a6e1efd6",
    "language": "ink! 4.3.0",
    "compiler": "rustc 1.74.0",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "3.2.0",
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
              "type": 11
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
          "type": 12
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
        "type": 1
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 6
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
        "type": 66
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 65
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 4
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
              "type": 4
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
              "type": 1
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
              "type": 20
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
              "type": 7
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
              "type": 7
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
              "type": 21
            }
          }
        ],
        "docs": [],
        "label": "CreatePositionEvent"
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
              "type": 4
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
              "type": 1
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
              "type": 64
            }
          }
        ],
        "docs": [],
        "label": "CrossTickEvent"
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
              "type": 4
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
              "type": 1
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
              "type": 20
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
              "type": 7
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
              "type": 7
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
              "type": 21
            }
          }
        ],
        "docs": [],
        "label": "RemovePositionEvent"
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
              "type": 4
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
              "type": 1
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
              "type": 26
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
              "type": 26
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
              "type": 26
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
              "type": 21
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
              "type": 21
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
              "type": 8
            }
          }
        ],
        "docs": [],
        "label": "SwapEvent"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 14
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
          "type": 15
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
          "type": 17
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
              "type": 11
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
          "type": 17
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
              "type": 1
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
          "type": 17
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
              "type": 7
            }
          },
          {
            "label": "upper_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 7
            }
          },
          {
            "label": "liquidity_delta",
            "type": {
              "displayName": [
                "Liquidity"
              ],
              "type": 20
            }
          },
          {
            "label": "slippage_limit_lower",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 21
            }
          },
          {
            "label": "slippage_limit_upper",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 21
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
          "type": 22
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
              "type": 8
            }
          },
          {
            "label": "amount",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 26
            }
          },
          {
            "label": "by_amount_in",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 8
            }
          },
          {
            "label": "sqrt_price_limit",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 21
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
          "type": 27
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
              "type": 26
            }
          },
          {
            "label": "expected_amount_out",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 26
            }
          },
          {
            "label": "slippage",
            "type": {
              "displayName": [
                "Percentage"
              ],
              "type": 11
            }
          },
          {
            "label": "swaps",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 33
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
          "type": 17
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
              "type": 8
            }
          },
          {
            "label": "amount",
            "type": {
              "displayName": [
                "TokenAmount"
              ],
              "type": 26
            }
          },
          {
            "label": "by_amount_in",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 8
            }
          },
          {
            "label": "sqrt_price_limit",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 21
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
          "type": 35
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
              "type": 26
            }
          },
          {
            "label": "swaps",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 33
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
          "type": 38
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
              "type": 1
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
          "type": 17
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
              "type": 1
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
          "type": 22
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
              "type": 1
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
          "type": 40
        },
        "selector": "0xa509d69f"
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
          "type": 42
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
          "type": 42
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
              "type": 10
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
          "type": 17
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
              "type": 10
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
          "type": 17
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
              "type": 10
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
          "type": 45
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
              "type": 1
            }
          },
          {
            "label": "token_1",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "fee_tier",
            "type": {
              "displayName": [
                "FeeTier"
              ],
              "type": 10
            }
          },
          {
            "label": "init_sqrt_price",
            "type": {
              "displayName": [
                "SqrtPrice"
              ],
              "type": 21
            }
          },
          {
            "label": "init_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 7
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
          "type": 17
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
              "type": 1
            }
          },
          {
            "label": "token_1",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "fee_tier",
            "type": {
              "displayName": [
                "FeeTier"
              ],
              "type": 10
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
          "type": 46
        },
        "selector": "0xf91e4a49"
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
              "type": 7
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
          "type": 48
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
              "type": 7
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
          "type": 45
        },
        "selector": "0xdbae15e5"
      },
      {
        "args": [
          {
            "label": "size",
            "type": {
              "displayName": [
                "u8"
              ],
              "type": 3
            }
          },
          {
            "label": "offset",
            "type": {
              "displayName": [
                "u16"
              ],
              "type": 5
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "InvariantTrait::get_pools",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 50
        },
        "selector": "0x6dd2d776"
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
          "type": 53
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
              "type": 1
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
          "type": 54
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
            "label": "center_tick",
            "type": {
              "displayName": [
                "i32"
              ],
              "type": 7
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
          "type": 57
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
            "label": "offset",
            "type": {
              "displayName": [
                "u16"
              ],
              "type": 5
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
          "type": 60
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
              "type": 1
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
          "type": 63
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
          "type": 63
        },
        "selector": "0xf360dea7"
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
                              "key": "0x13c93af9",
                              "ty": 0
                            }
                          },
                          "root_key": "0x13c93af9"
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
                                              "key": "0xbfd06caa",
                                              "ty": 1
                                            }
                                          },
                                          "name": "token_x"
                                        },
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0xbfd06caa",
                                              "ty": 1
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
                                                              "key": "0xbfd06caa",
                                                              "ty": 4
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
                                                      "key": "0xbfd06caa",
                                                      "ty": 5
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
                                              "key": "0xbfd06caa",
                                              "ty": 6
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
                                      "key": "0xbfd06caa",
                                      "ty": 7
                                    }
                                  },
                                  "name": "lower_tick_index"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xbfd06caa",
                                      "ty": 7
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
                                              "key": "0xbfd06caa",
                                              "ty": 6
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
                                              "key": "0xbfd06caa",
                                              "ty": 6
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
                                      "key": "0xbfd06caa",
                                      "ty": 4
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
                                              "key": "0xbfd06caa",
                                              "ty": 6
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
                                              "key": "0xbfd06caa",
                                              "ty": 6
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
                          "root_key": "0xbfd06caa"
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
                                              "key": "0x86147bfe",
                                              "ty": 6
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
                                              "key": "0x86147bfe",
                                              "ty": 6
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
                                      "key": "0x86147bfe",
                                      "ty": 7
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
                                              "key": "0x86147bfe",
                                              "ty": 6
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
                                              "key": "0x86147bfe",
                                              "ty": 6
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
                                              "key": "0x86147bfe",
                                              "ty": 6
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
                                              "key": "0x86147bfe",
                                              "ty": 6
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
                                      "key": "0x86147bfe",
                                      "ty": 4
                                    }
                                  },
                                  "name": "start_timestamp"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x86147bfe",
                                      "ty": 4
                                    }
                                  },
                                  "name": "last_timestamp"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x86147bfe",
                                      "ty": 1
                                    }
                                  },
                                  "name": "fee_receiver"
                                }
                              ],
                              "name": "Pool"
                            }
                          },
                          "root_key": "0x86147bfe"
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
                              "key": "0xa5db1cd4",
                              "ty": 4
                            }
                          },
                          "root_key": "0xa5db1cd4"
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
                                      "key": "0x40a843bc",
                                      "ty": 7
                                    }
                                  },
                                  "name": "index"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x40a843bc",
                                      "ty": 8
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
                                              "key": "0x40a843bc",
                                              "ty": 6
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
                                              "key": "0x40a843bc",
                                              "ty": 6
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
                                              "key": "0x40a843bc",
                                              "ty": 6
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
                                              "key": "0x40a843bc",
                                              "ty": 6
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
                                              "key": "0x40a843bc",
                                              "ty": 6
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
                                      "key": "0x40a843bc",
                                      "ty": 4
                                    }
                                  },
                                  "name": "seconds_outside"
                                }
                              ],
                              "name": "Tick"
                            }
                          },
                          "root_key": "0x40a843bc"
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
                          "ty": 9
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
                              "key": "0xc855e519",
                              "ty": 5
                            }
                          },
                          "root_key": "0xc855e519"
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
                                      "key": "0x22938768",
                                      "ty": 1
                                    }
                                  },
                                  "name": "token_x"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x22938768",
                                      "ty": 1
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
                                                      "key": "0x22938768",
                                                      "ty": 4
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
                                              "key": "0x22938768",
                                              "ty": 5
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
                          "root_key": "0x22938768"
                        }
                      },
                      "name": "pool_keys_by_index"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 5
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
                          "ty": 1
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
                                  "ty": 4
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
      "root_key": "0x00000000"
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
          "composite": {
            "fields": [
              {
                "type": 2,
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
      "id": 2,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 3
          }
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "primitive": "u16"
        }
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "primitive": "i32"
        }
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 9,
      "type": {
        "def": {
          "sequence": {
            "type": 10
          }
        }
      }
    },
    {
      "id": 10,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "fee",
                "type": 11,
                "typeName": "Percentage"
              },
              {
                "name": "tick_spacing",
                "type": 5,
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
      "id": 11,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 4,
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
      "id": 12,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 13
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 13
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 14,
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
      "id": 15,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 11
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 11
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
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
                "type": 1,
                "typeName": "AccountId"
              },
              {
                "name": "token_y",
                "type": 1,
                "typeName": "AccountId"
              },
              {
                "name": "fee_tier",
                "type": 10,
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
                    "type": 14
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
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 18,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 13
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 19
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
            "type": 13
          },
          {
            "name": "E",
            "type": 19
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 19,
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
              }
            ]
          }
        },
        "path": [
          "invariant",
          "InvariantError"
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
                "type": 6,
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
      "id": 21,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 6,
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
      "id": 22,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 23
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 23
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 23,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 24
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 19
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
            "type": 24
          },
          {
            "name": "E",
            "type": 19
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 24,
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
                "type": 20,
                "typeName": "Liquidity"
              },
              {
                "name": "lower_tick_index",
                "type": 7,
                "typeName": "i32"
              },
              {
                "name": "upper_tick_index",
                "type": 7,
                "typeName": "i32"
              },
              {
                "name": "fee_growth_inside_x",
                "type": 25,
                "typeName": "FeeGrowth"
              },
              {
                "name": "fee_growth_inside_y",
                "type": 25,
                "typeName": "FeeGrowth"
              },
              {
                "name": "last_block_number",
                "type": 4,
                "typeName": "u64"
              },
              {
                "name": "tokens_owed_x",
                "type": 26,
                "typeName": "TokenAmount"
              },
              {
                "name": "tokens_owed_y",
                "type": 26,
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
      "id": 25,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 6,
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
      "id": 26,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 6,
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
      "id": 27,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 28
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 28
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 28,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 29
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 19
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
            "type": 29
          },
          {
            "name": "E",
            "type": 19
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 29,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "amount_in",
                "type": 26,
                "typeName": "TokenAmount"
              },
              {
                "name": "amount_out",
                "type": 26,
                "typeName": "TokenAmount"
              },
              {
                "name": "start_sqrt_price",
                "type": 21,
                "typeName": "SqrtPrice"
              },
              {
                "name": "target_sqrt_price",
                "type": 21,
                "typeName": "SqrtPrice"
              },
              {
                "name": "fee",
                "type": 26,
                "typeName": "TokenAmount"
              },
              {
                "name": "pool",
                "type": 30,
                "typeName": "Pool"
              },
              {
                "name": "ticks",
                "type": 31,
                "typeName": "Vec<Tick>"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "invariant",
          "CalculateSwapResult"
        ]
      }
    },
    {
      "id": 30,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "liquidity",
                "type": 20,
                "typeName": "Liquidity"
              },
              {
                "name": "sqrt_price",
                "type": 21,
                "typeName": "SqrtPrice"
              },
              {
                "name": "current_tick_index",
                "type": 7,
                "typeName": "i32"
              },
              {
                "name": "fee_growth_global_x",
                "type": 25,
                "typeName": "FeeGrowth"
              },
              {
                "name": "fee_growth_global_y",
                "type": 25,
                "typeName": "FeeGrowth"
              },
              {
                "name": "fee_protocol_token_x",
                "type": 26,
                "typeName": "TokenAmount"
              },
              {
                "name": "fee_protocol_token_y",
                "type": 26,
                "typeName": "TokenAmount"
              },
              {
                "name": "start_timestamp",
                "type": 4,
                "typeName": "u64"
              },
              {
                "name": "last_timestamp",
                "type": 4,
                "typeName": "u64"
              },
              {
                "name": "fee_receiver",
                "type": 1,
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
      "id": 31,
      "type": {
        "def": {
          "sequence": {
            "type": 32
          }
        }
      }
    },
    {
      "id": 32,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "index",
                "type": 7,
                "typeName": "i32"
              },
              {
                "name": "sign",
                "type": 8,
                "typeName": "bool"
              },
              {
                "name": "liquidity_change",
                "type": 20,
                "typeName": "Liquidity"
              },
              {
                "name": "liquidity_gross",
                "type": 20,
                "typeName": "Liquidity"
              },
              {
                "name": "sqrt_price",
                "type": 21,
                "typeName": "SqrtPrice"
              },
              {
                "name": "fee_growth_outside_x",
                "type": 25,
                "typeName": "FeeGrowth"
              },
              {
                "name": "fee_growth_outside_y",
                "type": 25,
                "typeName": "FeeGrowth"
              },
              {
                "name": "seconds_outside",
                "type": 4,
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
      "id": 33,
      "type": {
        "def": {
          "sequence": {
            "type": 34
          }
        }
      }
    },
    {
      "id": 34,
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
                "type": 8,
                "typeName": "bool"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "invariant",
          "SwapHop"
        ]
      }
    },
    {
      "id": 35,
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
                    "type": 14
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
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 36,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 37
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 19
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
            "type": 37
          },
          {
            "name": "E",
            "type": 19
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 37,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "amount_in",
                "type": 26,
                "typeName": "TokenAmount"
              },
              {
                "name": "amount_out",
                "type": 26,
                "typeName": "TokenAmount"
              },
              {
                "name": "target_sqrt_price",
                "type": 21,
                "typeName": "SqrtPrice"
              },
              {
                "name": "ticks",
                "type": 31,
                "typeName": "Vec<Tick>"
              }
            ]
          }
        },
        "path": [
          "invariant",
          "invariant",
          "QuoteResult"
        ]
      }
    },
    {
      "id": 38,
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
                    "type": 14
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
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 39,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 26
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 19
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
            "type": 26
          },
          {
            "name": "E",
            "type": 19
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 40,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 41
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 41
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 41,
      "type": {
        "def": {
          "sequence": {
            "type": 24
          }
        }
      }
    },
    {
      "id": 42,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 43
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 43
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 43,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 44
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 19
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
            "type": 44
          },
          {
            "name": "E",
            "type": 19
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 44,
      "type": {
        "def": {
          "tuple": [
            26,
            26
          ]
        }
      }
    },
    {
      "id": 45,
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
                    "type": 14
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
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 46,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 47
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 47
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 47,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 30
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 19
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
            "type": 30
          },
          {
            "name": "E",
            "type": 19
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 48,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 49
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 49
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 49,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 32
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 19
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
            "type": 32
          },
          {
            "name": "E",
            "type": 19
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 50,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 51
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 51
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 51,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 52
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 19
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
            "type": 52
          },
          {
            "name": "E",
            "type": 19
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 52,
      "type": {
        "def": {
          "sequence": {
            "type": 16
          }
        }
      }
    },
    {
      "id": 53,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 9
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 9
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
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
                    "type": 55
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 55
          },
          {
            "name": "E",
            "type": 14
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
          "sequence": {
            "type": 56
          }
        }
      }
    },
    {
      "id": 56,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "index",
                "type": 7,
                "typeName": "i32"
              },
              {
                "name": "fee_growth_outside_x",
                "type": 25,
                "typeName": "FeeGrowth"
              },
              {
                "name": "fee_growth_outside_y",
                "type": 25,
                "typeName": "FeeGrowth"
              },
              {
                "name": "seconds_outside",
                "type": 4,
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
                    "type": 14
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
            "type": 14
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
          "sequence": {
            "type": 59
          }
        }
      }
    },
    {
      "id": 59,
      "type": {
        "def": {
          "tuple": [
            5,
            4
          ]
        }
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
                    "type": 14
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
            "type": 14
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
          "sequence": {
            "type": 62
          }
        }
      }
    },
    {
      "id": 62,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "index",
                "type": 7,
                "typeName": "i32"
              },
              {
                "name": "liquidity_change",
                "type": 20,
                "typeName": "Liquidity"
              },
              {
                "name": "sign",
                "type": 8,
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
      "id": 63,
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
                    "type": 14
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
            "type": 14
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
          "sequence": {
            "type": 7
          }
        }
      }
    },
    {
      "id": 65,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 2,
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
      "id": 66,
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
  "version": "4"
}`
