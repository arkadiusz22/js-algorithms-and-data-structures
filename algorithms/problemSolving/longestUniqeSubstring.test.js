import { longestUniqeSubstring } from "./longestUniqeSubstring";
import { describe, expect, test } from "@jest/globals";

describe.only("longestUniqeSubstring", () => {
  // ${""}            | ${""}
  //
  // ${"abcdbea"}     | ${"cdbea"}
  // ${"abccabcabcc"} | ${"abc"}
  //   ${"ab"}  | ${"ab"}
  test.each`
    text          | expected | longestString
    ${"aba"}      | ${2}     | ${"ab"}
    ${"aaaabaaa"} | ${2}     | ${"ab"}
  `("should return $expected as longest uniqe substring in $text", ({ text, expected }) => {
    expect(longestUniqeSubstring(text)).toBe(expected);
  });
});
