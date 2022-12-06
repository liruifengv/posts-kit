import {
  Input,
  Secret,
} from "https://deno.land/x/cliffy@v0.25.5/prompt/mod.ts";

const filePath: string = Deno.args[0];

if (!filePath) {
  throw Error("Not found args as the file path");
}

const markdown: string = Deno.readTextFileSync(filePath);

console.log("The markdown content is: \n", markdown);

const username: string = await Input.prompt({
  message: "Please input a username:",
  default: "",
});

if (!username) {
  throw Error("Username is required!");
}

const password: string = await Secret.prompt({
  message: "Please input a password:",
  default: "",
});

if (!password) {
  throw Error("Password is required!");
}

console.log("Starting Login~");
