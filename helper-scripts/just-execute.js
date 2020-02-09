/** 
 * Helper script that
 * 
 * - compiles rust file binary
 * - executes it
 * - deletes the binary
 * 
 */

console.clear ();
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
  const source = process.argv[2];
  const currentDir = process.env.INIT_CWD;

  if (!source) throw Error ('Please specify source');

  const sourceParts = source.split ('.');
  const sourceExtension = sourceParts[1];
  const binaryName = sourceParts[0].replace ('^\.?\/?', '');
  if (sourceExtension !== 'rs') throw Error ('Not a rust file');

  const commands = [
    `cd ${currentDir}`,
    `rustc ${source}`,
    `./${binaryName}`,
    `rm ./${binaryName}`,
  ];
  const compileExecDispose = commands.join ('\n');

  const rustOutput = await exec (compileExecDispose);

  console.clear ();
  console.log (['', ...commands].join ('\n-> '), '\n');
  console.log (rustOutput);
}) ();
