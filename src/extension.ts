import * as vscode from 'vscode';
const child_process = require('child_process');


export function activate(context: vscode.ExtensionContext) {

  context.subscriptions.push(vscode.commands.registerCommand('ReadPid', readPid));
  async function readPid() {
    const asd = vscode.workspace.getConfiguration().get('ReadPid.AppName');

    let pid = child_process.execSync(`pidof ${asd}`);
    vscode.window.showInformationMessage(`pidof ${asd} = ` + pid.toString());
    return String(pid);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}

