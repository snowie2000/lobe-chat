import RegExp from 'regexp-polyfill';

export const PLUGIN_SCHEMA_SEPARATOR = '____';
export const PLUGIN_SCHEMA_API_MD5_PREFIX = 'MD5HASH_';

export const ARTIFACT_TAG = 'lobeArtifact';
export const ARTIFACT_THINKING_TAG = 'lobeThinking';

// https://regex101.com/r/TwzTkf/2

export const ARTIFACT_TAG_REGEX = new RegExp(
  '<lobeArtifact\\b[^>]*>(?<content>[\\S\\s]*?)(?:<\\/lobeArtifact>|$)',
);
// /<lobeArtifact\b[^>]*>(?<content>[\S\s]*?)(?:<\/lobeArtifact>|$)/;

// https://regex101.com/r/r9gqGg/1
export const ARTIFACT_TAG_CLOSED_REGEX = new RegExp(
  '<lobeArtifact\\b[^>]*>([\\S\\s]*?)<\\/lobeArtifact>',
); // /<lobeArtifact\b[^>]*>([\S\s]*?)<\/lobeArtifact>/;

// https://regex101.com/r/AvPA2g/1
export const ARTIFACT_THINKING_TAG_REGEX = new RegExp(
  '<lobeThinking\\b[^>]*>([\\S\\s]*?)(?:<\\/lobeThinking>|$)',
); // /<lobeThinking\b[^>]*>([\S\s]*?)(?:<\/lobeThinking>|$)/;

export const THINKING_TAG_REGEX = new RegExp('<think\\b[^>]*>([\\S\\s]*?)(?:<\\/think>|$)'); // /<think\b[^>]*>([\S\s]*?)(?:<\/think>|$)/;
