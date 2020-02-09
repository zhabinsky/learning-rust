/** 
 * Helper script that
 * 
 * - compiles rust file binary
 * - executes it
 * - deletes the binary
 * 
 */
const source = process.argv[2];
const currentDir = process.env.INIT_CWD;
const {exec: terminal} = require ('child_process');

function exec (command) {
  return new Promise ((resolve, reject) => {
    terminal (command, (error, stdout, stderr) => {
      if (error) {
        reject (error);
        return;
      }
      resolve (stdout.trim ());
    });
  });
}

(async () => {
  if (!source) throw Error ('Please specify source');

  const sourceParts = source
    .replace ('^\.\/', '')
    .split ('.')
    .filter (e => e.length > 0);
  const sourceExtension = sourceParts[1];
  const pathParts = sourceParts[0].split ('/');
  const binaryName = pathParts[pathParts.length - 1];

  if (sourceExtension !== 'rs') throw Error ('Not a rust file');

  const commands = [
    `cd ${currentDir}`,
    `rustc ${source} && ./${binaryName} && rm ./${binaryName}`,
    ``,
  ];

  const compileExecDispose = commands.join ('\n');
  console.log (commands.map (e => `> ${e}`).join ('\n'), '\n');
  console.log (await exec (compileExecDispose));
}) ();
