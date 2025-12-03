import * as readline from 'readline';

export class Input {
    private static rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    static readVariables(question: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    static close(): void {
        this.rl.close();
    }
}