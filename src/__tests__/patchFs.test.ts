import { resolvePathsInPatchFile } from "../patchFs"
describe("resolvePathsInPatchFile", () => {
  it("works", () => {
    expect(
      resolvePathsInPatchFile(
        "/user/steve/code/project",
        "/user/steve/code/project/subproject",
        examplePatchFile,
      ),
    ).toBe(expectedPatchFile)
  })
})

const examplePatchFile = `diff --git a/node_modules/left-pad/index.js b/node_modules/left-pad/index.js
index 6b56df3..7b332b2 100644
--- a/node_modules/left-pad/index.js
+++ b/node_modules/left-pad/index.js
@@ -33,7 +33,7 @@ function leftPad (str, len, ch) {
   while (true) {
     // add \`ch\` to \`pad\` if \`len\` is odd
     if (len & 1) pad += ch;
-    // devide \`len\` by 2, ditch the fraction
+    // devide \`len\` by 2, ditch the patch-package
     len >>= 1;
     // "double" the \`ch\` so this operation count grows logarithmically on \`len\`
     // each time \`ch\` is "doubled", the \`len\` would need to be "doubled" too
`

const expectedPatchFile = `diff --git a/node_modules/left-pad/index.js b/node_modules/left-pad/index.js
index 6b56df3..7b332b2 100644
--- a/subproject/node_modules/left-pad/index.js
+++ b/subproject/node_modules/left-pad/index.js
@@ -33,7 +33,7 @@ function leftPad (str, len, ch) {
   while (true) {
     // add \`ch\` to \`pad\` if \`len\` is odd
     if (len & 1) pad += ch;
-    // devide \`len\` by 2, ditch the fraction
+    // devide \`len\` by 2, ditch the patch-package
     len >>= 1;
     // "double" the \`ch\` so this operation count grows logarithmically on \`len\`
     // each time \`ch\` is "doubled", the \`len\` would need to be "doubled" too
`
