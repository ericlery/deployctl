// Copyright 2021 Deno Land Inc. All rights reserved. MIT license.

// std
export {
  basename,
  dirname,
  extname,
  fromFileUrl,
  globToRegExp,
  isGlob,
  join,
  normalize,
  relative,
  resolve,
  toFileUrl,
} from "https://deno.land/std@0.170.0/path/mod.ts";
export {
  bold,
  cyan,
  green,
  magenta,
  red,
  yellow,
} from "https://deno.land/std@0.170.0/fmt/colors.ts";
export { parse } from "https://deno.land/std@0.195.0/flags/mod.ts";
export { TextLineStream } from "https://deno.land/std@0.170.0/streams/text_line_stream.ts";
export * as JSONC from "https://deno.land/std@0.170.0/encoding/jsonc.ts";

// x/semver
export {
  gte as semverGreaterThanOrEquals,
  valid as semverValid,
} from "https://deno.land/std@0.170.0/semver/mod.ts";

// x/wait
export { Spinner, wait } from "https://deno.land/x/wait@0.1.12/mod.ts";
