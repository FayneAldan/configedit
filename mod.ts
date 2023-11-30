import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";
import openConfigEdit from "./src/configEdit.ts";

export default openConfigEdit;

if (import.meta.main) {
  const { args, options } = await new Command()
    .name("ConfigEdit")
    .version("1.0.2")
    .option("-s, --schema <path:string>", "JSON Schema path")
    .arguments("<config...>")
    .parse(Deno.args);

  openConfigEdit({
    schemaPath: options.schema,
    configPath: args[args.length - 1],
  });
}
