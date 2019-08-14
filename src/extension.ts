import * as vscode from 'vscode';
const child_process = require('child_process');


export function activate(context: vscode.ExtensionContext) {

  context.subscriptions.push(vscode.commands.registerCommand('extensions.readPid', readPid));

  async function readPid() {
    let pid = child_process.execSync(`pidof your_exe`);
    vscode.window.showInformationMessage('pidof your_exe = ' + pid.toString());
    return String(pid);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}

