import {
  Bytes,
  Option,
  SubmittableResult,
  TypeDefInfo,
  TypeRegistry,
  map,
  packageInfo,
  packageInfo2,
  toPromiseMethod,
  toRxMethod,
  toV1
} from "./chunk-G7TA644J.js";
import "./chunk-SZQH54EY.js";
import {
  randomAsU8a
} from "./chunk-VKHELKC5.js";
import {
  BN_HUNDRED,
  BN_ONE,
  BN_ZERO,
  assertReturn,
  bnToBn,
  compactAddLength,
  compactStripLength,
  detectPackage,
  import_bn,
  isBn,
  isFunction,
  isNumber,
  isObject,
  isRiscV,
  isString,
  isUndefined,
  isWasm,
  logger,
  objectSpread,
  stringCamelCase,
  stringify,
  u8aConcat,
  u8aToHex,
  u8aToU8a
} from "./chunk-QMLFDZYS.js";
import {
  __publicField
} from "./chunk-624QZG55.js";

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/packageInfo.js
var packageInfo3 = { name: "@polkadot/api-contract", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "15.0.1" };

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/packageDetect.js
detectPackage(packageInfo3, null, [packageInfo, packageInfo2]);

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/Abi/toV1.js
function v0ToV1Names(all) {
  return all.map((e) => objectSpread({}, e, {
    name: Array.isArray(e.name) ? e.name : [e.name]
  }));
}
function v0ToV1(registry, v0) {
  if (!v0.metadataVersion.length) {
    throw new Error("Invalid format for V0 (detected) contract metadata");
  }
  return registry.createType("ContractMetadataV1", objectSpread({}, v0, {
    spec: objectSpread({}, v0.spec, {
      constructors: v0ToV1Names(v0.spec.constructors),
      messages: v0ToV1Names(v0.spec.messages)
    }),
    types: toV1(registry, v0.types)
  }));
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/Abi/toV2.js
var ARG_TYPES = {
  ContractConstructorSpec: "ContractMessageParamSpecV2",
  ContractEventSpec: "ContractEventParamSpecV2",
  ContractMessageSpec: "ContractMessageParamSpecV2"
};
function v1ToV2Label(entry) {
  return objectSpread({}, entry, {
    label: Array.isArray(entry.name) ? entry.name.join("::") : entry.name
  });
}
function v1ToV2Labels(registry, outType, all) {
  return all.map((e) => registry.createType(`${outType}V2`, objectSpread(v1ToV2Label(e), {
    args: e.args.map((a) => registry.createType(ARG_TYPES[outType], v1ToV2Label(a)))
  })));
}
function v1ToV2(registry, v1) {
  return registry.createType("ContractMetadataV2", objectSpread({}, v1, {
    spec: objectSpread({}, v1.spec, {
      constructors: v1ToV2Labels(registry, "ContractConstructorSpec", v1.spec.constructors),
      events: v1ToV2Labels(registry, "ContractEventSpec", v1.spec.events),
      messages: v1ToV2Labels(registry, "ContractMessageSpec", v1.spec.messages)
    })
  }));
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/Abi/toV3.js
function v2ToV3(registry, v2) {
  return registry.createType("ContractMetadataV3", objectSpread({}, v2, {
    spec: objectSpread({}, v2.spec, {
      constructors: v2.spec.constructors.map((c) => (
        // V3 introduces the payable flag on constructors, for <V3, it is always true
        registry.createType("ContractConstructorSpecV3", objectSpread({}, c, { payable: true }))
      ))
    })
  }));
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/Abi/toV4.js
function v3ToV4(registry, v3) {
  return registry.createType("ContractMetadataV4", objectSpread({}, v3, {
    spec: objectSpread({}, v3.spec, {
      constructors: v3.spec.constructors.map((c) => registry.createType("ContractConstructorSpecV4", objectSpread({}, c))),
      messages: v3.spec.messages.map((m) => registry.createType("ContractMessageSpecV3", objectSpread({}, m)))
    }),
    version: registry.createType("Text", "4")
  }));
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/Abi/toLatestCompatible.js
var enumVersions = ["V5", "V4", "V3", "V2", "V1"];
function createConverter(next, step) {
  return (registry, input) => next(registry, step(registry, input));
}
function v5ToLatestCompatible(_registry, v5) {
  return v5;
}
function v4ToLatestCompatible(_registry, v4) {
  return v4;
}
var v3ToLatestCompatible = createConverter(v4ToLatestCompatible, v3ToV4);
var v2ToLatestCompatible = createConverter(v3ToLatestCompatible, v2ToV3);
var v1ToLatestCompatible = createConverter(v2ToLatestCompatible, v1ToV2);
var v0ToLatestCompatible = createConverter(v1ToLatestCompatible, v0ToV1);
var convertVersions = [
  ["V5", v5ToLatestCompatible],
  ["V4", v4ToLatestCompatible],
  ["V3", v3ToLatestCompatible],
  ["V2", v2ToLatestCompatible],
  ["V1", v1ToLatestCompatible],
  ["V0", v0ToLatestCompatible]
];

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/Abi/index.js
var l = logger("Abi");
var PRIMITIVE_ALWAYS = ["AccountId", "AccountIndex", "Address", "Balance"];
function findMessage(list, messageOrId) {
  const message = isNumber(messageOrId) ? list[messageOrId] : isString(messageOrId) ? list.find(({ identifier }) => [identifier, stringCamelCase(identifier)].includes(messageOrId.toString())) : messageOrId;
  return assertReturn(message, () => `Attempted to call an invalid contract interface, ${stringify(messageOrId)}`);
}
function getMetadata(registry, json) {
  const vx = enumVersions.find((v) => isObject(json[v]));
  const jsonVersion = json.version;
  if (!vx && jsonVersion && !enumVersions.find((v) => v === `V${jsonVersion}`)) {
    throw new Error(`Unable to handle version ${jsonVersion}`);
  }
  const metadata = registry.createType("ContractMetadata", vx ? { [vx]: json[vx] } : jsonVersion ? { [`V${jsonVersion}`]: json } : { V0: json });
  const converter = convertVersions.find(([v]) => metadata[`is${v}`]);
  if (!converter) {
    throw new Error(`Unable to convert ABI with version ${metadata.type} to a supported version`);
  }
  const upgradedMetadata = converter[1](registry, metadata[`as${converter[0]}`]);
  return upgradedMetadata;
}
function parseJson(json, chainProperties) {
  const registry = new TypeRegistry();
  const info = registry.createType("ContractProjectInfo", json);
  const metadata = getMetadata(registry, json);
  const lookup = registry.createType("PortableRegistry", { types: metadata.types }, true);
  registry.setLookup(lookup);
  if (chainProperties) {
    registry.setChainProperties(chainProperties);
  }
  lookup.types.forEach(({ id }) => lookup.getTypeDef(id));
  return [json, registry, metadata, info];
}
function isTypeSpec(value) {
  return !!value && value instanceof Map && !isUndefined(value.type) && !isUndefined(value.displayName);
}
function isOption(value) {
  return !!value && value instanceof Option;
}
var Abi = class {
  constructor(abiJson, chainProperties) {
    __publicField(this, "events");
    __publicField(this, "constructors");
    __publicField(this, "info");
    __publicField(this, "json");
    __publicField(this, "messages");
    __publicField(this, "metadata");
    __publicField(this, "registry");
    __publicField(this, "environment", /* @__PURE__ */ new Map());
    __publicField(this, "__internal__decodeEventV5", (record) => {
      const signatureTopic = record.topics[0];
      const data = record.event.data[1];
      if (signatureTopic) {
        const event = this.events.find((e) => e.signatureTopic !== void 0 && e.signatureTopic !== null && e.signatureTopic === signatureTopic.toHex());
        if (event) {
          return event.fromU8a(data);
        }
      }
      const amountOfTopics = record.topics.length;
      const potentialEvents = this.events.filter((e) => {
        if (e.signatureTopic !== null && e.signatureTopic !== void 0) {
          return false;
        }
        const amountIndexed = e.args.filter((a) => a.indexed).length;
        if (amountIndexed !== amountOfTopics) {
          return false;
        }
        return true;
      });
      if (potentialEvents.length === 1) {
        return potentialEvents[0].fromU8a(data);
      }
      throw new Error("Unable to determine event");
    });
    __publicField(this, "__internal__decodeEventV4", (record) => {
      const data = record.event.data[1];
      const index = data[0];
      const event = this.events[index];
      if (!event) {
        throw new Error(`Unable to find event with index ${index}`);
      }
      return event.fromU8a(data.subarray(1));
    });
    __publicField(this, "__internal__createArgs", (args, spec) => {
      return args.map(({ label, type }, index) => {
        try {
          if (!isObject(type)) {
            throw new Error("Invalid type definition found");
          }
          const displayName = type.displayName.length ? type.displayName[type.displayName.length - 1].toString() : void 0;
          const camelName = stringCamelCase(label);
          if (displayName && PRIMITIVE_ALWAYS.includes(displayName)) {
            return {
              name: camelName,
              type: {
                info: TypeDefInfo.Plain,
                type: displayName
              }
            };
          }
          const typeDef = this.registry.lookup.getTypeDef(type.type);
          return {
            name: camelName,
            type: displayName && !typeDef.type.startsWith(displayName) ? { displayName, ...typeDef } : typeDef
          };
        } catch (error) {
          l.error(`Error expanding argument ${index} in ${stringify(spec)}`);
          throw error;
        }
      });
    });
    __publicField(this, "__internal__createMessageParams", (args, spec) => {
      return this.__internal__createArgs(args, spec);
    });
    __publicField(this, "__internal__createEventParams", (args, spec) => {
      const params = this.__internal__createArgs(args, spec);
      return params.map((p, index) => ({ ...p, indexed: args[index].indexed.toPrimitive() }));
    });
    __publicField(this, "__internal__createEvent", (index) => {
      switch (this.metadata.version.toString()) {
        case "4":
          return this.__internal__createEventV4(this.metadata.spec.events[index], index);
        default:
          return this.__internal__createEventV5(this.metadata.spec.events[index], index);
      }
    });
    __publicField(this, "__internal__createEventV5", (spec, index) => {
      const args = this.__internal__createEventParams(spec.args, spec);
      const event = {
        args,
        docs: spec.docs.map((d) => d.toString()),
        fromU8a: (data) => ({
          args: this.__internal__decodeArgs(args, data),
          event
        }),
        identifier: [spec.module_path, spec.label].join("::"),
        index,
        signatureTopic: spec.signature_topic.isSome ? spec.signature_topic.unwrap().toHex() : null
      };
      return event;
    });
    __publicField(this, "__internal__createEventV4", (spec, index) => {
      const args = this.__internal__createEventParams(spec.args, spec);
      const event = {
        args,
        docs: spec.docs.map((d) => d.toString()),
        fromU8a: (data) => ({
          args: this.__internal__decodeArgs(args, data),
          event
        }),
        identifier: spec.label.toString(),
        index
      };
      return event;
    });
    __publicField(this, "__internal__createMessage", (spec, index, add = {}) => {
      const args = this.__internal__createMessageParams(spec.args, spec);
      const identifier = spec.label.toString();
      const message = {
        ...add,
        args,
        docs: spec.docs.map((d) => d.toString()),
        fromU8a: (data) => ({
          args: this.__internal__decodeArgs(args, data),
          message
        }),
        identifier,
        index,
        isDefault: spec.default.isTrue,
        method: stringCamelCase(identifier),
        path: identifier.split("::").map((s) => stringCamelCase(s)),
        selector: spec.selector,
        toU8a: (params) => this.__internal__encodeMessageArgs(spec, args, params)
      };
      return message;
    });
    __publicField(this, "__internal__decodeArgs", (args, data) => {
      let offset = 0;
      return args.map(({ type: { lookupName, type } }) => {
        const value = this.registry.createType(lookupName || type, data.subarray(offset));
        offset += value.encodedLength;
        return value;
      });
    });
    __publicField(this, "__internal__decodeMessage", (type, list, data) => {
      const [, trimmed] = compactStripLength(data);
      const selector = trimmed.subarray(0, 4);
      const message = list.find((m) => m.selector.eq(selector));
      if (!message) {
        throw new Error(`Unable to find ${type} with selector ${u8aToHex(selector)}`);
      }
      return message.fromU8a(trimmed.subarray(4));
    });
    __publicField(this, "__internal__encodeMessageArgs", ({ label, selector }, args, data) => {
      if (data.length !== args.length) {
        throw new Error(`Expected ${args.length} arguments to contract message '${label.toString()}', found ${data.length}`);
      }
      return compactAddLength(u8aConcat(this.registry.createType("ContractSelector", selector).toU8a(), ...args.map(({ type: { lookupName, type } }, index) => this.registry.createType(lookupName || type, data[index]).toU8a())));
    });
    [this.json, this.registry, this.metadata, this.info] = parseJson(isString(abiJson) ? JSON.parse(abiJson) : abiJson, chainProperties);
    this.constructors = this.metadata.spec.constructors.map((spec, index) => this.__internal__createMessage(spec, index, {
      isConstructor: true,
      isDefault: spec.default.isTrue,
      isPayable: spec.payable.isTrue,
      returnType: spec.returnType.isSome ? this.registry.lookup.getTypeDef(spec.returnType.unwrap().type) : null
    }));
    this.events = this.metadata.spec.events.map((_, index) => this.__internal__createEvent(index));
    this.messages = this.metadata.spec.messages.map((spec, index) => this.__internal__createMessage(spec, index, {
      isDefault: spec.default.isTrue,
      isMutating: spec.mutates.isTrue,
      isPayable: spec.payable.isTrue,
      returnType: spec.returnType.isSome ? this.registry.lookup.getTypeDef(spec.returnType.unwrap().type) : null
    }));
    for (const [key, opt] of this.metadata.spec.environment.entries()) {
      if (isOption(opt)) {
        if (opt.isSome) {
          const value = opt.unwrap();
          if (isBn(value)) {
            this.environment.set(key, value);
          } else if (isTypeSpec(value)) {
            this.environment.set(key, this.registry.lookup.getTypeDef(value.type));
          } else {
            throw new Error(`Invalid environment definition for ${key}:: Expected either Number or ContractTypeSpec`);
          }
        }
      } else {
        throw new Error(`Expected Option<*> definition for ${key} in ContractEnvironment`);
      }
    }
  }
  /**
   * Warning: Unstable API, bound to change
   */
  decodeEvent(record) {
    switch (this.metadata.version.toString()) {
      case "4":
        return this.__internal__decodeEventV4(record);
      default:
        return this.__internal__decodeEventV5(record);
    }
  }
  /**
   * Warning: Unstable API, bound to change
   */
  decodeConstructor(data) {
    return this.__internal__decodeMessage("message", this.constructors, data);
  }
  /**
   * Warning: Unstable API, bound to change
   */
  decodeMessage(data) {
    return this.__internal__decodeMessage("message", this.messages, data);
  }
  findConstructor(constructorOrId) {
    return findMessage(this.constructors, constructorOrId);
  }
  findMessage(messageOrId) {
    return findMessage(this.messages, messageOrId);
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/util.js
function applyOnEvent(result, types, fn) {
  if (result.isInBlock || result.isFinalized) {
    const records = result.filterRecords("contracts", types);
    if (records.length) {
      return fn(records);
    }
  }
  return void 0;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/base/Base.js
var Base = class {
  constructor(api, abi, decorateMethod) {
    __publicField(this, "abi");
    __publicField(this, "api");
    __publicField(this, "_decorateMethod");
    __publicField(this, "_isWeightV1");
    if (!api || !api.isConnected || !api.tx) {
      throw new Error("Your API has not been initialized correctly and is not connected to a chain");
    } else if (!api.tx.contracts || !isFunction(api.tx.contracts.instantiateWithCode) || api.tx.contracts.instantiateWithCode.meta.args.length !== 6) {
      throw new Error("The runtime does not expose api.tx.contracts.instantiateWithCode with storageDepositLimit");
    } else if (!api.call.contractsApi || !isFunction(api.call.contractsApi.call)) {
      throw new Error("Your runtime does not expose the api.call.contractsApi.call runtime interfaces");
    }
    this.abi = abi instanceof Abi ? abi : new Abi(abi, api.registry.getChainProperties());
    this.api = api;
    this._decorateMethod = decorateMethod;
    this._isWeightV1 = !api.registry.createType("Weight").proofSize;
  }
  get registry() {
    return this.api.registry;
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/base/util.js
var EMPTY_SALT = new Uint8Array();
function withMeta(meta, creator) {
  creator.meta = meta;
  return creator;
}
function createBluePrintTx(meta, fn) {
  return withMeta(meta, (options, ...params) => fn(options, params));
}
function encodeSalt(salt = randomAsU8a()) {
  return salt instanceof Bytes ? salt : (salt == null ? void 0 : salt.length) ? compactAddLength(u8aToU8a(salt)) : EMPTY_SALT;
}
function convertWeight(weight) {
  const [refTime, proofSize] = isWeightV2(weight) ? [weight.refTime.toBn(), weight.proofSize.toBn()] : [bnToBn(weight), void 0];
  return {
    v1Weight: refTime,
    v2Weight: { proofSize, refTime }
  };
}
function isWeightV2(weight) {
  return !!weight.proofSize;
}

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/base/Contract.js
var MAX_CALL_GAS = new import_bn.default(5e12).isub(BN_ONE);
var l2 = logger("Contract");
function createQuery(meta, fn) {
  return withMeta(meta, (origin, options, ...params) => fn(origin, options, params));
}
function createTx(meta, fn) {
  return withMeta(meta, (options, ...params) => fn(options, params));
}
var ContractSubmittableResult = class extends SubmittableResult {
  constructor(result, contractEvents) {
    super(result);
    __publicField(this, "contractEvents");
    this.contractEvents = contractEvents;
  }
};
var Contract = class extends Base {
  constructor(api, abi, address, decorateMethod) {
    super(api, abi, decorateMethod);
    /**
     * @description The on-chain address for this contract
     */
    __publicField(this, "address");
    __publicField(this, "__internal__query", {});
    __publicField(this, "__internal__tx", {});
    __publicField(this, "__internal__getGas", (_gasLimit, isCall = false) => {
      const weight = convertWeight(_gasLimit);
      if (weight.v1Weight.gt(BN_ZERO)) {
        return weight;
      }
      return convertWeight(isCall ? MAX_CALL_GAS : convertWeight(this.api.consts.system.blockWeights ? this.api.consts.system.blockWeights.maxBlock : this.api.consts.system["maximumBlockWeight"]).v1Weight.muln(64).div(BN_HUNDRED));
    });
    __publicField(this, "__internal__exec", (messageOrId, { gasLimit = BN_ZERO, storageDepositLimit = null, value = BN_ZERO }, params) => {
      return this.api.tx.contracts.call(
        this.address,
        value,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore jiggle v1 weights, metadata points to latest
        this._isWeightV1 ? convertWeight(gasLimit).v1Weight : convertWeight(gasLimit).v2Weight,
        storageDepositLimit,
        this.abi.findMessage(messageOrId).toU8a(params)
      ).withResultTransform((result) => (
        // ContractEmitted is the current generation, ContractExecution is the previous generation
        new ContractSubmittableResult(result, applyOnEvent(result, ["ContractEmitted", "ContractExecution"], (records) => records.map((record) => {
          try {
            return this.abi.decodeEvent(record);
          } catch (error) {
            l2.error(`Unable to decode contract event: ${error.message}`);
            return null;
          }
        }).filter((decoded) => !!decoded)))
      ));
    });
    __publicField(this, "__internal__read", (messageOrId, { gasLimit = BN_ZERO, storageDepositLimit = null, value = BN_ZERO }, params) => {
      const message = this.abi.findMessage(messageOrId);
      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        send: this._decorateMethod((origin) => this.api.rx.call.contractsApi.call(
          origin,
          this.address,
          value,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore jiggle v1 weights, metadata points to latest
          this._isWeightV1 ? this.__internal__getGas(gasLimit, true).v1Weight : this.__internal__getGas(gasLimit, true).v2Weight,
          storageDepositLimit,
          message.toU8a(params)
        ).pipe(map(({ debugMessage, gasConsumed, gasRequired, result, storageDeposit }) => ({
          debugMessage,
          gasConsumed,
          gasRequired: gasRequired && !convertWeight(gasRequired).v1Weight.isZero() ? gasRequired : gasConsumed,
          output: result.isOk && message.returnType ? this.abi.registry.createTypeUnsafe(message.returnType.lookupName || message.returnType.type, [result.asOk.data.toU8a(true)], { isPedantic: true }) : null,
          result,
          storageDeposit
        }))))
      };
    });
    this.address = this.registry.createType("AccountId", address);
    this.abi.messages.forEach((m) => {
      if (isUndefined(this.__internal__tx[m.method])) {
        this.__internal__tx[m.method] = createTx(m, (o, p) => this.__internal__exec(m, o, p));
      }
      if (isUndefined(this.__internal__query[m.method])) {
        this.__internal__query[m.method] = createQuery(m, (f, o, p) => this.__internal__read(m, o, p).send(f));
      }
    });
  }
  get query() {
    return this.__internal__query;
  }
  get tx() {
    return this.__internal__tx;
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/base/Blueprint.js
var BlueprintSubmittableResult = class extends SubmittableResult {
  constructor(result, contract) {
    super(result);
    __publicField(this, "contract");
    this.contract = contract;
  }
};
var Blueprint = class extends Base {
  constructor(api, abi, codeHash, decorateMethod) {
    super(api, abi, decorateMethod);
    /**
     * @description The on-chain code hash for this blueprint
     */
    __publicField(this, "codeHash");
    __publicField(this, "__internal__tx", {});
    __publicField(this, "__internal__deploy", (constructorOrId, { gasLimit = BN_ZERO, salt, storageDepositLimit = null, value = BN_ZERO }, params) => {
      return this.api.tx.contracts.instantiate(
        value,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore jiggle v1 weights, metadata points to latest
        this._isWeightV1 ? convertWeight(gasLimit).v1Weight : convertWeight(gasLimit).v2Weight,
        storageDepositLimit,
        this.codeHash,
        this.abi.findConstructor(constructorOrId).toU8a(params),
        encodeSalt(salt)
      ).withResultTransform((result) => new BlueprintSubmittableResult(result, applyOnEvent(result, ["Instantiated"], ([record]) => new Contract(this.api, this.abi, record.event.data[1], this._decorateMethod))));
    });
    this.codeHash = this.registry.createType("Hash", codeHash);
    this.abi.constructors.forEach((c) => {
      if (isUndefined(this.__internal__tx[c.method])) {
        this.__internal__tx[c.method] = createBluePrintTx(c, (o, p) => this.__internal__deploy(c, o, p));
      }
    });
  }
  get tx() {
    return this.__internal__tx;
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/base/Code.js
var CodeSubmittableResult = class extends SubmittableResult {
  constructor(result, blueprint, contract) {
    super(result);
    __publicField(this, "blueprint");
    __publicField(this, "contract");
    this.blueprint = blueprint;
    this.contract = contract;
  }
};
function isValidCode(code) {
  return isWasm(code) || isRiscV(code);
}
var Code = class extends Base {
  constructor(api, abi, wasm, decorateMethod) {
    super(api, abi, decorateMethod);
    __publicField(this, "code");
    __publicField(this, "__internal__tx", {});
    __publicField(this, "__internal__instantiate", (constructorOrId, { gasLimit = BN_ZERO, salt, storageDepositLimit = null, value = BN_ZERO }, params) => {
      return this.api.tx.contracts.instantiateWithCode(
        value,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore jiggle v1 weights, metadata points to latest
        this._isWeightV1 ? convertWeight(gasLimit).v1Weight : convertWeight(gasLimit).v2Weight,
        storageDepositLimit,
        compactAddLength(this.code),
        this.abi.findConstructor(constructorOrId).toU8a(params),
        encodeSalt(salt)
      ).withResultTransform((result) => new CodeSubmittableResult(result, ...applyOnEvent(result, ["CodeStored", "Instantiated"], (records) => records.reduce(([blueprint, contract], { event }) => this.api.events.contracts.Instantiated.is(event) ? [blueprint, new Contract(this.api, this.abi, event.data[1], this._decorateMethod)] : this.api.events.contracts.CodeStored.is(event) ? [new Blueprint(this.api, this.abi, event.data[0], this._decorateMethod), contract] : [blueprint, contract], [void 0, void 0])) || [void 0, void 0]));
    });
    this.code = isValidCode(this.abi.info.source.wasm) ? this.abi.info.source.wasm : u8aToU8a(wasm);
    if (!isValidCode(this.code)) {
      throw new Error("Invalid code provided");
    }
    this.abi.constructors.forEach((c) => {
      if (isUndefined(this.__internal__tx[c.method])) {
        this.__internal__tx[c.method] = createBluePrintTx(c, (o, p) => this.__internal__instantiate(c, o, p));
      }
    });
  }
  get tx() {
    return this.__internal__tx;
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/promise/index.js
var BlueprintPromise = class extends Blueprint {
  constructor(api, abi, codeHash) {
    super(api, abi, codeHash, toPromiseMethod);
  }
};
var CodePromise = class extends Code {
  constructor(api, abi, wasm) {
    super(api, abi, wasm, toPromiseMethod);
  }
};
var ContractPromise = class extends Contract {
  constructor(api, abi, address) {
    super(api, abi, address, toPromiseMethod);
  }
};

// ../../../../../../Users/daily/Desktop/d9/boka/node_modules/@polkadot/api-contract/rx/index.js
var BlueprintRx = class extends Blueprint {
  constructor(api, abi, codeHash) {
    super(api, abi, codeHash, toRxMethod);
  }
};
var CodeRx = class extends Code {
  constructor(api, abi, wasm) {
    super(api, abi, wasm, toRxMethod);
  }
};
var ContractRx = class extends Contract {
  constructor(api, abi, address) {
    super(api, abi, address, toRxMethod);
  }
};
export {
  Abi,
  BlueprintPromise,
  BlueprintRx,
  CodePromise,
  CodeRx,
  ContractPromise,
  ContractRx,
  packageInfo3 as packageInfo
};
//# sourceMappingURL=@polkadot_api-contract.js.map
