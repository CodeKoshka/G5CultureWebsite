
const esprima = require('esprima');


function checkJavaCode(javaCode) {
    try {

        const parsedCode = esprima.parse(javaCode, { tolerant: true });


        return { success: true, message: 'Java code is syntactically correct' };
    } catch (error) {

        return { success: false, message: `Syntax Error: ${error.message}` };
    }
}

const javaCode = `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`;

const result = checkJavaCode(javaCode);

console.log(result);