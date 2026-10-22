const majorVersion = Number(process.versions.node.split(".")[0]);

if (majorVersion < 18) {
  console.error(
    `The built-in test runner requires Node.js 18 or newer. Current version: ${process.version}. Switch to Node.js 20 and rerun npm test.`
  );
  process.exit(1);
}
