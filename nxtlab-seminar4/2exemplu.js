class Software {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running...`);
  }
}

class Browser extends Software {
  #lista_plugins = [];

  instaleazaPlugin(...plugins_test) {
    console.log("Install plugins...");
    for (const elem of plugins_test) {
      this.#lista_plugins.push(elem);
      console.log(`${elem.name} was installed`);
    }
    console.log("Finished");
  }

  afiseazaPluginuri() {
    for (const plugin of this.#lista_plugins) {
      plugin.showeditor();
    }
  }
}

class PluginCustom extends Software {
  #autor;

  constructor(name, autor) {
    super(name);
    this.#autor = autor;
  }

  get autor() {
    return this.#autor;
  }

  showeditor() {
    console.log(` for ${this.name}, author is ${this.autor}. Cheers! `);
  }
}

const plugin1 = new PluginCustom("plugin1", "autor1");
const plugin2 = new PluginCustom("plugin2", "autor2");
const plugin3 = new PluginCustom("plugin3", "autor3");

let browserul_meu = new Browser("opera");
browserul_meu.instaleazaPlugin(plugin1, plugin2, plugin3);

browserul_meu.afiseazaPluginuri();
