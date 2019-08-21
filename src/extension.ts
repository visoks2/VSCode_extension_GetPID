import * as vscode from 'vscode';
const child_process = require('child_process');

export function activate(context: vscode.ExtensionContext) {

  context.subscriptions.push(vscode.commands.registerCommand('ReadPid', readPid));
  async function readPid() {
    const asd = vscode.workspace.getConfiguration().get('ReadPid.AppName');

    let pid = child_process.execSync(`pidof ${asd} ;`);
    var str = pid.toString();
    vscode.window.showInformationMessage(`pidof ${asd} = ` + str);
    var pids = str.split(' ');
    var selectedValue = "";
    if (pids.length > 1) {
      await vscode.window.showQuickPick(pids).then(value => {
          if (!value) return;
          selectedValue = value;
      });
      return selectedValue;
    }
    else {
      return str;
    }
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}

