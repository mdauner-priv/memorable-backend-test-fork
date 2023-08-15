export enum ErrorCode {
    UNAUTHORIZED = "UNAUTHORIZED",
    FORBIDDEN = "FORBIDDEN",
    NOT_FOUND = "NOT_FOUND",
    BAD_REQUEST = "BAD_REQUEST",
    BAD_USER_INPUT = "BAD_USER_INPUT",
    CONFLICT = "CONFLICT",
    TOO_MANY_REQUEST = "TOO_MANY_REQUEST",
    DATABASE_ERROR = "DATABASE_ERROR",
    INTERNAL = "INTERNAL",
}

export enum ErrorMsg {
    USER_NOT_HAVE_BUSINESS_ACCOUNT = "USER_NOT_HAVE_BUSINESS_ACCOUNT",
    USER_ALREADY_HAS_BUSINESS_ACCOUNT = "USER_ALREADY_HAS_BUSINESS_ACCOUNT",
    CAN_NOT_DELETE_OWN_USER = "CAN_NOT_DELETE_OWN_USER",
    CAN_NOT_CANCEL_COMPLETED_BUSINESS_ACCOUNT = "CAN_NOT_CANCEL_VALID_BUSINESS_ACCOUNT",
    NOT_COMPATIBLE_ASSETS_TO_ACTIVATE = "NOT_COMPATIBLE_ASSETS_TO_ACTIVATE",
    USER_NOT_HAVE_BRANDS = "USER_NOT_HAVE_BRANDS",
    USER_NOT_HAVE_ACCESS_TO_BRAND = "USER_NOT_HAVE_ACCESS_TO_BRAND",
    ERROR_SETTING_TOKEN_TO_BUSINESS_ACCOUNT = "ERROR_SETTING_TOKEN_TO_BUSINESS_ACCOUNT",
    TAG_FILTER_MANDATORY = "TAG_FILTER_MANDATORY",
    AD_PROFILE_NOT_FOUND = "AD_PROFILE_NOT_FOUND",
    ERROR_SETTING_ASSETS_TO_BRAND = "ERROR_SETTING_ASSETS_TO_BRAND",
    INVITATION_EMAIL_MISMATCH = "INVITATION_EMAIL_MISMATCH",
    INVITATION_CODE_ALREADY_USED = "INVITATION_CODE_ALREADY_USED",
    INVITATION_CODE_EXPIRED = "INVITATION_CODE_EXPIRED",
    INVITATION_CODE_NOT_FOUND = "INVITATION_CODE_NOT_FOUND",
    USER_NOT_EXIST = "USER_NOT_EXIST",
    EMAIL_ALREADY_IN_USE = "EMAIL_ALREADY_IN_USE",
    PASSWORD_DO_NOT_MATCH = "PASSWORD_DO_NOT_MATCH",
    BRAND_NOT_FOUND = "BRAND_NOT_FOUND",
    FOLDER_NOT_FOUND = "FOLDER_NOT_FOUND",
    FILE_FORMAT_NOT_SUPPORTED = "FILE_FORMAT_NOT_SUPPORTED",
    LOGO_MUST_BE_IMAGE = "LOGO_MUST_BE_IMAGE",
    NOT_ENOUGH_PERMISSIONS = "NOT_ENOUGH_PERMISSIONS",
    AD_ACCOUNT_NOT_FOUND = "AD_ACCOUNT_NOT_FOUND",
    SOCIAL_ACCOUNT_NOT_FOUND = "SOCIAL_ACCOUNT_NOT_FOUND",
    FACEBOOK_GET_AD_ACCOUNTS_FAILED = "FACEBOOK_GET_AD_ACCOUNTS_FAILED",
    OAUTH_TOKEN_FETCH_FAILED = "OAUTH_TOKEN_FETCH_FAILED",
    PASSWORD_LENGTH_ERROR = "PASSWORD_LENGTH_ERROR",
    PASSWORD_TOO_WEAK = "PASSWORD_TOO_WEAK",
    FIELD_STRING_INVALID = "FIELD_STRING_INVALID",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}
