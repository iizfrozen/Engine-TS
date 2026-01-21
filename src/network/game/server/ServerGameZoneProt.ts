import ServerGameProt from '#/network/game/server/ServerGameProt.js';

export default class ServerGameZoneProt extends ServerGameProt {
    // zone protocol
    static readonly LOC_MERGE = new ServerGameZoneProt(218, 14); // based on runescript command p_locmerge
    static readonly LOC_ANIM = new ServerGameZoneProt(30, 4); // NXT naming
    static readonly OBJ_DEL = new ServerGameZoneProt(115, 3); // NXT naming
    static readonly OBJ_REVEAL = new ServerGameZoneProt(8, 7); // NXT naming
    static readonly LOC_ADD_CHANGE = new ServerGameZoneProt(70, 4); // NXT naming
    static readonly MAP_PROJANIM = new ServerGameZoneProt(37, 15); // NXT naming
    static readonly LOC_DEL = new ServerGameZoneProt(88, 2); // NXT naming
    static readonly OBJ_COUNT = new ServerGameZoneProt(98, 7); // NXT naming
    static readonly MAP_ANIM = new ServerGameZoneProt(114, 6); // NXT naming
    static readonly OBJ_ADD = new ServerGameZoneProt(120, 5); // NXT naming
}
