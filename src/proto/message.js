/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ChatMessage = (function() {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {Array.<ChatMessage.IUserMessage>|null} [userMessages] ChatMessage userMessages
     * @property {ChatMessage.IInstructions|null} [instructions] ChatMessage instructions
     * @property {ChatMessage.IModel|null} [model] ChatMessage model
     * @property {number|null} [unknown13] ChatMessage unknown13
     * @property {string|null} [conversationId] ChatMessage conversationId
     * @property {number|null} [unknown16] ChatMessage unknown16
     * @property {number|null} [unknown29] ChatMessage unknown29
     * @property {number|null} [unknown31] ChatMessage unknown31
     */

    /**
     * Constructs a new ChatMessage.
     * @exports ChatMessage
     * @classdesc Represents a ChatMessage.
     * @implements IChatMessage
     * @constructor
     * @param {IChatMessage=} [properties] Properties to set
     */
    function ChatMessage(properties) {
        this.userMessages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatMessage userMessages.
     * @member {Array.<ChatMessage.IUserMessage>} userMessages
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.userMessages = $util.emptyArray;

    /**
     * ChatMessage instructions.
     * @member {ChatMessage.IInstructions|null|undefined} instructions
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.instructions = null;

    /**
     * ChatMessage model.
     * @member {ChatMessage.IModel|null|undefined} model
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.model = null;

    /**
     * ChatMessage unknown13.
     * @member {number} unknown13
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown13 = 0;

    /**
     * ChatMessage conversationId.
     * @member {string} conversationId
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.conversationId = "";

    /**
     * ChatMessage unknown16.
     * @member {number} unknown16
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown16 = 0;

    /**
     * ChatMessage unknown29.
     * @member {number} unknown29
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown29 = 0;

    /**
     * ChatMessage unknown31.
     * @member {number} unknown31
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown31 = 0;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @function create
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage=} [properties] Properties to set
     * @returns {ChatMessage} ChatMessage instance
     */
    ChatMessage.create = function create(properties) {
        return new ChatMessage(properties);
    };

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encode
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userMessages != null && message.userMessages.length)
            for (var i = 0; i < message.userMessages.length; ++i)
                $root.ChatMessage.UserMessage.encode(message.userMessages[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.instructions != null && Object.hasOwnProperty.call(message, "instructions"))
            $root.ChatMessage.Instructions.encode(message.instructions, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.model != null && Object.hasOwnProperty.call(message, "model"))
            $root.ChatMessage.Model.encode(message.model, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.unknown13 != null && Object.hasOwnProperty.call(message, "unknown13"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.unknown13);
        if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.conversationId);
        if (message.unknown16 != null && Object.hasOwnProperty.call(message, "unknown16"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.unknown16);
        if (message.unknown29 != null && Object.hasOwnProperty.call(message, "unknown29"))
            writer.uint32(/* id 29, wireType 0 =*/232).int32(message.unknown29);
        if (message.unknown31 != null && Object.hasOwnProperty.call(message, "unknown31"))
            writer.uint32(/* id 31, wireType 0 =*/248).int32(message.unknown31);
        return writer;
    };

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    if (!(message.userMessages && message.userMessages.length))
                        message.userMessages = [];
                    message.userMessages.push($root.ChatMessage.UserMessage.decode(reader, reader.uint32()));
                    break;
                }
            case 4: {
                    message.instructions = $root.ChatMessage.Instructions.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.model = $root.ChatMessage.Model.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.unknown13 = reader.int32();
                    break;
                }
            case 15: {
                    message.conversationId = reader.string();
                    break;
                }
            case 16: {
                    message.unknown16 = reader.int32();
                    break;
                }
            case 29: {
                    message.unknown29 = reader.int32();
                    break;
                }
            case 31: {
                    message.unknown31 = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatMessage message.
     * @function verify
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userMessages != null && message.hasOwnProperty("userMessages")) {
            if (!Array.isArray(message.userMessages))
                return "userMessages: array expected";
            for (var i = 0; i < message.userMessages.length; ++i) {
                var error = $root.ChatMessage.UserMessage.verify(message.userMessages[i]);
                if (error)
                    return "userMessages." + error;
            }
        }
        if (message.instructions != null && message.hasOwnProperty("instructions")) {
            var error = $root.ChatMessage.Instructions.verify(message.instructions);
            if (error)
                return "instructions." + error;
        }
        if (message.model != null && message.hasOwnProperty("model")) {
            var error = $root.ChatMessage.Model.verify(message.model);
            if (error)
                return "model." + error;
        }
        if (message.unknown13 != null && message.hasOwnProperty("unknown13"))
            if (!$util.isInteger(message.unknown13))
                return "unknown13: integer expected";
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            if (!$util.isString(message.conversationId))
                return "conversationId: string expected";
        if (message.unknown16 != null && message.hasOwnProperty("unknown16"))
            if (!$util.isInteger(message.unknown16))
                return "unknown16: integer expected";
        if (message.unknown29 != null && message.hasOwnProperty("unknown29"))
            if (!$util.isInteger(message.unknown29))
                return "unknown29: integer expected";
        if (message.unknown31 != null && message.hasOwnProperty("unknown31"))
            if (!$util.isInteger(message.unknown31))
                return "unknown31: integer expected";
        return null;
    };

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatMessage} ChatMessage
     */
    ChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatMessage)
            return object;
        var message = new $root.ChatMessage();
        if (object.userMessages) {
            if (!Array.isArray(object.userMessages))
                throw TypeError(".ChatMessage.userMessages: array expected");
            message.userMessages = [];
            for (var i = 0; i < object.userMessages.length; ++i) {
                if (typeof object.userMessages[i] !== "object")
                    throw TypeError(".ChatMessage.userMessages: object expected");
                message.userMessages[i] = $root.ChatMessage.UserMessage.fromObject(object.userMessages[i]);
            }
        }
        if (object.instructions != null) {
            if (typeof object.instructions !== "object")
                throw TypeError(".ChatMessage.instructions: object expected");
            message.instructions = $root.ChatMessage.Instructions.fromObject(object.instructions);
        }
        if (object.model != null) {
            if (typeof object.model !== "object")
                throw TypeError(".ChatMessage.model: object expected");
            message.model = $root.ChatMessage.Model.fromObject(object.model);
        }
        if (object.unknown13 != null)
            message.unknown13 = object.unknown13 | 0;
        if (object.conversationId != null)
            message.conversationId = String(object.conversationId);
        if (object.unknown16 != null)
            message.unknown16 = object.unknown16 | 0;
        if (object.unknown29 != null)
            message.unknown29 = object.unknown29 | 0;
        if (object.unknown31 != null)
            message.unknown31 = object.unknown31 | 0;
        return message;
    };

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatMessage
     * @static
     * @param {ChatMessage} message ChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.userMessages = [];
        if (options.defaults) {
            object.instructions = null;
            object.model = null;
            object.unknown13 = 0;
            object.conversationId = "";
            object.unknown16 = 0;
            object.unknown29 = 0;
            object.unknown31 = 0;
        }
        if (message.userMessages && message.userMessages.length) {
            object.userMessages = [];
            for (var j = 0; j < message.userMessages.length; ++j)
                object.userMessages[j] = $root.ChatMessage.UserMessage.toObject(message.userMessages[j], options);
        }
        if (message.instructions != null && message.hasOwnProperty("instructions"))
            object.instructions = $root.ChatMessage.Instructions.toObject(message.instructions, options);
        if (message.model != null && message.hasOwnProperty("model"))
            object.model = $root.ChatMessage.Model.toObject(message.model, options);
        if (message.unknown13 != null && message.hasOwnProperty("unknown13"))
            object.unknown13 = message.unknown13;
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            object.conversationId = message.conversationId;
        if (message.unknown16 != null && message.hasOwnProperty("unknown16"))
            object.unknown16 = message.unknown16;
        if (message.unknown29 != null && message.hasOwnProperty("unknown29"))
            object.unknown29 = message.unknown29;
        if (message.unknown31 != null && message.hasOwnProperty("unknown31"))
            object.unknown31 = message.unknown31;
        return object;
    };

    /**
     * Converts this ChatMessage to JSON.
     * @function toJSON
     * @memberof ChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ChatMessage
     * @function getTypeUrl
     * @memberof ChatMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChatMessage";
    };

    ChatMessage.UserMessage = (function() {

        /**
         * Properties of a UserMessage.
         * @memberof ChatMessage
         * @interface IUserMessage
         * @property {string|null} [content] UserMessage content
         * @property {number|null} [role] UserMessage role
         * @property {string|null} [messageId] UserMessage messageId
         */

        /**
         * Constructs a new UserMessage.
         * @memberof ChatMessage
         * @classdesc Represents a UserMessage.
         * @implements IUserMessage
         * @constructor
         * @param {ChatMessage.IUserMessage=} [properties] Properties to set
         */
        function UserMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMessage content.
         * @member {string} content
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.content = "";

        /**
         * UserMessage role.
         * @member {number} role
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.role = 0;

        /**
         * UserMessage messageId.
         * @member {string} messageId
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.messageId = "";

        /**
         * Creates a new UserMessage instance using the specified properties.
         * @function create
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.IUserMessage=} [properties] Properties to set
         * @returns {ChatMessage.UserMessage} UserMessage instance
         */
        UserMessage.create = function create(properties) {
            return new UserMessage(properties);
        };

        /**
         * Encodes the specified UserMessage message. Does not implicitly {@link ChatMessage.UserMessage.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.role);
            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.messageId);
            return writer;
        };

        /**
         * Encodes the specified UserMessage message, length delimited. Does not implicitly {@link ChatMessage.UserMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.UserMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.content = reader.string();
                        break;
                    }
                case 2: {
                        message.role = reader.int32();
                        break;
                    }
                case 13: {
                        message.messageId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMessage message.
         * @function verify
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isInteger(message.role))
                    return "role: integer expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isString(message.messageId))
                    return "messageId: string expected";
            return null;
        };

        /**
         * Creates a UserMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.UserMessage} UserMessage
         */
        UserMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.UserMessage)
                return object;
            var message = new $root.ChatMessage.UserMessage();
            if (object.content != null)
                message.content = String(object.content);
            if (object.role != null)
                message.role = object.role | 0;
            if (object.messageId != null)
                message.messageId = String(object.messageId);
            return message;
        };

        /**
         * Creates a plain object from a UserMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.UserMessage} message UserMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.content = "";
                object.role = 0;
                object.messageId = "";
            }
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = message.role;
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                object.messageId = message.messageId;
            return object;
        };

        /**
         * Converts this UserMessage to JSON.
         * @function toJSON
         * @memberof ChatMessage.UserMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserMessage
         * @function getTypeUrl
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.UserMessage";
        };

        return UserMessage;
    })();

    ChatMessage.Instructions = (function() {

        /**
         * Properties of an Instructions.
         * @memberof ChatMessage
         * @interface IInstructions
         * @property {string|null} [instruction] Instructions instruction
         */

        /**
         * Constructs a new Instructions.
         * @memberof ChatMessage
         * @classdesc Represents an Instructions.
         * @implements IInstructions
         * @constructor
         * @param {ChatMessage.IInstructions=} [properties] Properties to set
         */
        function Instructions(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Instructions instruction.
         * @member {string} instruction
         * @memberof ChatMessage.Instructions
         * @instance
         */
        Instructions.prototype.instruction = "";

        /**
         * Creates a new Instructions instance using the specified properties.
         * @function create
         * @memberof ChatMessage.Instructions
         * @static
         * @param {ChatMessage.IInstructions=} [properties] Properties to set
         * @returns {ChatMessage.Instructions} Instructions instance
         */
        Instructions.create = function create(properties) {
            return new Instructions(properties);
        };

        /**
         * Encodes the specified Instructions message. Does not implicitly {@link ChatMessage.Instructions.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.Instructions
         * @static
         * @param {ChatMessage.IInstructions} message Instructions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Instructions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instruction != null && Object.hasOwnProperty.call(message, "instruction"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.instruction);
            return writer;
        };

        /**
         * Encodes the specified Instructions message, length delimited. Does not implicitly {@link ChatMessage.Instructions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.Instructions
         * @static
         * @param {ChatMessage.IInstructions} message Instructions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Instructions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Instructions message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.Instructions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.Instructions} Instructions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Instructions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.Instructions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.instruction = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Instructions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.Instructions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.Instructions} Instructions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Instructions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Instructions message.
         * @function verify
         * @memberof ChatMessage.Instructions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Instructions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                if (!$util.isString(message.instruction))
                    return "instruction: string expected";
            return null;
        };

        /**
         * Creates an Instructions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.Instructions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.Instructions} Instructions
         */
        Instructions.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.Instructions)
                return object;
            var message = new $root.ChatMessage.Instructions();
            if (object.instruction != null)
                message.instruction = String(object.instruction);
            return message;
        };

        /**
         * Creates a plain object from an Instructions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.Instructions
         * @static
         * @param {ChatMessage.Instructions} message Instructions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Instructions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.instruction = "";
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                object.instruction = message.instruction;
            return object;
        };

        /**
         * Converts this Instructions to JSON.
         * @function toJSON
         * @memberof ChatMessage.Instructions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Instructions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Instructions
         * @function getTypeUrl
         * @memberof ChatMessage.Instructions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Instructions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.Instructions";
        };

        return Instructions;
    })();

    ChatMessage.Model = (function() {

        /**
         * Properties of a Model.
         * @memberof ChatMessage
         * @interface IModel
         * @property {string|null} [name] Model name
         * @property {Uint8Array|null} [empty] Model empty
         */

        /**
         * Constructs a new Model.
         * @memberof ChatMessage
         * @classdesc Represents a Model.
         * @implements IModel
         * @constructor
         * @param {ChatMessage.IModel=} [properties] Properties to set
         */
        function Model(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Model name.
         * @member {string} name
         * @memberof ChatMessage.Model
         * @instance
         */
        Model.prototype.name = "";

        /**
         * Model empty.
         * @member {Uint8Array} empty
         * @memberof ChatMessage.Model
         * @instance
         */
        Model.prototype.empty = $util.newBuffer([]);

        /**
         * Creates a new Model instance using the specified properties.
         * @function create
         * @memberof ChatMessage.Model
         * @static
         * @param {ChatMessage.IModel=} [properties] Properties to set
         * @returns {ChatMessage.Model} Model instance
         */
        Model.create = function create(properties) {
            return new Model(properties);
        };

        /**
         * Encodes the specified Model message. Does not implicitly {@link ChatMessage.Model.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.Model
         * @static
         * @param {ChatMessage.IModel} message Model message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Model.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.empty);
            return writer;
        };

        /**
         * Encodes the specified Model message, length delimited. Does not implicitly {@link ChatMessage.Model.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.Model
         * @static
         * @param {ChatMessage.IModel} message Model message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Model.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Model message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.Model
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.Model} Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Model.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.Model();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.empty = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Model message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.Model
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.Model} Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Model.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Model message.
         * @function verify
         * @memberof ChatMessage.Model
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Model.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.empty != null && message.hasOwnProperty("empty"))
                if (!(message.empty && typeof message.empty.length === "number" || $util.isString(message.empty)))
                    return "empty: buffer expected";
            return null;
        };

        /**
         * Creates a Model message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.Model
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.Model} Model
         */
        Model.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.Model)
                return object;
            var message = new $root.ChatMessage.Model();
            if (object.name != null)
                message.name = String(object.name);
            if (object.empty != null)
                if (typeof object.empty === "string")
                    $util.base64.decode(object.empty, message.empty = $util.newBuffer($util.base64.length(object.empty)), 0);
                else if (object.empty.length >= 0)
                    message.empty = object.empty;
            return message;
        };

        /**
         * Creates a plain object from a Model message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.Model
         * @static
         * @param {ChatMessage.Model} message Model
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Model.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                if (options.bytes === String)
                    object.empty = "";
                else {
                    object.empty = [];
                    if (options.bytes !== Array)
                        object.empty = $util.newBuffer(object.empty);
                }
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.empty != null && message.hasOwnProperty("empty"))
                object.empty = options.bytes === String ? $util.base64.encode(message.empty, 0, message.empty.length) : options.bytes === Array ? Array.prototype.slice.call(message.empty) : message.empty;
            return object;
        };

        /**
         * Converts this Model to JSON.
         * @function toJSON
         * @memberof ChatMessage.Model
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Model.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Model
         * @function getTypeUrl
         * @memberof ChatMessage.Model
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Model.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.Model";
        };

        return Model;
    })();

    return ChatMessage;
})();

$root.ResMessage = (function() {

    /**
     * Properties of a ResMessage.
     * @exports IResMessage
     * @interface IResMessage
     * @property {string|null} [content] ResMessage content
     * @property {Uint8Array|null} [empty] ResMessage empty
     * @property {string|null} [prompt] ResMessage prompt
     */

    /**
     * Constructs a new ResMessage.
     * @exports ResMessage
     * @classdesc Represents a ResMessage.
     * @implements IResMessage
     * @constructor
     * @param {IResMessage=} [properties] Properties to set
     */
    function ResMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResMessage content.
     * @member {string} content
     * @memberof ResMessage
     * @instance
     */
    ResMessage.prototype.content = "";

    /**
     * ResMessage empty.
     * @member {Uint8Array} empty
     * @memberof ResMessage
     * @instance
     */
    ResMessage.prototype.empty = $util.newBuffer([]);

    /**
     * ResMessage prompt.
     * @member {string} prompt
     * @memberof ResMessage
     * @instance
     */
    ResMessage.prototype.prompt = "";

    /**
     * Creates a new ResMessage instance using the specified properties.
     * @function create
     * @memberof ResMessage
     * @static
     * @param {IResMessage=} [properties] Properties to set
     * @returns {ResMessage} ResMessage instance
     */
    ResMessage.create = function create(properties) {
        return new ResMessage(properties);
    };

    /**
     * Encodes the specified ResMessage message. Does not implicitly {@link ResMessage.verify|verify} messages.
     * @function encode
     * @memberof ResMessage
     * @static
     * @param {IResMessage} message ResMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.empty);
        if (message.prompt != null && Object.hasOwnProperty.call(message, "prompt"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.prompt);
        return writer;
    };

    /**
     * Encodes the specified ResMessage message, length delimited. Does not implicitly {@link ResMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResMessage
     * @static
     * @param {IResMessage} message ResMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ResMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResMessage} ResMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.content = reader.string();
                    break;
                }
            case 4: {
                    message.empty = reader.bytes();
                    break;
                }
            case 5: {
                    message.prompt = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResMessage} ResMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResMessage message.
     * @function verify
     * @memberof ResMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.empty != null && message.hasOwnProperty("empty"))
            if (!(message.empty && typeof message.empty.length === "number" || $util.isString(message.empty)))
                return "empty: buffer expected";
        if (message.prompt != null && message.hasOwnProperty("prompt"))
            if (!$util.isString(message.prompt))
                return "prompt: string expected";
        return null;
    };

    /**
     * Creates a ResMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResMessage} ResMessage
     */
    ResMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ResMessage)
            return object;
        var message = new $root.ResMessage();
        if (object.content != null)
            message.content = String(object.content);
        if (object.empty != null)
            if (typeof object.empty === "string")
                $util.base64.decode(object.empty, message.empty = $util.newBuffer($util.base64.length(object.empty)), 0);
            else if (object.empty.length >= 0)
                message.empty = object.empty;
        if (object.prompt != null)
            message.prompt = String(object.prompt);
        return message;
    };

    /**
     * Creates a plain object from a ResMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResMessage
     * @static
     * @param {ResMessage} message ResMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.content = "";
            if (options.bytes === String)
                object.empty = "";
            else {
                object.empty = [];
                if (options.bytes !== Array)
                    object.empty = $util.newBuffer(object.empty);
            }
            object.prompt = "";
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.empty != null && message.hasOwnProperty("empty"))
            object.empty = options.bytes === String ? $util.base64.encode(message.empty, 0, message.empty.length) : options.bytes === Array ? Array.prototype.slice.call(message.empty) : message.empty;
        if (message.prompt != null && message.hasOwnProperty("prompt"))
            object.prompt = message.prompt;
        return object;
    };

    /**
     * Converts this ResMessage to JSON.
     * @function toJSON
     * @memberof ResMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResMessage
     * @function getTypeUrl
     * @memberof ResMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResMessage";
    };

    return ResMessage;
})();

$root.AvailableModelsResponse = (function() {

    /**
     * Properties of an AvailableModelsResponse.
     * @exports IAvailableModelsResponse
     * @interface IAvailableModelsResponse
     * @property {Array.<AvailableModelsResponse.IAvailableModel>|null} [models] AvailableModelsResponse models
     * @property {Array.<string>|null} [modelNames] AvailableModelsResponse modelNames
     */

    /**
     * Constructs a new AvailableModelsResponse.
     * @exports AvailableModelsResponse
     * @classdesc Represents an AvailableModelsResponse.
     * @implements IAvailableModelsResponse
     * @constructor
     * @param {IAvailableModelsResponse=} [properties] Properties to set
     */
    function AvailableModelsResponse(properties) {
        this.models = [];
        this.modelNames = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AvailableModelsResponse models.
     * @member {Array.<AvailableModelsResponse.IAvailableModel>} models
     * @memberof AvailableModelsResponse
     * @instance
     */
    AvailableModelsResponse.prototype.models = $util.emptyArray;

    /**
     * AvailableModelsResponse modelNames.
     * @member {Array.<string>} modelNames
     * @memberof AvailableModelsResponse
     * @instance
     */
    AvailableModelsResponse.prototype.modelNames = $util.emptyArray;

    /**
     * Creates a new AvailableModelsResponse instance using the specified properties.
     * @function create
     * @memberof AvailableModelsResponse
     * @static
     * @param {IAvailableModelsResponse=} [properties] Properties to set
     * @returns {AvailableModelsResponse} AvailableModelsResponse instance
     */
    AvailableModelsResponse.create = function create(properties) {
        return new AvailableModelsResponse(properties);
    };

    /**
     * Encodes the specified AvailableModelsResponse message. Does not implicitly {@link AvailableModelsResponse.verify|verify} messages.
     * @function encode
     * @memberof AvailableModelsResponse
     * @static
     * @param {IAvailableModelsResponse} message AvailableModelsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AvailableModelsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.modelNames != null && message.modelNames.length)
            for (var i = 0; i < message.modelNames.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.modelNames[i]);
        if (message.models != null && message.models.length)
            for (var i = 0; i < message.models.length; ++i)
                $root.AvailableModelsResponse.AvailableModel.encode(message.models[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AvailableModelsResponse message, length delimited. Does not implicitly {@link AvailableModelsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AvailableModelsResponse
     * @static
     * @param {IAvailableModelsResponse} message AvailableModelsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AvailableModelsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AvailableModelsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AvailableModelsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AvailableModelsResponse} AvailableModelsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AvailableModelsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AvailableModelsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    if (!(message.models && message.models.length))
                        message.models = [];
                    message.models.push($root.AvailableModelsResponse.AvailableModel.decode(reader, reader.uint32()));
                    break;
                }
            case 1: {
                    if (!(message.modelNames && message.modelNames.length))
                        message.modelNames = [];
                    message.modelNames.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AvailableModelsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AvailableModelsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AvailableModelsResponse} AvailableModelsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AvailableModelsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AvailableModelsResponse message.
     * @function verify
     * @memberof AvailableModelsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AvailableModelsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.models != null && message.hasOwnProperty("models")) {
            if (!Array.isArray(message.models))
                return "models: array expected";
            for (var i = 0; i < message.models.length; ++i) {
                var error = $root.AvailableModelsResponse.AvailableModel.verify(message.models[i]);
                if (error)
                    return "models." + error;
            }
        }
        if (message.modelNames != null && message.hasOwnProperty("modelNames")) {
            if (!Array.isArray(message.modelNames))
                return "modelNames: array expected";
            for (var i = 0; i < message.modelNames.length; ++i)
                if (!$util.isString(message.modelNames[i]))
                    return "modelNames: string[] expected";
        }
        return null;
    };

    /**
     * Creates an AvailableModelsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AvailableModelsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AvailableModelsResponse} AvailableModelsResponse
     */
    AvailableModelsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.AvailableModelsResponse)
            return object;
        var message = new $root.AvailableModelsResponse();
        if (object.models) {
            if (!Array.isArray(object.models))
                throw TypeError(".AvailableModelsResponse.models: array expected");
            message.models = [];
            for (var i = 0; i < object.models.length; ++i) {
                if (typeof object.models[i] !== "object")
                    throw TypeError(".AvailableModelsResponse.models: object expected");
                message.models[i] = $root.AvailableModelsResponse.AvailableModel.fromObject(object.models[i]);
            }
        }
        if (object.modelNames) {
            if (!Array.isArray(object.modelNames))
                throw TypeError(".AvailableModelsResponse.modelNames: array expected");
            message.modelNames = [];
            for (var i = 0; i < object.modelNames.length; ++i)
                message.modelNames[i] = String(object.modelNames[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an AvailableModelsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AvailableModelsResponse
     * @static
     * @param {AvailableModelsResponse} message AvailableModelsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AvailableModelsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.modelNames = [];
            object.models = [];
        }
        if (message.modelNames && message.modelNames.length) {
            object.modelNames = [];
            for (var j = 0; j < message.modelNames.length; ++j)
                object.modelNames[j] = message.modelNames[j];
        }
        if (message.models && message.models.length) {
            object.models = [];
            for (var j = 0; j < message.models.length; ++j)
                object.models[j] = $root.AvailableModelsResponse.AvailableModel.toObject(message.models[j], options);
        }
        return object;
    };

    /**
     * Converts this AvailableModelsResponse to JSON.
     * @function toJSON
     * @memberof AvailableModelsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AvailableModelsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AvailableModelsResponse
     * @function getTypeUrl
     * @memberof AvailableModelsResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AvailableModelsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AvailableModelsResponse";
    };

    AvailableModelsResponse.AvailableModel = (function() {

        /**
         * Properties of an AvailableModel.
         * @memberof AvailableModelsResponse
         * @interface IAvailableModel
         * @property {string|null} [name] AvailableModel name
         * @property {boolean|null} [defaultOn] AvailableModel defaultOn
         * @property {boolean|null} [isLongContextOnly] AvailableModel isLongContextOnly
         * @property {boolean|null} [isChatOnly] AvailableModel isChatOnly
         */

        /**
         * Constructs a new AvailableModel.
         * @memberof AvailableModelsResponse
         * @classdesc Represents an AvailableModel.
         * @implements IAvailableModel
         * @constructor
         * @param {AvailableModelsResponse.IAvailableModel=} [properties] Properties to set
         */
        function AvailableModel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AvailableModel name.
         * @member {string} name
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.name = "";

        /**
         * AvailableModel defaultOn.
         * @member {boolean} defaultOn
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.defaultOn = false;

        /**
         * AvailableModel isLongContextOnly.
         * @member {boolean|null|undefined} isLongContextOnly
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.isLongContextOnly = null;

        /**
         * AvailableModel isChatOnly.
         * @member {boolean|null|undefined} isChatOnly
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.isChatOnly = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AvailableModel.prototype, "_isLongContextOnly", {
            get: $util.oneOfGetter($oneOfFields = ["isLongContextOnly"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AvailableModel.prototype, "_isChatOnly", {
            get: $util.oneOfGetter($oneOfFields = ["isChatOnly"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AvailableModel instance using the specified properties.
         * @function create
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.IAvailableModel=} [properties] Properties to set
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel instance
         */
        AvailableModel.create = function create(properties) {
            return new AvailableModel(properties);
        };

        /**
         * Encodes the specified AvailableModel message. Does not implicitly {@link AvailableModelsResponse.AvailableModel.verify|verify} messages.
         * @function encode
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.IAvailableModel} message AvailableModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AvailableModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.defaultOn != null && Object.hasOwnProperty.call(message, "defaultOn"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.defaultOn);
            if (message.isLongContextOnly != null && Object.hasOwnProperty.call(message, "isLongContextOnly"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isLongContextOnly);
            if (message.isChatOnly != null && Object.hasOwnProperty.call(message, "isChatOnly"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isChatOnly);
            return writer;
        };

        /**
         * Encodes the specified AvailableModel message, length delimited. Does not implicitly {@link AvailableModelsResponse.AvailableModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.IAvailableModel} message AvailableModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AvailableModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AvailableModel message from the specified reader or buffer.
         * @function decode
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AvailableModel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AvailableModelsResponse.AvailableModel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.defaultOn = reader.bool();
                        break;
                    }
                case 3: {
                        message.isLongContextOnly = reader.bool();
                        break;
                    }
                case 4: {
                        message.isChatOnly = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AvailableModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AvailableModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AvailableModel message.
         * @function verify
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AvailableModel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.defaultOn != null && message.hasOwnProperty("defaultOn"))
                if (typeof message.defaultOn !== "boolean")
                    return "defaultOn: boolean expected";
            if (message.isLongContextOnly != null && message.hasOwnProperty("isLongContextOnly")) {
                properties._isLongContextOnly = 1;
                if (typeof message.isLongContextOnly !== "boolean")
                    return "isLongContextOnly: boolean expected";
            }
            if (message.isChatOnly != null && message.hasOwnProperty("isChatOnly")) {
                properties._isChatOnly = 1;
                if (typeof message.isChatOnly !== "boolean")
                    return "isChatOnly: boolean expected";
            }
            return null;
        };

        /**
         * Creates an AvailableModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel
         */
        AvailableModel.fromObject = function fromObject(object) {
            if (object instanceof $root.AvailableModelsResponse.AvailableModel)
                return object;
            var message = new $root.AvailableModelsResponse.AvailableModel();
            if (object.name != null)
                message.name = String(object.name);
            if (object.defaultOn != null)
                message.defaultOn = Boolean(object.defaultOn);
            if (object.isLongContextOnly != null)
                message.isLongContextOnly = Boolean(object.isLongContextOnly);
            if (object.isChatOnly != null)
                message.isChatOnly = Boolean(object.isChatOnly);
            return message;
        };

        /**
         * Creates a plain object from an AvailableModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.AvailableModel} message AvailableModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AvailableModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.defaultOn = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.defaultOn != null && message.hasOwnProperty("defaultOn"))
                object.defaultOn = message.defaultOn;
            if (message.isLongContextOnly != null && message.hasOwnProperty("isLongContextOnly")) {
                object.isLongContextOnly = message.isLongContextOnly;
                if (options.oneofs)
                    object._isLongContextOnly = "isLongContextOnly";
            }
            if (message.isChatOnly != null && message.hasOwnProperty("isChatOnly")) {
                object.isChatOnly = message.isChatOnly;
                if (options.oneofs)
                    object._isChatOnly = "isChatOnly";
            }
            return object;
        };

        /**
         * Converts this AvailableModel to JSON.
         * @function toJSON
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AvailableModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AvailableModel
         * @function getTypeUrl
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AvailableModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AvailableModelsResponse.AvailableModel";
        };

        return AvailableModel;
    })();

    return AvailableModelsResponse;
})();

module.exports = $root;
