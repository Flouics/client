/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!


goog.provide('proto.game.AnnounceCardsRequest');
goog.provide('proto.game.AnnounceCardsResponse');
goog.provide('proto.game.Card');
goog.provide('proto.game.CheckGameUserBalanceRequest');
goog.provide('proto.game.CheckGameUserBalanceResponse');
goog.provide('proto.game.CostGoldResponse');
goog.provide('proto.game.CreateRoomRequest');
goog.provide('proto.game.CreateRoomResponse');
goog.provide('proto.game.DealResponse');
goog.provide('proto.game.DiscardRequest');
goog.provide('proto.game.DiscardResponse');
goog.provide('proto.game.DismissRoomRequest');
goog.provide('proto.game.DismissRoomResponse');
goog.provide('proto.game.DismissRoomWebRequest');
goog.provide('proto.game.DismissRoomWebResponse');
goog.provide('proto.game.EnterHallRequest');
goog.provide('proto.game.EnterHallResponse');
goog.provide('proto.game.EnterMatchViewRequest');
goog.provide('proto.game.EnterMatchViewResponse');
goog.provide('proto.game.EnterRoomOtherResponse');
goog.provide('proto.game.EnterRoomRequest');
goog.provide('proto.game.EnterRoomResponse');
goog.provide('proto.game.EnterRoomResponse.Player');
goog.provide('proto.game.EnterRoomWebResponse');
goog.provide('proto.game.ExistRoomWebRequest');
goog.provide('proto.game.ExistRoomWebResponse');
goog.provide('proto.game.ExitRoomRequest');
goog.provide('proto.game.ExitRoomResponse');
goog.provide('proto.game.ExitRoomWebResponse');
goog.provide('proto.game.GS_SettleForRoundRequest');
goog.provide('proto.game.GS_SettleForRoundRequest.PlayerData');
goog.provide('proto.game.GS_SettleForRoundResponse');
goog.provide('proto.game.GS_SettleForRoundResponse.PlayerData');
goog.provide('proto.game.GameStartResponse');
goog.provide('proto.game.GameStartWebResponse');
goog.provide('proto.game.GameStartWebResponse.PlayerData');
goog.provide('proto.game.GameStartWebResquest');
goog.provide('proto.game.GameStartWebResquest.PlayerData');
goog.provide('proto.game.GoldNotEnoughResponse');
goog.provide('proto.game.GroundLaiziResponse');
goog.provide('proto.game.HeartbeatRequest');
goog.provide('proto.game.HeartbeatResponse');
goog.provide('proto.game.JoinMatchRequest');
goog.provide('proto.game.JoinMatchResponse');
goog.provide('proto.game.JoinMatchResponse.AwardData');
goog.provide('proto.game.JoinMatchRoomResponse');
goog.provide('proto.game.JoinMatchRoomResponse.AwardData');
goog.provide('proto.game.KnockOutResponse');
goog.provide('proto.game.LimitScoreResponse');
goog.provide('proto.game.LoadBalanceWebResponse');
goog.provide('proto.game.LoadBalanceWebResponse.Unit');
goog.provide('proto.game.LoadMinusWebResponse');
goog.provide('proto.game.LoadPlusWebResponse');
goog.provide('proto.game.MaintenanceWebRequest');
goog.provide('proto.game.MaintenanceWebResponse');
goog.provide('proto.game.MatchEndResponse');
goog.provide('proto.game.MatchEndResponse.ResultData');
goog.provide('proto.game.MatchEndWebRequest');
goog.provide('proto.game.MatchEndWebResponse');
goog.provide('proto.game.MatchEndWebResponse.PlayerData');
goog.provide('proto.game.MatchPhaseResponse');
goog.provide('proto.game.MatchPlayerNumResponse');
goog.provide('proto.game.MatchReconnectResponse');
goog.provide('proto.game.MatchStartResponse');
goog.provide('proto.game.MatchStartWebRequest');
goog.provide('proto.game.MatchStartWebResponse');
goog.provide('proto.game.MatchStartWebResponse.PlayerData');
goog.provide('proto.game.MultiPhaseEndResponse');
goog.provide('proto.game.MultiPhaseStartResponse');
goog.provide('proto.game.MultipleScoreInitialResponse');
goog.provide('proto.game.MultipleScoreInitialResponse.PlayerData');
goog.provide('proto.game.MultipleScoreRequest');
goog.provide('proto.game.MultipleScoreResponse');
goog.provide('proto.game.MultipleScoreResponse.PlayerData');
goog.provide('proto.game.OnlineStatusResponse');
goog.provide('proto.game.PM_ClearMatchRequest');
goog.provide('proto.game.PlayerRankResponse');
goog.provide('proto.game.PlayerVoteRequest');
goog.provide('proto.game.PlayerVoteResponse');
goog.provide('proto.game.QuitDispatchRequest');
goog.provide('proto.game.QuitDispatchResponse');
goog.provide('proto.game.QuitMatchRequest');
goog.provide('proto.game.QuitMatchResponse');
goog.provide('proto.game.QuitMatchWebRequest');
goog.provide('proto.game.QuitMatchWebResponse');
goog.provide('proto.game.ReadyRequest');
goog.provide('proto.game.ReadyResponse');
goog.provide('proto.game.ReconnectResponse');
goog.provide('proto.game.ReconnectResponse.Player');
goog.provide('proto.game.RefundWebResponse');
goog.provide('proto.game.ReturnDispatchRequest');
goog.provide('proto.game.ReturnDispatchResponse');
goog.provide('proto.game.RobRequest');
goog.provide('proto.game.RobResponse');
goog.provide('proto.game.SettleForDrawResponse');
goog.provide('proto.game.SettleForRoomResponse');
goog.provide('proto.game.SettleForRoomResponse.PlayerData');
goog.provide('proto.game.SettleForRoundResponse');
goog.provide('proto.game.SettleForRoundResponse.PlayerData');
goog.provide('proto.game.SpeakerRequest');
goog.provide('proto.game.SpeakerResponse');
goog.provide('proto.game.SponsorVoteResponse');
goog.provide('proto.game.SynchroniseCardsResponse');
goog.provide('proto.game.UserBalanceRequest');
goog.provide('proto.game.UserBalanceResponse');
goog.provide('proto.game.WaitMatchPhaseEndResponse');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.CreateRoomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.CreateRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.CreateRoomRequest.displayName = 'proto.game.CreateRoomRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.CreateRoomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.CreateRoomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.CreateRoomRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.CreateRoomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    owner: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kwargs: jspb.Message.getFieldWithDefault(msg, 3, ""),
    roomUuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.CreateRoomRequest}
 */
proto.game.CreateRoomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.CreateRoomRequest;
  return proto.game.CreateRoomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.CreateRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.CreateRoomRequest}
 */
proto.game.CreateRoomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKwargs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.CreateRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.CreateRoomRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.CreateRoomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.CreateRoomRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getOwner();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getKwargs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getRoomUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 room_id = 1;
 * @return {number}
 */
proto.game.CreateRoomRequest.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.CreateRoomRequest.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.game.CreateRoomRequest.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.CreateRoomRequest.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string kwargs = 3;
 * @return {string}
 */
proto.game.CreateRoomRequest.prototype.getKwargs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.CreateRoomRequest.prototype.setKwargs = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string room_uuid = 4;
 * @return {string}
 */
proto.game.CreateRoomRequest.prototype.getRoomUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.game.CreateRoomRequest.prototype.setRoomUuid = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.CreateRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.CreateRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.CreateRoomResponse.displayName = 'proto.game.CreateRoomResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.CreateRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.CreateRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.CreateRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.CreateRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.CreateRoomResponse}
 */
proto.game.CreateRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.CreateRoomResponse;
  return proto.game.CreateRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.CreateRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.CreateRoomResponse}
 */
proto.game.CreateRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.CreateRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.CreateRoomResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.CreateRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.CreateRoomResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.CreateRoomResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.CreateRoomResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.EnterHallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.EnterHallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.EnterHallRequest.displayName = 'proto.game.EnterHallRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.EnterHallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.EnterHallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.EnterHallRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.EnterHallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    info: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.EnterHallRequest}
 */
proto.game.EnterHallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.EnterHallRequest;
  return proto.game.EnterHallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.EnterHallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.EnterHallRequest}
 */
proto.game.EnterHallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.EnterHallRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterHallRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.EnterHallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterHallRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getInfo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.EnterHallRequest.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.EnterHallRequest.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string info = 2;
 * @return {string}
 */
proto.game.EnterHallRequest.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.EnterHallRequest.prototype.setInfo = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.EnterHallResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.EnterHallResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.EnterHallResponse.displayName = 'proto.game.EnterHallResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.EnterHallResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.EnterHallResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.EnterHallResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.EnterHallResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.EnterHallResponse}
 */
proto.game.EnterHallResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.EnterHallResponse;
  return proto.game.EnterHallResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.EnterHallResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.EnterHallResponse}
 */
proto.game.EnterHallResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.EnterHallResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterHallResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.EnterHallResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterHallResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.EnterHallResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.EnterHallResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.EnterRoomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.EnterRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.EnterRoomRequest.displayName = 'proto.game.EnterRoomRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.EnterRoomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.EnterRoomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.EnterRoomRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.EnterRoomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: jspb.Message.getFieldWithDefault(msg, 2, ""),
    info: jspb.Message.getFieldWithDefault(msg, 3, ""),
    kwargs: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.EnterRoomRequest}
 */
proto.game.EnterRoomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.EnterRoomRequest;
  return proto.game.EnterRoomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.EnterRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.EnterRoomRequest}
 */
proto.game.EnterRoomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKwargs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.EnterRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterRoomRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.EnterRoomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterRoomRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getInfo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getKwargs();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 room_id = 1;
 * @return {number}
 */
proto.game.EnterRoomRequest.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.EnterRoomRequest.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string player = 2;
 * @return {string}
 */
proto.game.EnterRoomRequest.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.EnterRoomRequest.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string info = 3;
 * @return {string}
 */
proto.game.EnterRoomRequest.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.EnterRoomRequest.prototype.setInfo = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string kwargs = 4;
 * @return {string}
 */
proto.game.EnterRoomRequest.prototype.getKwargs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.game.EnterRoomRequest.prototype.setKwargs = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.EnterRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.EnterRoomResponse.repeatedFields_, null);
};
goog.inherits(proto.game.EnterRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.EnterRoomResponse.displayName = 'proto.game.EnterRoomResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.EnterRoomResponse.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.EnterRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.EnterRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.EnterRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.EnterRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    owner: jspb.Message.getFieldWithDefault(msg, 3, ""),
    kwargs: jspb.Message.getFieldWithDefault(msg, 4, ""),
    baseScore: jspb.Message.getFieldWithDefault(msg, 5, 0),
    playerList: jspb.Message.toObjectList(msg.getPlayerList(),
    proto.game.EnterRoomResponse.Player.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.EnterRoomResponse}
 */
proto.game.EnterRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.EnterRoomResponse;
  return proto.game.EnterRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.EnterRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.EnterRoomResponse}
 */
proto.game.EnterRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKwargs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBaseScore(value);
      break;
    case 6:
      var value = new proto.game.EnterRoomResponse.Player;
      reader.readMessage(value,proto.game.EnterRoomResponse.Player.deserializeBinaryFromReader);
      msg.addPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.EnterRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterRoomResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.EnterRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterRoomResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getOwner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getKwargs();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getBaseScore();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getPlayerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.game.EnterRoomResponse.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.EnterRoomResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.EnterRoomResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 room_id = 2;
 * @return {number}
 */
proto.game.EnterRoomResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.EnterRoomResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string owner = 3;
 * @return {string}
 */
proto.game.EnterRoomResponse.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.EnterRoomResponse.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string kwargs = 4;
 * @return {string}
 */
proto.game.EnterRoomResponse.prototype.getKwargs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.game.EnterRoomResponse.prototype.setKwargs = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 base_score = 5;
 * @return {number}
 */
proto.game.EnterRoomResponse.prototype.getBaseScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.EnterRoomResponse.prototype.setBaseScore = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * repeated Player player = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.EnterRoomResponse.Player>}
 */
proto.game.EnterRoomResponse.prototype.getPlayerList = function() {
  return /** @type{!Array.<!proto.game.EnterRoomResponse.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.EnterRoomResponse.Player, 6));
};


/** @param {!Array.<!proto.game.EnterRoomResponse.Player>} value */
proto.game.EnterRoomResponse.prototype.setPlayerList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.game.EnterRoomResponse.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.EnterRoomResponse.Player}
 */
proto.game.EnterRoomResponse.prototype.addPlayer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.game.EnterRoomResponse.Player, opt_index);
};


proto.game.EnterRoomResponse.prototype.clearPlayerList = function() {
  this.setPlayerList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.EnterRoomResponse.Player = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.EnterRoomResponse.Player, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.EnterRoomResponse.Player.displayName = 'proto.game.EnterRoomResponse.Player';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.EnterRoomResponse.Player.prototype.toObject = function(opt_includeInstance) {
  return proto.game.EnterRoomResponse.Player.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.EnterRoomResponse.Player} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.EnterRoomResponse.Player.toObject = function(includeInstance, msg) {
  var f, obj = {
    seat: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: jspb.Message.getFieldWithDefault(msg, 2, ""),
    info: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isOnline: jspb.Message.getFieldWithDefault(msg, 5, false),
    totalScore: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.EnterRoomResponse.Player}
 */
proto.game.EnterRoomResponse.Player.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.EnterRoomResponse.Player;
  return proto.game.EnterRoomResponse.Player.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.EnterRoomResponse.Player} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.EnterRoomResponse.Player}
 */
proto.game.EnterRoomResponse.Player.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeat(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOnline(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.EnterRoomResponse.Player} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterRoomResponse.Player.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.EnterRoomResponse.Player.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterRoomResponse.Player.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSeat();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getInfo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getStatus();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getIsOnline();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = this.getTotalScore();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional uint32 seat = 1;
 * @return {number}
 */
proto.game.EnterRoomResponse.Player.prototype.getSeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.EnterRoomResponse.Player.prototype.setSeat = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string player = 2;
 * @return {string}
 */
proto.game.EnterRoomResponse.Player.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.EnterRoomResponse.Player.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string info = 3;
 * @return {string}
 */
proto.game.EnterRoomResponse.Player.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.EnterRoomResponse.Player.prototype.setInfo = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 status = 4;
 * @return {number}
 */
proto.game.EnterRoomResponse.Player.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.EnterRoomResponse.Player.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bool is_online = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.game.EnterRoomResponse.Player.prototype.getIsOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.game.EnterRoomResponse.Player.prototype.setIsOnline = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int32 total_score = 6;
 * @return {number}
 */
proto.game.EnterRoomResponse.Player.prototype.getTotalScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.EnterRoomResponse.Player.prototype.setTotalScore = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.EnterRoomOtherResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.EnterRoomOtherResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.EnterRoomOtherResponse.displayName = 'proto.game.EnterRoomOtherResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.EnterRoomOtherResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.EnterRoomOtherResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.EnterRoomOtherResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.EnterRoomOtherResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: jspb.Message.getFieldWithDefault(msg, 2, ""),
    seat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    info: jspb.Message.getFieldWithDefault(msg, 4, ""),
    totalScore: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.EnterRoomOtherResponse}
 */
proto.game.EnterRoomOtherResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.EnterRoomOtherResponse;
  return proto.game.EnterRoomOtherResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.EnterRoomOtherResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.EnterRoomOtherResponse}
 */
proto.game.EnterRoomOtherResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.EnterRoomOtherResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterRoomOtherResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.EnterRoomOtherResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterRoomOtherResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getSeat();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getTotalScore();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.EnterRoomOtherResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.EnterRoomOtherResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string player = 2;
 * @return {string}
 */
proto.game.EnterRoomOtherResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.EnterRoomOtherResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 seat = 3;
 * @return {number}
 */
proto.game.EnterRoomOtherResponse.prototype.getSeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.EnterRoomOtherResponse.prototype.setSeat = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.game.EnterRoomOtherResponse.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.game.EnterRoomOtherResponse.prototype.setInfo = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int32 total_score = 5;
 * @return {number}
 */
proto.game.EnterRoomOtherResponse.prototype.getTotalScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.EnterRoomOtherResponse.prototype.setTotalScore = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.EnterRoomWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.EnterRoomWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.EnterRoomWebResponse.displayName = 'proto.game.EnterRoomWebResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.EnterRoomWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.EnterRoomWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.EnterRoomWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.EnterRoomWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    player: jspb.Message.getFieldWithDefault(msg, 3, ""),
    gameType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    serverIp: jspb.Message.getFieldWithDefault(msg, 6, ""),
    serverPort: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.EnterRoomWebResponse}
 */
proto.game.EnterRoomWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.EnterRoomWebResponse;
  return proto.game.EnterRoomWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.EnterRoomWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.EnterRoomWebResponse}
 */
proto.game.EnterRoomWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerIp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServerPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.EnterRoomWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterRoomWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.EnterRoomWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterRoomWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getGameType();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getServerIp();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getServerPort();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.EnterRoomWebResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.EnterRoomWebResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 room_id = 2;
 * @return {number}
 */
proto.game.EnterRoomWebResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.EnterRoomWebResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string player = 3;
 * @return {string}
 */
proto.game.EnterRoomWebResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.EnterRoomWebResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 game_type = 4;
 * @return {number}
 */
proto.game.EnterRoomWebResponse.prototype.getGameType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.EnterRoomWebResponse.prototype.setGameType = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 app_id = 5;
 * @return {number}
 */
proto.game.EnterRoomWebResponse.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.EnterRoomWebResponse.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string server_ip = 6;
 * @return {string}
 */
proto.game.EnterRoomWebResponse.prototype.getServerIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.game.EnterRoomWebResponse.prototype.setServerIp = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int32 server_port = 7;
 * @return {number}
 */
proto.game.EnterRoomWebResponse.prototype.getServerPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.game.EnterRoomWebResponse.prototype.setServerPort = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ExitRoomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.ExitRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ExitRoomRequest.displayName = 'proto.game.ExitRoomRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ExitRoomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ExitRoomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ExitRoomRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ExitRoomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ExitRoomRequest}
 */
proto.game.ExitRoomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ExitRoomRequest;
  return proto.game.ExitRoomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ExitRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ExitRoomRequest}
 */
proto.game.ExitRoomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ExitRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ExitRoomRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ExitRoomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ExitRoomRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.ExitRoomRequest.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.ExitRoomRequest.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ExitRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.ExitRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ExitRoomResponse.displayName = 'proto.game.ExitRoomResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ExitRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ExitRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ExitRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ExitRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isReturnDispatch: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ExitRoomResponse}
 */
proto.game.ExitRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ExitRoomResponse;
  return proto.game.ExitRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ExitRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ExitRoomResponse}
 */
proto.game.ExitRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsReturnDispatch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ExitRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ExitRoomResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ExitRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ExitRoomResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getIsReturnDispatch();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.ExitRoomResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.ExitRoomResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string player = 2;
 * @return {string}
 */
proto.game.ExitRoomResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.ExitRoomResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 is_return_dispatch = 3;
 * @return {number}
 */
proto.game.ExitRoomResponse.prototype.getIsReturnDispatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.ExitRoomResponse.prototype.setIsReturnDispatch = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ExitRoomWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.ExitRoomWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ExitRoomWebResponse.displayName = 'proto.game.ExitRoomWebResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ExitRoomWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ExitRoomWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ExitRoomWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ExitRoomWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    player: jspb.Message.getFieldWithDefault(msg, 3, ""),
    gameType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ExitRoomWebResponse}
 */
proto.game.ExitRoomWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ExitRoomWebResponse;
  return proto.game.ExitRoomWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ExitRoomWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ExitRoomWebResponse}
 */
proto.game.ExitRoomWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ExitRoomWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ExitRoomWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ExitRoomWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ExitRoomWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getGameType();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.ExitRoomWebResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.ExitRoomWebResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 room_id = 2;
 * @return {number}
 */
proto.game.ExitRoomWebResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.ExitRoomWebResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string player = 3;
 * @return {string}
 */
proto.game.ExitRoomWebResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.ExitRoomWebResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 game_type = 4;
 * @return {number}
 */
proto.game.ExitRoomWebResponse.prototype.getGameType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.ExitRoomWebResponse.prototype.setGameType = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 app_id = 5;
 * @return {number}
 */
proto.game.ExitRoomWebResponse.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.ExitRoomWebResponse.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.DismissRoomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.DismissRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.DismissRoomRequest.displayName = 'proto.game.DismissRoomRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.DismissRoomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.DismissRoomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.DismissRoomRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.DismissRoomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.DismissRoomRequest}
 */
proto.game.DismissRoomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.DismissRoomRequest;
  return proto.game.DismissRoomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.DismissRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.DismissRoomRequest}
 */
proto.game.DismissRoomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.DismissRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DismissRoomRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.DismissRoomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DismissRoomRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.DismissRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.DismissRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.DismissRoomResponse.displayName = 'proto.game.DismissRoomResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.DismissRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.DismissRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.DismissRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.DismissRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    flag: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.DismissRoomResponse}
 */
proto.game.DismissRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.DismissRoomResponse;
  return proto.game.DismissRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.DismissRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.DismissRoomResponse}
 */
proto.game.DismissRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.DismissRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DismissRoomResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.DismissRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DismissRoomResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getFlag();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.DismissRoomResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.DismissRoomResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 flag = 2;
 * @return {number}
 */
proto.game.DismissRoomResponse.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.DismissRoomResponse.prototype.setFlag = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ReturnDispatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.ReturnDispatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ReturnDispatchRequest.displayName = 'proto.game.ReturnDispatchRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ReturnDispatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ReturnDispatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ReturnDispatchRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ReturnDispatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ReturnDispatchRequest}
 */
proto.game.ReturnDispatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ReturnDispatchRequest;
  return proto.game.ReturnDispatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ReturnDispatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ReturnDispatchRequest}
 */
proto.game.ReturnDispatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ReturnDispatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReturnDispatchRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ReturnDispatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReturnDispatchRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ReturnDispatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.ReturnDispatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ReturnDispatchResponse.displayName = 'proto.game.ReturnDispatchResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ReturnDispatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ReturnDispatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ReturnDispatchResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ReturnDispatchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ReturnDispatchResponse}
 */
proto.game.ReturnDispatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ReturnDispatchResponse;
  return proto.game.ReturnDispatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ReturnDispatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ReturnDispatchResponse}
 */
proto.game.ReturnDispatchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ReturnDispatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReturnDispatchResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ReturnDispatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReturnDispatchResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.ReturnDispatchResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.ReturnDispatchResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string player = 2;
 * @return {string}
 */
proto.game.ReturnDispatchResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.ReturnDispatchResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.QuitDispatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.QuitDispatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.QuitDispatchRequest.displayName = 'proto.game.QuitDispatchRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.QuitDispatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.QuitDispatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.QuitDispatchRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.QuitDispatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.QuitDispatchRequest}
 */
proto.game.QuitDispatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.QuitDispatchRequest;
  return proto.game.QuitDispatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.QuitDispatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.QuitDispatchRequest}
 */
proto.game.QuitDispatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.QuitDispatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitDispatchRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.QuitDispatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitDispatchRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.QuitDispatchRequest.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.QuitDispatchRequest.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.QuitDispatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.QuitDispatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.QuitDispatchResponse.displayName = 'proto.game.QuitDispatchResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.QuitDispatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.QuitDispatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.QuitDispatchResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.QuitDispatchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.QuitDispatchResponse}
 */
proto.game.QuitDispatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.QuitDispatchResponse;
  return proto.game.QuitDispatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.QuitDispatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.QuitDispatchResponse}
 */
proto.game.QuitDispatchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.QuitDispatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitDispatchResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.QuitDispatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitDispatchResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.QuitDispatchResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.QuitDispatchResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.DismissRoomWebRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.DismissRoomWebRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.DismissRoomWebRequest.displayName = 'proto.game.DismissRoomWebRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.DismissRoomWebRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.DismissRoomWebRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.DismissRoomWebRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.DismissRoomWebRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    gameType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    owner: jspb.Message.getFieldWithDefault(msg, 4, ""),
    roomUuid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.DismissRoomWebRequest}
 */
proto.game.DismissRoomWebRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.DismissRoomWebRequest;
  return proto.game.DismissRoomWebRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.DismissRoomWebRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.DismissRoomWebRequest}
 */
proto.game.DismissRoomWebRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.DismissRoomWebRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DismissRoomWebRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.DismissRoomWebRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DismissRoomWebRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getGameType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getOwner();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getRoomUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 room_id = 1;
 * @return {number}
 */
proto.game.DismissRoomWebRequest.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.DismissRoomWebRequest.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 game_type = 2;
 * @return {number}
 */
proto.game.DismissRoomWebRequest.prototype.getGameType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.DismissRoomWebRequest.prototype.setGameType = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 app_id = 3;
 * @return {number}
 */
proto.game.DismissRoomWebRequest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.DismissRoomWebRequest.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string owner = 4;
 * @return {string}
 */
proto.game.DismissRoomWebRequest.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.game.DismissRoomWebRequest.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string room_uuid = 5;
 * @return {string}
 */
proto.game.DismissRoomWebRequest.prototype.getRoomUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.game.DismissRoomWebRequest.prototype.setRoomUuid = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.DismissRoomWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.DismissRoomWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.DismissRoomWebResponse.displayName = 'proto.game.DismissRoomWebResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.DismissRoomWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.DismissRoomWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.DismissRoomWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.DismissRoomWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gameType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    owner: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.DismissRoomWebResponse}
 */
proto.game.DismissRoomWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.DismissRoomWebResponse;
  return proto.game.DismissRoomWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.DismissRoomWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.DismissRoomWebResponse}
 */
proto.game.DismissRoomWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.DismissRoomWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DismissRoomWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.DismissRoomWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DismissRoomWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGameType();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getOwner();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.DismissRoomWebResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.DismissRoomWebResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 room_id = 2;
 * @return {number}
 */
proto.game.DismissRoomWebResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.DismissRoomWebResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 game_type = 3;
 * @return {number}
 */
proto.game.DismissRoomWebResponse.prototype.getGameType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.DismissRoomWebResponse.prototype.setGameType = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 app_id = 4;
 * @return {number}
 */
proto.game.DismissRoomWebResponse.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.DismissRoomWebResponse.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string owner = 5;
 * @return {string}
 */
proto.game.DismissRoomWebResponse.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.game.DismissRoomWebResponse.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ExistRoomWebRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.ExistRoomWebRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ExistRoomWebRequest.displayName = 'proto.game.ExistRoomWebRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ExistRoomWebRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ExistRoomWebRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ExistRoomWebRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ExistRoomWebRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ExistRoomWebRequest}
 */
proto.game.ExistRoomWebRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ExistRoomWebRequest;
  return proto.game.ExistRoomWebRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ExistRoomWebRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ExistRoomWebRequest}
 */
proto.game.ExistRoomWebRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ExistRoomWebRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ExistRoomWebRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ExistRoomWebRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ExistRoomWebRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 room_id = 1;
 * @return {number}
 */
proto.game.ExistRoomWebRequest.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.ExistRoomWebRequest.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ExistRoomWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.ExistRoomWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ExistRoomWebResponse.displayName = 'proto.game.ExistRoomWebResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ExistRoomWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ExistRoomWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ExistRoomWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ExistRoomWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    flag: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ExistRoomWebResponse}
 */
proto.game.ExistRoomWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ExistRoomWebResponse;
  return proto.game.ExistRoomWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ExistRoomWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ExistRoomWebResponse}
 */
proto.game.ExistRoomWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFlag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ExistRoomWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ExistRoomWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ExistRoomWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ExistRoomWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFlag();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool flag = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.game.ExistRoomWebResponse.prototype.getFlag = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.game.ExistRoomWebResponse.prototype.setFlag = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.RefundWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.RefundWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.RefundWebResponse.displayName = 'proto.game.RefundWebResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.RefundWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.RefundWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.RefundWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.RefundWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gameType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    owner: jspb.Message.getFieldWithDefault(msg, 5, ""),
    roomUuid: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.RefundWebResponse}
 */
proto.game.RefundWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.RefundWebResponse;
  return proto.game.RefundWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.RefundWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.RefundWebResponse}
 */
proto.game.RefundWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.RefundWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.RefundWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.RefundWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.RefundWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGameType();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getOwner();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getRoomUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.RefundWebResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.RefundWebResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 room_id = 2;
 * @return {number}
 */
proto.game.RefundWebResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.RefundWebResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 game_type = 3;
 * @return {number}
 */
proto.game.RefundWebResponse.prototype.getGameType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.RefundWebResponse.prototype.setGameType = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 app_id = 4;
 * @return {number}
 */
proto.game.RefundWebResponse.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.RefundWebResponse.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string owner = 5;
 * @return {string}
 */
proto.game.RefundWebResponse.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.game.RefundWebResponse.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string room_uuid = 6;
 * @return {string}
 */
proto.game.RefundWebResponse.prototype.getRoomUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.game.RefundWebResponse.prototype.setRoomUuid = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.SponsorVoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.SponsorVoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.SponsorVoteResponse.displayName = 'proto.game.SponsorVoteResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.SponsorVoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.SponsorVoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.SponsorVoteResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.SponsorVoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sponsor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expireSeconds: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.SponsorVoteResponse}
 */
proto.game.SponsorVoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.SponsorVoteResponse;
  return proto.game.SponsorVoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.SponsorVoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.SponsorVoteResponse}
 */
proto.game.SponsorVoteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSponsor(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpireSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.SponsorVoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SponsorVoteResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.SponsorVoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SponsorVoteResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getSponsor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getExpireSeconds();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 room_id = 1;
 * @return {number}
 */
proto.game.SponsorVoteResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.SponsorVoteResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string sponsor = 3;
 * @return {string}
 */
proto.game.SponsorVoteResponse.prototype.getSponsor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.SponsorVoteResponse.prototype.setSponsor = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 expire_seconds = 4;
 * @return {number}
 */
proto.game.SponsorVoteResponse.prototype.getExpireSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.SponsorVoteResponse.prototype.setExpireSeconds = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.PlayerVoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.PlayerVoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.PlayerVoteRequest.displayName = 'proto.game.PlayerVoteRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.PlayerVoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.PlayerVoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.PlayerVoteRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.PlayerVoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    flag: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.PlayerVoteRequest}
 */
proto.game.PlayerVoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.PlayerVoteRequest;
  return proto.game.PlayerVoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.PlayerVoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.PlayerVoteRequest}
 */
proto.game.PlayerVoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFlag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.PlayerVoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.PlayerVoteRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.PlayerVoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.PlayerVoteRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFlag();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool flag = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.game.PlayerVoteRequest.prototype.getFlag = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.game.PlayerVoteRequest.prototype.setFlag = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.PlayerVoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.PlayerVoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.PlayerVoteResponse.displayName = 'proto.game.PlayerVoteResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.PlayerVoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.PlayerVoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.PlayerVoteResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.PlayerVoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    flag: jspb.Message.getFieldWithDefault(msg, 1, false),
    player: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.PlayerVoteResponse}
 */
proto.game.PlayerVoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.PlayerVoteResponse;
  return proto.game.PlayerVoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.PlayerVoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.PlayerVoteResponse}
 */
proto.game.PlayerVoteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFlag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.PlayerVoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.PlayerVoteResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.PlayerVoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.PlayerVoteResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFlag();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool flag = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.game.PlayerVoteResponse.prototype.getFlag = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.game.PlayerVoteResponse.prototype.setFlag = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string player = 2;
 * @return {string}
 */
proto.game.PlayerVoteResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.PlayerVoteResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.HeartbeatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.HeartbeatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.HeartbeatRequest.displayName = 'proto.game.HeartbeatRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.HeartbeatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.HeartbeatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.HeartbeatRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.HeartbeatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.HeartbeatRequest}
 */
proto.game.HeartbeatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.HeartbeatRequest;
  return proto.game.HeartbeatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.HeartbeatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.HeartbeatRequest}
 */
proto.game.HeartbeatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.HeartbeatRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.HeartbeatRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.HeartbeatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.HeartbeatRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.HeartbeatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.HeartbeatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.HeartbeatResponse.displayName = 'proto.game.HeartbeatResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.HeartbeatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.HeartbeatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.HeartbeatResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.HeartbeatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.HeartbeatResponse}
 */
proto.game.HeartbeatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.HeartbeatResponse;
  return proto.game.HeartbeatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.HeartbeatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.HeartbeatResponse}
 */
proto.game.HeartbeatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.HeartbeatResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.HeartbeatResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.HeartbeatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.HeartbeatResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.Card = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.Card, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.Card.displayName = 'proto.game.Card';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.Card.prototype.toObject = function(opt_includeInstance) {
  return proto.game.Card.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.Card} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.Card.toObject = function(includeInstance, msg) {
  var f, obj = {
    card: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.Card}
 */
proto.game.Card.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.Card;
  return proto.game.Card.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.Card} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.Card}
 */
proto.game.Card.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.Card} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.Card.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.Card.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.Card.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCard();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 card = 1;
 * @return {number}
 */
proto.game.Card.prototype.getCard = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.Card.prototype.setCard = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ReconnectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.ReconnectResponse.repeatedFields_, null);
};
goog.inherits(proto.game.ReconnectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ReconnectResponse.displayName = 'proto.game.ReconnectResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.ReconnectResponse.repeatedFields_ = [9,15,18,19];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ReconnectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ReconnectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ReconnectResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ReconnectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    kwargs: jspb.Message.getFieldWithDefault(msg, 2, ""),
    owner: jspb.Message.getFieldWithDefault(msg, 3, ""),
    roomStatus: jspb.Message.getFieldWithDefault(msg, 4, 0),
    currentRound: jspb.Message.getFieldWithDefault(msg, 5, 0),
    lairdPlayer: jspb.Message.getFieldWithDefault(msg, 6, ""),
    discardPlayer: jspb.Message.getFieldWithDefault(msg, 7, ""),
    robPlayer: jspb.Message.getFieldWithDefault(msg, 8, ""),
    threeCardsList: jspb.Message.toObjectList(msg.getThreeCardsList(),
    proto.game.Card.toObject, includeInstance),
    boomCnt: jspb.Message.getFieldWithDefault(msg, 10, 0),
    score: jspb.Message.getFieldWithDefault(msg, 11, 0),
    baseScore: jspb.Message.getFieldWithDefault(msg, 12, 0),
    laiziCard: jspb.Message.getFieldWithDefault(msg, 13, 0),
    rounds: jspb.Message.getFieldWithDefault(msg, 14, 0),
    playerList: jspb.Message.toObjectList(msg.getPlayerList(),
    proto.game.ReconnectResponse.Player.toObject, includeInstance),
    code: jspb.Message.getFieldWithDefault(msg, 16, 0),
    prevDiscardPlayer: jspb.Message.getFieldWithDefault(msg, 17, ""),
    prevDiscardCardsList: jspb.Message.toObjectList(msg.getPrevDiscardCardsList(),
    proto.game.Card.toObject, includeInstance),
    prevDiscardCardsLaiziConvertedList: jspb.Message.toObjectList(msg.getPrevDiscardCardsLaiziConvertedList(),
    proto.game.Card.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ReconnectResponse}
 */
proto.game.ReconnectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ReconnectResponse;
  return proto.game.ReconnectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ReconnectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ReconnectResponse}
 */
proto.game.ReconnectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKwargs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentRound(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLairdPlayer(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiscardPlayer(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobPlayer(value);
      break;
    case 9:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addThreeCards(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBoomCnt(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBaseScore(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLaiziCard(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRounds(value);
      break;
    case 15:
      var value = new proto.game.ReconnectResponse.Player;
      reader.readMessage(value,proto.game.ReconnectResponse.Player.deserializeBinaryFromReader);
      msg.addPlayer(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrevDiscardPlayer(value);
      break;
    case 18:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addPrevDiscardCards(value);
      break;
    case 19:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addPrevDiscardCardsLaiziConverted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ReconnectResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReconnectResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ReconnectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReconnectResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getKwargs();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getOwner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getRoomStatus();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getCurrentRound();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getLairdPlayer();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getDiscardPlayer();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getRobPlayer();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = this.getThreeCardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getBoomCnt();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = this.getScore();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = this.getBaseScore();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = this.getLaiziCard();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = this.getRounds();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = this.getPlayerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.game.ReconnectResponse.Player.serializeBinaryToWriter
    );
  }
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = this.getPrevDiscardPlayer();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = this.getPrevDiscardCardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getPrevDiscardCardsLaiziConvertedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 room_id = 1;
 * @return {number}
 */
proto.game.ReconnectResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string kwargs = 2;
 * @return {string}
 */
proto.game.ReconnectResponse.prototype.getKwargs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.ReconnectResponse.prototype.setKwargs = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string owner = 3;
 * @return {string}
 */
proto.game.ReconnectResponse.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.ReconnectResponse.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 room_status = 4;
 * @return {number}
 */
proto.game.ReconnectResponse.prototype.getRoomStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.prototype.setRoomStatus = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 current_round = 5;
 * @return {number}
 */
proto.game.ReconnectResponse.prototype.getCurrentRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.prototype.setCurrentRound = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string laird_player = 6;
 * @return {string}
 */
proto.game.ReconnectResponse.prototype.getLairdPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.game.ReconnectResponse.prototype.setLairdPlayer = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string discard_player = 7;
 * @return {string}
 */
proto.game.ReconnectResponse.prototype.getDiscardPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.game.ReconnectResponse.prototype.setDiscardPlayer = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string rob_player = 8;
 * @return {string}
 */
proto.game.ReconnectResponse.prototype.getRobPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.game.ReconnectResponse.prototype.setRobPlayer = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * repeated Card three_cards = 9;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.ReconnectResponse.prototype.getThreeCardsList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 9));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.ReconnectResponse.prototype.setThreeCardsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.ReconnectResponse.prototype.addThreeCards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.game.Card, opt_index);
};


proto.game.ReconnectResponse.prototype.clearThreeCardsList = function() {
  this.setThreeCardsList([]);
};


/**
 * optional int32 boom_cnt = 10;
 * @return {number}
 */
proto.game.ReconnectResponse.prototype.getBoomCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.prototype.setBoomCnt = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional int32 score = 11;
 * @return {number}
 */
proto.game.ReconnectResponse.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.prototype.setScore = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional int32 base_score = 12;
 * @return {number}
 */
proto.game.ReconnectResponse.prototype.getBaseScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.prototype.setBaseScore = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional int32 laizi_card = 13;
 * @return {number}
 */
proto.game.ReconnectResponse.prototype.getLaiziCard = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.prototype.setLaiziCard = function(value) {
  jspb.Message.setField(this, 13, value);
};


/**
 * optional int32 rounds = 14;
 * @return {number}
 */
proto.game.ReconnectResponse.prototype.getRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.prototype.setRounds = function(value) {
  jspb.Message.setField(this, 14, value);
};


/**
 * repeated Player player = 15;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.ReconnectResponse.Player>}
 */
proto.game.ReconnectResponse.prototype.getPlayerList = function() {
  return /** @type{!Array.<!proto.game.ReconnectResponse.Player>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.ReconnectResponse.Player, 15));
};


/** @param {!Array.<!proto.game.ReconnectResponse.Player>} value */
proto.game.ReconnectResponse.prototype.setPlayerList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.game.ReconnectResponse.Player=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.ReconnectResponse.Player}
 */
proto.game.ReconnectResponse.prototype.addPlayer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.game.ReconnectResponse.Player, opt_index);
};


proto.game.ReconnectResponse.prototype.clearPlayerList = function() {
  this.setPlayerList([]);
};


/**
 * optional uint32 code = 16;
 * @return {number}
 */
proto.game.ReconnectResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 16, value);
};


/**
 * optional string prev_discard_player = 17;
 * @return {string}
 */
proto.game.ReconnectResponse.prototype.getPrevDiscardPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.game.ReconnectResponse.prototype.setPrevDiscardPlayer = function(value) {
  jspb.Message.setField(this, 17, value);
};


/**
 * repeated Card prev_discard_cards = 18;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.ReconnectResponse.prototype.getPrevDiscardCardsList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 18));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.ReconnectResponse.prototype.setPrevDiscardCardsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.ReconnectResponse.prototype.addPrevDiscardCards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.game.Card, opt_index);
};


proto.game.ReconnectResponse.prototype.clearPrevDiscardCardsList = function() {
  this.setPrevDiscardCardsList([]);
};


/**
 * repeated Card prev_discard_cards_laizi_converted = 19;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.ReconnectResponse.prototype.getPrevDiscardCardsLaiziConvertedList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 19));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.ReconnectResponse.prototype.setPrevDiscardCardsLaiziConvertedList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.ReconnectResponse.prototype.addPrevDiscardCardsLaiziConverted = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.game.Card, opt_index);
};


proto.game.ReconnectResponse.prototype.clearPrevDiscardCardsLaiziConvertedList = function() {
  this.setPrevDiscardCardsLaiziConvertedList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ReconnectResponse.Player = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.ReconnectResponse.Player.repeatedFields_, null);
};
goog.inherits(proto.game.ReconnectResponse.Player, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ReconnectResponse.Player.displayName = 'proto.game.ReconnectResponse.Player';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.ReconnectResponse.Player.repeatedFields_ = [13,14,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ReconnectResponse.Player.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ReconnectResponse.Player.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ReconnectResponse.Player} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ReconnectResponse.Player.toObject = function(includeInstance, msg) {
  var f, obj = {
    seat: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: jspb.Message.getFieldWithDefault(msg, 2, ""),
    info: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isOnline: jspb.Message.getFieldWithDefault(msg, 5, 0),
    robFlag: jspb.Message.getFieldWithDefault(msg, 6, 0),
    robScore: jspb.Message.getFieldWithDefault(msg, 7, 0),
    score: jspb.Message.getFieldWithDefault(msg, 8, 0),
    totalScore: jspb.Message.getFieldWithDefault(msg, 9, 0),
    boomCnt: jspb.Message.getFieldWithDefault(msg, 10, 0),
    isAnnounced: jspb.Message.getFieldWithDefault(msg, 11, 0),
    multiple: jspb.Message.getFieldWithDefault(msg, 12, 0),
    cardsInHandList: jspb.Message.toObjectList(msg.getCardsInHandList(),
    proto.game.Card.toObject, includeInstance),
    cardsDiscardList: jspb.Message.toObjectList(msg.getCardsDiscardList(),
    proto.game.Card.toObject, includeInstance),
    cardsDiscardLaiziConvertedList: jspb.Message.toObjectList(msg.getCardsDiscardLaiziConvertedList(),
    proto.game.Card.toObject, includeInstance),
    gold: jspb.Message.getFieldWithDefault(msg, 16, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ReconnectResponse.Player}
 */
proto.game.ReconnectResponse.Player.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ReconnectResponse.Player;
  return proto.game.ReconnectResponse.Player.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ReconnectResponse.Player} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ReconnectResponse.Player}
 */
proto.game.ReconnectResponse.Player.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeat(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsOnline(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRobFlag(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRobScore(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalScore(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBoomCnt(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsAnnounced(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMultiple(value);
      break;
    case 13:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addCardsInHand(value);
      break;
    case 14:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addCardsDiscard(value);
      break;
    case 15:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addCardsDiscardLaiziConverted(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ReconnectResponse.Player} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReconnectResponse.Player.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ReconnectResponse.Player.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReconnectResponse.Player.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSeat();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getInfo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getStatus();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getIsOnline();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getRobFlag();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = this.getRobScore();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = this.getScore();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = this.getTotalScore();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = this.getBoomCnt();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = this.getIsAnnounced();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = this.getMultiple();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = this.getCardsInHandList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getCardsDiscardList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getCardsDiscardLaiziConvertedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
};


/**
 * optional int32 seat = 1;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getSeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setSeat = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string player = 2;
 * @return {string}
 */
proto.game.ReconnectResponse.Player.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.ReconnectResponse.Player.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string info = 3;
 * @return {string}
 */
proto.game.ReconnectResponse.Player.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.ReconnectResponse.Player.prototype.setInfo = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 status = 4;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 is_online = 5;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getIsOnline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setIsOnline = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int32 rob_flag = 6;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getRobFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setRobFlag = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int32 rob_score = 7;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getRobScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setRobScore = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int32 score = 8;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setScore = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional int32 total_score = 9;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getTotalScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setTotalScore = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional int32 boom_cnt = 10;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getBoomCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setBoomCnt = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional int32 is_announced = 11;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getIsAnnounced = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setIsAnnounced = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional int32 multiple = 12;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setMultiple = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * repeated Card cards_in_hand = 13;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.ReconnectResponse.Player.prototype.getCardsInHandList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 13));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.ReconnectResponse.Player.prototype.setCardsInHandList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.ReconnectResponse.Player.prototype.addCardsInHand = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.game.Card, opt_index);
};


proto.game.ReconnectResponse.Player.prototype.clearCardsInHandList = function() {
  this.setCardsInHandList([]);
};


/**
 * repeated Card cards_discard = 14;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.ReconnectResponse.Player.prototype.getCardsDiscardList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 14));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.ReconnectResponse.Player.prototype.setCardsDiscardList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.ReconnectResponse.Player.prototype.addCardsDiscard = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.game.Card, opt_index);
};


proto.game.ReconnectResponse.Player.prototype.clearCardsDiscardList = function() {
  this.setCardsDiscardList([]);
};


/**
 * repeated Card cards_discard_laizi_converted = 15;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.ReconnectResponse.Player.prototype.getCardsDiscardLaiziConvertedList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 15));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.ReconnectResponse.Player.prototype.setCardsDiscardLaiziConvertedList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.ReconnectResponse.Player.prototype.addCardsDiscardLaiziConverted = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.game.Card, opt_index);
};


proto.game.ReconnectResponse.Player.prototype.clearCardsDiscardLaiziConvertedList = function() {
  this.setCardsDiscardLaiziConvertedList([]);
};


/**
 * optional int32 gold = 16;
 * @return {number}
 */
proto.game.ReconnectResponse.Player.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.game.ReconnectResponse.Player.prototype.setGold = function(value) {
  jspb.Message.setField(this, 16, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.OnlineStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.OnlineStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.OnlineStatusResponse.displayName = 'proto.game.OnlineStatusResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.OnlineStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.OnlineStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.OnlineStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.OnlineStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.OnlineStatusResponse}
 */
proto.game.OnlineStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.OnlineStatusResponse;
  return proto.game.OnlineStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.OnlineStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.OnlineStatusResponse}
 */
proto.game.OnlineStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.OnlineStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.OnlineStatusResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.OnlineStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.OnlineStatusResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getStatus();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.OnlineStatusResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.OnlineStatusResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool status = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.game.OnlineStatusResponse.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.game.OnlineStatusResponse.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ReadyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.ReadyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ReadyRequest.displayName = 'proto.game.ReadyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ReadyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ReadyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ReadyRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ReadyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAnnounce: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ReadyRequest}
 */
proto.game.ReadyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ReadyRequest;
  return proto.game.ReadyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ReadyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ReadyRequest}
 */
proto.game.ReadyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsAnnounce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ReadyRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReadyRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ReadyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReadyRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIsAnnounce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 is_announce = 1;
 * @return {number}
 */
proto.game.ReadyRequest.prototype.getIsAnnounce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.ReadyRequest.prototype.setIsAnnounce = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.ReadyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.ReadyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.ReadyResponse.displayName = 'proto.game.ReadyResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.ReadyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.ReadyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.ReadyResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.ReadyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isReady: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.ReadyResponse}
 */
proto.game.ReadyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.ReadyResponse;
  return proto.game.ReadyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.ReadyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.ReadyResponse}
 */
proto.game.ReadyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsReady(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.ReadyResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReadyResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.ReadyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.ReadyResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getIsReady();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.ReadyResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.ReadyResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 is_ready = 2;
 * @return {number}
 */
proto.game.ReadyResponse.prototype.getIsReady = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.ReadyResponse.prototype.setIsReady = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.DealResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.DealResponse.repeatedFields_, null);
};
goog.inherits(proto.game.DealResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.DealResponse.displayName = 'proto.game.DealResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.DealResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.DealResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.DealResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.DealResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.DealResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstRobUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cardsInHandList: jspb.Message.toObjectList(msg.getCardsInHandList(),
    proto.game.Card.toObject, includeInstance),
    threeCardsList: jspb.Message.toObjectList(msg.getThreeCardsList(),
    proto.game.Card.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.DealResponse}
 */
proto.game.DealResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.DealResponse;
  return proto.game.DealResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.DealResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.DealResponse}
 */
proto.game.DealResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstRobUuid(value);
      break;
    case 2:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addCardsInHand(value);
      break;
    case 3:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addThreeCards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.DealResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DealResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.DealResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DealResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFirstRobUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getCardsInHandList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getThreeCardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
};


/**
 * optional string first_rob_uuid = 1;
 * @return {string}
 */
proto.game.DealResponse.prototype.getFirstRobUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.DealResponse.prototype.setFirstRobUuid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated Card cards_in_hand = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.DealResponse.prototype.getCardsInHandList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 2));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.DealResponse.prototype.setCardsInHandList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.DealResponse.prototype.addCardsInHand = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.game.Card, opt_index);
};


proto.game.DealResponse.prototype.clearCardsInHandList = function() {
  this.setCardsInHandList([]);
};


/**
 * repeated Card three_cards = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.DealResponse.prototype.getThreeCardsList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 3));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.DealResponse.prototype.setThreeCardsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.DealResponse.prototype.addThreeCards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.game.Card, opt_index);
};


proto.game.DealResponse.prototype.clearThreeCardsList = function() {
  this.setThreeCardsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GameStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.GameStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GameStartResponse.displayName = 'proto.game.GameStartResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GameStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GameStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GameStartResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GameStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GameStartResponse}
 */
proto.game.GameStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GameStartResponse;
  return proto.game.GameStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GameStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GameStartResponse}
 */
proto.game.GameStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GameStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GameStartResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GameStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GameStartResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.RobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.RobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.RobRequest.displayName = 'proto.game.RobRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.RobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.RobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.RobRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.RobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    flag: jspb.Message.getFieldWithDefault(msg, 1, 0),
    score: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.RobRequest}
 */
proto.game.RobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.RobRequest;
  return proto.game.RobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.RobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.RobRequest}
 */
proto.game.RobRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlag(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.RobRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.RobRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.RobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.RobRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFlag();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getScore();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 flag = 1;
 * @return {number}
 */
proto.game.RobRequest.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.RobRequest.prototype.setFlag = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 score = 2;
 * @return {number}
 */
proto.game.RobRequest.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.RobRequest.prototype.setScore = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.RobResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.RobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.RobResponse.displayName = 'proto.game.RobResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.RobResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.RobResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.RobResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.RobResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    flag: jspb.Message.getFieldWithDefault(msg, 1, 0),
    score: jspb.Message.getFieldWithDefault(msg, 2, 0),
    player: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nextRobPlayer: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lairdPlayer: jspb.Message.getFieldWithDefault(msg, 5, ""),
    prevRobPlayer: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.RobResponse}
 */
proto.game.RobResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.RobResponse;
  return proto.game.RobResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.RobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.RobResponse}
 */
proto.game.RobResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlag(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScore(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextRobPlayer(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLairdPlayer(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrevRobPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.RobResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.RobResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.RobResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.RobResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFlag();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getScore();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getNextRobPlayer();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getLairdPlayer();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getPrevRobPlayer();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint32 flag = 1;
 * @return {number}
 */
proto.game.RobResponse.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.RobResponse.prototype.setFlag = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 score = 2;
 * @return {number}
 */
proto.game.RobResponse.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.RobResponse.prototype.setScore = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string player = 3;
 * @return {string}
 */
proto.game.RobResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.RobResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string next_rob_player = 4;
 * @return {string}
 */
proto.game.RobResponse.prototype.getNextRobPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.game.RobResponse.prototype.setNextRobPlayer = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string laird_player = 5;
 * @return {string}
 */
proto.game.RobResponse.prototype.getLairdPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.game.RobResponse.prototype.setLairdPlayer = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string prev_rob_player = 6;
 * @return {string}
 */
proto.game.RobResponse.prototype.getPrevRobPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.game.RobResponse.prototype.setPrevRobPlayer = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.DiscardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.DiscardRequest.repeatedFields_, null);
};
goog.inherits(proto.game.DiscardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.DiscardRequest.displayName = 'proto.game.DiscardRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.DiscardRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.DiscardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.DiscardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.DiscardRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.DiscardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardList: jspb.Message.toObjectList(msg.getCardList(),
    proto.game.Card.toObject, includeInstance),
    convertedLaiziCardList: jspb.Message.toObjectList(msg.getConvertedLaiziCardList(),
    proto.game.Card.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.DiscardRequest}
 */
proto.game.DiscardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.DiscardRequest;
  return proto.game.DiscardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.DiscardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.DiscardRequest}
 */
proto.game.DiscardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addCard(value);
      break;
    case 2:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addConvertedLaiziCard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.DiscardRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DiscardRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.DiscardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DiscardRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCardList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getConvertedLaiziCardList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Card card = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.DiscardRequest.prototype.getCardList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 1));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.DiscardRequest.prototype.setCardList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.DiscardRequest.prototype.addCard = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.game.Card, opt_index);
};


proto.game.DiscardRequest.prototype.clearCardList = function() {
  this.setCardList([]);
};


/**
 * repeated Card converted_laizi_card = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.DiscardRequest.prototype.getConvertedLaiziCardList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 2));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.DiscardRequest.prototype.setConvertedLaiziCardList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.DiscardRequest.prototype.addConvertedLaiziCard = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.game.Card, opt_index);
};


proto.game.DiscardRequest.prototype.clearConvertedLaiziCardList = function() {
  this.setConvertedLaiziCardList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.DiscardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.DiscardResponse.repeatedFields_, null);
};
goog.inherits(proto.game.DiscardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.DiscardResponse.displayName = 'proto.game.DiscardResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.DiscardResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.DiscardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.DiscardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.DiscardResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.DiscardResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cardList: jspb.Message.toObjectList(msg.getCardList(),
    proto.game.Card.toObject, includeInstance),
    convertedLaiziCardList: jspb.Message.toObjectList(msg.getConvertedLaiziCardList(),
    proto.game.Card.toObject, includeInstance),
    player: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cardType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    nextDiscardPlayer: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.DiscardResponse}
 */
proto.game.DiscardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.DiscardResponse;
  return proto.game.DiscardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.DiscardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.DiscardResponse}
 */
proto.game.DiscardResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addCard(value);
      break;
    case 3:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addConvertedLaiziCard(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCardType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextDiscardPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.DiscardResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DiscardResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.DiscardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.DiscardResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getCardList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getConvertedLaiziCardList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getCardType();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getNextDiscardPlayer();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.game.DiscardResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.DiscardResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated Card card = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.DiscardResponse.prototype.getCardList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 2));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.DiscardResponse.prototype.setCardList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.DiscardResponse.prototype.addCard = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.game.Card, opt_index);
};


proto.game.DiscardResponse.prototype.clearCardList = function() {
  this.setCardList([]);
};


/**
 * repeated Card converted_laizi_card = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.DiscardResponse.prototype.getConvertedLaiziCardList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 3));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.DiscardResponse.prototype.setConvertedLaiziCardList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.DiscardResponse.prototype.addConvertedLaiziCard = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.game.Card, opt_index);
};


proto.game.DiscardResponse.prototype.clearConvertedLaiziCardList = function() {
  this.setConvertedLaiziCardList([]);
};


/**
 * optional string player = 4;
 * @return {string}
 */
proto.game.DiscardResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.game.DiscardResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 card_type = 5;
 * @return {number}
 */
proto.game.DiscardResponse.prototype.getCardType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.DiscardResponse.prototype.setCardType = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string next_discard_player = 6;
 * @return {string}
 */
proto.game.DiscardResponse.prototype.getNextDiscardPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.game.DiscardResponse.prototype.setNextDiscardPlayer = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.SynchroniseCardsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.SynchroniseCardsResponse.repeatedFields_, null);
};
goog.inherits(proto.game.SynchroniseCardsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.SynchroniseCardsResponse.displayName = 'proto.game.SynchroniseCardsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.SynchroniseCardsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.SynchroniseCardsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.SynchroniseCardsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.SynchroniseCardsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.SynchroniseCardsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardList: jspb.Message.toObjectList(msg.getCardList(),
    proto.game.Card.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.SynchroniseCardsResponse}
 */
proto.game.SynchroniseCardsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.SynchroniseCardsResponse;
  return proto.game.SynchroniseCardsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.SynchroniseCardsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.SynchroniseCardsResponse}
 */
proto.game.SynchroniseCardsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addCard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.SynchroniseCardsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SynchroniseCardsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.SynchroniseCardsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SynchroniseCardsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCardList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Card card = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.SynchroniseCardsResponse.prototype.getCardList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 1));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.SynchroniseCardsResponse.prototype.setCardList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.SynchroniseCardsResponse.prototype.addCard = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.game.Card, opt_index);
};


proto.game.SynchroniseCardsResponse.prototype.clearCardList = function() {
  this.setCardList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.AnnounceCardsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.AnnounceCardsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.AnnounceCardsRequest.displayName = 'proto.game.AnnounceCardsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.AnnounceCardsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.AnnounceCardsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.AnnounceCardsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.AnnounceCardsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    multiple: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isSelf: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.AnnounceCardsRequest}
 */
proto.game.AnnounceCardsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.AnnounceCardsRequest;
  return proto.game.AnnounceCardsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.AnnounceCardsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.AnnounceCardsRequest}
 */
proto.game.AnnounceCardsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMultiple(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsSelf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.AnnounceCardsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.AnnounceCardsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.AnnounceCardsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.AnnounceCardsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMultiple();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getIsSelf();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 multiple = 1;
 * @return {number}
 */
proto.game.AnnounceCardsRequest.prototype.getMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.AnnounceCardsRequest.prototype.setMultiple = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 is_self = 2;
 * @return {number}
 */
proto.game.AnnounceCardsRequest.prototype.getIsSelf = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.AnnounceCardsRequest.prototype.setIsSelf = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.AnnounceCardsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.AnnounceCardsResponse.repeatedFields_, null);
};
goog.inherits(proto.game.AnnounceCardsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.AnnounceCardsResponse.displayName = 'proto.game.AnnounceCardsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.AnnounceCardsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.AnnounceCardsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.AnnounceCardsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.AnnounceCardsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.AnnounceCardsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cardList: jspb.Message.toObjectList(msg.getCardList(),
    proto.game.Card.toObject, includeInstance),
    player: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.AnnounceCardsResponse}
 */
proto.game.AnnounceCardsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.AnnounceCardsResponse;
  return proto.game.AnnounceCardsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.AnnounceCardsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.AnnounceCardsResponse}
 */
proto.game.AnnounceCardsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addCard(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.AnnounceCardsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.AnnounceCardsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.AnnounceCardsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.AnnounceCardsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getCardList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.AnnounceCardsResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.AnnounceCardsResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated Card card = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.AnnounceCardsResponse.prototype.getCardList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 2));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.AnnounceCardsResponse.prototype.setCardList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.AnnounceCardsResponse.prototype.addCard = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.game.Card, opt_index);
};


proto.game.AnnounceCardsResponse.prototype.clearCardList = function() {
  this.setCardList([]);
};


/**
 * optional string player = 3;
 * @return {string}
 */
proto.game.AnnounceCardsResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.AnnounceCardsResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MultipleScoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.MultipleScoreResponse.repeatedFields_, null);
};
goog.inherits(proto.game.MultipleScoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MultipleScoreResponse.displayName = 'proto.game.MultipleScoreResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.MultipleScoreResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MultipleScoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MultipleScoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MultipleScoreResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MultipleScoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerDataList: jspb.Message.toObjectList(msg.getPlayerDataList(),
    proto.game.MultipleScoreResponse.PlayerData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MultipleScoreResponse}
 */
proto.game.MultipleScoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MultipleScoreResponse;
  return proto.game.MultipleScoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MultipleScoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MultipleScoreResponse}
 */
proto.game.MultipleScoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.game.MultipleScoreResponse.PlayerData;
      reader.readMessage(value,proto.game.MultipleScoreResponse.PlayerData.deserializeBinaryFromReader);
      msg.addPlayerData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MultipleScoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultipleScoreResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MultipleScoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultipleScoreResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayerDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.game.MultipleScoreResponse.PlayerData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.MultipleScoreResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MultipleScoreResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated PlayerData player_data = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.MultipleScoreResponse.PlayerData>}
 */
proto.game.MultipleScoreResponse.prototype.getPlayerDataList = function() {
  return /** @type{!Array.<!proto.game.MultipleScoreResponse.PlayerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.MultipleScoreResponse.PlayerData, 2));
};


/** @param {!Array.<!proto.game.MultipleScoreResponse.PlayerData>} value */
proto.game.MultipleScoreResponse.prototype.setPlayerDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.game.MultipleScoreResponse.PlayerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.MultipleScoreResponse.PlayerData}
 */
proto.game.MultipleScoreResponse.prototype.addPlayerData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.game.MultipleScoreResponse.PlayerData, opt_index);
};


proto.game.MultipleScoreResponse.prototype.clearPlayerDataList = function() {
  this.setPlayerDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MultipleScoreResponse.PlayerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MultipleScoreResponse.PlayerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MultipleScoreResponse.PlayerData.displayName = 'proto.game.MultipleScoreResponse.PlayerData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MultipleScoreResponse.PlayerData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MultipleScoreResponse.PlayerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MultipleScoreResponse.PlayerData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MultipleScoreResponse.PlayerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    multiple: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MultipleScoreResponse.PlayerData}
 */
proto.game.MultipleScoreResponse.PlayerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MultipleScoreResponse.PlayerData;
  return proto.game.MultipleScoreResponse.PlayerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MultipleScoreResponse.PlayerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MultipleScoreResponse.PlayerData}
 */
proto.game.MultipleScoreResponse.PlayerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMultiple(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MultipleScoreResponse.PlayerData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultipleScoreResponse.PlayerData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MultipleScoreResponse.PlayerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultipleScoreResponse.PlayerData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getMultiple();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.MultipleScoreResponse.PlayerData.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.MultipleScoreResponse.PlayerData.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 multiple = 2;
 * @return {number}
 */
proto.game.MultipleScoreResponse.PlayerData.prototype.getMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MultipleScoreResponse.PlayerData.prototype.setMultiple = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MultipleScoreInitialResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.MultipleScoreInitialResponse.repeatedFields_, null);
};
goog.inherits(proto.game.MultipleScoreInitialResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MultipleScoreInitialResponse.displayName = 'proto.game.MultipleScoreInitialResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.MultipleScoreInitialResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MultipleScoreInitialResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MultipleScoreInitialResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MultipleScoreInitialResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MultipleScoreInitialResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerDataList: jspb.Message.toObjectList(msg.getPlayerDataList(),
    proto.game.MultipleScoreInitialResponse.PlayerData.toObject, includeInstance),
    playerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    action: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MultipleScoreInitialResponse}
 */
proto.game.MultipleScoreInitialResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MultipleScoreInitialResponse;
  return proto.game.MultipleScoreInitialResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MultipleScoreInitialResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MultipleScoreInitialResponse}
 */
proto.game.MultipleScoreInitialResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.game.MultipleScoreInitialResponse.PlayerData;
      reader.readMessage(value,proto.game.MultipleScoreInitialResponse.PlayerData.deserializeBinaryFromReader);
      msg.addPlayerData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MultipleScoreInitialResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultipleScoreInitialResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MultipleScoreInitialResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultipleScoreInitialResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayerDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.game.MultipleScoreInitialResponse.PlayerData.serializeBinaryToWriter
    );
  }
  f = this.getPlayerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getAction();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.MultipleScoreInitialResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MultipleScoreInitialResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated PlayerData player_data = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.MultipleScoreInitialResponse.PlayerData>}
 */
proto.game.MultipleScoreInitialResponse.prototype.getPlayerDataList = function() {
  return /** @type{!Array.<!proto.game.MultipleScoreInitialResponse.PlayerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.MultipleScoreInitialResponse.PlayerData, 2));
};


/** @param {!Array.<!proto.game.MultipleScoreInitialResponse.PlayerData>} value */
proto.game.MultipleScoreInitialResponse.prototype.setPlayerDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.game.MultipleScoreInitialResponse.PlayerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.MultipleScoreInitialResponse.PlayerData}
 */
proto.game.MultipleScoreInitialResponse.prototype.addPlayerData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.game.MultipleScoreInitialResponse.PlayerData, opt_index);
};


proto.game.MultipleScoreInitialResponse.prototype.clearPlayerDataList = function() {
  this.setPlayerDataList([]);
};


/**
 * optional string player_id = 3;
 * @return {string}
 */
proto.game.MultipleScoreInitialResponse.prototype.getPlayerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.MultipleScoreInitialResponse.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 action = 4;
 * @return {number}
 */
proto.game.MultipleScoreInitialResponse.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.MultipleScoreInitialResponse.prototype.setAction = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MultipleScoreInitialResponse.PlayerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MultipleScoreInitialResponse.PlayerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MultipleScoreInitialResponse.PlayerData.displayName = 'proto.game.MultipleScoreInitialResponse.PlayerData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MultipleScoreInitialResponse.PlayerData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MultipleScoreInitialResponse.PlayerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MultipleScoreInitialResponse.PlayerData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MultipleScoreInitialResponse.PlayerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    multiple: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MultipleScoreInitialResponse.PlayerData}
 */
proto.game.MultipleScoreInitialResponse.PlayerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MultipleScoreInitialResponse.PlayerData;
  return proto.game.MultipleScoreInitialResponse.PlayerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MultipleScoreInitialResponse.PlayerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MultipleScoreInitialResponse.PlayerData}
 */
proto.game.MultipleScoreInitialResponse.PlayerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMultiple(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MultipleScoreInitialResponse.PlayerData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultipleScoreInitialResponse.PlayerData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MultipleScoreInitialResponse.PlayerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultipleScoreInitialResponse.PlayerData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getMultiple();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.MultipleScoreInitialResponse.PlayerData.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.MultipleScoreInitialResponse.PlayerData.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 multiple = 2;
 * @return {number}
 */
proto.game.MultipleScoreInitialResponse.PlayerData.prototype.getMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MultipleScoreInitialResponse.PlayerData.prototype.setMultiple = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MultipleScoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MultipleScoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MultipleScoreRequest.displayName = 'proto.game.MultipleScoreRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MultipleScoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MultipleScoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MultipleScoreRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MultipleScoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    multiple: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isSelf: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MultipleScoreRequest}
 */
proto.game.MultipleScoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MultipleScoreRequest;
  return proto.game.MultipleScoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MultipleScoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MultipleScoreRequest}
 */
proto.game.MultipleScoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMultiple(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsSelf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MultipleScoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultipleScoreRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MultipleScoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultipleScoreRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMultiple();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getIsSelf();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 multiple = 1;
 * @return {number}
 */
proto.game.MultipleScoreRequest.prototype.getMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MultipleScoreRequest.prototype.setMultiple = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 is_self = 2;
 * @return {number}
 */
proto.game.MultipleScoreRequest.prototype.getIsSelf = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MultipleScoreRequest.prototype.setIsSelf = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MultiPhaseStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MultiPhaseStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MultiPhaseStartResponse.displayName = 'proto.game.MultiPhaseStartResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MultiPhaseStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MultiPhaseStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MultiPhaseStartResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MultiPhaseStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MultiPhaseStartResponse}
 */
proto.game.MultiPhaseStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MultiPhaseStartResponse;
  return proto.game.MultiPhaseStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MultiPhaseStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MultiPhaseStartResponse}
 */
proto.game.MultiPhaseStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MultiPhaseStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultiPhaseStartResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MultiPhaseStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultiPhaseStartResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MultiPhaseEndResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MultiPhaseEndResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MultiPhaseEndResponse.displayName = 'proto.game.MultiPhaseEndResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MultiPhaseEndResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MultiPhaseEndResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MultiPhaseEndResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MultiPhaseEndResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MultiPhaseEndResponse}
 */
proto.game.MultiPhaseEndResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MultiPhaseEndResponse;
  return proto.game.MultiPhaseEndResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MultiPhaseEndResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MultiPhaseEndResponse}
 */
proto.game.MultiPhaseEndResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MultiPhaseEndResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultiPhaseEndResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MultiPhaseEndResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MultiPhaseEndResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GroundLaiziResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.GroundLaiziResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GroundLaiziResponse.displayName = 'proto.game.GroundLaiziResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GroundLaiziResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GroundLaiziResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GroundLaiziResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GroundLaiziResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    card: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GroundLaiziResponse}
 */
proto.game.GroundLaiziResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GroundLaiziResponse;
  return proto.game.GroundLaiziResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GroundLaiziResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GroundLaiziResponse}
 */
proto.game.GroundLaiziResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GroundLaiziResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GroundLaiziResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GroundLaiziResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GroundLaiziResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getCard();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 mode = 1;
 * @return {number}
 */
proto.game.GroundLaiziResponse.prototype.getMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.GroundLaiziResponse.prototype.setMode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 card = 2;
 * @return {number}
 */
proto.game.GroundLaiziResponse.prototype.getCard = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.GroundLaiziResponse.prototype.setCard = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.SpeakerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.SpeakerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.SpeakerRequest.displayName = 'proto.game.SpeakerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.SpeakerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.SpeakerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.SpeakerRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.SpeakerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.SpeakerRequest}
 */
proto.game.SpeakerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.SpeakerRequest;
  return proto.game.SpeakerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.SpeakerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.SpeakerRequest}
 */
proto.game.SpeakerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.SpeakerRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SpeakerRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.SpeakerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SpeakerRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.game.SpeakerRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.SpeakerRequest.prototype.setContent = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.SpeakerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.SpeakerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.SpeakerResponse.displayName = 'proto.game.SpeakerResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.SpeakerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.SpeakerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.SpeakerResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.SpeakerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.SpeakerResponse}
 */
proto.game.SpeakerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.SpeakerResponse;
  return proto.game.SpeakerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.SpeakerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.SpeakerResponse}
 */
proto.game.SpeakerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.SpeakerResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SpeakerResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.SpeakerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SpeakerResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.SpeakerResponse.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.SpeakerResponse.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.game.SpeakerResponse.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.SpeakerResponse.prototype.setContent = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.SettleForRoundResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.SettleForRoundResponse.repeatedFields_, null);
};
goog.inherits(proto.game.SettleForRoundResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.SettleForRoundResponse.displayName = 'proto.game.SettleForRoundResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.SettleForRoundResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.SettleForRoundResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.SettleForRoundResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.SettleForRoundResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.SettleForRoundResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseScore: jspb.Message.getFieldWithDefault(msg, 1, 0),
    multiple: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playerDataList: jspb.Message.toObjectList(msg.getPlayerDataList(),
    proto.game.SettleForRoundResponse.PlayerData.toObject, includeInstance),
    isSpring: jspb.Message.getFieldWithDefault(msg, 4, 0),
    autoStart: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isMatch: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.SettleForRoundResponse}
 */
proto.game.SettleForRoundResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.SettleForRoundResponse;
  return proto.game.SettleForRoundResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.SettleForRoundResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.SettleForRoundResponse}
 */
proto.game.SettleForRoundResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBaseScore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMultiple(value);
      break;
    case 3:
      var value = new proto.game.SettleForRoundResponse.PlayerData;
      reader.readMessage(value,proto.game.SettleForRoundResponse.PlayerData.deserializeBinaryFromReader);
      msg.addPlayerData(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsSpring(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAutoStart(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsMatch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.SettleForRoundResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SettleForRoundResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.SettleForRoundResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SettleForRoundResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBaseScore();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getMultiple();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getPlayerDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.game.SettleForRoundResponse.PlayerData.serializeBinaryToWriter
    );
  }
  f = this.getIsSpring();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getAutoStart();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getIsMatch();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 base_score = 1;
 * @return {number}
 */
proto.game.SettleForRoundResponse.prototype.getBaseScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.prototype.setBaseScore = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 multiple = 2;
 * @return {number}
 */
proto.game.SettleForRoundResponse.prototype.getMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.prototype.setMultiple = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated PlayerData player_data = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.SettleForRoundResponse.PlayerData>}
 */
proto.game.SettleForRoundResponse.prototype.getPlayerDataList = function() {
  return /** @type{!Array.<!proto.game.SettleForRoundResponse.PlayerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.SettleForRoundResponse.PlayerData, 3));
};


/** @param {!Array.<!proto.game.SettleForRoundResponse.PlayerData>} value */
proto.game.SettleForRoundResponse.prototype.setPlayerDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.game.SettleForRoundResponse.PlayerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.SettleForRoundResponse.PlayerData}
 */
proto.game.SettleForRoundResponse.prototype.addPlayerData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.game.SettleForRoundResponse.PlayerData, opt_index);
};


proto.game.SettleForRoundResponse.prototype.clearPlayerDataList = function() {
  this.setPlayerDataList([]);
};


/**
 * optional uint32 is_spring = 4;
 * @return {number}
 */
proto.game.SettleForRoundResponse.prototype.getIsSpring = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.prototype.setIsSpring = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 auto_start = 5;
 * @return {number}
 */
proto.game.SettleForRoundResponse.prototype.getAutoStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.prototype.setAutoStart = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 is_match = 6;
 * @return {number}
 */
proto.game.SettleForRoundResponse.prototype.getIsMatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.prototype.setIsMatch = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.SettleForRoundResponse.PlayerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.SettleForRoundResponse.PlayerData.repeatedFields_, null);
};
goog.inherits(proto.game.SettleForRoundResponse.PlayerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.SettleForRoundResponse.PlayerData.displayName = 'proto.game.SettleForRoundResponse.PlayerData';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.SettleForRoundResponse.PlayerData.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.SettleForRoundResponse.PlayerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.SettleForRoundResponse.PlayerData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.SettleForRoundResponse.PlayerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cardsInHandList: jspb.Message.toObjectList(msg.getCardsInHandList(),
    proto.game.Card.toObject, includeInstance),
    score: jspb.Message.getFieldWithDefault(msg, 3, 0),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bombCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isWin: jspb.Message.getFieldWithDefault(msg, 6, 0),
    gold: jspb.Message.getFieldWithDefault(msg, 7, 0),
    goldDelta: jspb.Message.getFieldWithDefault(msg, 8, 0),
    exp: jspb.Message.getFieldWithDefault(msg, 9, 0),
    expDelta: jspb.Message.getFieldWithDefault(msg, 10, 0),
    level: jspb.Message.getFieldWithDefault(msg, 11, 0),
    levelDelta: jspb.Message.getFieldWithDefault(msg, 12, 0),
    continueWin: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.SettleForRoundResponse.PlayerData}
 */
proto.game.SettleForRoundResponse.PlayerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.SettleForRoundResponse.PlayerData;
  return proto.game.SettleForRoundResponse.PlayerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.SettleForRoundResponse.PlayerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.SettleForRoundResponse.PlayerData}
 */
proto.game.SettleForRoundResponse.PlayerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = new proto.game.Card;
      reader.readMessage(value,proto.game.Card.deserializeBinaryFromReader);
      msg.addCardsInHand(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBombCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsWin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGoldDelta(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExp(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExpDelta(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelDelta(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setContinueWin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.SettleForRoundResponse.PlayerData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SettleForRoundResponse.PlayerData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getCardsInHandList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.game.Card.serializeBinaryToWriter
    );
  }
  f = this.getScore();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getBombCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getIsWin();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = this.getGoldDelta();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = this.getExp();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = this.getExpDelta();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = this.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = this.getLevelDelta();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = this.getContinueWin();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated Card cards_in_hand = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.Card>}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getCardsInHandList = function() {
  return /** @type{!Array.<!proto.game.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.Card, 2));
};


/** @param {!Array.<!proto.game.Card>} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setCardsInHandList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.game.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.Card}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.addCardsInHand = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.game.Card, opt_index);
};


proto.game.SettleForRoundResponse.PlayerData.prototype.clearCardsInHandList = function() {
  this.setCardsInHandList([]);
};


/**
 * optional int32 score = 3;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setScore = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setTotal = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 bomb_count = 5;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getBombCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setBombCount = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int32 is_win = 6;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getIsWin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setIsWin = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint32 gold = 7;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setGold = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int32 gold_delta = 8;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getGoldDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setGoldDelta = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional uint32 exp = 9;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setExp = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional int32 exp_delta = 10;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getExpDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setExpDelta = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional uint32 level = 11;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setLevel = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional int32 level_delta = 12;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getLevelDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setLevelDelta = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional uint32 continue_win = 13;
 * @return {number}
 */
proto.game.SettleForRoundResponse.PlayerData.prototype.getContinueWin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.game.SettleForRoundResponse.PlayerData.prototype.setContinueWin = function(value) {
  jspb.Message.setField(this, 13, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.SettleForRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.SettleForRoomResponse.repeatedFields_, null);
};
goog.inherits(proto.game.SettleForRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.SettleForRoomResponse.displayName = 'proto.game.SettleForRoomResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.SettleForRoomResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.SettleForRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.SettleForRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.SettleForRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.SettleForRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    flag: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerDataList: jspb.Message.toObjectList(msg.getPlayerDataList(),
    proto.game.SettleForRoomResponse.PlayerData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.SettleForRoomResponse}
 */
proto.game.SettleForRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.SettleForRoomResponse;
  return proto.game.SettleForRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.SettleForRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.SettleForRoomResponse}
 */
proto.game.SettleForRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlag(value);
      break;
    case 2:
      var value = new proto.game.SettleForRoomResponse.PlayerData;
      reader.readMessage(value,proto.game.SettleForRoomResponse.PlayerData.deserializeBinaryFromReader);
      msg.addPlayerData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.SettleForRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SettleForRoomResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.SettleForRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SettleForRoomResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFlag();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayerDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.game.SettleForRoomResponse.PlayerData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 flag = 1;
 * @return {number}
 */
proto.game.SettleForRoomResponse.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.SettleForRoomResponse.prototype.setFlag = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated PlayerData player_data = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.SettleForRoomResponse.PlayerData>}
 */
proto.game.SettleForRoomResponse.prototype.getPlayerDataList = function() {
  return /** @type{!Array.<!proto.game.SettleForRoomResponse.PlayerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.SettleForRoomResponse.PlayerData, 2));
};


/** @param {!Array.<!proto.game.SettleForRoomResponse.PlayerData>} value */
proto.game.SettleForRoomResponse.prototype.setPlayerDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.game.SettleForRoomResponse.PlayerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.SettleForRoomResponse.PlayerData}
 */
proto.game.SettleForRoomResponse.prototype.addPlayerData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.game.SettleForRoomResponse.PlayerData, opt_index);
};


proto.game.SettleForRoomResponse.prototype.clearPlayerDataList = function() {
  this.setPlayerDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.SettleForRoomResponse.PlayerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.SettleForRoomResponse.PlayerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.SettleForRoomResponse.PlayerData.displayName = 'proto.game.SettleForRoomResponse.PlayerData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.SettleForRoomResponse.PlayerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.SettleForRoomResponse.PlayerData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.SettleForRoomResponse.PlayerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    seat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalScore: jspb.Message.getFieldWithDefault(msg, 3, 0),
    topScore: jspb.Message.getFieldWithDefault(msg, 4, 0),
    winTotalCnt: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isOwner: jspb.Message.getFieldWithDefault(msg, 6, 0),
    rewardchip: jspb.Message.getFieldWithDefault(msg, 7, 0),
    allBoomCnt: jspb.Message.getFieldWithDefault(msg, 8, 0),
    loseTotalCnt: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.SettleForRoomResponse.PlayerData}
 */
proto.game.SettleForRoomResponse.PlayerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.SettleForRoomResponse.PlayerData;
  return proto.game.SettleForRoomResponse.PlayerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.SettleForRoomResponse.PlayerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.SettleForRoomResponse.PlayerData}
 */
proto.game.SettleForRoomResponse.PlayerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalScore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTopScore(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWinTotalCnt(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsOwner(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRewardchip(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAllBoomCnt(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLoseTotalCnt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.SettleForRoomResponse.PlayerData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SettleForRoomResponse.PlayerData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getSeat();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getTotalScore();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getTopScore();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getWinTotalCnt();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getIsOwner();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getRewardchip();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = this.getAllBoomCnt();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = this.getLoseTotalCnt();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.SettleForRoomResponse.PlayerData.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 seat = 2;
 * @return {number}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.getSeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.SettleForRoomResponse.PlayerData.prototype.setSeat = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 total_score = 3;
 * @return {number}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.getTotalScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.SettleForRoomResponse.PlayerData.prototype.setTotalScore = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 top_score = 4;
 * @return {number}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.getTopScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.SettleForRoomResponse.PlayerData.prototype.setTopScore = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 win_total_cnt = 5;
 * @return {number}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.getWinTotalCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.SettleForRoomResponse.PlayerData.prototype.setWinTotalCnt = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 is_owner = 6;
 * @return {number}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.getIsOwner = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.SettleForRoomResponse.PlayerData.prototype.setIsOwner = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint32 rewardchip = 7;
 * @return {number}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.getRewardchip = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.game.SettleForRoomResponse.PlayerData.prototype.setRewardchip = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional uint32 all_boom_cnt = 8;
 * @return {number}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.getAllBoomCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.game.SettleForRoomResponse.PlayerData.prototype.setAllBoomCnt = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional uint32 lose_total_cnt = 9;
 * @return {number}
 */
proto.game.SettleForRoomResponse.PlayerData.prototype.getLoseTotalCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.game.SettleForRoomResponse.PlayerData.prototype.setLoseTotalCnt = function(value) {
  jspb.Message.setField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.SettleForDrawResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.SettleForDrawResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.SettleForDrawResponse.displayName = 'proto.game.SettleForDrawResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.SettleForDrawResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.SettleForDrawResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.SettleForDrawResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.SettleForDrawResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.SettleForDrawResponse}
 */
proto.game.SettleForDrawResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.SettleForDrawResponse;
  return proto.game.SettleForDrawResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.SettleForDrawResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.SettleForDrawResponse}
 */
proto.game.SettleForDrawResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.SettleForDrawResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SettleForDrawResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.SettleForDrawResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.SettleForDrawResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.CostGoldResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.CostGoldResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.CostGoldResponse.displayName = 'proto.game.CostGoldResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.CostGoldResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.CostGoldResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.CostGoldResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.CostGoldResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gold: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.CostGoldResponse}
 */
proto.game.CostGoldResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.CostGoldResponse;
  return proto.game.CostGoldResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.CostGoldResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.CostGoldResponse}
 */
proto.game.CostGoldResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.CostGoldResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.CostGoldResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.CostGoldResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.CostGoldResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 gold = 1;
 * @return {number}
 */
proto.game.CostGoldResponse.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.CostGoldResponse.prototype.setGold = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GoldNotEnoughResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.GoldNotEnoughResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GoldNotEnoughResponse.displayName = 'proto.game.GoldNotEnoughResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GoldNotEnoughResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GoldNotEnoughResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GoldNotEnoughResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GoldNotEnoughResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currentGold: jspb.Message.getFieldWithDefault(msg, 2, 0),
    needGold: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GoldNotEnoughResponse}
 */
proto.game.GoldNotEnoughResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GoldNotEnoughResponse;
  return proto.game.GoldNotEnoughResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GoldNotEnoughResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GoldNotEnoughResponse}
 */
proto.game.GoldNotEnoughResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentGold(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNeedGold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GoldNotEnoughResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GoldNotEnoughResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GoldNotEnoughResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GoldNotEnoughResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getCurrentGold();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getNeedGold();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string player_id = 1;
 * @return {string}
 */
proto.game.GoldNotEnoughResponse.prototype.getPlayerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.GoldNotEnoughResponse.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 current_gold = 2;
 * @return {number}
 */
proto.game.GoldNotEnoughResponse.prototype.getCurrentGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.GoldNotEnoughResponse.prototype.setCurrentGold = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 need_gold = 3;
 * @return {number}
 */
proto.game.GoldNotEnoughResponse.prototype.getNeedGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.GoldNotEnoughResponse.prototype.setNeedGold = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.EnterMatchViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.EnterMatchViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.EnterMatchViewRequest.displayName = 'proto.game.EnterMatchViewRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.EnterMatchViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.EnterMatchViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.EnterMatchViewRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.EnterMatchViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kwargs: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.EnterMatchViewRequest}
 */
proto.game.EnterMatchViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.EnterMatchViewRequest;
  return proto.game.EnterMatchViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.EnterMatchViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.EnterMatchViewRequest}
 */
proto.game.EnterMatchViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKwargs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.EnterMatchViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterMatchViewRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.EnterMatchViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterMatchViewRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getKwargs();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string player_id = 1;
 * @return {string}
 */
proto.game.EnterMatchViewRequest.prototype.getPlayerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.EnterMatchViewRequest.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string kwargs = 2;
 * @return {string}
 */
proto.game.EnterMatchViewRequest.prototype.getKwargs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.EnterMatchViewRequest.prototype.setKwargs = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.EnterMatchViewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.EnterMatchViewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.EnterMatchViewResponse.displayName = 'proto.game.EnterMatchViewResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.EnterMatchViewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.EnterMatchViewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.EnterMatchViewResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.EnterMatchViewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playerNumMax: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isWaiting: jspb.Message.getFieldWithDefault(msg, 4, 0),
    gameId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    tableLevel: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.EnterMatchViewResponse}
 */
proto.game.EnterMatchViewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.EnterMatchViewResponse;
  return proto.game.EnterMatchViewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.EnterMatchViewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.EnterMatchViewResponse}
 */
proto.game.EnterMatchViewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNumMax(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsWaiting(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTableLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.EnterMatchViewResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterMatchViewResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.EnterMatchViewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.EnterMatchViewResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayerNum();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getPlayerNumMax();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getIsWaiting();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getGameId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getTableLevel();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.EnterMatchViewResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.EnterMatchViewResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 player_num = 2;
 * @return {number}
 */
proto.game.EnterMatchViewResponse.prototype.getPlayerNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.EnterMatchViewResponse.prototype.setPlayerNum = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 player_num_max = 3;
 * @return {number}
 */
proto.game.EnterMatchViewResponse.prototype.getPlayerNumMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.EnterMatchViewResponse.prototype.setPlayerNumMax = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 is_waiting = 4;
 * @return {number}
 */
proto.game.EnterMatchViewResponse.prototype.getIsWaiting = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.EnterMatchViewResponse.prototype.setIsWaiting = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 game_id = 5;
 * @return {number}
 */
proto.game.EnterMatchViewResponse.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.EnterMatchViewResponse.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 table_level = 6;
 * @return {number}
 */
proto.game.EnterMatchViewResponse.prototype.getTableLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.EnterMatchViewResponse.prototype.setTableLevel = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.JoinMatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.JoinMatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.JoinMatchRequest.displayName = 'proto.game.JoinMatchRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.JoinMatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.JoinMatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.JoinMatchRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.JoinMatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    info: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kwargs: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.JoinMatchRequest}
 */
proto.game.JoinMatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.JoinMatchRequest;
  return proto.game.JoinMatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.JoinMatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.JoinMatchRequest}
 */
proto.game.JoinMatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKwargs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.JoinMatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.JoinMatchRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.JoinMatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.JoinMatchRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getInfo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getKwargs();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string player_id = 1;
 * @return {string}
 */
proto.game.JoinMatchRequest.prototype.getPlayerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.JoinMatchRequest.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string info = 2;
 * @return {string}
 */
proto.game.JoinMatchRequest.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.JoinMatchRequest.prototype.setInfo = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string kwargs = 3;
 * @return {string}
 */
proto.game.JoinMatchRequest.prototype.getKwargs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.JoinMatchRequest.prototype.setKwargs = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.JoinMatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.JoinMatchResponse.repeatedFields_, null);
};
goog.inherits(proto.game.JoinMatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.JoinMatchResponse.displayName = 'proto.game.JoinMatchResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.JoinMatchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.JoinMatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.JoinMatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.JoinMatchResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.JoinMatchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playerNumMax: jspb.Message.getFieldWithDefault(msg, 3, 0),
    awardDataList: jspb.Message.toObjectList(msg.getAwardDataList(),
    proto.game.JoinMatchResponse.AwardData.toObject, includeInstance),
    gameId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    tableLevel: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.JoinMatchResponse}
 */
proto.game.JoinMatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.JoinMatchResponse;
  return proto.game.JoinMatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.JoinMatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.JoinMatchResponse}
 */
proto.game.JoinMatchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNumMax(value);
      break;
    case 4:
      var value = new proto.game.JoinMatchResponse.AwardData;
      reader.readMessage(value,proto.game.JoinMatchResponse.AwardData.deserializeBinaryFromReader);
      msg.addAwardData(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTableLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.JoinMatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.JoinMatchResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.JoinMatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.JoinMatchResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayerNum();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getPlayerNumMax();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getAwardDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.game.JoinMatchResponse.AwardData.serializeBinaryToWriter
    );
  }
  f = this.getGameId();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getTableLevel();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.JoinMatchResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.JoinMatchResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 player_num = 2;
 * @return {number}
 */
proto.game.JoinMatchResponse.prototype.getPlayerNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.JoinMatchResponse.prototype.setPlayerNum = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 player_num_max = 3;
 * @return {number}
 */
proto.game.JoinMatchResponse.prototype.getPlayerNumMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.JoinMatchResponse.prototype.setPlayerNumMax = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated AwardData award_data = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.JoinMatchResponse.AwardData>}
 */
proto.game.JoinMatchResponse.prototype.getAwardDataList = function() {
  return /** @type{!Array.<!proto.game.JoinMatchResponse.AwardData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.JoinMatchResponse.AwardData, 4));
};


/** @param {!Array.<!proto.game.JoinMatchResponse.AwardData>} value */
proto.game.JoinMatchResponse.prototype.setAwardDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.game.JoinMatchResponse.AwardData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.JoinMatchResponse.AwardData}
 */
proto.game.JoinMatchResponse.prototype.addAwardData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.game.JoinMatchResponse.AwardData, opt_index);
};


proto.game.JoinMatchResponse.prototype.clearAwardDataList = function() {
  this.setAwardDataList([]);
};


/**
 * optional uint32 game_id = 5;
 * @return {number}
 */
proto.game.JoinMatchResponse.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.JoinMatchResponse.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 table_level = 6;
 * @return {number}
 */
proto.game.JoinMatchResponse.prototype.getTableLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.JoinMatchResponse.prototype.setTableLevel = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.JoinMatchResponse.AwardData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.JoinMatchResponse.AwardData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.JoinMatchResponse.AwardData.displayName = 'proto.game.JoinMatchResponse.AwardData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.JoinMatchResponse.AwardData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.JoinMatchResponse.AwardData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.JoinMatchResponse.AwardData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.JoinMatchResponse.AwardData.toObject = function(includeInstance, msg) {
  var f, obj = {
    startRank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endRank: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gold: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.JoinMatchResponse.AwardData}
 */
proto.game.JoinMatchResponse.AwardData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.JoinMatchResponse.AwardData;
  return proto.game.JoinMatchResponse.AwardData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.JoinMatchResponse.AwardData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.JoinMatchResponse.AwardData}
 */
proto.game.JoinMatchResponse.AwardData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStartRank(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEndRank(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.JoinMatchResponse.AwardData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.JoinMatchResponse.AwardData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.JoinMatchResponse.AwardData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.JoinMatchResponse.AwardData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStartRank();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getEndRank();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 start_rank = 1;
 * @return {number}
 */
proto.game.JoinMatchResponse.AwardData.prototype.getStartRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.JoinMatchResponse.AwardData.prototype.setStartRank = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 end_rank = 2;
 * @return {number}
 */
proto.game.JoinMatchResponse.AwardData.prototype.getEndRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.JoinMatchResponse.AwardData.prototype.setEndRank = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 gold = 3;
 * @return {number}
 */
proto.game.JoinMatchResponse.AwardData.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.JoinMatchResponse.AwardData.prototype.setGold = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.JoinMatchRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.JoinMatchRoomResponse.repeatedFields_, null);
};
goog.inherits(proto.game.JoinMatchRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.JoinMatchRoomResponse.displayName = 'proto.game.JoinMatchRoomResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.JoinMatchRoomResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.JoinMatchRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.JoinMatchRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.JoinMatchRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.JoinMatchRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    matchId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playerNum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerNumMax: jspb.Message.getFieldWithDefault(msg, 4, 0),
    awardDataList: jspb.Message.toObjectList(msg.getAwardDataList(),
    proto.game.JoinMatchRoomResponse.AwardData.toObject, includeInstance),
    gameId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    tableLevel: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.JoinMatchRoomResponse}
 */
proto.game.JoinMatchRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.JoinMatchRoomResponse;
  return proto.game.JoinMatchRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.JoinMatchRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.JoinMatchRoomResponse}
 */
proto.game.JoinMatchRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNumMax(value);
      break;
    case 5:
      var value = new proto.game.JoinMatchRoomResponse.AwardData;
      reader.readMessage(value,proto.game.JoinMatchRoomResponse.AwardData.deserializeBinaryFromReader);
      msg.addAwardData(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTableLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.JoinMatchRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.JoinMatchRoomResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.JoinMatchRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.JoinMatchRoomResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getPlayerNum();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getPlayerNumMax();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getAwardDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.game.JoinMatchRoomResponse.AwardData.serializeBinaryToWriter
    );
  }
  f = this.getGameId();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getTableLevel();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.JoinMatchRoomResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.JoinMatchRoomResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 match_id = 2;
 * @return {number}
 */
proto.game.JoinMatchRoomResponse.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.JoinMatchRoomResponse.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 player_num = 3;
 * @return {number}
 */
proto.game.JoinMatchRoomResponse.prototype.getPlayerNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.JoinMatchRoomResponse.prototype.setPlayerNum = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 player_num_max = 4;
 * @return {number}
 */
proto.game.JoinMatchRoomResponse.prototype.getPlayerNumMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.JoinMatchRoomResponse.prototype.setPlayerNumMax = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated AwardData award_data = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.JoinMatchRoomResponse.AwardData>}
 */
proto.game.JoinMatchRoomResponse.prototype.getAwardDataList = function() {
  return /** @type{!Array.<!proto.game.JoinMatchRoomResponse.AwardData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.JoinMatchRoomResponse.AwardData, 5));
};


/** @param {!Array.<!proto.game.JoinMatchRoomResponse.AwardData>} value */
proto.game.JoinMatchRoomResponse.prototype.setAwardDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.game.JoinMatchRoomResponse.AwardData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.JoinMatchRoomResponse.AwardData}
 */
proto.game.JoinMatchRoomResponse.prototype.addAwardData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.game.JoinMatchRoomResponse.AwardData, opt_index);
};


proto.game.JoinMatchRoomResponse.prototype.clearAwardDataList = function() {
  this.setAwardDataList([]);
};


/**
 * optional uint32 game_id = 6;
 * @return {number}
 */
proto.game.JoinMatchRoomResponse.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.JoinMatchRoomResponse.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint32 table_level = 7;
 * @return {number}
 */
proto.game.JoinMatchRoomResponse.prototype.getTableLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.game.JoinMatchRoomResponse.prototype.setTableLevel = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.JoinMatchRoomResponse.AwardData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.JoinMatchRoomResponse.AwardData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.JoinMatchRoomResponse.AwardData.displayName = 'proto.game.JoinMatchRoomResponse.AwardData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.JoinMatchRoomResponse.AwardData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.JoinMatchRoomResponse.AwardData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.JoinMatchRoomResponse.AwardData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.JoinMatchRoomResponse.AwardData.toObject = function(includeInstance, msg) {
  var f, obj = {
    startRank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endRank: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gold: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.JoinMatchRoomResponse.AwardData}
 */
proto.game.JoinMatchRoomResponse.AwardData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.JoinMatchRoomResponse.AwardData;
  return proto.game.JoinMatchRoomResponse.AwardData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.JoinMatchRoomResponse.AwardData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.JoinMatchRoomResponse.AwardData}
 */
proto.game.JoinMatchRoomResponse.AwardData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStartRank(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEndRank(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.JoinMatchRoomResponse.AwardData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.JoinMatchRoomResponse.AwardData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.JoinMatchRoomResponse.AwardData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.JoinMatchRoomResponse.AwardData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStartRank();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getEndRank();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 start_rank = 1;
 * @return {number}
 */
proto.game.JoinMatchRoomResponse.AwardData.prototype.getStartRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.JoinMatchRoomResponse.AwardData.prototype.setStartRank = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 end_rank = 2;
 * @return {number}
 */
proto.game.JoinMatchRoomResponse.AwardData.prototype.getEndRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.JoinMatchRoomResponse.AwardData.prototype.setEndRank = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 gold = 3;
 * @return {number}
 */
proto.game.JoinMatchRoomResponse.AwardData.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.JoinMatchRoomResponse.AwardData.prototype.setGold = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchPlayerNumResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MatchPlayerNumResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchPlayerNumResponse.displayName = 'proto.game.MatchPlayerNumResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchPlayerNumResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchPlayerNumResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchPlayerNumResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchPlayerNumResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerNum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerNumMax: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchPlayerNumResponse}
 */
proto.game.MatchPlayerNumResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchPlayerNumResponse;
  return proto.game.MatchPlayerNumResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchPlayerNumResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchPlayerNumResponse}
 */
proto.game.MatchPlayerNumResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNumMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchPlayerNumResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchPlayerNumResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchPlayerNumResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchPlayerNumResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayerNum();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPlayerNumMax();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 player_num = 1;
 * @return {number}
 */
proto.game.MatchPlayerNumResponse.prototype.getPlayerNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MatchPlayerNumResponse.prototype.setPlayerNum = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 player_num_max = 2;
 * @return {number}
 */
proto.game.MatchPlayerNumResponse.prototype.getPlayerNumMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MatchPlayerNumResponse.prototype.setPlayerNumMax = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchStartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MatchStartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchStartResponse.displayName = 'proto.game.MatchStartResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchStartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchStartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchStartResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchStartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchStartResponse}
 */
proto.game.MatchStartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchStartResponse;
  return proto.game.MatchStartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchStartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchStartResponse}
 */
proto.game.MatchStartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchStartResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchStartResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchStartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchStartResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchReconnectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MatchReconnectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchReconnectResponse.displayName = 'proto.game.MatchReconnectResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchReconnectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchReconnectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchReconnectResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchReconnectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    phaseId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    score: jspb.Message.getFieldWithDefault(msg, 4, 0),
    playerNumMax: jspb.Message.getFieldWithDefault(msg, 5, 0),
    playerNum: jspb.Message.getFieldWithDefault(msg, 6, 0),
    rank: jspb.Message.getFieldWithDefault(msg, 7, 0),
    leftSec: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchReconnectResponse}
 */
proto.game.MatchReconnectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchReconnectResponse;
  return proto.game.MatchReconnectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchReconnectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchReconnectResponse}
 */
proto.game.MatchReconnectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPhaseId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNumMax(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNum(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRank(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeftSec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchReconnectResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchReconnectResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchReconnectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchReconnectResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPhaseId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getScore();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getPlayerNumMax();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getPlayerNum();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getRank();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = this.getLeftSec();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional uint32 match_id = 1;
 * @return {number}
 */
proto.game.MatchReconnectResponse.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MatchReconnectResponse.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 phase_id = 2;
 * @return {number}
 */
proto.game.MatchReconnectResponse.prototype.getPhaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MatchReconnectResponse.prototype.setPhaseId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 room_id = 3;
 * @return {number}
 */
proto.game.MatchReconnectResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.MatchReconnectResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 score = 4;
 * @return {number}
 */
proto.game.MatchReconnectResponse.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.MatchReconnectResponse.prototype.setScore = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 player_num_max = 5;
 * @return {number}
 */
proto.game.MatchReconnectResponse.prototype.getPlayerNumMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.MatchReconnectResponse.prototype.setPlayerNumMax = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 player_num = 6;
 * @return {number}
 */
proto.game.MatchReconnectResponse.prototype.getPlayerNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.MatchReconnectResponse.prototype.setPlayerNum = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint32 rank = 7;
 * @return {number}
 */
proto.game.MatchReconnectResponse.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.game.MatchReconnectResponse.prototype.setRank = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int32 left_sec = 8;
 * @return {number}
 */
proto.game.MatchReconnectResponse.prototype.getLeftSec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.game.MatchReconnectResponse.prototype.setLeftSec = function(value) {
  jspb.Message.setField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.QuitMatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.QuitMatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.QuitMatchRequest.displayName = 'proto.game.QuitMatchRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.QuitMatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.QuitMatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.QuitMatchRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.QuitMatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.QuitMatchRequest}
 */
proto.game.QuitMatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.QuitMatchRequest;
  return proto.game.QuitMatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.QuitMatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.QuitMatchRequest}
 */
proto.game.QuitMatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.QuitMatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitMatchRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.QuitMatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitMatchRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string player_id = 1;
 * @return {string}
 */
proto.game.QuitMatchRequest.prototype.getPlayerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.QuitMatchRequest.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.QuitMatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.QuitMatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.QuitMatchResponse.displayName = 'proto.game.QuitMatchResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.QuitMatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.QuitMatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.QuitMatchResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.QuitMatchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rank: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.QuitMatchResponse}
 */
proto.game.QuitMatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.QuitMatchResponse;
  return proto.game.QuitMatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.QuitMatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.QuitMatchResponse}
 */
proto.game.QuitMatchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.QuitMatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitMatchResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.QuitMatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitMatchResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getRank();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.QuitMatchResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.QuitMatchResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 rank = 2;
 * @return {number}
 */
proto.game.QuitMatchResponse.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.QuitMatchResponse.prototype.setRank = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.KnockOutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.KnockOutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.KnockOutResponse.displayName = 'proto.game.KnockOutResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.KnockOutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.KnockOutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.KnockOutResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.KnockOutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    phase: jspb.Message.getFieldWithDefault(msg, 2, 0),
    knockReason: jspb.Message.getFieldWithDefault(msg, 3, 0),
    gold: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.KnockOutResponse}
 */
proto.game.KnockOutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.KnockOutResponse;
  return proto.game.KnockOutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.KnockOutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.KnockOutResponse}
 */
proto.game.KnockOutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPhase(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKnockReason(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.KnockOutResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.KnockOutResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.KnockOutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.KnockOutResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getPhase();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getKnockReason();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional int32 rank = 1;
 * @return {number}
 */
proto.game.KnockOutResponse.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.KnockOutResponse.prototype.setRank = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 phase = 2;
 * @return {number}
 */
proto.game.KnockOutResponse.prototype.getPhase = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.KnockOutResponse.prototype.setPhase = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 knock_reason = 3;
 * @return {number}
 */
proto.game.KnockOutResponse.prototype.getKnockReason = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.KnockOutResponse.prototype.setKnockReason = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 gold = 4;
 * @return {number}
 */
proto.game.KnockOutResponse.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.KnockOutResponse.prototype.setGold = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.PlayerRankResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.PlayerRankResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.PlayerRankResponse.displayName = 'proto.game.PlayerRankResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.PlayerRankResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.PlayerRankResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.PlayerRankResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.PlayerRankResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerNum: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.PlayerRankResponse}
 */
proto.game.PlayerRankResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.PlayerRankResponse;
  return proto.game.PlayerRankResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.PlayerRankResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.PlayerRankResponse}
 */
proto.game.PlayerRankResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.PlayerRankResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.PlayerRankResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.PlayerRankResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.PlayerRankResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getPlayerNum();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional int32 rank = 1;
 * @return {number}
 */
proto.game.PlayerRankResponse.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.PlayerRankResponse.prototype.setRank = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 player_num = 2;
 * @return {number}
 */
proto.game.PlayerRankResponse.prototype.getPlayerNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.PlayerRankResponse.prototype.setPlayerNum = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.LimitScoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.LimitScoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.LimitScoreResponse.displayName = 'proto.game.LimitScoreResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.LimitScoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.LimitScoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.LimitScoreResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.LimitScoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    score: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.LimitScoreResponse}
 */
proto.game.LimitScoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.LimitScoreResponse;
  return proto.game.LimitScoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.LimitScoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.LimitScoreResponse}
 */
proto.game.LimitScoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.LimitScoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.LimitScoreResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.LimitScoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.LimitScoreResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getScore();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 score = 1;
 * @return {number}
 */
proto.game.LimitScoreResponse.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.LimitScoreResponse.prototype.setScore = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchPhaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MatchPhaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchPhaseResponse.displayName = 'proto.game.MatchPhaseResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchPhaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchPhaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchPhaseResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchPhaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    phase: jspb.Message.getFieldWithDefault(msg, 1, 0),
    remainTable: jspb.Message.getFieldWithDefault(msg, 2, 0),
    round: jspb.Message.getFieldWithDefault(msg, 3, 0),
    leftSec: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchPhaseResponse}
 */
proto.game.MatchPhaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchPhaseResponse;
  return proto.game.MatchPhaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchPhaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchPhaseResponse}
 */
proto.game.MatchPhaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPhase(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemainTable(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRound(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeftSec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchPhaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchPhaseResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchPhaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchPhaseResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPhase();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getRemainTable();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getRound();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getLeftSec();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 phase = 1;
 * @return {number}
 */
proto.game.MatchPhaseResponse.prototype.getPhase = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MatchPhaseResponse.prototype.setPhase = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 remain_table = 2;
 * @return {number}
 */
proto.game.MatchPhaseResponse.prototype.getRemainTable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MatchPhaseResponse.prototype.setRemainTable = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 round = 3;
 * @return {number}
 */
proto.game.MatchPhaseResponse.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.MatchPhaseResponse.prototype.setRound = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 left_sec = 4;
 * @return {number}
 */
proto.game.MatchPhaseResponse.prototype.getLeftSec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.MatchPhaseResponse.prototype.setLeftSec = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.WaitMatchPhaseEndResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.WaitMatchPhaseEndResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.WaitMatchPhaseEndResponse.displayName = 'proto.game.WaitMatchPhaseEndResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.WaitMatchPhaseEndResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.WaitMatchPhaseEndResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.WaitMatchPhaseEndResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.WaitMatchPhaseEndResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    remainTable: jspb.Message.getFieldWithDefault(msg, 1, 0),
    phase: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.WaitMatchPhaseEndResponse}
 */
proto.game.WaitMatchPhaseEndResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.WaitMatchPhaseEndResponse;
  return proto.game.WaitMatchPhaseEndResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.WaitMatchPhaseEndResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.WaitMatchPhaseEndResponse}
 */
proto.game.WaitMatchPhaseEndResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemainTable(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPhase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.WaitMatchPhaseEndResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.WaitMatchPhaseEndResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.WaitMatchPhaseEndResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.WaitMatchPhaseEndResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRemainTable();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getPhase();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional int32 remain_table = 1;
 * @return {number}
 */
proto.game.WaitMatchPhaseEndResponse.prototype.getRemainTable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.WaitMatchPhaseEndResponse.prototype.setRemainTable = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 phase = 2;
 * @return {number}
 */
proto.game.WaitMatchPhaseEndResponse.prototype.getPhase = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.WaitMatchPhaseEndResponse.prototype.setPhase = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchEndResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.MatchEndResponse.repeatedFields_, null);
};
goog.inherits(proto.game.MatchEndResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchEndResponse.displayName = 'proto.game.MatchEndResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.MatchEndResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchEndResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchEndResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchEndResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchEndResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.game.MatchEndResponse.ResultData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchEndResponse}
 */
proto.game.MatchEndResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchEndResponse;
  return proto.game.MatchEndResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchEndResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchEndResponse}
 */
proto.game.MatchEndResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 2:
      var value = new proto.game.MatchEndResponse.ResultData;
      reader.readMessage(value,proto.game.MatchEndResponse.ResultData.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchEndResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchEndResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchEndResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchEndResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.game.MatchEndResponse.ResultData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 rank = 1;
 * @return {number}
 */
proto.game.MatchEndResponse.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MatchEndResponse.prototype.setRank = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated ResultData result = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.MatchEndResponse.ResultData>}
 */
proto.game.MatchEndResponse.prototype.getResultList = function() {
  return /** @type{!Array.<!proto.game.MatchEndResponse.ResultData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.MatchEndResponse.ResultData, 2));
};


/** @param {!Array.<!proto.game.MatchEndResponse.ResultData>} value */
proto.game.MatchEndResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.game.MatchEndResponse.ResultData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.MatchEndResponse.ResultData}
 */
proto.game.MatchEndResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.game.MatchEndResponse.ResultData, opt_index);
};


proto.game.MatchEndResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchEndResponse.ResultData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MatchEndResponse.ResultData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchEndResponse.ResultData.displayName = 'proto.game.MatchEndResponse.ResultData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchEndResponse.ResultData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchEndResponse.ResultData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchEndResponse.ResultData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchEndResponse.ResultData.toObject = function(includeInstance, msg) {
  var f, obj = {
    rank: jspb.Message.getFieldWithDefault(msg, 1, 0),
    playerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gold: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchEndResponse.ResultData}
 */
proto.game.MatchEndResponse.ResultData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchEndResponse.ResultData;
  return proto.game.MatchEndResponse.ResultData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchEndResponse.ResultData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchEndResponse.ResultData}
 */
proto.game.MatchEndResponse.ResultData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchEndResponse.ResultData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchEndResponse.ResultData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchEndResponse.ResultData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchEndResponse.ResultData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRank();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getPlayerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional int32 rank = 1;
 * @return {number}
 */
proto.game.MatchEndResponse.ResultData.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MatchEndResponse.ResultData.prototype.setRank = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string player_id = 2;
 * @return {string}
 */
proto.game.MatchEndResponse.ResultData.prototype.getPlayerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.MatchEndResponse.ResultData.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 gold = 3;
 * @return {number}
 */
proto.game.MatchEndResponse.ResultData.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.MatchEndResponse.ResultData.prototype.setGold = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.PM_ClearMatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.PM_ClearMatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.PM_ClearMatchRequest.displayName = 'proto.game.PM_ClearMatchRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.PM_ClearMatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.PM_ClearMatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.PM_ClearMatchRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.PM_ClearMatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.PM_ClearMatchRequest}
 */
proto.game.PM_ClearMatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.PM_ClearMatchRequest;
  return proto.game.PM_ClearMatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.PM_ClearMatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.PM_ClearMatchRequest}
 */
proto.game.PM_ClearMatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.PM_ClearMatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.PM_ClearMatchRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.PM_ClearMatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.PM_ClearMatchRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 match_id = 1;
 * @return {number}
 */
proto.game.PM_ClearMatchRequest.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.PM_ClearMatchRequest.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.LoadPlusWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.LoadPlusWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.LoadPlusWebResponse.displayName = 'proto.game.LoadPlusWebResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.LoadPlusWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.LoadPlusWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.LoadPlusWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.LoadPlusWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gameId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tableLevel: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.LoadPlusWebResponse}
 */
proto.game.LoadPlusWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.LoadPlusWebResponse;
  return proto.game.LoadPlusWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.LoadPlusWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.LoadPlusWebResponse}
 */
proto.game.LoadPlusWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTableLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.LoadPlusWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.LoadPlusWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.LoadPlusWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.LoadPlusWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGameId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getTableLevel();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string addr = 1;
 * @return {string}
 */
proto.game.LoadPlusWebResponse.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.LoadPlusWebResponse.prototype.setAddr = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.game.LoadPlusWebResponse.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.LoadPlusWebResponse.prototype.setPort = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 game_id = 3;
 * @return {number}
 */
proto.game.LoadPlusWebResponse.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.LoadPlusWebResponse.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 table_level = 4;
 * @return {number}
 */
proto.game.LoadPlusWebResponse.prototype.getTableLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.LoadPlusWebResponse.prototype.setTableLevel = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.LoadMinusWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.LoadMinusWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.LoadMinusWebResponse.displayName = 'proto.game.LoadMinusWebResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.LoadMinusWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.LoadMinusWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.LoadMinusWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.LoadMinusWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gameId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tableLevel: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.LoadMinusWebResponse}
 */
proto.game.LoadMinusWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.LoadMinusWebResponse;
  return proto.game.LoadMinusWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.LoadMinusWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.LoadMinusWebResponse}
 */
proto.game.LoadMinusWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTableLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.LoadMinusWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.LoadMinusWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.LoadMinusWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.LoadMinusWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGameId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getTableLevel();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string addr = 1;
 * @return {string}
 */
proto.game.LoadMinusWebResponse.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.LoadMinusWebResponse.prototype.setAddr = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.game.LoadMinusWebResponse.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.LoadMinusWebResponse.prototype.setPort = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 game_id = 3;
 * @return {number}
 */
proto.game.LoadMinusWebResponse.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.LoadMinusWebResponse.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 table_level = 4;
 * @return {number}
 */
proto.game.LoadMinusWebResponse.prototype.getTableLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.LoadMinusWebResponse.prototype.setTableLevel = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.LoadBalanceWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.LoadBalanceWebResponse.repeatedFields_, null);
};
goog.inherits(proto.game.LoadBalanceWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.LoadBalanceWebResponse.displayName = 'proto.game.LoadBalanceWebResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.LoadBalanceWebResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.LoadBalanceWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.LoadBalanceWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.LoadBalanceWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.LoadBalanceWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    unitList: jspb.Message.toObjectList(msg.getUnitList(),
    proto.game.LoadBalanceWebResponse.Unit.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.LoadBalanceWebResponse}
 */
proto.game.LoadBalanceWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.LoadBalanceWebResponse;
  return proto.game.LoadBalanceWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.LoadBalanceWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.LoadBalanceWebResponse}
 */
proto.game.LoadBalanceWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.game.LoadBalanceWebResponse.Unit;
      reader.readMessage(value,proto.game.LoadBalanceWebResponse.Unit.deserializeBinaryFromReader);
      msg.addUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.LoadBalanceWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.LoadBalanceWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.LoadBalanceWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.LoadBalanceWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUnitList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.game.LoadBalanceWebResponse.Unit.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Unit unit = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.LoadBalanceWebResponse.Unit>}
 */
proto.game.LoadBalanceWebResponse.prototype.getUnitList = function() {
  return /** @type{!Array.<!proto.game.LoadBalanceWebResponse.Unit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.LoadBalanceWebResponse.Unit, 1));
};


/** @param {!Array.<!proto.game.LoadBalanceWebResponse.Unit>} value */
proto.game.LoadBalanceWebResponse.prototype.setUnitList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.game.LoadBalanceWebResponse.Unit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.LoadBalanceWebResponse.Unit}
 */
proto.game.LoadBalanceWebResponse.prototype.addUnit = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.game.LoadBalanceWebResponse.Unit, opt_index);
};


proto.game.LoadBalanceWebResponse.prototype.clearUnitList = function() {
  this.setUnitList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.LoadBalanceWebResponse.Unit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.LoadBalanceWebResponse.Unit.repeatedFields_, null);
};
goog.inherits(proto.game.LoadBalanceWebResponse.Unit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.LoadBalanceWebResponse.Unit.displayName = 'proto.game.LoadBalanceWebResponse.Unit';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.LoadBalanceWebResponse.Unit.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.toObject = function(opt_includeInstance) {
  return proto.game.LoadBalanceWebResponse.Unit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.LoadBalanceWebResponse.Unit} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.LoadBalanceWebResponse.Unit.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roomStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playerList: jspb.Message.getField(msg, 3),
    owner: jspb.Message.getFieldWithDefault(msg, 4, ""),
    gameType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    roomUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    st: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.LoadBalanceWebResponse.Unit}
 */
proto.game.LoadBalanceWebResponse.Unit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.LoadBalanceWebResponse.Unit;
  return proto.game.LoadBalanceWebResponse.Unit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.LoadBalanceWebResponse.Unit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.LoadBalanceWebResponse.Unit}
 */
proto.game.LoadBalanceWebResponse.Unit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomUuid(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.LoadBalanceWebResponse.Unit} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.LoadBalanceWebResponse.Unit.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getRoomStatus();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getPlayerList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = this.getOwner();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getGameType();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getRoomUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getSt();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional uint32 room_id = 1;
 * @return {number}
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.LoadBalanceWebResponse.Unit.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 room_status = 2;
 * @return {number}
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.getRoomStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.LoadBalanceWebResponse.Unit.prototype.setRoomStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated string player = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.getPlayerList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {!Array.<string>} value */
proto.game.LoadBalanceWebResponse.Unit.prototype.setPlayerList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.addPlayer = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.game.LoadBalanceWebResponse.Unit.prototype.clearPlayerList = function() {
  this.setPlayerList([]);
};


/**
 * optional string owner = 4;
 * @return {string}
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.game.LoadBalanceWebResponse.Unit.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 game_type = 5;
 * @return {number}
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.getGameType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.LoadBalanceWebResponse.Unit.prototype.setGameType = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 app_id = 6;
 * @return {number}
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.LoadBalanceWebResponse.Unit.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string room_uuid = 7;
 * @return {string}
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.getRoomUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.game.LoadBalanceWebResponse.Unit.prototype.setRoomUuid = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional uint32 st = 8;
 * @return {number}
 */
proto.game.LoadBalanceWebResponse.Unit.prototype.getSt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.game.LoadBalanceWebResponse.Unit.prototype.setSt = function(value) {
  jspb.Message.setField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.UserBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.UserBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.UserBalanceRequest.displayName = 'proto.game.UserBalanceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.UserBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.UserBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.UserBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.UserBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.UserBalanceRequest}
 */
proto.game.UserBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.UserBalanceRequest;
  return proto.game.UserBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.UserBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.UserBalanceRequest}
 */
proto.game.UserBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.UserBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.UserBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.UserBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.UserBalanceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.game.UserBalanceRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.UserBalanceRequest.prototype.setUserId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string device_id = 2;
 * @return {string}
 */
proto.game.UserBalanceRequest.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.UserBalanceRequest.prototype.setDeviceId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 app_id = 3;
 * @return {number}
 */
proto.game.UserBalanceRequest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.UserBalanceRequest.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 room_id = 4;
 * @return {number}
 */
proto.game.UserBalanceRequest.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.UserBalanceRequest.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.UserBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.UserBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.UserBalanceResponse.displayName = 'proto.game.UserBalanceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.UserBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.UserBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.UserBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.UserBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gold: jspb.Message.getFieldWithDefault(msg, 3, 0),
    diamond: jspb.Message.getFieldWithDefault(msg, 4, 0),
    level: jspb.Message.getFieldWithDefault(msg, 5, 0),
    exp: jspb.Message.getFieldWithDefault(msg, 6, 0),
    battleCounts: jspb.Message.getFieldWithDefault(msg, 7, 0),
    battleWin: jspb.Message.getFieldWithDefault(msg, 8, 0),
    continueWin: jspb.Message.getFieldWithDefault(msg, 9, 0),
    matchBattleCounts: jspb.Message.getFieldWithDefault(msg, 10, 0),
    matchBattleWin: jspb.Message.getFieldWithDefault(msg, 11, 0),
    matchContinueWin: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.UserBalanceResponse}
 */
proto.game.UserBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.UserBalanceResponse;
  return proto.game.UserBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.UserBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.UserBalanceResponse}
 */
proto.game.UserBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDiamond(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBattleCounts(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBattleWin(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setContinueWin(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchBattleCounts(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchBattleWin(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchContinueWin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.UserBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.UserBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.UserBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.UserBalanceResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getDiamond();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getExp();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getBattleCounts();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = this.getBattleWin();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = this.getContinueWin();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = this.getMatchBattleCounts();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = this.getMatchBattleWin();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = this.getMatchContinueWin();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.game.UserBalanceResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.UserBalanceResponse.prototype.setUserId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 gold = 3;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setGold = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 diamond = 4;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getDiamond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setDiamond = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 level = 5;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setLevel = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 exp = 6;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setExp = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint32 battle_counts = 7;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getBattleCounts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setBattleCounts = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional uint32 battle_win = 8;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getBattleWin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setBattleWin = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional uint32 continue_win = 9;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getContinueWin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setContinueWin = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional uint32 match_battle_counts = 10;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getMatchBattleCounts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setMatchBattleCounts = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional uint32 match_battle_win = 11;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getMatchBattleWin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setMatchBattleWin = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional uint32 match_continue_win = 12;
 * @return {number}
 */
proto.game.UserBalanceResponse.prototype.getMatchContinueWin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.game.UserBalanceResponse.prototype.setMatchContinueWin = function(value) {
  jspb.Message.setField(this, 12, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.CheckGameUserBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.CheckGameUserBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.CheckGameUserBalanceRequest.displayName = 'proto.game.CheckGameUserBalanceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.CheckGameUserBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.CheckGameUserBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.CheckGameUserBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.CheckGameUserBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gold: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.CheckGameUserBalanceRequest}
 */
proto.game.CheckGameUserBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.CheckGameUserBalanceRequest;
  return proto.game.CheckGameUserBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.CheckGameUserBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.CheckGameUserBalanceRequest}
 */
proto.game.CheckGameUserBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.CheckGameUserBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.CheckGameUserBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.CheckGameUserBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.CheckGameUserBalanceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.game.CheckGameUserBalanceRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.CheckGameUserBalanceRequest.prototype.setUserId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 gold = 2;
 * @return {number}
 */
proto.game.CheckGameUserBalanceRequest.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.CheckGameUserBalanceRequest.prototype.setGold = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.CheckGameUserBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.CheckGameUserBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.CheckGameUserBalanceResponse.displayName = 'proto.game.CheckGameUserBalanceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.CheckGameUserBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.CheckGameUserBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.CheckGameUserBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.CheckGameUserBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gold: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.CheckGameUserBalanceResponse}
 */
proto.game.CheckGameUserBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.CheckGameUserBalanceResponse;
  return proto.game.CheckGameUserBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.CheckGameUserBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.CheckGameUserBalanceResponse}
 */
proto.game.CheckGameUserBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.CheckGameUserBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.CheckGameUserBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.CheckGameUserBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.CheckGameUserBalanceResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.CheckGameUserBalanceResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.CheckGameUserBalanceResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.game.CheckGameUserBalanceResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.game.CheckGameUserBalanceResponse.prototype.setUserId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 gold = 3;
 * @return {number}
 */
proto.game.CheckGameUserBalanceResponse.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.CheckGameUserBalanceResponse.prototype.setGold = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GameStartWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.GameStartWebResponse.repeatedFields_, null);
};
goog.inherits(proto.game.GameStartWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GameStartWebResponse.displayName = 'proto.game.GameStartWebResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.GameStartWebResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GameStartWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GameStartWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GameStartWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GameStartWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    gameId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    playerDataList: jspb.Message.toObjectList(msg.getPlayerDataList(),
    proto.game.GameStartWebResponse.PlayerData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GameStartWebResponse}
 */
proto.game.GameStartWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GameStartWebResponse;
  return proto.game.GameStartWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GameStartWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GameStartWebResponse}
 */
proto.game.GameStartWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 4:
      var value = new proto.game.GameStartWebResponse.PlayerData;
      reader.readMessage(value,proto.game.GameStartWebResponse.PlayerData.deserializeBinaryFromReader);
      msg.addPlayerData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GameStartWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GameStartWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GameStartWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GameStartWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getGameId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getPlayerDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.game.GameStartWebResponse.PlayerData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 app_id = 1;
 * @return {number}
 */
proto.game.GameStartWebResponse.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.GameStartWebResponse.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 game_id = 2;
 * @return {number}
 */
proto.game.GameStartWebResponse.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.GameStartWebResponse.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 room_id = 3;
 * @return {number}
 */
proto.game.GameStartWebResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.GameStartWebResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated PlayerData player_data = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.GameStartWebResponse.PlayerData>}
 */
proto.game.GameStartWebResponse.prototype.getPlayerDataList = function() {
  return /** @type{!Array.<!proto.game.GameStartWebResponse.PlayerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.GameStartWebResponse.PlayerData, 4));
};


/** @param {!Array.<!proto.game.GameStartWebResponse.PlayerData>} value */
proto.game.GameStartWebResponse.prototype.setPlayerDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.game.GameStartWebResponse.PlayerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.GameStartWebResponse.PlayerData}
 */
proto.game.GameStartWebResponse.prototype.addPlayerData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.game.GameStartWebResponse.PlayerData, opt_index);
};


proto.game.GameStartWebResponse.prototype.clearPlayerDataList = function() {
  this.setPlayerDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GameStartWebResponse.PlayerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.GameStartWebResponse.PlayerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GameStartWebResponse.PlayerData.displayName = 'proto.game.GameStartWebResponse.PlayerData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GameStartWebResponse.PlayerData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GameStartWebResponse.PlayerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GameStartWebResponse.PlayerData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GameStartWebResponse.PlayerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gold: jspb.Message.getFieldWithDefault(msg, 2, 0),
    goldDelta: jspb.Message.getFieldWithDefault(msg, 3, 0),
    exp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    expDelta: jspb.Message.getFieldWithDefault(msg, 5, 0),
    level: jspb.Message.getFieldWithDefault(msg, 6, 0),
    levelDelta: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GameStartWebResponse.PlayerData}
 */
proto.game.GameStartWebResponse.PlayerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GameStartWebResponse.PlayerData;
  return proto.game.GameStartWebResponse.PlayerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GameStartWebResponse.PlayerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GameStartWebResponse.PlayerData}
 */
proto.game.GameStartWebResponse.PlayerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGoldDelta(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExpDelta(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelDelta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GameStartWebResponse.PlayerData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GameStartWebResponse.PlayerData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GameStartWebResponse.PlayerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GameStartWebResponse.PlayerData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGoldDelta();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getExp();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getExpDelta();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = this.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getLevelDelta();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.GameStartWebResponse.PlayerData.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.GameStartWebResponse.PlayerData.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 gold = 2;
 * @return {number}
 */
proto.game.GameStartWebResponse.PlayerData.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.GameStartWebResponse.PlayerData.prototype.setGold = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 gold_delta = 3;
 * @return {number}
 */
proto.game.GameStartWebResponse.PlayerData.prototype.getGoldDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.GameStartWebResponse.PlayerData.prototype.setGoldDelta = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 exp = 4;
 * @return {number}
 */
proto.game.GameStartWebResponse.PlayerData.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.GameStartWebResponse.PlayerData.prototype.setExp = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int32 exp_delta = 5;
 * @return {number}
 */
proto.game.GameStartWebResponse.PlayerData.prototype.getExpDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.GameStartWebResponse.PlayerData.prototype.setExpDelta = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 level = 6;
 * @return {number}
 */
proto.game.GameStartWebResponse.PlayerData.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.GameStartWebResponse.PlayerData.prototype.setLevel = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int32 level_delta = 7;
 * @return {number}
 */
proto.game.GameStartWebResponse.PlayerData.prototype.getLevelDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.game.GameStartWebResponse.PlayerData.prototype.setLevelDelta = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GameStartWebResquest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.GameStartWebResquest.repeatedFields_, null);
};
goog.inherits(proto.game.GameStartWebResquest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GameStartWebResquest.displayName = 'proto.game.GameStartWebResquest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.GameStartWebResquest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GameStartWebResquest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GameStartWebResquest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GameStartWebResquest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GameStartWebResquest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gameId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    playerDataList: jspb.Message.toObjectList(msg.getPlayerDataList(),
    proto.game.GameStartWebResquest.PlayerData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GameStartWebResquest}
 */
proto.game.GameStartWebResquest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GameStartWebResquest;
  return proto.game.GameStartWebResquest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GameStartWebResquest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GameStartWebResquest}
 */
proto.game.GameStartWebResquest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 5:
      var value = new proto.game.GameStartWebResquest.PlayerData;
      reader.readMessage(value,proto.game.GameStartWebResquest.PlayerData.deserializeBinaryFromReader);
      msg.addPlayerData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GameStartWebResquest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GameStartWebResquest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GameStartWebResquest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GameStartWebResquest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGameId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getPlayerDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.game.GameStartWebResquest.PlayerData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.GameStartWebResquest.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.GameStartWebResquest.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 app_id = 2;
 * @return {number}
 */
proto.game.GameStartWebResquest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.GameStartWebResquest.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 game_id = 3;
 * @return {number}
 */
proto.game.GameStartWebResquest.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.GameStartWebResquest.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 room_id = 4;
 * @return {number}
 */
proto.game.GameStartWebResquest.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.GameStartWebResquest.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated PlayerData player_data = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.GameStartWebResquest.PlayerData>}
 */
proto.game.GameStartWebResquest.prototype.getPlayerDataList = function() {
  return /** @type{!Array.<!proto.game.GameStartWebResquest.PlayerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.GameStartWebResquest.PlayerData, 5));
};


/** @param {!Array.<!proto.game.GameStartWebResquest.PlayerData>} value */
proto.game.GameStartWebResquest.prototype.setPlayerDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.game.GameStartWebResquest.PlayerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.GameStartWebResquest.PlayerData}
 */
proto.game.GameStartWebResquest.prototype.addPlayerData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.game.GameStartWebResquest.PlayerData, opt_index);
};


proto.game.GameStartWebResquest.prototype.clearPlayerDataList = function() {
  this.setPlayerDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GameStartWebResquest.PlayerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.GameStartWebResquest.PlayerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GameStartWebResquest.PlayerData.displayName = 'proto.game.GameStartWebResquest.PlayerData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GameStartWebResquest.PlayerData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GameStartWebResquest.PlayerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GameStartWebResquest.PlayerData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GameStartWebResquest.PlayerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gold: jspb.Message.getFieldWithDefault(msg, 2, 0),
    exp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    level: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GameStartWebResquest.PlayerData}
 */
proto.game.GameStartWebResquest.PlayerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GameStartWebResquest.PlayerData;
  return proto.game.GameStartWebResquest.PlayerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GameStartWebResquest.PlayerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GameStartWebResquest.PlayerData}
 */
proto.game.GameStartWebResquest.PlayerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GameStartWebResquest.PlayerData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GameStartWebResquest.PlayerData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GameStartWebResquest.PlayerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GameStartWebResquest.PlayerData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getExp();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.GameStartWebResquest.PlayerData.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.GameStartWebResquest.PlayerData.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 gold = 2;
 * @return {number}
 */
proto.game.GameStartWebResquest.PlayerData.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.GameStartWebResquest.PlayerData.prototype.setGold = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 exp = 3;
 * @return {number}
 */
proto.game.GameStartWebResquest.PlayerData.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.GameStartWebResquest.PlayerData.prototype.setExp = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 level = 4;
 * @return {number}
 */
proto.game.GameStartWebResquest.PlayerData.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.GameStartWebResquest.PlayerData.prototype.setLevel = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GS_SettleForRoundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.GS_SettleForRoundRequest.repeatedFields_, null);
};
goog.inherits(proto.game.GS_SettleForRoundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GS_SettleForRoundRequest.displayName = 'proto.game.GS_SettleForRoundRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.GS_SettleForRoundRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GS_SettleForRoundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GS_SettleForRoundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GS_SettleForRoundRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GS_SettleForRoundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    gameId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    matchId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    playerDataList: jspb.Message.toObjectList(msg.getPlayerDataList(),
    proto.game.GS_SettleForRoundRequest.PlayerData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GS_SettleForRoundRequest}
 */
proto.game.GS_SettleForRoundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GS_SettleForRoundRequest;
  return proto.game.GS_SettleForRoundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GS_SettleForRoundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GS_SettleForRoundRequest}
 */
proto.game.GS_SettleForRoundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchId(value);
      break;
    case 5:
      var value = new proto.game.GS_SettleForRoundRequest.PlayerData;
      reader.readMessage(value,proto.game.GS_SettleForRoundRequest.PlayerData.deserializeBinaryFromReader);
      msg.addPlayerData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GS_SettleForRoundRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GS_SettleForRoundRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GS_SettleForRoundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GS_SettleForRoundRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getGameId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getPlayerDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.game.GS_SettleForRoundRequest.PlayerData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 app_id = 1;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 game_id = 2;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 room_id = 3;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 match_id = 4;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated PlayerData player_data = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.GS_SettleForRoundRequest.PlayerData>}
 */
proto.game.GS_SettleForRoundRequest.prototype.getPlayerDataList = function() {
  return /** @type{!Array.<!proto.game.GS_SettleForRoundRequest.PlayerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.GS_SettleForRoundRequest.PlayerData, 5));
};


/** @param {!Array.<!proto.game.GS_SettleForRoundRequest.PlayerData>} value */
proto.game.GS_SettleForRoundRequest.prototype.setPlayerDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.game.GS_SettleForRoundRequest.PlayerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.GS_SettleForRoundRequest.PlayerData}
 */
proto.game.GS_SettleForRoundRequest.prototype.addPlayerData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.game.GS_SettleForRoundRequest.PlayerData, opt_index);
};


proto.game.GS_SettleForRoundRequest.prototype.clearPlayerDataList = function() {
  this.setPlayerDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GS_SettleForRoundRequest.PlayerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.GS_SettleForRoundRequest.PlayerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GS_SettleForRoundRequest.PlayerData.displayName = 'proto.game.GS_SettleForRoundRequest.PlayerData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GS_SettleForRoundRequest.PlayerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GS_SettleForRoundRequest.PlayerData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gold: jspb.Message.getFieldWithDefault(msg, 2, 0),
    goldDelta: jspb.Message.getFieldWithDefault(msg, 3, 0),
    exp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    expDelta: jspb.Message.getFieldWithDefault(msg, 5, 0),
    level: jspb.Message.getFieldWithDefault(msg, 6, 0),
    levelDelta: jspb.Message.getFieldWithDefault(msg, 7, 0),
    isWinner: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GS_SettleForRoundRequest.PlayerData}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GS_SettleForRoundRequest.PlayerData;
  return proto.game.GS_SettleForRoundRequest.PlayerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GS_SettleForRoundRequest.PlayerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GS_SettleForRoundRequest.PlayerData}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGoldDelta(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExpDelta(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelDelta(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsWinner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GS_SettleForRoundRequest.PlayerData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GS_SettleForRoundRequest.PlayerData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGoldDelta();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getExp();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getExpDelta();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = this.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getLevelDelta();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = this.getIsWinner();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 gold = 2;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.setGold = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 gold_delta = 3;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.getGoldDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.setGoldDelta = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 exp = 4;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.setExp = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int32 exp_delta = 5;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.getExpDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.setExpDelta = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 level = 6;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.setLevel = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int32 level_delta = 7;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.getLevelDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.setLevelDelta = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int32 is_winner = 8;
 * @return {number}
 */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.getIsWinner = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundRequest.PlayerData.prototype.setIsWinner = function(value) {
  jspb.Message.setField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GS_SettleForRoundResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.GS_SettleForRoundResponse.repeatedFields_, null);
};
goog.inherits(proto.game.GS_SettleForRoundResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GS_SettleForRoundResponse.displayName = 'proto.game.GS_SettleForRoundResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.GS_SettleForRoundResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GS_SettleForRoundResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GS_SettleForRoundResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GS_SettleForRoundResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GS_SettleForRoundResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gameId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    playerDataList: jspb.Message.toObjectList(msg.getPlayerDataList(),
    proto.game.GS_SettleForRoundResponse.PlayerData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GS_SettleForRoundResponse}
 */
proto.game.GS_SettleForRoundResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GS_SettleForRoundResponse;
  return proto.game.GS_SettleForRoundResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GS_SettleForRoundResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GS_SettleForRoundResponse}
 */
proto.game.GS_SettleForRoundResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 5:
      var value = new proto.game.GS_SettleForRoundResponse.PlayerData;
      reader.readMessage(value,proto.game.GS_SettleForRoundResponse.PlayerData.deserializeBinaryFromReader);
      msg.addPlayerData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GS_SettleForRoundResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GS_SettleForRoundResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GS_SettleForRoundResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GS_SettleForRoundResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGameId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getRoomId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getPlayerDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.game.GS_SettleForRoundResponse.PlayerData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.game.GS_SettleForRoundResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 app_id = 2;
 * @return {number}
 */
proto.game.GS_SettleForRoundResponse.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundResponse.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 game_id = 3;
 * @return {number}
 */
proto.game.GS_SettleForRoundResponse.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundResponse.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 room_id = 4;
 * @return {number}
 */
proto.game.GS_SettleForRoundResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated PlayerData player_data = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.GS_SettleForRoundResponse.PlayerData>}
 */
proto.game.GS_SettleForRoundResponse.prototype.getPlayerDataList = function() {
  return /** @type{!Array.<!proto.game.GS_SettleForRoundResponse.PlayerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.GS_SettleForRoundResponse.PlayerData, 5));
};


/** @param {!Array.<!proto.game.GS_SettleForRoundResponse.PlayerData>} value */
proto.game.GS_SettleForRoundResponse.prototype.setPlayerDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.game.GS_SettleForRoundResponse.PlayerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.GS_SettleForRoundResponse.PlayerData}
 */
proto.game.GS_SettleForRoundResponse.prototype.addPlayerData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.game.GS_SettleForRoundResponse.PlayerData, opt_index);
};


proto.game.GS_SettleForRoundResponse.prototype.clearPlayerDataList = function() {
  this.setPlayerDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.GS_SettleForRoundResponse.PlayerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.GS_SettleForRoundResponse.PlayerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.GS_SettleForRoundResponse.PlayerData.displayName = 'proto.game.GS_SettleForRoundResponse.PlayerData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.GS_SettleForRoundResponse.PlayerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.GS_SettleForRoundResponse.PlayerData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.GS_SettleForRoundResponse.PlayerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gold: jspb.Message.getFieldWithDefault(msg, 2, 0),
    exp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    level: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.GS_SettleForRoundResponse.PlayerData}
 */
proto.game.GS_SettleForRoundResponse.PlayerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.GS_SettleForRoundResponse.PlayerData;
  return proto.game.GS_SettleForRoundResponse.PlayerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.GS_SettleForRoundResponse.PlayerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.GS_SettleForRoundResponse.PlayerData}
 */
proto.game.GS_SettleForRoundResponse.PlayerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.GS_SettleForRoundResponse.PlayerData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GS_SettleForRoundResponse.PlayerData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getExp();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 gold = 2;
 * @return {number}
 */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.setGold = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 exp = 3;
 * @return {number}
 */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.getExp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.setExp = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 level = 4;
 * @return {number}
 */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.GS_SettleForRoundResponse.PlayerData.prototype.setLevel = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchStartWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.MatchStartWebResponse.repeatedFields_, null);
};
goog.inherits(proto.game.MatchStartWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchStartWebResponse.displayName = 'proto.game.MatchStartWebResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.MatchStartWebResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchStartWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchStartWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchStartWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchStartWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    matchId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    host: jspb.Message.getFieldWithDefault(msg, 3, ""),
    port: jspb.Message.getFieldWithDefault(msg, 4, 0),
    playerDataList: jspb.Message.toObjectList(msg.getPlayerDataList(),
    proto.game.MatchStartWebResponse.PlayerData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchStartWebResponse}
 */
proto.game.MatchStartWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchStartWebResponse;
  return proto.game.MatchStartWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchStartWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchStartWebResponse}
 */
proto.game.MatchStartWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 5:
      var value = new proto.game.MatchStartWebResponse.PlayerData;
      reader.readMessage(value,proto.game.MatchStartWebResponse.PlayerData.deserializeBinaryFromReader);
      msg.addPlayerData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchStartWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchStartWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchStartWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchStartWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getHost();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getPort();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getPlayerDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.game.MatchStartWebResponse.PlayerData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 app_id = 1;
 * @return {number}
 */
proto.game.MatchStartWebResponse.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MatchStartWebResponse.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 match_id = 2;
 * @return {number}
 */
proto.game.MatchStartWebResponse.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MatchStartWebResponse.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string host = 3;
 * @return {string}
 */
proto.game.MatchStartWebResponse.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.MatchStartWebResponse.prototype.setHost = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 port = 4;
 * @return {number}
 */
proto.game.MatchStartWebResponse.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.MatchStartWebResponse.prototype.setPort = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated PlayerData player_data = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.MatchStartWebResponse.PlayerData>}
 */
proto.game.MatchStartWebResponse.prototype.getPlayerDataList = function() {
  return /** @type{!Array.<!proto.game.MatchStartWebResponse.PlayerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.MatchStartWebResponse.PlayerData, 5));
};


/** @param {!Array.<!proto.game.MatchStartWebResponse.PlayerData>} value */
proto.game.MatchStartWebResponse.prototype.setPlayerDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.game.MatchStartWebResponse.PlayerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.MatchStartWebResponse.PlayerData}
 */
proto.game.MatchStartWebResponse.prototype.addPlayerData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.game.MatchStartWebResponse.PlayerData, opt_index);
};


proto.game.MatchStartWebResponse.prototype.clearPlayerDataList = function() {
  this.setPlayerDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchStartWebResponse.PlayerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MatchStartWebResponse.PlayerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchStartWebResponse.PlayerData.displayName = 'proto.game.MatchStartWebResponse.PlayerData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchStartWebResponse.PlayerData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchStartWebResponse.PlayerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchStartWebResponse.PlayerData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchStartWebResponse.PlayerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    goldCost: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchStartWebResponse.PlayerData}
 */
proto.game.MatchStartWebResponse.PlayerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchStartWebResponse.PlayerData;
  return proto.game.MatchStartWebResponse.PlayerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchStartWebResponse.PlayerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchStartWebResponse.PlayerData}
 */
proto.game.MatchStartWebResponse.PlayerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGoldCost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchStartWebResponse.PlayerData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchStartWebResponse.PlayerData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchStartWebResponse.PlayerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchStartWebResponse.PlayerData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getGoldCost();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.MatchStartWebResponse.PlayerData.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.MatchStartWebResponse.PlayerData.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 gold_cost = 2;
 * @return {number}
 */
proto.game.MatchStartWebResponse.PlayerData.prototype.getGoldCost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MatchStartWebResponse.PlayerData.prototype.setGoldCost = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.QuitMatchWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.QuitMatchWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.QuitMatchWebResponse.displayName = 'proto.game.QuitMatchWebResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.QuitMatchWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.QuitMatchWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.QuitMatchWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.QuitMatchWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    matchId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rank: jspb.Message.getFieldWithDefault(msg, 4, 0),
    gold: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isNotify: jspb.Message.getFieldWithDefault(msg, 6, 0),
    host: jspb.Message.getFieldWithDefault(msg, 7, ""),
    port: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.QuitMatchWebResponse}
 */
proto.game.QuitMatchWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.QuitMatchWebResponse;
  return proto.game.QuitMatchWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.QuitMatchWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.QuitMatchWebResponse}
 */
proto.game.QuitMatchWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRank(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsNotify(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.QuitMatchWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitMatchWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.QuitMatchWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitMatchWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getPlayerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getRank();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getIsNotify();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getHost();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getPort();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional uint32 app_id = 1;
 * @return {number}
 */
proto.game.QuitMatchWebResponse.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.QuitMatchWebResponse.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 match_id = 2;
 * @return {number}
 */
proto.game.QuitMatchWebResponse.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.QuitMatchWebResponse.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string player_id = 3;
 * @return {string}
 */
proto.game.QuitMatchWebResponse.prototype.getPlayerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.QuitMatchWebResponse.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 rank = 4;
 * @return {number}
 */
proto.game.QuitMatchWebResponse.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.QuitMatchWebResponse.prototype.setRank = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 gold = 5;
 * @return {number}
 */
proto.game.QuitMatchWebResponse.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.game.QuitMatchWebResponse.prototype.setGold = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 is_notify = 6;
 * @return {number}
 */
proto.game.QuitMatchWebResponse.prototype.getIsNotify = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.game.QuitMatchWebResponse.prototype.setIsNotify = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string host = 7;
 * @return {string}
 */
proto.game.QuitMatchWebResponse.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.game.QuitMatchWebResponse.prototype.setHost = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int32 port = 8;
 * @return {number}
 */
proto.game.QuitMatchWebResponse.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.game.QuitMatchWebResponse.prototype.setPort = function(value) {
  jspb.Message.setField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchEndWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.game.MatchEndWebResponse.repeatedFields_, null);
};
goog.inherits(proto.game.MatchEndWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchEndWebResponse.displayName = 'proto.game.MatchEndWebResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.game.MatchEndWebResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchEndWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchEndWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchEndWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchEndWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    appId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    matchId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    host: jspb.Message.getFieldWithDefault(msg, 3, ""),
    port: jspb.Message.getFieldWithDefault(msg, 4, 0),
    playerDataList: jspb.Message.toObjectList(msg.getPlayerDataList(),
    proto.game.MatchEndWebResponse.PlayerData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchEndWebResponse}
 */
proto.game.MatchEndWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchEndWebResponse;
  return proto.game.MatchEndWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchEndWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchEndWebResponse}
 */
proto.game.MatchEndWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 5:
      var value = new proto.game.MatchEndWebResponse.PlayerData;
      reader.readMessage(value,proto.game.MatchEndWebResponse.PlayerData.deserializeBinaryFromReader);
      msg.addPlayerData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchEndWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchEndWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchEndWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchEndWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getHost();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getPort();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getPlayerDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.game.MatchEndWebResponse.PlayerData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 app_id = 1;
 * @return {number}
 */
proto.game.MatchEndWebResponse.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MatchEndWebResponse.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 match_id = 2;
 * @return {number}
 */
proto.game.MatchEndWebResponse.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MatchEndWebResponse.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string host = 3;
 * @return {string}
 */
proto.game.MatchEndWebResponse.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.game.MatchEndWebResponse.prototype.setHost = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 port = 4;
 * @return {number}
 */
proto.game.MatchEndWebResponse.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.MatchEndWebResponse.prototype.setPort = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated PlayerData player_data = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.game.MatchEndWebResponse.PlayerData>}
 */
proto.game.MatchEndWebResponse.prototype.getPlayerDataList = function() {
  return /** @type{!Array.<!proto.game.MatchEndWebResponse.PlayerData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.game.MatchEndWebResponse.PlayerData, 5));
};


/** @param {!Array.<!proto.game.MatchEndWebResponse.PlayerData>} value */
proto.game.MatchEndWebResponse.prototype.setPlayerDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.game.MatchEndWebResponse.PlayerData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.game.MatchEndWebResponse.PlayerData}
 */
proto.game.MatchEndWebResponse.prototype.addPlayerData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.game.MatchEndWebResponse.PlayerData, opt_index);
};


proto.game.MatchEndWebResponse.prototype.clearPlayerDataList = function() {
  this.setPlayerDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchEndWebResponse.PlayerData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MatchEndWebResponse.PlayerData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchEndWebResponse.PlayerData.displayName = 'proto.game.MatchEndWebResponse.PlayerData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchEndWebResponse.PlayerData.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchEndWebResponse.PlayerData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchEndWebResponse.PlayerData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchEndWebResponse.PlayerData.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rank: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gold: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isNotify: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchEndWebResponse.PlayerData}
 */
proto.game.MatchEndWebResponse.PlayerData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchEndWebResponse.PlayerData;
  return proto.game.MatchEndWebResponse.PlayerData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchEndWebResponse.PlayerData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchEndWebResponse.PlayerData}
 */
proto.game.MatchEndWebResponse.PlayerData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRank(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGold(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsNotify(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchEndWebResponse.PlayerData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchEndWebResponse.PlayerData.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchEndWebResponse.PlayerData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchEndWebResponse.PlayerData.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPlayer();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRank();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getGold();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getIsNotify();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string player = 1;
 * @return {string}
 */
proto.game.MatchEndWebResponse.PlayerData.prototype.getPlayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.game.MatchEndWebResponse.PlayerData.prototype.setPlayer = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 rank = 2;
 * @return {number}
 */
proto.game.MatchEndWebResponse.PlayerData.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MatchEndWebResponse.PlayerData.prototype.setRank = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 gold = 3;
 * @return {number}
 */
proto.game.MatchEndWebResponse.PlayerData.prototype.getGold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.game.MatchEndWebResponse.PlayerData.prototype.setGold = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 is_notify = 4;
 * @return {number}
 */
proto.game.MatchEndWebResponse.PlayerData.prototype.getIsNotify = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.game.MatchEndWebResponse.PlayerData.prototype.setIsNotify = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchStartWebRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MatchStartWebRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchStartWebRequest.displayName = 'proto.game.MatchStartWebRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchStartWebRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchStartWebRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchStartWebRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchStartWebRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    matchId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchStartWebRequest}
 */
proto.game.MatchStartWebRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchStartWebRequest;
  return proto.game.MatchStartWebRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchStartWebRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchStartWebRequest}
 */
proto.game.MatchStartWebRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchStartWebRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchStartWebRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchStartWebRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchStartWebRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.game.MatchStartWebRequest.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MatchStartWebRequest.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 match_id = 2;
 * @return {number}
 */
proto.game.MatchStartWebRequest.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MatchStartWebRequest.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.QuitMatchWebRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.QuitMatchWebRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.QuitMatchWebRequest.displayName = 'proto.game.QuitMatchWebRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.QuitMatchWebRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.QuitMatchWebRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.QuitMatchWebRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.QuitMatchWebRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    matchId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.QuitMatchWebRequest}
 */
proto.game.QuitMatchWebRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.QuitMatchWebRequest;
  return proto.game.QuitMatchWebRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.QuitMatchWebRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.QuitMatchWebRequest}
 */
proto.game.QuitMatchWebRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.QuitMatchWebRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitMatchWebRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.QuitMatchWebRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.QuitMatchWebRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.game.QuitMatchWebRequest.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.QuitMatchWebRequest.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 match_id = 2;
 * @return {number}
 */
proto.game.QuitMatchWebRequest.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.QuitMatchWebRequest.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MatchEndWebRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MatchEndWebRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MatchEndWebRequest.displayName = 'proto.game.MatchEndWebRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MatchEndWebRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MatchEndWebRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MatchEndWebRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MatchEndWebRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    matchId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MatchEndWebRequest}
 */
proto.game.MatchEndWebRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MatchEndWebRequest;
  return proto.game.MatchEndWebRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MatchEndWebRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MatchEndWebRequest}
 */
proto.game.MatchEndWebRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatchId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MatchEndWebRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchEndWebRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MatchEndWebRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MatchEndWebRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getMatchId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.game.MatchEndWebRequest.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MatchEndWebRequest.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 match_id = 2;
 * @return {number}
 */
proto.game.MatchEndWebRequest.prototype.getMatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.game.MatchEndWebRequest.prototype.setMatchId = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MaintenanceWebRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MaintenanceWebRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MaintenanceWebRequest.displayName = 'proto.game.MaintenanceWebRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MaintenanceWebRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MaintenanceWebRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MaintenanceWebRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MaintenanceWebRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MaintenanceWebRequest}
 */
proto.game.MaintenanceWebRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MaintenanceWebRequest;
  return proto.game.MaintenanceWebRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MaintenanceWebRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MaintenanceWebRequest}
 */
proto.game.MaintenanceWebRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MaintenanceWebRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MaintenanceWebRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MaintenanceWebRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MaintenanceWebRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.game.MaintenanceWebResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.game.MaintenanceWebResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.game.MaintenanceWebResponse.displayName = 'proto.game.MaintenanceWebResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.game.MaintenanceWebResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.game.MaintenanceWebResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.game.MaintenanceWebResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.game.MaintenanceWebResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.game.MaintenanceWebResponse}
 */
proto.game.MaintenanceWebResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.game.MaintenanceWebResponse;
  return proto.game.MaintenanceWebResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.game.MaintenanceWebResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.game.MaintenanceWebResponse}
 */
proto.game.MaintenanceWebResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.game.MaintenanceWebResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MaintenanceWebResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.game.MaintenanceWebResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.game.MaintenanceWebResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.game.MaintenanceWebResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.game.MaintenanceWebResponse.prototype.setCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


