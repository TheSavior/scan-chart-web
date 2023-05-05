// GENERATED by @edgedb/generate v0.0.7
// Run 'npx @edgedb/generate interfaces' to re-generate

import type * as edgedb from "edgedb";
export namespace std {
  export interface BaseObject {
    "id": string;
  }
  export interface $Object extends BaseObject {}
  export interface FreeObject extends BaseObject {}
  export type JsonEmpty = "ReturnEmpty" | "ReturnTarget" | "Error" | "UseNull" | "DeleteKey";
}
export namespace cfg {
  export interface ConfigObject extends std.BaseObject {}
  export interface AbstractConfig extends ConfigObject {
    "session_idle_timeout": edgedb.Duration;
    "session_idle_transaction_timeout": edgedb.Duration;
    "query_execution_timeout": edgedb.Duration;
    "listen_port": number;
    "listen_addresses": string[];
    "allow_dml_in_functions"?: boolean | null;
    "allow_bare_ddl"?: AllowBareDDL | null;
    "apply_access_policies"?: boolean | null;
    "allow_user_specified_id"?: boolean | null;
    "shared_buffers"?: edgedb.ConfigMemory | null;
    "query_work_mem"?: edgedb.ConfigMemory | null;
    "effective_cache_size"?: edgedb.ConfigMemory | null;
    "effective_io_concurrency"?: number | null;
    "default_statistics_target"?: number | null;
    "auth": Auth[];
  }
  export type AllowBareDDL = "AlwaysAllow" | "NeverAllow";
  export interface Auth extends ConfigObject {
    "priority": number;
    "user": string[];
    "comment"?: string | null;
    "method"?: AuthMethod | null;
  }
  export interface AuthMethod extends ConfigObject {
    "transports": ConnectionTransport[];
  }
  export interface Config extends AbstractConfig {}
  export type ConnectionTransport = "TCP" | "HTTP";
  export interface DatabaseConfig extends AbstractConfig {}
  export interface InstanceConfig extends AbstractConfig {}
  export interface JWT extends AuthMethod {
    "transports": ConnectionTransport[];
  }
  export interface SCRAM extends AuthMethod {
    "transports": ConnectionTransport[];
  }
  export interface Trust extends AuthMethod {}
}
export interface AlbumArt extends std.$Object {
  "data": Uint8Array;
  "md5": string;
}
export interface Application extends std.$Object {
  "emailAddress"?: string | null;
  "communicationMessageId"?: string | null;
  "applicationDate": Date;
  "applicationDriveId"?: string | null;
  "chorusDriveShortcutId"?: string | null;
  "ownerUserId"?: string | null;
  "queueMessageIds"?: string[] | null;
  "reviewDate"?: Date | null;
  "reviewerUserId"?: string | null;
  "isIssueOptOut": boolean;
  "reviewStatus": ReviewStatus;
  "driveIssues": {driveIssueType: DriveIssueType, issueBreadcrumb: string}[];
  "usernames": Username[];
}
export interface Chart extends std.$Object {
  "playlist_track"?: number | null;
  "album"?: string | null;
  "album_track"?: number | null;
  "artist"?: string | null;
  "chart_offset"?: number | null;
  "charter"?: string | null;
  "delay"?: number | null;
  "diff_band"?: number | null;
  "diff_bass"?: number | null;
  "diff_bassghl"?: number | null;
  "diff_drums"?: number | null;
  "diff_drums_real"?: number | null;
  "diff_guitar"?: number | null;
  "diff_guitarghl"?: number | null;
  "diff_keys"?: number | null;
  "diff_rhythm"?: number | null;
  "eighthnote_hopo"?: boolean | null;
  "end_events"?: boolean | null;
  "five_lane_drums"?: boolean | null;
  "genre"?: string | null;
  "hopo_frequency"?: number | null;
  "icon"?: string | null;
  "loading_phrase"?: string | null;
  "md5": string;
  "modchart"?: boolean | null;
  "multiplier_note"?: number | null;
  "name"?: string | null;
  "preview_start_time"?: number | null;
  "pro_drums"?: boolean | null;
  "song_length"?: number | null;
  "video_start_time"?: number | null;
  "year"?: string | null;
  "metadataIssues": MetadataIssueType[];
  "playable": boolean;
  "versionGroupId": string;
  "folderIssues": {folderIssue: FolderIssueType, description: string}[];
  "diff_guitar_coop"?: number | null;
  "notesData"?: {instruments: Instrument[], hasSoloSections: boolean, hasLyrics: boolean, hasForcedNotes: boolean, hasTapNotes: boolean, hasOpenNotes: boolean, has2xKick: boolean, noteIssues: {instrument: Instrument, difficulty: Difficulty, noteIssues: {issueType: NoteIssueType, time: number}[]}[], trackIssues: {instrument: Instrument, difficulty: Difficulty, trackIssues: TrackIssueType[]}[], chartIssues: ChartIssueType[], noteCounts: {instrument: Instrument, difficulty: Difficulty, count: number}[], maxNps: {instrument: Instrument, difficulty: Difficulty, time: number, nps: number, notes: {time: number, length: number, type: EventType}[]}[], hashes: {instrument: Instrument, difficulty: Difficulty, hash: string}[], tempoMapHash: string, tempoMarkerCount: number, length: number, effectiveLength: number} | null;
  "song"?: Song | null;
  "driveCharts": DriveChart[];
  "albumArt"?: AlbumArt | null;
  "charters": Username[];
}
export type ChartIssueType = "noResolution" | "noSyncTrackSection" | "noNotes" | "noExpert" | "isDefaultBPM" | "misalignedTimeSignatures" | "noSections";
export type Difficulty = "expert" | "hard" | "medium" | "easy";
export interface DriveChart extends std.$Object {
  "chartBreadcrumbs": string;
  "filesHash": string;
  "isShortcutLinked": boolean;
  "parentFolderId": string;
  "modifiedTime": Date;
  "application": Application;
  "files": DriveFileResponse[];
}
export interface DriveFileResponse extends std.$Object {
  "fileId": string;
  "fullFileExtension": string;
  "md5Checksum": string;
  "mimeType": string;
  "name": string;
  "size": number;
  "webContentLink": string;
  "modifiedTime": string;
}
export type DriveIssueType = "applicationDriveIsFile" | "applicationDriveIsPrivateOrDeleted" | "applicationSubfolderIsPrivateOrDeleted" | "applicationSubfileIsPrivateOrDeleted" | "emptyFolder" | "filesizeExceeded";
export type EventType = "starPower" | "tap" | "force" | "orange" | "blue" | "yellow" | "red" | "green" | "open" | "soloMarker" | "black3" | "black2" | "black1" | "white3" | "white2" | "white1" | "activationLane" | "kick" | "kick2x";
export type FolderIssueType = "noMetadata" | "invalidIni" | "invalidMetadata" | "badIniLine" | "multipleIniFiles" | "noAlbumArt" | "albumArtSize" | "badAlbumArt" | "multipleAlbumArt" | "noAudio" | "invalidAudio" | "badAudio" | "multipleAudio" | "noChart" | "invalidChart" | "badChart" | "multipleChart" | "hostPermissions";
export type Instrument = "guitar" | "guitarcoop" | "rhythm" | "bass" | "drums" | "keys" | "guitarghl" | "bassghl";
export interface LinkedDiscordMessage extends std.$Object {
  "dmId": string;
  "threadId": string;
  "application": Application;
}
export type MetadataIssueType = "noName" | "noArtist" | "noAlbum" | "noGenre" | "noYear" | "noCharter" | "missingInstrumentDiff" | "nonzeroDelay" | "nonzeroOffset";
export type NoteIssueType = "fiveNoteChord" | "difficultyForbiddenNote" | "threeNoteDrumChord" | "brokenNote" | "badSustainGap" | "babySustain";
export type ReviewStatus = "processingDriveCharts" | "processingCharts" | "responsePending" | "reviewPending" | "rejected" | "approved";
export interface Song extends std.$Object {
  "album"?: string | null;
  "artist": string;
  "genre"?: string | null;
  "name": string;
  "year"?: string | null;
}
export type TrackIssueType = "noStarPower" | "noDrumActivationLanes" | "smallLeadingSilence";
export interface Username extends std.$Object {
  "isPrimary": boolean;
  "name": string;
  "addedByUserId": string;
}
export namespace schema {
  export type AccessKind = "Select" | "UpdateRead" | "UpdateWrite" | "Delete" | "Insert";
  export interface $Object extends std.BaseObject {
    "name": string;
    "internal": boolean;
    "builtin": boolean;
    "computed_fields"?: string[] | null;
  }
  export interface SubclassableObject extends $Object {
    "abstract"?: boolean | null;
    "is_abstract"?: boolean | null;
    "final": boolean;
    "is_final": boolean;
  }
  export interface InheritingObject extends SubclassableObject {
    "inherited_fields"?: string[] | null;
    "bases": InheritingObject[];
    "ancestors": InheritingObject[];
  }
  export interface AnnotationSubject extends $Object {
    "annotations": Annotation[];
  }
  export interface AccessPolicy extends InheritingObject, AnnotationSubject {
    "access_kinds": AccessKind[];
    "condition"?: string | null;
    "action": AccessPolicyAction;
    "expr"?: string | null;
    "subject": ObjectType;
  }
  export type AccessPolicyAction = "Allow" | "Deny";
  export interface Alias extends AnnotationSubject {
    "expr": string;
    "type": Type;
  }
  export interface Annotation extends InheritingObject, AnnotationSubject {
    "inheritable"?: boolean | null;
  }
  export interface Type extends SubclassableObject, AnnotationSubject {
    "expr"?: string | null;
    "from_alias"?: boolean | null;
    "is_from_alias"?: boolean | null;
  }
  export interface PrimitiveType extends Type {}
  export interface CollectionType extends PrimitiveType {}
  export interface Array extends CollectionType {
    "dimensions"?: number[] | null;
    "element_type": Type;
  }
  export interface CallableObject extends AnnotationSubject {
    "return_typemod"?: TypeModifier | null;
    "params": Parameter[];
    "return_type"?: Type | null;
  }
  export type Cardinality = "One" | "Many";
  export interface VolatilitySubject extends $Object {
    "volatility"?: Volatility | null;
  }
  export interface Cast extends AnnotationSubject, VolatilitySubject {
    "allow_implicit"?: boolean | null;
    "allow_assignment"?: boolean | null;
    "from_type"?: Type | null;
    "to_type"?: Type | null;
  }
  export interface ConsistencySubject extends $Object, InheritingObject, AnnotationSubject {
    "constraints": Constraint[];
  }
  export interface Constraint extends CallableObject, InheritingObject {
    "expr"?: string | null;
    "subjectexpr"?: string | null;
    "finalexpr"?: string | null;
    "errmessage"?: string | null;
    "delegated"?: boolean | null;
    "except_expr"?: string | null;
    "subject"?: ConsistencySubject | null;
    "params": Parameter[];
  }
  export interface Delta extends $Object {
    "parents": Delta[];
  }
  export interface Extension extends AnnotationSubject, $Object {
    "package": sys.ExtensionPackage;
  }
  export interface Function extends CallableObject, VolatilitySubject {
    "body"?: string | null;
    "language": string;
    "preserves_optionality"?: boolean | null;
    "used_globals": Global[];
  }
  export interface FutureBehavior extends $Object {}
  export interface Global extends AnnotationSubject {
    "required"?: boolean | null;
    "cardinality"?: Cardinality | null;
    "expr"?: string | null;
    "default"?: string | null;
    "target": Type;
  }
  export interface Index extends InheritingObject, AnnotationSubject {
    "expr"?: string | null;
    "except_expr"?: string | null;
  }
  export interface Pointer extends InheritingObject, ConsistencySubject, AnnotationSubject {
    "cardinality"?: Cardinality | null;
    "required"?: boolean | null;
    "readonly"?: boolean | null;
    "default"?: string | null;
    "expr"?: string | null;
    "source"?: Source | null;
    "target"?: Type | null;
  }
  export interface Source extends $Object {
    "pointers": Pointer[];
    "indexes": Index[];
  }
  export interface Link extends Pointer, Source {
    "on_target_delete"?: TargetDeleteAction | null;
    "on_source_delete"?: SourceDeleteAction | null;
    "target"?: ObjectType | null;
    "properties": Property[];
  }
  export interface Migration extends AnnotationSubject, $Object {
    "script": string;
    "message"?: string | null;
    "parents": Migration[];
  }
  export interface Module extends $Object, AnnotationSubject {}
  export interface ObjectType extends InheritingObject, ConsistencySubject, AnnotationSubject, Type, Source {
    "compound_type": boolean;
    "is_compound_type": boolean;
    "union_of": ObjectType[];
    "intersection_of": ObjectType[];
    "properties": Property[];
    "links": Link[];
    "access_policies": AccessPolicy[];
  }
  export interface Operator extends CallableObject, VolatilitySubject {
    "operator_kind"?: OperatorKind | null;
    "is_abstract"?: boolean | null;
    "abstract"?: boolean | null;
  }
  export type OperatorKind = "Infix" | "Postfix" | "Prefix" | "Ternary";
  export interface Parameter extends $Object {
    "typemod": TypeModifier;
    "kind": ParameterKind;
    "num": number;
    "default"?: string | null;
    "type": Type;
  }
  export type ParameterKind = "VariadicParam" | "NamedOnlyParam" | "PositionalParam";
  export interface Property extends Pointer {}
  export interface PseudoType extends InheritingObject, Type {}
  export interface Range extends CollectionType {
    "element_type": Type;
  }
  export interface ScalarType extends InheritingObject, ConsistencySubject, AnnotationSubject, PrimitiveType {
    "default"?: string | null;
    "enum_values"?: string[] | null;
  }
  export type SourceDeleteAction = "DeleteTarget" | "Allow" | "DeleteTargetIfOrphan";
  export type TargetDeleteAction = "Restrict" | "DeleteSource" | "Allow" | "DeferredRestrict";
  export interface Tuple extends CollectionType {
    "named": boolean;
    "element_types": TupleElement[];
  }
  export interface TupleElement extends std.BaseObject {
    "name"?: string | null;
    "type": Type;
  }
  export type TypeModifier = "SetOfType" | "OptionalType" | "SingletonType";
  export type Volatility = "Immutable" | "Stable" | "Volatile";
}
export namespace sys {
  export interface SystemObject extends schema.AnnotationSubject {}
  export interface Database extends SystemObject, schema.AnnotationSubject {
    "name": string;
  }
  export interface ExtensionPackage extends SystemObject, schema.AnnotationSubject {
    "script": string;
    "version": {major: number, minor: number, stage: VersionStage, stage_no: number, local: string[]};
  }
  export interface Role extends SystemObject, schema.InheritingObject, schema.AnnotationSubject {
    "superuser": boolean;
    "password"?: string | null;
    "name": string;
    "is_superuser": boolean;
    "member_of": Role[];
  }
  export type TransactionIsolation = "RepeatableRead" | "Serializable";
  export type VersionStage = "dev" | "alpha" | "beta" | "rc" | "final";
}
export interface types {
  "std": {
    "BaseObject": std.BaseObject;
    "Object": std.$Object;
    "FreeObject": std.FreeObject;
    "JsonEmpty": std.JsonEmpty;
  };
  "cfg": {
    "ConfigObject": cfg.ConfigObject;
    "AbstractConfig": cfg.AbstractConfig;
    "AllowBareDDL": cfg.AllowBareDDL;
    "Auth": cfg.Auth;
    "AuthMethod": cfg.AuthMethod;
    "Config": cfg.Config;
    "ConnectionTransport": cfg.ConnectionTransport;
    "DatabaseConfig": cfg.DatabaseConfig;
    "InstanceConfig": cfg.InstanceConfig;
    "JWT": cfg.JWT;
    "SCRAM": cfg.SCRAM;
    "Trust": cfg.Trust;
  };
  "default": {
    "AlbumArt": AlbumArt;
    "Application": Application;
    "Chart": Chart;
    "ChartIssueType": ChartIssueType;
    "Difficulty": Difficulty;
    "DriveChart": DriveChart;
    "DriveFileResponse": DriveFileResponse;
    "DriveIssueType": DriveIssueType;
    "EventType": EventType;
    "FolderIssueType": FolderIssueType;
    "Instrument": Instrument;
    "LinkedDiscordMessage": LinkedDiscordMessage;
    "MetadataIssueType": MetadataIssueType;
    "NoteIssueType": NoteIssueType;
    "ReviewStatus": ReviewStatus;
    "Song": Song;
    "TrackIssueType": TrackIssueType;
    "Username": Username;
  };
  "schema": {
    "AccessKind": schema.AccessKind;
    "Object": schema.$Object;
    "SubclassableObject": schema.SubclassableObject;
    "InheritingObject": schema.InheritingObject;
    "AnnotationSubject": schema.AnnotationSubject;
    "AccessPolicy": schema.AccessPolicy;
    "AccessPolicyAction": schema.AccessPolicyAction;
    "Alias": schema.Alias;
    "Annotation": schema.Annotation;
    "Type": schema.Type;
    "PrimitiveType": schema.PrimitiveType;
    "CollectionType": schema.CollectionType;
    "Array": schema.Array;
    "CallableObject": schema.CallableObject;
    "Cardinality": schema.Cardinality;
    "VolatilitySubject": schema.VolatilitySubject;
    "Cast": schema.Cast;
    "ConsistencySubject": schema.ConsistencySubject;
    "Constraint": schema.Constraint;
    "Delta": schema.Delta;
    "Extension": schema.Extension;
    "Function": schema.Function;
    "FutureBehavior": schema.FutureBehavior;
    "Global": schema.Global;
    "Index": schema.Index;
    "Pointer": schema.Pointer;
    "Source": schema.Source;
    "Link": schema.Link;
    "Migration": schema.Migration;
    "Module": schema.Module;
    "ObjectType": schema.ObjectType;
    "Operator": schema.Operator;
    "OperatorKind": schema.OperatorKind;
    "Parameter": schema.Parameter;
    "ParameterKind": schema.ParameterKind;
    "Property": schema.Property;
    "PseudoType": schema.PseudoType;
    "Range": schema.Range;
    "ScalarType": schema.ScalarType;
    "SourceDeleteAction": schema.SourceDeleteAction;
    "TargetDeleteAction": schema.TargetDeleteAction;
    "Tuple": schema.Tuple;
    "TupleElement": schema.TupleElement;
    "TypeModifier": schema.TypeModifier;
    "Volatility": schema.Volatility;
  };
  "sys": {
    "SystemObject": sys.SystemObject;
    "Database": sys.Database;
    "ExtensionPackage": sys.ExtensionPackage;
    "Role": sys.Role;
    "TransactionIsolation": sys.TransactionIsolation;
    "VersionStage": sys.VersionStage;
  };
}


export namespace helper {
  type LinkType = std.BaseObject | std.BaseObject[];

  export type propertyKeys<T> = {
    [k in keyof T]: NonNullable<T[k]> extends LinkType ? never : k;
  }[keyof T];

  export type linkKeys<T> = {
    [k in keyof T]: NonNullable<T[k]> extends LinkType ? k : never;
  }[keyof T];

  export type Props<T> = Pick<T, propertyKeys<T>>;
  export type Links<T> = Pick<T, linkKeys<T>>;
}