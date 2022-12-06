const filePath: string = Deno.args[0];

if (!filePath) {
  console.error("未指定 markdown 文件！");
  Deno.exit(1);
}

const markdown: string = Deno.readTextFileSync(filePath);

console.log("读取 markdown 内容：\n", markdown);
