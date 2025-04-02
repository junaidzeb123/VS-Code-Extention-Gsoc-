import { log } from 'console';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "helloworld" is now active!');
	context.subscriptions.push(vscode.commands.registerCommand('helloworld.junaid', () => {
		vscode.window.showInformationMessage('Junaid zeb!');
	}))


	context.subscriptions.push(
		vscode.commands.registerCommand("helloworld.cmd", async() => {
			const res = await vscode.window.showInformationMessage("My 2nd command!", "hello", "noto helo");
			console.log(res);
			
		}));
}

export function deactivate() {
}
