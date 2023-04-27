import { visit } from "../deps.ts";
import type { Plugin, Root } from "../deps.ts";

/**
 * Replaces non-breaking spaces with whitespace
 */
const rehypeNormalizeWhitespace: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, "text", (node) => {
      node.value = node.value.replaceAll(" ", " ");
    });
  };
};

export default rehypeNormalizeWhitespace;
